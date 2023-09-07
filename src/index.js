import "./styles/style.scss";

import ToDo from "./todo-object";
import { button } from "./components/buttons";
import { header } from "./components/header";

let j = ToDo("Titleee", "sept 2", "this is a desc");

console.log(j.getDescription());

content.append(header());
