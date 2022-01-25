export interface Component {
	getElement(): HTMLElement;
	render(): void;
}

export abstract class BaseComponent<T> implements Component {
	protected element: HTMLElement;
	protected states: T;

	constructor(defaultStates: T) {
		this.element = document.createElement("div");
		this.states = defaultStates;
	}

	public setState<K extends keyof T>(key: K, value: T[K]): void {
		if (this.states[key] !== value) {
			this.states[key] = value;
			this.render();
		}
	}

	public getElement(): HTMLElement {
		this.render();
		return this.element;
	}

	abstract render(): void;
}
