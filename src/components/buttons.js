function button(content, idName, eventHandler, type) {
	let btn = document.createElement("button");

	btn.id = idName;
	btn.classList.add("btns");
	btn.type = type;
	btn.innerText = content;
	btn.addEventListener("click", eventHandler);

	return btn;
}

export default button;
