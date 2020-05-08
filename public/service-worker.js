var CACHE_NAME = "my-site-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

var urlsToCache = [
  "/",
  "/db.js",
  "/index.js",
  "/manifest.json",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];

//this installs the service worker
self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
    );
  });