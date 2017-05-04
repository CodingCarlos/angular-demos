angular.module("app").service("user", userService);

function userService() {
	
	var users = {
		list: [
			{
				name: 'CodingCarlos',
				pic: 'https://pbs.twimg.com/profile_images/648425461215793152/TbmUPkW2_400x400.jpg',
				bio: 'Barbudo, frugal, soez y tabernario'
			},
			{
				name: 'PacoSantos',
				pic: 'https://s.gravatar.com/avatar/9dc7e995bc9adfaa63544795e9015b41?size=100&default=retro',
				bio: 'Una persona totalmente real'
			}          
		],
		add: add,
		find: find
	};
	
	return users;


	function add(name, pic, bio) {

		var newUser = {
			name: name || '',
			pic: pic || '',
			bio: bio || ''
		};

		users.list.push(newUser);

		return true;
	}

	function find(username) {

		// Go over the users array
		for (var i=0; i < users.list.length; i++) {

			console.log(users.list[i].name);

			// If name == to received name
			if (users.list[i].name == username) {

				console.log('wololooooo');

				// Set the user
				return users.list[i];
			}
		}
	}
}