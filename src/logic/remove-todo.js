import { allProjects } from "../objects/project-object";
import { getProject, getProjectIndex } from "./project-nav";

export function removeTodo(event) {
	console.log(`removeTodo("${event.target.todoElement}") invoked`);

	// 'todoElement' of the target has the same 'name' property of the associated todo object.
	let todoName = event.target.todoElement;

	// 'projectElement' property of target is the 'name' property of the project the associated todo is in.
	let project = getProject(event.target.projectElement);
	let projectName = project.name;
	let projectIndex = getProjectIndex(projectName);

	let projectTodos = allProjects[projectIndex].todos;
	let todoIndex = projectTodos.findIndex((todo) => todo.name === todoName);

	// Remove todo from project (remove todo from project's 'todos' array property).
	projectTodos.splice(todoIndex, 1);

	localStorage.setItem("allProjects", JSON.stringify(allProjects));

	// Debugging console.log message.
	console.log(
		`Todo removed from the project, ${
			project.name
		}. \nTodo, "${todoName}", removed at index, ${todoIndex} of todos array.\n Updated todos array: ${JSON.stringify(
			project.todos
		)}`
	);
}
