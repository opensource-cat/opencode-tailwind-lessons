---
marp: true
theme: default
paginate: true
---

# Lliçó 5
## Width i height

---

## Amplada (`width`)

Mateixa escala que spacing:

```html
<div class="w-64">Ample 256px</div>
<div class="w-full">100% del contenidor</div>
<div class="w-screen">100% de la pantalla (viewport)</div>
<div class="w-auto">Ajustat al contingut</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-1)

---

## Percentatges

```html
<div class="w-1/2">50% d'ample</div>
<div class="w-1/3">33.333%</div>
<div class="w-2/3">66.666%</div>
<div class="w-1/4">25%</div>
<div class="w-3/4">75%</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-2)

També `w-3/5`, `w-4/6`, `w-7/12`, etc.

---

## Alçada (`height`)

```html
<div class="h-16">Alçada 64px</div>
<div class="h-full">100% del contenidor pare</div>
<div class="h-screen">100% de la pantalla</div>
<div class="h-auto">Ajustat al contingut</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-3)

---

## Amplada màxima (`max-width`)

Limita l'ample màxim d'un element:

| Classe | Valor |
|---|---|
| `max-w-md` | 28rem (448px) |
| `max-w-lg` | 32rem (512px) |
| `max-w-xl` | 36rem (576px) |
| `max-w-4xl` | 56rem (896px) |
| `max-w-screen-xl` | 1280px |

Ideal per contenidors de text llegibles.

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-4)

---

## Alçada mínima (`min-height`)

```html
<section class="min-h-screen">
  Aquesta secció sempre ocupa com a mínim
  tota l'alçada de la pantalla.
</section>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-5)

Molt útil per hero sections i landing pages.

---

## Exemple complet

```html
<section class="min-h-screen bg-gray-50 flex items-center">
  <div class="max-w-4xl mx-auto w-full px-4">
    <div class="w-1/2 bg-white p-8 shadow-lg rounded-xl">
      <h2 class="text-2xl font-bold">
        Contingut centrat amb ample controlat
      </h2>
    </div>
  </div>
</section>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/05-sizing/2_exemples.html#exemple-6)
