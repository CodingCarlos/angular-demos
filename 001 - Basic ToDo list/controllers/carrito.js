angular.module('app').controller("MyCarrito", Carrito);

function Carrito(session) {
	console.log('controller started');
	
	var self = this;
	
	
	self.service = session;
	
	self.hola = function() {
		
		console.log('asdasd');
		
		alert('hola ' + self.service.name);
	}
	
}