/* ============================================================
   progreso.js — persistencia en localStorage (prefijo ibhist:)
   Guarda: preferencia de tema, secciones leídas, cajas Leitner (SRS),
   mejores scores de quiz. Todo tolerante a fallos (modo privado, etc.)
   ============================================================ */
(function () {
  "use strict";
  var PFX = "ibhist:";

  function leer(clave, def) {
    try {
      var v = localStorage.getItem(PFX + clave);
      return v == null ? def : JSON.parse(v);
    } catch (e) { return def; }
  }
  function guardar(clave, val) {
    try { localStorage.setItem(PFX + clave, JSON.stringify(val)); } catch (e) {}
  }

  var P = {
    // ----- Preferencias -----
    getTema: function () { return leer("tema", null); },      // "claro" | "oscuro" | null
    setTema: function (t) { guardar("tema", t); },

    // ----- Contenido: secciones leídas por tema -----
    seccionesLeidas: function (temaId) { return leer("leido:" + temaId, []); },
    marcarLeida: function (temaId, secId) {
      var arr = P.seccionesLeidas(temaId);
      if (arr.indexOf(secId) === -1) { arr.push(secId); guardar("leido:" + temaId, arr); }
    },
    estaLeida: function (temaId, secId) {
      return P.seccionesLeidas(temaId).indexOf(secId) !== -1;
    },

    // ----- Quiz: mejor score por tema -----
    mejorScore: function (temaId) { return leer("quiz:" + temaId, null); }, // {aciertos, total, fecha}
    guardarScore: function (temaId, aciertos, total) {
      var prev = P.mejorScore(temaId);
      if (!prev || (aciertos / total) >= (prev.aciertos / prev.total)) {
        guardar("quiz:" + temaId, { aciertos: aciertos, total: total, fecha: Date.now() });
      }
    },

    // ----- Flashcards: estado Leitner (SRS) -----
    // Estructura: { cardId: { caja: 1..5, vista: timestamp } }
    srsTema: function (temaId) { return leer("srs:" + temaId, {}); },
    srsCard: function (temaId, cardId) {
      var s = P.srsTema(temaId);
      return s[cardId] || { caja: 1, vista: 0 };
    },
    srsActualizar: function (temaId, cardId, acierto) {
      var s = P.srsTema(temaId);
      var est = s[cardId] || { caja: 1, vista: 0 };
      if (acierto) est.caja = Math.min(5, est.caja + 1);
      else est.caja = 1;                  // falló → vuelve a la caja 1
      est.vista = Date.now();
      s[cardId] = est;
      guardar("srs:" + temaId, s);
      return est;
    },
    /** % de cartas en caja >=4 (consideradas "dominadas") */
    dominadas: function (temaId, totalCards) {
      var s = P.srsTema(temaId), n = 0;
      for (var k in s) { if (s[k].caja >= 4) n++; }
      return totalCards ? Math.round((n / totalCards) * 100) : 0;
    },

    // ----- Resumen de progreso de un tema (para el menú) -----
    resumenTema: function (temaId) {
      var datos = window.Registro && window.Registro.tema(temaId);
      var out = { leido: 0, flash: 0, quiz: null };
      if (datos) {
        var totSec = (datos.contenido && datos.contenido.secciones) ? datos.contenido.secciones.length : 0;
        if (totSec) out.leido = Math.round((P.seccionesLeidas(temaId).length / totSec) * 100);
        var totFc = (datos.flashcards || []).length;
        out.flash = P.dominadas(temaId, totFc);
      }
      var q = P.mejorScore(temaId);
      if (q) out.quiz = Math.round((q.aciertos / q.total) * 100);
      return out;
    }
  };

  window.Progreso = P;
})();
