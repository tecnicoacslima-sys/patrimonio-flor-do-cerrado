// Service worker mínimo — necessário apenas para o Android oferecer
// "Instalar app" / "Adicionar à tela inicial" como um app de verdade.
// Não faz cache nem funciona offline, só deixa a página instalável e
// repassa todas as requisições normalmente (inclusive as chamadas ao
// Apps Script), sem interferir nelas.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

