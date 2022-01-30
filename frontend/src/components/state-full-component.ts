import { BaseComponent } from "./component";
import { StateFullPropreties } from "./state-full-component.I";

export abstract class StateFullComponent<T> extends BaseComponent {
	protected states: T;

	constructor(props: StateFullPropreties<T>) {
		super(props);
		this.states = props.defaultValues;
	}

	protected abstract onRender(): void;

	protected setState(data: T): void {
		this.states = data;

		this.render();
	}
}
