# Exercicis — Lliçó 17: Imatges i fons

## Exercici 1: Imatge dins d'una targeta

Crea una targeta de producte amb:

- Una imatge a dalt (`w-full h-48 object-cover`)
- Títol, descripció i preu a sota
- La targeta amb `rounded-xl shadow-md overflow-hidden`

Fes servir una imatge de placeholder: `https://picsum.photos/400/300`.

---

## Exercici 2: Hero section amb fons

Crea una secció que ocupi tota la pantalla (`min-h-screen`) amb:

- Imatge de fons (`bg-cover bg-center bg-no-repeat`)
- Overlay fosc (`bg-black/50`)
- Text blanc centrat al mig
- Un botó "Comença" a sota del títol

---

## Exercici 3: Galeria d'imatges

Crea una graella `grid-cols-3 gap-4` amb 6 imatges. Cada imatge ha de ser:

- `w-full h-48 object-cover rounded-lg`
- Quan passes el ratolí per sobre: `hover:scale-105 transition-transform duration-300`
- El contenidor de cada imatge amb `overflow-hidden rounded-lg`

---

## Exercici 4: Avatar amb object-cover

Crea un avatar circular:

- `w-20 h-20 rounded-full object-cover`
- Una imatge de persona (picsum photos amb seed)
- Border blanc i ombra: `border-4 border-white shadow-lg`

---

## Exercici 5 (extra): Banner promocional

Recrea aquest banner:

```
┌─────────────────────────────────────────┐
│                                         │
│   Text promocional                      │
│   "Descompte del 20%"                   │
│   [Compra ara]                          │
│                                         │
└─────────────────────────────────────────┘
```

- Fons: imatge de fons + overlay de color (`bg-blue-900/70`)
- `bg-cover bg-center`
- Text blanc
- Botó amb fons groc cridaner
- `min-h-[300px]` i `flex items-center`
