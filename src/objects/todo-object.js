import { parse, format } from "date-fns";
import { getCurrentProject } from "../logic/project-nav";

export function todoFactory(name, due, desc) {
	let projectName = getCurrentProject().name;

	let newTodo = {
		name,
		due,
		desc,
		projectName,
		formatDate: function () {
			let parsedDate = parse(this.due, "yyyy-MM-dd", new Date());
			let formattedDate = format(parsedDate, "MMM do, yyyy");
			return formattedDate;
		},
	};

	console.log(
		`Todo created... "${
			newTodo.name
		}" \nnewTodo due date === ${newTodo.formatDate()}\nnewTodo description === "${
			newTodo.desc
		}"\nnewTodo.projectName === "${newTodo.projectName}"`
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
