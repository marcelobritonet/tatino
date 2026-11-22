// Desliga o service worker antigo do endereço /tatino/.
// Quem tinha o app aberto ou instalado em /tatino/ recebe este sw.js na
// próxima checagem: ele apaga o cache antigo, sai do ar e leva para /filidilo/.
self.addEventListener('install', function () {
  self.skipWaiting()
})

self.addEventListener('activate', function (evento) {
  evento.waitUntil(
    (async function () {
      var nomes = await caches.keys()
      await Promise.all(nomes.map(function (n) { return caches.delete(n) }))
      await self.registration.unregister()
      var janelas = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      janelas.forEach(function (janela) {
        var u = new URL(janela.url)
        var caminho = u.pathname.replace(/^\/tatino(\/|$)/, '/filidilo/')
        if (caminho.indexOf('/filidilo/') !== 0) caminho = '/filidilo/'
        janela.navigate(u.origin + caminho + u.search + u.hash)
      })
    })()
  )
})
