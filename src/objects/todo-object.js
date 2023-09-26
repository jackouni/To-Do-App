import { currentProject } from "../logic/project-nav";

export function todoFactory(name) {
	let newTodo = {
		name,
	};

	console.log(`Todo created...\n ${newTodo.name}`);

	currentProject().todos.push(newTodo);

	console.log(
		`• Todo: '${newTodo.name}' Pushed to project: ${
			currentProject().name
		} ... \n• In project's 'todos' array: ${JSON.stringify(currentProject().todos)}`
	);
}
