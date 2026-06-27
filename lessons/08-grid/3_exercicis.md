# Exercicis — Lliçó 8: Grid CSS

## Exercici 1: Graella simple

Crea una graella de 3 columnes amb 6 elements. Cada element ha de ser un quadre de color amb text dins. Usa `gap-4`.

---

## Exercici 2: Layout de pàgina

Recrea aquest layout amb grid:

```
┌──────────────────────────────────┐
│           HEADER                 │
├──────┬───────────┬───────────────┤
│ Nav  │   Main    │   Sidebar     │
│      │           │               │
├──────┴───────────┴───────────────┤
│           FOOTER                 │
└──────────────────────────────────┘
```

Header i footer: `col-span-12`. Nav: `col-span-2`. Main: `col-span-7`. Sidebar: `col-span-3`.

---

## Exercici 3: Destacat visual

Crea una graella `grid-cols-4` amb 7 elements. El primer element ha d'ocupar 2 columnes i 2 files (`col-span-2 row-span-2`) per destacar-lo.

---

## Exercici 4: Galeria d'imatges

Crea una galeria de 8 quadres de colors. Han de mostrar-se en 4 columnes a pantalla gran, 2 a mòbil (ho veurem amb responsive). Per ara, fes `grid-cols-4 gap-2`.

---

## Exercici 5 (extra): Dashboard amb grid

Crea un dashboard amb:

- Header a dalt de tot
- Sidebar esquerra (ample 2 columnes)
- 4 targetes de mètriques en una sub-graella `grid-cols-2` dins del main
- Una taula ampla a sota de les targetes (`col-span-2` dins del main)
- Footer

```
┌──────────────────────────────────────┐
│            HEADER                    │
├──────┬───────────────────────────────┤
│      │  ┌──────┬──────┐             │
│ Nav  │  │ Met1 │ Met2 │             │
│      │  ├──────┼──────┤             │
│      │  │ Met3 │ Met4 │             │
│      │  ├───────────────────┤       │
│      │  │      Taula        │       │
│      │  └───────────────────┘       │
├──────┴───────────────────────────────┤
│            FOOTER                    │
└──────────────────────────────────────┘
```
