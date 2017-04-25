angular.module('app').controller("TuitList", TuitList);

function TuitList($scope, $routeParams, tuitService) {
	
	var self = this;
	
	console.log('TuitList controller started');
    
    
    var self = this;
	
	self.service = tuitService;
    
    /*
	self.newTodo = '';
	self.updating = '';
	self.toUpdate = '';
	
	self.add = function() {
		self.service.add(self.newTodo);
		self.newTodo = '';
	};
    */

}