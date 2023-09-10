import button from "./buttons";
import addToDo from "../logic/add-todo";

// Creates a <fieldset>
function fieldset(idName) {
	const newFieldset = document.createElement("fieldset");
	newFieldset.id = idName;

	return newFieldset;
}

// Creates a <label>
function label(title, forAttr) {
	const newLabel = document.createElement("label");
	newLabel.innerText = title;
	newLabel.for = forAttr;

	return newLabel;
}

// Creates <input type="text">
function textInput(idName, nameAttr, min, max) {
	const newTextInput = document.createElement("input");

	newTextInput.type = "text";
	newTextInput.id = idName;
	newTextInput.name = nameAttr;

	return newTextInput;
}

// Creates <input type="radio">
function radioInput(idName, nameAttr, checked) {
	const newRadioInput = document.createElement("input");

	newRadioInput.type = "radio";
	newRadioInput.id = idName;
	newRadioInput.name = nameAttr;

	if (checked) newRadioInput.checked = true;

	return newRadioInput;
}

// Title input fieldset
function titleInputField() {
	const titleFieldset = fieldset("title-fieldset");

	titleFieldset.append(label("Title: ", "title"));
	titleFieldset.append(textInput("title", "title"));

	return titleFieldset;
}

// Due Date input fieldset
function dueDateInputField() {
	const dueFieldset = fieldset("due-fieldset");

	dueFieldset.append(label("due: ", "due"));
	dueFieldset.append(textInput("due", "due"));

	return dueFieldset;
}

// Priority input fieldset
function priorityInputField() {
	const priorityFieldset = fieldset("priority-fieldset");

	priorityFieldset.append(label("Priority Low: ", "priority"));
	priorityFieldset.append(radioInput("priority-low", "priority", true));

	priorityFieldset.append(label("Priority Moderate: ", "priority"));
	priorityFieldset.append(radioInput("priority-med", "priority", false));

	priorityFieldset.append(label("Priority High: ", "priority"));
	priorityFieldset.append(radioInput("priority-hi", "priority", false));

	return priorityFieldset;
}

// Submit button for form
// Reference: "src/components/buttons.js"
let submitBtn = button("Add", "submit-btn");

// Loads the entire form to be rendered.
function loadForm() {
	let form = document.createElement("form");
	form.id = "addToDoForm";

	form.append(titleInputField());
	form.append(dueDateInputField());
	form.append(priorityInputField());
	form.append(submitBtn);

	// Handles form submission
	// Reference: "src/logic/add-todo.js"
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		addToDo();
	});

	return form;
}

export default loadForm;
