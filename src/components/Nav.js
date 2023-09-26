import { projectForm } from "./projectForm";
import { allProjects } from "../objects/project-object";

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

	addProjectTitle.addEventListener("click", () => {
		content.append(projectForm());
	});

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

export function renderProjects() {
	console.log("renderProjects() invoked");

	// Clears all project elements, so that they can be re-rendered (Lines 75 ➡️ 90)
	let allProjectElements = document.querySelectorAll(".project-nav-item");
	allProjectElements.forEach((element) => element.remove());

	// Renders each Project's 'name' from the allProjects array to the projectsNav of the UI.
	for (let i = 0; i < allProjects.length; i++) {
		let projectReference = allProjects[i];
		let newProjectContainer = document.createElement("div");
		newProjectContainer.classList.add("project-nav-item");

		let newProjectTitle = document.createElement("h3");
		newProjectTitle.projectElementName = `${projectReference.name}`;
		newProjectTitle.innerText = projectReference.name;

		newProjectContainer.append(newProjectTitle);

		const projectNav = document.getElementById("projectNav");
		projectNav.append(newProjectContainer);
	}
}
