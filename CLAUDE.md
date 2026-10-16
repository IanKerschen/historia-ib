# CLAUDE.md — Web de estudio IB Historia HL

Web de estudio **local e interactiva** para Historia HL del IB (Historia de las Américas).
Público: un estudiante. Idioma: **español rioplatense informal**. Orientación: **examen** (frases listas para ensayo, no relleno académico).

El contenido sale **exclusivamente** de los PDFs de guías del usuario. **No se inventan datos ni historiadores.** Si algo falta o es ambiguo, se marca y se pregunta.

---

## Reglas técnicas (INVARIANTES — no romper)

1. **Funciona con doble clic en `index.html` (`file://`), sin servidor ni internet.**
2. **Solo rutas relativas.** Ningún `src`/`href` absoluto (`C:\...`, `file://...`, ni `/algo` desde raíz). Siempre `css/...`, `js/...`, `data/...`.
   Objetivo: la misma carpeta funciona igual con doble clic **y** subida tal cual a Netlify / Vercel / GitHub Pages, sin cambiar nada.
3. **Prohibido `fetch()` / `XMLHttpRequest`** para cargar archivos locales (falla en `file://`). Los datos se cargan como `.js` con `<script>`.
4. **HTML + CSS + JS vanilla.** Sin frameworks, sin build, sin CDNs, sin dependencias externas. Todo editable a mano.
5. **Sin recursos externos** (ni fuentes, ni imágenes, ni analytics de internet). Todo offline.
6. `localStorage` siempre con prefijo **`ibhist:`**.

---

## Cómo se cargan los datos

- `index.html` incluye con `<script>` solo los módulos de `js/` y `data/registro.js` + `data/comparaciones.js`.
- `js/app.js` lee `window.REGISTRO` y, por cada tema con `estado:"listo"`, **inyecta dinámicamente** un `<script src="data/tema-XX.js">`. Esto SÍ funciona en `file://` (a diferencia de `fetch`).
- Cada `data/tema-XX.js` llama a `window.registrarTema({...})`.

### Cómo sumar un tema nuevo (sin tocar el código de la app)
1. Crear `data/tema-XX.js` con `window.registrarTema({ ... })` (ver schema abajo).
2. En `data/registro.js`, cambiar ese tema de `estado:"pendiente"` a `estado:"listo"` y agregar `archivo:"data/tema-XX.js"`.
3. Listo. No se toca ningún `.js` de `js/` ni el `index.html`.

Los temas **pendientes** (sin PDF todavía) se listan en `registro.js` con `estado:"pendiente"` y se muestran como tarjetas "Pendiente".

---

## Schema de datos

### `data/registro.js`
```js
window.REGISTRO = {
  carpetas: [ { id, nombre, orden, icono? } , ... ],   // 6 carpetas
  temas:    [ { id, carpeta, titulo, estado, archivo? } , ... ]
  // estado: "listo" | "pendiente". archivo solo si "listo".
};
```

### `data/tema-XX.js` → `window.registrarTema({...})`
```js
{
  id, carpeta, titulo, subtitulo, periodo, estado:"listo",
  etiquetas: ["..."],                          // para buscador/filtros

  resumen: {                                   // = "hoja ultra-condensada" del PDF
    tesisMaestra: "…",
    historiadoresLinea: [ { nombre, linea } ],
    datosClave: [ { grupo, items:["…"] } ],    // p.ej. "Perón: 20 datos"
    comparacion: [ { eje, texto } ],           // p.ej. MELCO
    veredictos: [ { titulo, texto } ]
  },

  historiadores: [                             // 3–4 principales (+ "regalo" marcados)
    { nombre, nacionalidad, obra, funcion, ideaCentral, matiz,
      fraseLista, postura, paraPreguntas:[ "…" ], regalo:false }
  ],

  cronologia: [
    { anio, fecha, titulo, pais, descripcion,
      causas:["…"], consecuencias:["…"], historiador:"…" }
  ],

  contenido: {
    secciones: [
      { id, titulo,
        html: "…",                             // fiel al PDF (clases de caja/tabla/escalera)
        miniQuiz: [ <pregunta> ]               // mismo formato que quiz
      }
    ]
  },

  flashcards: [
    { id, frente, dorso, categoria }           // categoria: concepto|fecha|causa-consecuencia|historiador
  ],

  quiz: [ <pregunta> ],                        // 12–15

  planificador: {
    bancoPreguntas: [ { pregunta, frecuencia, plan } ],
    planes:         [ { titulo, tesis, pasos:["…"] } ],
    ensayosModelo:  [ { titulo, parrafos:[ { texto, nota } ] } ],
    guia: { tesis, argumentos:["…"], evidencia:["…"], historiografia:["…"], contraargumento:"…" }
  }
}
```

