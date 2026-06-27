# Exercicis — Lliçó 19: Positioning i valors arbitraris

## Exercici 1: Badge de notificació

Crea un botó "Notificacions" amb un badge vermell a la cantonada superior dreta que mostri "5".

El badge ha de ser `absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center`.

---

## Exercici 2: Modal centrat

Crea un modal que:

- Ocupi tota la pantalla (`fixed inset-0`)
- Tingui un fons semitransparent (`bg-black/50`)
- Tingui `z-50`
- El contingut estigui centrat (`flex items-center justify-center`)
- La caixa blanca tingui `max-w-md w-full mx-4 p-8 rounded-xl shadow-xl`

---

## Exercici 3: Sticky sidebar

Crea un layout de dues columnes:

- Columna esquerra (sidebar) de 250px amb `sticky top-4 self-start`
- Columna dreta amb contingut llarg (prou text per fer scroll)
- La sidebar ha de seguir en scroll fins que arriba a top:4, on es queda fixa

---

## Exercici 4: Valors arbitraris

Crea:

- Un div de 333px d'ample (`w-[333px]`)
- Un text de color `#8b5cf6` (`text-[#8b5cf6]`)
- Un div amb alçada `calc(100vh - 80px)` (`h-[calc(100vh-80px)]`)
- Un element posicionat a `left-[42%]`

---

## Exercici 5 (extra): Tooltip amb positioning

Recrea aquest tooltip que apareix sobre un botó:

```
       ┌──────────┐
       │ Tooltip! │  ← absolute, centrat sobre el botó
       └──────────┘
    ┌──────────────┐
    │  Botó aquí   │  ← relative inline-block
    └──────────────┘
```

- El botó és `relative inline-block`
- El tooltip és `absolute bottom-full left-1/2 -translate-x-1/2 mb-2`
- El tooltip té `bg-gray-900 text-white text-sm px-3 py-1 rounded`
- Per defecte el tooltip està `hidden`, en hover del botó `group-hover:block` (el botó ha de tenir `group`)
