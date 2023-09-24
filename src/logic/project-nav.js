import { allProjects } from "../objects/project-object";

// Used to track a "User's current state" - what project is open/active in the UI?
// Used to determine what Project's Todos to render and what projects to save new Todos to.
let userState = {
	currentProject: "SAMPLERR",
};

// Event listener to set current Project
function setCurrentProject(event) {
	if (event.target.classList.contains("project-title")) {
		userState.currentProject = event.target.id;
		console.log("User is now in:", userState.currentProject);
	} else {
		userState.currentProject = event;
	}
}

// Function returns the currently active/open project from allProjects array.
function currentProject() {
	// Returns 1st 'name' property that matches the current userState.currentProject.
	let projectObject = allProjects.find(
		(project) => project.name === userState.currentProject
	);

	return projectObject;
}
export { setCurrentProject, currentProject };
