/* BEAST CODE service worker — auto-updating */
const VERSION = 'beastcode-v13';
const CACHE = 'beast-cache-' + VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './vendor/three.min.js',
  './assets/wallpaper.jpg',
  './assets/arcade.png','./assets/controller.png','./assets/safari.png','./assets/photos.png',
  './assets/news.png','./assets/appstore.png','./assets/facetime.png','./assets/mail.png',
  './assets/calendar.png','./assets/settings.png','./assets/html.png',
  './assets/tap.wav','./assets/run.wav','./assets/correct.wav','./assets/clear.wav',
  './assets/move.wav','./assets/error.wav','./assets/complete.caf','./assets/fanfare.caf',
  './assets/hint.wav','./assets/good.wav','./assets/back.aif',
  './assets/window-off.png','./assets/window.png','./assets/browser.png','./assets/notepad.png','./assets/textedit.png',
  './assets/AppleLogo_00000.png','./assets/booticon.png','./assets/boot-mac.png','./assets/boot-win.png',
  './assets/Mac-pc.png','./assets/AppIcon-iOS60x60@2x.png',
  './assets/NotificationAudioTone.wav','./assets/Ma.aiff','./assets/Wi.wav','./assets/hello-first-writeon.wav',
  './assets/slide-grab.wav','./assets/slide-release.wav',
  './assets/finder.png','./assets/Explore.png','./assets/TracklistAppBadge@2x-1.png','./assets/NotificationAudioTone.wav',
  './assets/Note_01_C5_Up_230811.wav','./assets/Note_01_Right_C4_230807_Stereo.wav','./assets/GazeLeftScene-mono.aiff',
  './assets/fistBump_rightRight.wav','./assets/fistBump_leftRight.wav','./assets/First_ear_complete.wav','./assets/helpicon.png','./assets/SidebarHomeFolder.png','./assets/SidebarGenericFolder.png','./assets/SidebarGenericFile.png','./assets/SidebarDownloadsFolder.png','./assets/SidebarDesktopFolder.png','./assets/Funk.aiff','./assets/Glass.aiff','./assets/Sosumi.aiff','./assets/Hero.aiff','./assets/Ping.aiff','./assets/Pop.aiff','./assets/Tink.aiff','./assets/Basso.aiff','./assets/Submarine.aiff'
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
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
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
