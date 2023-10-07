import { allProjects } from "../objects/project-object";
import { getProjectIndex } from "./project-nav";

export function removeProject(projectName) {
	console.log(`removeProject(event) invoked`);

	let index = getProjectIndex(projectName);

	allProjects.splice(index, 1);

	localStorage.setItem("allProjects", JSON.stringify(allProjects));

	console.log(
		`allProjects spliced at index, ${index}. \nUpdated allProjects array: ${allProjects} `
	);
}
