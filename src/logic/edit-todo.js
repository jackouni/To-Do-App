import { getTodo } from "./todo-nav";
import { getProject } from "./project-nav";
import { renderTodos } from "../components/TodoSection";

export function editTodo(todoName, projectName) {
	console.log("editTodo() invoked");

	let form = document.getElementById("todoForm");
	let todoTitle = document.getElementById("title").value;
	let dateInput = document.getElementById("date").value;
	let descInput = document.getElementById("desc").value;
	let priorityInput = document.querySelector('input[type="radio"]:checked').value;

	let project = getProject(projectName);
	console.log(project);
	let todo = getTodo(project, todoName);

	todo.name = todoTitle;
	todo.due = dateInput;
	todo.desc = descInput;
	todo.priority = priorityInput;

	form.remove();
	renderTodos();
}
