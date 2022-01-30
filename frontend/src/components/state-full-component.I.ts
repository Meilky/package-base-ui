import { Props } from "./component.I";

export interface StateFullPropreties<T> extends Props {
	binds: string[];
	defaultValues: T;
}
