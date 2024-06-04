const staticCacheName = "static-site";
const dynamicCacheName = "dynamic-site";

const ASSETS = ["/", "/index.html"];

// install event
self.addEventListener("install", async event => {
  console.log("####: Service Worker had been installed");
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

// activate event
self.addEventListener("activate", async event => {
  // const cachesKeysArr = await caches.keys();
  console.log("####: Service Worker had been activated");
  // await Promise.all(
  //   cachesKeysArr
  //     .filter(key => key !== staticCacheName)
  //     .map(key => caches.delete(key))
  // );
});

// fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      cacheRes =>
        cacheRes ||
        fetch(event.request).then(response => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
    )
  );
});
