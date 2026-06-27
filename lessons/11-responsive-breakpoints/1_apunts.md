---
marp: true
theme: default
paginate: true
---

# Lliçó 11
## Responsive Design (Part 1): breakpoints

---

## Breakpoints a Tailwind

| Prefix | Mínima amplada |
|---|---|
| (cap) | 0px — per defecte (mòbil) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## Mobile-first

Tailwind és **mobile-first**: el que escrius sense prefix s'aplica a totes les mides. Les variants amb prefix només s'activen a partir del breakpoint.

```html
<div class="flex-col md:flex-row">
  <!-- Mòbil: vertical. A partir de 768px: horitzontal -->
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-1)

---

## Exemple: text responsive

```html
<p class="text-sm md:text-base lg:text-lg">
  El text creix amb la pantalla.
</p>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-2)

- Mòbil: `text-sm` (14px)
- Tablet+: `text-base` (16px)
- Escriptori+: `text-lg` (18px)

---

## Exemple: layouts que canvien

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2 bg-blue-200 p-4">Col 1</div>
  <div class="w-full md:w-1/2 bg-green-200 p-4">Col 2</div>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-3)

A mòbil: apilades verticalment (full width).
A tablet+: una al costat de l'altra.

---

## Exemple: alineació responsive

```html
<h1 class="text-center sm:text-left text-2xl sm:text-4xl font-bold">
  Títol
</h1>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-4)

A mòbil: centrat i petit.
A partir de 640px: alineat a l'esquerra i més gran.

---

## Exemple: amagar/mostrar elements

```html
<button class="md:hidden">☰ Menú mòbil</button>
<nav class="hidden md:flex space-x-4">
  <a href="#">Inici</a>
  <a href="#">Serveis</a>
  <a href="#">Contacte</a>
</nav>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-5)

- Mòbil: es veu el botó ☰, el nav està amagat
- Tablet+: el botó desapareix, el nav es mostra horitzontal

---

## Clau: dissenya sempre per mòbil primer

1. Comença sense breakpoints (disseny mòbil)
2. Prova en pantalla gran i afegeix breakpoints on faci falta
3. No afegeixis breakpoints innecessaris

```html
<!-- Bo: mobile-first -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<!-- Mal: escriptori primer (classe base innecessàriament gran) -->
<div class="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-1 gap-4">
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/11-responsive-breakpoints/2_exemples.html#exemple-6)
