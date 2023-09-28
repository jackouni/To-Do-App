import { todoFactory } from "../objects/todo-object";
import { renderTodos } from "../components/TodoSection";

function addTodo() {
	console.log("addTodo() invoked");
	let form = document.getElementById("todoForm");
	let todoTitle = document.getElementById("title").value;
	let dateInput = document.getElementById("date").value;
	let descInput = document.getElementById("desc").value;

	form.remove();
	todoFactory(todoTitle, dateInput, descInput);
	renderTodos();
}

export { addTodo };
