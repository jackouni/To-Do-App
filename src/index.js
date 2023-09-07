import "./styles/style.scss";

import ToDo from "./todo-object";
import button from "./components/buttons";
import header from "./components/header";
import main from "./components/main";
import form from "./components/forms";

function initialize() {
	content.append(header());
	content.append(form());
}

initialize();
