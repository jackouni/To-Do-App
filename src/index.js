import "./styles/style.scss";

import { ToDos, ToDo } from "./objects/ToDo";
import button from "./components/buttons";
import header from "./components/header";
import main from "./components/main";
import form from "./components/forms";
import todo from "./components/todos";

function initialize() {
	content.append(header());
	content.append(main());
}

initialize();
