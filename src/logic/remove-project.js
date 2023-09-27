import { allProjects } from "../objects/project-object";
import { removeProjectElement } from "../components/Nav";
import { getProjectIndex } from "./project-nav";

export function removeProject(event) {
	console.log(`removeProject(event) invoked`);

	let projectName = event.target.deleteName;

	let index = getProjectIndex(projectName);

	allProjects.splice(index, 1);

	console.log(
		`allProjects spliced at index, ${index}. \nUpdated allProjects array: ${allProjects} `
	);

	removeProjectElement(projectName);
}
