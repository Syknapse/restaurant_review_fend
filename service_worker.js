const name = "v1"

const urls = [
    '/',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
]

// Install service worker event
self.addEventListener("install", event => {
    event.waitUntil(
        caches
        .open(name)
        .then(cache => cache.addAll(urls))
    )
})

// fetch service worker event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
        .match(event.request)
        .then(response => {
            if (response !== undefined) { return response }
            else { return fetch(event.request) }
        })
    )
})