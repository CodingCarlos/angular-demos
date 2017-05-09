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

                    "footer": {
                        templateUrl: "views/footer.html"
                    }

                },
                viewCache: true,
                abstract: true
            })
              .state('home.tuits', {
                url: "/",
                views: {
                    "content@": {
                        templateUrl: "views/tuit-list.html",
                        controller: "tuitList",
                        controllerAs: "tuitList"
                    }
                }

            })
            .state('home.users', {
                url: "/users",
                views: {
                    "content@": {
                        templateUrl: "views/users-list.html",
                        controller: "users",
                        controllerAs: "users"
                    }
                }

            })
               .state('home.user', {
                url: "/user/:name",
                views: {
                    "content@": {
                        templateUrl: "views/user.html",
                        controller: "user",
                        controllerAs: "user"
                    }
                }

            })
           
            .state('home.addTuit', {
                url: "/addTuit",
                views: {
                    "content@": {
                        templateUrl: "views/add-tuit.html",
                        controller: "addTuit",
                        controllerAs: "addTuit"
                    }
                }

            })

    });




