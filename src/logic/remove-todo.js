import { todoObjects } from "../objects/todo-object";
import { todoElements } from "../components/todos";

export default function removeToDo(event) {
	const userConfirmed = confirm("Are you sure you want to remove this item?");
	const index = event.target.index;

	if (userConfirmed) {
		// Removes 'ToDo' object at specific index in todoObjects array
		console.log(`Todo object removed: ${todoObjects[index].getTitle()}`);
		todoObjects.splice(index, 1);

		// Removes the associated 'todo' element from the UI.
		console.log(`Todo element removed from UI: ${todoElements[index].id}`);
		todoElements[index].remove();

		// Removes the associated 'todo' element from the todoElements array.
		console.log(`Element removed from Elements array: ${todoElements[index].id}`);
		todoElements.splice(index, 1);

		// Updates each ToDo object's index/identifier using the todoObjects array.
		for (let i = 0; i < todoObjects.length; i++) {
			todoObjects[i].setIndex(i);

			// Console.log Debugging:
			console.log(
				`Todo objects "${todoObjects[
					i
				].getTitle()}" index in objects array = ${todoObjects[i].getIndex()}`
			);
		}

		// Updates each 'todo' element's indexes/identifiers using the todoElements array.
		for (let i = 0; i < todoElements.length; i++) {
			todoElements[i].id = `todo-${i}`;
			todoElements[i].querySelector(".check-bubble").index = i;
		}
	}
}
