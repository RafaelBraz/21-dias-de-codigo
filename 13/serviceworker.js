const cacheName = "rafa-pwa";
const assets = [
  "./",
  "./index.html",
  "./projects.html",
  "./certificates.html",
  "./offline.html",
  "./styles.css",
  "./index.js",
  "./src/static/menu.svg",
  "./src/static/symbol.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
