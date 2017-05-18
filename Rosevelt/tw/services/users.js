angular.module("app").service("users", users);

function users(api) {

    var users = {
        list: [],

        //metodos
        find: find,
        get: get

    };

    function get() {
        api.get(api.URL + '/users', function(data) {
                users.list = data;
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
