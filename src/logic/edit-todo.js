import { getTodoIndex } from "./todo-nav";
import { getProjectIndex } from "./project-nav";
import { renderTodos } from "../components/TodoSection";
import { allProjects } from "../objects/project-object";

export function editTodo(todoName, projectName) {
	console.log("editTodo() invoked");

	let form = document.getElementById("todoForm");
	let todoTitle = document.getElementById("title").value;
	let dateInput = document.getElementById("date").value;
	let descInput = document.getElementById("desc").value;
	let priorityInput = document.querySelector('input[type="radio"]:checked').value;

	let projectIndex = getProjectIndex(projectName);

	let todoIndex = getTodoIndex(projectIndex, todoName);

	let todo = allProjects[projectIndex].todos[todoIndex];

	todo.name = todoTitle;
	todo.due = dateInput;
	todo.desc = descInput;
	todo.priority = priorityInput;

	form.remove();
	localStorage.setItem("allProjects", JSON.stringify(allProjects));
	renderTodos();
}
