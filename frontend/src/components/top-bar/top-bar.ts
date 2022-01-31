import { StateFullComponent } from "./../state-full-component";
import { TopBar as TopBarStyle } from "./style.module.css";
import { SizeStore } from "../../stores/stores";

export class TopBar extends StateFullComponent<{ size: typeof SizeStore }> {
	constructor() {
		super({
			element: document.createElement("div"),
			stores: {
				size: SizeStore,
			},
		});

		this.stores.size.data.width.addListerner(this.render);
		this.stores.size.data.heigth.addListerner(this.render);

		this.element.className = TopBarStyle;
	}

	public onRender() {
		let viewport_width = this.stores.size.data.width.value;
		let viewport_height = this.stores.size.data.heigth.value;

		this.element.innerText = "Package App " + viewport_width.toString() + "," + viewport_height.toString();
	}
}
