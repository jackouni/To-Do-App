import "./styles/style.scss";

import header from "./components/header";
import main from "./components/main";

function initialize() {
	content.append(header());
	content.append(main());
}

initialize();
