// Nombre de la caché
const CACHE_NAME = 'gym-manager-cache-v1';

// Archivos a pre-cachear durante la instalación.
// En un proyecto Vite, los nombres de los archivos JS y CSS a menudo son generados con hashes para el versionado.
// Tendrías que actualizar esta lista después de cada build o usar una estrategia diferente (como Workbox)
// para manejar archivos con nombres hasheados automáticamente.
const urlsToCache = [
  '/',
  '/index.html',
  // Agrega aquí otras rutas esenciales si son estáticas y no tienen hash
  // Por ejemplo: '/css/style.css', '/js/main.js', si sus nombres son fijos.
  // Para archivos generados por Vite con hashes (ej: /assets/index.abc123.js),
  // necesitarías una estrategia más avanzada, a menudo manejada por librerías como Workbox.
];

// Evento 'install': Se ejecuta cuando el service worker se instala.
// Aquí pre-cacheamos los recursos esenciales.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos predefinidos');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch': Se ejecuta cada vez que el navegador solicita un recurso.
// Implementa una estrategia de cache-first: intenta obtener de la caché, si falla, va a la red.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Evento 'push': Se ejecuta cuando se recibe una notificación push.
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png', // Asegúrate de tener un ícono en tu carpeta public
    badge: '/icons/icon-192x192.png', // Ícono pequeño
    // Puedes añadir más opciones como vibrate, sound, data, actions, etc.
  };

  event.waitUntil(
    self.registration.showNotification('Gym Management PWA', options)
  );
});

// Evento 'notificationclick': Se ejecuta cuando el usuario hace clic en una notificación.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  // Puedes definir una acción al hacer clic, por ejemplo, abrir una URL.
  event.waitUntil(clients.openWindow('/dashboard')); // Redirige al dashboard al hacer clic
});
