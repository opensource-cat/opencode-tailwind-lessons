---
marp: true
theme: default
paginate: true
---

# Lliçó 14
## Pseudo-classes i dark mode

---

## Pseudo-classes estructurals

```html
<ul>
  <li class="bg-white even:bg-gray-50 px-4 py-2">Element 1</li>
  <li class="bg-white even:bg-gray-50 px-4 py-2">Element 2</li>
  <li class="bg-white even:bg-gray-50 px-4 py-2">Element 3</li>
  <li class="bg-white even:bg-gray-50 px-4 py-2">Element 4</li>
</ul>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#even-odd)

`first:`, `last:`, `odd:`, `even:` per estilar posicions.

Amb `divide-y` ho pots fer encara més net.

---

## First-letter i first-line

```html
<p class="first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600
          first-line:text-gray-700">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#first-letter)

Estil de revista: primera lletra gran i primera línia en color diferent.

---

## Placeholder

```html
<input class="border border-gray-300 rounded-md px-4 py-2
              placeholder:text-gray-400 placeholder:italic"
       type="text" placeholder="El teu nom...">
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#placeholder)

`placeholder:{classe}` per estilar el text de placeholder dels inputs.

---

## Dark mode

Requereix `darkMode: 'class'` a `tailwind.config.js` (o `'media'` per sistema).

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
  <h2 class="text-xl font-bold">Mode fosc</h2>
  <p class="text-gray-600 dark:text-gray-300">
    Aquest contingut s'adapta al tema.
  </p>
</div>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#dark-mode)

`dark:{classe}` per sobreescriure qualsevol classe en mode fosc.

---

## Focus ring per accessibilitat

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:ring-offset-2">
  Envia
</button>
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#focus-ring)

`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` per a un anell de focus visible.

Millora l'accessibilitat per a navegació amb teclat.

---

## Exemple: formulari accessible

```html
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
  Correu electrònic
</label>
<input type="email"
       class="mt-1 block w-full border border-gray-300 dark:border-gray-600
              dark:bg-gray-800 dark:text-white
              rounded-md px-3 py-2
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed"
       placeholder="usuari@exemple.com">
```
👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/14-pseudo-dark/2_exemples.html#formulari-accessible)

Combinació de dark mode, focus, placeholder i disabled.
