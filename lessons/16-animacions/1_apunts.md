---
marp: true
theme: default
paginate: true
---

# Lliçó 16
## Animacions i transicions

---

## Transicions bàsiques

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg transition
               hover:bg-blue-700">
  Suau
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-1)

`transition` activa la transició en totes les propietats que canvien.

---

## Tipus de transició

| Classe | Propietats que transiciona |
|---|---|
| `transition` | totes |
| `transition-all` | totes (explícit) |
| `transition-colors` | color, background-color, border-color |
| `transition-transform` | transform |
| `transition-opacity` | opacitat |
| `transition-shadow` | box-shadow |
| `transition-none` | cap |

---

## Durada

```html
<div class="transition duration-75">   /* 75ms  */</div>
<div class="transition duration-150">  /* 150ms */</div>
<div class="transition duration-300">  /* 300ms (per defecte) */</div>
<div class="transition duration-500">  /* 500ms */</div>
<div class="transition duration-1000"> /* 1s    */</div>
```
👉 [Obre l'exemple](2_exemples.html#exemple-3)

---

## Corbes d'easing

| Classe | Comportament |
|---|---|
| `ease-linear` | velocitat constant |
| `ease-in` | comença lent, accelera |
| `ease-out` | comença ràpid, desaccelera |
| `ease-in-out` | lent als extrems, ràpid al mig |

---

## Transformacions: scale i translate

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg
               transition-transform duration-200
               hover:scale-105 hover:-translate-y-1">
  Botó que es mou
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-5)

`hover:scale-110`, `hover:scale-105`, `hover:-translate-y-1`.

---

## Animacions predefinides

| Classe | Efecte |
|---|---|
| `animate-spin` | rotació contínua |
| `animate-ping` | efecte de ping/radar |
| `animate-pulse` | polsació suau |
| `animate-bounce` | rebot |
| `animate-none` | sense animació |

```html
<span class="animate-spin inline-block">⟳</span>
<div class="animate-pulse bg-red-500 w-4 h-4 rounded-full"></div>
```
👉 [Obre l'exemple](2_exemples.html#exemple-6)

---

## Exemple: targeta animada

```html
<div class="group bg-white p-6 rounded-xl shadow-md
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:-translate-y-2 cursor-pointer">
  <h3 class="text-lg font-bold transition-colors duration-200
             group-hover:text-blue-600">
    Targeta interactiva
  </h3>
  <p class="text-gray-600 mt-2 transition-opacity duration-200
            group-hover:text-gray-800">
    Text que es fa més fosc en hover.
  </p>
</div>
```
👉 [Obre l'exemple](2_exemples.html#exemple-7)

Combinació de `transition`, `group-hover`, `duration` i `ease`.
