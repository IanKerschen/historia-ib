/* ============================================================
   mazo-mixto.js — estudiar flashcards de varios temas/carpetas
   juntas. Elegís qué temas incluir y se arma un mazo combinado
   (reusa el motor de flashcards, con SRS por tema de origen).
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro;

  function render(cont) {
    var listos = R.registroTemas().filter(function (t) { return R.estaListo(t.id); });
    var wrap = document.createElement("div");
    wrap.innerHTML = '<a class="volver" href="#/">← Volver</a>' +
      '<div class="encab-vista"><h1>Mazo mixto</h1>' +
      '<p class="sub">Combiná flashcards de varios temas para estudiarlos juntos. El progreso se guarda por tema de origen.</p></div>';

    if (!listos.length) {
      wrap.innerHTML += '<div class="panel-vista vacio">Cargá al menos un tema para armar un mazo.</div>';
      cont.appendChild(wrap); return;
    }

    // selección de temas (checkboxes agrupados por carpeta)
    var selHtml = '<div class="panel-vista"><h3 class="prosa">Elegí los temas</h3><div id="mm-sel">';
    R.carpetas().forEach(function (carp) {
      var temas = R.temasDeCarpeta(carp.id).filter(function (t) { return R.estaListo(t.id); });
      if (!temas.length) return;
      selHtml += '<div style="margin:8px 0"><b>' + C.esc(carp.nombre) + '</b><div class="chips" style="margin-top:6px">';
      temas.forEach(function (t) {
        var n = (R.tema(t.id).flashcards || []).length;
        selHtml += '<label class="badge tema filtro" style="cursor:pointer">' +
          '<input type="checkbox" value="' + C.esc(t.id) + '" checked style="margin-right:4px">' +
          C.esc(t.id) + ' (' + n + ')</label>';
      });
      selHtml += '</div></div>';
    });
    selHtml += '</div><div class="btn-row"><button class="btn" id="mm-armar">Armar mazo ▶</button>' +
      '<span id="mm-conteo" style="color:var(--texto-sec);font-size:.85rem"></span></div></div>';

    wrap.innerHTML += selHtml + '<div id="mm-cont" style="margin-top:18px"></div>';
    cont.appendChild(wrap);

    function seleccionados() {
      return Array.prototype.slice.call(wrap.querySelectorAll("#mm-sel input:checked"))
        .map(function (i) { return i.value; });
    }
    function actualizarConteo() {
      var n = 0;
      seleccionados().forEach(function (id) { n += (R.tema(id).flashcards || []).length; });
      wrap.querySelector("#mm-conteo").textContent = n + " cartas seleccionadas";
    }
    wrap.querySelectorAll("#mm-sel input").forEach(function (i) {
      i.addEventListener("change", actualizarConteo);
    });
    actualizarConteo();

    wrap.querySelector("#mm-armar").addEventListener("click", function () {
      var ids = seleccionados();
      if (!ids.length) { alert("Elegí al menos un tema."); return; }
      var cartas = [];
      ids.forEach(function (id) {
        (R.tema(id).flashcards || []).forEach(function (f) {
          var copia = {};
          for (var k in f) copia[k] = f[k];
          copia._tema = id;                 // SRS se guarda bajo el tema de origen
          copia.id = id + ":" + f.id;       // id único en el mazo combinado
          // ojo: el SRS usa f.id original; reponer:
          copia.id = f.id;
          cartas.push(copia);
        });
      });
      var mmCont = wrap.querySelector("#mm-cont");
      mmCont.innerHTML = '<div class="panel-vista" id="mm-mazo"></div>';
      window.Flashcards.correr(mmCont.querySelector("#mm-mazo"), cartas, null);
      mmCont.scrollIntoView({ behavior: "smooth" });
    });
  }

  window.MazoMixto = { render: render };
})();
