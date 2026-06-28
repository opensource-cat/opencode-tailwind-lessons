import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const TAILWIND_COLORS = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime",
  "green", "emerald", "teal", "cyan", "sky",
  "blue", "indigo", "violet", "purple", "fuchsia",
  "pink", "rose",
];

const SPACING_SCALE = [
  "0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5",
  "4", "5", "6", "7", "8", "9", "10", "11", "12",
  "14", "16", "20", "24", "28", "32", "36", "40",
  "44", "48", "52", "56", "60", "64", "72", "80", "96",
];

const FONT_SIZES = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
const FONT_WEIGHTS = ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"];
const LETTER_SPACING = ["tighter", "tight", "normal", "wide", "wider", "widest"];
const LINE_HEIGHT = ["none", "tight", "snug", "normal", "relaxed", "loose"];
const OPACITY = ["0", "5", "10", "20", "25", "30", "40", "50", "60", "70", "75", "80", "90", "95", "100"];
const ROUNDED = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const SHADOW = ["sm", "md", "lg", "xl", "2xl", "inner", "none"];
const Z_INDEX = ["0", "10", "20", "30", "40", "50", "auto"];
const ORDER = [...Array.from({ length: 13 }, (_, i) => String(i)), "first", "last", "none"];
const DURATION = ["75", "100", "150", "200", "300", "500", "700", "1000"];
const EASE = ["linear", "in", "out", "in-out"];
const ANIMATION = ["none", "spin", "ping", "pulse", "bounce"];
const SCALE = ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150"];

const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];
const STATES = [
  "hover", "focus", "focus-within", "focus-visible", "active",
  "visited", "target", "first", "last", "only", "odd", "even",
  "first-of-type", "last-of-type", "only-of-type",
  "empty", "enabled", "disabled", "checked", "indeterminate",
  "required", "valid", "invalid", "in-range", "out-of-range",
  "placeholder-shown", "autofill", "read-only",
  "before", "after", "first-letter", "first-line", "marker",
  "selection", "file", "placeholder", "backdrop",
  "group-hover", "group-focus", "group-active",
  "peer-hover", "peer-focus", "peer-checked",
  "dark", "motion-safe", "motion-reduce",
  "print", "landscape", "portrait", "ltr", "rtl", "open",
];

