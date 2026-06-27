# Exercicis — Lliçó 10: Display i visibilitat

## Exercici 1: block vs inline-block

Crea 3 quadres de 100x100px amb fons de colors. El primer amb `block`, el segon amb `inline-block`, el tercer amb `inline`. Observa com es comporten:

- El `block` ocupa tota la línia
- L'`inline-block` es posa al costat d'altres
- L'`inline` ignora l'ample/alçada

---

## Exercici 2: Badge de notificació

Crea un botó que sembli una campana de notificacions:

```
  [🔔] ← botó
   3   ← badge vermell a dalt a la dreta
```

El badge ha de ser `absolute -top-2 -right-2` dins d'un pare `relative inline-block`.

---

## Exercici 3: Overflow

Crea un contenidor de 200x100px amb `overflow-hidden` i posa-hi un text llarg que no hi cap. Després canvia a `overflow-auto` i veu com apareix el scroll.

---

## Exercici 4: Capes superposades

Crea 3 quadres de 150x150px posicionats absolutament al mateix lloc. Dona'ls diferents `z-index` i colors per veure la superposició.

El pare ha de ser `relative` i tenir `w-40 h-40`.

---

## Exercici 5 (extra): Menú desplegable (maqueta)

Crea un botó "Menú" i, a sota, un panell `hidden` (que no es vegi). Després, simula que està visible canviant `hidden` per `block`.

```
┌──────┐
│ Menú │
└──────┘
┌──────────────┐
│ Opció 1      │
│ Opció 2      │  ← Aquest panell apareix/desapareix
│ Opció 3      │
└──────────────┘
```

Fes servir `relative` pel contenidor i `absolute` pel panell.
