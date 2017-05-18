angular.module("app").service("tuit", tuitservice);

function tuitservice(api) {

    var tuits = {
        list: [],

        //metodos
        add: add,
        get: get

    };

     function get() {
        api.get(api.URL + '/timeline', function(data) {
                tuits.list = data;
        });

    }

    function add(tuit) {
        api.post(api.URL + '/tuit', { text: tuit, user: "pep" }, get)

        //.tuits.list.push({ text: tuit, user: "pep" })
    }

   
    

    return tuits;

}