const COMMON_CLASSES = {};
const raw = [
  "flex", "inline-flex", "grid", "inline-grid", "block", "inline-block", "inline", "hidden",
  "flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse",
  "flex-wrap", "flex-nowrap", "flex-wrap-reverse",
  "flex-1", "flex-auto", "flex-initial", "flex-none",
  "grow", "grow-0", "shrink", "shrink-0",
  "justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly",
  "items-start", "items-end", "items-center", "items-baseline", "items-stretch",
  "content-start", "content-end", "content-center", "content-between", "content-around", "content-evenly",
  "self-auto", "self-start", "self-end", "self-center", "self-stretch",
  "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end",
  "uppercase", "lowercase", "capitalize", "normal-case",
  "italic", "not-italic", "tabular-nums", "ordinal", "slashed-zero",
  "underline", "overline", "line-through", "no-underline",
  "truncate", "overflow-ellipsis", "text-clip",
  "antialiased", "subpixel-antialiased",
  "list-none", "list-disc", "list-decimal", "list-inside", "list-outside",
  "relative", "absolute", "fixed", "sticky", "static",
  "visible", "invisible", "collapse",
  "overflow-auto", "overflow-hidden", "overflow-visible", "overflow-scroll",
  "overflow-x-auto", "overflow-y-auto", "overflow-x-hidden", "overflow-y-hidden", "overflow-x-scroll", "overflow-y-scroll",
  "object-contain", "object-cover", "object-fill", "object-none", "object-scale-down",
  "w-full", "w-screen", "w-svw", "w-lvw", "w-dvw", "w-min", "w-max", "w-fit", "w-auto",
  "h-full", "h-screen", "h-svh", "h-lvh", "h-dvh", "h-min", "h-max", "h-fit", "h-auto",
  "min-w-0", "min-w-full", "min-w-min", "min-w-max", "min-w-fit",
  "min-h-0", "min-h-full", "min-h-screen", "min-h-min", "min-h-max", "min-h-fit",
  "max-w-0", "max-w-none", "max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl",
  "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-6xl", "max-w-7xl", "max-w-full",
  "max-w-min", "max-w-max", "max-w-fit", "max-w-prose",
  "max-w-screen-sm", "max-w-screen-md", "max-w-screen-lg", "max-w-screen-xl", "max-w-screen-2xl",
  "max-h-0", "max-h-none", "max-h-full", "max-h-screen", "max-h-min", "max-h-max", "max-h-fit",
  "border", "border-0", "border-2", "border-4", "border-8",
  "border-t", "border-b", "border-l", "border-r", "border-x", "border-y", "border-s", "border-e",
  "border-solid", "border-dashed", "border-dotted", "border-double", "border-hidden", "border-none",
  "border-collapse", "border-separate",
  "outline-none", "outline", "outline-dashed", "outline-dotted", "outline-double", "outline-hidden",
  "ring", "ring-0", "ring-1", "ring-2", "ring-4", "ring-8", "ring-inset",
  "ring-offset-0", "ring-offset-1", "ring-offset-2", "ring-offset-4", "ring-offset-8",
  "appearance-none",
  "cursor-auto", "cursor-default", "cursor-pointer", "cursor-wait", "cursor-text",
  "cursor-move", "cursor-help", "cursor-not-allowed", "cursor-none",
  "cursor-context-menu", "cursor-progress", "cursor-cell", "cursor-crosshair",
  "cursor-vertical-text", "cursor-alias", "cursor-copy", "cursor-no-drop",
  "cursor-grab", "cursor-grabbing", "cursor-all-scroll", "cursor-col-resize",
  "cursor-row-resize", "cursor-n-resize", "cursor-e-resize", "cursor-s-resize",
  "cursor-w-resize", "cursor-zoom-in", "cursor-zoom-out",
  "select-none", "select-text", "select-all", "select-auto",
  "resize-none", "resize", "resize-x", "resize-y",
  "pointer-events-none", "pointer-events-auto",
  "sr-only", "not-sr-only",
  "clear-left", "clear-right", "clear-both", "clear-none",
  "isolate", "isolation-auto",
  "box-border", "box-content",
  "table", "inline-table", "table-caption", "table-cell",
  "table-column", "table-column-group", "table-footer-group",
  "table-header-group", "table-row-group", "table-row",
  "flow-root", "contents",
  "aspect-auto", "aspect-square", "aspect-video",
  "columns-1", "columns-2", "columns-3", "columns-4", "columns-5",
  "columns-6", "columns-7", "columns-8", "columns-9", "columns-10",
  "columns-11", "columns-12", "columns-auto",
  "break-before-auto", "break-before-avoid", "break-before-all",
  "break-before-avoid-page", "break-before-page", "break-before-left", "break-before-right",
  "break-before-column",
  "break-after-auto", "break-after-avoid", "break-after-all",
  "break-after-avoid-page", "break-after-page", "break-after-left", "break-after-right",
  "break-after-column",
  "break-inside-auto", "break-inside-avoid",
  "break-inside-avoid-page", "break-inside-avoid-column",
  "box-decoration-clone", "box-decoration-slice",
  "touch-auto", "touch-none", "touch-pan-x", "touch-pan-y",
  "touch-pan-left", "touch-pan-right", "touch-pan-up", "touch-pan-down",
  "touch-pinch-zoom", "touch-manipulation",
  "will-change-auto", "will-change-scroll", "will-change-contents", "will-change-transform",
  "content-none",
  "bg-auto", "bg-cover", "bg-contain",
  "bg-bottom", "bg-center", "bg-left", "bg-left-bottom", "bg-left-top",
  "bg-right", "bg-right-bottom", "bg-right-top", "bg-top",
  "bg-fixed", "bg-local", "bg-scroll",
  "bg-repeat", "bg-no-repeat", "bg-repeat-x", "bg-repeat-y", "bg-repeat-round", "bg-repeat-space",
  "bg-none", "bg-gradient-to-t", "bg-gradient-to-tr", "bg-gradient-to-r",
  "bg-gradient-to-br", "bg-gradient-to-b", "bg-gradient-to-bl", "bg-gradient-to-l", "bg-gradient-to-tl",
  "mix-blend-normal", "mix-blend-multiply", "mix-blend-screen", "mix-blend-overlay",
  "mix-blend-darken", "mix-blend-lighten", "mix-blend-color-dodge", "mix-blend-color-burn",
  "mix-blend-hard-light", "mix-blend-soft-light", "mix-blend-difference", "mix-blend-exclusion",
  "mix-blend-hue", "mix-blend-saturation", "mix-blend-color", "mix-blend-luminosity",
  "mix-blend-plus-lighter",
  "bg-blend-normal", "bg-blend-multiply", "bg-blend-screen", "bg-blend-overlay",
  "bg-blend-darken", "bg-blend-lighten", "bg-blend-color-dodge", "bg-blend-color-burn",
  "bg-blend-hard-light", "bg-blend-soft-light", "bg-blend-difference", "bg-blend-exclusion",
  "bg-blend-hue", "bg-blend-saturation", "bg-blend-color", "bg-blend-luminosity",
  "object-bottom", "object-center", "object-left", "object-left-bottom", "object-left-top",
  "object-right", "object-right-bottom", "object-right-top", "object-top",
  "divide-x", "divide-x-0", "divide-x-2", "divide-x-4", "divide-x-8",
  "divide-y", "divide-y-0", "divide-y-2", "divide-y-4", "divide-y-8",
  "divide-x-reverse", "divide-y-reverse",
  "divide-solid", "divide-dashed", "divide-dotted", "divide-double", "divide-none",
  "space-x-reverse", "space-y-reverse",
  "transition", "transition-all", "transition-colors", "transition-opacity",
  "transition-shadow", "transition-transform", "transition-none",
  "origin-center", "origin-top", "origin-top-right", "origin-right", "origin-bottom-right",
  "origin-bottom", "origin-bottom-left", "origin-left", "origin-top-left",
  "rotate-0", "rotate-1", "rotate-2", "rotate-3", "rotate-6", "rotate-12", "rotate-45",
  "rotate-90", "rotate-180",
  "skew-x-0", "skew-x-1", "skew-x-2", "skew-x-3", "skew-x-6", "skew-x-12",
  "skew-y-0", "skew-y-1", "skew-y-2", "skew-y-3", "skew-y-6", "skew-y-12",
  "delay-0", "delay-75", "delay-100", "delay-150", "delay-200", "delay-300",
  "delay-500", "delay-700", "delay-1000",
  "repeat-0", "repeat-1", "repeat-infinite",
  "fill-none", "fill-current",
  "stroke-none", "stroke-current", "stroke-0", "stroke-1", "stroke-2",
  "snap-none", "snap-x", "snap-y", "snap-both",
  "snap-mandatory", "snap-proximity",
  "snap-start", "snap-end", "snap-center", "snap-align-none",
  "snap-normal", "snap-always",
  "scroll-auto", "scroll-smooth",
  "accent-auto", "accent-current",
  "caret-auto", "caret-current",
  "field-sizing-content", "field-sizing-fixed",
  "forced-color-adjust-auto", "forced-color-adjust-none",
  "overscroll-auto", "overscroll-contain", "overscroll-none",
  "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap",
  "break-normal", "break-words", "break-all", "break-keep",
  "hyphens-none", "hyphens-manual", "hyphens-auto",
  "decoration-auto", "decoration-from-font", "decoration-0", "decoration-1", "decoration-2", "decoration-4",
  "decoration-solid", "decoration-double", "decoration-dotted", "decoration-dashed", "decoration-wavy",
  "underline-offset-auto", "underline-offset-0", "underline-offset-1", "underline-offset-2", "underline-offset-4", "underline-offset-8",
  "diagonal-fractions", "stacked-fractions", "normal-nums",
  "ordinal", "slashed-zero", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums",
  "placeholder-opacity-0",
  "elevation-0", "elevation-1", "elevation-2", "elevation-3", "elevation-4", "elevation-5",
  "container",
];

