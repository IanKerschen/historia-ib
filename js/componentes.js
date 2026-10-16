/* ============================================================
   componentes.js — helpers de render reutilizables
   ============================================================ */
(function () {
  "use strict";

  function esc(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Crea un elemento desde HTML (confiable: lo escribimos nosotros)
  function elDesdeHTML(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function vaciar(el) { while (el && el.firstChild) el.removeChild(el.firstChild); }

  // Etiquetas de color conocidas
  var ETIQUETAS = ["kiss", "frase", "truco", "historiador", "trampa", "clase"];
  var ETIQUETA_NOM = {
    kiss: "KISS", frase: "FRASE LISTA", truco: "TRUCO",
    historiador: "HISTORIADOR", trampa: "TRAMPA", clase: "DE CLASE"
  };

  function badge(tipo, texto, filtro) {
    return '<span class="badge ' + tipo + (filtro ? ' filtro' : '') +
           '" data-badge="' + tipo + '">' + esc(texto || ETIQUETA_NOM[tipo] || tipo) + '</span>';
  }

  // Barra de progreso simple
  function barra(pct) {
    pct = Math.max(0, Math.min(100, pct || 0));
    return '<div class="barra-prog"><i style="width:' + pct + '%"></i></div>';
  }

  var C = {
    esc: esc,
    el: elDesdeHTML,
    vaciar: vaciar,
    ETIQUETAS: ETIQUETAS,
    ETIQUETA_NOM: ETIQUETA_NOM,
    badge: badge,
    barra: barra,

    /** Texto plano (quita HTML) para buscador/snippets */
    aTexto: function (html) {
      var d = document.createElement("div");
      d.innerHTML = html || "";
      return (d.textContent || "").replace(/\s+/g, " ").trim();
    },

    /** Scroll al tope del área principal */
    irArriba: function () { window.scrollTo({ top: 0, behavior: "smooth" }); },

    /** Formatea mm:ss */
    reloj: function (seg) {
      var m = Math.floor(seg / 60), s = seg % 60;
      return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    }
  };

  window.Comp = C;
})();
