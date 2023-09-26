import { todoFactory } from "../objects/todo-object";

function addTodo() {
	console.log("addTodo() invoked");
	let form = document.getElementById("todoForm");
	let todoTitle = document.getElementById("title").value;

	form.remove();
	todoFactory(todoTitle);
}

export { addTodo };
