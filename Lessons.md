# Lliçons per aprendre Tailwind CSS

Lliçons orientades per a que un estudiant amb coneixements bàsics de CSS i HTML sigui capaç de maquetar un portal web fent servir tailwind.

## 1. Què és Tailwind i per què servir-lo?
- Diferència entre frameworks CSS (Bootstrap, Bulma) i *utility-first* (Tailwind)
- Avantatges: no escriure noms de classes, consistència, facilitat per fer responsive
- Instal·lació via CDN per començar (`<script src="https://cdn.tailwindcss.com">`)
- Concepte: classes atòmiques enlloc de CSS personalitzat

## 2. Tipografia i text
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`... fins `text-9xl`
- `font-bold`, `font-semibold`, `font-light`
- `text-center`, `text-left`, `text-right`, `text-justify`
- `uppercase`, `lowercase`, `capitalize`
- `tracking-tight`, `tracking-wide` (letter-spacing)
- `leading-tight`, `leading-relaxed` (line-height)

## 3. Colors i fons
- `text-{color}-{llindar}`: `text-blue-500`, `text-gray-900`, `text-red-400`
- `bg-{color}-{llindar}`: `bg-white`, `bg-gray-100`, `bg-blue-600`
- Colors predefinits: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
- `opacity-{0..100}`

## 4. Spacing: margin i padding
- `m-{mida}`, `mt-`, `mr-`, `mb-`, `ml-`, `mx-`, `my-`
- `p-{mida}`, `pt-`, `pr-`, `pb-`, `pl-`, `px-`, `py-`
- Escala: `0`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`
- `space-x-{mida}`, `space-y-{mida}` per separar elements dins d'un contenidor

## 5. Width i height
- `w-{mida}` (mateixa escala que spacing), `w-full`, `w-screen`, `w-auto`, `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`
- `h-{mida}`, `h-full`, `h-screen`, `h-auto`
- `max-w-{mida}`: `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-4xl`
- `min-h-screen`

## 6. Flexbox (Part 1): contenidor
- `flex` activa flexbox
- `flex-row` (default), `flex-col`
- `flex-wrap`, `flex-nowrap`
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`
- `items-start`, `items-center`, `items-end`, `items-stretch`

## 7. Flexbox (Part 2): elements fills
- `flex-1`, `flex-auto`, `flex-initial`, `flex-none`
- `order-{1..12}` i `order-first`, `order-last`
- `self-start`, `self-center`, `self-end`, `self-stretch`
- `grow`, `grow-0`, `shrink`, `shrink-0`
- Exemple pràctic: layout de targetes amb `flex` i `flex-wrap`

## 8. Grid CSS
- `grid`, `grid-cols-{1..12}`, `grid-rows-{1..6}`
- `gap-{mida}`, `gap-x-{mida}`, `gap-y-{mida}`
- `col-span-{1..12}`, `row-span-{1..6}`
- `col-start-{1..12}`, `col-end-{1..12}`
- Exemple: layout de pàgina complet amb grid (header, nav, main, sidebar, footer)

## 9. Borders i border-radius
- `border`, `border-{0,2,4,8}`, `border-t`, `border-b`, `border-l`, `border-r`
- `border-{color}-{llindar}`
- `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- `rounded-t`, `rounded-b`, `rounded-l`, `rounded-r`
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`

## 10. Display i visibilitat
- `block`, `inline-block`, `inline`, `hidden`
- `visible`, `invisible`
- `overflow-hidden`, `overflow-auto`, `overflow-scroll`
- `z-{0..50}` per controlar superposició

## 11. Responsive Design (Part 1): breakpoints
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)
- Mobile-first: escriure el disseny base per mòbil i afegir variants per pantalles grans
- Exemple: `flex-col md:flex-row` (vertical a mòbil, horitzontal a partir de 768px)
- Exemple: `text-center sm:text-left`

## 12. Responsive Design (Part 2): patterns pràctics
- `w-full md:w-1/2 lg:w-1/3` (columnes que s'adapten)
- `hidden md:block` (menú hamburguesa a mòbil, menú horitzontal a escriptori)
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` (graella adaptativa)
- `text-sm md:text-base lg:text-lg` (tipografia responsive)

