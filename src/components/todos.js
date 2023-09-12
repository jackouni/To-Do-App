import button from "./buttons";
import removeToDo from "../logic/remove-todo";

// Creates a 'todo' component to be displayed in the UI.
function toDoComponent(name, date, desc, priority, index) {
	let todo = document.createElement("div");
	todo.id = `toDo-${index}`;
	todo.classList.add("todo");

	let checkBubble = button("", `check-bubble-${index}`, "click", removeToDo);
	checkBubble.classList.add("check-bubble");
	checkBubble.index = index;

	let title = document.createElement("h3");
	title.innerText = name;
	let due = document.createElement("p");
	due.innerText = date;

	let urgency = document.createElement("h3");
	urgency.innerText = priority;

	if (priority === "!") {
		urgency.classList.add("urgency-lo");
	}
	if (priority === "!!") {
		urgency.classList.add("urgency-med");
	}
	if (priority === "!!!") {
		urgency.classList.add("urgency-hi");
	}

	let description = document.createElement("p");
	description.innerText = desc;

	todo.append(checkBubble);
	todo.append(title);
	todo.append(due);
	todo.append(urgency);

	return todo;
}

export default toDoComponent;
