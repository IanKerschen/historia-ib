/* ============================================================
   registro.js — índice maestro de carpetas y temas.
   Para sumar un tema: creá data/tema-XX.js y, acá abajo,
   cambiá su estado a "listo" y agregale "archivo".
   ============================================================ */
window.REGISTRO = {
  carpetas: [
    { id: "p1",     orden: 1, icono: "🦅", nombre: "Paper 1 · Derechos y protestas" },
    { id: "p2-t8",  orden: 2, icono: "🚬", nombre: "Paper 2 · Tema 8: Movimientos independentistas" },
    { id: "p2-t10", orden: 3, icono: "🤚", nombre: "Paper 2 · Tema 10: Estados autoritarios" },
    { id: "p3-s14", orden: 4, icono: "🧉", nombre: "Paper 3 · Sección 14: América Latina (1945–1980)" },
    { id: "p3-s15", orden: 5, icono: "🦅", nombre: "Paper 3 · Sección 15: EE. UU. (1945–1980)" },
    { id: "p3-s17", orden: 6, icono: "✊", nombre: "Paper 3 · Sección 17: Derechos civiles y movimientos sociales" }
  ],

  temas: [
    // ---- Carpeta 1 · Paper 1 ----
    { id: "p1-dcafro",  carpeta: "p1", titulo: "Derechos civiles afroamericanos (EE. UU.)", estado: "listo", archivo: "data/tema-p1-dcafro.js" },
    { id: "p1-apartheid", carpeta: "p1", titulo: "Apartheid en Sudáfrica", estado: "listo", archivo: "data/tema-p1-apartheid.js" },

    // ---- Carpeta 2 · Paper 2 Tema 8 ----
    { id: "t8-cuba",    carpeta: "p2-t8", titulo: "Cuba: José Martí", estado: "listo", archivo: "data/tema-t8-cuba.js" },
    { id: "t8-vietnam", carpeta: "p2-t8", titulo: "Vietnam: Ho Chi Minh", estado: "listo", archivo: "data/tema-t8-vietnam.js" },

    // ---- Carpeta 3 · Paper 2 Tema 10 ----
    { id: "t10-castro", carpeta: "p2-t10", titulo: "Fidel Castro", estado: "listo", archivo: "data/tema-t10-castro.js" },
    { id: "t10-hitler", carpeta: "p2-t10", titulo: "Adolf Hitler", estado: "listo", archivo: "data/tema-t10-hitler.js" },

    // ---- Carpeta 4 · Paper 3 Sección 14 ----
    { id: "14.1", carpeta: "p3-s14", titulo: "Revolución cubana", estado: "listo", archivo: "data/tema-14-1.js" },
    { id: "14.2", carpeta: "p3-s14", titulo: "Gobierno de Fidel Castro", estado: "listo", archivo: "data/tema-14-2.js" },
    { id: "14.3", carpeta: "p3-s14", titulo: "Líderes populistas (Perón · Vargas)", estado: "listo", archivo: "data/tema-14-3.js" },
    { id: "14.4", carpeta: "p3-s14", titulo: "Crisis de la democracia (Uruguay)", estado: "listo", archivo: "data/tema-14-4.js" },
    { id: "14.5", carpeta: "p3-s14", titulo: "Dictadura militar (Uruguay)", estado: "listo", archivo: "data/tema-14-5.js" },
    { id: "14.6", carpeta: "p3-s14", titulo: "Movimientos guerrilleros (MLN-T / Tupamaros)", estado: "listo", archivo: "data/tema-14-6.js" },
    { id: "14.7", carpeta: "p3-s14", titulo: "Teología de la liberación", estado: "listo", archivo: "data/tema-14-7.js" },

    // ---- Carpeta 5 · Paper 3 Sección 15 (sin Canadá) ----
    { id: "15.1", carpeta: "p3-s15", titulo: "Harry Truman", estado: "listo", archivo: "data/tema-15-1.js" },
    { id: "15.2", carpeta: "p3-s15", titulo: "Dwight Eisenhower", estado: "listo", archivo: "data/tema-15-2.js" },
    { id: "15.3", carpeta: "p3-s15", titulo: "John F. Kennedy", estado: "listo", archivo: "data/tema-15-3.js" },
    { id: "15.4", carpeta: "p3-s15", titulo: "Lyndon B. Johnson", estado: "listo", archivo: "data/tema-15-4.js" },
    { id: "15.5", carpeta: "p3-s15", titulo: "Richard Nixon", estado: "listo", archivo: "data/tema-15-5.js" },
    { id: "15.6", carpeta: "p3-s15", titulo: "Gerald Ford", estado: "listo", archivo: "data/tema-15-6.js" },
    { id: "15.7", carpeta: "p3-s15", titulo: "Jimmy Carter", estado: "listo", archivo: "data/tema-15-7.js" },
    { id: "15.8", carpeta: "p3-s15", titulo: "Partidos Demócrata y Republicano", estado: "listo", archivo: "data/tema-15-8.js" },

    // ---- Carpeta 6 · Paper 3 Sección 17 ----
    { id: "17.1", carpeta: "p3-s17", titulo: "Pueblos indígenas y derechos civiles", estado: "listo", archivo: "data/tema-17-1.js" },
    { id: "17.2", carpeta: "p3-s17", titulo: "Derechos civiles afroamericanos (EE. UU.)", estado: "listo", archivo: "data/tema-17-2.js" },
    { id: "17.3", carpeta: "p3-s17", titulo: "Movimientos feministas", estado: "listo", archivo: "data/tema-17-3.js" },
    { id: "17.4", carpeta: "p3-s17", titulo: "Movimiento hispanoamericano (chicano)", estado: "listo", archivo: "data/tema-17-4.js" },
    { id: "17.5", carpeta: "p3-s17", titulo: "Movimientos juveniles y contracultura", estado: "listo", archivo: "data/tema-17-5.js" }
  ]
};
