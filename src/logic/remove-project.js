import { allProjects } from "../objects/project-object";
import { deleteProjectElement } from "../components/Nav";

export function removeProject(event) {
	console.log(`removeProject(event) invoked`);

	let projectName = event.target.deleteName;

	let index = allProjects.findIndex((project) => project.name === projectName);

	allProjects.splice(index, 1);

	console.log(
		`allProjects spliced at index, ${index}. \nUpdated allProjects array: ${allProjects} `
	);

	deleteProjectElement(projectName);
}
