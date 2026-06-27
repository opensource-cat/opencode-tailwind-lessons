---
marp: true
theme: default
paginate: true
---

# Lliçó 10
## Display i visibilitat

---

## Display básic

```html
<div class="block">Ocupa tota l'amplada (per defecte als divs)</div>
<span class="inline-block">Com inline però respecta width/height</span>
<span class="inline">En línia, no respecta width/height</span>
<div class="hidden">No es mostra, com si no existís</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/10-display/2_exemples.html#exemple-1)

---

## block vs inline-block vs inline

| Classe | Comportament |
|---|---|
| `block` | Ocupa tota la línia, respecta w/h |
| `inline-block` | Flueix en línia, respecta w/h |
| `inline` | Flueix en línia, ignora w/h |
| `hidden` | `display: none` — desapareix |

---

## Visibilitat

```html
<div class="visible">Visible (per defecte)</div>
<div class="invisible">Ocupa espai però no es veu</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/10-display/2_exemples.html#exemple-2)

`invisible` → `visibility: hidden` (l'element ocupa el seu lloc).
`hidden` → `display: none` (l'element no ocupa espai).

---

## Overflow

```html
<div class="overflow-hidden">  /* Retalla el que sobresurt  */</div>
<div class="overflow-auto">    /* Scroll només si cal        */</div>
<div class="overflow-scroll">  /* Scroll sempre visible      */</div>
<div class="overflow-visible"> /* Es deixa veure el que surt */</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/10-display/2_exemples.html#exemple-3)

Per eixos individuals: `overflow-x-hidden`, `overflow-y-auto`.

---

## Z-index

```html
<div class="relative">
  <div class="absolute z-10 bg-white">Per sobre</div>
  <div class="absolute z-0 bg-gray-200">Per sota</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/10-display/2_exemples.html#exemple-4)

`z-{0..50}`. Per defecte tots els elements tenen `z-0`.
Només funciona en elements posicionats (relative, absolute, fixed, sticky).

---

## Exemple: targeta amb badge

```html
<div class="relative inline-block">
  <div class="w-24 h-24 bg-gray-300 rounded-lg"></div>
  <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
    3
  </span>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/10-display/2_exemples.html#exemple-5)

Ús combinat de `relative`, `absolute`, `inline-block` i z-index.
