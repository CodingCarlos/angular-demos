angular.module('app').controller("TodoController", TodoController);

function TodoController(todo) {
	console.log('controller started');
	
	var self = this;
	
	self.service = todo;

	self.newTodo = '';
	self.updating = '';
	self.toUpdate = '';
	
	self.add = function() {
		self.service.add(self.newTodo);
		self.newTodo = '';
	};

	self.remove = function(todo) {
		if( confirm('Remove the todo?') ) {
			self.service.rem(todo);
		}
	};

	self.openUpdate = function(todo) {
		self.updating = todo;
		self.toUpdate = todo;
	};

	self.update = function() {
		if(self.toUpdate !== self.updating) {
			self.service.update(self.toUpdate, self.updating);
		}

		self.updating = '';
		self.toUpdate = '';
	};
}