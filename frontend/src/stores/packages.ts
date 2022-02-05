import { Package } from "./stores.I";
import { Store } from "./store";

class PackagesStore extends Store<Package[]> {
	constructor() {
		super();
	}

	protected init(): Package[] {
		return [];
	}
}



export default new PackagesStore();
