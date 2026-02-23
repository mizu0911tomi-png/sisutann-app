self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("sisutann").then(cache => {
      return cache.addAll(["index.html"]);
    })
  );
});
