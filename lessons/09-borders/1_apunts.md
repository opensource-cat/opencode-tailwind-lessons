---
marp: true
theme: default
paginate: true
---

# Lliçó 9
## Borders i border-radius

---

## Border bàsic

```html
<div class="border">Border d'1px a tots els costats</div>
<div class="border-2">Border de 2px</div>
<div class="border-4">Border de 4px</div>
<div class="border-8">Border de 8px</div>
<div class="border-0">Sense border</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#gruixos)

---

## Border per costats

```html
<div class="border-t">Només superior</div>
<div class="border-b">Només inferior</div>
<div class="border-l">Només esquerra</div>
<div class="border-r">Només dreta</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#costats)

Es combinen: `border-t border-b` = només superior i inferior.

---

## Color del border

`border-{color}-{llindar}`

```html
<div class="border border-blue-500">Border blau</div>
<div class="border-2 border-red-400">Border vermell de 2px</div>
<div class="border-b-4 border-green-600">Subratllat verd gruixut</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#colors-border)

---

## Border-radius: cantonades arrodonides

```html
<div class="rounded-sm">   /* 2px  */</div>
<div class="rounded">      /* 4px  */</div>
<div class="rounded-md">   /* 6px  */</div>
<div class="rounded-lg">   /* 8px  */</div>
<div class="rounded-xl">   /* 12px */</div>
<div class="rounded-2xl">  /* 16px */</div>
<div class="rounded-3xl">  /* 24px */</div>
<div class="rounded-full"> /* 9999px (cercle/píndola) */</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#border-radius)

---

## Cantonades individuals

```html
<div class="rounded-t">   /* Superior */</div>
<div class="rounded-b">   /* Inferior */</div>
<div class="rounded-l">   /* Esquerra */</div>
<div class="rounded-r">   /* Dreta   */</div>
<div class="rounded-t-lg">/* Superior + mida */</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#cantonades)

---

## Ombres (box-shadow)

```html
<div class="shadow-sm">   /* Petita ombra */</div>
<div class="shadow">      /* Ombra per defecte */</div>
<div class="shadow-md">   /* Mitjana */</div>
<div class="shadow-lg">   /* Gran */</div>
<div class="shadow-xl">   /* Extra gran */</div>
<div class="shadow-2xl">  /* Màxima */</div>
<div class="shadow-none"> /* Sense ombra */</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#ombres)

---

## Exemple: targeta amb border i ombra

```html
<div class="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
  <div class="h-48 bg-gray-300"></div>
  <div class="p-6">
    <h3 class="text-lg font-bold">Títol de la targeta</h3>
    <p class="text-gray-600 mt-2">Contingut dins d'una targeta clàssica.</p>
    <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Llegir més
    </button>
  </div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/09-borders/2_exemples.html#targeta-border)
