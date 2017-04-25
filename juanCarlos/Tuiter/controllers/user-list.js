angular.module('app').controller("UserList", UserList);

function UserList($scope, $routeParams, userService) {
	
	var self = this;
	
	console.log('UserList controller started');
    
    
    var self = this;
	
	self.service = userService;

}