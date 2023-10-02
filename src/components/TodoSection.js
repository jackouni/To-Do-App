import { todoForm } from "./TodoForm";
import { getCurrentProject, setCurrentProject } from "../logic/project-nav";
import { allProjects } from "../objects/project-object";
import { removeTodo } from "../logic/remove-todo";
import addTodoImg from "../assets/imgs/add-task-icon.png";

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

	const addTodoContainer = document.createElement("div");
	addTodoContainer.id = "addTodo";

	let addTodoIcon = new Image();
	addTodoIcon.src = addTodoImg;
	addTodoIcon.id = "addTodoImg";
	addTodoIcon.addEventListener("click", () => {
		if (allProjects.length === 0) {
			alert("Please create a project first, to store your todos in.");
		} else if (getCurrentProject() === "All Todos") {
			alert("Open/Select a project to add your 'todo' to.");
		} else {
			content.append(todoForm());
		}
	});

	addTodoContainer.append(addTodoIcon);

	topSection.append(projectTitle);
	topSection.append(addTodoContainer);

	todoMain.append(topSection);
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
		todoContainer.todoElement = todo.name;

		let checkBox = document.createElement("button");
		checkBox.classList.add("checkbox");
		checkBox.todoElement = todo.name;
		checkBox.projectElement = todo.projectName;
		checkBox.addEventListener("click", (event) => {
			let todoName = event.target.todoElement;
			removeTodo(event);
			removeTodoElement(todoName);
		});

		let todoTitle = document.createElement("h4");
		todoTitle.classList.add("todo-title");
		todoTitle.innerText = todo.name;
		todoTitle.todoElement = todo.name;

		let todoDate = document.createElement("p");
		todoDate.classList.add("todo-date");
		todoDate.innerText = todo.formatDate();

		todoContainer.append(checkBox);
		todoContainer.append(todoTitle);
		todoContainer.append(todoDate);

		let todosDisplay = document.getElementById("todosDisplay");
		todosDisplay.append(todoContainer);
	});
}

export function renderAllTodos() {
	console.log("renderAllTodos() invoked");
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
			todoContainer.todoElement = todo.name;

			let checkBox = document.createElement("button");
			checkBox.classList.add("checkbox");
			checkBox.todoElement = todo.name;
			checkBox.projectElement = todo.projectName;
			checkBox.addEventListener("click", (event) => {
				let todoToRemove = event.target.todoElement;
				removeTodo(event);
				removeTodoElement(todoToRemove);
			});

			let todoTitle = document.createElement("h4");
			todoTitle.classList.add("todo-title");
			todoTitle.innerText = todo.name;
			todoTitle.todoElement = todo.name;

			let todoDate = document.createElement("p");
			todoDate.classList.add("todo-date");
			todoDate.innerText = " ~ " + todo.formatDate();

			todoContainer.append(checkBox);
			todoContainer.append(todoTitle);
			todoContainer.append(todoDate);

			let todosDisplay = document.getElementById("todosDisplay");
			todosDisplay.append(todoContainer);
		});
	});
}

export function removeTodoElement(todoName) {
	console.log(`removeTodoElement("${todoName}") invoked`);

	let allTodoElements = document.querySelectorAll(".todo-item");

	allTodoElements.forEach((element) => {
		if (element.todoElement === todoName) {
			element.remove();
		}
	});
}
