angular.module("app").service("todo", todoService);

function todoService() {
	
	var todo = {
		list: [
			{
				text: 'Do a great ToDo List app',
				done: true
			},
		],
		add: add,
		update: update,
		rem: rem
	};
	
	return todo;


	function add(text) {

		var newTodo = {
			text: text,
			done: false
		};

		todo.list.push(newTodo);

		return true;
	}

	function update(text, newText) {

		var updated = false;

		for (var i = 0; i < todo.list.length; i++) {
			if(todo.list[i].text == text) {

				todo.list[i].text = newText;
				
				updated = true;
				break;
			}
		}

		return updated;
	}

	function rem(text) {

		var removed = false;

		for (var i = 0; i < todo.list.length; i++) {
			if(todo.list[i].text == text) {

				todo.list.splice(i, 1);
				
				removed = true;
				break;
			}
		}

		return removed;
	}

}