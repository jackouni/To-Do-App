import { ToDo, ToDos } from "../objects/ToDo";
import todo from "../components/todos";

function addToDo() {
	let form = document.getElementById("addToDoForm");

	let toDoTitle = document.getElementById("title").value;
	let toDoDate = document.getElementById("due").value;
	let toDoDesc = document.getElementById("desc").value;
	let toDoPriority = document.getElementById("priority").value;

	// Create 'todo' object that stores that "todo's" data.
	let newToDo = ToDo(toDoTitle, toDoDate, toDoDesc, toDoPriority);

	// Creates a 'todo' component to be displayed in the UI.
	let newToDoComponent = todo(toDoTitle, toDoDate, toDoDesc, toDoPriority);

	// Appends 'todo' component to 'task' section of UI.
	const taskSection = document.getElementById("tasks");
	taskSection.append(newToDoComponent);

	console.log(newToDo.index);
	form.remove();
}

export default addToDo;
