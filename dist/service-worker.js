var cacheName = 'HTML-Boilerplater'
var dataCacheName = 'HTMLDataCache'
var self, caches, fetch
var filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/bootstrap.css',
  '/images/'
]
self.addEventListener('install', function (e) {
  console.log('Installed')
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Installing...')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activated')
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
})

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request)
    })
  )
})
