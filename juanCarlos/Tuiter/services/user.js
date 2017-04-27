angular.module("app").service("userService", userService);

function userService() {
	
	var users = {
		list: [
			{
                id: 1,
                name: 'CodingCarlos (User) - 1',
                bio: 'Soy yo, el loco de la barba - 1',
                pic: 'https://avatars3.githubusercontent.com/u/7394623?v=3&s=40'
			},
            {
                id: 2,
                name: 'CodingCarlos (User) - 2',
                bio: 'Soy yo, el loco de la barba - 2',
                pic: 'https://docs.angularjs.org/img/angularjs-for-header-only.svg'
			},           
		],
		add: add
	};
	
	return users;


	function add(name, bio) {

		var newUser = {
			id: id,
            name: name,
			bio: bio,
            pic: pic
		};

		users.list.push(newUser);

		return true;
	}
}