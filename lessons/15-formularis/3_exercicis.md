# Exercicis — Lliçó 15: Formularis

## Exercici 1: Formulari de registre

Crea un formulari amb:

- Camp "Nom" (text)
- Camp "Email" (email)
- Camp "Contrasenya" (password)
- Checkbox "Recorda'm"
- Botó "Registra't"

Cada camp amb el seu label i estil consistent.

---

## Exercici 2: Botons de ràdio

Crea un grup de 3 opcions amb `input type="radio"`:

- "Petit", "Mitjà", "Gran"
- Cada opció és un `label` amb `flex items-center space-x-2`
- El seleccionat ha de tenir `accent-blue-600`

---

## Exercici 3: Select personalitzat

Crea un `<select>` amb 5 opcions de país. Dona-li:

- `w-full`
- Border, padding, rounded
- Focus ring blau
- Fons blanc

---

## Exercici 4: Formulari de contacte complet

Crea un formulari de contacte amb:

- Nom
- Email
- Assumpte (select amb opcions)
- Missatge (textarea)
- Botó d'enviar

Tot dins d'una targeta `bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto`.

---

## Exercici 5 (extra): Formulari d'inici de sessió

Recrea aquest disseny:

```
┌─────────────────────────┐
│    Inicia sessió        │
│                         │
│  ┌──────────────────┐   │
│  │ Usuari            │   │
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │ Contrasenya       │   │
│  └──────────────────┘   │
│                         │
│  ☐ Recorda'm            │
│                         │
│  ┌──────────────────┐   │
│  │   Entra           │   │
│  └──────────────────┘   │
│                         │
│  Has oblidat la contrasenya? │
└─────────────────────────┘
```

Afegeix-hi:
- `disabled` al botó si els camps estan buits (simulat)
- `focus:ring-2` a tots els inputs
- Un enllaç "Has oblidat la contrasenya?" a sota
