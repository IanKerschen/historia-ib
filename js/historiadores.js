/* ============================================================
   historiadores.js — ficha de historiadores por tema y vista
   global con filtros por tema y por postura.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro;

  function card(hist, temaInfo) {
    var h = '<div class="hist-card">';
    h += '<h3>' + C.esc(hist.nombre) + (hist.regalo ? ' <span class="postura">de regalo</span>' : '') + '</h3>';
    h += '<div class="hc-meta">' +
         (hist.nacionalidad ? C.esc(hist.nacionalidad) : '') +
         (hist.obra ? ' · <i>' + C.esc(hist.obra) + '</i>' : '') + '</div>';
    if (temaInfo) h += '<div class="hist-tema-et">Tema: ' + C.esc(temaInfo) + '</div>';
    if (hist.postura) h += '<p><span class="postura">' + C.esc(hist.postura) + '</span></p>';
    if (hist.funcion) h += '<div class="hc-sec"><b>Función</b>' + C.esc(hist.funcion) + '</div>';
    if (hist.ideaCentral) h += '<div class="hc-sec"><b>Idea central</b>' + C.esc(hist.ideaCentral) + '</div>';
    if (hist.matiz) h += '<div class="hc-sec"><b>Matiz</b>' + C.esc(hist.matiz) + '</div>';
    if (hist.fraseLista) h += '<div class="caja frase"><span class="caja-et">FRASE LISTA</span> ' + C.esc(hist.fraseLista) + '</div>';
    if (hist.paraPreguntas && hist.paraPreguntas.length) {
      h += '<div class="hc-sec"><b>Para qué pregunta</b><ul>' +
           hist.paraPreguntas.map(function (p) { return '<li>' + C.esc(p) + '</li>'; }).join("") + '</ul></div>';
    }
    h += '</div>';
    return h;
  }

  // ---- Vista dentro de un tema ----
  function renderTema(panel, tema) {
    var hs = tema.historiadores || [];
    if (!hs.length) { panel.innerHTML = '<div class="vacio">Sin historiadores cargados.</div>'; return; }
    var h = '<div class="prosa"><h2>Historiadores · ' + C.esc(tema.titulo) + '</h2>' +
            '<p style="color:var(--texto-sec)">Los que ya están en el PDF (no se agregan nuevos). Tesis, postura y cómo usarlos en el ensayo.</p></div>';
    h += '<div class="hist-grid">' + hs.map(function (x) { return card(x, null); }).join("") + '</div>';
    panel.innerHTML = h;
  }

  // ---- Vista global (todos los temas cargados) ----
  function renderGlobal(cont) {
    var items = [];
    R.temasCargados().forEach(function (t) {
      (t.historiadores || []).forEach(function (hst) {
        items.push({ hist: hst, temaId: t.id, temaTit: t.id + " · " + t.titulo });
      });
    });

    var wrap = document.createElement("div");
    if (!items.length) {
      wrap.innerHTML = '<a class="volver" href="#/">← Volver</a><div class="panel-vista vacio">' +
        'Todavía no hay temas cargados con historiadores. Cargá al menos un tema.</div>';
      cont.appendChild(wrap); return;
    }

    // opciones de filtro
    var temas = {}; var posturas = {};
    items.forEach(function (it) {
      temas[it.temaId] = it.temaTit;
      if (it.hist.postura) posturas[it.hist.postura] = true;
    });

    var optTemas = '<option value="">Todos los temas</option>' +
      Object.keys(temas).map(function (k) { return '<option value="' + C.esc(k) + '">' + C.esc(temas[k]) + '</option>'; }).join("");
    var optPost = '<option value="">Todas las posturas</option>' +
      Object.keys(posturas).map(function (k) { return '<option value="' + C.esc(k) + '">' + C.esc(k) + '</option>'; }).join("");

    wrap.innerHTML =
      '<a class="volver" href="#/">← Volver</a>' +
      '<div class="encab-vista"><h1>Historiadores</h1>' +
      '<p class="sub">Todos los historiadores de los temas cargados, con filtros.</p></div>' +
      '<div class="hist-filtros">' +
      '<select id="f-tema">' + optTemas + '</select>' +
      '<select id="f-postura">' + optPost + '</select>' +
      '</div><div class="hist-grid" id="hist-grid"></div>';

    cont.appendChild(wrap);
    var grid = wrap.querySelector("#hist-grid");

    function pintar() {
      var ft = wrap.querySelector("#f-tema").value;
      var fp = wrap.querySelector("#f-postura").value;
      var fil = items.filter(function (it) {
        return (!ft || it.temaId === ft) && (!fp || it.hist.postura === fp);
      });
      grid.innerHTML = fil.length
        ? fil.map(function (it) { return card(it.hist, it.temaTit); }).join("")
        : '<div class="vacio">Nada con esos filtros.</div>';
    }
    wrap.querySelector("#f-tema").addEventListener("change", pintar);
    wrap.querySelector("#f-postura").addEventListener("change", pintar);
    pintar();
  }

  window.Historiadores = { renderTema: renderTema, renderGlobal: renderGlobal };
})();
