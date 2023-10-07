// This is used to reference "allProjects" in localStorage
let storedData = localStorage.getItem("allProjects");

/* This is used to get "allProjects" from localStorage
If storedData contains 'allProjects' - return storedData
Else 'allProjects' has NOT been stored in storedData - an empty array is returned */
export let allProjects = storedData ? JSON.parse(storedData) : [];

export function projectFactory(name) {
	console.log(`projectFactory("${name}") invoked`);
	let newProject = {
		name,
		todos: [],
	};

	allProjects.push(newProject);

	// Store the updated allProjects array back into localStorage
	localStorage.setItem("allProjects", JSON.stringify(allProjects));

	console.log(`Project created...\n "${newProject.name}"`);

	console.log(`allProjects array updated: ${JSON.stringify(allProjects)}`);
}
