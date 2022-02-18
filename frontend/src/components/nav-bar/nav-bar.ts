import { StateFullComponent } from "../../lib/components/state-full-component";
import PackagesStore from "../../stores/packages";
import { Package } from "../../stores/stores.I";
import { StateLessComponent } from "../../lib/components/component";

export class NavBar extends StateFullComponent<{ packages: typeof PackagesStore }> {
	constructor() {
		super({
			element: document.createElement("div"),
			stores: {
				packages: PackagesStore,
			},
		});

		this.init();
	}

	public init(): void {
		this.update();
	}

	protected beforeUpdate(): void {
		this.children = [];
	}

	public onUpdate(): void {
		const packages = this.stores.packages.value;
		for (const pack of packages) {
			this.children.push(new NavBarItem(pack));
		}
	}
}

class NavBarItem extends StateLessComponent {
	protected item: Package;

	constructor(props: Package) {
		super({
			element: document.createElement("div"),
		});

		this.item = props;
		this.init();
	}

	public init(): void {
		const name = `<h3>${this.item.name}</h3>`;
		const description = `<p>${this.item.description}</p>`;

		this.element.innerHTML = name + description;
	}
}
