/* ============================================================
   comparaciones.js — vistas de comparación entre temas/figuras.
   Solo se muestran si TODOS sus temas están "listo".
   Para sumar comparaciones, agregá objetos a este array.
   ============================================================ */
window.COMPARACIONES = [
  {
    id: "peron-vargas",
    titulo: "Perón vs. Vargas (14.3)",
    temas: ["14.3"],
    columnas: ["Perón (Argentina)", "Vargas (Brasil)"],
    ejes: [
      { eje: "Origen",         valores: ["Militar de carrera, clase media baja, sin base política propia hasta 1943.", "Abogado, estanciero, ministro y gobernador: político profesional de la élite regional."] },
      { eje: "Cómo llega",     valores: ["Golpe de otros (1943) → cargo laboral → 17 de octubre → elección limpia 1946.", "Revolución armada 1930 → voto indirecto 1934 → autogolpe 1937 → elección 1950."] },
      { eje: "Base social",    valores: ["Obreros sindicalizados y migrantes; mujeres (1947); industriales pequeños.", "Obreros urbanos formales; tenentes; burocracia; industriales paulistas."] },
      { eje: "Política social",valores: ["Aguinaldo, Estatuto del Peón, salud (Carrillo), universidad gratuita, Fundación Eva Perón, voto femenino 1947.", "Carteira 1932, salario mínimo 1940, Justicia del Trabajo 1941, CLT 1943, voto femenino 1932."] },
      { eje: "Política económica", valores: ["Nacionalizar servicios (ferrocarriles, teléfonos), IAPI, pagar deuda, Plan Quinquenal; crisis 1949 y giro.", "Salvar el café, ISI con aranceles, industria pesada estatal (Volta Redonda, Vale), Petrobras, BNDE."] },
      { eje: "Relación con EE.UU.", valores: ["Confrontación (Braden 1946) → deshielo (Standard Oil 1955).", "Alianza en la guerra (Eximbank, FEB) → tensión 1951–54 (Petrobras)."] },
      { eje: "Trato a la oposición", valores: ["Formas democráticas mantenidas pero vaciadas (Corte, desacato, La Prensa, Balbín preso).", "Dictadura abierta 1937–45 (DIP, Filinto Müller, Prestes preso); presidente tolerante 1951–54."] },
      { eje: "Caída",          valores: ["Bombardeo de Plaza de Mayo, Revolución Libertadora (1955), exilio 18 años.", "Depuesto 1945; ultimátum militar y suicidio (1954)."] },
      { eje: "Legado",         valores: ["El peronismo: identidad partidaria; «el pasado que no pasa» (Halperín).", "CLT, Petrobras, Volta Redonda; trabalhismo (PTB, Goulart) hasta 1964."] }
    ]
  },

  {
    id: "castro-hitler",
    titulo: "Castro vs. Hitler (Paper 2 · Tema 10)",
    temas: ["t10-castro", "t10-hitler"],
    columnas: ["Fidel Castro", "Adolf Hitler"],
    ejes: [
      { eje: "Vía al poder", valores: ["Lucha armada: Movimiento 26 de Julio, guerrilla en la Sierra Maestra, triunfo en enero de 1959.", "Vía legal-electoral: ascenso del NSDAP, nombrado canciller en enero de 1933."] },
      { eje: "Contexto de ascenso", valores: ["Dictadura de Batista, desigualdad y dependencia de EE.UU.", "Crisis de Weimar, Gran Depresión y humillación del Tratado de Versalles."] },
      { eje: "Ideología", valores: ["Nacionalismo antiimperialista que deriva al marxismo-leninismo.", "Nazismo desde el inicio: raza, antisemitismo y Lebensraum."] },
      { eje: "Consolidación", valores: ["Juicios revolucionarios, control de la prensa, partido único (PCC) y exilio de opositores.", "Decreto del Incendio, Ley Habilitante, Noche de los Cuchillos Largos y Gleichschaltung."] },
      { eje: "Políticas", valores: ["Reforma agraria, campaña de alfabetización, salud pública y nacionalizaciones.", "Rearme, autarquía, obras públicas y «Volksgemeinschaft»."] },
      { eje: "Represión", valores: ["Paredón, policía política (G2) y campos de trabajo (UMAP).", "Gestapo, SS y campos de concentración."] },
      { eje: "Legado", valores: ["Régimen que sobrevive décadas y se institucionaliza.", "Guerra total y colapso del régimen en 1945."] }
    ]
  },

  {
    id: "truman-eisen-kennedy",
    titulo: "Truman–Eisenhower–Kennedy (Sección 15)",
    temas: ["15.1", "15.2", "15.3"],
    columnas: ["Truman", "Eisenhower", "Kennedy"],
    ejes: [
      { eje: "Programa interno", valores: ["Fair Deal: ampliar el New Deal.", "«Conservadurismo dinámico»: consolidar, no desmantelar.", "New Frontier: impulso reformista."] },
      { eje: "Economía", valores: ["Posguerra: inflación, huelgas y reconversión.", "Prosperidad, autopistas interestatales y equilibrio fiscal.", "Crecimiento y estímulo; recorte impositivo propuesto."] },
      { eje: "Derechos civiles", valores: ["Integra las Fuerzas Armadas (1948).", "Cauteloso; manda tropas a Little Rock (1957).", "Tardío pero envía el proyecto de ley de 1963."] },
      { eje: "Relación con el Congreso", valores: ["Choca con el «do-nothing Congress».", "Gobierna negociando con los demócratas.", "Bloqueado por la coalición conservadora."] },
      { eje: "Macartismo / anticomunismo", valores: ["Programas de lealtad; contención.", "Deja caer a McCarthy (1954).", "El clima macartista ya está en reflujo."] }
    ]
  }
];
