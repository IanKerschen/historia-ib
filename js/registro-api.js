/* ============================================================
   registro-api.js — registro de temas y helpers de acceso
   No usa fetch: los temas se registran llamando a window.registrarTema
   desde cada data/tema-XX.js (cargados por <script> inyectado en app.js).
   ============================================================ */
(function () {
  "use strict";

  // Almacén de temas ya cargados (datos completos)
  window.TEMAS = window.TEMAS || {};

  /** Lo llama cada data/tema-XX.js */
  window.registrarTema = function (tema) {
    if (!tema || !tema.id) { console.warn("Tema sin id, se ignora", tema); return; }
    window.TEMAS[tema.id] = tema;
    document.dispatchEvent(new CustomEvent("tema-cargado", { detail: tema.id }));
  };

  // -------- Helpers de acceso --------
  var API = {
    carpetas: function () {
      var r = (window.REGISTRO && window.REGISTRO.carpetas) || [];
      return r.slice().sort(function (a, b) { return (a.orden || 0) - (b.orden || 0); });
    },
    carpeta: function (id) {
      return API.carpetas().filter(function (c) { return c.id === id; })[0] || null;
    },
    /** Entradas del registro (metadatos ligeros, incluye pendientes) */
    registroTemas: function () {
      return (window.REGISTRO && window.REGISTRO.temas) || [];
    },
    registroDe: function (id) {
      return API.registroTemas().filter(function (t) { return t.id === id; })[0] || null;
    },
    temasDeCarpeta: function (carpetaId) {
      return API.registroTemas().filter(function (t) { return t.carpeta === carpetaId; });
    },
    /** Datos completos de un tema (si fue cargado) */
    tema: function (id) { return window.TEMAS[id] || null; },
    /** Todos los temas con datos completos ya cargados */
    temasCargados: function () {
      return Object.keys(window.TEMAS).map(function (k) { return window.TEMAS[k]; });
    },
    estaListo: function (id) {
      var r = API.registroDe(id);
      return !!(r && r.estado === "listo");
    },
    tituloCompleto: function (id) {
      var r = API.registroDe(id);
      return r ? (r.id + " · " + r.titulo) : id;
    }
  };

  window.Registro = API;
})();
