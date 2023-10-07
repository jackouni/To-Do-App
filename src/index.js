import "./styles/content.scss";
import "./styles/css-reset.css";
import "./styles/form.scss";
import "./styles/projectForm.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
import "./styles/main.scss";
import "./styles/todos.scss";
import "./styles/project.scss";
import "./styles/todoForm.scss";
import "./styles/inline-edit.scss";

import { header } from "./components/Header";
import { main } from "./components/Main";

import { renderProjectTitle } from "./components/TodoSection";
import { renderAllTodos } from "./components/TodoSection";
import { renderProjectElements } from "./components/Nav";

const content = document.getElementById("content");

content.append(header());
content.append(main());
renderProjectElements();
renderProjectTitle();
renderAllTodos();
