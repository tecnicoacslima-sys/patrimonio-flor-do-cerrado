// Service worker mínimo — necessário apenas para o Android oferecer
// "Instalar app" / "Adicionar à tela inicial" como um app de verdade.
// Não faz cache nem funciona offline, só deixa a página instalável.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
