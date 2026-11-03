import {readdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(`${dir}/${e.name}`):`${dir}/${e.name}`))).flat()}
const files=(await walk('dist')).filter(f=>!f.endsWith('/sw.js'));
const hash=createHash('sha256');
for(const f of files)hash.update(await readFile(f));
const version=hash.digest('hex').slice(0,16);
await writeFile('dist/sw.js',`const CACHE='engineer-pwa-${version}';
const PREFIX='engineer-pwa-';
const FILES=${JSON.stringify(['./',...files.map(f=>'./'+f.slice(5))])};
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.open(CACHE).then(c=>c.match(new URL('./',self.registration.scope)))));return;}
e.respondWith(caches.open(CACHE).then(async c=>(await c.match(e.request))||fetch(e.request)));});
`);
console.log(`Service worker generated: ${files.length+1} offline assets (${version})`);
