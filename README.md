# Aprendre Tailwind CSS

Aquest projecte t'ajudarà a aprendre **Tailwind CSS** des de zero a través de 20 lliçons progressives. Està dissenyat per ser utilitzat amb **OpenCode**, l'assistent d'IA que et guiarà pas a pas.

## Requisits

- Conèixer HTML i CSS bàsic
- Tenir **OpenCode** instal·lat (`npm install -g opencode-ai`)
- Disposar d'una API key per al model d'IA (OpenCode Zen, DeepSeek, etc.)

## Configuració de les claus d'API

El projecte llegeix les claus d'API directament de fitxers dins la carpeta `.opencode/keys/`, gràcies a la funcionalitat `{file:...}` d'OpenCode.

1. Obre la carpeta del projecte a **Visual Studio Code**:
   ```bash
   code .
   ```

2. A `VS Code`, crea els fitxers de claus dins la carpeta `.opencode/keys/`:

   - **`.opencode/keys/opencode-key.txt`** — La teva clau d'OpenCode Zen
   - **`.opencode/keys/deepseek-key.txt`** — La teva clau de DeepSeek (opcional)

   Assegura't que cada fitxer contingui **només la clau** (sense cometes, sense espais en blanc, sense salt de línia al final).

   Pots obtenir una clau d'OpenCode Zen a [opencode.ai/zen](https://opencode.ai/zen) o una de DeepSeek a [platform.deepseek.com](https://platform.deepseek.com/).

   > **Important**: Aquesta carpeta `.opencode/keys/` estaficada a `.gitignore` per no pujar les claus al repositori.

## Com començar

1. Obre la carpeta del projecte a **Visual Studio Code** (si no ho has fet ja):
   ```bash
   code .
   ```

2. Obre el terminal integrat de VS Code amb `Ctrl + ñ` o `Ctrl + J` (o des del menú *Terminal > New Terminal*).

3. Assegura't que el terminal està al directori del projecte i executa:
   ```bash
   opencode
   ```

   OpenCode ja té accés a les claus d'API gràcies als fitxers de `.opencode/keys/`. No cal cap script ni variable d'entorn addicional.

Un cop iniciat, OpenCode carregarà automàticament l'agent **tailwind-tutor**, que és el teu tutor personal. Ell t'explicarà els conceptes, et proposarà exercicis i revisarà el teu codi.

Tria una lliçó per començar (recomanat: començar per la 01).

## Lliçons disponibles

| Lliçó | Tema |
|-------|------|
| 01 | Introducció a Tailwind |
| 02 | Tipografia |
| 03 | Colors i fons |
| 04 | Spacing (margin i padding) |
| 05 | Sizing (amplada i alçada) |
| 06 | Flexbox (contenidor) |
| 07 | Flexbox (elements) |
| 08 | Grid |
| 09 | Borders i ombres |
| 10 | Display |
| 11 | Responsive breakpoints |
| 12 | Responsive patterns |
| 13 | Estats (hover, focus, active) |
| 14 | Pseudo-classes i dark mode |
| 15 | Formularis |
| 16 | Animacions i transicions |
| 17 | Imatges |
| 18 | Components (navbar, cards, etc.) |
| 19 | Positioning |
| 20 | Bones pràctiques |

Cada lliçó conté:
- **`1_apunts.md`** — Teoria i conceptes
- **`2_exemples.html`** — Exemples pràctics
- **`3_exercicis.md`** — Exercicis per practicar

## Agents disponibles

El projecte inclou diversos agents dins OpenCode:

### Agent principal (per defecte)
- **`tailwind-tutor`** — El teu tutor personal. Et guia per les lliçons, explica conceptes, proposa exercicis i revisa les solucions. És l'agent que s'activa automàticament en obrir OpenCode.

### Subagents (@mention)
Pots esmentar aquests agents enmig de la conversa:
- **`@lesson-reader`** — Llegeix i resumeix el contingut de les lliçons
- **`@code-reviewer`** — Revisa el teu codi HTML/Tailwind i t'ofereix feedback
- **`@exercise-maker`** — Crea exercicis personalitzats si necessites més pràctica
- **`@git-pusher`** — T'ajuda a pujar les solucions al repositori Git

## Com funciona el flux d'aprenentatge

1. **Tria una lliçó** — El tutor et recomana per on començar
2. **Aprèn els conceptes** — El tutor llegeix els apunts i te'ls explica amb exemples
3. **Fes els exercicis** — Crea els fitxers HTML dins `solucions/{tema}/` (p. ex. `solucions/04-spacing/exercici1.html`)
4. **Rep feedback** — El tutor revisa el teu codi i et dona suggeriments per millorar
5. **Repeteix** — Quan dominis una lliçó, passa a la següent

## Estructura del projecte

```
lessons/              → Contingut de les lliçons (NO TOQUIS)
  XX-tema/
    1_apunts.md
    2_exemples.html
    3_exercicis.md

solucions/            → Aquí guardes les teves solucions
  XX-tema/
    exercici1.html
    exercici2.html

.opencode/
  agents/             → Configuració dels agents personalitzats
  keys/               → Les teves claus d'API (NO pujar a git)
  mcp/tailwind-validator/  → Eines de validació de Tailwind
```

## Regles importants

- **No modiquis** els fitxers dins `lessons/`
- **Guarda les solucions** sempre dins `solucions/{tema}/`
- **Prova el codi** al navegador per veure el resultat
- **Si t'encalles**, demana ajuda al tutor — ell et donarà pistes sense donar-te la solució

## Eines addicionals

El projecte inclou eines MCP que el tutor pot utilitzar:
- **Validació de classes** — Comprova si les classes Tailwind que has escrit són correctes
- **Descripció de classes** — Explica què fa una classe concreta de Tailwind
- **Captura de pantalla** — Pot obrir el teu HTML al navegador i mostrar-te com queda

## Consells

- Comença per la lliçó 01 si ets principiant
- Practica cada concepte abans de passar al següent
- Fes commit dels teus exercicis amb `@git-pusher` per portar un registre del teu progrés
- Pregunta qualsevol dubte al tutor en català

Bon aprenentatge!
