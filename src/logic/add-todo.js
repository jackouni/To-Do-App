import { ToDo, ToDos } from "../objects/ToDo";
import todo from "../components/todos";

function addToDo() {
	let form = document.getElementById("addToDoForm");

	let toDoTitle = document.getElementById("title").value;
	let toDoDate = document.getElementById("due").value;
	let toDoDesc = document.getElementById("desc").value;
	let toDoPriority = document.querySelector('input[type="radio"]:checked');
	let toDoIndex = ToDos.length;

	let urgencyMarker = null;

	if (toDoPriority.id === "priority-low") {
		urgencyMarker = "!";
	}
	if (toDoPriority.id === "priority-med") {
		urgencyMarker = "!!";
	}
	if (toDoPriority.id === "priority-hi") {
		urgencyMarker = "!!!";
	}

	// Create 'todo' object that stores that "todo's" data.
	let newToDo = ToDo(toDoTitle, toDoDate, toDoDesc, toDoPriority, toDoIndex);

	// Creates a 'todo' component to be displayed in the UI.
	let newToDoComponent = todo(
		toDoTitle,
		toDoDate,
		toDoDesc,
		urgencyMarker,
		toDoIndex
	);

	// Appends 'todo' component to 'task' section of UI.
	const taskSection = document.getElementById("tasks");
	taskSection.append(newToDoComponent);

	console.log(`ToDo index = ${newToDo.getIndex()}`);

	form.remove();
}

export default addToDo;
