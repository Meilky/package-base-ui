import { Component, Propreties, DefaultProps, Props } from "./component.I";

const defaultProps: DefaultProps = {
	render: {
		mobile: true,
		desktop: true,
	},
};

export abstract class BaseComponent implements Component {
	protected element: HTMLElement;
	protected children: Component[];
	protected isMobile: boolean;

	public readonly propreties: Propreties;

	constructor(props: Props) {
		this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		this.children = [];
		this.element = props.element;
		this.propreties = { ...props, ...defaultProps };
	}

	protected beforeRender() {}

	public render() {
		if (this.isRendered()) {
			this.beforeRender();
			this.onRender();
			this.afterRender();
		} else this.element.style.display = "none";
	}

	protected abstract onRender(): void;

	protected afterRender() {}

	protected beforeDestroy() {}

	public destroy() {
		this.beforeDestroy();
		this.destroyChildren();
		this.removeElement();
		this.afterDestroy();
	}

	protected destroyChildren() {
		for (const child of this.children) child.destroy();
	}

	protected removeElement() {
		if (this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
		}
	}

	protected afterDestroy() {}

	public get(): HTMLElement {
		this.render();
		return this.element;
	}

	protected isRendered(): boolean {
		return (this.isMobile && this.propreties.render.mobile) || (!this.isMobile && this.propreties.render.desktop);
	}

	protected appendChildren(): void {
		for (const child of this.children) {
			this.element.append(child.get());
		}
	}
}