raw.forEach(c => { COMMON_CLASSES[c] = true; });

const PATTERNS = [
  { test: c => /^text-(xs|sm|base|lg|xl|[2-9]xl)$/.test(c), desc: "Mida de font" },
  { test: c => /^text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de text" },
  { test: c => /^bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de fons" },
  { test: c => /^p-(\d+(\.\d)?|px)$/.test(c), desc: "Padding tots els costats" },
  { test: c => /^(pt|pr|pb|pl|px|py)-(\d+(\.\d)?|px)$/.test(c), desc: "Padding direccional" },
  { test: c => /^m-(\d+(\.\d)?|px|auto)$/.test(c), desc: "Margin tots els costats" },
  { test: c => /^(mt|mr|mb|ml|mx|my)-(\d+(\.\d)?|px|auto)$/.test(c), desc: "Margin direccional" },
  { test: c => /^w-(\d+(\.\d)?|px)$/.test(c) && !c.match(/^w-(full|screen|auto|min|max|fit)/), desc: "Amplada" },
  { test: c => /^h-(\d+(\.\d)?|px)$/.test(c) && !c.match(/^h-(full|screen|auto|min|max|fit)/), desc: "Alçada" },
  { test: c => /^w-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|5\/6|1\/12|5\/12|7\/12|11\/12)$/.test(c), desc: "Amplada fraccional" },
  { test: c => /^h-(1\/2|1\/3|2\/3|1\/4|2\/4|3\/4)$/.test(c), desc: "Alçada fraccional" },
  { test: c => /^gap-(\d+(\.\d)?|px)$/.test(c), desc: "Gap (grid/flex)" },
  { test: c => /^gap-x-(\d+(\.\d)?|px)$/.test(c), desc: "Gap horitzontal" },
  { test: c => /^gap-y-(\d+(\.\d)?|px)$/.test(c), desc: "Gap vertical" },
  { test: c => /^space-x-(\d+(\.\d)?|px)$/.test(c), desc: "Espai horitzontal entre fills" },
  { test: c => /^space-y-(\d+(\.\d)?|px)$/.test(c), desc: "Espai vertical entre fills" },
  { test: c => /^rounded-(none|sm|md|lg|xl|2xl|3xl|full)$/.test(c), desc: "Border-radius" },
  { test: c => /^rounded-(t|b|l|r|tl|tr|bl|br)-(none|sm|md|lg|xl|2xl|3xl|full)$/.test(c), desc: "Border-radius direccional" },
  { test: c => /^shadow-(sm|md|lg|xl|2xl|inner|none)$/.test(c), desc: "Ombra" },
  { test: c => /^border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de border" },
  { test: c => /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/.test(c), desc: "Gruix de font" },
  { test: c => /^tracking-(tighter|tight|normal|wide|wider|widest)$/.test(c), desc: "Espaiat entre lletres" },
  { test: c => /^leading-(none|tight|snug|normal|relaxed|loose)$/.test(c), desc: "Interlineat" },
  { test: c => /^leading-(3|4|5|6|7|8|9|10)$/.test(c), desc: "Interlineat numèric" },
  { test: c => /^opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/.test(c), desc: "Opacitat" },
  { test: c => /^z-(0|10|20|30|40|50|auto)$/.test(c), desc: "Índex Z" },
  { test: c => /^order-(0|1|2|3|4|5|6|7|8|9|10|11|12)$/.test(c), desc: "Ordre flex/grid" },
  { test: c => /^grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12|none|subgrid)$/.test(c), desc: "Columnes de grid" },
  { test: c => /^grid-rows-(1|2|3|4|5|6|none|subgrid)$/.test(c), desc: "Files de grid" },
  { test: c => /^col-span-(1|2|3|4|5|6|7|8|9|10|11|12|full)$/.test(c), desc: "Columnes que ocupa" },
  { test: c => /^row-span-(1|2|3|4|5|6|full)$/.test(c), desc: "Files que ocupa" },
  { test: c => /^col-start-(1|2|3|4|5|6|7|8|9|10|11|12|13|auto)$/.test(c), desc: "Inici de columna" },
  { test: c => /^row-start-(1|2|3|4|5|6|7|auto)$/.test(c), desc: "Inici de fila" },
  { test: c => /^top-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Posició superior" },
  { test: c => /^right-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Posició dreta" },
  { test: c => /^bottom-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Posició inferior" },
  { test: c => /^left-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Posició esquerra" },
  { test: c => /^inset-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Inset tots els costats" },
  { test: c => /^inset-x-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Inset horitzontal" },
  { test: c => /^inset-y-(\d+(\.\d)?|px|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|full)$/.test(c), desc: "Inset vertical" },
  { test: c => /^duration-(75|100|150|200|300|500|700|1000)$/.test(c), desc: "Durada de transició" },
  { test: c => /^ease-(linear|in|out|in-out)$/.test(c), desc: "Funció d'acceleració" },
  { test: c => /^animate-(none|spin|ping|pulse|bounce)$/.test(c), desc: "Animació" },
  { test: c => /^scale-(0|50|75|90|95|100|105|110|125|150)$/.test(c), desc: "Escala" },
  { test: c => /^scale-x-(0|50|75|90|95|100|105|110|125|150)$/.test(c), desc: "Escala horitzontal" },
  { test: c => /^scale-y-(0|50|75|90|95|100|105|110|125|150)$/.test(c), desc: "Escala vertical" },
  { test: c => /^translate-x-(\d+(\.\d)?|px|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4)$/.test(c), desc: "Translació horitzontal" },
  { test: c => /^translate-y-(\d+(\.\d)?|px|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4)$/.test(c), desc: "Translació vertical" },
  { test: c => /^rotate-(0|1|2|3|6|12|45|90|180)$/.test(c), desc: "Rotació" },
  { test: c => /^skew-x-(0|1|2|3|6|12)$/.test(c), desc: "Inclinació horitzontal" },
  { test: c => /^skew-y-(0|1|2|3|6|12)$/.test(c), desc: "Inclinació vertical" },
  { test: c => /^origin-(center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left)$/.test(c), desc: "Origen de transformació" },
  { test: c => /^divide-x-(0|2|4|8)$/.test(c), desc: "Divisor horitzontal" },
  { test: c => /^divide-y-(0|2|4|8)$/.test(c), desc: "Divisor vertical" },
  { test: c => /^(from|via|to)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de gradient" },
  { test: c => /^ring-(0|1|2|4|8)$/.test(c), desc: "Anell de focus" },
  { test: c => /^ring-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color d'anell" },
  { test: c => /^ring-offset-(0|1|2|4|8)$/.test(c), desc: "Offset d'anell" },
  { test: c => /^ring-offset-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color d'offset d'anell" },
  { test: c => /^outline-(0|1|2|4|8)$/.test(c), desc: "Contorn" },
  { test: c => /^decoration-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de decoració" },
  { test: c => /^decoration-(solid|double|dotted|dashed|wavy)$/.test(c), desc: "Estil de decoració" },
  { test: c => /^decoration-(auto|from-font|0|1|2|4)$/.test(c), desc: "Gruix de decoració" },
  { test: c => /^underline-offset-(auto|0|1|2|4|8)$/.test(c), desc: "Offset de subratllat" },
  { test: c => /^caret-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color del cursor" },
  { test: c => /^accent-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color d'accent" },
  { test: c => /^divide-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de divisor" },
  { test: c => /^placeholder-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de placeholder" },
  { test: c => /^border-x-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de border horitzontal" },
  { test: c => /^border-y-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(c), desc: "Color de border vertical" },
  { test: c => /^scroll-m-(\d+(\.\d)?|px|auto)$/.test(c), desc: "Scroll margin" },
  { test: c => /^scroll-p-(\d+(\.\d)?|px|auto)$/.test(c), desc: "Scroll padding" },
  { test: c => /^columns-(1|2|3|4|5|6|7|8|9|10|11|12|auto)$/.test(c), desc: "Nombre de columnes" },
  { test: c => /^drop-shadow-(sm|md|lg|xl|2xl|none)$/.test(c), desc: "Ombra de filtre" },
  { test: c => /^blur-(none|sm|md|lg|xl|2xl|3xl)$/.test(c), desc: "Desenfoc" },
  { test: c => /^brightness-(0|50|75|90|95|100|105|110|125|150|200)$/.test(c), desc: "Brillantor" },
  { test: c => /^contrast-(0|50|75|100|125|150|200)$/.test(c), desc: "Contrast" },
  { test: c => /^grayscale-(0|100)$/.test(c), desc: "Escala de grisos" },
  { test: c => /^hue-rotate-(0|15|30|60|90|180)$/.test(c), desc: "Rotació de to" },
  { test: c => /^invert-(0|100)$/.test(c), desc: "Inversió de colors" },
  { test: c => /^saturate-(0|50|100|150|200)$/.test(c), desc: "Saturació" },
  { test: c => /^sepia-(0|100)$/.test(c), desc: "Sépia" },
  { test: c => /^backdrop-blur-(none|sm|md|lg|xl|2xl|3xl)$/.test(c), desc: "Desenfoc de fons" },
  { test: c => /^backdrop-brightness-(0|50|75|90|95|100|105|110|125|150|200)$/.test(c), desc: "Brillantor de fons" },
  { test: c => /^backdrop-contrast-(0|50|75|100|125|150|200)$/.test(c), desc: "Contrast de fons" },
  { test: c => /^backdrop-grayscale-(0|50|100)$/.test(c), desc: "Escala de grisos de fons" },
  { test: c => /^backdrop-hue-rotate-(0|15|30|60|90|180)$/.test(c), desc: "Rotació de to de fons" },
  { test: c => /^backdrop-invert-(0|50|100)$/.test(c), desc: "Inversió de fons" },
  { test: c => /^backdrop-opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/.test(c), desc: "Opacitat de fons" },
  { test: c => /^backdrop-saturate-(0|50|100|150|200)$/.test(c), desc: "Saturació de fons" },
  { test: c => /^backdrop-sepia-(0|50|100)$/.test(c), desc: "Sépia de fons" },
  { test: c => /^delay-(0|75|100|150|200|300|500|700|1000)$/.test(c), desc: "Retard de transició" },
  { test: c => /^repeat-(0|1|infinite)$/.test(c), desc: "Repetició d'animació" },
  { test: c => /^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/.test(c), desc: "Direcció de gradient" },
  { test: c => /^select-(none|text|all|auto)$/.test(c), desc: "Selecció de text" },
  { test: c => /^resize-(none|x|y)$/.test(c), desc: "Redimensionament" },
  { test: c => /^snap-(x|y|both)$/.test(c), desc: "Snap scroll" },
  { test: c => /^snap-(mandatory|proximity)$/.test(c), desc: "Strictness de snap" },
  { test: c => /^snap-(start|end|center|align-none)$/.test(c), desc: "Alineació de snap" },
  { test: c => /^will-change-(auto|scroll|contents|transform)$/.test(c), desc: "Optimització de canvis" },
  { test: c => /^\[.*\]$/.test(c), desc: "Valor arbitrari" },
];

const COMMON_MISTAKES = {
  "font-bolt": "font-bold",
  "font-bld": "font-bold",
  "text-centre": "text-center",
  "aligh-center": "text-center",
  "aligh-left": "text-left",
  "aligh-right": "text-right",
  "bg-colour": "bg-{color}-{shade}",
  "text-colour": "text-{color}-{shade}",
  "txt": "text-{size}",
  "pd": "p-{size}",
  "margn": "m-{size}",
  "w-100": "w-full o w-96",
  "w-50": "w-1/2 o w-48",
  "heigh-full": "h-full",
  "h-100": "h-full o h-96",
  "boder": "border",
  "border-radus": "rounded",
  "border-radius": "rounded",
  "radus": "rounded-{size}",
  "flex-center": "flex items-center justify-center",
  "display-flex": "flex",
  "display-none": "hidden",
  "display-block": "block",
  "display-grid": "grid",
  "text-bold": "font-bold",
  "font-center": "text-center",
  "centered": "text-center items-center",
  "bg-color": "bg-{color}-{shade}",
  "text-color": "text-{color}-{shade}",
  "padding": "p-{size}",
  "margin": "m-{size}",
  "full-width": "w-full",
  "full-height": "h-full",
  "cursor-hand": "cursor-pointer",
  "text-decoration": "underline",
  "text-underline": "underline",
  "list-style": "list-none",
  "list-style-none": "list-none",
  "overflow": "overflow-hidden",
  "text-16": "text-base",
  "text-18": "text-lg",
  "text-20": "text-xl",
  "text-24": "text-2xl",
  "text-32": "text-3xl",
  "text-48": "text-4xl",
  "text-64": "text-5xl",
  "p-13": "p-12",
  "m-13": "m-12",
  "w-13": "w-12",
  "h-13": "h-12",
  "text-blue": "text-blue-500",
  "text-red": "text-red-500",
  "text-green": "text-green-500",
  "text-gray": "text-gray-500",
  "bg-blue": "bg-blue-500",
  "bg-red": "bg-red-500",
  "bg-green": "bg-green-500",
  "bg-gray": "bg-gray-500",
  "rounded-circle": "rounded-full",
  "circle": "rounded-full",
  "shadow-light": "shadow",
  "shadow-medium": "shadow-md",
  "shadow-large": "shadow-lg",
  "shadow-xlarge": "shadow-xl",
  "width-full": "w-full",
  "height-full": "h-full",
  "white-text": "text-white",
  "black-text": "text-black",
  "transition-fast": "transition duration-150",
  "transition-slow": "transition duration-700",
  "upper": "uppercase",
  "capitalise": "capitalize",
  "lower": "lowercase",
  "grid-3": "grid-cols-3",
  "grid-4": "grid-cols-4",
  "grid-gap": "gap-{size}",
  "flex-row-centred": "flex flex-row items-center justify-center",
  "flex-col-centred": "flex flex-col items-center justify-center",
  "p-15": "p-14 o p-16",
  "m-15": "m-14 o m-16",
  "w-15": "w-14 o w-16",
  "h-15": "h-14 o h-16",
};

function stripVariant(cls) {
  let variant = null;
  let base = cls;
  for (const bp of BREAKPOINTS) {
    if (base.startsWith(bp + ":")) {
      variant = bp;
      base = base.slice(bp.length + 1);
      break;
    }
  }
  for (const st of STATES) {
    if (base.startsWith(st + ":")) {
      variant = (variant ? variant + ":" : "") + st;
      base = base.slice(st.length + 1);
      break;
    }
  }
  while (true) {
    let found = false;
    for (const bp of BREAKPOINTS) {
      if (base.startsWith(bp + ":")) {
        variant = (variant ? variant + ":" : "") + bp;
        base = base.slice(bp.length + 1);
        found = true;
        break;
      }
    }
    if (!found) break;
  }
  while (true) {
    let found = false;
    for (const st of STATES) {
      if (base.startsWith(st + ":")) {
        variant = (variant ? variant + ":" : "") + st;
        base = base.slice(st.length + 1);
        found = true;
        break;
      }
    }
    if (!found) break;
  }
  return { variant, base };
}

function validateSingleClass(cls) {
  if (!cls || cls.trim() === "") return null;

  const { variant, base } = stripVariant(cls);

  if (COMMON_CLASSES[base]) {
    return { class: cls, valid: true, suggestion: null, description: "Classe vàlida de Tailwind CSS" };
  }

  for (const pattern of PATTERNS) {
    if (pattern.test(base)) {
      return { class: cls, valid: true, suggestion: null, description: pattern.desc + (variant ? ` (amb variant ${variant})` : "") };
    }
  }

  const normalized = base.toLowerCase().replace(/[_-]/g, "-");
  if (COMMON_MISTAKES[normalized]) {
    return {
      class: cls, valid: false,
      suggestion: variant ? `${variant}:${COMMON_MISTAKES[normalized]}` : COMMON_MISTAKES[normalized],
      description: "Possible error ortogràfic",
    };
  }

  if (normalized !== base && COMMON_CLASSES[normalized]) {
    return { class: cls, valid: false, suggestion: normalized, description: "Error de majúscules/minúscules" };
  }

  for (const [wrong, correct] of Object.entries(COMMON_MISTAKES)) {
    const sim = similarity(base.toLowerCase(), wrong);
    if (sim > 0.7) {
      return {
        class: cls, valid: false,
        suggestion: variant ? `${variant}:${correct}` : correct,
        description: `Potser volies dir "${wrong}"?`,
      };
    }
  }

  const arbitraryMatch = base.match(/^\[(.+)\]$/);
  if (arbitraryMatch) {
    return { class: cls, valid: true, suggestion: null, description: "Valor arbitrari de Tailwind" };
  }

  return { class: cls, valid: false, suggestion: null, description: "Classe no reconeguda a Tailwind CSS" };
}

function similarity(a, b) {
  if (a === b) return 1;
  const len = Math.max(a.length, b.length);
  if (len === 0) return 1;
  return 1 - levenshtein(a, b) / len;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function describeClass(cls) {
  const descriptions = {
    flex: "Activa el mode flexbox en un contenidor",
    "inline-flex": "Activa flexbox en línia",
    grid: "Activa el mode grid",
    "inline-grid": "Activa grid en línia",
    block: "Mostra l'element com a bloc",
    "inline-block": "Mostra l'element com a bloc en línia",
    inline: "Mostra l'element en línia",
    hidden: "Amaga l'element (display: none)",
    "flex-row": "Direcció horitzontal (per defecte)",
    "flex-col": "Direcció vertical",
    "flex-wrap": "Permet que els fills passin a la següent línia",
    "flex-nowrap": "Evita que els fills passin a la següent línia",
    "justify-center": "Centra els fills en l'eix principal",
    "justify-between": "Distribueix els fills amb espai entre ells",
    "justify-around": "Distribueix els fills amb espai al voltant",
    "justify-evenly": "Distribueix els fills amb espai uniforme",
    "items-center": "Centra els fills en l'eix creuat",
    "items-start": "Alinea els fills al principi de l'eix creuat",
    "items-end": "Alinea els fills al final de l'eix creuat",
    "flex-1": "El fill ocupa l'espai disponible (flex: 1 1 0%)",
    "flex-auto": "El fill ocupa l'espai segons el seu contingut (flex: 1 1 auto)",
    "flex-initial": "flex: 0 1 auto",
    "flex-none": "El fill no creix ni es redueix",
    "gap-4": "Espai d'1rem entre elements fill",
    "grid-cols-3": "Graella de 3 columnes",
    "col-span-2": "L'element ocupa 2 columnes",
    "text-center": "Text alineat al centre",
    "text-left": "Text alineat a l'esquerra",
    "text-right": "Text alineat a la dreta",
    "font-bold": "Text en negreta (font-weight: 700)",
    "font-semibold": "Text semi-negreta (font-weight: 600)",
    "font-medium": "Text amb pes mitjà (font-weight: 500)",
    uppercase: "Text en majúscules",
    lowercase: "Text en minúscules",
    capitalize: "Primera lletra de cada paraula en majúscula",
    italic: "Text en cursiva",
    underline: "Text subratllat",
    "line-through": "Text ratllat",
    "no-underline": "Sense decoració de text",
    "tracking-wide": "Espaiat entre lletres ampli",
    "tracking-wider": "Espaiat entre lletres molt ampli",
    "tracking-tight": "Espaiat entre lletres estret",
    "leading-relaxed": "Interlineat relaxat (1.625)",
    "leading-loose": "Interlineat molt ampli (2)",
    "leading-tight": "Interlineat estret (1.25)",
    "p-4": "Padding d'1rem a tots els costats",
    "p-2": "Padding de 0.5rem a tots els costats",
    "px-4": "Padding horitzontal d'1rem",
    "py-2": "Padding vertical de 0.5rem",
    "m-4": "Margin d'1rem a tots els costats",
    "mx-auto": "Margin horitzontal automàtic (centra el bloc)",
    "mt-4": "Margin superior d'1rem",
    "mb-4": "Margin inferior d'1rem",
    "w-full": "Amplada del 100% del contenidor",
    "w-screen": "Amplada de tota la pantalla",
    "w-1/2": "Amplada del 50%",
    "w-1/3": "Amplada del 33.33%",
    "h-full": "Alçada del 100%",
    "h-screen": "Alçada de tota la pantalla",
    "min-h-screen": "Alçada mínima de tota la pantalla",
    "max-w-md": "Amplada màxima mitjana (28rem / 448px)",
    "max-w-lg": "Amplada màxima gran (32rem / 512px)",
    "max-w-xl": "Amplada màxima extra gran (36rem / 576px)",
    rounded: "Cantonades arrodonides (0.25rem)",
    "rounded-lg": "Cantonades arrodonides grans (0.5rem)",
    "rounded-xl": "Cantonades arrodonides extra grans (0.75rem)",
    "rounded-2xl": "Cantonades arrodonides doble extra grans (1rem)",
    "rounded-full": "Cantonades completament arrodonides (cercle/píndola)",
    "rounded-md": "Cantonades arrodonides mitjanes (0.375rem)",
    shadow: "Ombra mitjana",
    "shadow-sm": "Ombra petita",
    "shadow-md": "Ombra mitjana-gran",
    "shadow-lg": "Ombra gran",
    "shadow-xl": "Ombra extra gran",
    "shadow-2xl": "Ombra doble extra gran",
    border: "Border d'1px sòlid",
    "border-2": "Border de 2px",
    "border-4": "Border de 4px",
    "border-t": "Border superior d'1px",
    "border-b": "Border inferior d'1px",
    relative: "Posicionament relatiu",
    absolute: "Posicionament absolut respecte al pare relatiu",
    fixed: "Posicionament fix respecte a la finestra",
    sticky: "Posicionament sticky (es queda fix en fer scroll)",
    "top-0": "Posicionat a la part superior",
    "right-0": "Posicionat a la dreta",
    "bottom-0": "Posicionat a la part inferior",
    "left-0": "Posicionat a l'esquerra",
    "inset-0": "Posicionat a tots els costats",
    "z-10": "Índex Z 10",
    "z-50": "Índex Z 50 (per sobre de la majoria d'elements)",
    "overflow-hidden": "Amaga el contingut que sobresurt",
    "overflow-auto": "Afegeix scroll si el contingut sobresurt",
    "overflow-scroll": "Sempre mostra scroll",
    "object-cover": "La imatge cobreix el contenidor mantenint proporcions",
    "object-contain": "La imatge cap dins el contenidor mantenint proporcions",
    "bg-cover": "La imatge de fons cobreix tot l'element",
    "bg-center": "Imatge de fons centrada",
    "hover:bg-blue-700": "En hover, canvia el fons a blau fosc",
    "hover:text-white": "En hover, canvia el text a blanc",
    "focus:outline-none": "En focus, elimina el contorn per defecte",
    "focus:ring-2": "En focus, mostra un anell de 2px",
    "transition-all": "Transició suau per a totes les propietats",
    transition: "Transició suau (per defecte 150ms)",
    "duration-300": "Durada de transició de 300ms",
    "ease-in-out": "Transició suau d'entrada i sortida",
    "ease-in": "Transició amb acceleració a l'entrada",
    "ease-out": "Transició amb desacceleració a la sortida",
    "animate-spin": "Animació de rotació contínua",
    "animate-pulse": "Animació de pols (opacitat)",
    "animate-bounce": "Animació de rebot",
    "animate-ping": "Animació de ping (efecte radar)",
    "hover:scale-105": "En hover, augmenta l'escala un 5%",
    "hover:-translate-y-1": "En hover, desplaça cap amunt 0.25rem",
    "sm:flex-row": "En pantalles ≥640px, direcció horitzontal",
    "md:flex-row": "En pantalles ≥768px, direcció horitzontal",
    "lg:flex-row": "En pantalles ≥1024px, direcció horitzontal",
    "dark:bg-gray-900": "En mode fosc, fons gris fosc",
    "sr-only": "Visible només per a lectors de pantalla (accessibilitat)",
    "not-sr-only": "Anul·la sr-only",
    container: "Contenidor centrat amb ample màxim per breakpoint",
    "space-x-4": "Espai d'1rem entre fills horitzontalment",
    "space-y-4": "Espai d'1rem entre fills verticalment",
    "divide-y": "Línia divisòria entre fills verticals",
    "divide-x": "Línia divisòria entre fills horitzontals",
    "order-first": "Ordena l'element al principi",
    "order-last": "Ordena l'element al final",
    "self-center": "Alinea l'element fill al centre en l'eix creuat",
    "self-start": "Alinea l'element fill al principi en l'eix creuat",
    "self-end": "Alinea l'element fill al final en l'eix creuat",
    "content-center": "Centra el contingut d'un contenidor flex/grid",
    grow: "L'element pot créixer per ocupar espai (flex-grow: 1)",
    shrink: "L'element pot reduir-se (flex-shrink: 1)",
    truncate: "Trunca el text amb punts suspensius (...)",
    "whitespace-nowrap": "Evita que el text salti de línia",
    "break-words": "Parteix les paraules llargues per evitar desbordament",
    "opacity-50": "50% d'opacitat",
    "opacity-75": "75% d'opacitat",
    "cursor-pointer": "Cursor de mà (indica que es pot fer clic)",
    "cursor-not-allowed": "Cursor prohibit",
    "select-none": "Evita que el text es pugui seleccionar",
    "pointer-events-none": "L'element no respon a events del ratolí",
    "list-none": "Sense estil de llista",
    "list-disc": "Llista amb punts",
    "list-decimal": "Llista numerada",
    "appearance-none": "Elimina l'aparença per defecte del navegador",
    "outline-none": "Elimina el contorn de focus",
    ring: "Afegeix un anell de focus de 3px",
    "ring-2": "Anell de focus de 2px",
    resize: "Permet redimensionar l'element",
    "resize-none": "Evita redimensionar l'element",
    "aspect-square": "Relació d'aspecte 1:1",
    "aspect-video": "Relació d'aspecte 16:9",
    "box-border": "box-sizing: border-box",
    "box-content": "box-sizing: content-box",
    visible: "Element visible",
    invisible: "Element invisible (ocupa espai però no es veu)",
    collapse: "Col·lapsa l'element (per a taules)",
  };

  const { base } = stripVariant(cls);

  if (descriptions[base]) {
    return { class: cls, description: descriptions[base] };
  }

  if (base.startsWith("text-") && FONT_SIZES.some(s => base === `text-${s}`)) {
    return { class: cls, description: `Mida de text: ${base.replace("text-", "")}` };
  }
  if (/^text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(base)) {
    return { class: cls, description: `Color de text: ${base}` };
  }
  if (/^bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?$/.test(base)) {
    return { class: cls, description: `Color de fons: ${base}` };
  }
  if (/^p-(\d+(\.\d)?|px)$/.test(base) && SPACING_SCALE.includes(base.slice(2))) {
    return { class: cls, description: `Padding de ${base.slice(2)} a tots els costats` };
  }
  if (/^m-(\d+(\.\d)?|px)$/.test(base) && SPACING_SCALE.includes(base.slice(2))) {
    return { class: cls, description: `Margin de ${base.slice(2)} a tots els costats` };
  }
  if (/^(mt|mr|mb|ml|mx|my)-(\d+(\.\d)?|px)$/.test(base)) {
    const dirs = { mt: "superior", mr: "dret", mb: "inferior", ml: "esquerre", mx: "horitzontal", my: "vertical" };
    return { class: cls, description: `Margin ${dirs[base.slice(0, 2)]} de ${base.slice(3)}` };
  }
  if (/^(pt|pr|pb|pl|px|py)-(\d+(\.\d)?|px)$/.test(base)) {
    const dirs = { pt: "superior", pr: "dret", pb: "inferior", pl: "esquerre", px: "horitzontal", py: "vertical" };
    return { class: cls, description: `Padding ${dirs[base.slice(0, 2)]} de ${base.slice(3)}` };
  }
  if (/^(w|h)-(\d+(\.\d)?|px)$/.test(base) && SPACING_SCALE.includes(base.slice(2))) {
    const type = base[0] === "w" ? "Amplada" : "Alçada";
    return { class: cls, description: `${type} de ${base.slice(2)}` };
  }

  const validated = validateSingleClass(cls);
  if (validated && validated.valid) {
    return { class: cls, description: validated.description };
  }

  return { class: cls, description: "Classe no reconeguda" };
}

const server = new Server(
  { name: "tailwind-validator", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "validate_tailwind_classes",
      description: "Valida una llista separada per espais de classes de Tailwind CSS i retorna quines són correctes, quines no, i suggeriments de correcció",
      inputSchema: {
        type: "object",
        properties: {
          classes: {
            type: "string",
            description: "Llista de classes de Tailwind separades per espais (ex: 'flex items-center p-4 font-bold text-blue-500')",
          },
        },
        required: ["classes"],
      },
    },
    {
      name: "describe_tailwind_class",
      description: "Explica què fa una classe de Tailwind CSS",
      inputSchema: {
        type: "object",
        properties: {
          class: {
            type: "string",
            description: "Una classe de Tailwind (ex: 'flex', 'grid-cols-3', 'hover:bg-blue-700')",
          },
        },
        required: ["class"],
      },
    },
  ],
}));

function formatValidationResults(results) {
  const valid = results.filter(r => r && r.valid);
  const invalid = results.filter(r => r && !r.valid);

  let text = "";
  if (valid.length > 0) {
    text += `**✅ Classes vàlides (${valid.length}):**\n`;
    valid.forEach(r => {
      text += `  - \`${r.class}\` → ${r.description}\n`;
    });
  }
  if (invalid.length > 0) {
    text += `\n**❌ Classes invàlides (${invalid.length}):**\n`;
    invalid.forEach(r => {
      text += `  - \`${r.class}\``;
      if (r.suggestion) {
        text += ` → ❓ Volies dir \`${r.suggestion}\`?`;
      } else {
        text += ` → ${r.description}`;
      }
      text += "\n";
    });
  }
  if (valid.length === 0 && invalid.length === 0) {
    text = "No s'han trobat classes per validar.";
  }
  return text;
}

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "validate_tailwind_classes") {
    const classesString = String(args.classes || "");
    const classList = classesString.split(/\s+/).filter(c => c.length > 0);
    const results = classList.map(validateSingleClass);
    return {
      content: [
        { type: "text", text: formatValidationResults(results) },
        { type: "text", text: JSON.stringify(results, null, 2) },
      ],
    };
  }

  if (name === "describe_tailwind_class") {
    const cls = String(args.class || "");
    const result = describeClass(cls);
    return {
      content: [
        { type: "text", text: `**Classe:** \`${result.class}\`\n**Descripció:** ${result.description}` },
        { type: "text", text: JSON.stringify(result, null, 2) },
      ],
    };
  }

  throw new Error(`Eina no reconeguda: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Error al servidor MCP:", err);
  process.exit(1);
});
