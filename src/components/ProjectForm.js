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
	newTextInput.minLength = min;
	newTextInput.maxLength = max;

	return newTextInput;
}

// Title input fieldset
function titleInputField() {
	const titleFieldset = fieldset("titleFieldset");

	// Appends appropriate <input type="text"> and <label> elements to a <fieldset>.
	// Reference: Lines 1 ➡️ 27
	titleFieldset.append(label("Title: ", "title"));
	titleFieldset.append(textInput("title", "title", 2, 25));

	return titleFieldset;
}

// Due Date input fieldset
function dueDateInputField() {
	const dueFieldset = fieldset("dueFieldset");

	// Appends appropriate <input type="text"> and <label> elements.
	// Reference: Lines 1 ➡️ 27
	dueFieldset.append(label("due: ", "due"));
	dueFieldset.append(textInput("due", "due", 2, 150));

	return dueFieldset;
}

// Description input fieldset
function descInputField() {
	const dueFieldset = fieldset("descFieldset");

	// Appends appropriate <input type="text"> and <label> elements.
	// Reference: Lines 1 ➡️ 27
	dueFieldset.append(label("Description: ", "desc"));
	dueFieldset.append(textInput("desc", "desc"));

	return dueFieldset;
}

export function projectForm() {
	const form = document.createElement("form");
	form.id = "projectForm";

	form.append(titleInputField());
	form.append(dueDateInputField());
	form.append(descInputField());

	const submitBtn = document.createElement("btn");
	submitBtn.innerText = "SUBMIT";

	form.append(submitBtn);

	return form;
}
