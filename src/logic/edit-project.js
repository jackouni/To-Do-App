import { getProject } from "./project-nav";

export function editProject(selectedProjectName, newProjectName) {
	console.log(`editProject(${newProjectName}) invoked`);

	let project = getProject(selectedProjectName);
	project.name = newProjectName;

	let projectTodos = project.todos;

	projectTodos.forEach((todo) => (todo.projectName = newProjectName));
}
