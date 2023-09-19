import { projectObjects } from "../objects/project-object";
import { projectElements } from "../components/projects";

export default function removeProject(event) {
	console.log("------------ removeProject() Invoked -------------");
	const userConfirmed = confirm("Are you sure you want to remove this item?");
	const index = event.target.index;

	if (userConfirmed) {
		// Removes 'project' object at specific index in projectObjects array
		console.log(`Project object, "${projectObjects[index].getTitle()}"\n 
        Removed at index: ${index}`);
		projectObjects.splice(index, 1);

		// Removes the associated 'project' element from the UI.
		console.log(`project element removed from UI: ${projectElements[index].id}`);
		projectElements[index].remove();

		// Removes the associated 'project' element from the projectElements array.
		console.log(`Element from Elements array: "${projectElements[index].id}"\n
        Removed at index: ${index}`);
		projectElements.splice(index, 1);

		// Updates each project object's index/identifier using the projectObjects array.
		for (let i = 0; i < projectObjects.length; i++) {
			projectObjects[i].setIndex(i);
			console.log(`New project object index: ${projectObjects[i].getIndex()}`);
		}

		// Updates each 'project' element's indexes/identifiers using the projectElements array.
		for (let i = 0; i < projectElements.length; i++) {
			projectElements[i].id = `project-${i}`;
			projectElements[i].index = i;
			console.log(`New project element id's: ${projectElements[i].id}`);
		}
	}
	console.log("------------ removeProject() complete -------------");
}
