import "./styles/style.scss";

import { ToDo, ToDos } from "./todo-object";
import button from "./components/buttons";
import header from "./components/header";
import main from "./components/main";
import form from "./components/forms";
import { todos, toDoComponent } from "./components/todos";

let example = ToDo("Task", "01/01/2001", "desc", "!!");
todos.push(example);

function initialize() {
	content.append(header());
	content.append(main());
}

initialize();
