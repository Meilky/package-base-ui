import { Store } from "stores/store";
import { BaseComponent } from "./component";
import { StateFullPropreties } from "./state-full-component.I";

export abstract class StateFullComponent<T extends { [key: string]: Store<any> }> extends BaseComponent {
	protected stores: T;

	constructor(props: StateFullPropreties<T>) {
		super(props);
		this.stores = props.stores;
	}

	protected abstract onRender(): void;
}
