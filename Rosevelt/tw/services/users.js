angular.module("app").service("users", users);

function users() {
	
	var users = {
		list: [
			{
				name: 'carlos',
				bio: 'bio 01'
			},
			{
				name: 'pedro',
				bio: 'bio 02'
			},
			{
				name: 'carol',
				bio: 'bio 03'
			},
		],

		//metodos
		find: find
		
	};

	function find(name) {
		for(var i=0; i< list.length ; i++){
			if (list[i].name === name){
				return list[i];
			}
		}
	}
	return users;

}