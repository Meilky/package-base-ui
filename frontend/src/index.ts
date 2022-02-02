import { App } from "./components/app";
import { SizeStore } from "./stores/stores";

const app = document.getElementById("App");

if (!app) {
	throw "No app element";
}

const appComponent = new App();

app.appendChild(appComponent.get());

window.addEventListener("resize", () => {
	SizeStore.data.width.value = window.innerWidth;
	SizeStore.data.heigth.value = window.innerHeight;
});
