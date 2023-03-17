self.addEventListener("install", e=>{
e.waitUntil(
    caches.open("static").then(cache=>{
        return cache.addAll(["./","./assets/css/XL.css",
        "./assets/css/LG.css",
        "./assets/css/TABLET-MD.css",
        "./assets/css/MOBILE.css",
        "./assets/css/MOBILE-SMALL.css","./logo/72.png",
        "./logo/96.png",
        "./logo/128.png",
        "./logo/144.png",
        "./logo/152.png",
        "./logo/192.png","./logo/384.png","./logo/512.png"]);
    })
);
});
self.addEventListener("fetch", e=>{
e.respondWith(
    caches.match(e.request).then(response=>{
        return response || fetch(e.request);
    })
);
});