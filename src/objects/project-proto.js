let projectMethods = {
	getTitle: function () {
		this._title;
	},
	setTitleName: function (newTitle) {
		this._title = newTitle;
		this._name = `project-${newTitle}`;
	},

	getDate: function () {
		this._date;
	},

	getDesc: function () {
		this._desc;
	},
	setDesc: function (newDesc) {
		this._desc = newDesc;
	},

	// Used to 'Get' the index of the project in 'projectObjects' array.
	getIndex: function () {
		this._index;
	},
	// Used to set the project's index reference for the 'projectObjects' array.
	setIndex: function (newIndex) {
		if (typeof newIndex === "number") {
			this._index = newIndex;
		} else return;
	},

	// Gets, stores and removes todos from the project's 'projectTodos' array.
	getTodos: function () {
		this._projectTodos;
	},
	storeTod: function (todo) {
		this._projectTodos.push(todo);
	},
	removeTo: function (index) {
		this._projectTodos.splice(index, 1);
	},
};

export default projectMethods;
