export function getTodo(project, todoName) {
	let todoObject = project.find((todo) => todo.name === todoName);
	return todoObject;
}
