import "./styles/content.scss";
import "./styles/css-reset.css";
import "./styles/projectForm.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
import "./styles/main.scss";
import "./styles/todos.scss";
import "./styles/project.scss";

import { header } from "./components/Header";
import { main } from "./components/Main";

const content = document.getElementById("content");

content.append(header());
content.append(main());
