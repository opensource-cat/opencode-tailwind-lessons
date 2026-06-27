---
marp: true
theme: default
paginate: true
---

# Lliçó 2
## Tipografia i text

---

## Mides de text (`font-size`)

De `xs` a `9xl`:

| Classe | Mida |
|---|---|
| `text-xs` | 0.75rem (12px) |
| `text-sm` | 0.875rem (14px) |
| `text-base` | 1rem (16px) — per defecte |
| `text-lg` | 1.125rem (18px) |
| `text-xl` | 1.25rem (20px) |
| `text-2xl` | 1.5rem (24px) |
| `text-3xl` a `text-9xl` | fins a 8rem (128px) |

---

## Pes de font (`font-weight`)

| Classe | Pes |
|---|---|
| `font-thin` | 100 |
| `font-light` | 300 |
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |
| `font-extrabold` | 800 |
| `font-black` | 900 |

---

## Alineació del text

```html
<p class="text-left">Alineat a l'esquerra</p>
<p class="text-center">Alineat al centre</p>
<p class="text-right">Alineat a la dreta</p>
<p class="text-justify">Justificat (ambdues bandes rectes)</p>
```

👉 [Obre l'exemple](2_exemples.html#exemple-1)

---

## Transformació del text

```html
<p class="uppercase">TOT EN MAJÚSCULES</p>
<p class="lowercase">TOT EN MINÚSCULES</p>
<p class="capitalize">Primera Lletra De Cada Paraula En Majúscula</p>
```

👉 [Obre l'exemple](2_exemples.html#exemple-2)

---

## Espaiat entre lletres (`letter-spacing`)

| Classe | Efecte |
|---|---|
| `tracking-tighter` | molt comprimit |
| `tracking-tight` | comprimit |
| `tracking-normal` | per defecte |
| `tracking-wide` | ampliat |
| `tracking-wider` | més ampliat |
| `tracking-widest` | molt ampliat |

---

## Altura de línia (`line-height`)

| Classe | Efecte |
|---|---|
| `leading-none` | 1 (sense espai) |
| `leading-tight` | 1.25 |
| `leading-snug` | 1.375 |
| `leading-normal` | 1.5 (per defecte) |
| `leading-relaxed` | 1.625 |
| `leading-loose` | 2 |

---

## Exemple complet

```html
<h1 class="text-4xl font-bold text-center tracking-wide">
  Títol destacat
</h1>
<p class="text-base leading-relaxed text-gray-700">
  Paràgraf amb espaiat còmode i color gris
  per a una lectura agradable.
</p>
```

👉 [Obre l'exemple](2_exemples.html#exemple-3)
