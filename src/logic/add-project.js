import { projectFactory } from "../objects/project-object";
import { renderProjects } from "../components/Nav";
import { setCurrentProject } from "./project-nav";
import { renderProjectTitle, renderTodos } from "../components/TodoSection";

function addProject() {
	console.log("addProject() invoked");
	let form = document.getElementById("projectForm");
	let projectTitle = document.getElementById("title").value;

	form.remove();
	projectFactory(projectTitle);
	renderProjects();
	setCurrentProject(projectTitle);
	renderProjectTitle();
	renderTodos();
}

export { addProject };
