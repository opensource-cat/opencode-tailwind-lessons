---
marp: true
theme: default
paginate: true
---

# Lliçó 17
## Imatges i fons

---

## Object-fit: com es redimensiona una imatge dins del seu contenidor

```html
<img src="foto.jpg" class="w-full h-64 object-cover">
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/17-imatges/2_exemples.html#exemple-1)

| Classe | Comportament |
|---|---|
| `object-cover` | Omple el contenidor, retalla si cal (més comú) |
| `object-contain` | Cap dins, respecta proporcions, deixa espais |
| `object-fill` | Estira sense respectar proporcions |
| `object-none` | Mida original, sense redimensionar |
| `object-scale-down` | Com contain però mai més gran que l'original |

---

## Object-position

```html
<img src="foto.jpg" class="w-full h-64 object-cover object-center">
<img src="foto.jpg" class="w-full h-64 object-cover object-top">
<img src="foto.jpg" class="w-full h-64 object-cover object-bottom">
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/17-imatges/2_exemples.html#exemple-2)

`object-top`, `object-center`, `object-bottom`, `object-left`, `object-right`.

Controla quina part de la imatge es veu.

---

## Fons d'imatge amb CSS

```html
<div class="bg-cover bg-center bg-no-repeat h-96"
     style="background-image: url('foto.jpg')">
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/17-imatges/2_exemples.html#exemple-3)

| Classe | Efecte |
|---|---|
| `bg-cover` | La imatge cobreix tot l'element |
| `bg-contain` | La imatge es mostra sencera |
| `bg-center` | Centrada |
| `bg-no-repeat` | No es repeteix |
| `bg-fixed` | Efecte parallax (no es mou amb el scroll) |

---

## Exemple: hero amb imatge de fons

```html
<section class="relative bg-cover bg-center bg-no-repeat h-screen"
         style="background-image: url('https://picsum.photos/1920/1080')">
  <!-- Overlay fosc -->
  <div class="absolute inset-0 bg-black/50"></div>
  <!-- Contingut -->
  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-5xl font-bold text-white text-center">
      Benvingut al nostre web
    </h1>
  </div>
</section>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/17-imatges/2_exemples.html#exemple-4)

Overlay `bg-black/50` + contingut amb `z-10`.

---

## Imatge dins d'una targeta

```html
<div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover"
       src="https://picsum.photos/400/300"
       alt="Foto">
  <div class="p-6">
    <h3 class="text-lg font-bold">Títol</h3>
    <p class="text-gray-600 mt-2">Descripció de la targeta.</p>
  </div>
</div>
```

👉 [Obre l'exemple](https://opensource-cat.github.io/opencode-tailwind-lessons/lessons/17-imatges/2_exemples.html#exemple-5)

`overflow-hidden` al pare perquè la imatge no surti de les cantonades `rounded-xl`.
