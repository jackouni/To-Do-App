import { projectFactory } from "../objects/project-object";

function addProject() {
	console.log("addProject() invoked");
	let form = document.getElementById("projectForm");
	let projectTitle = document.getElementById("title").value;

	form.remove();
	projectFactory(projectTitle);
}

export { addProject };
