import { todoForm } from "./TodoForm";
import { getCurrentProject, setCurrentProject } from "../logic/project-nav";
import { allProjects } from "../objects/project-object";
import { removeTodo } from "../logic/remove-todo";

export function todoSection() {
	const todoMain = document.createElement("div");
	todoMain.id = "todoMain";

	const topSection = document.createElement("div");
	topSection.id = "topSection";

	const projectTitle = document.createElement("h2");
	projectTitle.id = "projectTitle";
	projectTitle.innerText = getCurrentProject();

	const todosDisplay = document.createElement("div");
	todosDisplay.id = "todosDisplay";

	const addTodo = document.createElement("h3");
	addTodo.innerText = "Add Todo";
	addTodo.id = "addTodo";
	addTodo.addEventListener("click", () => {
		content.append(todoForm());
	});

	todosDisplay.append(addTodo);

	todoMain.append(topSection);
	todoMain.append(projectTitle);
	todoMain.append(todosDisplay);

	return todoMain;
}

export function renderProjectTitle() {
	let projectTitle = document.getElementById("projectTitle");
	let project = getCurrentProject();
	projectTitle.innerText = project.name;
}

export function renderTodos() {
	console.log("renderTodos() invoked");
	let project = getCurrentProject();
	let projectTodos = project.todos;

	// This is done so that these elements can be re-rendered without repeating.
	let todoElements = document.querySelectorAll(".todo-item");
	todoElements.forEach((element) => element.remove());

	projectTodos.forEach((todo) => {
		let todoContainer = document.createElement("div");
		todoContainer.classList.add("todo-item");
		todoContainer.elementName = todo.name;

		let checkBox = document.createElement("button");
		checkBox.classList.add("checkbox");
		checkBox.elementName = todo.name;
		checkBox.project = todo.projectName;
		checkBox.addEventListener("click", (event) => removeTodo(event));

		let todoTitle = document.createElement("h4");
		todoTitle.classList.add("todo-title");
		todoTitle.innerText = todo.name;
		todoTitle.elementName = todo.name;

		todoContainer.append(checkBox);
		todoContainer.append(todoTitle);

		let todosDisplay = document.getElementById("todosDisplay");
		todosDisplay.append(todoContainer);
	});
}

export function renderAllTodos() {
	// This is done so that these elements can be re-rendered without repeating.
	let todoElements = document.querySelectorAll(".todo-item");
	todoElements.forEach((element) => element.remove());

	let projectTitle = document.getElementById("projectTitle");
	projectTitle.innerText = "All Todos";

	allProjects.forEach((project) => {
		let projectTodos = project.todos;

		projectTodos.forEach((todo) => {
			let todoContainer = document.createElement("div");
			todoContainer.classList.add("todo-item");
			todoContainer.elementName = todo.name;

			let checkBox = document.createElement("button");
			checkBox.classList.add("checkbox");
			checkBox.elementName = todo.name;
			checkBox.project = todo.projectName;
			checkBox.addEventListener("click", (event) => removeTodo(event));

			let todoTitle = document.createElement("h4");
			todoTitle.classList.add("todo-title");
			todoTitle.innerText = todo.name;
			todoTitle.elementName = todo.name;

			todoContainer.append(checkBox);
			todoContainer.append(todoTitle);

			let todosDisplay = document.getElementById("todosDisplay");
			todosDisplay.append(todoContainer);
		});
	});
}

export function removeTodoElement(todoName) {
	console.log(`removeTodoElement("${todoName}") invoked`);

	let allTodoElements = document.querySelectorAll(".todo-item");

	allTodoElements.forEach((element) => {
		if (element.elementName === todoName) {
			element.remove();
		}
	});
}
