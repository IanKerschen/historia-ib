/* ============================================================
   quiz.js — motor de opción múltiple con feedback por opción.
   Reutilizado por la pestaña Quiz y por los mini-quizzes de Contenido.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp;
  var LETRAS = ["A", "B", "C", "D", "E", "F"];

  /**
   * Corre un quiz dentro de `cont`.
   * preguntas: [{pregunta, opciones:[{texto,correcta,explicacion}], etiqueta}]
   * opts: { titulo, onFin(aciertos,total), compacto }
   */
  function correr(cont, preguntas, opts) {
    opts = opts || {};
    if (!preguntas || !preguntas.length) {
      cont.innerHTML = '<div class="vacio">No hay preguntas cargadas para este tema.</div>';
      return;
    }
    var i = 0, aciertos = 0, respondida = false;

    function pintar() {
      respondida = false;
      var q = preguntas[i];
      var h = '';
      if (opts.titulo && i === 0) h += '';
      h += '<div class="quiz-prog">Pregunta ' + (i + 1) + ' de ' + preguntas.length +
           (q.etiqueta ? ' · <span class="hist-tema-et">' + C.esc(q.etiqueta) + '</span>' : '') + '</div>';
      h += '<div class="quiz-pregunta">' + C.esc(q.pregunta) + '</div>';
      h += '<div class="quiz-opciones">';
      q.opciones.forEach(function (op, k) {
        h += '<button class="quiz-op" data-k="' + k + '">' +
             '<span class="letra">' + LETRAS[k] + '</span>' +
             '<span class="op-txt">' + C.esc(op.texto) + '</span></button>' +
             '<div class="quiz-fb oculto" data-fb="' + k + '"></div>';
      });
      h += '</div>';
      h += '<div class="btn-row"><button class="btn oculto" id="q-siguiente">' +
           (i + 1 < preguntas.length ? 'Siguiente →' : 'Ver resultado') + '</button></div>';
      cont.innerHTML = h;

      cont.querySelectorAll(".quiz-op").forEach(function (btn) {
        btn.addEventListener("click", function () { responder(parseInt(btn.getAttribute("data-k"), 10)); });
      });
      var sig = cont.querySelector("#q-siguiente");
      sig.addEventListener("click", function () {
        if (i + 1 < preguntas.length) { i++; pintar(); C.irArriba(); }
        else resultado();
      });
    }

    function responder(k) {
      if (respondida) return;
      respondida = true;
      var q = preguntas[i];
      var elegida = q.opciones[k];
      if (elegida.correcta) aciertos++;

      cont.querySelectorAll(".quiz-op").forEach(function (btn) {
        var kk = parseInt(btn.getAttribute("data-k"), 10);
        var op = q.opciones[kk];
        btn.classList.add("bloq");
        if (op.correcta) btn.classList.add("correcta");
        else if (kk === k) btn.classList.add("incorrecta");
        // mostrar feedback de cada opción
        var fb = cont.querySelector('[data-fb="' + kk + '"]');
        if (fb && op.explicacion) {
          fb.textContent = (op.correcta ? "✔ " : "✘ ") + op.explicacion;
          fb.classList.remove("oculto");
          fb.classList.add(op.correcta ? "ok" : "no");
        }
      });
      cont.querySelector("#q-siguiente").classList.remove("oculto");
    }

    function resultado() {
      var pct = Math.round((aciertos / preguntas.length) * 100);
      var msg = pct >= 80 ? "¡Banda alta! 🔥" : pct >= 60 ? "Bien, pero afiná." : "A repasar y volver.";
      cont.innerHTML =
        '<div class="quiz-resultado">' +
        '<div class="quiz-score">' + aciertos + '/' + preguntas.length + '</div>' +
        '<p><b>' + pct + '%</b> · ' + msg + '</p>' +
        '<div class="btn-row" style="justify-content:center">' +
        '<button class="btn" id="q-reintentar">Reintentar</button></div></div>';
      cont.querySelector("#q-reintentar").addEventListener("click", function () {
        i = 0; aciertos = 0; pintar();
      });
      if (opts.onFin) opts.onFin(aciertos, preguntas.length);
    }

    pintar();
  }

  function renderTema(panel, tema) {
    var wrap = document.createElement("div");
    wrap.innerHTML = '<div class="prosa"><h2>Quiz · ' + C.esc(tema.titulo) + '</h2>' +
      '<p style="color:var(--texto-sec)">Opción múltiple con explicación de por qué cada alternativa está bien o mal. Se guarda tu mejor resultado.</p></div>' +
      '<div id="quiz-cont"></div>';
    panel.appendChild(wrap);
    correr(wrap.querySelector("#quiz-cont"), tema.quiz, {
      onFin: function (a, t) { window.Progreso.guardarScore(tema.id, a, t); }
    });
  }

  window.Quiz = { correr: correr, renderTema: renderTema };
})();
