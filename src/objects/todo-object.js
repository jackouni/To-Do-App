let todoObjects = [];

const todoFactory = (title, date, desc, priority, index) => {
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

	let newTodo = {
		getTitle,
		getDate,
		getDescription,
		getPriority,
		getIndex,
		setIndex,
	};

	todoObjects.push(newTodo);

	console.log("Todo Object Created...");
	return newTodo;
};

export { todoObjects, todoFactory };
