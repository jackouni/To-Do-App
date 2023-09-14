import button from "./buttons";

let projectElements = [];

function ProjectComponent(name, index) {
	let newProject = document.createElement("div");
	newProject.classList.add("project");

	newProject.id = `project-${index}`;

	let projTitle = document.createElement("h3");
	projTitle.innerText = name;

	newProject.append(projTitle);

	return newProject;
}

export { ProjectComponent, projectElements };
