import { nav } from "./Nav";
import { todoSection } from "./TodoSection";

export function main() {
	const main = document.createElement("main");

	main.append(nav());
	main.append(todoSection());
	return main;
}
