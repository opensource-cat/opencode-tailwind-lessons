---
marp: true
theme: default
paginate: true
---

# Lliçó 3
## Colors i fons

---

## Text amb color

`text-{color}-{llindar}`

```html
<p class="text-blue-500">Text blau mitjà</p>
<p class="text-gray-900">Text gris molt fosc</p>
<p class="text-red-400">Text vermell suau</p>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/03-colors-fons/2_exemples.html#exemple-1)

El llindar va de `50` (més clar) a `900` (més fosc).

---

## Fons amb color

`bg-{color}-{llindar}`

```html
<div class="bg-white">Fons blanc</div>
<div class="bg-gray-100">Fons gris clar</div>
<div class="bg-blue-600 text-white">Fons blau fosc amb text blanc</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/03-colors-fons/2_exemples.html#exemple-2)

---

## Colors predefinits

Tailwind inclou 22 famílies de color:

`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Cada família té 11 tonalitats (50, 100, 200... 900).

---

## Opacitat

`opacity-{valor}` — de `0` a `100` (de 5 en 5)

```html
<div class="bg-blue-500 opacity-100">100% opac</div>
<div class="bg-blue-500 opacity-75">75% opac</div>
<div class="bg-blue-500 opacity-50">50% opac</div>
<div class="bg-blue-500 opacity-25">25% opac</div>
<div class="bg-blue-500 opacity-0">invisible</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/03-colors-fons/2_exemples.html#exemple-3)

---

## Combinació de color i fons

```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
  <h2 class="text-3xl font-bold text-yellow-300">Títol amb accent groc</h2>
  <p class="text-white/80">Text blanc amb 80% d'opacitat</p>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/03-colors-fons/2_exemples.html#exemple-4)

Nota: els gradients (`from-`, `to-`) es veuran a la lliçó de fons i imatges.

---

## Accés directe: color per nom

Alguns colors especials:

| Classe | Valor |
|---|---|
| `text-white` | `#ffffff` |
| `text-black` | `#000000` |
| `text-transparent` | transparent |
| `bg-current` | color actual (`currentColor`) |

---

## Exemple pràctic

```html
<div class="bg-gray-50 p-6 rounded-xl shadow-sm">
  <h2 class="text-indigo-700 text-2xl font-bold">
    Notícia destacada
  </h2>
  <p class="text-gray-600 mt-2">
    Lorem ipsum amb colors de la família indigo i gray.
  </p>
  <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
    Novetat
  </span>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/03-colors-fons/2_exemples.html#exemple-5)
