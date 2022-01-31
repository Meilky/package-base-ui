import { DataObject } from "./store";

export type Data<T> = {
	[k in keyof T]: DataObject<T[k]>;
};
