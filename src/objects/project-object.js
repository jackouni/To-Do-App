export let allProjects = [];

export function projectFactory(name) {
	console.log(`projectFactory("${name}") invoked`);
	let newProject = {
		name,
		todos: [],
	};

	allProjects.push(newProject);

	console.log(`Project created...\n "${newProject.name}"`);
	console.log(`allProjects array updated: ${JSON.stringify(allProjects)}`);
}
