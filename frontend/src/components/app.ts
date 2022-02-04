import { BaseComponent } from "./component";
import { TopBar } from "./top-bar/top-bar";

export class App extends BaseComponent {
	constructor() {
		super({ element: document.createElement("div") });

		this.children = [new TopBar()];

		this.appendChildren();
	}

	public onRender(): void {
		return
	}
}
