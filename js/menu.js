/* ============================================================
   menu.js — pantalla de inicio: 6 carpetas con tarjetas
   (temas "listo" clickeables + "pendiente" marcados) y progreso.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro, P = window.Progreso;

  function tarjeta(t) {
    var listo = t.estado === "listo";
    var div = document.createElement("div");
    div.className = "tarjeta " + (listo ? "listo" : "pendiente");

    var html = '<span class="t-id">' + C.esc(t.id) + '</span>' +
               '<h3>' + C.esc(t.titulo) + '</h3>';

    if (listo) {
      var pr = P.resumenTema(t.id);
      html += '<div class="prog-mini">' +
              '<span>Leído <b>' + pr.leido + '%</b></span>' +
              '<span>Flash <b>' + pr.flash + '%</b></span>' +
              '<span>Quiz <b>' + (pr.quiz == null ? "–" : pr.quiz + "%") + '</b></span>' +
              '</div>' + C.barra(Math.round((pr.leido + pr.flash + (pr.quiz || 0)) / 3));
      div.addEventListener("click", function () { window.navegar("#/tema/" + encodeURIComponent(t.id)); });
    } else {
      html += '<p class="t-sub">Todavía sin material. Cuando sumes el PDF, aparece acá automáticamente.</p>';
    }
    div.innerHTML = html;
    return div;
  }

  function render(cont) {
    var wrap = document.createElement("div");

    // Hero
    wrap.appendChild(C.el(
      '<div class="hero">' +
      '<h1>Historia IB · SL/HL</h1>' +
      '<details class="hero-info" open>' +
      '<summary>Cómo está organizado</summary>' +
      '<p>Cada tema abre con un <b>Resumen</b> ultracondensado y se divide en pestañas: <b>Contenido</b> fiel al material, en secciones con mini-quiz; fichas de <b>Historiadores</b> con su tesis, postura y cómo usarlos en el ensayo; una <b>Cronología</b> clickeable con causas y consecuencias; <b>Flashcards</b> con repetición espaciada; un <b>Quiz</b> con feedback por opción; y un <b>Planificador</b> de ensayos con cronómetro. Arriba tenés buscador global, mazo mixto de flashcards y vistas de comparación entre temas.</p>' +
      '</details>' +
      '</div>'
    ));

    R.carpetas().forEach(function (carp) {
      var temas = R.temasDeCarpeta(carp.id);
      if (!temas.length) return;

      var sec = document.createElement("section");
      sec.className = "carpeta";
      sec.appendChild(C.el(
        '<div class="carpeta-cab">' +
        '<h2>' + C.esc(carp.nombre) + '</h2>' +
        '</div>'
      ));
      var grid = document.createElement("div");
      grid.className = "grid-temas";
      temas.forEach(function (t) { grid.appendChild(tarjeta(t)); });
      sec.appendChild(grid);
      wrap.appendChild(sec);
    });

    cont.appendChild(wrap);
  }

  window.Menu = { render: render };
})();
