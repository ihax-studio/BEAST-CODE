/* BEAST CODE service worker — auto-updating */
const VERSION = 'beastcode-v16';
const CACHE = 'beast-cache-' + VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './mobile.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './vendor/three.min.js',
  './vendor/react.production.min.js','./vendor/react-dom.production.min.js','./vendor/sql-wasm.js','./vendor/sql-wasm.wasm',
  './assets/wallpaper.jpg',
  './assets/arcade.png','./assets/controller.png','./assets/safari.png','./assets/photos.png',
  './assets/news.png','./assets/appstore.png','./assets/facetime.png','./assets/mail.png',
  './assets/calendar.png','./assets/settings.png','./assets/html.png',
  './assets/tap.wav','./assets/run.wav','./assets/correct.wav','./assets/clear.wav',
  './assets/move.wav','./assets/error.wav','./assets/complete.caf','./assets/fanfare.caf',
  './assets/hint.wav','./assets/good.wav','./assets/back.aif',
  './assets/window-off.png','./assets/window.png','./assets/browser.png','./assets/notepad.png','./assets/textedit.png',
  './assets/applelogo_00000.png','./assets/booticon.png','./assets/boot-mac.png','./assets/boot-win.png',
  './assets/mac-pc.png','./assets/appicon-ios60x60@2x.png',
  './assets/notificationaudiotone.wav','./assets/ma.aiff','./assets/wi.wav','./assets/hello-first-writeon.wav',
  './assets/slide-grab.wav','./assets/slide-release.wav',
  './assets/finder.png','./assets/explore.png','./assets/tracklistappbadge@2x-1.png','./assets/notificationaudiotone.wav',
  './assets/note_01_c5_up_230811.wav','./assets/note_01_right_c4_230807_stereo.wav','./assets/gazeleftscene-mono.aiff',
  './assets/fistbump_rightright.wav','./assets/fistbump_leftright.wav','./assets/first_ear_complete.wav','./assets/helpicon.png','./assets/sidebarhomefolder.png','./assets/sidebargenericfolder.png','./assets/sidebargenericfile.png','./assets/sidebardownloadsfolder.png','./assets/sidebardesktopfolder.png','./assets/funk.aiff','./assets/glass.aiff','./assets/sosumi.aiff','./assets/hero.aiff','./assets/ping.aiff','./assets/pop.aiff','./assets/tink.aiff','./assets/basso.aiff','./assets/submarine.aiff'
];

// Install: pre-cache the shell, then take over immediately (auto-update)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(APP_SHELL).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// Activate: drop old caches, claim all clients so the new SW controls them now
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Allow the page to force activation of a waiting worker
self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // let cross-origin (fonts/cdn) pass through

  // Navigations / HTML → network-first so new versions show up, fall back to cache offline
  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          if (res && res.ok) caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});   // ページごとに自分の URL で保存する
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Static assets → stale-while-revalidate
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
