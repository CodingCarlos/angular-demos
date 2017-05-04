angular.module('app').controller("UserController", User);

function User($routeParams, user) {
	
	var self = this;
	
	// Get user name
	self.name = $routeParams.name;    
	
	self.service = user;
	
	self.user = self.service.find(self.name);	

}