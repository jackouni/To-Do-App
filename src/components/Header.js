import todoListImg from "../assets/imgs/todoListLogo.png";

export function header() {
	const header = document.createElement("header");

	let iconContainer = document.createElement("div");
	iconContainer.id = "logoIconContainer";

	let todoListIcon = new Image();
	todoListIcon.src = todoListImg;
	todoListIcon.id = "todoListImg";

	iconContainer.append(todoListIcon);

	header.append(iconContainer);

	return header;
}
