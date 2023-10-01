self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/', // Замените на пути к ресурсам вашего приложения
                '/index.html',
                '/manifest.json',
                // Добавьте пути к другим статическим ресурсам вашего приложения
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
