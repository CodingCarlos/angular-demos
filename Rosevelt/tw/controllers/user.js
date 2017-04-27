angular.module('app').controller("user", user);

function user( $routeParams, users) {
	
	var self = this;
	self.service = users;
	self.user = users.find($routeParams.name);
	console.log(self.user);

}