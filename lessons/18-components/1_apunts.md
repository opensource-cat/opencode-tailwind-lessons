---
marp: true
theme: default
paginate: true
---

# Lliçó 18
## Components pràctics

---

## Navbar responsive

```html
<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <span class="text-xl font-bold">Logo</span>
      <!-- Enllaços (escriptori) -->
      <div class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-700 hover:text-blue-600">Inici</a>
        <a href="#" class="text-gray-700 hover:text-blue-600">Serveis</a>
        <a href="#" class="text-gray-700 hover:text-blue-600">Contacte</a>
      </div>
      <!-- Hamburger (mòbil) -->
      <button class="md:hidden p-2 rounded-md hover:bg-gray-100">☰</button>
    </div>
  </div>
</nav>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-1)

---

## Hero section

```html
<section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
  <div class="max-w-4xl mx-auto text-center py-20 px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      Crea el teu web amb Tailwind
    </h1>
    <p class="text-xl md:text-2xl text-blue-100 mb-8">
      Aprèn a maquetar de forma ràpida i consistent.
    </p>
    <div class="flex justify-center space-x-4">
      <a href="#" class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg
                        hover:bg-blue-50 transition">
        Comença ara
      </a>
      <a href="#" class="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg
                        hover:bg-white hover:text-blue-600 transition">
        Més informació
      </a>
    </div>
  </div>
</section>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-2)

---

## Targeta (card)

```html
<div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden
            hover:shadow-lg transition-shadow">
  <img class="w-full h-48 object-cover"
       src="https://picsum.photos/400/300" alt="">
  <div class="p-6">
    <span class="text-xs text-blue-600 font-semibold uppercase tracking-wide">
      Categoria
    </span>
    <h3 class="mt-1 text-xl font-bold text-gray-900">Títol de la targeta</h3>
    <p class="mt-2 text-gray-600">Descripció breu del contingut.</p>
    <a href="#" class="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800">
      Llegir més →
    </a>
  </div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-3)

---

## Footer

```html
<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h4 class="text-lg font-bold mb-4">Logo</h4>
      <p class="text-gray-400 text-sm">Descripció curta de l'empresa.</p>
    </div>
    <div>
      <h5 class="font-semibold mb-3">Enllaços</h5>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><a href="#" class="hover:text-white">Inici</a></li>
        <li><a href="#" class="hover:text-white">Serveis</a></li>
        <li><a href="#" class="hover:text-white">Contacte</a></li>
      </ul>
    </div>
    <div>
      <h5 class="font-semibold mb-3">Xarxes</h5>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><a href="#" class="hover:text-white">Twitter</a></li>
        <li><a href="#" class="hover:text-white">LinkedIn</a></li>
      </ul>
    </div>
    <div>
      <h5 class="font-semibold mb-3">Contacte</h5>
      <ul class="space-y-2 text-sm text-gray-400">
        <li>info@exemple.com</li>
        <li>+34 123 456 789</li>
      </ul>
    </div>
  </div>
  <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
    © 2026 Tots els drets reservats.
  </div>
</footer>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-4)

---

## Galeria d'imatges

```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div class="overflow-hidden rounded-lg">
    <img class="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
         src="https://picsum.photos/400/300?1" alt="">
  </div>
  <!-- Repetir per a més imatges... -->
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-5)

---

## Taula responsive

```html
<div class="overflow-x-auto rounded-lg shadow">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estat</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 text-sm text-gray-900">Anna</td>
        <td class="px-6 py-4 text-sm text-gray-600">Dissenyadora</td>
        <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Actiu</span></td>
      </tr>
      <!-- Més files... -->
    </tbody>
  </table>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-6)

---

## Breadcrumbs

```html
<nav class="flex items-center space-x-2 text-sm text-gray-500">
  <a href="#" class="hover:text-gray-700">Inici</a>
  <span>/</span>
  <a href="#" class="hover:text-gray-700">Categoria</a>
  <span>/</span>
  <span class="text-gray-900 font-medium">Pàgina actual</span>
</nav>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/18-components/2_exemples.html#exemple-7)
