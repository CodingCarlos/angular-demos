angular.module("app").service("sessionService", sessionService);

function sessionService() {
	
	var session = {
		id: 3,
        name: 'UsuarioSession',
        bio: 'BioSession',
        pic: 'https://docs.angularjs.org/img/angularjs-for-header-only.svg'
	};
	
	return session;

}