export function toggleDropDown(event) {
	console.log(`animateDropDown(${event.target}) invoked`);
	if (!event.target.classList.contains("checkbox")) {
		let todoName = event.target.todoElement;

		let currentDropDown = document.getElementById(`dropdown-${todoName}`);
		currentDropDown.classList.toggle("active-dropdown");
	}
}
