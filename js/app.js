/* ============================================================
   app.js — arranque, router por hash, carga dinámica de datos,
   modo claro/oscuro. Debe cargarse ÚLTIMO.
   ============================================================ */
(function () {
  "use strict";

  var appEl = document.getElementById("app");

  // ---------------- Modo claro / oscuro ----------------
  function aplicarTema(t) {
    document.documentElement.setAttribute("data-tema", t);
    var b = document.getElementById("toggle-tema");
    if (b) b.textContent = (t === "oscuro") ? "☀️" : "🌙";
  }
  function initTema() {
    var guardado = window.Progreso.getTema();
    if (!guardado) {
      var prefiere = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      guardado = prefiere ? "oscuro" : "claro";
    }
    aplicarTema(guardado);
  }
  document.getElementById("toggle-tema").addEventListener("click", function () {
    var actual = document.documentElement.getAttribute("data-tema");
    var nuevo = (actual === "oscuro") ? "claro" : "oscuro";
    aplicarTema(nuevo); window.Progreso.setTema(nuevo);
  });

  // menú hamburguesa (móvil)
  var burger = document.getElementById("menu-burger");
  if (burger) burger.addEventListener("click", function () {
    document.querySelector(".top-nav").classList.toggle("abierto");
  });

  // ---------------- Carga dinámica de datos (sin fetch) ----------------
  // Inyecta un <script> por cada tema "listo". Funciona en file:// y en hosting.
  function cargarDatos(cb) {
    var temas = (window.REGISTRO && window.REGISTRO.temas) || [];
    var pendientes = temas.filter(function (t) { return t.estado === "listo" && t.archivo; });
    if (!pendientes.length) { cb(); return; }
    var restan = pendientes.length;
    function fin() { if (--restan <= 0) cb(); }
    pendientes.forEach(function (t) {
      var s = document.createElement("script");
      s.src = t.archivo;                 // ruta relativa (data/tema-XX.js)
      s.onload = fin;
      s.onerror = function () {
        console.warn("No se pudo cargar " + t.archivo + " (¿existe el archivo?)");
        fin();
      };
      document.body.appendChild(s);
    });
  }

  // ---------------- Router ----------------
  function parseHash() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");   // "tema/14.3/quiz"
    return h.split("/").filter(Boolean);
  }

  function marcarNav() {
    var h = location.hash || "#/";
    document.querySelectorAll(".top-nav .nav-link").forEach(function (a) {
      a.classList.toggle("activo", a.getAttribute("href") === h ||
        (h.indexOf("#" + a.getAttribute("href").slice(1)) === 0 && a.getAttribute("href") !== "#/"));
    });
  }

  function router() {
    // cerrar menú móvil
    var nav = document.querySelector(".top-nav.abierto"); if (nav) nav.classList.remove("abierto");
    // cerrar resultados de búsqueda
    if (window.Buscador && window.Buscador.cerrar) window.Buscador.cerrar();

    var p = parseHash();
    window.Comp.vaciar(appEl);
    window.scrollTo(0, 0);

    try {
      if (p.length === 0) {
        window.Menu.render(appEl);
      } else if (p[0] === "tema" && p[1]) {
        window.Tema.render(appEl, decodeURIComponent(p[1]), p[2] || "contenido");
      } else if (p[0] === "historiadores") {
        window.Historiadores.renderGlobal(appEl);
      } else if (p[0] === "mazo-mixto") {
        window.MazoMixto.render(appEl);
      } else if (p[0] === "comparar") {
        window.Comparacion.render(appEl, p[1] ? decodeURIComponent(p[1]) : null);
      } else {
        window.Menu.render(appEl);
      }
    } catch (e) {
      console.error(e);
      appEl.innerHTML = '<div class="panel-vista vacio">Ups, algo falló al mostrar esta vista.<br><small>' +
        window.Comp.esc(e.message) + '</small><br><br><a class="btn" href="#/">Volver al inicio</a></div>';
    }
    marcarNav();
  }

  window.navegar = function (hash) { location.hash = hash; };

  window.addEventListener("hashchange", router);

  // ---------------- Init ----------------
  initTema();
  // buscador global
  if (window.Buscador && window.Buscador.init) window.Buscador.init();

  appEl.innerHTML = '<div class="panel-vista vacio">Cargando temas…</div>';
  cargarDatos(function () {
    router();
  });

  // Si un tema se carga tarde y estamos justo en su vista, re-render
  document.addEventListener("tema-cargado", function (ev) {
    var p = parseHash();
    if (p[0] === "tema" && p[1] === ev.detail) router();
  });
})();
