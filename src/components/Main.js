import { nav } from "./Nav";

export function main() {
	const main = document.createElement("main");

	main.append(nav());
	return main;
}
