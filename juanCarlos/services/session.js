angular.module("app").service("session", sessionService);

function sessionService() {
	
	var session = {
		name: 'Mundo'
	};
	
	return session;

}