export let allProjects = [];

export function projectFactory(name, due) {
	let newProject = {
		name,
		due,
		todos: [],
	};

	allProjects.push(newProject);

	console.log(
		`Project created...\n ${newProject.name} | Due 👉 ${newProject.dueDate}`
	);
}
