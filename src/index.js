import "./styles/style.scss";

import { ToDo, ToDos } from "./todo-object";
import button from "./components/buttons";
import header from "./components/header";
import main from "./components/main";
import form from "./components/forms";
import { toDoComponent } from "./components/todos";

function initialize() {
	content.append(header());
	content.append(main());
}

initialize();
