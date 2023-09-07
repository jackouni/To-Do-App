import buttons from "./buttons";

function loadHeader() {
	const header = document.createElement("header");
	header.id = "header";

	header.append(buttons("Add Task", "addTask"));
	header.append(buttons("Remove Task", "removeTask"));

	return header;
}

export default loadHeader;
