import { Store } from "./store";

export const SizeStore = new Store<{ width: number; heigth: number }>({
	width: window.innerWidth,
	heigth: window.innerHeight,
});
