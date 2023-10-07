import { parse, format } from "date-fns";
import { getProjectIndex, getCurrentProject } from "../logic/project-nav";
import { allProjects } from "./project-object";

export function todoFactory(name, due, desc, priority) {
	let projectName = getCurrentProject().name;
	let projectIndex = getProjectIndex(projectName);

	let newTodo = {
		name,
		due,
		desc,
		projectName,
		priority,
	};

	// Console.log Debugging for todo Creation
	console.log(
		`Todo created... "${newTodo.name}" \nnewTodo due date === ${formatDate(
			newTodo.due
		)}\nnewTodo description === "${newTodo.desc}"\nnewTodo.projectName === "${
			newTodo.projectName
		}"\n newTodo.priority === ${newTodo.priority}`
	);

	allProjects[projectIndex].todos.push(newTodo);

	localStorage.setItem("allProjects", JSON.stringify(allProjects));

	// Console.log Debugging for pushing todos to respective project's 'todos' array.
	console.log(
		`• Todo: '${newTodo.name}' Pushed to project: ${
			getCurrentProject().name
		} ... \n• In project's 'todos' array: ${JSON.stringify(
			getCurrentProject().todos
		)}`
	);
}

export function formatDate(dueDate) {
	if (dueDate) {
		let parsedDate = parse(dueDate, "yyyy-MM-dd", new Date());
		let formattedDate = format(parsedDate, "MMM do, yyyy");
		return `${formattedDate}`;
	} else {
		return " ";
	}
}
