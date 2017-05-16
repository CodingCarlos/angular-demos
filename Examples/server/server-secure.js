var Restify = require('restify');

var jwt = require('jwt-simple'); 

var Jwt = require('restify-jwt');
var TOKEN_SECRET = 'secret';


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

server.post("/login", login);

server.get("/timeline", Jwt({secret: TOKEN_SECRET}), timeline);	
server.get("/users", Jwt({secret: TOKEN_SECRET}), users);
server.get("/user", Jwt({secret: TOKEN_SECRET}), users);
server.post("/user", Jwt({secret: TOKEN_SECRET}), addUser);
server.get("/user/:name", Jwt({secret: TOKEN_SECRET}), user);
server.post("/tuit", Jwt({secret: TOKEN_SECRET}), addTuit);


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

var tuits = [
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
];

var lastId = 1234;

// uid: 123
// pass: dummy
function login(req, res, next) {

	if(req.body.pass == 'dummy') {

		var tkn = jwt.encode({sub: req.body.uid}, TOKEN_SECRET);
		
		console.log(req.body.uid + ':' + tkn);
		
		res.send({token: tkn});
	} else {
		res.send(403, '{status: "error", error: "Bad authentication"}');
	}

}


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

	res.send(tuits);

}

function addUser(req, res, next) {

	var usr = {
		name: req.body.name || '',
		pic: req.body.pic || '',
		bio: req.body.bio || ''
	};

	users.unshift(usr);

	res.send(200, usr);
	// ???
}

function addTuit(req, res, next) {

	lastId++;
	
	var twt = {
		user: req.body.name || '',
		text: req.body.pic || '',
		id: lastId
	};

	users.unshift(twt);

	res.send(200, twt);
}
