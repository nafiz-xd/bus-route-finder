/* Dhaka Bus Route Finder — service worker (app shell cache) */
const CACHE = 'brf-v21';
const SHELL = ['./', 'index.html', 'routes.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'hero.jpg', 'search.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Map tiles and CDN files: network only (never cached by the shell cache)
  if (url.hostname.includes('tile.openstreetmap.org') || url.hostname.includes('unpkg.com')) return;
  if (e.request.method !== 'GET') return;
  // Page loads: network-first so app updates land instantly; cache is the offline fallback
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.ok && url.origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }
  // App files: cache-first, then network (and refresh cache)
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.ok && url.origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
