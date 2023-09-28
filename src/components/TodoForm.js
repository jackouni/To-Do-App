import { parse, format } from "date-fns";
import { addTodo } from "../logic/add-todo";
import { isDuplicatedTodoName, isProjectFormActive } from "../logic/form-validation";

function formTitle() {
	let newTitle = document.createElement("h2");
	newTitle.classList.add("formTitle");
	newTitle.innerText = "New Todo";

	return newTitle;
}

function fieldset(idName) {
	const newFieldset = document.createElement("fieldset");
	newFieldset.id = idName;

	return newFieldset;
}

function label(labelTitle, forAttr) {
	const newLabel = document.createElement("label");
	newLabel.innerText = labelTitle;
	newLabel.for = forAttr;

	return newLabel;
}

function textInput(idName, nameAttr, min, max) {
	const newTextInput = document.createElement("input");

	newTextInput.type = "text";
	newTextInput.id = idName;
	newTextInput.name = nameAttr;
	newTextInput.minLength = min;
	newTextInput.maxLength = max;

	return newTextInput;
}

function dateInput(idName, nameAttr) {
	const newDateInput = document.createElement("input");

	newDateInput.type = "date";
	newDateInput.id = idName;
	newDateInput.name = nameAttr;

	return newDateInput;
}

function textareaInput(idName, nameAttr, row, col) {
	const newTextarea = document.createElement("textarea");

	newTextarea.id = idName;
	newTextarea.name = nameAttr;
	newTextarea.rows = row;
	newTextarea.cols = col;

	return newTextarea;
}

function titleFieldset() {
	// Reference Lines 3 ➡ 28
	let titleField = fieldset("titleFieldset");
	let titleLable = label("Title: ", "title");
	let titleInputField = textInput("title", "title", 2, 15);

	titleField.append(titleLable);
	titleField.append(titleInputField);

	return titleField;
}

function dateFieldset() {
	let dateField = fieldset("dateFieldset");
	let dateLable = label("Date: ", "date");
	let dateInputField = dateInput("date", "date");

	dateField.append(dateLable);
	dateField.append(dateInputField);

	return dateField;
}

function descFieldset() {
	let descField = fieldset("descFieldset");
	let descLable = label("Description: ", "desc");
	let descTextarea = textareaInput("desc", "desc", 4, 15);

	descField.append(descLable);
	descField.append(descTextarea);

	return descField;
}

function submitBtn() {
	let btn = document.createElement("button");
	btn.id = "submitBtn";
	btn.type = "submit";
	btn.innerText = "SUBMIT";

	return btn;
}

function cancelBtn() {
	let btn = document.createElement("button");
	btn.id = "cancelBtn";
	btn.type = "button";
	btn.innerText = "CANCEL";
	btn.addEventListener("click", () => {
		if (document.querySelector("#todoForm")) {
			let form = document.querySelector("#todoForm");
			form.remove();
		}
	});

	return btn;
}

function btnsContainer() {
	let btnContainer = document.createElement("div");
	btnContainer.id = "btnsContainer";

	btnContainer.append(submitBtn());
	btnContainer.append(cancelBtn());

	return btnContainer;
}

export function todoForm() {
	isProjectFormActive();

	let form = document.createElement("form");
	form.id = "todoForm";

	form.append(formTitle());
	form.append(titleFieldset());
	form.append(dateFieldset());
	form.append(descFieldset());
	form.append(btnsContainer());

	form.addEventListener("submit", (event) => {
		console.log("Submit Event Triggered");
		event.preventDefault();
		if (isDuplicatedTodoName()) {
			alert(
				"Todo names must be unique, and not the same as other todo names in your project."
			);
		} else {
			addTodo();
		}
	});

	return form;
}
