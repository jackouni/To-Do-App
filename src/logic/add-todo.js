import { todoFactory } from "../objects/todo-object";
import { TodoComponent, todoElements } from "../components/todos";

export default function addToDo() {
	let form = document.getElementById("addToDoForm");

	let todoTitle = document.getElementById("title").value;
	let todoDate = document.getElementById("due").value;
	let todoDesc = document.getElementById("desc").value;
	let todoPriority = document.querySelector('input[type="radio"]:checked');
	let todoIndex = todoElements.length;

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

	// Create 'todo' object that stores that "todo's" data.
	todoFactory(todoTitle, todoDate, todoDesc, todoPriority, todoIndex);

	// Creates a 'todo' element to be displayed in the UI.
	let newTodoElement = TodoComponent(
		todoTitle,
		todoDate,
		todoDesc,
		urgencyMarker,
		todoIndex
	);

	// Appends 'todo' element to 'task' section of UI.
	const taskSection = document.getElementById("tasks");
	taskSection.append(newTodoElement);

	form.remove();
}
