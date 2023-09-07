import buttons from "./buttons";

// Components that will be appended to header.
// In order of appendage.
let components = [
	buttons("Remove Task", "removeTask"),
	buttons("Add Task", "addTask"),
];

// Loads entire <header>
function loadHeader() {
	const header = document.createElement("header");
	header.id = "header";

	for (let i = 0; i < components.length; i++) {
		header.append(components[i]);
	}

	return header;
}

export default loadHeader;
