import { projectObjects } from "../objects/project-object";

// Object to keep track of what Project a user is currently viewing.
let userState = {
	currentProject: null,
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

// Function to check which Project the user is in
function getCurrentProject() {
	return userState.currentProject;
}

function currentProjectIndex() {
	const index = projectObjects.findIndex(
		(project) => project.getTitle() === getCurrentProject()
	);

	return index;
}

export { setCurrentProject, getCurrentProject, currentProjectIndex };
