/* ============================================================
   flashcards.js — repetición espaciada tipo Leitner (5 cajas).
   Orden de estudio: primero cajas más bajas (menos sabidas).
   Acierto → sube de caja; error → vuelve a la caja 1.
   Estado persistido en localStorage (por tema).
   Reutilizable por el Mazo mixto (varios temas).
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp, P = window.Progreso;

  var CAT_NOM = {
    concepto: "Concepto", fecha: "Fecha",
    "causa-consecuencia": "Causa / consecuencia", historiador: "Historiador–postura"
  };

  /**
   * Corre un mazo dentro de `cont`.
   * cartas: [{ id, frente, dorso, categoria, _tema }]  (_tema = id del tema dueño, para SRS)
   * Si no hay _tema, usa `temaIdPorDefecto`.
   */
  function correr(cont, cartas, temaIdPorDefecto) {
    if (!cartas || !cartas.length) {
      cont.innerHTML = '<div class="vacio">No hay flashcards cargadas.</div>';
      return;
    }

    function temaDe(card) { return card._tema || temaIdPorDefecto; }
    function cajaDe(card) { return P.srsCard(temaDe(card), card.id).caja; }
    function esDificil(card) { return cajaDe(card) <= 2; }

    var modo = "todas";          // "todas" | "dificiles"
    var cola = [];
    var i = 0;

    // Shell: barra de modo (persistente) + contenedor interno para las cartas
    cont.innerHTML = '<div class="fc-modo" id="fc-modo"></div><div id="fc-inner"></div>';
    var modoEl = cont.querySelector("#fc-modo");
    var inner = cont.querySelector("#fc-inner");

    function baseFiltrada() {
      return modo === "dificiles" ? cartas.filter(esDificil) : cartas.slice();
    }

    // Ordenar por caja Leitner ascendente (las menos sabidas primero), con algo de mezcla
    function ordenar(base) {
      return base.map(function (c) {
        return { c: c, caja: cajaDe(c), r: Math.random() };
      }).sort(function (a, b) {
        if (a.caja !== b.caja) return a.caja - b.caja;
        return a.r - b.r;
      }).map(function (x) { return x.c; });
    }

    function resumenCajas() {
      var cuenta = [0, 0, 0, 0, 0];
      cartas.forEach(function (c) { cuenta[cajaDe(c) - 1]++; });
      return cuenta.map(function (n, k) {
        return '<span class="fc-caja-chip">Caja ' + (k + 1) + ': <b>' + n + '</b></span>';
      }).join("");
    }

    function pintarModo() {
      var nDif = cartas.filter(esDificil).length;
      modoEl.innerHTML =
        '<button class="btn' + (modo === "todas" ? "" : " sec") + '" data-modo="todas">Todas (' + cartas.length + ')</button>' +
        '<button class="btn' + (modo === "dificiles" ? "" : " sec") + '" data-modo="dificiles">Solo difíciles · caja 1–2 (' + nDif + ')</button>';
      modoEl.querySelectorAll("[data-modo]").forEach(function (b) {
        b.addEventListener("click", function () {
          modo = b.getAttribute("data-modo");
          pintarModo();
          iniciar();
        });
      });
    }

    function iniciar() {
      var base = baseFiltrada();
      if (!base.length) {
        inner.innerHTML = '<div class="fc-fin"><h2>¡Nada en caja 1–2! 🎉</h2>' +
          '<p>No te quedan cartas difíciles en este mazo. Pasá a «Todas» para seguir repasando.</p>' +
          '<div class="fc-cajas" style="justify-content:center;margin:10px 0">' + resumenCajas() + '</div></div>';
        return;
      }
      cola = ordenar(base); i = 0; pintar();
    }

    function pintar() {
      if (i >= cola.length) { fin(); return; }
      var card = cola[i];
      var est = P.srsCard(temaDe(card), card.id);
      inner.innerHTML =
        '<div class="fc-barra"><span>Carta ' + (i + 1) + ' de ' + cola.length +
          (modo === "dificiles" ? ' · solo difíciles' : '') + '</span>' +
        '<span class="fc-cajas">' + resumenCajas() + '</span></div>' +
        '<div class="fc-escena"><div class="fc-carta" id="fc-carta">' +
        '<div class="fc-cara frente">' +
          '<span class="fc-cat">' + C.esc(CAT_NOM[card.categoria] || card.categoria || "") +
          ' · Caja ' + est.caja + '</span>' +
          '<div class="fc-txt">' + C.esc(card.frente) + '</div>' +
          '<span class="fc-hint">Tocá para ver la respuesta</span>' +
        '</div>' +
        '<div class="fc-cara dorso">' +
          '<span class="fc-cat">Respuesta</span>' +
          '<div class="fc-txt">' + C.esc(card.dorso) + '</div>' +
        '</div>' +
        '</div></div>' +
        '<div class="fc-controles" id="fc-ctrl-volteo">' +
        '<button class="btn sec" id="fc-voltear">Dar vuelta</button></div>';

      var carta = inner.querySelector("#fc-carta");
      function voltear() {
        carta.classList.toggle("volteada");
        if (carta.classList.contains("volteada")) mostrarCalificar();
      }
      carta.addEventListener("click", voltear);
      inner.querySelector("#fc-voltear").addEventListener("click", voltear);

      function mostrarCalificar() {
        inner.querySelector("#fc-ctrl-volteo").innerHTML =
          '<button class="btn sec" id="fc-mal">✘ No la sabía</button>' +
          '<button class="btn" id="fc-bien">✔ La sabía</button>';
        inner.querySelector("#fc-bien").addEventListener("click", function () { calificar(true); });
        inner.querySelector("#fc-mal").addEventListener("click", function () { calificar(false); });
      }

      function calificar(ok) {
        P.srsActualizar(temaDe(card), card.id, ok);
        i++;
        pintarModo();     // actualiza el conteo de "difíciles"
        pintar();
      }
    }

    function fin() {
      var dom = cartas.filter(function (c) { return cajaDe(c) >= 4; }).length;
      var etqRonda = modo === "dificiles" ? "Ronda de difíciles terminada ✅" : "Ronda terminada ✅";
      inner.innerHTML =
        '<div class="fc-fin"><h2>' + etqRonda + '</h2>' +
        '<p>Dominadas (caja 4–5): <b>' + dom + ' / ' + cartas.length + '</b></p>' +
        '<div class="fc-cajas" style="justify-content:center;margin:10px 0">' + resumenCajas() + '</div>' +
        '<div class="btn-row" style="justify-content:center">' +
        '<button class="btn" id="fc-otra">Otra ronda</button></div>' +
        '<p style="color:var(--texto-sec);font-size:.82rem;margin-top:14px">Repetición espaciada: las que fallás vuelven a la caja 1; las que acertás suben. En «Solo difíciles» repasás únicamente las de caja 1–2.</p>' +
        '</div>';
      inner.querySelector("#fc-otra").addEventListener("click", function () { iniciar(); });
    }

    pintarModo();
    iniciar();
  }

  function renderTema(panel, tema) {
    var wrap = document.createElement("div");
    wrap.innerHTML = '<div class="prosa"><h2>Flashcards · ' + C.esc(tema.titulo) + '</h2>' +
      '<p style="color:var(--texto-sec)">Repetición espaciada (cajas Leitner). Conceptos, fechas, causas/consecuencias e historiador–postura.</p></div>' +
      '<div id="fc-cont"></div>';
    panel.appendChild(wrap);
    correr(wrap.querySelector("#fc-cont"), tema.flashcards || [], tema.id);
  }

  window.Flashcards = { renderTema: renderTema, correr: correr, CAT_NOM: CAT_NOM };
})();