## 13. Estats: hover, focus, active i more
- `hover:{classe}`, `focus:{classe}`, `active:{classe}`
- `disabled:{classe}`
- `group` i `group-hover:{classe}` per estilar un fill quan el pare té hover
- Exemple: botó que canvia de color amb `hover:bg-blue-700`

## 14. Pseudo-classes i dark mode
- `first:`, `last:`, `odd:`, `even:`, `first-letter:`, `first-line:`
- `placeholder:{color}` per styling de placeholders
- `dark:{classe}` per mode fosc (requereix configuració)
- `focus:ring-2 focus:ring-blue-500` per accessibilitat en formularis

## 15. Formularis amb Tailwind
- Inputs: `border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`
- Labels: `block text-sm font-medium text-gray-700`
- Botons: `bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700`
- Checkbox i radio: `rounded`, `accent-{color}`
- `disabled:opacity-50 disabled:cursor-not-allowed`

## 16. Animacions i transicions
- `transition`, `transition-all`, `transition-colors`, `transition-transform`, `transition-opacity`
- `duration-{75,100,150,200,300,500,700,1000}`
- `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- `hover:scale-{110,105}` i `hover:-translate-y-1`
- `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`

## 17. Imatges i fons
- `object-cover`, `object-contain`, `object-fill`
- `object-{top,center,bottom,left,right}`
- `bg-cover`, `bg-contain`, `bg-center`, `bg-no-repeat`
- Exemple: imatge de fons a pantalla completa amb `bg-cover bg-center`

## 18. Components pràctics
- Navbar responsive: logo + enllaços (`hidden md:flex`) + botó hamburguesa (`md:hidden`)
- Hero section: títol gran + subtítol + botó CTA centrat
- Targeta (card): `rounded-lg shadow-md overflow-hidden` amb imatge, títol i text
- Footer: `bg-gray-900 text-white py-8` amb enllaços en columnes
- Galeria d'imatges: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- Taula responsive: `overflow-x-auto` + `divide-y divide-gray-200`
- Breadcrumbs: `flex items-center space-x-2 text-sm text-gray-500`

## 19. Positioning i valors arbitraris
- Posicionament: `relative`, `absolute`, `fixed`, `sticky`
- Controls: `top-{mida}`, `right-{mida}`, `bottom-{mida}`, `left-{mida}`
- Shorthand: `inset-0` (equival a top-0 + right-0 + bottom-0 + left-0), `inset-x-0`, `inset-y-0`
- Exemple modal: `fixed inset-0 z-50 flex items-center justify-center bg-black/50`
- Exemple badge: `absolute top-0 right-0 -translate-y-1/2 translate-x-1/2`
- Exemple header sticky: `sticky top-0 z-40 bg-white shadow`
- **Valors arbitraris `[]`**: `w-[500px]`, `top-[37px]`, `text-[#ff0000]`, `h-[calc(100vh-4rem)]`
- Quan usar valors arbitraris: mesures molt específiques que no es repeteixen. Si un valor es repeteix, millor configurar-lo a `tailwind.config.js`
- `z-{0..50}` per profunditat (ja vist a lliçó 10, aquí es posa en context)

## 20. Bones pràctiques
1. **Mobile-first:** dissenya primer per mòbil, després afegeix breakpoints
2. **Extreu components:** si repeteixes un patró > 2 cops, crea un component reutilitzable (amb React/Vue o amb `@apply`)
3. **No abusis de `@apply`:** l'avantatge de Tailwind és la llegibilitat al HTML; `@apply` ha de ser excepció, no regla
4. **Configuració (`tailwind.config.js`):** personalitza colors, fonts i breakpoints al teu projecte
5. **Valors arbitraris amb moderació:** usa les escales de Tailwind per defecte; recorre a `w-[123px]` només quan no hi ha alternativa i el valor no es repeteix
6. **Usa `space-x/y`** enlloc de margin a cada fill per separat
7. **Organitza les classes amb un ordre coherent:** layout → flex/grid → spacing → sizing → tipografia → colors → estats
8. **Aprofita `group-hover`** per evitar JavaScript en interaccions simples
9. **PurgeCSS va integrat:** els estils no usats s'eliminen automàticament en build de producció
10. **Mantén el CSS personalitzat al mínim:** si necessites estils nous, busca primer si Tailwind té una classe equivalent
