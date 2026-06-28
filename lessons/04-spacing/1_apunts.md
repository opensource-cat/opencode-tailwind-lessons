---
marp: true
theme: default
paginate: true
---

# Lliçó 4
## Spacing: margin i padding

---

## Padding interior

`p-{mida}` per tots els costats, o `pt-`, `pr-`, `pb-`, `pl-` per a un sol costat:

```html
<div class="p-4">Padding 16px a tots els costats</div>
<div class="px-6 py-3">Padding horitzontal 24px, vertical 12px</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#padding)

`px-` = left + right, `py-` = top + bottom

---

## Margin exterior

`m-{mida}` per tots els costats, o `mt-`, `mr-`, `mb-`, `ml-` per a un sol costat:

```html
<div class="mb-4">Margin inferior 16px</div>
<div class="mx-auto">Centrat horitzontal</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#margin)

`mx-auto` centra el contenidor.

---

## Escala de mesures

De `0` a `96`, cada número equival a `0.25rem`:

`0` (0px), `0.5` (2px), `1` (4px), `1.5` (6px), `2` (8px), `2.5` (10px), `3` (12px), `4` (16px), `5` (20px), `6` (24px), `8` (32px), `10` (40px), `12` (48px), `14` (56px), `16` (64px), `20` (80px), `24` (96px)... fins `96` (384px)

---

## Exemples d'ús

```html
<section class="px-4 py-8">
  <h2 class="text-xl font-bold mb-2">Títol</h2>
  <p class="text-gray-600 mb-6">Paràgraf amb margin inferior</p>
  <button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
    Botó espaiat
  </button>
</section>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#us-spacing)

---

## Separació entre fills: `space-x` i `space-y`

```html
<div class="flex space-x-4">
  <span>Un</span>
  <span>Dos</span>
  <span>Tres</span>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#space-x)

`space-x-4` afegeix margin de 16px entre elements horitzontals.
`space-y-4` fa el mateix però verticalment.

Estalvia haver de posar `ml-4` o `mr-4` a cada fill.

---

## Valors negatius

El margin pot ser negatiu: `-mt-4`, `-mx-2`, etc.

```html
<div class="bg-gray-100 p-6 relative">
  <div class="-mt-8 bg-blue-500 text-white p-4 rounded-lg">
    Aquesta caixa surt per sobre del contenidor
  </div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#negatiu)

---

## Exemple complet

```html
<div class="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
  <h2 class="text-2xl font-bold mb-4">Espaiat</h2>
  <div class="space-y-3">
    <p>Element amb separació automàtica</p>
    <p>Gràcies a <code>space-y-3</code></p>
  </div>
  <button class="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg">
    Acceptar
  </button>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/04-spacing/2_exemples.html#targeta-spacing)
