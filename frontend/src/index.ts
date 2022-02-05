import { App } from "./components/app";
import SizeStore from "./stores/size";
import PackagesStore from "./stores/packages";

const app = document.getElementById("App");

if (!app) {
	throw "No app element";
}

const appComponent = new App();

app.appendChild(appComponent.get());

window.addEventListener("resize", () => {
	SizeStore.value = { width: window.innerWidth, heigth: window.innerHeight };
});

 const init = async () =>{
	const res = await fetch("/api/")
	const packages = await res.json()

	PackagesStore.value = packages;
}

init()
