---
marp: true
theme: default
paginate: true
---

# Lliçó 7
## Flexbox (Part 2): elements fills

---

## Flex-grow: ocupar espai sobrant

```html
<div class="flex">
  <div class="flex-1">Ocupa l'espai disponible</div>
  <div class="flex-1">També ocupa la meitat</div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#flex-1)

`flex-1` → creix per igual entre tots els elements que el portin.

---

## Variants de `flex`

| Classe | Comportament |
|---|---|
| `flex-1` | `flex: 1 1 0%` — creix, encongeix, base 0 |
| `flex-auto` | `flex: 1 1 auto` — creix segons el contingut |
| `flex-initial` | `flex: 0 1 auto` — mida natural, pot encongir |
| `flex-none` | `flex: 0 0 auto` — mida fixa, no canvia |

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#variants-flex)

---

## Order: canviar l'ordre visual

```html
<div class="flex">
  <div class="order-3">Primer al HTML, tercer visualment</div>
  <div class="order-1">Segon al HTML, primer visualment</div>
  <div class="order-2">Tercer al HTML, segon visualment</div>
</div>
```

`order-first` → `order: -9999`
`order-last` → `order: 9999`
`order-1` a `order-12`

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#order)

---

## Self: alinear un fill individualment

```html
<div class="flex items-start h-40">
  <div class="self-start">Dalt</div>
  <div class="self-center">Centre</div>
  <div class="self-end">Baix</div>
  <div class="self-stretch">Estirat</div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#self-align)

Sobrescriu l'`align-items` del pare per a un fill concret.

---

## Grow i shrink individuals

```html
<div class="flex">
  <div class="grow">Creix si hi ha espai</div>
  <div class="grow-0">No creix</div>
  <div class="shrink">Es pot encongir</div>
  <div class="shrink-0">No s'encongeix</div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#grow-shrink)

---

## Exemple: targetes amb flex-wrap

```html
<div class="flex flex-wrap gap-4">
  <div class="flex-1 min-w-[250px] bg-white p-4 shadow rounded">
    Targeta 1 — s'adapta a l'ample
  </div>
  <div class="flex-1 min-w-[250px] bg-white p-4 shadow rounded">
    Targeta 2
  </div>
  <div class="flex-1 min-w-[250px] bg-white p-4 shadow rounded">
    Targeta 3
  </div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/07-flexbox-elements/2_exemples.html#cards-flex)

`flex-1` + `min-w-[250px]` + `flex-wrap` = targetes responsives sense media queries.
