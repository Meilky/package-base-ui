import { Size } from "./stores.I";
import { Store } from "./store";

class SizeStore extends Store<Size> {
	constructor() {
		super();
	}

	protected init(): Size {
		return {
			width: window.innerWidth,
			heigth: window.innerHeight,
		};
	}
}

export default new SizeStore();
