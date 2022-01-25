import { App } from "./App";

let app = document.getElementById("App");


if(!app) {
	throw "No app element";
}

let appComponent = new App();

app.appendChild(appComponent.getElement())
