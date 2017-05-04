/*angular.module('app', ['ngRoute']);
angular.module('app').config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/tuit-list.html",
            controller: "tuitList",
            controllerAs: "tuitList"
        })
        .when("/users", {
            templateUrl: "views/users-list.html",
            controller: "users",
            controllerAs: "users"
        })
        .when("/user/:name", {
            templateUrl: "views/user.html",
            controller: "user",
            controllerAs: "user"
        })
        .when("/addTuit", {
            templateUrl: "views/add-tuit.html",
            controller: "addTuit",
            controllerAs: "addTuit"
        })
        .otherwise({
            templateUrl: "views/404.html"
        });
});*/

//
angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                views: {
                    "topbar": {
                        templateUrl: "views/topbar.html"
                    },
                    "content": {
                        templateUrl: "views/tuit-list.html"
                            //controlador
                    },
                    "footer": {
                        templateUrl: "views/footer.html"
                    }

                },
                viewCache: true,
                abstract: true
            })
            .state('home.users', {
                url: "/",
                views: {
                    "content": {
                        templateUrl: "views/users-list.html",
                        controller: "users",
                        controllerAs: "users"
                    }
                }

            })
            .state('home.addTuit', {
                url: "/addTuit",
                views: {
                    "content": {
                        templateUrl: "views/add-tuit.html",
                        controller: "addTuit",
                        controllerAs: "addTuit"
                    }
                }

            })

    });




