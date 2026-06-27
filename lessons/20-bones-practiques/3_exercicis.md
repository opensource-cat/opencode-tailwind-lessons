# Exercicis — Lliçó 20: Bones pràctiques

## Exercici 1: Refactoritza amb `space`

Aquest codi fa servir margin a cada fill. Refactoritza'l per usar `space-y-` al pare:

```html
<div>
  <div style="margin-bottom: 16px;">Element 1</div>
  <div style="margin-bottom: 16px;">Element 2</div>
  <div style="margin-bottom: 16px;">Element 3</div>
</div>
```

Reescriu-lo amb classes Tailwind i `space-y-4`.

---

## Exercici 2: Ordena les classes

Les classes d'aquest botó estan desordenades. Reordena-les seguint el patró recomanat (layout → display → spacing → sizing → tipografia → colors → estats):

```html
<button class="hover:bg-blue-700 text-white bg-blue-600 block font-bold w-full mt-4 p-4 rounded-lg text-center transition">
  Envia
</button>
```

---

## Exercici 3: Detecta mals usos

Identifica què està malament en cada cas i proposa una correcció:

```html
<!-- Cas A -->
<div class="p-[16px] bg-[#3b82f6] text-[#ffffff]">

<!-- Cas B -->
<div>
  <div class="mr-2">A</div>
  <div class="mr-2">B</div>
  <div class="mr-2">C</div>
</div>

<!-- Cas C (pensa en mobile-first) -->
<div class="flex flex-row md:flex-col">
```

---

## Exercici 4: Extreu un component (conceptual)

Descriu com crearies un component `Card` reutilitzable amb React/Vue. Quines classes Tailwind tindria? Quines propietats (props) acceptaria?

No cal que escriguis codi complet, nomes l'estructura de classes i les props que permetrien personalitzar-lo.

---

## Exercici 5 (extra): Refactoritza aquesta pàgina

Aquesta pàgina funciona però té males pràctiques. Troba i corregeix els problemes:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .custom-box { 
      background-color: #3b82f6;
      padding: 1rem;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="custom-box">
      <p style="color: white; font-weight: bold;">Hola</p>
    </div>
    <div class="flex">
      <div style="margin-right: 8px;">A</div>
      <div style="margin-right: 8px;">B</div>
      <div style="margin-right: 8px;">C</div>
    </div>
  </div>
</body>
</html>
```

**Problemes a detectar:**
- CSS personalitzat que es podria fer amb Tailwind
- Estils inline enlloc de classes
- Margin manual enlloc de `space-x-`
- `max-width` i `margin: 0 auto` enlloc de `max-w-6xl mx-auto`
