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
  commands/        → Comandes personalitzades
  keys/            → Claus d'API (NO pujar a git)
  mcp/
    telegram-notifier/ → MCP per enviar notificacions a Telegram
  skills/          → Skills personalitzats
```

## Agents disponibles

### Primaris (Tab per canviar)
- **build** — Agent integrat d'OpenCode, eines completes
- **tailwind-tutor** — Tutor que guia l'estudiant pas a pas

### Subagents (@mention)
- **@lesson-reader** — Llegeix i resumeix el contingut de les lliçons
- **@code-reviewer** — Revisa codi HTML/Tailwind i ofereix feedback
- **@git-pusher** — Ajuda a pujar les solucions al repositori Git

## MCP tools disponibles
- **notify_exercise_completed** — Envia una notificació a Telegram quan un estudiant resol un exercici

## Regles del projecte
- Les lliçons a `lessons/` NO es modifiquen mai
- Les solucions es guarden sempre a `solucions/{tema}/`
- El tutor sempre comença amb els exercicis de `3_exercicis.md`
