// Creates a <nav> // Navigation for ToDo's & Projects.
function nav(titleName) {
	let nav = document.createElement("nav");
	let title = document.createElement("h2");
	title.innerText = titleName;
	nav.append(title);

	return nav;
}

// Creates a <section> // Section with Todo's list.
function section(titleName) {
	let section = document.createElement("section");

	let title = document.createElement("h2");
	title.innerText = titleName;
	section.append(title);

	return section;
}

// Components that will append to <main>
// Will append in array order.
let components = [nav("Navigation"), section("Today's Tasks")];

// Loads the entire <main> // Contains a <nav> + <section>.
function loadMain() {
	let main = document.createElement("main");

	// Components in 'components' array will append to main.
	for (let i = 0; i < components.length; i++) {
		main.append(components[i]);
	}

	return main;
}

export default loadMain;
