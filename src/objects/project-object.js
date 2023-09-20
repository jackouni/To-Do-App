import projectMethods from "./project-proto";
let projectObjects = [];

const projectFactory = (title, date, desc) => {
	let _title = title;
	let _date = date;
	let _desc = desc;
	let _name = `project-${title}`;

	// Used to reference the project's index within the 'projectObjects' array.
	let _index = projectObjects.length;

	// Stores the Todos associated with this specific project.
	let _projectTodos = [];

	// Creates a new object with the 'mock-proto'
	let newProject = Object.assign({}, projectMethods);

	projectObjects.push(newProject);

	console.log("Project Object Created...");
	return newProject;
};

export { projectFactory, projectObjects };
