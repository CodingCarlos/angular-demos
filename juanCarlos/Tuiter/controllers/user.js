angular.module('app').controller("User", User);

function User($scope, $routeParams, userService) {
	
	var self = this;
	
	console.log('User controller started');
    
    
    var self = this;
    
    //Obtenemos el parámetro del nombre de entrada
    self.id = $routeParams.id;
    console.log('El id es: ' + self.id);
    
    
    //Obtenemos el servicio
	self.service = userService;
    
    
    // Definimos un usuario vacio
    var user = {
		name: '',
		bio: ''
	};
	
    //Buscar el nombre de entrada entre los datos del Servicio
    for (var i=0; i < self.service.list.length; i++) {
        if (self.service.list[i].id == self.id) {
            user.name = self.service.list[i].name;
            user.bio = self.service.list[i].bio;
            user.pic = self.service.list[i].pic;
        }
    }
    
	self.user = user;

}