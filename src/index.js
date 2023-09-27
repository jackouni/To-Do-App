import "./styles/content.scss";
import "./styles/css-reset.css";
import "./styles/projectForm.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
import "./styles/main.scss";
import "./styles/todos.scss";
import "./styles/project.scss";

import { currentProject } from "./logic/project-nav";
import { allProjects, projectFactory } from "./objects/project-object";
import { todoFactory } from "./objects/todo-object";
import { header } from "./components/Header";
import { main } from "./components/Main";
import { nav } from "./components/Nav";

const content = document.getElementById("content");

content.append(header());
content.append(main());
