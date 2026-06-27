# Exercicis — Lliçó 11: Responsive Design (Part 1)

## Exercici 1: Text responsive

Crea un `<h1>` que sigui:

- `text-xl` a mòbil
- `text-3xl` a `md:`
- `text-5xl` a `lg:`

I un `<p>` que sigui `text-sm` → `md:text-base` → `lg:text-lg`.

---

## Exercici 2: Columnes que s'apilen

Crea dos divs amb text. A mòbil han d'estar un a sota de l'altre. A `md:` han d'aparèixer un al costat de l'altre en una fila.

---

## Exercici 3: Menú responsive

Crea un navbar amb:

- Un logo a l'esquerra
- 4 enllaços de navegació
- A mòbil: els enllaços amagats (`hidden`) i mostra "☰"
- A `md:`: mostra els enllaços amb `flex` i amaga el ☰

---

## Exercici 4: Graella adaptativa

Crea una graella de 6 elements que sigui:

- 1 columna a mòbil (`grid-cols-1`)
- 2 columnes a `sm:` (`sm:grid-cols-2`)
- 3 columnes a `lg:` (`lg:grid-cols-3`)

---

## Exercici 5 (extra): Perfil responsive

Crea una targeta de perfil que:

- A mòbil: imatge a dalt, text a sota, tot centrat
- A `md:`: imatge a l'esquerra, text a la dreta (`flex flex-col md:flex-row`)
- A `lg:`: més padding, text més gran

Posa-hi una foto placeholder (`w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full`), nom, bio i botons.
