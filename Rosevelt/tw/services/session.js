angular.module("app").service("session", sessionService);

function sessionService(api) {

    var session = {
        name: '',
        pic: '',
        bio: '',
        login: login
    };

    function login(user, pass) {

        api.post(api.URL + '/login', { uid: user, pass: pass }, function(data) {
            alert("xx");
            api.setToken(data.token);

        });

    }

    return session;

}
