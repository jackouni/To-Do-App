let ToDos = [];

const ToDo = (title, date, desc, priority) => {
	const getTitle = () => title;
	const getDate = () => date;
	const getDescription = () => desc;
	const getPriority = () => priority;

	let newToDo = { getTitle, getDate, getDescription, getPriority };
	ToDos.push(newToDo);

	console.log("ToDo Created...");
	return newToDo;
};

export { ToDo, ToDos };
