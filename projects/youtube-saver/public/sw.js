// Enhanced Service Worker for YTubeSaver PWA
const CACHE_NAME = 'ytube-saver-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.svg',
  '/logo512.svg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // For API calls, add custom headers and error handling
        if (event.request.url.includes('/api/')) {
          return handleApiRequest(event.request);
        }
        
        return fetch(event.request);
      }
    )
  );
});

// Custom API request handler with retry logic
async function handleApiRequest(request) {
  try {
    const response = await fetch(request);
    
    // If successful, cache the response for offline use
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    // If network fails, try to serve from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback response
    return new Response(
      JSON.stringify({
        success: false,
        message: 'You appear to be offline. Please check your internet connection and try again.',
        offline: true
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for failed downloads
self.addEventListener('sync', (event) => {
  if (event.tag === 'download-retry') {
    event.waitUntil(retryFailedDownloads());
  }
});

async function retryFailedDownloads() {
  // Implement retry logic for failed downloads
  // This would read from IndexedDB and retry failed requests
  console.log('Retrying failed downloads...');
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Download completed!',
    icon: '/logo192.svg',
    badge: '/logo192.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/logo192.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo192.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('YTubeSaver', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  }
});
