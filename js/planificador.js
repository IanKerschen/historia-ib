/* ============================================================
   planificador.js — dada una pregunta tipo Paper, guía para armar
   tesis, argumentos, evidencia, historiografía y contraargumento.
   Incluye banco de preguntas, planes, ensayos modelo y cronómetro.
   ============================================================ */
(function () {
  "use strict";
  var C = window.Comp;

  function renderTema(panel, tema) {
    var pl = tema.planificador || {};
    var banco = pl.bancoPreguntas || [];
    var planes = pl.planes || [];
    var ensayos = pl.ensayosModelo || [];

    var h = '<div class="prosa"><h2>Planificador de ensayo · ' + C.esc(tema.titulo) + '</h2>' +
            '<p style="color:var(--texto-sec)">Elegí una pregunta del banco y armá tu respuesta: tesis → argumentos → evidencia → historiografía → contraargumento. Con cronómetro opcional.</p></div>';

    // Cronómetro
    h += '<div class="crono-metro"><span class="tiempo" id="pl-tiempo">00:00</span>' +
         '<button class="btn sec" id="pl-start">▶ Iniciar</button>' +
         '<button class="btn sec" id="pl-reset">↺</button>' +
         '<span style="font-size:.82rem;opacity:.85">Paper 3: ~45 min por ensayo</span></div>';

    // Selector de pregunta
    if (banco.length) {
      h += '<label class="prosa"><b>Pregunta del banco</b></label><select class="plan-sel" id="pl-pregunta">';
      banco.forEach(function (b, k) {
        h += '<option value="' + k + '">' + C.esc(b.pregunta) + (b.frecuencia ? "  [" + C.esc(b.frecuencia) + "]" : "") + '</option>';
      });
      h += '</select>';
    }

    h += '<div id="pl-guia"></div>';

    // Ensayos modelo (colapsables)
    if (ensayos.length) {
      h += '<hr class="sr-separador"><div class="prosa"><h3>Ensayos modelo anotados</h3></div>';
      ensayos.forEach(function (e) {
        h += '<details class="colapsable"><summary>' + C.esc(e.titulo) + '</summary><div>';
        (e.parrafos || []).forEach(function (p) {
          h += '<p>' + C.esc(p.texto) + '</p>';
          if (p.nota) h += '<div class="caja truco"><span class="caja-et">TRUCO</span> ' + C.esc(p.nota) + '</div>';
        });
        h += '</div></details>';
      });
    }

    panel.innerHTML = h;

    // ---- Guía por pregunta ----
    function pintarGuia() {
      var guiaEl = panel.querySelector("#pl-guia");
      var guia = pl.guia || {};
      var plan = null;
      if (banco.length) {
        var k = parseInt(panel.querySelector("#pl-pregunta").value, 10);
        var b = banco[k];
        if (b && b.plan) plan = b.plan;
      }

      var g = '<div class="plan-guia" style="margin-top:14px">';
      g += bloque("1 · Tesis", guia.tesis ? [guia.tesis] : ["Respondé la pregunta en una frase, con veredicto (ej. «en gran medida, aunque…»)."]);
      g += bloque("2 · Argumentos (párrafos)", plan ? [plan] : (guia.argumentos || []), !!plan);
      g += bloque("3 · Evidencia (fecha/cifra)", guia.evidencia || []);
      g += bloque("4 · Historiografía", guia.historiografia || []);
      g += bloque("5 · Contraargumento", guia.contraargumento ? [guia.contraargumento] : []);
      g += '</div>';
      guiaEl.innerHTML = g;
    }

    function bloque(titulo, items, esPlan) {
      if (!items || !items.length) {
        items = ["(agregá esto en el PDF del tema)"];
      }
      var cuerpo;
      if (esPlan) {
        cuerpo = '<p>' + C.esc(items[0]) + '</p>';
      } else {
        cuerpo = '<ul>' + items.map(function (x) { return '<li>' + C.esc(x) + '</li>'; }).join("") + '</ul>';
      }
      return '<div class="plan-bloque"><h4>' + C.esc(titulo) + '</h4>' + cuerpo + '</div>';
    }

    if (banco.length) panel.querySelector("#pl-pregunta").addEventListener("change", pintarGuia);
    pintarGuia();

    // ---- Cronómetro ----
    var seg = 0, timer = null;
    var tEl = panel.querySelector("#pl-tiempo");
    var startBtn = panel.querySelector("#pl-start");
    startBtn.addEventListener("click", function () {
      if (timer) { clearInterval(timer); timer = null; startBtn.textContent = "▶ Reanudar"; }
      else { timer = setInterval(function () { seg++; tEl.textContent = C.reloj(seg); }, 1000); startBtn.textContent = "⏸ Pausar"; }
    });
    panel.querySelector("#pl-reset").addEventListener("click", function () {
      clearInterval(timer); timer = null; seg = 0; tEl.textContent = "00:00"; startBtn.textContent = "▶ Iniciar";
    });
  }

  window.Planificador = { renderTema: renderTema };
})();
