import button from "./buttons";

function toDoComponent(name, date, desc, priority) {
	let todo = document.createElement("div");
	todo.classList.add("todo");

	let checkBubble = document.createElement("div");
	checkBubble.classList.add("check-bubble");

	let title = document.createElement("h3");
	title.innerText = name;

	let due = document.createElement("p");
	due.innerText = date;

	let description = document.createElement("p");
	description.innerText = desc;

	todo.append(checkBubble);
	todo.append(title);
	todo.append(due);

	return todo;
}

export { toDoComponent };
