/* ============================================================
   resumen.js — "hoja ultra-condensada" (leer el día antes).
   Tesis maestra, historiadores en una línea, datos clave,
   comparación y veredictos. Botón de imprimir.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp;

  function renderTema(panel, tema) {
    var r = tema.resumen;
    if (!r) { panel.innerHTML = '<div class="vacio">Sin resumen cargado.</div>'; return; }

    var h = '<div class="prosa">';
    h += '<div class="btn-row" style="margin-top:0;justify-content:flex-end">' +
         '<button class="btn sec" id="imprimir">🖨️ Imprimir</button></div>';
    h += '<h2>⚡ Resumen ultracondensado · ' + C.esc(tema.titulo) + '</h2>';

    if (r.tesisMaestra) {
      h += '<div class="caja frase"><span class="caja-et">FRASE LISTA</span> ' + C.esc(r.tesisMaestra) + '</div>';
    }

    if (r.historiadoresLinea && r.historiadoresLinea.length) {
      h += '<h3>Los historiadores en una línea</h3><div class="tabla-wrap"><table class="tabla-guia"><tbody>';
      r.historiadoresLinea.forEach(function (x) {
        h += '<tr><td>' + C.esc(x.nombre) + '</td><td>' + C.esc(x.linea) + '</td></tr>';
      });
      h += '</tbody></table></div>';
    }

    if (r.datosClave && r.datosClave.length) {
      h += '<h3>Datos clave</h3>';
      r.datosClave.forEach(function (g) {
        h += '<details class="colapsable" open><summary>' + C.esc(g.grupo) + '</summary><div><ul>';
        g.items.forEach(function (it) { h += '<li>' + C.esc(it) + '</li>'; });
        h += '</ul></div></details>';
      });
    }

    if (r.comparacion && r.comparacion.length) {
      h += '<h3>Comparación en pocas líneas</h3><div class="tabla-wrap"><table class="tabla-guia"><tbody>';
      r.comparacion.forEach(function (x) {
        h += '<tr><td>' + C.esc(x.eje) + '</td><td>' + C.esc(x.texto) + '</td></tr>';
      });
      h += '</tbody></table></div>';
    }

    if (r.veredictos && r.veredictos.length) {
      h += '<h3>Veredictos listos</h3>';
      r.veredictos.forEach(function (v) {
        h += '<div class="caja frase"><span class="caja-et">' + C.esc(v.titulo || "FRASE LISTA") + '</span> ' + C.esc(v.texto) + '</div>';
      });
    }

    h += '</div>';
    panel.innerHTML = h;
    var imp = panel.querySelector("#imprimir");
    if (imp) imp.addEventListener("click", function () { window.print(); });
  }

  window.Resumen = { renderTema: renderTema };
})();
