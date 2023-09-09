import buttons from "./buttons";
import form from "./forms";

// Components that will append to <header>
// Will append in array order.
let components = [
	buttons("Add Task", "addTask", "click", () => {
		content.append(form());
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
