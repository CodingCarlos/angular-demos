angular.module("app").service("tuit", tuitservice);

function tuitservice($http) {

    var tuits = {
        list: [],

        //metodos
        add: add,
        get: get

    };

    function get() {

        $http.get('http://192.168.1.20:3000/timeline')
            .then(function(data) {
                tuits.list = data.data;
            })

    }

    /*            $http.get('api.whatever.com/thing')
        .then(function(data, status, headers, config) {
            // Success !!
        }, function(data, status, headers, config) {
            // Error !!
        );
    */


    function add(tuit) {
        tuits.list.push({ text: tuit, user: "pep" })
    }
    return tuits;

}
