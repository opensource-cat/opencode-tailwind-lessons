# Exercicis — Lliçó 12: Responsive Design (Part 2)

## Exercici 1: Galeria responsive

Crea una galeria de 8 quadres de color que s'adapti:

- Mòbil: 1 columna
- `sm:`: 2 columnes
- `md:`: 3 columnes
- `lg:`: 4 columnes

Fes servir `grid` amb `gap-4`.

---

## Exercici 2: Header complet responsive

Crea un header que contingui:

- Logo
- Botó hamburguesa (visible a mòbil)
- Menú de navegació (visible a `md:`)
- Avatar d'usuari a la dreta

Tot ha d'estar centrat verticalment amb `items-center`.

---

## Exercici 3: Article llegible

Crea un article de text que sigui:

- A mòbil: `text-sm`, `p-4`, `leading-relaxed`
- A `md:`: `text-base`, `p-8`, `max-w-2xl mx-auto`
- A `lg:`: `text-lg`, `p-12`, `max-w-3xl mx-auto`

---

## Exercici 4: Taula responsive

Crea una taula senzilla amb 4 columnes i 5 files. Envolta-la amb un `div overflow-x-auto` perquè es pugui desplaçar horitzontalment a mòbil.

---

## Exercici 5 (extra): Landing page completa

Recrea aquesta landing page responsive:

**Mòbil (apilat):**
```
┌──────────────┐
│    Header    │
├──────────────┤
│              │
│    Hero      │
│  [títol]     │
│  [botó]      │
│              │
├──────────────┤
│  Targeta 1   │
├──────────────┤
│  Targeta 2   │
├──────────────┤
│  Targeta 3   │
├──────────────┤
│   Footer     │
└──────────────┘
```

**Escriptori (en graella):**
```
┌──────────────────────────────────┐
│  Header (logo + enllaços)        │
├──────────────────────────────────┤
│                                  │
│    Hero centrat amb fons         │
│                                  │
├──────────┬──────────┬────────────┤
│ Targeta1 │ Targeta2 │  Targeta3  │
├──────────┴──────────┴────────────┤
│           Footer                  │
└──────────────────────────────────┘
```
