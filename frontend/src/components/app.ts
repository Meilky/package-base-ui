import { BaseComponent } from "./component";
import { NavBar } from "./nav-bar/nav-bar";
import { TopBar } from "./top-bar/top-bar";

export class App extends BaseComponent {
	constructor() {
		super({ element: document.createElement("div") });

		this.children = [new TopBar(), new NavBar()];

		this.appendChildren();
	}

	public onRender(): void {
		return
	}
}
