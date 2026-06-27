# Exercicis — Lliçó 16: Animacions i transicions

## Exercici 1: Botó amb transició

Crea un botó que canviï de color en hover, però amb una transició suau de 300ms.

- Normal: `bg-indigo-600 text-white`
- Hover: `bg-indigo-700` + `-translate-y-0.5`
- Transició: `transition-all duration-300 ease-out`

---

## Exercici 2: Targeta que s'eleva

Crea una targeta que:

- Per defecte: `shadow-md`
- En hover: `shadow-xl` i es mou 4px cap amunt (`-translate-y-1`)
- Tot amb `transition-all duration-200`

---

## Exercici 3: Loading spinner

Crea un indicador de càrrega amb:

- Un cercle (`rounded-full`) de 32px
- `animate-spin`
- Border: `border-4 border-gray-200 border-t-blue-600`

Això crea l'efecte d'spin clàssic.

---

## Exercici 4: Badge animat

Crea un puntet vermell animat que sembli "en viu":

```
  En directe ● (puntet que fa ping)
```

El puntet: `w-3 h-3 bg-red-500 rounded-full animate-ping`.

---

## Exercici 5 (extra): Botó CTA amb microinteraccions

Crea un botó "Compra ara" amb múltiples animacions:

- Per defecte: `bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg`
- En hover:
  - Escala a 1.05
  - Pujada de 2px
  - Ombra augmentada
  - Canvi de color de fons a `emerald-700`
- En active: escala a 0.95 (sensació de clic real)
- Tot amb `transition-all duration-150`
