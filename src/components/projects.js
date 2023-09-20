import button from "./buttons";
import removeProject from "../logic/remove-project";
import { setCurrentProject } from "../logic/project-navigation";

// Stores projects we've created.
let allProjectElements = [];

// Creates a 'project' component to be displayed in the Nav seciton of UI.
function ProjectComponent(name) {
	let newProject = document.createElement("div");
	newProject.projectName = `project-${name}`;
	newProject.classList.add("project");

	// This 'project-index' id property will used to identify the project element we want to remove from the UI.
	let projectIndex = allProjectElements.length;
	newProject.id = `project-${projectIndex}`;

	let checkBubble = button("", "", "click", removeProject);
	checkBubble.classList.add("project-check-bubble");
	// This 'index' property will be used to identify which element's 'remove' button is being clicked.
	checkBubble.index = projectIndex;

	let title = document.createElement("h3");
	title.id = name;
	title.classList.add("project-title");
	title.innerText = name;

	title.addEventListener("click", setCurrentProject);

	newProject.append(title);
	newProject.append(checkBubble);

	allProjectElements.push(newProject);

	console.log("Project Element Created...");
	return newProject;
}

export { ProjectComponent, allProjectElements };
