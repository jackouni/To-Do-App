import {
	getCurrentProject,
	getProjectIndex,
	setCurrentProject,
} from "./project-nav";
import { allProjects } from "../objects/project-object";
import { renderProjects } from "../components/Nav";

export function editProject(projectName, newProjectName) {
	console.log(`editProject(${projectName}, ${newProjectName}) invoked`);
	let projectIndex = getProjectIndex(projectName);
	allProjects[projectIndex].name = newProjectName;

	// Edit Todo's of 'todos' array property - todo.project = newProjectName
	const projectTodos = getCurrentProject().todos;
	projectTodos.forEach((todo) => (todo.project = newProjectName));

	setCurrentProject(newProjectName);
	renderProjects();
}
