import { renderProjectElements } from "../components/Nav";
import { renderProjectTitle } from "../components/TodoSection";
import { getCurrentProject, setCurrentProject } from "./project-nav";

export function editProject(newProjectName) {
	console.log(`editProject(${newProjectName}) invoked`);

	let projectEdit = getCurrentProject();
	projectEdit.name = newProjectName;

	let projectTodos = projectEdit.todos;

	projectTodos.forEach((todo) => (todo.project = newProjectName));

	setCurrentProject(newProjectName);
	renderProjectTitle();
	renderProjectElements();
	renderTodos();
}
