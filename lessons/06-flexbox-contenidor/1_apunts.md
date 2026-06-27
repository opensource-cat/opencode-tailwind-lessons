---
marp: true
theme: default
paginate: true
---

# Lliçó 6
## Flexbox (Part 1): contenidor

---

## Activar Flexbox

```html
<div class="flex">...</div>
```

Converteix el contenidor en un flex container.

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-1) Els fills es col·loquen en fila (horitzontal) per defecte.

---

## Direcció: fila o columna

```html
<div class="flex flex-row">Fila (per defecte)</div>
<div class="flex flex-col">Columna (vertical)</div>
<div class="flex flex-row-reverse">Fila inversa</div>
<div class="flex flex-col-reverse">Columna inversa</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-2)

---

## Wrap: salt de línia

```html
<div class="flex flex-wrap">
  <!-- Els fills que no caben baixen a la següent línia -->
</div>
<div class="flex flex-nowrap">
  <!-- Tots els fills a la força en una línia (per defecte) -->
</div>
<div class="flex flex-wrap-reverse">
  <!-- Wrap però en ordre invers -->
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-3)

---

## Justify-content (eix principal)

```html
<div class="flex justify-start">   /* esquerra (per defecte) */</div>
<div class="flex justify-center">   /* centre              */</div>
<div class="flex justify-end">      /* dreta               */</div>
<div class="flex justify-between">  /* espai entre fills   */</div>
<div class="flex justify-around">   /* espai als extrems   */</div>
<div class="flex justify-evenly">   /* espai igual         */</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-4)

---

## Align-items (eix creuat)

```html
<div class="flex items-start">   /* dalt    */</div>
<div class="flex items-center">  /* centre  */</div>
<div class="flex items-end">     /* baix    */</div>
<div class="flex items-stretch">  /* estirar (per defecte) */</div>
<div class="flex items-baseline">  /* línia base del text */</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-5)

---

## Exemple pràctic

```html
<div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
  <h2 class="text-xl font-bold">Logo</h2>
  <nav class="flex space-x-6">
    <a href="#">Inici</a>
    <a href="#">Serveis</a>
    <a href="#">Contacte</a>
  </nav>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/06-flexbox-contenidor/2_exemples.html#exemple-6)

Un navbar senzill: logo a esquerra, enllaços a dreta, centrats verticalment.
