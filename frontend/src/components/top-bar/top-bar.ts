import { BaseComponent } from "../component";
import { TopBar as TopBarStyle } from "./style.module.css";

export class TopBar extends BaseComponent {
	constructor() {
		super({ element: document.createElement("div") });

		this.element.className = TopBarStyle;
	}

	public onRender() {
		let viewport_width = window.innerWidth;
		let viewport_height = window.innerHeight;

		this.element.innerText = "Package App " + viewport_width.toString() + "," + viewport_height.toString();
	}
}
