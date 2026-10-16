/* ============================================================
   tema.js — layout de un tema: cabecera + barra de pestañas.
   El botón "Resumen" va destacado entre las primeras opciones.
   Cada pestaña delega en su módulo (Contenido, Quiz, etc.).
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, R = window.Registro;

  var PESTANAS = [
    { id: "resumen",      etq: "⚡ Resumen",     destacada: true, mod: "Resumen" },
    { id: "contenido",    etq: "Contenido",      mod: "Contenido" },
    { id: "historiadores",etq: "Historiadores",  mod: "Historiadores" },
    { id: "cronologia",   etq: "Cronología",     mod: "Cronologia" },
    { id: "flashcards",   etq: "Flashcards",     mod: "Flashcards" },
    { id: "quiz",         etq: "Quiz",           mod: "Quiz" },
    { id: "planificador", etq: "Planificador",   mod: "Planificador" }
  ];

  function render(cont, temaId, pestana) {
    var reg = R.registroDe(temaId);

    // ¿Tema pendiente o inexistente?
    if (!reg) {
      cont.innerHTML = '<a class="volver" href="#/">← Volver</a>' +
        '<div class="panel-vista vacio">No encuentro el tema «' + C.esc(temaId) + '».</div>';
      return;
    }
    if (reg.estado !== "listo") {
      cont.innerHTML = '<a class="volver" href="#/">← Volver</a>' +
        '<div class="panel-vista vacio"><h2>' + C.esc(reg.id) + ' · ' + C.esc(reg.titulo) + '</h2>' +
        '<p>Este tema está <b>pendiente</b>: todavía no cargamos su PDF.<br>' +
        'Cuando sumes <code>data/tema-…js</code> y lo marques «listo» en el registro, aparece acá.</p></div>';
      return;
    }

    var t = R.tema(temaId);
    if (!t) {
      // listo en el registro pero el .js aún no terminó de cargar (o falló)
      cont.innerHTML = '<a class="volver" href="#/">← Volver</a>' +
        '<div class="panel-vista vacio">Cargando «' + C.esc(reg.titulo) + '»…</div>';
      return;
    }

    // Cabecera
    var cab = '<a class="volver" href="#/">← Todos los temas</a>' +
      '<div class="tema-cab">' +
      '<span class="t-id">' + C.esc(t.id) + '</span>' +
      '<h1>' + C.esc(t.titulo) + '</h1>' +
      (t.periodo ? '<span class="periodo">' + C.esc(t.periodo) + '</span>' : '') +
      (t.etiquetas && t.etiquetas.length
        ? '<span class="etqs">' + t.etiquetas.map(function (e) { return C.badge("tema", e); }).join("") + '</span>'
        : '') +
      '</div>' +
      (t.subtitulo ? '<p class="sub" style="color:var(--texto-sec);margin:-4px 0 0">' + C.esc(t.subtitulo) + '</p>' : '');

    // Barra de pestañas
    var barra = '<div class="pestanas" role="tablist">';
    PESTANAS.forEach(function (p) {
      barra += '<button class="pestana' + (p.destacada ? ' destacada' : '') +
        (p.id === pestana ? ' activa' : '') + '" data-pest="' + p.id + '">' + p.etq + '</button>';
    });
    barra += '</div>';

    var panel = '<div class="panel-vista" id="panel-pestana"></div>';

    cont.innerHTML = cab + barra + panel;

    // Listeners de pestañas
    cont.querySelectorAll(".pestana").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.navegar("#/tema/" + encodeURIComponent(temaId) + "/" + btn.getAttribute("data-pest"));
      });
    });

    // Render de la pestaña activa
    var def = PESTANAS.filter(function (p) { return p.id === pestana; })[0] || PESTANAS[1];
    var panelEl = cont.querySelector("#panel-pestana");
    var modulo = window[def.mod];
    if (modulo && modulo.renderTema) {
      modulo.renderTema(panelEl, t);
    } else {
      panelEl.innerHTML = '<div class="vacio">Pestaña no disponible.</div>';
    }
  }

  window.Tema = { render: render, PESTANAS: PESTANAS };
})();
