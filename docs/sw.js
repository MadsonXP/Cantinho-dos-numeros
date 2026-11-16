// Aumente a versão sempre que atualizar o jogo, para os tablets pegarem a novidade
const C = 'cantinho-v18';
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./img/airplane.webp", "./img/apple.webp", "./img/automobile.webp", "./img/banana.webp", "./img/bg.webp", "./img/bgl.webp", "./img/bicycle.webp", "./img/bus.webp", "./img/carrot.webp", "./img/cat.webp", "./img/cherries.webp", "./img/chicken.webp", "./img/cow.webp", "./img/dog.webp", "./img/dolphin.webp", "./img/elephant.webp", "./img/flamingo.webp", "./img/giraffe.webp", "./img/grapes.webp", "./img/horse.webp", "./img/lemon.webp", "./img/lion.webp", "./img/monkey.webp", "./img/octopus.webp", "./img/owl.webp", "./img/parrot.webp", "./img/pear.webp", "./img/penguin.webp", "./img/pig.webp", "./img/pineapple.webp", "./img/rabbit.webp", "./img/rocket.webp", "./img/sailboat.webp", "./img/shark.webp", "./img/strawberry.webp", "./img/tangerine.webp", "./img/train.webp", "./img/watermelon.webp", "./img/whale.webp", "./emoji/1f308.webp", "./emoji/1f30d.webp", "./emoji/1f30e.webp", "./emoji/1f30f.webp", "./emoji/1f331.webp", "./emoji/1f333.webp", "./emoji/1f33f.webp", "./emoji/1f34c.webp", "./emoji/1f34e.webp", "./emoji/1f353.webp", "./emoji/1f36a.webp", "./emoji/1f381.webp", "./emoji/1f388.webp", "./emoji/1f389.webp", "./emoji/1f3a3.webp", "./emoji/1f3a8.webp", "./emoji/1f3ae.webp", "./emoji/1f3b5.webp", "./emoji/1f3c6.webp", "./emoji/1f3db.webp", "./emoji/1f3e0.webp", "./emoji/1f41f.webp", "./emoji/1f436.webp", "./emoji/1f43b.webp", "./emoji/1f4a1.webp", "./emoji/1f4aa.webp", "./emoji/1f4ac.webp", "./emoji/1f4b0.webp", "./emoji/1f4ca.webp", "./emoji/1f4d2.webp", "./emoji/1f501.webp", "./emoji/1f507.webp", "./emoji/1f509.webp", "./emoji/1f50a.webp", "./emoji/1f50d.webp", "./emoji/1f514.webp", "./emoji/1f522.webp", "./emoji/1f575.webp", "./emoji/1f682.webp", "./emoji/1f697.webp", "./emoji/1f6d2.webp", "./emoji/1f7f0.webp", "./emoji/1f947.webp", "./emoji/1f948.webp", "./emoji/1f949.webp", "./emoji/1f955.webp", "./emoji/1f986.webp", "./emoji/1f9c1.webp", "./emoji/1f9e0.webp", "./emoji/1f9e9.webp", "./emoji/1f9fa.webp", "./emoji/1fa99.webp", "./emoji/25b6.webp", "./emoji/2696.webp", "./emoji/2699.webp", "./emoji/2705.webp", "./emoji/2716.webp", "./emoji/2728.webp", "./emoji/274c.webp", "./emoji/2795.webp", "./emoji/2796.webp", "./emoji/2797.webp", "./emoji/27a1.webp", "./emoji/2b05.webp", "./emoji/2b50.webp", "./flags/AE.svg", "./flags/AO.svg", "./flags/AR.svg", "./flags/AT.svg", "./flags/AU.svg", "./flags/BD.svg", "./flags/BE.svg", "./flags/BG.svg", "./flags/BO.svg", "./flags/BR.svg", "./flags/BS.svg", "./flags/BZ.svg", "./flags/CA.svg", "./flags/CD.svg", "./flags/CH.svg", "./flags/CL.svg", "./flags/CN.svg", "./flags/CO.svg", "./flags/CR.svg", "./flags/CU.svg", "./flags/CV.svg", "./flags/CZ.svg", "./flags/DE.svg", "./flags/DK.svg", "./flags/DO.svg", "./flags/DZ.svg", "./flags/EC.svg", "./flags/EG.svg", "./flags/ES.svg", "./flags/ET.svg", "./flags/FI.svg", "./flags/FJ.svg", "./flags/FR.svg", "./flags/GB.svg", "./flags/GH.svg", "./flags/GR.svg", "./flags/GT.svg", "./flags/GY.svg", "./flags/HN.svg", "./flags/HR.svg", "./flags/HT.svg", "./flags/HU.svg", "./flags/ID.svg", "./flags/IE.svg", "./flags/IN.svg", "./flags/IQ.svg", "./flags/IR.svg", "./flags/IS.svg", "./flags/IT.svg", "./flags/JM.svg", "./flags/JO.svg", "./flags/JP.svg", "./flags/KE.svg", "./flags/KH.svg", "./flags/KR.svg", "./flags/KZ.svg", "./flags/LU.svg", "./flags/MA.svg", "./flags/MC.svg", "./flags/MG.svg", "./flags/MN.svg", "./flags/MT.svg", "./flags/MX.svg", "./flags/MY.svg", "./flags/MZ.svg", "./flags/NA.svg", "./flags/NG.svg", "./flags/NI.svg", "./flags/NL.svg", "./flags/NO.svg", "./flags/NP.svg", "./flags/NZ.svg", "./flags/PA.svg", "./flags/PE.svg", "./flags/PG.svg", "./flags/PH.svg", "./flags/PK.svg", "./flags/PL.svg", "./flags/PT.svg", "./flags/PY.svg", "./flags/QA.svg", "./flags/RO.svg", "./flags/RS.svg", "./flags/RU.svg", "./flags/SA.svg", "./flags/SE.svg", "./flags/SG.svg", "./flags/SN.svg", "./flags/SR.svg", "./flags/SV.svg", "./flags/TH.svg", "./flags/TN.svg", "./flags/TR.svg", "./flags/TZ.svg", "./flags/UA.svg", "./flags/US.svg", "./flags/UY.svg", "./flags/VA.svg", "./flags/VE.svg", "./flags/VN.svg", "./flags/ZA.svg", "./flags/ZW.svg", "./fonts/fredoka-latin-500-normal.woff2", "./fonts/fredoka-latin-600-normal.woff2", "./fonts/fredoka-latin-700-normal.woff2", "./audio/airship.mp3", "./voz/elogio1.mp3", "./voz/elogio10.mp3", "./voz/elogio2.mp3", "./voz/elogio3.mp3", "./voz/elogio4.mp3", "./voz/elogio5.mp3", "./voz/elogio6.mp3", "./voz/elogio7.mp3", "./voz/elogio8.mp3", "./voz/elogio9.mp3"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const rg = e.request.headers.get('range');
  if (rg) {
    e.respondWith(caches.match(e.request.url).then(r => r ? r.arrayBuffer().then(b => {
      const m = /bytes=(\d+)-(\d*)/.exec(rg), s = +m[1], en = m[2] ? +m[2] : b.byteLength - 1;
      return new Response(b.slice(s, en + 1), {status: 206, headers: {'Content-Type': 'audio/mpeg', 'Content-Range': 'bytes ' + s + '-' + en + '/' + b.byteLength, 'Content-Length': en - s + 1}});
    }) : fetch(e.request)));
    return;
  }
  if (e.request.mode === 'navigate') {
    // abre online se der (pega atualizações); sem internet usa o guardado
    e.respondWith(
      fetch(e.request).then(r => {
        const cp = r.clone();
        caches.open(C).then(c => c.put(e.request, cp));
        return r;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(e.request, cp)); }
    return res;
  })));
});
