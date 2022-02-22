import { BaseStore } from "../stores/store";
import { StateLessComponent } from "./component";
import { StateFullPropreties } from "./state-full-component.I";

export abstract class StateFullComponent<T extends { [key: string]: BaseStore<any> }> extends StateLessComponent {
	protected stores: T;

	constructor(props: StateFullPropreties<T>) {
		super(props);
		this.stores = props.stores;

		this.update = this.update.bind(this);

		for (const store in this.stores) {
			this.stores[store].addListener(this.update);
		}
	}

	protected beforeUpdate() {}

	public update() {
		if (this.isRendered()) {
			this.beforeUpdate();
			this.removeChildren();
			this.onUpdate();
			this.appenChildren();
			this.afterUpdate();
		} else {
			this.remove();
		}
	}

	protected abstract onUpdate(): void;

	protected afterUpdate() {}

	public remove(): void {
		for (const store in this.stores) {
			this.stores[store].removeListener(this.update);
		}

		super.remove();
	}
}
