import button from "./buttons";

// Creates a <fieldset>
function fieldset(title, inputType, inputName, value, idName) {
	const inputField = document.createElement("fieldset");
	const label = document.createElement("label");
	const input = document.createElement("input");

	label.innerText = title;
	input.type = inputType;
	label.for = inputName;
	input.name = inputName;
	input.id = idName;
	input.value = value;

	inputField.append(label);
	inputField.append(input);

	return inputField;
}

// Submit button for form
let submitBtn = button(
	"Add",
	"submit-btn",
	() => console.log("submit btn pressed"),
	"submit"
);

// Fieldset Components that will be appended to form.
// In order of appendage.
let fieldsets = [
	fieldset("Yo mama", "text", "name", "asdf", "ididid"),
	fieldset("DO this", "text", "IDK", "HAHAH", "yol"),
];

// Loads the entire form to be rendered.
function loadForm() {
	let form = document.createElement("form");

	for (let i = 0; i < fieldsets.length; i++) {
		form.append(fieldsets[i]);
	}

	form.append(submitBtn);

	return form;
}

export default loadForm;
