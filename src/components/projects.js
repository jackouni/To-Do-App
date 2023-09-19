import button from "./buttons";
import removeProject from "../logic/remove-project";

// Stores projects we've created.
let projectElements = [];

// Creates a 'project' component to be displayed in the Nav seciton of UI.
function ProjectComponent(name) {
	let newProject = document.createElement("div");
	newProject.classList.add("project");

	let projectIndex = projectElements.length;

	let checkBubble = button("", "", "click", removeProject);
	checkBubble.classList.add("project-check-bubble");
	// This 'index' property will be used to identify which element's 'remove' button is being clicked.
	checkBubble.index = projectIndex;

	// This 'project-index' id property will used to identify the project element we want to remove from the UI.
	newProject.id = `project-${projectIndex}`;
	newProject.innerText = name;

	newProject.append(checkBubble);

	projectElements.push(newProject);

	console.log("Project Element Created...");
	return newProject;
}

export { ProjectComponent, projectElements };