### `<pregunta>` (quiz y mini-quiz) — formato único
```js
{
  pregunta: "…",
  opciones: [ { texto, correcta:true|false, explicacion:"por qué bien/mal" } ],  // 4 opciones
  etiqueta: "concepto|fecha|…"   // opcional
}
```
**Reglas de quiz:** 4 opciones **parejas en largo y nivel de detalle** (que la correcta NO sea la más larga). Distractores **plausibles**. Cada opción con feedback que explique por qué está bien o mal.

### `data/comparaciones.js`
```js
window.COMPARACIONES = [
  { id, titulo, temas:["14.3"], columnas:["Perón","Vargas"],
    ejes: [ { eje, valores:["…","…"] } ] }
];
```

---

## Cajas de anotación (fieles a los PDFs)

Clases CSS (en `css/cajas.css`). Mismo código de color en claro y oscuro:

| Clase | Etiqueta | Color | Uso |
|---|---|---|---|
| `.caja.kiss` | KISS | amarillo | aclaración simple de un término |
| `.caja.frase` | FRASE LISTA | verde | oración para copiar casi textual al ensayo |
| `.caja.truco` | TRUCO | azul | técnica de examen / mnemotecnia |
| `.caja.historiador` | HISTORIADOR | violeta | cómo integrar un historiador |
| `.caja.trampa` | TRAMPA | rojo | error común que cuesta bandas |
| `.caja.clase` | DE CLASE | gris | notas del profe / clase |

Markup: `<div class="caja kiss"><span class="caja-et">KISS</span> … </div>`

Otros componentes: `.tabla-guia` (tablas), `.escalera` (lista ordenada de pasos), `.arte` (acción–reacción–efecto), `.badge` (etiquetas filtrables).

---

## Estructura de archivos

```
index.html
/css   estilos.css · cajas.css · responsive.css
/js    app.js · registro-api.js · progreso.js · componentes.js
       menu.js · tema.js · contenido.js · resumen.js · historiadores.js
       cronologia.js · flashcards.js · quiz.js · planificador.js
       buscador.js · comparacion.js · mazo-mixto.js
/data  registro.js · comparaciones.js · tema-14-3.js · (resto)
```

---

## Mapeo PDF → tema (referencia)

| PDF | Tema(s) |
|---|---|
| Peron_y_Vargas_… | 14.3 |
| 14 Revolución cubana y Castro… | 14.1, 14.2 |
| Uruguay_…14-4_14-5_14-6 | 14.4, 14.5, 14.6 |
| 14.7_Teologia_de_la_liberacion… | 14.7 |
| EEUU_1945-1980_…Tema15 | 15.1–15.8 (sin Canadá) |
| 17.2 Derechos civiles afroamericanos… | 17.2 (y bloque Paper 1) |
| 17.3_Movimientos_feministas… | 17.3 |
| 17.4 Movimiento hispanoamericano… | 17.4 |
| Paper3_17-5_… | 17.5 |
| Tema8_en_profundidad_Cuba_Vietnam | Paper 2 Tema 8 (Cuba Martí, Vietnam Ho Chi Minh) |
| Tema10_en_profundidad_Hitler_Castro | Paper 2 Tema 10 (Castro, Hitler) |
| (sin PDF) | 17.1 indígenas · Apartheid → **pendiente** |

**Canadá:** excluido. **17.1:** nota "¿Mapuches?" abierta. **17.2:** sirve para Paper 3 y Paper 1.

---

## Convenciones de código
- Nombres en español, `camelCase` para JS, `kebab-case` para archivos/CSS.
- Módulos JS: cada feature expone un objeto global (`window.Contenido`, `window.Quiz`, etc.) con una función `render(contenedor, ...)`. Sin `import`/`export` (no hay build).
- Escapar todo texto de usuario/datos antes de meterlo al DOM salvo el `html` de `contenido.secciones` (que es confiable, lo escribimos nosotros).
- Router por `location.hash` (`#/tema/14.3/contenido`, `#/historiadores`, etc.) para que ande en `file://`.
