let projectMethods = {
	getTitle: function () {
		return this._title;
	},
	setTitleName: function (newTitle) {
		this._title = newTitle;
		this._name = `project-${newTitle}`;
	},

	getDate: function () {
		return this._date;
	},

	getDesc: function () {
		return this._desc;
	},
	setDesc: function (newDesc) {
		this._desc = newDesc;
	},

	// Used to 'Get' the index of the project in 'projectObjects' array.
	getIndex: function () {
		return this._index;
	},
	// Used to set the project's index reference for the 'projectObjects' array.
	setIndex: function (newIndex) {
		if (typeof newIndex === "number") {
			this._index = newIndex;
		} else return;
	},

	// Gets, stores and removes todos from the project's 'projectTodos' array.
	getTodos: function () {
		return this._projectTodos;
	},
	storeTodo: function (todo) {
		this._projectTodos.push(todo);
	},
	removeTo: function (index) {
		this._projectTodos.splice(index, 1);
	},

	addTodo: function (todo) {
		this._projectTodos.push(todo);
	},
	removeTodo: function (todoName) {
		const index = this._projectTodos.findIndex((todo) => todo.name === todoName);
		if (index !== -1) {
			this._projectTodos.splice(index, 1);
		}
	},
};

export default projectMethods;
