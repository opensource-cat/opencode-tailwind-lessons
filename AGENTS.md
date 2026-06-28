# Projecte Tailwind CSS — Aprenentatge

Aquest projecte conté 20 lliçons per aprendre Tailwind CSS des de zero. Les lliçons estan en català i estan pensades per a estudiants amb coneixements bàsics d'HTML i CSS.

## Estructura del projecte

```
lessons/           → Contingut de les lliçons (no modificar)
  XX-tema/
    1_apunts.md    → Teoria i conceptes
    2_exemples.html → Exemples pràctics
    3_exercicis.md  → Exercicis

solucions/         → Solucions dels estudiants (un subfolder per lliçó)
  XX-tema/
    README.md
    exercici1.html
    ...

.opencode/
  agents/          → Agents personalitzats
  mcp/
    tailwind-validator/ → MCP propi per validar classes Tailwind
```

## Agents disponibles

### Primaris (Tab per canviar)
- **build** — Agent per defecte, eines completes
- **tailwind-tutor** — Tutor que guia l'estudiant pas a pas

### Subagents (@mention)
- **@lesson-reader** — Llegeix i resumeix el contingut de les lliçons
- **@code-reviewer** — Revisa codi HTML/Tailwind i ofereix feedback
- **@exercise-maker** — Crea exercicis personalitzats addicionals
- **@git-pusher** — Ajuda a pujar les solucions al repositori Git

## MCP tools disponibles
- **validate_tailwind_classes** — Valida classes Tailwind (correctes, errors, suggeriments)
- **describe_tailwind_class** — Explica què fa una classe concreta
- **playwright** — Navegador headless per capturar pantalles de les solucions

## Regles del projecte
- Les lliçons a `lessons/` NO es modifiquen mai
- Les solucions es guarden sempre a `solucions/{tema}/`
- El tutor sempre comença amb els exercicis de `3_exercicis.md`
- Només es generen exercicis nous si l'estudiant ho demana o s'encalla
