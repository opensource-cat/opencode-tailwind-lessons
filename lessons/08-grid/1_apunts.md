---
marp: true
theme: default
paginate: true
---

# Lliçó 8
## Grid CSS

---

## Activar Grid

```html
<div class="grid grid-cols-3">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
  <div>Col 4 — baixa a la segona fila</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#grid-basic)

`grid` activa el contenidor. `grid-cols-3` crea 3 columnes iguals.

---

## Nombre de columnes i files

```html
<div class="grid grid-cols-4 grid-rows-2">
  <!-- 4 columnes × 2 files = 8 cel·les potencials -->
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#cols-rows)

`grid-cols-{1..12}` i `grid-rows-{1..6}`.

---

## Gap: espai entre cel·les

```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#gap)

`gap-{mida}` per a totes direccions, o `gap-x-{mida}` / `gap-y-{mida}` per separat.

---

## Ocupar múltiples columnes

```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8">Contingut principal (8/12)</div>
  <div class="col-span-4">Sidebar (4/12)</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#col-span)

`col-span-{1..12}` per controlar quantes columnes ocupa un element.

---

## Ocupar múltiples files

```html
<div class="grid grid-cols-3 gap-4">
  <div class="row-span-2 bg-blue-200 p-4">
    Ocupa 2 files
  </div>
  <div class="bg-green-200 p-4">Normal</div>
  <div class="bg-green-200 p-4">Normal</div>
  <div class="bg-green-200 p-4">Normal</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#row-span)

`row-span-{1..6}`

---

## Posicionar manualment

```html
<div class="grid grid-cols-4 gap-4">
  <div class="col-start-2 col-end-4 bg-yellow-200 p-4">
    Comença a la col 2, acaba a la 4
  </div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#col-start-end)

`col-start-{1..12}`, `col-end-{1..12}`, `row-start-{1..6}`, `row-end-{1..6}`

---

## Exemple: layout de pàgina complet

```html
<div class="grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-screen">
  <header class="col-span-12 bg-blue-600 text-white p-4">
    Capçalera
  </header>
  <nav class="col-span-2 bg-gray-100 p-4">Nav</nav>
  <main class="col-span-8 p-4">Contingut principal</main>
  <aside class="col-span-2 bg-gray-50 p-4">Sidebar</aside>
  <footer class="col-span-12 bg-gray-900 text-white p-4">
    Peu de pàgina
  </footer>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/08-grid/2_exemples.html#layout-complet)

Layout complet: header, nav, main, sidebar i footer amb grid.
