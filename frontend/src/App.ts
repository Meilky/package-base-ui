import { BaseComponent, Component } from "./component";

class Test extends BaseComponent<{}> {
	constructor() {
		super({});
	}

	public render(): void {
		this.element.innerHTML = "test";
	}
}

export class App extends BaseComponent<{}> {
	public elements: Component[];
	constructor() {
		super({});
		this.elements = [new Test()];
	}

	public render(): void {
		for (const e of this.elements) {
			this.element.appendChild(e.getElement());
		}
	}
}
