import { allProjects } from "../objects/project-object";
import { getProject, getProjectIndex } from "./project-nav";
import { removeTodoElement } from "../components/TodoSection";

export function removeTodo(event) {
	console.log(`removeTodo("${event.target.todoElement}") invoked`);

	// 'todoElement' of the target has the same 'name' property of the associated todo object.
	let todoName = event.target.todoElement;

	// 'projectElement' property of target is the 'name' property of the project the associated todo is in.
	let project = getProject(event.target.projectElement);

	let projectTodos = project.todos;
	let todoIndex = projectTodos.findIndex((todo) => todo.name === todoName);

	// Remove Todo from Project (remove from project's todos array property).
	projectTodos.splice(todoIndex, 1);

	// Debugging console.log message.
	console.log(
		`Todo removed from the project, ${
			project.name
		}. \nTodo, "${todoName}", removed at index, ${todoIndex} of todos array.\n Updated todos array: ${JSON.stringify(
			project.todos
		)}`
	);
}
