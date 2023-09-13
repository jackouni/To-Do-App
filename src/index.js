import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
import "./styles/todo-section.scss";
import "./styles/todo.scss";
import "./styles/form.scss";

import header from "./components/header";
import main from "./components/main";

function initialize() {
	content.append(header());
	content.append(main());
}

initialize();
