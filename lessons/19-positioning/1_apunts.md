---
marp: true
theme: default
paginate: true
---

# Lliçó 19
## Positioning i valors arbitraris

---

## Posicionament

```html
<div class="relative">...</div>     /* Punter per a fills absolute */
<div class="absolute">...</div>     /* Respecta el pare relative més proper */
<div class="fixed">...</div>        /* Fixat a la finestra */
<div class="sticky">...</div>       /* Fixat dins del seu contenidor en scroll */
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#position-basics)

---

## Controls de posició

```html
<div class="absolute top-0 left-0">Cantonada superior esquerra</div>
<div class="absolute top-4 right-4">A 16px de dalt i dreta</div>
<div class="absolute bottom-0 right-0">Cantonada inferior dreta</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#controls-posicio)

`top-{mida}`, `right-{mida}`, `bottom-{mida}`, `left-{mida}`.

---

## Shorthand: inset

```html
<div class="absolute inset-0">Ocupa tot el pare (top=0, right=0, bottom=0, left=0)</div>
<div class="absolute inset-x-0">Només horitzontal (left=0, right=0)</div>
<div class="absolute inset-y-0">Només vertical (top=0, bottom=0)</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#inset)

`inset-0` és equivalent a `top-0 right-0 bottom-0 left-0`.

---

## Exemple: modal

```html
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
  <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
    <h3 class="text-xl font-bold">Modal</h3>
    <p class="text-gray-600 mt-2">Contingut del modal.</p>
    <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg
                   hover:bg-blue-700 w-full">
      Tancar
    </button>
  </div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#modal)

---

## Exemple: badge

```html
<div class="relative inline-block">
  <div class="w-16 h-16 bg-gray-300 rounded-lg"></div>
  <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs
               w-6 h-6 rounded-full flex items-center justify-center
               -translate-y-1/2 translate-x-1/2">
    3
  </span>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#badge-posicio)

`-translate-y-1/2 translate-x-1/2` per centrar el badge sobre la cantonada.

---

## Sticky header

```html
<header class="sticky top-0 z-40 bg-white shadow">
  <!-- El header es queda fixat a dalt quan es fa scroll -->
  Contingut del header
</header>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#sticky-header)

`sticky top-0` = es comporta com relative fins que el scroll el situa a top:0, llavors es queda fixat.

---

## Valors arbitraris `[]`

Quan l'escala de Tailwind no té el valor exacte:

```html
<div class="w-[500px]">Ample de 500px</div>
<div class="top-[37px]">Posició exacta a 37px</div>
<div class="text-[#ff0000]">Color vermell personalitzat</div>
<div class="h-[calc(100vh-4rem)]">Alçada - 4rem</div>
<div class="bg-[url('/img/foto.jpg')]">Imatge de fons</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#valors-arbitraris)

---

## Quan usar valors arbitraris

**Usa'ls quan:**
- Necessites una mesura molt específica que no es repeteix
- Estàs prototipant ràpidament

**No els abuseu:**
- Si el valor es repeteix en diversos llocs, millor configurar-lo a `tailwind.config.js`
- L'escala de Tailwind cobreix el 95% dels casos

```html
<!-- Bo: valor puntual que no es repeteix -->
<div class="w-[373px]">...</div>

<!-- Millor configurar-ho a tailwind.config.js si es repeteix -->
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/19-positioning/2_exemples.html#quan-usar-arbitraris)
