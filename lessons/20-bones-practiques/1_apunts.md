---
marp: true
theme: default
paginate: true
---

# Lliçó 20
## Bones pràctiques

---

## 1. Mobile-first

Dissenya primer per a mòbil, després afegeix breakpoints.

```html
<!-- Bo: disseny mòbil per defecte, millora a escriptori -->
<div class="flex flex-col md:flex-row">

<!-- Mal: assumes escriptori i després corregeixes -->
<div class="flex flex-row md:flex-col">
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#mobile-first)

Els breakpoints han de **millorar** el disseny, no arreglar-lo.

---

## 2. Extreu components

Si repeteixes un patró > 2 cops, extreu-lo a un component.

Amb React/Vue:
```jsx
function Button({ children, variant }) {
  return (
    <button className={`px-4 py-2 rounded-lg font-semibold
      ${variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
      {children}
    </button>
  );
}
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#components)

---

## 3. No abusis de `@apply`

`@apply` permet extraure classes Tailwind al CSS, però perd el sentit de Tailwind:

```css
/* Evita: estàs reescrivint CSS tradicional */
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg;
}
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#apply)

**Quan usar-lo:** en components molt grans i repetitius, o per integrar Tailwind en un projecte amb CSS existent. Com a excepció, no com a regla.

---

## 4. Configuració (`tailwind.config.js`)

Personalitza colors, fonts i breakpoints al teu projecte:

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#6c63ff', 700: '#5a52d5' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#config)

---

## 5. Valors arbitraris amb moderació

```html
<!-- Mal: valor arbitrari per a un p-4 que ja existeix -->
<div class="p-[16px]">

<!-- Bé: escala de Tailwind -->
<div class="p-4">

<!-- Acceptable: valor molt específic que no es repeteix -->
<div class="top-[37px]">
```

L'escala de Tailwind està dissenyada per cobrir el 95% dels casos.

---

## 6. Usa `space-x/y` enlloc de margin a cada fill

```html
<!-- Mal: margin a cada fill -->
<div class="flex">
  <div class="mr-4">Un</div>
  <div class="mr-4">Dos</div>
  <div class="mr-4">Tres</div>
</div>

<!-- Bé: space al pare -->
<div class="flex space-x-4">
  <div>Un</div>
  <div>Dos</div>
  <div>Tres</div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#space-vs-margin)

---

## 7. Ordena les classes

Un ordre coherent millora la llegibilitat:

```
1. Layout/positioning: relative, absolute, flex, grid
2. Display: block, hidden, flex
3. Flex/Grid: flex-col, items-center, gap-4
4. Spacing: p-4, m-2, space-x-4
5. Sizing: w-full, h-16, max-w-lg
6. Tipografia: text-lg, font-bold, text-center
7. Colors: text-gray-900, bg-white
8. Estats: hover:, focus:, group-hover:
9. Transicions: transition, duration-300
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#ordre-classes)

---

## 8. Aprofita `group-hover`

Evita JavaScript per a interaccions simples:

```html
<div class="group cursor-pointer">
  <h3 class="group-hover:text-blue-600">Títol</h3>
  <p class="opacity-0 group-hover:opacity-100 transition">Apareix</p>
  <div class="scale-95 group-hover:scale-100 transition">Zoom</div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#group-hover-bp)

---

## 9. PurgeCSS va integrat

Quan fas build de producció, Tailwind elimina automàticament les classes no usades:

```
npm run build → arxiu CSS final de només ~10KB
```

No cal configurar res. Només assegura't que `content` al `tailwind.config.js` apunta als teus fitxers.

---

## 10. Mantén el CSS personalitzat al mínim

Abans d'escriure CSS propi, pregunta't:

1. Ja té Tailwind una classe per a això?
2. Puc combinar classes existents per aconseguir-ho?
3. Puc usar un valor arbitrari `[]`?

Si la resposta és sí a alguna, no cal CSS personalitzat.

Tailwind cobrirà >95% de les teves necessitats d'estil.

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/20-bones-practiques/2_exemples.html#no-custom-css)
