'use strict';
const cacheName='valley-dial-shell-v15';
const shell=['./','./index.html','./style.css','./theme.js','./catalog.js','./places.js','./review.js','./app.js','./housing-map.js','./housing-points.js','./vendor/leaflet.js','./vendor/leaflet.css','./terrain.svg','./icon.svg','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png'];
const urls=new Set(shell.map(path=>new URL(path,self.location.href).href));
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(cacheName);
 await cache.addAll(shell.map(path=>new Request(path,{cache:'reload'})));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 await Promise.all((await caches.keys()).filter(name=>name.startsWith('valley-dial-shell-')&&name!==cacheName).map(name=>caches.delete(name)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 if(req.mode==='navigate'){
  if(new URL(req.url).pathname!==new URL('./',self.location.href).pathname && !urls.has(req.url))return;
  event.respondWith(fetch(req).catch(async()=> (await caches.open(cacheName)).match('./index.html')));
 }else if(urls.has(req.url)){
  event.respondWith((async()=> fetch(req).catch(async()=> (await caches.open(cacheName)).match(req)))());
 }
});
