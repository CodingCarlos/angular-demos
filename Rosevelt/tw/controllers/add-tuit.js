angular.module('app').controller("addTuit", addTuit);

function addTuit(tuit) {
	
	var self = this;
	self.newTuit = '';

	self.add = function() {
		tuit.add(self.newTuit);
		//self.newTuit = '';
	};
}