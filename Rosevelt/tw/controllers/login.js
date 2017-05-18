angular.module('app').controller("login", login);

function login( $stateParams, session, $state) {
	
	var self = this;
	self.service = session;

	self.login = function(user, pass) {
		self.service.login(user, pass, function(result){

			if(result===true){
				$state.go('home.tuits');
			}

		});
	}

} 