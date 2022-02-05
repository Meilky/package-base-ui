import { StateFullComponent } from "./../state-full-component";
import PackagesStore from "../../stores/packages";
import { Package } from "stores/stores.I";

export class NavBar extends StateFullComponent<{ packages: typeof PackagesStore }> {
	constructor() {
		super({
			element: document.createElement("div"),
			stores: {
				packages: PackagesStore,
			},
		});
	}

	protected beforeRender(): void {
		this.element.innerHTML = "";
	}

	public onRender(): void {
		for (const p of this.stores.packages.value) {
			this.element.innerHTML += navBarItem(p);
		}
	}
}

const navBarItem = (props: Package): string => {
	let item: string = "<div>";

	const name = `<h3>${props.name}</h3>`;
	const description = `<p>${props.description}</p>`;

	item += name + description;
	item += "</div>";

	return item;
};
