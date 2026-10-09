/* Letter Desk service worker: offline app shell. Never caches API/cloud calls or other origins. */
const V = "ld-shell-v2";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;           // leave cross-origin + non-GET alone
  if (/cloud-config\.js$/.test(u.pathname)) return;                          // config must always be fresh
  e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match("index.html"))));   // network first, offline fallback
});
