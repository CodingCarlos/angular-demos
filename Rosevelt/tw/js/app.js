angular.module('app', ['ngRoute']);
angular.module('app').config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/tuit-list.html",
            controller: "tuitList",
            controllerAs: "tuitList"
        })
        .when("/users", {
            templateUrl: "views/users-list.html"
        })
        .when("/user", {
            templateUrl: "views/user.html"
        })
        .when("/addTuit", {
            templateUrl: "views/add-tuit.html",
            controller: "addTuit",
            controllerAs: "addTuit"
        })
        .otherwise({
			templateUrl: "views/404.html"
		});
});
