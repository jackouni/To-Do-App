import { getCurrentProject } from "../logic/project-nav";

export function todoFactory(name) {
	let projectName = getCurrentProject().name;

	let newTodo = {
		name,
		projectName,
	};

	console.log(
		`Todo created... "${newTodo.name}" \nnewTodo.projectName === "${newTodo.projectName}"`
	);

	getCurrentProject().todos.push(newTodo);

	console.log(
		`• Todo: '${newTodo.name}' Pushed to project: ${
			getCurrentProject().name
		} ... \n• In project's 'todos' array: ${JSON.stringify(
			getCurrentProject().todos
		)}`
	);
}
