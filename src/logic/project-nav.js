import { allProjects } from "../objects/project-object";
import { renderAllTodos, renderProjectTitle } from "../components/TodoSection";
import { renderTodos } from "../components/TodoSection";

// Used to track a "User's current state" - what project is open/active in the UI?
// Used to determine what Project's Todos to render and what projects to save new Todos to.
let userState = {
	currentProject: "All Todos",
};

// Event listener to set current Project
export function setCurrentProject(event) {
	if (event instanceof Event) {
		userState.currentProject = event.target.elementName;
		renderProjectTitle();
		renderTodos();
		console.log("User is now in:", userState.currentProject);
	} else if (event === "All Todos") {
		userState.currentProject = event;
		renderAllTodos();
		console.log("User is now in:", userState.currentProject);
	} else {
		userState.currentProject = event;
		renderTodos();
		console.log("User is now in:", userState.currentProject);
	}
}

// Function returns the currently active/open project from allProjects array.
export function getCurrentProject() {
	if (userState.currentProject === "All Todos") {
		return userState.currentProject;
	} else {
		// Returns 1st 'name' property that matches the current userState.currentProject.
		let projectObject = allProjects.find(
			(project) => project.name === userState.currentProject
		);
		return projectObject;
	}
}

export function getProjectIndex(projectName) {
	let index = allProjects.findIndex((project) => project.name === projectName);

	return index;
}
