import button from "./buttons";
import { ToDos, ToDo } from "../todo-object";
import { todos, toDoComponent } from "./todos";

// Creates a <fieldset>
function fieldset(title, inputType, inputName, value) {
	const inputField = document.createElement("fieldset");
	const label = document.createElement("label");
	const input = document.createElement("input");

	label.innerText = title;
	input.type = inputType;
	label.for = inputName;
	input.name = inputName;
	input.id = inputName;
	input.value = value;

	inputField.append(label);
	inputField.append(input);

	return inputField;
}

// Fieldset components that will append to <form>
// Will append in array order.
let fieldsets = [
	fieldset("Title: ", "text", "title", "Sample Text"),
	fieldset("Due Date: ", "text", "due", "dd/mm/yyyy"),
	fieldset("Priority", "text", "priority", "! / !! / !!!"),
	fieldset("Description: ", "text", "desc", "Do this thing, like this..."),
];

// Submit button for form
let submitBtn = button("Add", "submit-btn", "submit", (event) => {
	event.preventDefault();
	addTaskForm.style.display = "none";
});

// Loads the entire form to be rendered.
function loadForm() {
	let form = document.createElement("form");

	// Components in 'fieldsets' array will append to form.
	for (let i = 0; i < fieldsets.length; i++) {
		form.append(fieldsets[i]);
	}

	form.append(submitBtn);

	return form;
}

export default loadForm;
