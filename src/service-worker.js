// service-worker.js

const CACHE_NAME = "streamlist-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/static/css/main.chunk.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Install event - caching essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activate event - cleaning up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serving assets from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      return fetch(event.request); // Fetch from network if not in cache
    })
  );
});

// Push notification event - handles incoming push notifications
self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-192x192.png",
  };

  event.waitUntil(
    self.registration.showNotification("StreamList Update", options)
  );
});

// Notification click event - handles clicks on notifications
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // Open the app when a notification is clicked
  );
});
