import { todoObjects } from "../objects/todo-object";
import { allTodoElements } from "../components/todos";

export default function removeToDo(event) {
	const userConfirmed = confirm("Are you sure you want to remove this item?");
	const index = event.target.index;

	if (userConfirmed) {
		// Removes 'ToDo' object at specific index in todoObjects array
		console.log(`Todo object removed: ${todoObjects[index].getTitle()}`);
		todoObjects.splice(index, 1);

		// Removes the associated 'todo' element from the UI.
		console.log(`Todo element removed from UI: ${allTodoElements[index].id}`);
		allTodoElements[index].remove();

		// Removes the associated 'todo' element from the allTodoElements array.
		console.log(`Element removed from Elements array: ${allTodoElements[index].id}`);
		allTodoElements.splice(index, 1);

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

		// Updates each 'todo' element's indexes/identifiers using the allTodoElements array.
		for (let i = 0; i < allTodoElements.length; i++) {
			allTodoElements[i].id = `todo-${i}`;
			allTodoElements[i].querySelector(".check-bubble").index = i;
		}
	}
}
