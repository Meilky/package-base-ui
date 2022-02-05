export abstract class Store<T> {
	protected _value: T;
	protected listeners: ((value: any) => void)[];

	public get value(): T {
		return this._value;
	}

	public set value(v: T) {
		this._value = v;
		for (const c of this.listeners) {
			c(this._value);
		}
	}

	constructor() {
		this._value = this.init();
		this.listeners = [];
	}

	protected abstract init(): T;

	public addListerner(callback: (value: any) => void): void {
		this.listeners.push(callback);
	}
}
