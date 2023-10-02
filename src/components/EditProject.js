import { renderProjectElements } from "./Nav";
import { renderAllTodos, renderTodos } from "./TodoSection";
import cancelImg from "../assets/imgs/cancel-icon.png";
import confirmImg from "../assets/imgs/confirm-icon.png";
import { editProject } from "../logic/edit-project";

export function renderInlineEditing(projectName) {
	console.log(`renderInlineEditing("${projectName}") invoked`);

	let allProjectElements = document.querySelectorAll(".project-nav-item");

	// allProjectElements nodelist must be converted into an Array
	let allProjectElementsArray = Array.from(allProjectElements);

	// Find the project element that's 'projectElement' matches the projectName we passed.
	let selectedProjectElement = allProjectElementsArray.find(
		(project) => project.projectElement === projectName
	);

	// Removes all elements from the selected project-nav-item.
	// This will give us a clear project-nav-item to add inline-editing elements to.
	while (selectedProjectElement.firstChild) {
		selectedProjectElement.firstChild.remove();
	}

	let span = document.createElement("span");
	span.id = "span";
	span.textContent = projectName;
	span.contentEditable = true;
	selectedProjectElement.append(span);

	// Icon container that will hold 'cancel' and 'confirm' icons.
	let iconContainer = document.createElement("div");
	iconContainer.classList.add("icon-container");

	let cancelIcon = new Image();
	cancelIcon.src = cancelImg;
	cancelIcon.classList.add("icon");
	cancelIcon.addEventListener("click", () => {
		selectedProjectElement.remove();
		renderProjectElements();
		renderTodos();
	});

	let confirmIcon = new Image();
	confirmIcon.src = confirmImg;
	confirmIcon.classList.add("icon");
	confirmIcon.addEventListener("click", () => {
		let newProjectName = span.textContent;
		selectedProjectElement.remove();
		editProject(projectName, newProjectName);
	});

	iconContainer.appendChild(cancelIcon);
	iconContainer.append(confirmIcon);
	selectedProjectElement.append(iconContainer);
}
