# tatino → filidilo

O app **Filidilo** (antes **tatino.**) mudou de endereço:
https://marcelobritonet.github.io/filidilo/ (código em [marcelobritonet/filidilo](https://github.com/marcelobritonet/filidilo)).

Este repositório só existe para que o endereço antigo `https://marcelobritonet.github.io/tatino/` continue funcionando:

| Arquivo | O que faz |
|---|---|
| `index.html` e `404.html` | Levam qualquer endereço `/tatino/…` para `/filidilo/…`, mantendo `?b=…` (links e desafios), `?teste=1` e o `#…` |
| `sw.js` | Substitui o service worker do app antigo: apaga o cache, se desliga e leva as janelas abertas para `/filidilo/` |

Não apague este repositório: sem ele, links antigos e apps instalados em `/tatino/` param de abrir.
