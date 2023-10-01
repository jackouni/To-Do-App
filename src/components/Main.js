import { renderNav } from "./Nav";
import { todoSection } from "./TodoSection";

export function main() {
	const main = document.createElement("main");

	main.append(renderNav());
	main.append(todoSection());
	return main;
}
