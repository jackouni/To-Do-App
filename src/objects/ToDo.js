let ToDos = [];

const ToDo = (title, date, desc, priority, index) => {
	const getTitle = () => title;
	const getDate = () => date;
	const getDescription = () => desc;
	const getPriority = () => priority;
	const getIndex = () => index;

	let newToDo = {
		getTitle,
		getDate,
		getDescription,
		getPriority,
		getIndex,
	};

	ToDos.push(newToDo);

	console.log("ToDo Created...");
	return newToDo;
};

export { ToDo, ToDos };
