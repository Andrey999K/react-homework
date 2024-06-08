const staticCacheName = "static-site";
const dynamicCacheName = "dynamic-site";

const ASSETS = ["/", "/index.html", "/offline.html"];

// install event
self.addEventListener("install", async event => {
  console.log("####: Service Worker had been installed");
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

// activate event
self.addEventListener("activate", async event => {
  const cachesKeysArr = await caches.keys();
  console.log("####: Service Worker had been activated");
  await Promise.all(
    cachesKeysArr
      .filter(key => key !== staticCacheName && key !== dynamicCacheName)
      .map(key => caches.delete(key))
  );
});

// fetch event
self.addEventListener("fetch", event => {
  console.log("####: Service Worker had been fetch");
  event.respondWith(cacheFirst(event.request));
  // event.respondWith(
  //   caches.match(event.request).then(
  //     cacheRes =>
  //       cacheRes ||
  //       fetch(event.request).then(response => {
  //         return caches.open(dynamicCacheName).then(cache => {
  //           cache.put(event.request.url, response.clone());
  //           return response;
  //         });
  //       })
  //   )
  // );
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  try {
    return (
      cached ??
      (await fetch(request).then(response => {
        console.log("####: response", response);
        return networkFirst(request);
      }))
    );
  } catch (e) {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  console.log("####: networkFirst");
  const cache = await caches.open(dynamicCacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached ?? (await caches.match("/offline.html"));
  }
}
