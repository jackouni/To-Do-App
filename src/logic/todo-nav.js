export function getTodo(project, todoName) {
	let todoObject = project.todos.find((todo) => todo.name === todoName);
	return todoObject;
}
