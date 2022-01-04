const nombreCache = "apv-6";
const archivos = [
	"/",
	"/index.html",
	"/error.html",
	"/css/bootstrap.css",
	"/css/styles.css",
	"/js/app.js",
	"/js/apv.js",
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

	e.waitUntil(
		caches.keys().then((keys) => {
			console.log(keys);

			return Promise.all(
				keys
					.filter((key) => key !== nombreCache)
					.map((key) => caches.delete(key)) //Borra las versiones anteriores
			);
		})
	);
});

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
