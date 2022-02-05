import { Package, Size } from "./stores.I";
import { Store } from "./store";

export const SizeStore = new Store<Size>({
	width: window.innerWidth,
	heigth: window.innerHeight,
});

export const PackageStore = new Store<Package>({
	name: "big boy",
	description: "kjdslfjsdlk"
});
