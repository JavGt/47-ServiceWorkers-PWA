// Saber si soporta el navegador "serviceWorker"
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("./sw.js")
		.then((registrado) => console.log("Se registro correctamente", registrado))
		.catch((error) => console.log("Fallo la instalacion", error));
} else {
	console.log("Service no soportado");
}
