angular.module("app").service("users", users);

function users() {
	
	var users = {
		list: [
			{
				name: 'a',
				bio: 'dvdsv'
			},
			{
				name: 'b',
				bio: 'dvdsv'
			},
			{
				name: 'c',
				bio: 'dvdsv'
			},
		],

		//metodos
		find: find
		
	};
	
	

	function find(user){
		tuits.list.push({text:tuit,user:"pep"})
	}
	return users;

}