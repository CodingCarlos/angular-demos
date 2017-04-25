angular.module('app').controller("addTuit", addTuit);

function addTuit(tuit) {
	
	var self = this;
	self.newTuit = ' hola';

	self.addd = function() {
		tuit.add(self.newTuit);
		self.newTuit = '';

	};

	self.add = function() {
		self.service.add(self.newTodo);
		self.newTodo = '';
	};

}