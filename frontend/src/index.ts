import { App } from "./components/app";
import { SizeStore } from "./stores/stores";

let app = document.getElementById("App");

if (!app) {
	throw "No app element";
}

let appComponent = new App();

app.appendChild(appComponent.get());

window.addEventListener("resize", () => {
	SizeStore.data.width.value = window.innerWidth;
	SizeStore.data.heigth.value = window.innerHeight;
});
