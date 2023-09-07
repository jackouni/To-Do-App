function button(content, idName, eventHandler) {
	let btn = document.createElement("button");

	idName = null ? "no id" : (btn.id = idName);

	btn.classList.add("btns");
	if (typeof content === "string") {
		btn.innerText = content;
	}

	btn.addEventListener("click", eventHandler);

	console.log("button made...");
	return btn;
}

export default button;
