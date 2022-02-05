export class Store<T> {
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

	constructor(defaultValue: T) {
		this._value = defaultValue;
		this.listeners = [];
	}

	public addListerner(callback: (value: any) => void): void {
		this.listeners.push(callback);
	}
}
