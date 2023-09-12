function button(content, idName, eventType, eventHandler) {
	let btn = document.createElement("button");

	btn.id = idName;
	btn.classList.add("btns");
	btn.type = eventType;
	btn.innerText = content;
	btn.addEventListener(eventType, eventHandler);

	return btn;
}

export default button;
