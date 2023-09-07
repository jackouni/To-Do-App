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

function form() {
	let form = document.createElement("form");

	form.append(fieldset("Yo mama", "text", "name", "asdf", "ididid"));
	form.append(fieldset("DO this", "text", "IDK", "HAHAH", "yol"));

	return form;
}

export default form;
