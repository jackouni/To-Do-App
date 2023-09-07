function main() {
	let main = document.createElement("main");

	main.append(nav("Navigate"));
	main.append(section("To Do's"));

	console.log("<main> created");
	return main;
}

function nav(titleName) {
	let nav = document.createElement("nav");
	let title = document.createElement("h2");
	title.innerText = titleName;
	nav.append(title);

	return nav;
}

function section(titleName) {
	let section = document.createElement("section");

	let title = document.createElement("h2");
	title.innerText = titleName;
	section.append(title);

	return section;
}

function loadMain() {
	let main = document.createElement("main");

	main.append(nav("Navigation"));
	main.append(section("Today's Tasks"));
	return main;
}

export default loadMain;
