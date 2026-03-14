const CACHE_NAME = 'pikmin-tools-v1';
const ASSETS = [
  './gpxcopy.htm',
  './gpxto.htm',
  // 如果你有 CSS 或 JS 檔案也可以加進來
];

// 安裝時快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求（讓工具在微弱網路下也能開啟）
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
