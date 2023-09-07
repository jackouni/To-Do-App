function button(content, idName, eventHandler) {
	let btn = document.createElement("button");

	idName = null ? "no id" : (btn.id = idName);

	btn.classList.add("buttons");
	if (typeof content === "string") {
		btn.innerText = content;
	}

	btn.addEventListener("click", eventHandler);

	console.log("button made...");
	return btn;
}

export { button };
