import { StateLessComponent } from "../lib/components/component";
import { NavBar } from "./nav-bar/nav-bar";
import { TopBar } from "./top-bar/top-bar";

export class App extends StateLessComponent {
	constructor() {
		super({ element: document.createElement("div") });

		this.init();
	}

	public init(): void {
		this.children = [new TopBar(), new NavBar()];

		this.appenChildren();
	}
}
