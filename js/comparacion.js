/* ============================================================
   comparacion.js — vista de comparación entre temas/figuras,
   eje por eje. Definiciones en data/comparaciones.js.
   Solo muestra comparaciones cuyos temas estén cargados.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro;

  function disponibles() {
    var defs = window.COMPARACIONES || [];
    return defs.filter(function (d) {
      return (d.temas || []).every(function (id) { return R.estaListo(id); });
    });
  }

  function render(cont, id) {
    var defs = disponibles();
    var wrap = document.createElement("div");
    wrap.innerHTML = '<a class="volver" href="#/">← Volver</a>' +
      '<div class="encab-vista"><h1>Comparar temas</h1>' +
      '<p class="sub">Comparaciones eje por eje entre figuras y procesos.</p></div>';

    if (!defs.length) {
      wrap.innerHTML += '<div class="panel-vista vacio">Todavía no hay comparaciones disponibles. ' +
        'Aparecen cuando están cargados todos los temas que involucran.</div>';
      cont.appendChild(wrap); return;
    }

    // selector
    var actual = id && defs.filter(function (d) { return d.id === id; })[0] ? id : defs[0].id;
    var sel = '<select class="plan-sel comp-sel" id="comp-sel">' +
      defs.map(function (d) { return '<option value="' + C.esc(d.id) + '"' + (d.id === actual ? " selected" : "") + '>' + C.esc(d.titulo) + '</option>'; }).join("") +
      '</select>';
    wrap.innerHTML += sel + '<div id="comp-tabla"></div>';
    cont.appendChild(wrap);

    function pintar(cid) {
      var d = defs.filter(function (x) { return x.id === cid; })[0];
      var tEl = wrap.querySelector("#comp-tabla");
      if (!d) { tEl.innerHTML = ""; return; }
      var h = '<div class="tabla-wrap"><table class="tabla-guia comp-tabla"><thead><tr><th>Eje</th>' +
        d.columnas.map(function (c) { return '<th>' + C.esc(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
      d.ejes.forEach(function (e) {
        h += '<tr><td>' + C.esc(e.eje) + '</td>' +
          e.valores.map(function (v) { return '<td>' + C.esc(v) + '</td>'; }).join("") + '</tr>';
      });
      h += '</tbody></table></div>';
      // enlaces a los temas involucrados
      h += '<div class="btn-row">' + d.temas.map(function (id) {
        return '<a class="btn sec" href="#/tema/' + encodeURIComponent(id) + '">Ver ' + C.esc(R.tituloCompleto(id)) + '</a>';
      }).join("") + '</div>';
      tEl.innerHTML = h;
    }

    wrap.querySelector("#comp-sel").addEventListener("change", function () {
      var v = this.value;
      pintar(v);
      history.replaceState(null, "", "#/comparar/" + encodeURIComponent(v));
    });
    pintar(actual);
  }

  window.Comparacion = { render: render };
})();
