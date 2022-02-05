import { StateFullComponent } from "./../state-full-component";
import { TopBar as TopBarStyle } from "./style.module.css";
import SizeStore from "../../stores/size";

export class TopBar extends StateFullComponent<{ size: typeof SizeStore }> {
	constructor() {
		super({
			element: document.createElement("div"),
			stores: {
				size: SizeStore,
			},
		});

		this.element.className = TopBarStyle;
	}

	public onRender(): void {
		const size = this.stores.size.value;

		this.element.innerText = "Package App " + size.width.toString() + "," + size.heigth.toString();
	}
}
