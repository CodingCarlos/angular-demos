angular.module("app").service("users", users);

function users() {
	
	var users = {
		list: [
			{
				name: 'carlos',
				bio: 'Suspendisse augue sem, aliquam vel blandit nec, gravida vel enim. Mauris ac tellus vel tortor tempus bibendum.',
				pic: 'http://copicola.com/images/profile-pics/profile-pics-24.jpg'
			},
			{
				name: 'pedro',
				bio: 'bio 02',
				pic:'http://www.hbc333.com/data/out/190/46874128-profile-pictures.png'
			},
			{
				name: 'carol',
				bio: 'Suspendisse augue sem, aliquam vel blandit nec, gravida vel enim. Mauris ac tellus vel tortor tempus bibendum.',
				pic:'https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg'
			},
		],

		//metodos
		find: find
		
	};

	function find(name) {
		for(var i=0; i< users.list.length ; i++){
			if (users.list[i].name === name){
				return users.list[i];
			}
		}
	}
	return users;

}