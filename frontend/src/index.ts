import { App } from "./components/app";

let app = document.getElementById("App");

if (!app) {
	throw "No app element";
}

let appComponent = new App();

app.appendChild(appComponent.get());

window.addEventListener('resize', () => {
	appComponent.render()
});
