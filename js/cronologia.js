/* ============================================================
   cronologia.js — línea de tiempo con eventos clickeables.
   Cada evento abre causas, consecuencias e historiador asociado.
   Filtro por país cuando hay varios.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp;

  function renderTema(panel, tema) {
    var evs = (tema.cronologia || []).slice();
    if (!evs.length) { panel.innerHTML = '<div class="vacio">Sin cronología cargada.</div>'; return; }

    // ordenar por año
    evs.sort(function (a, b) { return (a.anio || 0) - (b.anio || 0); });

    var paises = {};
    evs.forEach(function (e) { if (e.pais) paises[e.pais] = true; });
    var listaPaises = Object.keys(paises);

    var h = '<div class="prosa"><h2>Cronología · ' + C.esc(tema.titulo) + '</h2>' +
            '<p style="color:var(--texto-sec)">Tocá un evento para ver causas, consecuencias e historiador asociado.</p></div>';

    if (listaPaises.length > 1) {
      h += '<div class="crono-filtros"><button class="badge tema filtro" data-pais="">Todos</button>' +
           listaPaises.map(function (p) { return '<button class="badge tema filtro off" data-pais="' + C.esc(p) + '">' + C.esc(p) + '</button>'; }).join("") +
           '</div>';
    }
    h += '<div class="crono" id="crono-lista"></div>';
    panel.innerHTML = h;

    var lista = panel.querySelector("#crono-lista");
    var filtroPais = "";

    function pintar() {
      lista.innerHTML = "";
      evs.filter(function (e) { return !filtroPais || e.pais === filtroPais; }).forEach(function (e, idx) {
        var ev = document.createElement("div");
        ev.className = "crono-ev";
        var tieneDet = (e.causas && e.causas.length) || (e.consecuencias && e.consecuencias.length) || e.historiador || e.descripcion;
        ev.innerHTML =
          '<span class="crono-punto"></span>' +
          '<div class="crono-cab" data-i="' + idx + '">' +
          '<span class="crono-fecha">' + C.esc(e.fecha || e.anio) + '</span>' +
          '<span class="crono-titulo">' + C.esc(e.titulo) + '</span>' +
          (e.pais ? '<span class="crono-pais">' + C.esc(e.pais) + '</span>' : '') +
          '</div>' +
          '<div class="crono-detalle oculto">' + detalle(e) + '</div>';
        lista.appendChild(ev);

        if (tieneDet) {
          var cab = ev.querySelector(".crono-cab");
          cab.style.cursor = "pointer";
          cab.addEventListener("click", function () {
            ev.querySelector(".crono-detalle").classList.toggle("oculto");
          });
        }
      });
    }

    function detalle(e) {
      var d = "";
      if (e.descripcion) d += '<p>' + C.esc(e.descripcion) + '</p>';
      if (e.causas && e.causas.length) d += '<h4>Causas</h4><ul>' + e.causas.map(li).join("") + '</ul>';
      if (e.consecuencias && e.consecuencias.length) d += '<h4>Consecuencias</h4><ul>' + e.consecuencias.map(li).join("") + '</ul>';
      if (e.historiador) d += '<h4>Historiador asociado</h4><p>' + C.esc(e.historiador) + '</p>';
      return d || '<p style="color:var(--texto-sec)">Sin detalle.</p>';
    }
    function li(x) { return '<li>' + C.esc(x) + '</li>'; }

    panel.querySelectorAll("[data-pais]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtroPais = b.getAttribute("data-pais");
        panel.querySelectorAll("[data-pais]").forEach(function (x) { x.classList.add("off"); });
        b.classList.remove("off");
        pintar();
      });
    });

    pintar();
  }

  window.Cronologia = { renderTema: renderTema };
})();
