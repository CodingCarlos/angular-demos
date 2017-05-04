angular.module('app').controller("UserListController", UserListCtrl);

function UserListCtrl(user) {
	
	var self = this;
	
	self.service = user;

}