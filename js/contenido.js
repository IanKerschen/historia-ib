/* ============================================================
   contenido.js — PDF fiel dividido en secciones navegables.
   Índice lateral + una sección por vez + mini-quiz al final.
   Marca secciones leídas (localStorage) al llegar al final / aprobar quiz.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, P = window.Progreso;

  function renderTema(panel, tema) {
    var secs = (tema.contenido && tema.contenido.secciones) || [];
    if (!secs.length) {
      panel.innerHTML = '<div class="vacio">Este tema todavía no tiene contenido cargado.</div>';
      return;
    }

    var actual = 0;
    panel.innerHTML =
      '<div class="cont-layout">' +
      '<nav class="cont-indice"><ol id="cont-idx"></ol></nav>' +
      '<div class="cont-cuerpo" id="cont-cuerpo"></div>' +
      '</div>';

    var idxEl = panel.querySelector("#cont-idx");
    var cuerpoEl = panel.querySelector("#cont-cuerpo");

    function pintarIndice() {
      idxEl.innerHTML = "";
      secs.forEach(function (s, k) {
        var leida = P.estaLeida(tema.id, s.id);
        var li = document.createElement("li");
        li.innerHTML = '<a href="javascript:void 0" class="' +
          (k === actual ? "activo " : "") + (leida ? "leida" : "") + '">' + C.esc(s.titulo) + '</a>';
        li.querySelector("a").addEventListener("click", function () { ir(k); });
        idxEl.appendChild(li);
      });
    }

    function pintarSeccion() {
      var s = secs[actual];
      var h = '<h2 class="sec-titulo">' + C.esc(s.titulo) + '</h2>' +
              '<div class="prosa">' + (s.html || "") + '</div>';

      // Mini-quiz al final de la sección
      if (s.miniQuiz && s.miniQuiz.length) {
        h += '<div class="mini-quiz-wrap"><h3>✅ Mini-quiz de la sección</h3>' +
             '<div id="mini-quiz"></div></div>';
      }

      // Navegación anterior / siguiente
      h += '<div class="cont-nav">' +
           '<button class="btn sec" id="sec-ant"' + (actual === 0 ? " disabled" : "") + '>← Anterior</button>' +
           '<button class="btn" id="sec-sig">' +
             (actual + 1 < secs.length ? 'Siguiente →' : '✓ Terminar tema') + '</button>' +
           '</div>';

      cuerpoEl.innerHTML = h;

      // activar colapsables ya vienen por <details>; nada extra.

      if (s.miniQuiz && s.miniQuiz.length) {
        window.Quiz.correr(cuerpoEl.querySelector("#mini-quiz"), s.miniQuiz, {
          onFin: function (a, t) { if (a === t) P.marcarLeida(tema.id, s.id), pintarIndice(); }
        });
      }

      cuerpoEl.querySelector("#sec-ant").addEventListener("click", function () {
        if (actual > 0) ir(actual - 1);
      });
      cuerpoEl.querySelector("#sec-sig").addEventListener("click", function () {
        // marcar leída al avanzar
        P.marcarLeida(tema.id, s.id);
        if (actual + 1 < secs.length) ir(actual + 1);
        else { pintarIndice(); C.irArriba(); fin(); }
      });
    }

    function fin() {
      cuerpoEl.innerHTML =
        '<div class="vacio"><h2>¡Terminaste el contenido de ' + C.esc(tema.id) + '! 🎉</h2>' +
        '<p>Ahora clavá el <b>Quiz</b> y las <b>Flashcards</b> para fijarlo.</p>' +
        '<div class="btn-row" style="justify-content:center">' +
        '<button class="btn" id="ir-quiz">Ir al Quiz</button>' +
        '<button class="btn sec" id="ir-flash">Flashcards</button>' +
        '<button class="btn sec" id="rever">Releer desde el inicio</button></div></div>';
      cuerpoEl.querySelector("#ir-quiz").addEventListener("click", function () {
        window.navegar("#/tema/" + encodeURIComponent(tema.id) + "/quiz");
      });
      cuerpoEl.querySelector("#ir-flash").addEventListener("click", function () {
        window.navegar("#/tema/" + encodeURIComponent(tema.id) + "/flashcards");
      });
      cuerpoEl.querySelector("#rever").addEventListener("click", function () { ir(0); });
    }

    function ir(k) {
      actual = k;
      pintarIndice();
      pintarSeccion();
      C.irArriba();
    }

    pintarIndice();
    pintarSeccion();
  }

  window.Contenido = { renderTema: renderTema };
})();
