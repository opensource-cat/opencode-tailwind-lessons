---
marp: true
theme: default
paginate: true
---

# Lliçó 1
## Què és Tailwind i per què servir-lo?

---

## CSS tradicional vs frameworks

**CSS tradicional:** escriure classes pròpies, pensar noms, mantenir fulls d'estil separats del HTML

**Frameworks (Bootstrap, Bulma):** classes predefinides com `btn` o `card`, però tots els llocs s'assemblen i cal sobrescriure

**Tailwind CSS:** enfocament **utility-first**, classes atòmiques combinades directament al HTML

---

## Utility-first CSS

| Enfocament | Exemple d'un botó blau |
|---|---|
| CSS tradicional | `<button class="btn">` + CSS `.btn { ... }` |
| Bootstrap | `<button class="btn btn-primary btn-lg">` — Bootstrap decideix paddings, border-radius, colors i hover |
| Tailwind | `<button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">` — tu controles cada propietat |

Amb Bootstrap les classes `btn-primary` o `btn-lg` amaguen desenes de propietats.
Amb Tailwind cada classe fa una sola cosa: no hi ha màgia ni estils ocults.

---

## Avantatges principals

- **Sense noms de classes:** no cal inventar `.header-wrapper-inner`
- **Consistència:** totes les mesures i colors segueixen una escala predefinida
- **Responsive fàcil:** prefixos `md:`, `lg:` sense sortir del HTML
- **CSS que no creix:** PurgeCSS elimina estils no usats en producció
- **Productivitat:** totes les decisions d'estil al HTML, sense canviar d'arxiu

---

## Instal·lació via CDN

```html
<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La meva primera pàgina amb Tailwind</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">Hola, Tailwind!</h1>
</body>
</html>
```

Només un `<script>` al `<head>` i ja pots usar classes Tailwind.

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/01-introduccio/2_exemples.html#cdn)

---

## Concepte clau: classes atòmiques

Cada classe fa **una sola cosa**:

| Classe | Equival CSS |
|---|---|
| `text-center` | `text-align: center` |
| `font-bold` | `font-weight: 700` |
| `p-4` | `padding: 1rem` |
| `bg-blue-500` | `background-color: #3b82f6` |

---

## Com buscar classes de Tailwind

Amb centenars de classes, no cal memoritzar-les totes. Hi ha tres recursos clau:

**1. Documentació oficial** — [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Cada pàgina llista totes les classes d'una categoria amb exemples i codi
- Exemple: [tailwindcss.com/docs/flex](https://tailwindcss.com/docs/flex) mostra `flex`, `flex-row`, `flex-col`, etc.

**2. Cercador al web**
- Escriu "tailwind [propietat]" a Google: _"tailwind text align"_, _"tailwind padding"_
- La documentació oficial sol ser el primer resultat

**3. Cheat sheet visual**
- [tailwindcomponents.com/cheatsheet](https://tailwindcomponents.com/cheatsheet) — totes les classes en una graella
- Útil per explorar ràpidament valors i escales disponibles

---

## Exemple pràctic

```html
<button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
  Envia
</button>
```

Sense Tailwind: CSS a part, selectors, regles, i `:hover`.
Amb Tailwind: tot es defineix al mateix lloc, al HTML.

👉 [Obre l'exemple del botó](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/01-introduccio/2_exemples.html#boto)
