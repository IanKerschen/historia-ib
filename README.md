# Historia IB · SL/HL — web de estudio

Web de estudio local e interactiva para Historia del IB (Historia de las Américas).
HTML + CSS + JS sin frameworks ni build. Funciona abriendo `index.html` con doble clic
(`file://`) y también subida tal cual a cualquier hosting estático (GitHub Pages, Netlify,
Vercel), sin cambiar nada — usa solo rutas relativas y no hace `fetch`.

## Cómo usarla
- Abrí `index.html`. Elegí un tema y recorré sus pestañas: Resumen, Contenido (con mini-quiz),
  Historiadores, Cronología, Flashcards (repetición espaciada), Quiz y Planificador de ensayos.
- Arriba: buscador global, mazo mixto de flashcards, comparaciones entre temas y modo oscuro.
- El progreso se guarda en el navegador (localStorage).

## Cómo sumar o editar un tema (sin tocar el código de la app)
1. Creá `data/tema-XX.js` con `window.registrarTema({ ... })` (mirá `data/tema-14-3.js` de molde).
2. En `data/registro.js`, poné ese tema en `estado: "listo"` y agregale `archivo: "data/tema-XX.js"`.
3. Listo: al recargar aparece solo. Convenciones y schema completos en `CLAUDE.md`.

## Estructura
```
index.html
robots.txt            (pide a los buscadores no indexar)
/css   estilos.css · cajas.css · responsive.css
/js    app.js · registro-api.js · progreso.js · componentes.js + vistas
/data  registro.js · comparaciones.js · tema-*.js  (un archivo por tema)
```

Los PDFs y el .docx originales no se versionan (ver `.gitignore`): su contenido ya está
transcripto dentro de `data/*.js`.
