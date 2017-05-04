angular.module("app").service("session", sessionService);

function sessionService() {
	
	var session = {
		name: 'CodingCarlos',
		pic: 'https://pbs.twimg.com/profile_images/648425461215793152/TbmUPkW2_400x400.jpg',
		bio: 'Barbudo, frugal, soez y tabernario'
	};
	
	return session;

}