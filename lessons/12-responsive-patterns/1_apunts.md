---
marp: true
theme: default
paginate: true
---

# Lliçó 12
## Responsive Design (Part 2): patterns pràctics

---

## Columnes que s'adapten

```html
<div class="w-full md:w-1/2 lg:w-1/3 p-4">
  <!--
    Mòbil: 100% d'ample (1 columna)
    Tablet: 50% (2 columnes)
    Escriptori: 33.33% (3 columnes)
  -->
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#columnes-adapten)

Cal posar `flex flex-wrap` al pare.

---

## Menú hamburguesa

```html
<nav class="bg-white shadow">
  <div class="flex items-center justify-between p-4">
    <span class="text-xl font-bold">Logo</span>
    <!-- Botó mòbil: visible només a md: cap avall -->
    <button class="md:hidden p-2">☰</button>
    <!-- Enllaços: amagats a mòbil, flex a md: -->
    <div class="hidden md:flex space-x-6">
      <a href="#">Inici</a>
      <a href="#">Serveis</a>
      <a href="#">Contacte</a>
    </div>
  </div>
</nav>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#menu-hamburguesa)

---

## Graella adaptativa amb grid

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="bg-white p-4 shadow rounded">Element 1</div>
  <div class="bg-white p-4 shadow rounded">Element 2</div>
  <div class="bg-white p-4 shadow rounded">Element 3</div>
  <div class="bg-white p-4 shadow rounded">Element 4</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#grid-adaptatiu)

De 1 a 4 columnes segons la pantalla.

---

## Tipografia responsive

```html
<h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
  Capçalera que creix
</h1>
<p class="text-sm sm:text-base lg:text-lg text-gray-600">
  Paràgraf que s'adapta al dispositiu.
</p>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#tipografia-responsive)

---

## Padding i margin responsive

```html
<section class="p-4 md:p-8 lg:p-12">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
      Contingut amb espaiat adaptable
    </h2>
  </div>
</section>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#padding-margin-resp)

---

## Exemple complet: layout de targetes

```html
<div class="flex flex-wrap -mx-2">
  <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
    <div class="bg-white p-6 shadow rounded-lg">
      <h3 class="text-lg font-bold">Targeta 1</h3>
      <p class="text-gray-600 mt-2">Text descriptiu</p>
    </div>
  </div>
  <!-- Més targetes... -->
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/12-responsive-patterns/2_exemples.html#targetes-layout)

Cada targeta ocupa: 100% (mòbil) → 50% (tablet) → 33% (escriptori).
