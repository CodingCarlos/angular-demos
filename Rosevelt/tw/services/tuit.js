angular.module("app").service("tuit", tuitservice);

function tuitservice() {
	
	var tuits = {
		list: [
			{
				text: 'primer tuit',
				user: ''
			},
			{
				text: 'segundo tuit',
				user: ''
			},
			{
				text: 'tercer tuit',
				user: ''
			},
		],

		//metodos
		add: add
		
	};
	
	function add(tuit){
		tuits.list.push({text:tuit,user:"pep"})
	}
	return tuits;

}