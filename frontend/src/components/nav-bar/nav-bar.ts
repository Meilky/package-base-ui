import { StateFullComponent } from "./../state-full-component";
import { PackageStore } from "../../stores/stores";

export class NavBar extends StateFullComponent<{ package: typeof PackageStore }> {
	constructor() {
		super({
			element: document.createElement("div"),
			stores: {
				package: PackageStore,
			},
		});

		this.stores.package.addListerner(this.render);
	}

	public onRender(): void {
		this.element.innerText = "name :"+this.stores.package.value.name + " description :" + this.stores.package.value.description;
	}
}
