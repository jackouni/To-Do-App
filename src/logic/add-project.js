import { projectFactory } from "../objects/project-object";
import { renderProjects } from "../components/Nav";

function addProject() {
	console.log("addProject() invoked");
	let form = document.getElementById("projectForm");
	let projectTitle = document.getElementById("title").value;

	form.remove();
	projectFactory(projectTitle);
	renderProjects();
}

export { addProject };
