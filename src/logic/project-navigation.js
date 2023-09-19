// Object to keep track of what Project a user is currently viewing.
let userState = {
	currentProject: null,
};

// Event listener to set current Project
export function setCurrentProject(event) {
	if (event.target.classList.contains("project")) {
		userState.currentProject = event.target.id;
		console.log("User is now in:", userState.currentProject);
	}
}

// Function to check which Project the user is in
export function getCurrentProject() {
	return userState.currentProject;
}
