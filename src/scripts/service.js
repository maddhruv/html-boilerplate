if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/service-worker.js')
  .then(function () {
    console.log('Hurray! Service Worker Registered')
  })
}
