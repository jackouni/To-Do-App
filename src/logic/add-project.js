import { projectFactory } from "../objects/project-object";
import { renderProjects } from "../components/Nav";
import { setCurrentProject } from "./project-nav";
import { renderProjectTitle } from "../components/TodoSection";

function addProject() {
	console.log("addProject() invoked");
	let form = document.getElementById("projectForm");
	let projectTitle = document.getElementById("title").value;

	form.remove();
	projectFactory(projectTitle);
	renderProjects();
	setCurrentProject(projectTitle);
	renderProjectTitle();
}

export { addProject };
