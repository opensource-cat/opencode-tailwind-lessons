---
marp: true
theme: default
paginate: true
---

# Lliçó 13
## Estats: hover, focus, active i more

---

## Hover: passar el ratolí per sobre

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Acceptar
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-1)

Quan el ratolí passa per sobre, el fons es torna més fosc.
Qualsevol classe pot anar darrere de `hover:`.

---

## Focus: element seleccionat

```html
<input class="border border-gray-300 rounded-md px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500"
       type="text" placeholder="Escriu aquí...">
```
👉 [Obre l'exemple](2_exemples.html#exemple-2)

`focus:ring-2` afegeix un anell de focus visible — millora l'accessibilitat.

---

## Active: moment del clic

```html
<button class="bg-green-500 hover:bg-green-600 active:bg-green-700
               text-white px-6 py-3 rounded-lg">
  Envia
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-3)

`active:` només s'aplica mentre el botó està pressionat.

---

## Disabled: elements deshabilitats

```html
<button disabled class="bg-gray-300 text-gray-500 px-4 py-2 rounded
                        cursor-not-allowed disabled:opacity-50">
  Deshabilitat
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-4)

`disabled:opacity-50 disabled:cursor-not-allowed` per feedback visual.

---

## Group hover: estilar fills des del pare

```html
<div class="group bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
  <h3 class="text-lg font-bold group-hover:text-blue-600">Títol</h3>
  <p class="text-gray-600 group-hover:text-gray-900">Text descriptiu</p>
</div>
```
👉 [Obre l'exemple](2_exemples.html#exemple-5)

`group` al pare + `group-hover:` als fills = el fill canvia quan el pare té hover.

Sense JavaScript!

---

## Múltiples estats combinats

```html
<button class="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
               focus:outline-none focus:ring-2 focus:ring-indigo-400
               disabled:opacity-50 disabled:cursor-not-allowed
               text-white font-semibold py-2 px-6 rounded-lg transition">
  Acceptar
</button>
```
👉 [Obre l'exemple](2_exemples.html#exemple-6)

`hover:`, `active:`, `focus:`, `disabled:` — tot es combina al mateix element.
