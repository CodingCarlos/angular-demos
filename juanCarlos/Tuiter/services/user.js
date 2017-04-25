angular.module("app").service("userService", userService);

function userService() {
	
	var users = {
		list: [
			{
                name: 'CodingCarlos (User) - 1',
                bio: 'Soy yo, el loco de la barba - 1'
			},
            {
                name: 'CodingCarlos (User) - 2',
                bio: 'Soy yo, el loco de la barba - 2'
			},           
		],
		add: add
	};
	
	return users;


	function add(name, bio) {

		var newUser = {
			name: name,
			bio: bio
		};

		users.list.push(newUser);

		return true;
	}
}