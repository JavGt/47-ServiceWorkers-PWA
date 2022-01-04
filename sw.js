const nombreCache = "apv-1";
const archivos = [
	"/",
	"/index.html",
	"/css/bootstrap.css",
	"/css/styles.css",
	"/js/app.js",
	"/js/apv.js",
];

// Cuando se instala el service worker
self.addEventListener("install", (e) => {
	console.log("Instalado el serviceWorker");

	e.waitUntil(
		caches.open(nombreCache)
            .then((cache) => {
			console.log("Cacheando");
			cache.addAll(archivos);
		})
	);
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
