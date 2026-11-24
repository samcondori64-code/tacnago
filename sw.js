/* TacnaGo — service worker: permite usar la app sin conexión */
const CACHE = 'tacnago-v3';
const KEEP = ['tacnago-tiles', 'tacnago-fotos'];
const CORE = [
  './', './index.html', './styles.css', './data.js', './app.js', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable.png',
  './vendor/leaflet.css', './vendor/leaflet.js'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>Promise.all(
      CORE.map(u=>c.add(u).catch(()=>null))
    )).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=> k!==CACHE && !KEEP.includes(k)).map(k=>caches.delete(k))
    ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);

  // Los mosaicos del mapa solo se usan con conexión; se guardan los ya vistos.
  if(url.hostname.endsWith('tile.openstreetmap.org')){
    e.respondWith(
      caches.open('tacnago-tiles').then(c=>
        c.match(req).then(hit=> hit || fetch(req).then(res=>{ c.put(req,res.clone()); return res; })
          .catch(()=> hit || Response.error()))
      )
    );
    return;
  }

  // Fotografías del equipo: se guardan para que la app funcione sin conexión
  if(url.pathname.includes('/fotos/')){
    e.respondWith(
      caches.open('tacnago-fotos').then(c =>
        c.match(req).then(hit => hit || fetch(req).then(res=>{
          if(res.ok) c.put(req, res.clone());
          return res;
        }).catch(()=> hit || Response.error()))
      )
    );
    return;
  }

  // Resto: primero la red, con respaldo en caché (así siempre ves la versión más nueva si hay internet).
  e.respondWith(
    fetch(req).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(()=> caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
