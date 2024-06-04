const staticCacheName = "static-site";

const ASSETS = ["/", "/index.html"];

// install event
self.addEventListener("install", async event => {
  console.log("####: Service Worker had been installed");
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

// activate event
self.addEventListener("activate", event => {
  console.log("####: Service Worker had been activated");
});

// fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(cacheRes => cacheRes || fetch(event.request))
  );
});
