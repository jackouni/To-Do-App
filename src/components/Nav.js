import { projectForm } from "./projectForm";

function topNavSection() {
	const topNav = document.createElement("section");
	topNav.classList.add("nav-section");
	topNav.id = "topNav";

	// 'All Todos' Nav Option
	const allTodos = document.createElement("div");
	allTodos.classList.add("nav-option");
	allTodos.id = "allTodos";

	const allTodosTitle = document.createElement("h3");
	allTodosTitle.classList.add("nav-title");
	allTodosTitle.innerText = "All Todos";
	allTodos.append(allTodosTitle);

	// 'Misc Todos' Nav Option
	const miscTodos = document.createElement("div");
	miscTodos.classList.add("nav-option");
	miscTodos.id = "miscTodos";

	const miscTodosTitle = document.createElement("h3");
	miscTodosTitle.classList.add("nav-title");
	miscTodosTitle.innerText = "misc";
	miscTodos.append(miscTodosTitle);

	// 'Add Project' Nav Option
	const addProject = document.createElement("div");
	addProject.classList.add("nav-option");
	addProject.id = "addProject";

	const addProjectTitle = document.createElement("h3");
	addProjectTitle.classList.add("nav-title");
	addProjectTitle.innerText = "Add Project ";
	addProject.append(addProjectTitle);

	addProjectTitle.addEventListener("click", () => content.append(projectForm()));

	// Append all components to the topNav section.
	topNav.append(allTodos);
	topNav.append(miscTodos);
	topNav.append(addProject);

	return topNav;
}

function projectNavSection() {
	const projectNav = document.createElement("section");
	projectNav.classList.add("nav-section");
	projectNav.id = "projectNav";

	return projectNav;
}

export function nav() {
	const nav = document.createElement("nav");

	nav.append(topNavSection());
	nav.append(projectNavSection());

	return nav;
}
