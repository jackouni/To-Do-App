import buttons from "./buttons";
import todoForm from "./todoForm";
import projectForm from "./projectForm";

// Components that will append to <header>
// Will append in array order.
let components = [
	buttons("Add Task", "addTask", "click", () => {
		content.append(todoForm());
	}),
	buttons("Add Project", "addProj", "click", () => {
		content.append(projectForm());
	}),
];

// Loads entire <header>
function loadHeader() {
	const header = document.createElement("header");
	header.id = "header";

	// Components in 'components' array will append to header.
	for (let i = 0; i < components.length; i++) {
		header.append(components[i]);
	}

	return header;
}

export default loadHeader;
