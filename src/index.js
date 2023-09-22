import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
import "./styles/todo-section.scss";
import "./styles/todo.scss";
import "./styles/form.scss";
import "./styles/project.scss";

import header from "./components/header";
import main from "./components/main";
import { ProjectComponent } from "./components/projects";
import { projectFactory } from "./objects/project-object";
import { TodoComponent } from "./components/todos";
export { TodoComponent } from "./components/todos";
import { todoFactory } from "./objects/todo-object";
import { setCurrentProject } from "./logic/project-navigation";

function initialize() {
	content.append(header());
	content.append(main());
	let nav = document.getElementById("nav");
	let tasks = document.getElementById("tasks");

	projectFactory("Example Project", "due date", "desc");
	nav.append(ProjectComponent("Example Project"));

	todoFactory("Sample Task", "Due...", "desc", "!", 0);
	tasks.append(TodoComponent("Sample Task", "Due...", "desc", "!", 0));
}

initialize();
