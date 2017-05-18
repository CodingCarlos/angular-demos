angular.module('app').controller("login", login);

function login( $stateParams, session) {
	
	var self = this;
	self.service = session;

	self.login = function(user, pass) {
		self.service.login(user, pass);
	}

} 