angular.module('app').controller("tuitList", tuitList);

function tuitList(tuit) {
	
	var self = this;
	self.service = tuit;

}