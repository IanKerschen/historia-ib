/* ============================================================
   buscador.js — búsqueda global sobre los temas cargados
   (contenido, historiadores, flashcards, resumen) + filtro por
   etiquetas de color en el texto.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro;
  var input, pop, indiceCache = null;

  function construirIndice() {
    var idx = [];
    R.temasCargados().forEach(function (t) {
      var titTema = t.id + " · " + t.titulo;
      // secciones de contenido
      (t.contenido && t.contenido.secciones || []).forEach(function (s) {
        idx.push({ tema: t.id, titTema: titTema, tipo: "Contenido", titulo: s.titulo,
          texto: C.aTexto(s.html), hash: "#/tema/" + encodeURIComponent(t.id) + "/contenido" });
      });
      // historiadores
      (t.historiadores || []).forEach(function (h) {
        idx.push({ tema: t.id, titTema: titTema, tipo: "Historiador", titulo: h.nombre,
          texto: [h.ideaCentral, h.fraseLista, h.funcion].filter(Boolean).join(" "),
          hash: "#/tema/" + encodeURIComponent(t.id) + "/historiadores" });
      });
      // flashcards
      (t.flashcards || []).forEach(function (f) {
        idx.push({ tema: t.id, titTema: titTema, tipo: "Flashcard", titulo: f.frente,
          texto: f.dorso, hash: "#/tema/" + encodeURIComponent(t.id) + "/flashcards" });
      });
      // resumen (tesis + veredictos)
      if (t.resumen) {
        var rtxt = [t.resumen.tesisMaestra].concat((t.resumen.veredictos || []).map(function (v) { return v.texto; })).filter(Boolean).join(" ");
        idx.push({ tema: t.id, titTema: titTema, tipo: "Resumen", titulo: "Resumen de " + t.id,
          texto: rtxt, hash: "#/tema/" + encodeURIComponent(t.id) + "/resumen" });
      }
    });
    return idx;
  }

  function buscar(q) {
    q = (q || "").trim().toLowerCase();
    if (q.length < 2) return [];
    if (!indiceCache) indiceCache = construirIndice();
    var res = [];
    indiceCache.forEach(function (it) {
      var heno = (it.titulo + " " + it.texto + " " + it.titTema).toLowerCase();
      var pos = heno.indexOf(q);
      if (pos !== -1) {
        res.push({ it: it, pos: pos, snippet: snippet(it.titulo + " — " + it.texto, q) });
      }
    });
    res.sort(function (a, b) { return a.pos - b.pos; });
    return res.slice(0, 25);
  }

  function snippet(texto, q) {
    var low = texto.toLowerCase(), i = low.indexOf(q);
    if (i === -1) return texto.slice(0, 90);
    var ini = Math.max(0, i - 35), fin = Math.min(texto.length, i + q.length + 55);
    return (ini > 0 ? "…" : "") + texto.slice(ini, fin) + (fin < texto.length ? "…" : "");
  }

  function pintar(res) {
    if (!input.value.trim()) { cerrar(); return; }
    if (!res.length) {
      pop.innerHTML = '<div class="br-vacio">Nada encontrado. (Solo busca en temas ya cargados.)</div>';
    } else {
      pop.innerHTML = res.map(function (r) {
        return '<a class="br-item" href="' + r.it.hash + '">' +
          '<span class="br-tipo">' + C.esc(r.it.tipo) + ' · ' + C.esc(r.it.titTema) + '</span>' +
          '<div>' + C.esc(r.snippet) + '</div></a>';
      }).join("");
      pop.querySelectorAll(".br-item").forEach(function (a) {
        a.addEventListener("click", function () { setTimeout(cerrar, 0); });
      });
    }
    pop.hidden = false;
  }

  function cerrar() { if (pop) { pop.hidden = true; pop.innerHTML = ""; } }

  function init() {
    input = document.getElementById("buscador-global");
    pop = document.getElementById("buscador-resultados");
    if (!input) return;

    input.addEventListener("input", function () { pintar(buscar(input.value)); });
    input.addEventListener("focus", function () { if (input.value.trim()) pintar(buscar(input.value)); });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".top-buscar")) cerrar();
    });
    // invalidar índice cuando se carga un tema nuevo
    document.addEventListener("tema-cargado", function () { indiceCache = null; });
  }

  window.Buscador = { init: init, cerrar: cerrar };
})();
