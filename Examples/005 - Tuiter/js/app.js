angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "views/tuit-list.html",
            controller: 'TuitListController',
            controllerAs: 'tl'
		})
		.when("/user", {
			templateUrl: "views/user-list.html",
            controller: 'UserListController',
            controllerAs: 'ul'
		})
		.when("/user/:name", {
			templateUrl: "views/user.html",
			controller: 'UserController',
            controllerAs: 'User'
		})
		.otherwise({
			templateUrl: "views/none.html"
		});
});