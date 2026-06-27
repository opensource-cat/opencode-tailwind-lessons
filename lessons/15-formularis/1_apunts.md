---
marp: true
theme: default
paginate: true
---

# Lliçó 15
## Formularis amb Tailwind

---

## Input estàndard

```html
<div class="mb-4">
  <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
  <input type="text"
         class="w-full border border-gray-300 rounded-md px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500
                placeholder:text-gray-400"
         placeholder="El teu nom">
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-1)

---

## Botons

```html
<button class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg
               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Envia
</button>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-2)

Variants:

```html
<button class="bg-gray-200 text-gray-800 ...">Secundari</button>
<button class="bg-red-600 text-white ...">Perill</button>
<button class="bg-transparent border border-blue-600 text-blue-600 ...">Outline</button>
```

---

## Checkbox i radio

```html
<label class="flex items-center space-x-2">
  <input type="checkbox" class="rounded border-gray-300 text-blue-600
                               focus:ring-blue-500">
  <span class="text-sm text-gray-700">Accepto els termes</span>
</label>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-3)

`accent-{color}` per canviar el color nadiu del checkbox/radio.

---

## Select (desplegable)

```html
<select class="w-full border border-gray-300 rounded-md px-4 py-2
               bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
  <option>Selecciona una opció</option>
  <option>Opció 1</option>
  <option>Opció 2</option>
</select>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-4)

---

## Textarea

```html
<textarea class="w-full border border-gray-300 rounded-md px-4 py-2
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 placeholder:text-gray-400"
          rows="4" placeholder="Escriu aquí..."></textarea>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-5)

---

## Formulari complet + disabled

```html
<form class="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-xl space-y-6">
  <div>
    <label class="block text-sm font-medium text-gray-700">Nom complet</label>
    <input type="text" class="mt-1 w-full border border-gray-300 rounded-md px-4 py-2
                              focus:outline-none focus:ring-2 focus:ring-blue-500">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700">Missatge</label>
    <textarea class="mt-1 w-full border border-gray-300 rounded-md px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
  </div>
  <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg
                 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled>
    Enviar (deshabilitat)
  </button>
</form>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/15-formularis/2_exemples.html#exemple-6)
