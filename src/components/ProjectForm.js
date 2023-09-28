import { addProject } from "../logic/add-project";
import { isDuplicatedProjectName } from "../logic/form-validation";

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

function titleFieldset() {
	// Reference Lines 3 ➡ 28
	let titleField = fieldset("titleFieldset");
	let titleLable = label("Title: ", "title");
	let titleInputField = textInput("title", "title", 2, 15);

	titleField.append(titleLable);
	titleField.append(titleInputField);

	return titleField;
}

function submitBtn() {
	let btn = document.createElement("button");
	btn.type = "submit";
	btn.innerText = "SUBMIT";

	return btn;
}

export function projectForm() {
	let form = document.createElement("form");
	form.id = "projectForm";

	form.append(titleFieldset());
	form.append(submitBtn());

	form.addEventListener("submit", (event) => {
		console.log("Submit Event Triggered");
		event.preventDefault();
		if (isDuplicatedProjectName()) {
			alert(
				"Cannot have duplicated or repeated project name. A project's name must be unique to others."
			);
		} else {
			addProject();
		}
	});

	return form;
}
