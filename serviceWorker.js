const staticFunkos = "dev-funko-site-V2";

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/funko_1.png",
    "/images/funko_2.jpg",
    "/images/funko_3.jpg",
    "/images/funko_4.jpg",
    "/images/funko_5.jpg",
    "/images/funko_6.jpg",
]

async function preCache() {
    const cache = await caches.open(staticFunkos);
    return cache.addAll;
}




self.addEventListener("install", installEvent => {
    installEvent.waitUntil(preCache());    
})

async function cacheFirst(request){
    const cacheResponse = await caches.match(request)
    
    if( cacheResponse){
        return cacheResponse;
    }
    try{
        const networkResponse = await fetch(request);

        if(networkResponse.ok){
            const cache = await caches.open(staticFunkos)

            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }
    catch(error){
        return Response.error();
    }    
}
    

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(cacheFirst(fetchEvent.request))
})