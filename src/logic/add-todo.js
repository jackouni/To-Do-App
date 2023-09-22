import { todoFactory } from "../objects/todo-object";
import { TodoComponent, allTodoElements } from "../components/todos";
import { allProjectElements } from "../components/projects";
import { getCurrentProject, currentProjectIndex } from "./project-navigation";
import { projectFactory, projectObjects } from "../objects/project-object";

export default function addToDo() {
	let form = document.getElementById("addToDoForm");

	let todoTitle = document.getElementById("title").value;
	let todoDate = document.getElementById("due").value;
	let todoDesc = document.getElementById("desc").value;
	let todoPriority = document.querySelector('input[type="radio"]:checked');
	let todoIndex = allTodoElements.length;

	console.log(getCurrentProject());
	console.log(currentProjectIndex());

	let urgencyMarker = null;
	if (todoPriority.id === "priority-low") {
		urgencyMarker = "!";
	}
	if (todoPriority.id === "priority-med") {
		urgencyMarker = "!!";
	}
	if (todoPriority.id === "priority-hi") {
		urgencyMarker = "!!!";
	}

	// Create 'todo' object.
	let newTodo = todoFactory(todoTitle, todoDate, todoDesc, todoPriority, todoIndex);

	// Creates a 'todo' element to be displayed in the UI.
	let newTodoElement = TodoComponent(
		todoTitle,
		todoDate,
		todoDesc,
		urgencyMarker,
		todoIndex
	);

	// Store todo in the correlating project's array.
	projectObjects[currentProjectIndex()].storeTodo(newTodo);

	console.log(projectObjects[currentProjectIndex()].getTodos());

	// Appends 'todo' element to 'task' section of UI.
	const taskSection = document.getElementById("tasks");
	taskSection.append(newTodoElement);

	form.remove();
}
