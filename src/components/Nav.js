import { projectForm } from "./projectForm";
import { allProjects } from "../objects/project-object";
import { setCurrentProject } from "../logic/project-nav";
import deleteImg from "../assets/imgs/delete-project-icon.png";
import { removeProject } from "../logic/remove-project";

// The top section of the Nav. Will be used to display the 'All Todos' option
function topNavSection() {
	const topNav = document.createElement("section");
	topNav.classList.add("nav-section");
	topNav.id = "topNav";

	// 'All Todos' Nav Option
	const allTodos = document.createElement("div");
	allTodos.classList.add("project-nav-title");
	allTodos.id = "allTodos";
	allTodos.elementName = "All Todos";
	allTodos.addEventListener("click", () => {
		setCurrentProject("All Todos");
	});

	const allTodosTitle = document.createElement("h3");
	allTodosTitle.classList.add("nav-title");
	allTodosTitle.innerText = "All Todos";
	allTodos.append(allTodosTitle);

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
	topNav.append(addProject);

	return topNav;
}

// Section below topNavSection that will display Project Names a user creates
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

// Renders the Project Nav Elements in the projectNavSection.
// Reference lines 51 ➡️ 57
export function renderProjects() {
	console.log("renderProjects() invoked");

	// Clears all project-nav-item elements from the projectNavSection.
	// This is done so that these elements can be re-rendered without repeating.
	let allProjectElements = document.querySelectorAll(".project-nav-item");
	allProjectElements.forEach((element) => element.remove());

	// Renders each Project's 'name' from the allProjects array to the projectNav of the UI.
	for (let i = 0; i < allProjects.length; i++) {
		let project = allProjects[i];

		let newProjectContainer = document.createElement("div");
		newProjectContainer.classList.add("project-nav-item");
		newProjectContainer.elementName = project.name;

		let newProjectTitle = document.createElement("h4");
		newProjectTitle.classList.add("project-nav-title");
		newProjectTitle.elementName = project.name;
		newProjectTitle.innerText = project.name;
		newProjectTitle.addEventListener("click", (event) => {
			setCurrentProject(event);
		});

		newProjectContainer.append(newProjectTitle);

		let iconContainer = document.createElement("div");
		iconContainer.classList.add("delete-container");

		let deleteIcon = new Image();
		deleteIcon.src = deleteImg;
		deleteIcon.classList.add("delete-img");
		deleteIcon.deleteName = project.name;
		deleteIcon.addEventListener("click", (event) => removeProject(event));

		iconContainer.appendChild(deleteIcon);
		newProjectContainer.append(iconContainer);

		const projectNav = document.getElementById("projectNav");
		projectNav.append(newProjectContainer);
	}
}

export function removeProjectElement(projectName) {
	console.log(`deleteProjectElement("${projectName}") invoked`);

	let allProjectElements = document.querySelectorAll(".project-nav-item");

	allProjectElements.forEach((element) => {
		if (element.elementName === projectName) {
			element.remove();
			setCurrentProject("All Todos");
		}
	});
}
