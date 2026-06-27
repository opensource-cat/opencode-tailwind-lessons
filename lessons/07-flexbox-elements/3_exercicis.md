# Exercicis — Lliçó 7: Flexbox (Part 2)

## Exercici 1: Tres columnes iguals

Crea tres divs dins d'un `flex`. Fes que tots tres ocupin exactament el mateix ample, independentment del seu contingut.

---

## Exercici 2: Sidebar + contingut

Recrea aquest layout:

```
┌──────┬──────────────────────────────┐
│      │                              │
│  w-64│  flex-1                      │
│      │                              │
│      │                              │
└──────┴──────────────────────────────┘
```

La sidebar té `flex-none` (no s'encongeix). El contingut té `flex-1` (ocupa la resta).

---

## Exercici 3: Ordre canviat

Tres quadres (blau, vermell, verd). Al HTML estan en ordre: blau → vermell → verd. Visualment han de mostrar-se: vermell → verd → blau.

---

## Exercici 4: Targetes d'alçada igual

Crea 3 targetes amb contingut de diferent longitud. Fes que totes tinguin la mateixa alçada gràcies a `items-stretch`.

Cada targeta: `flex flex-col` amb un `mt-auto` al botó perquè quedi sempre a baix.

---

## Exercici 5 (extra): Llista d'icones

Crea una fila amb 4 elements. Cada element té una icona (posa un emoji) i text al costat.

- La icona ha d'estar centrada verticalment (`self-center`)
- El text ha d'ocupar l'espai sobrant (`flex-1`)
- Si no hi caben els 4, que facin wrap
