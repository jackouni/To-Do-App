// Object to keep track of what Project a user is currently viewing.
let userState = {
	currentProject: null,
};

// Event listener to set current Project
function setCurrentProject(event) {
	if (event.target.classList.contains("project-title")) {
		userState.currentProject = event.target.innerText;
		console.log("User is now in:", userState.currentProject);
	}
}

// Function to check which Project the user is in
function getCurrentProject() {
	return userState.currentProject;
}

export { setCurrentProject, getCurrentProject };
