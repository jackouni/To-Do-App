import todoMethods from "./todo-proto";
import { setCurrentProject, getCurrentProject } from "../logic/project-navigation";

let todoObjects = [];

const todoFactory = (title, date, desc, priority, index) => {
	let _title = title;
	let _date = date;
	let _desc = desc;
	let _priority = priority;
	let _index = index;

	let newTodo = Object.assign({}, todoMethods);

	todoObjects.push(newTodo);

	console.log("Todo Object Created...");
	return newTodo;
};

export { todoObjects, todoFactory };
