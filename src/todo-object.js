const ToDo = (title, date, desc, priority) => {
	const getTitle = () => title;
	const getDate = () => date;
	const getDescription = () => desc;
	const getPriority = () => priority;

	console.log("ToDo Created...");
	return { getTitle, getDate, getDescription, getPriority };
};

const Project = (title, date, desc, priority) => {
	const getTitle = () => title;
	const getDate = () => date;
	const getDescription = () => desc;
	const getPriority = () => priority;

	console.log("ToDo Created...");
	return { getTitle, getDate, getDescription, getPriority };
};

export { ToDo, Project };
