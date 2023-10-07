import { projectForm } from "./projectForm";
import { allProjects } from "../objects/project-object";
import { setCurrentProject } from "../logic/project-nav";
import deleteImg from "../assets/imgs/delete-project-icon.png";
import editImg from "../assets/imgs/edit-project-icon.png";
import addProjectImg from "../assets/imgs/add-project-icon.png";
import { removeProject } from "../logic/remove-project";
import { renderInlineEditing } from "./EditProject";

// The top section of the Nav. Will be used to display the 'All Todos' option
function renderTopNavSection() {
	const topNav = document.createElement("section");
	topNav.classList.add("nav-section");
	topNav.id = "topNav";

	// 'Add Project' Nav Option
	const addProjectContainer = document.createElement("div");
	addProjectContainer.classList.add("nav-option");
	addProjectContainer.id = "addProject";

	let addProjectIcon = new Image();
	addProjectIcon.src = addProjectImg;
	addProjectIcon.id = "addProjectImg";

	addProjectContainer.append(addProjectIcon);

	addProjectIcon.addEventListener("click", () => {
		content.append(projectForm());
	});

	// Append all components to the topNav section.
	topNav.append(renderAllTodos());
	topNav.append(addProjectContainer);

	return topNav;
}

function renderAllTodos() {
	// 'All Todos' Nav Option
	const allTodos = document.createElement("div");
	allTodos.id = "allTodos";
	allTodos.projectElement = "All Todos";
	allTodos.addEventListener("click", () => {
		setCurrentProject("All Todos");
		addSelectedClassTo("All Todos");
	});

	const allTodosTitle = document.createElement("h3");
	allTodosTitle.id = `projectTitle-AllTodos`;
	allTodosTitle.classList.add("project-nav-title");
	allTodosTitle.classList.add("selected-project");
	allTodosTitle.innerText = "All Todos";
	allTodos.append(allTodosTitle);

	return allTodos;
}

// Section below topNavSection that will display Project Names a user creates
function renderProjectNavSection() {
	const projectNavSection = document.createElement("section");
	projectNavSection.id = "projectNavSection";

	return projectNavSection;
}

export function renderNav() {
	const nav = document.createElement("nav");

	nav.append(renderTopNavSection());
	nav.append(renderProjectNavSection());

	return nav;
}

function removeAllProjectElements() {
	console.log("removeAllProjectElements() invoked");

	let allProjectElements = document.querySelectorAll(".project-nav-item");
	allProjectElements.forEach((element) => element.remove());
}

// Renders the Project Nav Elements in the projectNavSection.
export function renderProjectElements() {
	console.log("renderProjects() invoked");

	// Clears all project-nav-item elements from the projectNavSection.
	// This is done so that these elements can be re-rendered without repeating.
	removeAllProjectElements();

	// Loops through each project in 'allProjects' array and renders them to the projectNavSection
	for (let i = 0; i < allProjects.length; i++) {
		let project = allProjects[i];

		// Container that will hold project-nav-item elements.
		// Children: Project name and delete + edit/cancel + confirm icons.
		let newProjectContainer = document.createElement("div");
		newProjectContainer.classList.add("project-nav-item");
		// '.projectElement' used to identify what project an element corresponds to.
		// Used to reference elements in the UI to the project's saved in 'allProjects' array.
		newProjectContainer.projectElement = project.name;

		// Title of the project in nav
		let newProjectTitle = document.createElement("h4");
		// This id will be used to target the title and style it for when it is selected/clicked on.
		newProjectTitle.id = `projectTitle-${removeSpacesFrom(project.name)}`;
		newProjectTitle.classList.add("project-nav-title");
		newProjectTitle.projectElement = project.name;
		newProjectTitle.innerText = project.name;
		newProjectTitle.addEventListener("click", (event) => {
			setCurrentProject(event);
			addSelectedClassTo(event.target.projectElement);
		});
		newProjectContainer.append(newProjectTitle);

		// Icon container that will hold delete and edit icons.
		let iconContainer = document.createElement("div");
		iconContainer.classList.add("icon-container");

		let deleteIcon = new Image();
		deleteIcon.src = deleteImg;
		deleteIcon.classList.add("icon");
		deleteIcon.projectElement = project.name;
		deleteIcon.addEventListener("click", (event) => {
			const projectName = event.target.projectElement;
			removeProject(projectName);
			removeProjectElement(projectName);
		});

		let editIcon = new Image();
		editIcon.src = editImg;
		editIcon.classList.add("icon");
		editIcon.projectElement = project.name;
		editIcon.addEventListener("click", (event) => {
			const projectName = event.target.projectElement;
			renderInlineEditing(projectName);
		});

		iconContainer.appendChild(deleteIcon);
		iconContainer.append(editIcon);
		newProjectContainer.append(iconContainer);

		const projectNavSection = document.getElementById("projectNavSection");
		projectNavSection.append(newProjectContainer);
	}
}

export function removeProjectElement(projectName) {
	console.log(`removeProjectElement("${projectName}") invoked`);

	let allProjectElements = document.querySelectorAll(".project-nav-item");

	allProjectElements.forEach((element) => {
		if (element.projectElement === projectName) {
			element.remove();
			setCurrentProject("All Todos");
		}
	});
}

function removeSpacesFrom(string) {
	console.log(`removeSpacesFrom(${string}) invoked`);

	let newString = string.replace(/\s+/g, "");

	console.log(`${string} converted to ➡️ ${newString}`);

	return newString;
}

export function addSelectedClassTo(projectElement) {
	const selectedElement = document.getElementById(
		`projectTitle-${removeSpacesFrom(projectElement)}`
	);

	let allProjectTitles = document.querySelectorAll(".project-nav-title");
	let allProjectTitlesArray = Array.from(allProjectTitles);

	allProjectTitlesArray.forEach((title) =>
		title.classList.remove("selected-project")
	);

	selectedElement.classList.add("selected-project");
}
