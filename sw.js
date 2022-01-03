// Cuando se instala el service worker
self.addEventListener("install", (e) => {
	console.log("Instalado el serviceWorker");

	console.log(e);
});

// Activa el service Worker
self.addEventListener("activate", (e) => {
	console.log("ServiceWorker activado");

	console.log(e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener("fetch", (e) => {
	console.log("fetch...");
    
	console.log(e);
});
