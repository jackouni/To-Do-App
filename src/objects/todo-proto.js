let todoMethods = {
	getTitle: function () {
		return this._title;
	},
	setTitle: function (newTitle) {
		this._title = newTitle;
	},

	getDate: function () {
		return this._date;
	},

	getDescription: function () {
		return this._desc;
	},

	getPriority: function () {
		return this._priority;
	},

	getProjectId: function () {
		return this._projectId;
	},
	setProjectId: function (newProjectId) {
		this._projectId = newProjectId;
	},

	getIndex: function () {
		return this._index;
	},
	setIndex: function (newIndex) {
		if (typeof newIndex === "number") {
			this._index = newIndex;
		} else return;
	},
};

export default todoMethods;
