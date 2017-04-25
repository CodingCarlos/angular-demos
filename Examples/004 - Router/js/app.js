angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "views/main.html"
		})
		.when("/red", {
			templateUrl: "views/red.html"
		})
		.when("/green", {
			templateUrl: "views/green.html"
		})
		.when("/color/:name", {
			templateUrl: "views/none.html",
			controller: 'DemoController'
		})
		.otherwise({
			templateUrl: "views/none.html"
		});
});