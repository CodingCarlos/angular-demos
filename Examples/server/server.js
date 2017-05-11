var Restify = require('restify');

// var Jwt = require('restify-jwt');
// var TOKEN_SECRET = 'secrettoken';


// var Network = require('./network/network.js');

var server = Restify.createServer();

Restify.CORS.ALLOW_HEADERS.push( 'authorization' );
server.use(Restify.CORS({ 
	headers: [ 
		'authorization'// , 
		// 'content-type', 
		// 'Access-Control-Request-Headers' 
	], 
	credentials: true,
	origins: ['*'] 
}));
server.use(Restify.fullResponse());

server.use(Restify.queryParser());

server.use(Restify.bodyParser({
    maxBodySize: 0,
    mapParams: false,
    mapFiles: true,
    keepExtensions: true,
    uploadDir: './public',
    // multiples: true,
    // hash: 'sha1'
 }));

// server.use(CookieParser.parse);


// Basic routing

server.get("/timeline", timeline);	
server.get("/users", users);
server.get("/user", users);
server.get("/user/:name", user);


server.listen(3000, function (err) {
    if (err)
        console.error(err);
    else
        console.log('App is ready at : localhost:3000');
        //console.log('App is ready at : ' + port)
});


var users = [
	{
		name: 'CodingCarlos',
		bio: 'Vulgar, barbudo, soez y tabernario',
		pic: 'https://pbs.twimg.com/profile_images/648425461215793152/TbmUPkW2_400x400.jpg'
	},
	{
		name: 'PacoSantos',
		bio: 'Una persona totalmente real, #NotABot',
		pic: 'https://pbs.twimg.com/profile_images/421024598360989696/ntPDXMke_400x400.jpeg'
	},
	{
		name: 'UlisesGascon',
		bio: 'Hago robots con node, y soy profe de javascript',
		pic: 'https://pbs.twimg.com/profile_images/710113259509121027/sC_itdIq_400x400.jpg'
	}
];

function users(req, res, next) {

	res.send(users);

}

function user(req, res, next) {

	var user = req.params.name.toUpperCase();

	var result = {},
		status = 404;

	for (var i = 0; i < users.length; i++) {
		if(users[i].name.toUpperCase() == user) {
			result = users[i];
			status = 200;
			break;
		}
	}

	res.send(status, result);
 }

function timeline(req, res, next) {

	res.send([
		{
			name: 'CodingCarlos',
			text: 'yeeeeeea!!!',
			id: 1234
		},
		{
			name: 'PacoSantos',
			text: 'Oye, que... esto es tuitel',
			id: 1233
		},
		{
			name: 'UlisesGascon',
			text: 'Se te fue, Carlos.',
			id: 1232
		},
		{
			name: 'UlisesGascon',
			text: '¿Un tuiter en angular?',
			id: 1231
		},
		{
			name: 'CodingCarlos',
			text: 'Pues aquí lo tienen, caballeros.',
			id: 1230
		}
	]);

}