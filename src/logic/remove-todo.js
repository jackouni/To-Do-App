import { ToDo, ToDos } from "../objects/ToDo";
import { todos, todoComponent } from "../components/todos";

export default function removeToDo(event) {
	const userConfirmed = confirm("Are you sure you want to remove this item?");
	const index = event.target.index;

	if (userConfirmed) {
		// Removes 'ToDo' object at specific index in ToDos array
		ToDos.splice(index, 1);

		// Removes the associated 'todo' element from the UI.
		todos[index].remove();

		// Removes the associated 'todo' element from the todos array.
		todos.splice(index, 1);

		// Updates each ToDo object's index/identifier using the ToDos array.
		for (let i = 0; i < ToDos.length; i++) {
			ToDos[i].setIndex(i);
		}

		// Updates each 'todo' element's indexes/identifiers using the todos array.
		for (let i = 0; i < todos.length; i++) {
			todos[i].id = `todo-${i}`;
			todos[i].querySelector(".check-bubble").index = i;
		}
	}
}
