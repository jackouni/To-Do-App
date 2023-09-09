function button(content, idName, eventType, eventHandler, type) {
	let btn = document.createElement("button");

	btn.id = idName;
	btn.classList.add("btns");
	btn.type = type;
	btn.innerText = content;
	btn.addEventListener(`${eventType}`, eventHandler);

	return btn;
}

export default button;
