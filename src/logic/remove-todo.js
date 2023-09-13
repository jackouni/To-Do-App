import { todoObjects } from "../objects/ToDos";
import { todoElements } from "../components/todos";

export default function removeToDo(event) {
	const userConfirmed = confirm("Are you sure you want to remove this item?");
	const index = event.target.index;

	if (userConfirmed) {
		// Removes 'ToDo' object at specific index in todoObjects array
		todoObjects.splice(index, 1);

		// Removes the associated 'todo' element from the UI.
		todoElements[index].remove();

		// Removes the associated 'todo' element from the todoElements array.
		todoElements.splice(index, 1);

		// Updates each ToDo object's index/identifier using the todoObjects array.
		for (let i = 0; i < todoObjects.length; i++) {
			todoObjects[i].setIndex(i);
		}

		// Updates each 'todo' element's indexes/identifiers using the todoElements array.
		for (let i = 0; i < todoElements.length; i++) {
			todoElements[i].id = `todo-${i}`;
			todoElements[i].querySelector(".check-bubble").index = i;
		}
	}
}
