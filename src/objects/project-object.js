import projectMethods from "./project-proto";
import {
	setCurrentProject,
	getCurrentProject,
	currentProjectIndex,
} from "../logic/project-navigation";

let projectObjects = [];

const projectFactory = (title, date, desc) => {
	let _title = title;
	let _date = date;
	let _desc = desc;

	// Used to reference the project's index within the 'projectObjects' array.
	let _index = projectObjects.length;

	// Stores the Todos associated with this specific project.
	let _projectTodos = [];

	// Project Object with methods that will retrieve this project's data.
	let newProject = {
		getTitle: function () {
			return _title;
		},
		setTitleName: function (newTitle) {
			_title = newTitle;
			_name = `project-${newTitle}`;
		},

		getDate: function () {
			return _date;
		},

		getDesc: function () {
			return _desc;
		},
		setDesc: function (newDesc) {
			_desc = newDesc;
		},

		// Used to 'Get' the index of the project in 'projectObjects' array.
		getIndex: function () {
			return _index;
		},
		// Used to set the project's index reference for the 'projectObjects' array.
		setIndex: function (newIndex) {
			if (typeof newIndex === "number") {
				_index = newIndex;
			} else return;
		},

		// Gets, stores and removes todos from the project's 'projectTodos' array.
		getTodos: function () {
			return _projectTodos;
		},
		storeTodo: function (todo) {
			_projectTodos.push(todo);
		},
		removeTo: function (index) {
			_projectTodos.splice(index, 1);
		},

		addTodo: function (todo) {
			_projectTodos.push(todo);
		},
		removeTodo: function (todoName) {
			const index = _projectTodos.findIndex((todo) => todo.name === todoName);
			if (index !== -1) {
				_projectTodos.splice(index, 1);
			}
		},
	};

	projectObjects.push(newProject);

	console.log(
		`Project Object Created... ${newProject.getTitle()} @ ${newProject.getIndex()}`
	);

	return newProject;
};

export { projectFactory, projectObjects };
