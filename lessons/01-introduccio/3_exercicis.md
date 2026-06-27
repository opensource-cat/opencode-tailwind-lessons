# Exercicis — Lliçó 1

## Exercici 1: Primera pàgina amb Tailwind

Crea un fitxer `index.html` que carregui Tailwind via CDN i mostri un títol (`<h1>`) gran en blau centrat, i un paràgraf (`<p>`) de color gris amb mida de text `lg`.

**Requisits:**
- Carrega Tailwind amb `<script src="https://cdn.tailwindcss.com">`
- El títol ha de dir "Hola, Tailwind!"
- El paràgraf ha de dir "Estic aprenent classes atòmiques."
- Fes servir només classes: `text-4xl`, `font-bold`, `text-blue-600`, `text-center`, `text-lg`, `text-gray-600`, `mt-4`

---

## Exercici 2: Tradueix a Tailwind

Donat aquest HTML amb CSS tradicional, reescriu-lo usant **només classes de Tailwind** (sense cap `<style>`):

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .boton {
      background-color: #dc2626;
      color: white;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 8px;
    }
    .boton:hover {
      background-color: #b91c1c;
    }
  </style>
</head>
<body>
  <button class="boton">Esborra</button>
</body>
</html>
```

**Pista:** les classes Tailwind equivalents són `bg-red-600`, `text-white`, `font-bold`, `px-6`, `py-3`, `rounded-lg`, `hover:bg-red-700`.

---

## Exercici 3: Detecta l'enfocament

Classifica cada fragment segons si és **CSS tradicional**, **Bootstrap** o **Tailwind**:

| Fragment | Enfocament |
|---|---|
| `<div class="container mt-4">` | ? |
| `<div class="flex justify-center">` | ? |
| `.wrapper { display: flex; justify-content: center; }` | ? |
| `<button class="btn btn-danger">` | ? |
| `<button class="bg-red-500 text-white px-4 py-2 rounded">` | ? |

---

## Exercici 4: Quin problema resoldria Tailwind?

Llegeix el següent codi. Quin problema té? Com ho resoldria Tailwind?

```css
/* styles.css */
.header-title {
  font-size: 24px;
  color: #1e40af;
  font-weight: bold;
}

.footer-title {
  font-size: 24px;
  color: #1e40af;
  font-weight: bold;
}
```

```html
<h1 class="header-title">Títol del header</h1>
<h2 class="footer-title">Títol del footer</h2>
```

**Pregunta:** per què és problemàtic tenir dues classes CSS que fan exactament el mateix? Com ho evitaries amb Tailwind?

---

## Exercici 5 (extra): Crea un component lliure

Sense mirar apunts, intenta crear un botó verd amb Tailwind que tingui:
- Fons verd (`bg-green-600`)
- Text blanc i negreta
- Padding vertical `2` i horitzontal `6`
- Cantonades rodones (`rounded`)
- Que es torni un verd més fosc en hover

Obre'l al navegador i comprova que funciona. Si ho has aconseguit sense errors, ja has assimilat el concepte de classes atòmiques.
