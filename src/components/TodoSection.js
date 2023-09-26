import { todoForm } from "./TodoForm";
export function todoSection() {
	const todoMain = document.createElement("div");
	todoMain.id = "todoMain";

	const topSection = document.createElement("div");
	topSection.id = "topSection";

	const projectTitle = document.createElement("h2");
	projectTitle.id = "projectTitle";
	projectTitle.innerText = "Project Name";

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
