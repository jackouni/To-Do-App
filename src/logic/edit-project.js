import { getProject } from "./project-nav";
import { allProjects } from "../objects/project-object";

export function editProject(selectedProjectName, newProjectName) {
	console.log(`editProject(${newProjectName}) invoked`);

	let project = getProject(selectedProjectName);
	project.name = newProjectName;

	let projectTodos = project.todos;

	projectTodos.forEach((todo) => (todo.projectName = newProjectName));

	localStorage.setItem("allProjects", JSON.stringify(allProjects));
}
