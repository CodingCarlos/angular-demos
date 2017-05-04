angular.module('app').controller("TuitListController", TuitListCtrl);

function TuitListCtrl(tuit) {    
	
	var self = this;
	
	self.service = tuit;
	
}