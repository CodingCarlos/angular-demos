angular.module('app').controller("MyTask", MyTask);

function MyTask(nombreTask) {
	console.log('controller started');
	
	var self = this;

	self.service = nombreTask;
    
    self.anadir = function (){
        var e1 = {
        text: self.nombre,
        done: self.done
        };
        
    self.service.lista.push(e1);  
    }
}
