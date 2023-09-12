import { ToDo, ToDos } from "../objects/ToDo";

export default function removeToDo(event) {
	console.log("removeToDo() function invoked.");
	console.log(event.target.index);
}
