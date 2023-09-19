import { projectFactory } from "../objects/project-object";
import { ProjectComponent, projectElements } from "../components/projects";

export default function addProject() {
	let form = document.getElementById("addProjectForm");

	let projectTitle = document.getElementById("title").value;
	let projectDate = document.getElementById("due").value;
	let projectDesc = document.getElementById("desc").value;

	// Creates a 'Project' object that stores the Project's data.
	projectFactory(projectTitle, projectDate, projectDesc);

	// Creates a 'Project' element to be displayed in the UI.
	let newProjectElement = ProjectComponent(projectTitle);

	// Appends 'Project' element to 'nav' section of UI.
	const navSection = document.getElementById("nav");
	navSection.append(newProjectElement);

	form.remove();
}
