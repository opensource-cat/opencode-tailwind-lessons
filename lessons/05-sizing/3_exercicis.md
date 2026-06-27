# Exercicis — Lliçó 5: Width i height

## Exercici 1: Hero section

Crea una secció que ocupi tota la pantalla (`min-h-screen`) amb fons gris clar, i dins un títol centrat amb `max-w-xl mx-auto`.

---

## Exercici 2: Columnes proporcionals

Dins d'un contenidor `w-full`, crea dos divs germans:

- Un de `w-1/3` amb fons blau
- Un de `w-2/3` amb fons verd

Han d'aparèixer en línia (fes servir `flex`).

---

## Exercici 3: Contenidor de text llegible

Crea un article amb:

- `max-w-2xl mx-auto` per centrar i limitar l'ample
- `p-8` per espaiat interior
- Un títol, dos paràgrafs i un subtítol
- Prova com canvia la llegibilitat en pantalla gran

---

## Exercici 4: Targeta amb imatge quadrada

Crea una targeta amb:

- Una imatge quadrada de 200x200px (`w-48 h-48`) amb fons gris
- Text a sota
- Tota la targeta amb `max-w-sm`

---

## Exercici 5 (extra): Layout side-by-side

Recrea aquest disseny:

```
┌──────────────────────────────────────┐
│                                      │
│  ┌──────────────┐  ┌────────────────┐│
│  │  Sidebar      │  │  Contingut     ││
│  │  w-64         │  │  flex-1        ││
│  │  bg-gray-100  │  │  bg-white      ││
│  │               │  │                ││
│  └──────────────┘  └────────────────┘│
│                                      │
└──────────────────────────────────────┘
```

El contenidor pare ha de ser `flex` i ocupar `min-h-screen`.
