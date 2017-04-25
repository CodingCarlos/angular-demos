angular.module('app').controller("User", User);

function User($scope, $routeParams, userService) {
	
	var self = this;
	
	console.log('User controller started');
    
    
    var self = this;
    
    //Obtenemos el parámetro del nombre de entrada
    self.name = $routeParams.name;
    console.log('El nombre es: ' + self.name);
    
    
    //Obtenemos el servicio
	self.service = userService;
    
    
    // Definimos un usuario vacio
    var user = {
		name: '',
		bio: ''
	};
	
    //Buscar el nombre de entrada entre los datos del Servicio
    
    
    // Mock
    user.name = self.name;
    user.bio = 'Bio - Prueba';
    
	self.user = user;

}