import { allProjects } from "../objects/project-object";

export function getTodo(project, todoName) {
	let todoObject = project.todos.find((todo) => todo.name === todoName);
	return todoObject;
}

export function getTodoIndex(projectIndex, todoName) {
	let todoIndex = allProjects[projectIndex].todos.findIndex(
		(todo) => todo.name === todoName
	);

	return todoIndex;
}
