angular.module("app").service("nombreTask", serviceTask);

function serviceTask() {
	
	var tasks = {
        lista: [{
            text: "Hacer un listado de tareas",
            done: false
        }]   
    };
	
	return tasks;
}