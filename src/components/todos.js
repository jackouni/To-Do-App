import button from "./buttons";
import removeToDo from "../logic/remove-todo";

// Stores todos we've created.
let todos = [];

// Creates a 'todo' component to be displayed in the UI.
function todoComponent(name, date, desc, priority, index) {
	let todo = document.createElement("div");
	todo.classList.add("todo");
	// This 'todo-index' id property will used to identify the todo element we want to remove from the UI.
	todo.id = `todo-${index}`;

	let checkBubble = button("", "", "click", removeToDo);
	checkBubble.classList.add("check-bubble");
	// This 'index' property will be used to identify which element's 'remove' button is being clicked.
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

	todos.push(todo);

	return todo;
}

export { todoComponent, todos };
