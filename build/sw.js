
const catche_name = "version-2";

const urlsToChache = ["index.html", "offline.html"];


this.addEventListener('install',(event)=>{
event.waitUntill(
catches.open(catche_name).then((cache)=>{
// console.log("open chache")
return cache.addAll(urlsToChache);
}))
})


this.addEventListener('fetch',(event)=>{
event.respondWith(
caches.match(event.request).then((res)=>{
return fetch(event.request).catch(()=>{caches.match('offline.html')})
})
)
})


this.addEventListener('activate',(event)=>{
const cacheWhiteList = []
cacheWhiteList.push(catche_name)
event.waitUntill(caches.keys().then((cacheNames)=>Promise.all(cacheNames.map((cacheName)=>{

if(!cacheWhiteList.includes(cacheName)){
return caches.delete(cacheName)
}
}))))

})

self.addEventListener("push", (event) => {
    const title = "Push Notification";
    const message = "You can download this wesite as a app";
    const options = {
        body: message,
        icon: "logo192.png",
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    // Add your custom logic here based on the notification click
});