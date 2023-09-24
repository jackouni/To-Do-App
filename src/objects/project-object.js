export let allProjects = [];

export function projectFactory(title, due) {
	let name = title;
	let dueDate = due;

	let todos = [];

	let newProject = {
		name,
		dueDate,
		todos,
	};

	allProjects.push(newProject);

	console.log(
		`Project created...\n ${newProject.name} | Due 👉 ${newProject.dueDate}`
	);
	return newProject;
}
