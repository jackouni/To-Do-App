import { parse, format } from "date-fns";
import { getCurrentProject } from "../logic/project-nav";

export function todoFactory(name, due, desc, priority) {
	let projectName = getCurrentProject().name;

	let newTodo = {
		name,
		due,
		desc,
		projectName,
		priority,
		formatDate: function () {
			if (this.due) {
				let parsedDate = parse(this.due, "yyyy-MM-dd", new Date());
				let formattedDate = format(parsedDate, "MMM do, yyyy");
				return `${formattedDate}`;
			} else {
				return " ";
			}
		},
	};

	// Console.log Debugging for todo Creation
	console.log(
		`Todo created... "${
			newTodo.name
		}" \nnewTodo due date === ${newTodo.formatDate()}\nnewTodo description === "${
			newTodo.desc
		}"\nnewTodo.projectName === "${newTodo.projectName}"\n newTodo.priority === ${
			newTodo.priority
		}`
	);

	getCurrentProject().todos.push(newTodo);

	// Console.log Debugging for pushing todos to respective project's 'todos' array.
	console.log(
		`• Todo: '${newTodo.name}' Pushed to project: ${
			getCurrentProject().name
		} ... \n• In project's 'todos' array: ${JSON.stringify(
			getCurrentProject().todos
		)}`
	);
}
