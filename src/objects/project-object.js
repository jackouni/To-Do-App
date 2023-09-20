let projectObjects = [];

const projectFactory = (title, date, desc) => {
	let _title = title;
	let _date = date;
	let _desc = desc;
	let _index = projectObjects.length;

	let _projectTodos = [];

	const getTitle = () => _title;
	const getDate = () => _date;
	const getDescription = () => _desc;

	const getIndex = () => _index;
	const setIndex = (newIndex) => {
		if (typeof newIndex === "number") {
			_index = newIndex;
		} else return;
	};

	const getTodos = () => _projectTodos;
	const storeTodo = (todo) => {
		_projectTodos.push(todo);
	};
	const removeTodo = (index) => {
		_projectTodos.splice(index, 1);
	};

	let newProject = {
		getTitle,
		getDate,
		getDescription,
		getIndex,
		setIndex,
		getTodos,
		storeTodo,
		removeTodo,
	};

	projectObjects.push(newProject);

	console.log("Project Object Created...");
	return newProject;
};

export { projectFactory, projectObjects };
