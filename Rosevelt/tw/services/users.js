angular.module("app").service("users", users);

function users($http) {

    var users = {
        list: [],

        //metodos
        find: find,
        get: get

    };

    function get() {
        $http.get('http://192.168.1.20:3000/users')
            .then(function(data) {
                users.list = data.data;
            }, function(data, status, headers, config) {

            });

    }

    function find(name) {
        for (var i = 0; i < users.list.length; i++) {
            if (users.list[i].name === name) {
                return users.list[i];
            }
        }
    }
    return users;

}
