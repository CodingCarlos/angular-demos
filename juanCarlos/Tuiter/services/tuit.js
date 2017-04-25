angular.module("app").service("tuitService", tuitService);

function tuitService() {
	
	var tuits = {
		list: [
			{
                user: 'CodingCarlos - 1',
                text: 'Hola, buenos días - 1'
			},
            {
                user: 'CodingCarlos - 2',
                text: 'Hola, buenos días - 2'
			},           
		],
		add: add
	};
	
	return tuits;


	function add(user, text) {

		var newTuit = {
			user: user,
			text: text
		};

		tuits.list.push(newTuit);

		return true;
	}
}