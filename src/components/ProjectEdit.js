import confirmImg from "../assets/imgs/confirm-icon.png";
import cancelImg from "../assets/imgs/cancel-icon.png";
import { renderProjects } from "./Nav";
import { editProject } from "../logic/edit-project";

export function getEditedProject(event) {
	const project = event.target.editName;
	const projectElement = document.getElementById(`projectItem-${project}`);

	// Removes all elements from the Project item in the Nav
	while (projectElement.firstChild) {
		projectElement.removeChild(projectElement.firstChild);
	}

	// Create span element for editing in
	const span = document.createElement("span");
	span.id = "inlineEditSpan";
	span.textContent = project;
	span.contentEditable = true;
	span.style.border = "none";
	span.style.padding = "5px";

	const iconContainer = document.createElement("div");
	iconContainer.classList.add("project-icons-container");

	const confirmIcon = new Image();
	confirmIcon.src = confirmImg;
	confirmIcon.id = `confirm-${project.name}`;
	confirmIcon.classList.add("confirm-icon");

	const cancelIcon = new Image();
	cancelIcon.src = cancelImg;
	cancelIcon.id = `cancel-${project.name}`;
	cancelIcon.classList.add("cancel-icon");

	iconContainer.append(confirmIcon);
	iconContainer.append(cancelIcon);

	projectElement.appendChild(span);
	projectElement.appendChild(iconContainer);

	confirmIcon.addEventListener("click", function () {
		const newName = span.innerText;
		let projectTitle = document.getElementById("projectTitle");

		projectTitle.innerText = newName;
		editProject(project, newName);
	});

	span.addEventListener("keydown", function (event) {
		if (event.key === "Enter" || event.code === "Enter") {
			const newName = span.innerText;
			let projectTitle = document.getElementById("projectTitle");

			projectTitle.innerText = newName;
			editProject(project, newName);
		}
	});

	cancelIcon.addEventListener("click", () => {
		const projectTitle = document.getElementById("projectTitle");
		projectTitle.innerText = project;
		renderProjects();
	});
}
