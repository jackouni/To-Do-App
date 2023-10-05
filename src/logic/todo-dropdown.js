export function toggleDropDown(event) {
	console.log(`animateDropDown(${event.target}) invoked`);
	if (
		!event.target.classList.contains("checkbox") &&
		!event.target.classList.contains("edit-todo") &&
		!event.target.classList.contains("edit-todo-icon")
	) {
		console.log("Valid click, animateDropDown in effect");
		let todoName = event.target.todoElement;

		let currentDropDown = document.getElementById(`dropdown-${todoName}`);
		currentDropDown.classList.toggle("active-dropdown");
	}
}
