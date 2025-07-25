
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ashara-pass-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/script.js',
        '/pass_with_user_photo.jpg'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
