import { allProjects } from "../objects/project-object";
import { getCurrentProject } from "./project-nav";

export function isDuplicatedProjectName() {
	console.log("projectValidation() invoked");
	let form = document.getElementById("projectForm");
	let projectTitle = document.getElementById("title").value;

	let isDuplicatedName = allProjects.some(
		(project) => project.name === projectTitle
	);

	return isDuplicatedName;
}

export function isDuplicatedTodoName() {
	console.log("projectValidation() invoked");
	let form = document.getElementById("projectForm");
	let todoTitle = document.getElementById("title").value;

	let currentProject = getCurrentProject();

	let isDuplicatedName = currentProject.todos.some(
		(todo) => todo.name === todoTitle
	);

	return isDuplicatedName;
}

export function isProjectFormActive() {
	if (document.querySelector("#projectForm")) {
		let projectForm = document.querySelector("#projectForm");
		projectForm.remove();
	}
}

export function isTodoFormActive() {
	if (document.querySelector("#todoForm")) {
		let todoForm = document.querySelector("#todoForm");
		todoForm.remove();
	}
}
