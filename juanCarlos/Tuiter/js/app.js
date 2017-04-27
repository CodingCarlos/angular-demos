angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "views/tuit-list.html",
            controller: 'TuitList',
            controllerAs: 'TuitList'
		})
		.when("/user", {
			templateUrl: "views/user-list.html",
            controller: 'UserList',
            controllerAs: 'UserList'
		})
		.when("/user/:id", {
			templateUrl: "views/user.html",
			controller: 'User',
            controllerAs: 'User'
		})
		.otherwise({
			templateUrl: "views/none.html"
		});
});