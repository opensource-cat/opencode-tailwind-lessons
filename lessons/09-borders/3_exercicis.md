# Exercicis — Lliçó 9: Borders i border-radius

## Exercici 1: Targeta amb ombra

Crea una targeta que tingui:

- Fons blanc
- Border gris (`border border-gray-200`)
- Cantonades `rounded-xl`
- Ombres `shadow-lg`
- Padding `p-6`
- Títol i text dins

---

## Exercici 2: Badges

Crea 3 badges (etiquetes) amb:

- Fons de colors diferents
- `rounded-full` per forma de píndola
- `px-3 py-1` per espaiat
- `text-sm font-semibold`
- Que tinguin un `border` subtil del mateix color però més fosc

---

## Exercici 3: Avatar circular

Crea un avatar circular de 64px (`w-16 h-16`) amb:

- `rounded-full` per fer-lo cercle
- `bg-gray-400` com a placeholder
- `border-4 border-white shadow-md` per donar-li un marc

---

## Exercici 4: Botons amb estil

Crea 3 botons amb diferents nivells d'èmfasi:

- **Primari:** `bg-blue-600 text-white` sense border visible
- **Secundari:** border blau i text blau, sense fons
- **Tercer:** sense border ni fons, només text

Tots amb `rounded-lg px-4 py-2`.

---

## Exercici 5 (extra): Targeta de producte

Recrea aquesta targeta de producte:

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │   (imatge 300x200)    │  │  ← overflow-hidden al pare
│  └───────────────────────┘  │
│                             │
│  Nom del producte           │
│  Descripció curta           │
│                             │
│  $29.99    [Comprar]        │
│                             │
└─────────────────────────────┘
```

- Border: `border border-gray-200`
- Ombres: `shadow-md` que es torna `shadow-lg` amb `hover:shadow-lg`
- Cantonades: `rounded-xl`
- Botó: `rounded-lg`
- Preu: `text-2xl font-bold text-green-600`
