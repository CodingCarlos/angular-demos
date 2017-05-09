angular.module('app').controller("user", user);

function user( $stateParams, users) {
	
	var self = this;
	self.service = users;
	self.user = users.find($stateParams.name);
	console.log(self.user);

}