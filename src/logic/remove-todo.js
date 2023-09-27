import { allProjects } from "../objects/project-object";
import { getProjectIndex } from "./project-nav";
import { removeTodoElement } from "../components/TodoSection";

export function removeTodo(event) {
	console.log(`removeTodo(event) invoked`);

	// The 'elementName' of the target === The name property of it's todo.
	let todoName = event.target.elementName;

	// The 'project' property of the target === The name property of the project the todo is in.
	let projectName = event.target.project;

	let projectIndex = getProjectIndex(projectName);

	let todoIndex = allProjects[projectIndex].todos.findIndex(
		(todo) => todo.name === todoName
	);

	//Remove Todo from Project
	allProjects[projectIndex].todos.splice(todoIndex, 1);

	console.log(
		`Todo removed from the project, ${projectName}. \nTodo removed at index, ${todoIndex} of todos array.\n Updated todos array: ${JSON.stringify(
			allProjects[projectIndex].todos
		)}`
	);

	removeTodoElement(todoName);
}
