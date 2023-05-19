const staticCache = "site-static-two";
const dynamicCache = "site-dynamic-v1";
const assets = [
    "/",
    "index.html",
    "app.tsx",
    "style.css",
    "style.module.css",
    "bundle.ts",
    "manifest.json",
    "logo.png",

];

//cache size limit function
const limitCacheSize= (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(staticCache).then((cache) => {
            cache.addAll(assets);
        })
    );
    //console.log("Service worker installed");
});


self.addEventListener("activate", (event) => {
    //console.log("Service worker activated");

    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== staticCache && key !== dynamicCache)
                    .map((key) => caches.delete(key))
            );
        })
    );
});


self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches
                .match(event.request)
                .then((cacheRes) => {
                    return (
                        cacheRes ||
                        fetch(event.request).then(async (fetchRes) => {
                            const cache = await caches.open(dynamicCache);
                            cache.put(event.request.url, fetchRes.clone());
                            limitCacheSize(dynamicCache, 5);
                            return fetchRes;
                        })
                    );
                })
                .catch(() => {
                    if (event.request.url.indexOf(".html") > -1) {
                        return caches.match("/index.html");
                    }
                })
        );
    }
});