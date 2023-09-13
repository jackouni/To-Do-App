let projects = [];

const projectFactory = (title, date, desc, priority, index) => {
	let _title = title;
	let _date = date;
	let _desc = desc;
	let _priority = priority;
	let _index = index;

	const getTitle = () => _title;
	const getDate = () => _date;
	const getDescription = () => _desc;
	const getPriority = () => _priority;
	const getIndex = () => _index;

	const setIndex = (newIndex) => {
		if (typeof newIndex === "number") {
			_index = newIndex;
		} else return;
	};

	let newProject = {
		getTitle,
		getDate,
		getDescription,
		getPriority,
		getIndex,
		setIndex,
	};

	projects.push(newProject);

	console.log("Project Created...");
	return newProject;
};
