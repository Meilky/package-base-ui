import { Data } from "./store.I";

export class DataObject<T> {
	protected _value: T;
	protected listeners: ((key: string, value: any) => void)[];

	public get value(): T {
		return this._value;
	}

	public set value(v: T) {
		this._value = v;
		for (const c of this.listeners) {
			c(this._key, this._value);
		}
	}

	constructor(protected _key: string, defaultValue: T) {
		this._value = defaultValue;
		this.listeners = [];
	}

	public addListerner(callback: (key: string, value: any) => void) {
		this.listeners.push(callback);
	}
}

export class Store<T> {
	public readonly data: Data<T>;

	constructor(protected initData: T) {
		let initStore = {} as Data<T>;

		for (const k in initData) {
			initStore[k] = new DataObject(k, initData[k]);
		}

		this.data = initStore;
	}
}
