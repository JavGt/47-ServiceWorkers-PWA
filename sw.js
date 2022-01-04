const nombreCache = "apv-1";
const archivos = [
	"/",
	"/index.html",
	"/error.html",
	"/css/bootstrap.css",
	"/css/styles.css",
	"/js/app.js",
	"/js/apv.js",
	"/manifest.json",
];

// Cuando se instala el service worker
self.addEventListener("install", (e) => {
	console.log("Instalado el serviceWorker");

	e.waitUntil(
		caches.open(nombreCache).then((cache) => {
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
// self.addEventListener("fetch", (e) => {
// 	console.log("fetch...", e);

// 	e.respondWith(
// 		caches
// 			.match(e.request)
// 			.then((respuestaCache) => respuestaCache)
// 			.catch(() => caches.match("/error.html"))
// 	);
// });

self.addEventListener("fetch", (e) => {
	console.log("Fetch", e);

	e.respondWith(
		caches
			.match(e.request)
			.then((cacheResponse) =>
				cacheResponse ? cacheResponse : caches.match("error.html")
			)
	);
});
