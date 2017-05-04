angular.module("app").service("tuit", tuitService);

function tuitService() {
	
	var tuit = {
		list: [
			{
				user: 'CodingCarlos',
				text: 'Pues nos hemos hecho tuiter...'
			},
			{
				user: 'CodingCarlos',
				text: 'Además, en cero coma.'
			},
			{
				user: 'PacoSantos',
				text: 'Y funciona de lujo.'
			}
		],
		add: add
	};
	
	return tuit;


	function add(user, text) {

		var newTuit = {
			user: user,
			text: text
		};

		tuit.list.push(newTuit);

		return true;
	}
}