import { currentProject } from "../logic/project-nav";

export function todoFactory(name, due) {
	let newTodo = {
		name,
		due,
	};

	console.log(`Todo created...\n ${newTodo.name} | Due 👉 ${newTodo.due}`);

	currentProject().todos.push(newTodo);

	console.log(
		`• Todo: '${newTodo.name}' | ${newTodo.due} ... \n• Pushed to project: ${
			currentProject().name
		} ... \n• In project's 'todos' array: ${JSON.stringify(currentProject().todos)}`
	);
}
