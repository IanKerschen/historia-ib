/* ============================================================
   tema-t10-castro.js — Paper 2 · Tema 10 (Estados autoritarios)
   Fidel Castro · Cuba (1959–2008)
   Transcripción fiel de la guía "Tema10_en_profundidad_Hitler_Castro".
   No se agregan historiadores ni datos nuevos.
   Enfoque Paper 2: surgimiento · consolidación · políticas y resultados.
   ============================================================ */
window.registrarTema({
  id: "t10-castro",
  carpeta: "p2-t10",
  titulo: "Fidel Castro",
  subtitulo: "Cuba revolucionaria · surgimiento, consolidación y políticas (1952–2008)",
  periodo: "Surgimiento 1952–1959 · poder 1959–2006/08",
  estado: "listo",
  etiquetas: ["estado autoritario", "Castro", "Cuba", "revolución", "26 de Julio", "nacionalismo", "asedio vs decisión", "Paper 2"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "La revolución de 1959 fue la explosión de un nacionalismo frustrado desde 1898 (Platt, 1912, el 1933 traicionado) más un cierre político: el golpe de Batista de 1952 clausuró la vía electoral. Castro no ganó una guerra convencional (3.000 contra 40.000): ganó una guerra de legitimidad gracias a un talento político excepcional para convertir derrotas en mitos. Consolidó el poder en una espiral de radicalización (~6 años) donde presión externa (EE. UU.) y decisión interna se retroalimentaron; se mantuvo con nacionalismo, logros sociales medibles, encuadramiento total y la emigración como válvula; y logró el objetivo que lo legitimaba (igualdad social) pero nunca el estructural (independencia económica: de EE. UU. a la URSS a Venezuela).",
    historiadoresLinea: [
      { nombre: "Pérez-Stable", linea: "1959 = explosión del nacionalismo frustrado desde 1898/Platt/1933; el régimen se sostiene por nacionalismo y movilización más que por terror." },
      { nombre: "Farber", linea: "El partido único fue decisión propia, no solo respuesta al asedio: Matos preso en oct 1959, antes del embargo; «participación sin poder = movilización, no ciudadanía»." },
      { nombre: "Domínguez", linea: "CDR, FMC, sindicatos: a la vez vigilancia y canales reales de participación y movilidad; por eso la gente se integró." },
      { nombre: "Kapcia (y Balfour)", linea: "La «cultura de la revolución» (mitos, moral, organizaciones) sobrevive al líder: el régimen no cayó ni en 1991 ni en 2006. Balfour: el carisma como recurso gestionado." },
      { nombre: "De regalo", linea: "Gott (tesis del asedio: el bloqueo explica la deriva) vs Hugh Thomas (la dictadura estaba desde 1959); De la Fuente (límites raciales)." }
    ],
    datosClave: [
      { grupo: "Surgimiento (1952–1959): datos que valen oro", items: [
        "10 mar 1952: golpe de Batista, elecciones canceladas, Constitución de 1940 suspendida (cierra la vía electoral).",
        "26 jul 1953: Moncada (~135 hombres); fracaso militar pero nace el Movimiento 26 de Julio y «La historia me absolverá».",
        "may 1955: amnistía de Batista (su peor error); exilio en México.",
        "2 dic 1956: desembarco del Granma (82 hombres, ~20 sobrevivientes) → Sierra Maestra.",
        "feb 1957: entrevista de Herbert Matthews (NYT); feb 1958: Radio Rebelde. Propaganda magistral.",
        "mar 1958: EE. UU. impone embargo de armas a Batista (señal devastadora).",
        "may–ago 1958: fracasa la Operación Verano (~10.000 soldados vs ~300 guerrilleros).",
        "28–31 dic 1958: el Che toma Santa Clara. 1 ene 1959: Batista huye. El Ejército Rebelde nunca pasó de ~3.000 vs 40.000."
      ]},
      { grupo: "Consolidación y políticas (1959–2008): datos que valen oro", items: [
        "ene–mar 1959: juicios revolucionarios (~500 fusilamientos). 17 may 1959: 1.ª Reforma Agraria (402 ha), INRA.",
        "oct 1959: Huber Matos, 20 años (purga anterior al embargo y a la alianza soviética).",
        "1960: Mikoyan, nacionalizaciones (~$1.000 M), embargo parcial; nacen los CDR (800.000 en 1961).",
        "17–19 abr 1961: Girón / Bahía de Cochinos (1.400 exiliados derrotados en 72 h) → «carácter socialista». Dic: «soy marxista-leninista».",
        "1961: Campaña de Alfabetización: analfabetismo 23% → 3,9% (268.000 brigadistas, certificado por UNESCO).",
        "oct 1962: Crisis de los Misiles (acuerdo sin Cuba; garantía de no invasión = supervivencia del régimen).",
        "1965: PCC; UMAP (1965–68). 1970: Zafra de los 10 millones (8,5 M t: récord y fracaso oficial).",
        "1989–93: colapso soviético → Período Especial (PIB −35%); mortalidad infantil ~7/1.000; esperanza de vida ~76; >1 M de exiliados."
      ]}
    ],
    comparacion: [
      { eje: "Condiciones de surgimiento", texto: "Lo decisivo fue el cierre político: el golpe del 10-3-1952 clausuró la vía electoral, sobre un fondo de corrupción y desigualdad. (En Alemania: crisis económica aguda.)" },
      { eje: "Uso de la fuerza", texto: "Central pero simbólica: Moncada, Granma, Sierra; 3.000 contra 40.000 no ganan una guerra convencional, ganan una de legitimidad. El ejército de Batista se desmoronó." },
      { eje: "Consolidación", texto: "Desde la movilización y el conflicto externo, en ~6 años: juicios → reforma agraria → Matos → nacionalizaciones → Girón → «socialista» → PCC (1965). (En Alemania, 18 meses desde el aparato.)" },
      { eje: "Terror", texto: "Selectivo y tercerizado (CDR 800.000, G2), con letalidad comparativamente baja: la válvula migratoria (Mariel, >1 M de exiliados) reemplaza al exterminio." },
      { eje: "Economía", texto: "Logró el objetivo que legitimaba (igualdad, empleo) y falló el estructural (ni diversificación ni independencia: azúcar 75% de las exportaciones en 1989)." }
    ],
    veredictos: [
      { titulo: "Cómo llegó", texto: "Castro no venció militarmente: ganó una guerra de legitimidad (Balfour: el factor Castro) sobre un Estado batistiano descompuesto (Farber: ganó en buena medida por walkover)." },
      { titulo: "Radicalización", texto: "¿Elegida o forzada? La respuesta de banda alta no elige: presión externa (Girón) y decisión interna (Matos preso en oct 1959, antes del embargo) se retroalimentaron." },
      { titulo: "Políticas y resultados", texto: "Lograron los objetivos que sostenían el poder (igualdad, empleo: alfabetización 3,9%, mortalidad infantil 7/1.000) y fracasaron en los que requerían autonomía (diversificación). Pagados con subsidio y libertad." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Marifeli Pérez-Stable", nacionalidad: "Cubano-estadounidense, socióloga histórica",
      obra: "The Cuban Revolution: Origins, Course and Legacy",
      postura: "Nacionalismo frustrado + legitimidad por movilización",
      funcion: "Surgimiento (condiciones), mantenimiento, legitimidad, políticas (balance).",
      ideaCentral: "La revolución fue la explosión de un nacionalismo frustrado acumulado desde 1898 (Enmienda Platt, la masacre de 1912, el 1933 traicionado) más una estructura social (proletariado azucarero, clases medias sin nación) que hacía verosímil un cambio radical. El régimen se sostiene más por nacionalismo y movilización que por terror, y eligió sistemáticamente legitimidad sobre eficiencia: las políticas que garantizaban la igualdad y la lealtad eran las mismas que destruían la productividad.",
      matiz: "Condiciones estructurales de largo plazo + cierre político de 1952 = revolución. Ni puro determinismo social ni puro accidente.",
      fraseLista: "Como sostiene Pérez-Stable, la revolución fue la explosión de un nacionalismo frustrado desde 1898, y el régimen optó sistemáticamente por la legitimidad sobre la eficiencia económica.",
      paraPreguntas: ["Condiciones del surgimiento", "Mantenimiento y legitimidad", "Políticas económicas (la paradoja)"]
    },
    {
      nombre: "Samuel Farber", nacionalidad: "Cubano-estadounidense, politólogo crítico",
      obra: "The Origins of the Cuban Revolution Reconsidered",
      postura: "Decisión propia, no solo asedio",
      funcion: "Surgimiento (colapso de Batista), consolidación, oposición, auditoría crítica de las políticas.",
      ideaCentral: "Desconfía del «gran hombre»: lo decisivo en 1959 fue la descomposición del Estado batistiano (ejército desmotivado, élite dividida, EE. UU. en retirada) y la debilidad de las alternativas reformistas: Castro ganó en buena medida «por walkover». Y el partido único fue una decisión propia, no solo respuesta al asedio: Matos preso en octubre de 1959 (antes del embargo), elecciones prometidas y jamás convocadas, prensa cerrada en 1960. «Participación sin poder de decisión es movilización, no ciudadanía»: todas las organizaciones estaban subordinadas al partido, y el partido a Fidel.",
      matiz: "El conflicto con EE. UU. fue real pero también funcional: el enemigo externo justificaba la unanimidad interna. Audita los logros: se financiaron con subsidio soviético y excluyeron toda autonomía.",
      fraseLista: "Frente a la tesis del asedio, Farber subraya que el monopolio del poder fue una decisión interna anterior a la presión máxima, como prueba la purga de Huber Matos en octubre de 1959.",
      paraPreguntas: ["Consolidación (¿elegida o forzada?)", "Tratamiento de la oposición", "Auditoría crítica de las políticas sociales"]
    },
    {
      nombre: "Jorge Domínguez", nacionalidad: "Cubano-estadounidense, politólogo (Harvard)",
      obra: "Cuba: Order and Revolution",
      postura: "Control + participación",
      funcion: "Mantenimiento, oposición, organizaciones de masas.",
      ideaCentral: "Da la clave institucional: las organizaciones de masas (CDR, FMC, sindicatos) eran simultáneamente instrumentos de control y canales reales de participación y movilidad social; por eso millones se integraron sin sentirse solo vigilados. El control no se ejercía desde una policía omnipresente sino tercerizándolo en una sociedad encuadrada.",
      matiz: "Farber responde que participación sin poder de decisión es movilización, no ciudadanía: la contracara del argumento de Domínguez.",
      fraseLista: "Según Domínguez, las organizaciones de masas cubanas eran a la vez vigilancia y canales reales de participación y movilidad, lo que explica por qué la gente se integró en lugar de limitarse a obedecer.",
      paraPreguntas: ["Mantenimiento del poder", "Tratamiento de la oposición", "Organizaciones de masas / ¿control total?"]
    },
    {
      nombre: "Antoni Kapcia (y Sebastian Balfour)", nacionalidad: "Británicos, cubanólogos",
      obra: "Kapcia: Cuba: Island of Dreams · Balfour: Castro (biografía)",
      postura: "«Sistema, no solo Fidel» / carisma gestionado",
      funcion: "Carisma, propaganda, longevidad del régimen, surgimiento (factor Castro).",
      ideaCentral: "Kapcia desplaza el foco del hombre al sistema: habla de una «cultura de la revolución» (códigos, mitos, moral del sacrificio) internalizada por organizaciones y generaciones, que explica por qué el régimen no se derrumbó ni con el colapso soviético ni con el retiro de Fidel (2006–08): el carisma estaba rutinizado en instituciones. Balfour analiza el carisma como recurso político deliberado: Castro gestionó su imagen (uniforme verde oliva, barba, discurso-maratón) como una institución del Estado, y en el surgimiento su talento para convertir derrotas en mitos fue el «factor Castro».",
      matiz: "El carisma fue clave pero no autosuficiente: sin los logros sociales, el aparato de control y el enemigo externo habría sido un estilo, no un sistema.",
      fraseLista: "Para Kapcia, la longevidad del régimen se explica porque la «cultura de la revolución» rutinizó el carisma en instituciones, de modo que sobrevivió tanto al colapso soviético como al retiro del propio Fidel.",
      paraPreguntas: ["Carisma y propaganda (mantenimiento)", "Longevidad del régimen", "Surgimiento (métodos, factor Castro)"]
    },
    {
      nombre: "Richard Gott (vs Hugh Thomas)", regalo: true, nacionalidad: "Frase regalo (par de reserva)",
      obra: "Gott: Cuba: A New History · Thomas: Cuba, or The Pursuit of Freedom",
      postura: "«Asedio vs dictadura»",
      ideaCentral: "Gott (tesis del asedio): el bloqueo, Girón y los cientos de planes de la CIA explican la deriva autoritaria; los indicadores sociales únicos en América Latina prueban que la revolución cumplió su promesa central. Thomas (desde la derecha): la dictadura estaba en 1959 desde el inicio. Par perfecto para cerrar una conclusión global.",
      fraseLista: "El par Gott/Thomas enmarca cualquier evaluación global: para Gott el bloqueo explica la deriva, para Thomas la dictadura estaba desde el inicio.",
      paraPreguntas: ["Evaluación global del régimen", "¿Radicalización elegida o forzada?"]
    },
    {
      nombre: "Alejandro de la Fuente", regalo: true, nacionalidad: "Frase regalo (cuestión racial)",
      obra: "A Nation for All: Race, Inequality and Politics in Twentieth-Century Cuba",
      postura: "Límites raciales de la igualdad",
      ideaCentral: "La abolición inmediata de la segregación de facto (1959) fue real, pero con dos límites: la prohibición de toda organización negra autónoma (el tema se declaró «resuelto») y la reaparición de desigualdades raciales cuando el turismo y las remesas de los noventa favorecieron a los cubanos blancos con familia en Miami.",
      fraseLista: "Como señala De la Fuente, la igualdad racial cubana fue real pero prohibió toda autonomía negra y se resquebrajó con el turismo y las remesas del Período Especial.",
      paraPreguntas: ["Políticas sociales (raza)", "Límites de la igualdad"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1902, fecha: "20 may 1902", pais: "Cuba", titulo: "República bajo la Enmienda Platt",
      descripcion: "Cuba nace como república con la soberanía hipotecada: la Enmienda Platt (1901) daba a EE. UU. el derecho de intervenir, la base de Guantánamo y la supervisión de las finanzas; el Tratado de Reciprocidad (1903) ató la economía al azúcar y al mercado estadounidense.",
      causas: ["Fin de la guerra de independencia con tutela estadounidense."],
      consecuencias: ["Intervenciones de EE. UU. en 1906–09, 1912 y 1917–23.", "«Una independencia de mito»: nacionalismo frustrado desde el origen."],
      historiador: "Pérez-Stable: el nacionalismo frustrado desde 1898 es la clave de todo." },
    { anio: 1933, fecha: "1933", pais: "Cuba", titulo: "Revolución de 1933 · Batista",
      descripcion: "La Revolución de 1933 derriba al dictador Machado. De ella salen dos cosas contrapuestas: la Constitución de 1940 (una de las más progresistas de América, texto sagrado del reformismo que Castro invocaría) y Fulgencio Batista, el sargento que emergió del golpe.",
      causas: ["Crisis del machadato."],
      consecuencias: ["La Constitución de 1940 se vuelve bandera reformista.", "En 1934 EE. UU. abolió la Enmienda Platt, pero siguió el «protectorado informal»."] },
    { anio: 1952, fecha: "10 mar 1952", pais: "Cuba", titulo: "Golpe de Batista: la chispa",
      descripcion: "A semanas de unas elecciones en las que iba último, Batista da un golpe incruento, cancela los comicios y suspende la Constitución de 1940. El acontecimiento decisivo del surgimiento: transformó la ilegitimidad en ilegalidad.",
      causas: ["Batista iba a perder; prefirió el poder por la fuerza."],
      consecuencias: ["Cierra la vía electoral: hasta 1952 la oposición tenía un camino legal; después, no.", "Castro primero intenta la vía legal (recurso judicial rechazado) y solo entonces la armada."],
      historiador: "Farber: sin el golpe de Batista, esa frustración tenía cauces reformistas." },
    { anio: 1953, fecha: "26 jul 1953", pais: "Cuba", titulo: "Asalto al Moncada",
      descripcion: "Castro ataca con ~135 hombres el segundo cuartel del país, en Santiago. Militarmente es un desastre, pero produce tres activos: un nombre (Movimiento 26 de Julio), mártires, y el texto «La historia me absolverá».",
      causas: ["La vía legal estaba clausurada desde 1952."],
      consecuencias: ["El programa era todo menos comunista: restaurar la Constitución de 1940, reforma agraria con indemnización, escuelas y hospitales.", "Condenado a 15 años."],
      historiador: "Balfour: el factor Castro, convertir una derrota en mito fundacional." },
    { anio: 1956, fecha: "2 dic 1956", pais: "Cuba", titulo: "Desembarco del Granma → Sierra Maestra",
      descripcion: "Tras la amnistía de 1955 (el peor error de Batista) y el exilio en México, Castro organiza una expedición en el yate Granma: 82 hombres desembarcan, son emboscados, y sobreviven ~20 (doce en la cifra mítica) que se refugian en la Sierra Maestra.",
      causas: ["Amnistía de mayo de 1955."],
      consecuencias: ["Empieza una «insurgencia de propaganda armada»: base campesina ganada con respeto y justicia local."] },
    { anio: 1957, fecha: "feb 1957", pais: "Cuba", titulo: "Entrevista de Matthews (NYT)",
      descripcion: "Herbert Matthews del New York Times muestra vivo a un Castro que Batista daba por muerto y lo presenta como un reformista romántico (Castro hizo desfilar a los mismos hombres para aparentar un ejército). El Manifiesto de la Sierra (jul 1957, con Felipe Pazos) promete elecciones en 18 meses y nada de nacionalizaciones.",
      causas: ["Necesidad de aislar a Batista de la clase media y de Washington."],
      consecuencias: ["La moderación fue el método para ampliar la base.", "feb 1958: Radio Rebelde da la versión rebelde de cada combate."] },
    { anio: 1958, fecha: "1958", pais: "Cuba", titulo: "El derrumbe de Batista",
      descripcion: "En mar 1958 EE. UU. impone un embargo de armas a Batista (señal política devastadora). En may–ago fracasa la Operación Verano (~10.000 soldados vs ~300 guerrilleros), quebrando la moral del ejército. El Che toma Santa Clara (28–31 dic) y en la madrugada del 1 de enero de 1959 Batista huye.",
      causas: ["El fracaso de la huelga general de abril de 1958 desprestigió al Llano y consolidó el mando de la Sierra."],
      consecuencias: ["El Ejército Rebelde nunca pasó de ~3.000: la victoria fue menos militar que política y moral."],
      historiador: "Farber: la descomposición del Estado batistiano; Castro ganó en buena medida por walkover." },
    { anio: 1959, fecha: "17 may 1959", pais: "Cuba", titulo: "1.ª Reforma Agraria · caen los moderados",
      descripcion: "Tras los juicios revolucionarios (~500 fusilamientos) y la asunción de Castro como primer ministro (feb), la 1.ª Reforma Agraria (límite de 402 ha, INRA) toca de lleno los intereses estadounidenses: el punto de no retorno con Washington. En oct, el comandante Huber Matos recibe 20 años por denunciar la infiltración comunista.",
      causas: ["Radicalización en espiral desde enero."],
      consecuencias: ["La purga de Matos es ANTERIOR al embargo y a la alianza soviética."],
      historiador: "Farber: evidencia de la decisión interna, no solo del asedio." },
    { anio: 1960, fecha: "1960", pais: "Cuba", titulo: "La espiral con EE. UU. · nacen los CDR",
      descripcion: "Mikoyan (feb: la URSS compra azúcar y presta $100 M); las refinerías se niegan a procesar crudo soviético → Cuba las nacionaliza; EE. UU. corta la cuota azucarera → Cuba nacionaliza ~$1.000 M en propiedades; embargo parcial (oct). Cada golpe respondido con una escalada. En sep nacen los CDR; desaparece la prensa independiente.",
      causas: ["Cada escalada empujaba a Cuba hacia Moscú."],
      consecuencias: ["Nace el aparato de encuadramiento de masas (CDR)."] },
    { anio: 1961, fecha: "17–19 abr 1961", pais: "Cuba", titulo: "Girón / Bahía de Cochinos",
      descripcion: "EE. UU. rompe relaciones (ene); la CIA desembarca a 1.400 exiliados en Playa Girón y son derrotados en 72 horas: la primera derrota militar de EE. UU. en América Latina, capital de legitimidad casi inagotable. La víspera, Castro declara el «carácter socialista» de la revolución; en diciembre: «soy marxista-leninista».",
      causas: ["Hostilidad creciente de EE. UU."],
      consecuencias: ["Ese mismo año: Campaña de Alfabetización (23% → 3,9%), escuelas nacionalizadas, G2/MININT."],
      historiador: "Gott (tesis del asedio): la hostilidad de EE. UU. empuja la deriva socialista." },
    { anio: 1962, fecha: "oct 1962", pais: "Cuba", titulo: "Crisis de los Misiles",
      descripcion: "Embargo total (feb). En octubre, la URSS retira los misiles negociando con EE. UU. sin consultar a Castro (humillación que marcó su desconfianza hacia Moscú), a cambio de la promesa estadounidense de no invadir.",
      causas: ["Alineamiento con el bloque soviético."],
      consecuencias: ["Paradójicamente, la garantía de no invasión fue la garantía de supervivencia del régimen."] },
    { anio: 1965, fecha: "1965", pais: "Cuba", titulo: "PCC · UMAP",
      descripcion: "Culmina la fusión de las organizaciones revolucionarias (ORI → PURSC) en el Partido Comunista de Cuba (1965), con Fidel como primer secretario; el viejo PSP es absorbido y purgado. Fase dura de la represión: guerra sucia en el Escambray, 15.000–20.000 presos políticos, y las UMAP (1965–68), campos de trabajo para homosexuales, religiosos y «desafectos».",
      consecuencias: ["Partido único consolidado (~6 años después de 1959).", "Las UMAP se cierran tras protestas de intelectuales."] },
    { anio: 1970, fecha: "1970", pais: "Cuba", titulo: "Zafra de los Diez Millones",
      descripcion: "Castro apuesta todo a un objetivo-símbolo: cosechar 10 millones de toneladas de azúcar. Se moviliza al país entero, se desorganiza el resto de la economía… y se cosechan 8,5 millones: récord histórico y fracaso oficial. Castro ofrece la renuncia (no aceptada).",
      causas: ["Fin del voluntarismo guevarista."],
      consecuencias: ["Comienza la sovietización: COMECON (1972), planificación soviética."] },
    { anio: 1980, fecha: "1980", pais: "Cuba", titulo: "El Mariel",
      descripcion: "Tras la ocupación de la embajada de Perú, el éxodo del Mariel: 125.000 personas en cinco meses. La emigración como válvula: cada crisis se descomprime exportando descontentos (Camarioca 1965, Vuelos de la Libertad 260.000, balseros 1994 ~35.000).",
      consecuencias: ["Más de un millón de cubanos se fueron: la oposición potencial, transformada en exilio sin poder interno."] },
    { anio: 1991, fecha: "1989–93", pais: "Cuba", titulo: "Colapso soviético · Período Especial",
      descripcion: "El colapso soviético corta subsidios, petróleo y mercados: el PIB cae ~35% (1989–93), las importaciones un 75%; apagones, hambre real (neuropatía de 1993). Respuesta: liberalización mínima (dólar y cuentapropismo 1993, mercados 1994) y la apuesta grande: turismo.",
      causas: ["Fin del subsidio soviético ($4–5 mil M/año en los ochenta)."],
      consecuencias: ["El régimen sobrevive; el carisma resiste la catástrofe.", "Desde 2000, el petróleo venezolano de Chávez (pagado con médicos) reconstruye el patrocinio externo."],
      historiador: "Kapcia: el carisma rutinizado en instituciones sobrevive al colapso." },
    { anio: 2006, fecha: "2006–08", pais: "Cuba", titulo: "Retiro de Fidel · Raúl",
      descripcion: "La enfermedad de Fidel (2006) y el traspaso a Raúl (presidente en 2008, primer secretario en 2011) no derrumban el régimen: la prueba final de que el sistema sobrevivió al líder. Fidel muere en 2016.",
      consecuencias: ["Indicadores: mortalidad infantil ~7/1.000; esperanza de vida ~76; >1 M de exiliados."],
      historiador: "Kapcia: «sistema, no solo Fidel»." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega (Paper 2) + vocabulario",
        html: `
          <p>Esto es <b>Paper 2, Tema 10: Estados autoritarios</b>. No es Paper 3. El temario del IB tiene tres patas y el examinador te penaliza <b>explícitamente</b> si las mezclás: <b>surgimiento</b> (1952–59) · <b>consolidación/mantenimiento</b> (1959–65 / el resto) · <b>políticas y resultados</b>. Casi siempre te van a pedir comparar a Castro con <b>otro</b> estado autoritario (acá, Hitler), «cada uno de una región diferente»: Castro (América) y Hitler (Europa) cumplen; decilo en la primera línea para que el examinador lo tilde.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fase</th><th>Fechas (Castro)</th><th>Pregunta típica</th></tr></thead>
            <tbody>
              <tr><td>Surgimiento</td><td>1952–1959</td><td>Condiciones y métodos del ascenso (fuerza simbólica, propaganda, colapso del adversario).</td></tr>
              <tr><td>Consolidación y mantenimiento</td><td>1959–1965 / el resto</td><td>Trato a la oposición, control, carisma, organizaciones de masas.</td></tr>
              <tr><td>Políticas y resultados</td><td>1959–2008</td><td>¿Lograron sus objetivos? ¿Produjeron cambio significativo? (economía, sociedad, mujeres, raza, religión).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Cada política se evalúa contra sus propios objetivos declarados, no contra nuestros valores.</b> Tres pasos: enunciá el objetivo, medí el resultado con datos, explicá la brecha. En Cuba, el truco de banda alta es distinguir objetivos estructurales (diversificación: fallan) de objetivos de poder (igualdad: se cumplen).</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Estructura del párrafo comparativo (Tabla 2 del PDF):</b> afirmación → dato de Hitler → dato de Castro → por qué difieren → historiador → mini-juicio. <b>Los dos casos en todos los párrafos.</b> En 45 minutos: 5 de plan, 33 de escritura (intro + 3–4 párrafos + conclusión), 2 de relectura.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La tesis maestra del caso Castro:</b> «La revolución cubana fue la explosión de un nacionalismo frustrado desde 1898, detonado por el cierre de la vía electoral en 1952; Castro no ganó una guerra convencional sino una guerra de legitimidad, y consolidó el poder en una espiral donde la presión de Estados Unidos y su propia voluntad de monopolio se retroalimentaron.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Enmienda Platt</b> = el apéndice que daba a EE. UU. derecho de intervenir en Cuba (1901–1934). <b>M-26-7</b> = Movimiento 26 de Julio (por el Moncada). <b>Sierra vs Llano</b> = ala guerrillera-rural (Fidel) vs ala cívico-urbana; ganó la Sierra. <b>INRA</b> = Instituto Nacional de Reforma Agraria (gobierno paralelo). <b>CDR</b> = Comités de Defensa de la Revolución (vigilancia + servicios, uno por cuadra). <b>Período Especial</b> = crisis tras el colapso soviético (PIB −35%). <b>«Patria o Muerte»</b> = consigna del régimen.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No confundir las fases. «Surgimiento» termina el 1 de enero de 1959; «consolidación» es 1959–65; el resto es «mantenimiento». Y no caricaturices el contexto: Cuba <b>no</b> era el país más pobre de América Latina, era uno de los más desiguales y frustrados.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se evalúa cada política en Paper 2, según la «regla de oro» del PDF?", etiqueta: "concepto",
            opciones: [
              { texto: "Contra sus propios objetivos declarados: enunciar objetivo, medir resultado, explicar la brecha.", correcta: true, explicacion: "Correcto: en Cuba conviene separar objetivos estructurales (fallan) de objetivos de poder (se cumplen)." },
              { texto: "Contra nuestros valores morales actuales sobre lo que está bien o mal, premiando los regímenes más humanitarios.", correcta: false, explicacion: "El PDF advierte justo lo contrario." },
              { texto: "Por la cantidad de medallas o premios internacionales recibidos.", correcta: false, explicacion: "No es el criterio del IB." },
              { texto: "Según cuántos exiliados se fueron del país.", correcta: false, explicacion: "La emigración es un dato de la válvula represiva, no el criterio de evaluación." }
            ] },
          { pregunta: "Según el PDF, ¿cómo era Cuba antes de 1959?", etiqueta: "trampa",
            opciones: [
              { texto: "No el país más pobre, sino uno de los más desiguales y frustrados de América Latina.", correcta: true, explicacion: "Correcto: renta alta en La Habana, miseria y 40% de analfabetismo en el campo." },
              { texto: "El país más pobre y atrasado de todo el continente americano, por debajo incluso de Haití en renta.", correcta: false, explicacion: "El PDF lo niega: tenía de las rentas per cápita más altas de la región." },
              { texto: "Una democracia estable y próspera sin ninguna desigualdad.", correcta: false, explicacion: "Había fraude, corrupción y enorme desigualdad campo-ciudad." },
              { texto: "Un país totalmente controlado por la Unión Soviética.", correcta: false, explicacion: "Era un «protectorado informal» de EE. UU., no soviético, antes de 1959." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Contexto: la república frustrada (1902–1952)",
        html: `
          <p>La revolución de 1959 no se entiende sin la historia previa (es la continuación directa del Tema 8).</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Factor</th><th>Qué pasaba</th><th>Por qué es combustible</th></tr></thead>
            <tbody>
              <tr><td>Soberanía hipotecada</td><td>Enmienda Platt (1901): EE. UU. puede intervenir, base de Guantánamo; Tratado de Reciprocidad (1903) ata la economía al azúcar.</td><td>Intervenciones en 1906–09, 1912, 1917–23. «Una independencia de mito».</td></tr>
              <tr><td>Traumas fundacionales</td><td>Masacre de 1912 (~3.000 cubanos negros asesinados); ciclo de fraude, corrupción y alzamientos.</td><td>Memoria nacional de frustración.</td></tr>
              <tr><td>La «segunda fundación» fallida</td><td>Revolución de 1933 → Constitución de 1940 (progresista, texto sagrado) y Batista (sargento del golpe).</td><td>Castro invocaría siempre la Constitución de 1940.</td></tr>
              <tr><td>Dependencia económica (años 50)</td><td>Capitales de EE. UU.: ~40% del azúcar, 90% de minas y servicios; el Congreso de EE. UU. fijaba la cuota azucarera.</td><td>«Protectorado informal» pese a abolirse Platt en 1934.</td></tr>
              <tr><td>Desigualdad y humillación</td><td>Solo 9% de viviendas rurales con luz, 2% con agua; analfabetismo rural ~40%; 8% de propietarios con ~70% de la tierra; La Habana del juego y la mafia.</td><td>Expectativas de país moderno + realidad de dependencia = combustible; faltaba la chispa.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Pérez-Stable</b>: la revolución fue la explosión de un nacionalismo frustrado acumulado desde 1898, más una estructura social que hacía verosímil un cambio radical. <b>Farber</b> desplaza el acento: la sociedad cubana de los cincuenta era políticamente moderna y organizada; lo que colapsó no fue «el país» sino el sistema político, y sin el golpe de Batista esa frustración tenía cauces reformistas. Tesis de contexto: condiciones estructurales de largo plazo + cierre político de 1952 = revolución.</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Ortodoxos</b> = el partido de Eduardo Chibás («vergüenza contra dinero»), nacido de la decepción con los gobiernos «auténticos» corruptos (Grau, Prío). Chibás se suicidó en vivo por radio (1951), dejando huérfano al movimiento en el que militaba un joven abogado: Fidel Castro.</div>
        `,
        miniQuiz: [
          { pregunta: "Según Pérez-Stable, ¿qué fue la revolución de 1959?", etiqueta: "historiador",
            opciones: [
              { texto: "La explosión de un nacionalismo frustrado acumulado desde 1898.", correcta: true, explicacion: "Correcto: Platt, 1912 y el 1933 traicionado se acumularon hasta estallar." },
              { texto: "Una revolución comunista planificada por la URSS desde los años treinta.", correcta: false, explicacion: "El programa del Moncada era «todo menos comunista»; la URSS entra después." },
              { texto: "Un golpe militar idéntico al que había dado Batista en 1952.", correcta: false, explicacion: "Fue una insurgencia popular, no un golpe cuartelario como el de Batista." },
              { texto: "El resultado de que Cuba fuera el país más pobre de la región.", correcta: false, explicacion: "Cuba no era el más pobre, sino el más desigual y frustrado." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Surgimiento: el golpe de 1952 y las condiciones",
        html: `
          <h3>El golpe de 1952: la chispa que cierra todas las puertas</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El golpe del 10 de marzo de 1952 es el acontecimiento decisivo del surgimiento porque transformó la ilegitimidad en ilegalidad: hasta 1952 la oposición cubana tenía una vía electoral imperfecta pero real; después, no. El propio Castro agotó la vía legal —un recurso judicial contra Batista— y solo entonces tomó las armas.»</div>

          <h3>Por qué Batista era vulnerable</h3>
          <ul>
            <li><b>Gobernaba sin título:</b> sus elecciones de 1954 (sin oposición) y 1958 (fraudulentas) no convencieron a nadie.</li>
            <li><b>Base estrecha:</b> un ejército de ~40.000 hombres, corruptos, con oficiales ascendidos por lealtad; la policía política (SIM) con tortura y asesinatos (cifras de 2.000 a 4.000 muertos; la propaganda rebelde diría 20.000).</li>
            <li><b>Apoyo externo condicional:</b> EE. UU. y los sectores económicos lo sostuvieron por «orden»… hasta 1958.</li>
          </ul>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Farber</b>: el régimen batistiano nunca resolvió su problema de origen (gobernaba sin título); sin el golpe de 1952, la frustración tenía cauces reformistas. El cierre político, no solo la miseria, es la condición próxima de la revolución.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El dato de los «20.000 muertos» del batistato es <b>propaganda rebelde</b>: las cifras reales van de 2.000 a 4.000. Usalo mostrándolo como propaganda, no como hecho neutral.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué el golpe de 1952 es «el acontecimiento decisivo» del surgimiento?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Porque transformó la ilegitimidad en ilegalidad: cerró la vía electoral.", correcta: true, explicacion: "Correcto: Castro agotó primero la vía legal y solo entonces tomó las armas." },
              { texto: "Porque instauró de inmediato un gobierno comunista en Cuba aliado con la Unión Soviética.", correcta: false, explicacion: "Batista era anticomunista y pro-EE. UU.; no instauró comunismo." },
              { texto: "Porque Castro ganó las elecciones canceladas por Batista.", correcta: false, explicacion: "Las elecciones se cancelaron; nadie las ganó." },
              { texto: "Porque EE. UU. retiró de inmediato su apoyo a Batista.", correcta: false, explicacion: "EE. UU. lo apoyó hasta 1958 (embargo de armas)." }
            ] },
          { pregunta: "La cifra de «20.000 muertos» del régimen de Batista…", etiqueta: "trampa",
            opciones: [
              { texto: "Es propaganda rebelde: las cifras reales van de 2.000 a 4.000.", correcta: true, explicacion: "Correcto: conviene presentarla como propaganda, no como hecho neutral." },
              { texto: "Es la cifra oficial certificada por la ONU tras una investigación internacional.", correcta: false, explicacion: "No hay tal certificación; es propaganda del M-26-7." },
              { texto: "Corresponde a los fusilamientos revolucionarios de 1959.", correcta: false, explicacion: "Los ~500 fusilamientos de 1959 son otro hecho, posterior." },
              { texto: "Es el número de exiliados del Mariel.", correcta: false, explicacion: "El Mariel (1980) fueron 125.000 emigrados, no muertos." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Surgimiento: los métodos de Castro",
        html: `
          <h3>Fuerza simbólica, propaganda magistral</h3>
          <ol class="escalera">
            <li><b>Moncada (26 jul 1953):</b> ~135 hombres atacan el segundo cuartel del país. Desastre militar, pero produce un nombre (M-26-7), mártires y «La historia me absolverá». El programa era todo menos comunista.</li>
            <li><b>Amnistía (may 1955):</b> Batista lo libera a los 22 meses para lavar su imagen: «probablemente el peor error de su vida».</li>
            <li><b>Granma (2 dic 1956):</b> 82 hombres desembarcan, son emboscados; sobreviven ~20 que se refugian en la Sierra Maestra.</li>
            <li><b>Insurgencia de propaganda armada (1956–58):</b> pequeñas victorias magnificadas, base campesina ganada con respeto y justicia local.</li>
          </ol>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Dos golpes maestros de comunicación:</b> la entrevista de <b>Herbert Matthews</b> (NYT, feb 1957), que mostró vivo a un Castro dado por muerto y lo presentó como reformista romántico (hizo desfilar a los mismos hombres para aparentar un ejército); y <b>Radio Rebelde</b> (feb 1958), que daba la versión rebelde de cada combate. El <b>Manifiesto de la Sierra</b> (jul 1957, con Felipe Pazos) prometía elecciones en 18 meses y nada de nacionalizaciones: la moderación era el método para aislar a Batista de la clase media y de Washington.</div>

          <h3>Sierra vs Llano · el derrumbe</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El M-26-7 urbano (el «Llano», con Frank País hasta su asesinato en jul 1957) hacía sabotaje y finanzas y competía con la «Sierra». El fracaso de la huelga general de abril de 1958 desprestigió al Llano y consolidó el mando de la Sierra: <b>la revolución triunfante fue la militar-rural comandada por Fidel, no la cívico-urbana</b>. Esto explica mucho del régimen posterior.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «En mayo–agosto de 1958 Batista lanzó la Operación Verano —unos 10.000 soldados contra unos 300 guerrilleros— y fracasó; el fracaso quebró la moral del ejército. El Ejército Rebelde nunca pasó de unos 3.000 combatientes: la victoria fue menos militar que política y moral: el régimen se pudrió por dentro y nadie quiso morir por él.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> ¿Qué pesó más: la fuerza, la propaganda o el colapso del adversario? <b>Balfour</b> subraya el factor Castro: un talento excepcional para convertir derrotas en mitos (Moncada, el Granma) y calibrar el mensaje a cada audiencia. <b>Farber</b> desconfía del gran hombre: lo decisivo fue la descomposición del Estado batistiano y la debilidad de las alternativas reformistas; Castro ganó en buena medida «por walkover». Juicio: la fuerza fue el método central pero su eficacia fue simbólica y política.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué «activos» produjo el fracaso militar del Moncada (1953)?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Un nombre (M-26-7), mártires y el texto «La historia me absolverá».", correcta: true, explicacion: "Correcto: Balfour, el factor Castro, convertir una derrota en mito." },
              { texto: "Una victoria militar que derrocó de inmediato a Batista y tomó el poder en Santiago.", correcta: false, explicacion: "Fue un desastre militar; Batista cae recién en 1959." },
              { texto: "Una alianza formal con la Unión Soviética en 1953.", correcta: false, explicacion: "El programa era «todo menos comunista»; la URSS entra años después." },
              { texto: "El control del ejército regular cubano.", correcta: false, explicacion: "La mayoría de los atacantes fueron capturados o asesinados." }
            ] },
          { pregunta: "La victoria de 1959 fue, ante todo…", etiqueta: "historiador",
            opciones: [
              { texto: "Política y moral: ~3.000 rebeldes no ganaron una guerra convencional a 40.000, ganaron una de legitimidad.", correcta: true, explicacion: "Correcto: el Estado batistiano se descompuso (Farber: walkover)." },
              { texto: "Una campaña militar convencional ganada por la aplastante superioridad de tropas y armamento del Ejército Rebelde.", correcta: false, explicacion: "El Ejército Rebelde era muy inferior en número (3.000 vs 40.000)." },
              { texto: "El resultado de una elección libre ganada por el M-26-7.", correcta: false, explicacion: "No hubo elección: Batista huyó el 1 de enero." },
              { texto: "Una invasión directa de Estados Unidos contra Batista.", correcta: false, explicacion: "EE. UU. impuso un embargo de armas, no una invasión." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Consolidación: la radicalización en espiral (1959–65)",
        html: `
          <p>En enero de 1959 el gobierno era una coalición de apariencia moderada (presidente Urrutia, primer ministro Miró Cardona, Fidel «solo» comandante en jefe). Duró semanas.</p>
          <ol class="escalera">
            <li><b>ene–mar 1959 · Juicios revolucionarios:</b> ~500 fusilamientos de batistianos. Popularísimos dentro de Cuba, escandalosos afuera.</li>
            <li><b>17 may 1959 · 1.ª Reforma Agraria:</b> límite de 402 ha, INRA. Toca los intereses estadounidenses: el punto de no retorno con Washington.</li>
            <li><b>jul–oct 1959 · Caen los moderados:</b> Urrutia renuncia forzado; Huber Matos recibe 20 años por denunciar la infiltración comunista. <b>La purga de Matos es anterior al embargo y a la alianza soviética.</b></li>
            <li><b>1960 · La espiral con EE. UU.:</b> Mikoyan; refinerías → nacionalización; EE. UU. corta la cuota → Cuba nacionaliza ~$1.000 M → embargo parcial. Nacen los CDR; muere la prensa independiente.</li>
            <li><b>1961 · El año que define todo:</b> ruptura con EE. UU.; Girón (1.400 exiliados derrotados en 72 h); Castro declara el «carácter socialista»; en diciembre, «soy marxista-leninista».</li>
            <li><b>1962 · Crisis de los Misiles:</b> la URSS retira los misiles sin consultar a Castro, a cambio de la promesa de no invadir (garantía de supervivencia).</li>
            <li><b>1961–65 · Partido único:</b> ORI → PURSC → PCC (1965), con Fidel de primer secretario; el viejo PSP, absorbido y purgado.</li>
          </ol>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>El gran debate cubano: ¿la radicalización fue elegida o forzada?</b> La <b>tesis del asedio</b> (Gott, en parte Pérez-Stable): la hostilidad de EE. UU. (cuota, sabotajes, Girón, Operación Mangosta) no dejó a la revolución más opción que el bloque soviético. La <b>tesis de la decisión</b> (Farber, y desde la derecha Hugh Thomas): la cronología muestra voluntad de monopolio antes de la presión máxima (Matos preso en oct 1959, elecciones nunca convocadas, prensa cerrada en 1960); el conflicto fue real pero también funcional (el enemigo externo justificaba la unanimidad interna).</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La respuesta de banda alta no elige entre asedio y decisión: muestra que presión externa y decisión interna se retroalimentaron, con la purga de Huber Matos (octubre de 1959) como evidencia de la segunda y Girón (abril de 1961) como evidencia de la primera.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué la purga de Huber Matos (oct 1959) es «una joya» para los ensayos?", etiqueta: "fecha",
            opciones: [
              { texto: "Porque es anterior al embargo y a la alianza soviética: evidencia de decisión interna.", correcta: true, explicacion: "Correcto: apoya la tesis de Farber (decisión, no solo asedio)." },
              { texto: "Porque fue la primera victoria militar de la revolución sobre una invasión de Estados Unidos.", correcta: false, explicacion: "Esa fue Girón (1961); Matos fue una purga interna." },
              { texto: "Porque Matos logró derrocar a Castro ese mismo año.", correcta: false, explicacion: "Matos fue condenado a 20 años; no derrocó a nadie." },
              { texto: "Porque marcó el inicio del Período Especial.", correcta: false, explicacion: "El Período Especial empieza con el colapso soviético (1989–93)." }
            ] },
          { pregunta: "La respuesta «de banda alta» al debate de la radicalización…", etiqueta: "historiador",
            opciones: [
              { texto: "Muestra que presión externa (Girón) y decisión interna (Matos) se retroalimentaron.", correcta: true, explicacion: "Correcto: no elige entre asedio y decisión; integra ambas." },
              { texto: "Afirma que todo fue culpa exclusiva del bloqueo estadounidense y de los planes de la CIA.", correcta: false, explicacion: "Esa es solo la tesis del asedio (Gott), una de las dos caras." },
              { texto: "Afirma que la dictadura no tuvo ninguna relación con EE. UU.", correcta: false, explicacion: "El conflicto con EE. UU. fue real y decisivo (Girón)." },
              { texto: "Sostiene que la radicalización nunca ocurrió realmente.", correcta: false, explicacion: "La radicalización es un hecho: la cronología 1959–65 lo muestra." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Mantenimiento: los instrumentos del poder",
        html: `
          <h3>Las cuatro columnas del régimen maduro</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Columna</th><th>Qué era</th><th>Dato clave</th></tr></thead>
            <tbody>
              <tr><td>Partido único (PCC)</td><td>«Fuerza dirigente superior de la sociedad y del Estado» (Constitución de 1976); Poder Popular con candidaturas filtradas.</td><td>Participación sin pluralismo.</td></tr>
              <tr><td>Organizaciones de masas</td><td>CDR (vigilancia + vacunación, alfabetización, distribución), FMC, central sindical única (CTC), ANAP, estudiantes.</td><td>CDR: de 800.000 (1961) a millones; uno por cuadra.</td></tr>
              <tr><td>FAR (Raúl Castro)</td><td>Columna vertebral del Estado, con proyección internacional que dio prestigio y peso propio.</td><td>Hasta 50.000 soldados en Angola (1975–91, Cuito Cuanavale) y Etiopía (1977).</td></tr>
              <tr><td>Seguridad del Estado (G2)</td><td>MININT desde 1961, heredera técnica del aprendizaje soviético.</td><td>Informantes en cada centro de trabajo.</td></tr>
            </tbody>
          </table></div>

          <h3>El repertorio represivo cambió con las décadas</h3>
          <ul>
            <li><b>Años sesenta (fase dura):</b> guerra sucia contra los alzados del Escambray (1960–65), 15.000–20.000 presos políticos, las UMAP (1965–68, campos de trabajo para homosexuales, religiosos y «desafectos»).</li>
            <li><b>Décadas posteriores (selectiva y «blanda»):</b> actos de repudio, despidos, vigilancia, cárcel para los organizados (Primavera Negra de 2003: 75 disidentes con hasta 28 años).</li>
            <li><b>La herramienta más original, la emigración como válvula:</b> Camarioca (1965), Vuelos de la Libertad (1965–73, 260.000), Mariel (1980: 125.000), balseros (1994, ~35.000). Más de un millón de cubanos se fueron.</li>
          </ul>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Domínguez</b>: las organizaciones de masas eran a la vez instrumentos de control y canales reales de participación y movilidad; por eso millones se integraron sin sentirse solo vigilados. <b>Farber</b> responde: participación sin poder de decisión es movilización, no ciudadanía. Juicio para «tratamiento de la oposición»: eficacia altísima con letalidad comparativamente baja: la combinación de represión selectiva, encuadramiento total y válvula migratoria dejó a la oposición interna sin masa, sin organización y sin dirigentes.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Mientras el régimen nazi destruyó a su oposición, el cubano la exportó: Mariel (125.000 en 1980) y más de un millón de exiliados convirtieron a la oposición potencial en una diáspora sin poder interno.»</div>
        `,
        miniQuiz: [
          { pregunta: "Según Domínguez, las organizaciones de masas cubanas eran…", etiqueta: "historiador",
            opciones: [
              { texto: "A la vez vigilancia y canales reales de participación y movilidad.", correcta: true, explicacion: "Correcto: por eso la gente se integró en lugar de solo obedecer." },
              { texto: "Solo instrumentos de represión policial, sin ninguna función social ni de participación.", correcta: false, explicacion: "Domínguez subraya justamente su doble carácter (control + participación)." },
              { texto: "Órganos de oposición al régimen tolerados por Castro.", correcta: false, explicacion: "Estaban subordinadas al partido, no eran oposición." },
              { texto: "Copias exactas de la Gestapo alemana.", correcta: false, explicacion: "El control cubano era de encuadramiento masivo, muy distinto de la Gestapo." }
            ] },
          { pregunta: "La «herramienta más original» de la represión cubana fue…", etiqueta: "concepto",
            opciones: [
              { texto: "La emigración como válvula: Mariel 1980, >1 M de exiliados.", correcta: true, explicacion: "Correcto: cada crisis se descomprimía exportando descontentos." },
              { texto: "El exterminio masivo de opositores en campos de la muerte.", correcta: false, explicacion: "La letalidad fue comparativamente baja; no hubo exterminio." },
              { texto: "La invasión de países vecinos para distraer a la población.", correcta: false, explicacion: "Angola/Etiopía dieron prestigio, no eran válvula represiva interna." },
              { texto: "La prohibición total de la radio y la televisión.", correcta: false, explicacion: "Los medios eran monopolio estatal, no estaban prohibidos." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Mantenimiento: carisma, propaganda y legitimidad",
        html: `
          <p>El estilo de dominación de Castro fue el carisma en ejercicio permanente: discursos de cuatro, seis, ocho horas en la Plaza de la Revolución, la «conversación con el pueblo» televisada, la presencia física en cada zafra, ciclón o crisis. Los medios fueron monopolio estatal desde 1960 (Granma, órgano oficial desde 1965).</p>

          <div class="caja kiss"><span class="caja-et">KISS</span> Dos rasgos distinguen este culto del nazi y valen oro en un compare-contraste: <b>(1)</b> Castro prohibió estatuas, monumentos y calles con su nombre en vida: el panteón oficial son Martí, los mambises y el Che («Seremos como el Che»). El culto se construyó por <b>delegación simbólica</b>. <b>(2)</b> Su combustible no eran las victorias militares sino el <b>asedio</b>: el embargo, Girón y los planes de la CIA permitían presentar cada penuria como agresión externa.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El dato más notable del caso es que el carisma castrista sobrevivió a la catástrofe económica de los noventa, cuando el "mito de Hitler" no sobrevivió a dos inviernos rusos: el de Hitler era condicional a las victorias; el de Castro, alimentado por el asedio, convertía cada año de supervivencia en una victoria.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Balfour</b>: el carisma como recurso político deliberado; Castro gestionó su imagen (uniforme verde oliva, barba, discurso-maratón) como una institución del Estado. <b>Kapcia</b> desplaza el foco del hombre al sistema: una «cultura de la revolución» (mitos, moral del sacrificio) internalizada por organizaciones y generaciones, que explica por qué el régimen no cayó ni en 1991 ni en 2006–08: el carisma estaba rutinizado en instituciones. Juicio para «el liderazgo carismático fue la clave del mantenimiento»: clave sí, autosuficiente no: sin los logros sociales, el aparato de control y el enemigo externo, el carisma habría sido un estilo, no un sistema.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué distingue el culto castrista del culto nazi, según el PDF?", etiqueta: "concepto",
            opciones: [
              { texto: "Castro prohibió estatuas y calles con su nombre: culto por delegación simbólica (Martí, el Che).", correcta: true, explicacion: "Correcto: el culto nazi era organizado y directo; el cubano, delegado." },
              { texto: "El culto castrista se basaba en estatuas gigantes de Fidel erigidas en cada plaza y escuela del país.", correcta: false, explicacion: "Es lo contrario: prohibió monumentos a sí mismo en vida." },
              { texto: "Castro no usó nunca la propaganda ni los medios estatales.", correcta: false, explicacion: "Los medios eran monopolio estatal (Granma, ICAIC)." },
              { texto: "El culto cubano dependía de victorias militares como el de Hitler.", correcta: false, explicacion: "Al revés: el combustible de Castro era el asedio, no las victorias." }
            ] },
          { pregunta: "Según Kapcia, ¿por qué sobrevivió el régimen a 1991 y a 2006?", etiqueta: "historiador",
            opciones: [
              { texto: "Porque el carisma estaba rutinizado en instituciones: una «cultura de la revolución».", correcta: true, explicacion: "Correcto: «sistema, no solo Fidel»." },
              { texto: "Porque Fidel gobernó personalmente cada decisión del Estado hasta su muerte en 2016, sin delegar jamás.", correcta: false, explicacion: "Justamente se retiró en 2006–08 y el régimen no cayó." },
              { texto: "Porque EE. UU. levantó el embargo en los noventa.", correcta: false, explicacion: "El embargo siguió; el apoyo externo vino de Venezuela desde 2000." },
              { texto: "Porque el carisma personal era totalmente autosuficiente.", correcta: false, explicacion: "El PDF dice lo contrario: clave sí, autosuficiente no." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Políticas: economía (la dependencia que cambió de dueño)",
        html: `
          <p><b>Objetivos declarados:</b> acabar con la dependencia de EE. UU., diversificar saliendo del monocultivo azucarero, industrializar e igualar. La historia económica son tres estrategias sucesivas, todas fallidas en lo estructural.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Etapa</th><th>Qué se hizo</th><th>Resultado</th></tr></thead>
            <tbody>
              <tr><td>1959–63 · Ruptura voluntarista</td><td>Dos reformas agrarias (402 ha → 67 ha, Estado ~70% de la tierra), nacionalización de industria, banca y comercio; el Che intenta industrializar y reducir el azúcar.</td><td>Zafra cae a 3,8 M t (1963); fábricas sin insumos ni técnicos (dos tercios de los médicos emigraron); libreta de racionamiento (1962, «transitoria»… medio siglo).</td></tr>
              <tr><td>1964–70 · Vuelta al azúcar</td><td>Precios preferenciales soviéticos; la Zafra de los Diez Millones (1970).</td><td>8,5 M t: récord histórico y <b>fracaso oficial</b>. Castro ofrece renunciar. Fin del voluntarismo guevarista.</td></tr>
              <tr><td>1972–86 · La década soviética</td><td>COMECON (1972), planificación (SDPE 1976); subsidio gigante (azúcar a 4–5× el precio mundial).</td><td>$4.000–5.000 M anuales en los ochenta. En 1989 el azúcar seguía siendo ~75% de las exportaciones.</td></tr>
              <tr><td>1990–2008 · Período Especial</td><td>Colapso soviético: PIB −35% (1989–93); liberalización mínima (dólar, cuentapropismo 1993, mercados 1994); turismo.</td><td>El régimen sobrevive; desde 2000 el petróleo venezolano reconstruye el patrocinio externo.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>El Che y el «hombre nuevo»:</b> como ministro de Industrias defendió los «incentivos morales» (trabajo voluntario como pedagogía comunista) contra los incentivos materiales. El debate marcó la primera etapa económica.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El dato demoledor: en 1989, tras treinta años de "diversificación", el azúcar seguía siendo el ~75% de las exportaciones. La dependencia no se había curado: había cambiado de acreedor, de Estados Unidos a la URSS y después a Venezuela.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Pérez-Stable</b>: la paradoja central: las políticas que garantizaban la igualdad y la lealtad eran las mismas que destruían la productividad; el régimen eligió sistemáticamente legitimidad sobre eficiencia. <b>Farber</b> agrega la dimensión política del fracaso: sin sindicatos libres, prensa ni crítica, los errores (la Zafra, la Rectificación) no tenían mecanismo de corrección. Juicio: cierto en lo estructural (ni diversificación ni independencia), falso en lo político-social (igualdad y empleo); lograron los objetivos que sostenían el poder y fracasaron en los que requerían autonomía.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué fue la Zafra de los Diez Millones (1970)?", etiqueta: "fecha",
            opciones: [
              { texto: "La apuesta de cosechar 10 M t de azúcar: salieron 8,5 M (récord y fracaso oficial).", correcta: true, explicacion: "Correcto: desorganizó el resto de la economía; marcó el fin del voluntarismo guevarista." },
              { texto: "El plan que diversificó con éxito la economía fuera del azúcar hacia la industria pesada.", correcta: false, explicacion: "Al contrario: fue una apuesta total AL azúcar, y fracasó en su meta." },
              { texto: "El acuerdo de ingreso al COMECON en 1970.", correcta: false, explicacion: "El COMECON fue en 1972; la Zafra es de 1970." },
              { texto: "La campaña que redujo el analfabetismo al 3,9%.", correcta: false, explicacion: "Eso fue la Campaña de Alfabetización de 1961." }
            ] },
          { pregunta: "El «dato demoledor» de la economía cubana es que en 1989…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El azúcar seguía siendo ~75% de las exportaciones: la dependencia cambió de acreedor.", correcta: true, explicacion: "Correcto: de EE. UU. a la URSS a Venezuela; nunca se diversificó." },
              { texto: "Cuba ya era una potencia industrial autosuficiente que había superado por completo el monocultivo.", correcta: false, explicacion: "La industrialización fracasó; seguía dependiendo del azúcar y el subsidio." },
              { texto: "Cuba exportaba sobre todo turismo y tecnología.", correcta: false, explicacion: "El turismo superó al azúcar recién hacia 2000." },
              { texto: "El azúcar había desaparecido de las exportaciones.", correcta: false, explicacion: "Seguía siendo el ~75%: el monocultivo persistía." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Políticas: sociedad, mujeres, raza, religión",
        html: `
          <h3>Políticas sociales: el gran éxito y su precio</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Área</th><th>Medida</th><th>Resultado / precio</th></tr></thead>
            <tbody>
              <tr><td>Educación</td><td>Campaña de Alfabetización (1961, ~268.000 brigadistas); escuelas nacionalizadas; gratuidad total; becas.</td><td>Analfabetismo 23% → 3,9% (UNESCO); matrícula universitaria ~15.000 → +200.000. Precio: «la universidad es para los revolucionarios».</td></tr>
              <tr><td>Salud</td><td>Policlínicos y, desde 1984, el médico de familia en cada barrio.</td><td>Mortalidad infantil ~60 → ~7 por mil (2000); esperanza de vida ~62 → ~76. Medicina como política exterior.</td></tr>
              <tr><td>Vivienda / ingreso</td><td>Reforma Urbana (1960): alquileres a la mitad, inquilinos en propietarios.</td><td>Desigualdad comprimida; déficit habitacional crónico.</td></tr>
              <tr><td>Raza</td><td>Abolición inmediata de la segregación de facto (1959).</td><td>Igualdad real, con dos límites (De la Fuente): prohibición de organización negra autónoma; reaparición de desigualdad con el turismo y las remesas de los noventa.</td></tr>
              <tr><td>Cultura</td><td>«Dentro de la Revolución, todo; contra la Revolución, nada» (1961): mecenazgo (Casa de las Américas, ICAIC) y censura.</td><td>Caso Padilla (1971) → «Quinquenio Gris»; costó buena parte de la intelectualidad internacional.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Gott</b> (lectura favorable): los indicadores sociales, únicos en América Latina, prueban que la revolución cumplió su promesa central y explican la resiliencia popular. <b>Farber</b> (y para la raza, <b>De la Fuente</b>) los audita: se financiaron con subsidio soviético, excluyeron toda autonomía (ni sindicatos, ni asociaciones negras, ni prensa) y se degradaron en los noventa. Juicio: sí, el cambio social más profundo y medible del mundo autoritario del siglo XX en su región, y ese es el contraste con la Volksgemeinschaft nazi: cambio real y universalista en Cuba, percibido y racialmente excluyente en Alemania; en ambos, pagado con la libertad.</div>

          <h3>Mujeres: la «revolución dentro de la revolución»</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La participación laboral femenina pasó del 13% (1953) a ~40% (años noventa), con la FMC (~3 millones de afiliadas), el aborto legal y gratuito (1965) y el Código de Familia (1975, que obligaba a compartir el trabajo doméstico); pero la "doble jornada" nunca cedió y el poder siguió siendo masculino: el Buró Político apenas conoció mujeres.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> La crítica (<b>Farber</b>; estudios de género) hace la distinción clave: el régimen emancipó a la mujer como trabajadora y madre para el Estado, no como sujeto político. Y esto permite la mejor conclusión del tema: cuando ideología y economía empujan juntas (Cuba), la política de género avanza; cuando chocan (Alemania), gana la economía; en ninguno de los dos casos el objetivo incluyó compartir el poder.</div>

          <h3>Religión: del Estado ateo al Papa en La Habana</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> Fases: expulsión de ~130 sacerdotes y escuelas nacionalizadas (1961); Estado ateo (Constitución de 1976); distensión (Fidel y la religión, 1985); Estado laico (reforma de 1992); visita de Juan Pablo II (1998). Como en Alemania, el intento de vaciar la esfera religiosa fracasó y terminó en coexistencia negociada: la diferencia es que el castrismo, más longevo, recorrió el ciclo completo de la hostilidad a la acomodación.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál fue el «gran éxito» social de la revolución, medible y certificado?", etiqueta: "fecha",
            opciones: [
              { texto: "La Campaña de Alfabetización de 1961: analfabetismo 23% → 3,9% (UNESCO).", correcta: true, explicacion: "Correcto: ~268.000 brigadistas; también salud (mortalidad infantil 60 → 7)." },
              { texto: "La diversificación de la economía fuera del azúcar lograda plenamente hacia el año 1961.", correcta: false, explicacion: "La diversificación fracasó; el éxito fue social, no económico-estructural." },
              { texto: "La Zafra de los Diez Millones, que superó su meta.", correcta: false, explicacion: "La Zafra fue un fracaso oficial (8,5 de 10 M)." },
              { texto: "La creación del Buró Político con mayoría de mujeres.", correcta: false, explicacion: "El Buró Político apenas conoció mujeres: el poder siguió siendo masculino." }
            ] },
          { pregunta: "Según Farber, la política de género cubana emancipó a la mujer…", etiqueta: "historiador",
            opciones: [
              { texto: "Como trabajadora y madre para el Estado, no como sujeto político.", correcta: true, explicacion: "Correcto: igualdad en la producción, subordinación en el poder." },
              { texto: "Como sujeto político pleno, con mayoría femenina en el Buró Político del partido.", correcta: false, explicacion: "El poder siguió siendo masculino; la FMC era correa del partido." },
              { texto: "Eliminando por completo la «doble jornada» doméstica.", correcta: false, explicacion: "La doble jornada nunca cedió, pese al Código de Familia." },
              { texto: "Prohibiéndole trabajar para que se quedara en el hogar.", correcta: false, explicacion: "Al revés: el empleo femenino subió del 13% al 40%." }
            ] }
        ]
      },

      {
        id: "s9", titulo: "9 · Transversal: frases listas y espejos con Hitler",
        html: `
          <h3>Los 12 datos espejo (lado Castro)</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dato de Castro</th><th>Espejo alemán</th><th>Qué prueban juntos</th></tr></thead>
            <tbody>
              <tr><td>Cuba sin depresión: renta alta pero analfabetismo rural 40% y 600.000 desocupados estacionales.</td><td>NSDAP 2,6% (1928) → 37,3% (1932) con 6 M de desempleados.</td><td>Crisis aguda como detonante (A) vs malestar estructural como contexto (C).</td></tr>
              <tr><td>Moncada 1953 fracasa → mito fundacional y «La historia me absolverá».</td><td>Putsch 1923 fracasa → estrategia de la legalidad.</td><td>Ambos convierten una derrota en capital político (en direcciones opuestas).</td></tr>
              <tr><td>Huida de Batista 1-1-1959 (ejército desmoralizado, EE. UU. lo soltó en 1958).</td><td>Nombramiento 30-1-1933 (Papen: «lo arrinconaremos»).</td><td>Ninguno «venció»: a uno le abandonaron el campo, al otro lo invitaron.</td></tr>
              <tr><td>Consolidación en ~6 años (Matos 1959 → Girón/«socialista» 1961 → PCC 1965).</td><td>Consolidación en 18 meses (Habilitante → Führer ago. 1934).</td><td>Desde la movilización y el conflicto externo (C) vs desde el aparato estatal (A).</td></tr>
              <tr><td>CDR: 800.000 miembros (1961), uno por cuadra.</td><td>Gestapo ~15.000 agentes; 80% denuncias.</td><td>El control se terceriza en la sociedad (Domínguez / Gellately).</td></tr>
              <tr><td>Crisis usada: Girón (abr. 1961).</td><td>Crisis usada: incendio del Reichstag (feb. 1933).</td><td>Ambos convierten una agresión en salto de radicalización.</td></tr>
              <tr><td>Alfabetización 23% → 3,9% (1961); mortalidad infantil 60 → 7; azúcar 75% en 1989.</td><td>Desempleo 6 M → <0,5 M (1938); autarquía fallida.</td><td>Ambos cumplen el objetivo que legitima y fallan el estructural.</td></tr>
              <tr><td>Mujeres: objetivo incorporarlas → empleo 13% → 40%.</td><td>Mujeres: objetivo sacarlas → empleo SUBE a 7,1 M.</td><td>Objetivos opuestos, mismo veredicto: decide la economía; el poder no se comparte.</td></tr>
              <tr><td>Prueba superada: Período Especial, PIB −35%; el carisma sobrevive.</td><td>Fin del consenso: Stalingrado 1943; el mito muere.</td><td>Consenso por nacionalismo + asedio (resiliente) vs por resultados (frágil).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Mnemotecnia de historiadores cubanos: «P-F-D-K»</b> → Pérez-Stable (NACIONALISMO), Farber (DECISIÓN), Domínguez (CONTROL + PARTICIPACIÓN), Kapcia/Balfour (SISTEMA, NO SOLO FIDEL). Y Gott vs Thomas (ASEDIO vs DICTADURA) de reserva para cerrar conclusiones.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Nunca cites textual entre comillas (riesgo de inventar); nunca los amontones («X, Y y Z dicen…»): <b>un historiador por argumento, dos enfrentados por párrafo clave</b>, y siempre cerrás vos con tu juicio. Fórmulas seguras: «Como sostiene X…», «Frente a X, Y subraya que…».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La diferencia clave de consolidación es que Castro llegó al poder desde la movilización y tardó seis años, usando el conflicto con Estados Unidos como motor de radicalización, mientras Hitler llegó desde el aparato estatal y lo blindó en dieciocho meses.»</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El contraste final del temario es el de las minorías: exterminio en Alemania, inclusión forzada en Cuba. Ambos subordinan la minoría al proyecto estatal, pero la diferencia moral es abismal y hay que decirla sin equivalencias falsas.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué prueban juntos la alfabetización cubana (3,9%) y el pleno empleo nazi (<0,5 M)?", etiqueta: "concepto",
            opciones: [
              { texto: "Que ambos regímenes cumplen el objetivo que los legitima y fallan el estructural.", correcta: true, explicacion: "Correcto: es uno de los «12 datos espejo» del PDF." },
              { texto: "Que los dos regímenes lograron una economía plenamente diversificada, autosuficiente y autárquica.", correcta: false, explicacion: "Los dos fallaron en lo estructural (autarquía / diversificación)." },
              { texto: "Que ambos tuvieron exactamente las mismas políticas sociales.", correcta: false, explicacion: "El contraste es fuerte: universalista en Cuba, excluyente en Alemania." },
              { texto: "Que ninguno de los dos logró ningún objetivo social.", correcta: false, explicacion: "Ambos lograron el objetivo social que los legitimaba." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "Enmienda Platt", dorso: "Apéndice (1901–1934) que daba a EE. UU. derecho de intervenir en Cuba, la base de Guantánamo y la supervisión de las finanzas. Origen del nacionalismo frustrado." },
    { id: "fc02", categoria: "concepto", frente: "M-26-7", dorso: "Movimiento 26 de Julio, por la fecha del asalto al Moncada (1953). El vehículo político de Castro." },
    { id: "fc03", categoria: "concepto", frente: "Sierra vs Llano", dorso: "Ala guerrillera-rural (Fidel, la «Sierra») vs ala cívico-urbana (el «Llano», Frank País). El fracaso de la huelga de abril de 1958 consolidó a la Sierra." },
    { id: "fc04", categoria: "concepto", frente: "INRA", dorso: "Instituto Nacional de Reforma Agraria (1959): se volvió un «gobierno paralelo». La 1.ª Reforma Agraria (402 ha) fue el punto de no retorno con Washington." },
    { id: "fc05", categoria: "concepto", frente: "CDR", dorso: "Comités de Defensa de la Revolución (1960): uno por cuadra, mezclan vigilancia con vacunación, alfabetización y distribución. De 800.000 (1961) a millones." },
    { id: "fc06", categoria: "concepto", frente: "Período Especial", dorso: "Crisis tras el colapso soviético (1989–93): PIB −35%, importaciones −75%, apagones, neuropatía de 1993. El carisma sobrevivió." },
    { id: "fc07", categoria: "concepto", frente: "«La historia me absolverá»", dorso: "El alegato de defensa de Castro tras el Moncada. Programa reformista (restaurar la Constitución de 1940): «todo menos comunista»." },
    { id: "fc08", categoria: "fecha", frente: "10 mar 1952", dorso: "Golpe de Batista: cancela elecciones y suspende la Constitución de 1940. Cierra la vía electoral: la chispa del surgimiento." },
    { id: "fc09", categoria: "fecha", frente: "26 jul 1953", dorso: "Asalto al Moncada (~135 hombres). Desastre militar, pero nace el M-26-7, los mártires y «La historia me absolverá»." },
    { id: "fc10", categoria: "fecha", frente: "2 dic 1956", dorso: "Desembarco del Granma (82 hombres, ~20 sobrevivientes) → Sierra Maestra." },
    { id: "fc11", categoria: "fecha", frente: "feb 1957", dorso: "Entrevista de Herbert Matthews (NYT): muestra vivo a Castro y lo presenta como reformista romántico. Propaganda magistral." },
    { id: "fc12", categoria: "fecha", frente: "1 ene 1959", dorso: "Batista huye con su fortuna. El Ejército Rebelde nunca pasó de ~3.000 vs 40.000: victoria política y moral." },
    { id: "fc13", categoria: "fecha", frente: "17 may 1959", dorso: "1.ª Reforma Agraria (402 ha, INRA): punto de no retorno con Washington." },
    { id: "fc14", categoria: "fecha", frente: "oct 1959", dorso: "Huber Matos, 20 años por denunciar la infiltración comunista. Purga ANTERIOR al embargo (evidencia de decisión interna)." },
    { id: "fc15", categoria: "fecha", frente: "17–19 abr 1961", dorso: "Girón / Bahía de Cochinos: 1.400 exiliados derrotados en 72 h. Castro declara el «carácter socialista»." },
    { id: "fc16", categoria: "fecha", frente: "1961 (alfabetización)", dorso: "Campaña de Alfabetización: analfabetismo 23% → 3,9% (268.000 brigadistas), certificado por UNESCO." },
    { id: "fc17", categoria: "fecha", frente: "oct 1962", dorso: "Crisis de los Misiles: la URSS retira los misiles sin consultar a Castro, a cambio de la garantía de no invasión (= supervivencia del régimen)." },
    { id: "fc18", categoria: "fecha", frente: "1970", dorso: "Zafra de los Diez Millones: 8,5 M t (récord y fracaso oficial). Fin del voluntarismo guevarista." },
    { id: "fc19", categoria: "causa-consecuencia", frente: "¿Por qué el golpe de 1952 detona la revolución?", dorso: "Transformó la ilegitimidad en ilegalidad: cerró la vía electoral. Castro agotó primero la vía legal y solo entonces tomó las armas." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué ganó Castro pese a 3.000 vs 40.000?", dorso: "La victoria fue política y moral: el Estado batistiano se descompuso (Farber: walkover) y Castro ganó la guerra de legitimidad (Balfour: factor Castro)." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "¿La radicalización fue elegida o forzada?", dorso: "Las dos: presión externa (Girón) y decisión interna (Matos preso en oct 1959, antes del embargo) se retroalimentaron." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "¿Por qué fracasó la economía en lo estructural?", dorso: "Ni diversificación ni independencia: en 1989 el azúcar seguía siendo ~75% de las exportaciones. La dependencia cambió de acreedor (EE. UU. → URSS → Venezuela)." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "¿Cómo neutralizó Cuba a la oposición?", dorso: "Represión selectiva + encuadramiento total + emigración como válvula (Mariel, >1 M de exiliados): la dejó sin masa, sin organización y sin dirigentes." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "¿Por qué sobrevivió el régimen al colapso soviético?", dorso: "El carisma estaba rutinizado en instituciones (Kapcia: «cultura de la revolución»); el nacionalismo y el asedio sostenían la legitimidad." },
    { id: "fc25", categoria: "historiador", frente: "Pérez-Stable (ancla: NACIONALISMO)", dorso: "1959 = explosión del nacionalismo frustrado desde 1898; el régimen eligió legitimidad sobre eficiencia." },
    { id: "fc26", categoria: "historiador", frente: "Farber (ancla: DECISIÓN)", dorso: "El partido único fue decisión propia, no solo asedio (Matos oct 1959). «Participación sin poder = movilización, no ciudadanía»." },
    { id: "fc27", categoria: "historiador", frente: "Domínguez (ancla: CONTROL + PARTICIPACIÓN)", dorso: "CDR, FMC, sindicatos: a la vez vigilancia y canales reales de participación y movilidad; por eso la gente se integró." },
    { id: "fc28", categoria: "historiador", frente: "Kapcia / Balfour (ancla: SISTEMA, NO SOLO FIDEL)", dorso: "La «cultura de la revolución» sobrevive al líder (ni 1991 ni 2006). Balfour: el carisma como recurso gestionado." },
    { id: "fc29", categoria: "historiador", frente: "Gott vs Thomas (ancla: ASEDIO vs DICTADURA)", dorso: "Gott: el bloqueo explica la deriva autoritaria. Thomas: la dictadura estaba desde 1959. Par para cerrar conclusiones." },
    { id: "fc30", categoria: "historiador", frente: "De la Fuente (raza)", dorso: "La igualdad racial fue real pero prohibió toda organización negra autónoma y se resquebrajó con el turismo y las remesas de los noventa." },
    { id: "fc31", categoria: "concepto", frente: "El culto castrista (dos rasgos)", dorso: "(1) Prohibió estatuas y calles con su nombre: culto por delegación (Martí, el Che). (2) Su combustible era el asedio, no las victorias." },
    { id: "fc32", categoria: "concepto", frente: "«Dentro de la Revolución, todo…»", dorso: "La política cultural (Castro, 1961): «Dentro de la Revolución, todo; contra la Revolución, nada». Mecenazgo + censura. Caso Padilla (1971)." },
    { id: "fc33", categoria: "concepto", frente: "«Revolución dentro de la revolución»", dorso: "La política de género: FMC (~3 M), aborto 1965, Código de Familia 1975. Empleo femenino 13% → 40%, pero el poder siguió masculino." },
    { id: "fc34", categoria: "concepto", frente: "La libreta de racionamiento", dorso: "Desde marzo de 1962, concebida como transitoria y vigente medio siglo. Síntoma del fracaso productivo." },
    { id: "fc35", categoria: "concepto", frente: "Médico de familia", dorso: "Desde 1984, en cada barrio. La mortalidad infantil cayó de ~60 a ~7 por mil; esperanza de vida ~62 → ~76. Salud como política exterior." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Cuál fue el acontecimiento decisivo del surgimiento?", etiqueta: "fecha",
      opciones: [
        { texto: "El golpe de Batista del 10 de marzo de 1952, que cerró la vía electoral.", correcta: true, explicacion: "Correcto: transformó la ilegitimidad en ilegalidad; Castro primero agotó la vía legal." },
        { texto: "La Campaña de Alfabetización de 1961.", correcta: false, explicacion: "Es una política posterior, de la fase de mantenimiento." },
        { texto: "La Crisis de los Misiles de octubre de 1962.", correcta: false, explicacion: "Es posterior y pertenece a la consolidación, no al surgimiento." },
        { texto: "El desembarco del Granma en diciembre de 1956, que abrió por sí solo la vía electoral cerrada.", correcta: false, explicacion: "Importante, pero el que «cierra las puertas» es el golpe de 1952." }
      ] },
    { pregunta: "El asalto al Moncada (1953) fue, militarmente, un desastre, pero…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Produjo un nombre (M-26-7), mártires y el texto «La historia me absolverá».", correcta: true, explicacion: "Correcto: Castro convirtió una derrota en mito fundacional (Balfour)." },
        { texto: "Derrocó a Batista e instaló de inmediato un gobierno comunista alineado con Moscú en 1953.", correcta: false, explicacion: "Fue un fracaso militar; Batista cae en 1959 y el giro comunista es posterior." },
        { texto: "Consiguió el apoyo abierto de la Unión Soviética.", correcta: false, explicacion: "El programa era «todo menos comunista»; la URSS entra después de 1959." },
        { texto: "Permitió tomar el control del ejército cubano.", correcta: false, explicacion: "La mayoría de los atacantes fueron capturados o asesinados." }
      ] },
    { pregunta: "¿Por qué dice el PDF que la victoria de 1959 fue más política que militar?", etiqueta: "historiador",
      opciones: [
        { texto: "Porque ~3.000 rebeldes no vencieron a 40.000, sino que el Estado batistiano se descompuso.", correcta: true, explicacion: "Correcto: Farber habla de victoria «por walkover»; nadie quiso morir por Batista." },
        { texto: "Porque Castro ganó unas elecciones libres con amplia mayoría supervisadas por observadores de la OEA.", correcta: false, explicacion: "No hubo elecciones: Batista huyó el 1 de enero." },
        { texto: "Porque la URSS invadió Cuba para imponer a Castro.", correcta: false, explicacion: "No hubo invasión soviética; la URSS entra después." },
        { texto: "Porque el Ejército Rebelde superaba en número al de Batista.", correcta: false, explicacion: "Era muy inferior: ~3.000 contra 40.000." }
      ] },
    { pregunta: "La purga de Huber Matos (oct 1959) sirve para argumentar que…", etiqueta: "historiador",
      opciones: [
        { texto: "El monopolio del poder fue decisión interna anterior al embargo (Farber).", correcta: true, explicacion: "Correcto: es la evidencia estrella de la tesis de la decisión." },
        { texto: "La radicalización se debió solo a la agresión de EE. UU., iniciada ya con el embargo total de 1959.", correcta: false, explicacion: "Matos es anterior al embargo; apoya la tesis contraria (decisión interna)." },
        { texto: "Matos derrocó a Castro y gobernó brevemente en 1959.", correcta: false, explicacion: "Matos fue condenado a 20 años; no derrocó a nadie." },
        { texto: "EE. UU. apoyó la purga de los moderados.", correcta: false, explicacion: "EE. UU. era hostil; no apoyó las purgas internas." }
      ] },
    { pregunta: "¿Qué papel jugó Girón / Bahía de Cochinos (1961)?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Fue la primera derrota militar de EE. UU. en América Latina y dio un capital de legitimidad casi inagotable.", correcta: true, explicacion: "Correcto: la víspera Castro declaró el «carácter socialista» de la revolución." },
        { texto: "Fue la invasión directa del Ejército Rojo soviético que instaló por la fuerza el comunismo en toda Cuba durante 1961.", correcta: false, explicacion: "Fue un desembarco de exiliados apoyado por la CIA, no soviético." },
        { texto: "Marcó la caída de Batista y el triunfo de la revolución.", correcta: false, explicacion: "Batista ya había caído en 1959; Girón es de 1961." },
        { texto: "Obligó a Castro a abandonar el poder temporalmente.", correcta: false, explicacion: "Al contrario: reforzó su legitimidad y su giro socialista." }
      ] },
    { pregunta: "Según Domínguez, las organizaciones de masas (CDR, FMC) eran…", etiqueta: "historiador",
      opciones: [
        { texto: "A la vez vigilancia y canales reales de participación y movilidad social.", correcta: true, explicacion: "Correcto: por eso la gente se integró, no solo obedeció." },
        { texto: "Meros órganos de represión policial sin ninguna función social, calcados del modelo de la Gestapo.", correcta: false, explicacion: "Domínguez subraya su doble carácter (control + participación)." },
        { texto: "Sindicatos libres e independientes del partido.", correcta: false, explicacion: "Estaban subordinadas al partido; Farber: movilización, no ciudadanía." },
        { texto: "Partidos de oposición tolerados por el régimen.", correcta: false, explicacion: "No había oposición legal: el PCC era partido único." }
      ] },
    { pregunta: "¿Qué distingue el culto de Castro del de Hitler?", etiqueta: "concepto",
      opciones: [
        { texto: "Castro prohibió estatuas y calles con su nombre (culto por delegación) y se alimentaba del asedio, no de victorias.", correcta: true, explicacion: "Correcto: por eso su carisma sobrevivió al Período Especial." },
        { texto: "Castro no usó nunca los medios ni la propaganda estatal.", correcta: false, explicacion: "Los medios eran monopolio estatal (Granma, ICAIC)." },
        { texto: "El culto castrista dependía de desfiles de victorias militares como el nazi, exhibidas cada año en la Plaza de la Revolución de La Habana ante el pueblo.", correcta: false, explicacion: "Al revés: su combustible era el asedio, no las victorias." },
        { texto: "Castro erigió estatuas gigantes de sí mismo como Hitler.", correcta: false, explicacion: "Prohibió monumentos a sí mismo en vida." }
      ] },
    { pregunta: "El «dato demoledor» de la economía cubana es que…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "En 1989 el azúcar seguía siendo ~75% de las exportaciones: la dependencia cambió de acreedor.", correcta: true, explicacion: "Correcto: de EE. UU. a la URSS a Venezuela; nunca se diversificó." },
        { texto: "Cuba se volvió para 1970 una potencia industrial autosuficiente que ya exportaba maquinaria pesada a toda la región.", correcta: false, explicacion: "La industrialización fracasó; seguía dependiendo del azúcar." },
        { texto: "El turismo superó al azúcar ya en los años sesenta.", correcta: false, explicacion: "El turismo superó al azúcar recién hacia 2000." },
        { texto: "La Zafra de los Diez Millones cumplió su meta en 1970.", correcta: false, explicacion: "Fue un fracaso oficial: 8,5 de 10 millones." }
      ] },
    { pregunta: "¿Cómo se evalúan los logros sociales de la revolución en banda alta?", etiqueta: "concepto",
      opciones: [
        { texto: "Reales y medibles (alfabetización 3,9%, mortalidad infantil 7/1.000), pero pagados con subsidio y libertad.", correcta: true, explicacion: "Correcto: Gott los celebra, Farber y De la Fuente los auditan." },
        { texto: "Totalmente inventados por la propaganda del régimen y desmentidos después por organismos internacionales independientes.", correcta: false, explicacion: "La UNESCO certificó la alfabetización; los indicadores eran reales." },
        { texto: "Un éxito completo sin ningún costo ni límite.", correcta: false, explicacion: "Se financiaron con subsidio soviético y excluyeron toda autonomía." },
        { texto: "Irrelevantes porque el azúcar seguía siendo el 75% de las exportaciones.", correcta: false, explicacion: "El fracaso económico-estructural no anula el éxito social medible." }
      ] },
    { pregunta: "La política de género cubana, según Farber, emancipó a la mujer…", etiqueta: "historiador",
      opciones: [
        { texto: "Como trabajadora y madre para el Estado, no como sujeto político.", correcta: true, explicacion: "Correcto: igualdad en la producción, subordinación en el poder, machismo en casa." },
        { texto: "Como sujeto político pleno, con mayoría femenina en el Buró Político desde el primer congreso del PCC.", correcta: false, explicacion: "El Buró Político apenas conoció mujeres." },
        { texto: "Devolviéndola al hogar, igual que la política nazi.", correcta: false, explicacion: "Al revés: el empleo femenino subió del 13% al 40%." },
        { texto: "Creando un movimiento feminista autónomo del partido.", correcta: false, explicacion: "La FMC era la correa del partido, no un movimiento autónomo." }
      ] },
    { pregunta: "¿Cómo trató Cuba a la religión a lo largo del tiempo?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "De la hostilidad (Estado ateo 1976) a la acomodación (Estado laico 1992, Papa 1998).", correcta: true, explicacion: "Correcto: como en Alemania, el intento de vaciar lo religioso fracasó." },
        { texto: "Con una tolerancia total y constante desde 1959.", correcta: false, explicacion: "En los sesenta hubo expulsiones y UMAP para religiosos." },
        { texto: "Eliminando por completo y para siempre toda práctica religiosa mediante el cierre definitivo de iglesias.", correcta: false, explicacion: "La religiosidad popular nunca desapareció." },
        { texto: "Aliándose con la Iglesia católica desde el primer día.", correcta: false, explicacion: "La Iglesia se enfrentó al régimen en 1959–61." }
      ] },
    { pregunta: "La diferencia de consolidación entre Castro y Hitler es que…", etiqueta: "concepto",
      opciones: [
        { texto: "Castro consolidó en ~6 años desde la movilización y el conflicto externo; Hitler en 18 meses desde el aparato estatal.", correcta: true, explicacion: "Correcto: distinto ritmo y distinto motor." },
        { texto: "Ambos consolidaron su poder en exactamente dieciocho meses empleando el mismo método del aparato estatal y la ley habilitante.", correcta: false, explicacion: "Castro tardó ~6 años; el método fue distinto." },
        { texto: "Hitler tardó seis años y Castro dieciocho meses.", correcta: false, explicacion: "Es al revés: Hitler 18 meses, Castro ~6 años." },
        { texto: "Ninguno de los dos consolidó realmente el poder.", correcta: false, explicacion: "Ambos lo consolidaron plenamente." }
      ] },
    { pregunta: "¿Cómo conviene presentar el contraste de minorías Castro/Hitler?", etiqueta: "trampa",
      opciones: [
        { texto: "Inclusión forzada en Cuba vs exterminio en Alemania, sin equivalencias falsas.", correcta: true, explicacion: "Correcto: ambos subordinan la minoría al Estado, pero la diferencia moral es abismal." },
        { texto: "Como dos genocidios de igual magnitud y naturaleza.", correcta: false, explicacion: "Falso: no hubo exterminio en Cuba; la diferencia moral es abismal." },
        { texto: "Omitiendo el tema porque no entra en Paper 2.", correcta: false, explicacion: "La política de minorías entra en «políticas y resultados»." },
        { texto: "Afirmando que Cuba fue incluso más racista y genocida con sus minorías que la Alemania nazi.", correcta: false, explicacion: "Es indefendible: Cuba abolió la segregación en 1959." }
      ] },
    { pregunta: "¿Por qué el régimen sobrevivió al colapso soviético (Período Especial)?", etiqueta: "historiador",
      opciones: [
        { texto: "El carisma estaba rutinizado en instituciones (Kapcia) y el nacionalismo + asedio sostenían la legitimidad.", correcta: true, explicacion: "Correcto: por eso el carisma castrista resistió donde el «mito de Hitler» no." },
        { texto: "Porque EE. UU. levantó el embargo y envió ayuda.", correcta: false, explicacion: "El embargo siguió; el apoyo vino de Venezuela desde 2000." },
        { texto: "Porque la economía ya era autosuficiente en 1989.", correcta: false, explicacion: "Dependía del subsidio soviético; el PIB cayó 35%." },
        { texto: "Porque Fidel gobernó personalmente cada decisión del Estado sin delegar nunca en Raúl ni en el partido comunista.", correcta: false, explicacion: "Se retiró en 2006–08 y el régimen igual no cayó." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Examine las condiciones que explican el surgimiento de un estado autoritario (Castro y Hitler).", frecuencia: "Muy alta",
        plan: "Capas: estructural (Platt, desigualdad, nacionalismo frustrado / Versalles, Weimar), coyuntural (golpe de 1952 / Depresión), personal (métodos, colapso del adversario). Pérez-Stable / Kershaw." },
      { pregunta: "¿En qué medida fue decisivo el uso de la fuerza en el ascenso de Castro?", frecuencia: "Muy alta",
        plan: "Central pero simbólica: Moncada, Granma, Sierra; 3.000 vs 40.000; Santa Clara. La fuerza ganó legitimidad, no batallas: el ejército se desmoronó. Farber: descomposición del Estado." },
      { pregunta: "¿La radicalización de la revolución fue elegida o forzada por Estados Unidos?", frecuencia: "Muy alta",
        plan: "Asedio (Gott): cuota, Girón, Mangosta. Decisión (Farber): Matos oct 1959, prensa 1960. Banda alta: se retroalimentaron. Girón (externa) + Matos (interna)." },
      { pregunta: "¿Lograron sus objetivos las políticas económicas del régimen cubano?", frecuencia: "Alta",
        plan: "Estructural (diversificación, independencia): no; azúcar 75% en 1989. Poder (igualdad, empleo): sí. Pérez-Stable: legitimidad sobre eficiencia. Veredicto: lograron los del poder." },
      { pregunta: "Examine el tratamiento de la oposición por parte de un estado autoritario.", frecuencia: "Alta",
        plan: "Represión selectiva (Escambray, UMAP, Primavera Negra) + encuadramiento (CDR) + emigración como válvula (Mariel, >1 M). Contraste: Cuba la exporta, Alemania la destruye. Domínguez vs Farber." },
      { pregunta: "¿Fue el liderazgo carismático la clave del mantenimiento del poder?", frecuencia: "Media",
        plan: "Clave sí, autosuficiente no: Balfour (carisma gestionado) + Kapcia (rutinizado en sistema). Sin logros sociales, control y enemigo externo, habría sido un estilo, no un sistema." }
    ],
    planes: [
      { titulo: "Plan A · Examine las condiciones del surgimiento de la Cuba de Castro.",
        tesis: "Lo decisivo fue el cierre político de 1952 sobre un fondo de nacionalismo frustrado y desigualdad: condiciones estructurales de largo plazo + chispa coyuntural.",
        pasos: [
          "Estructurales: nacionalismo frustrado desde 1898 (Platt, 1912, 1933 traicionado); dependencia (~40% del azúcar y 90% de minas de EE. UU.); desigualdad (analfabetismo rural 40%).",
          "Coyuntural: el golpe del 10-3-1952 cierra la vía electoral (transforma la ilegitimidad en ilegalidad).",
          "El régimen previo: Batista gobernaba sin título; elecciones de 1954 y 1958 sin convencer; base estrecha (ejército corrupto, SIM).",
          "Pérez-Stable (nacionalismo) vs Farber (sin el golpe había cauces reformistas).",
          "Conclusión: condiciones de largo plazo + cierre político de 1952 = revolución."
        ] },
      { titulo: "Plan B · ¿En qué medida fue la fuerza decisiva en el ascenso de Castro?",
        tesis: "La fuerza fue el método central pero su eficacia fue simbólica y política: 3.000 contra 40.000 no ganan una guerra convencional, ganan una de legitimidad.",
        pasos: [
          "La fuerza como método: Moncada (1953), Granma (1956), Sierra, Santa Clara (1958).",
          "Pero su eficacia fue simbólica: cada derrota se volvió mito (Balfour: factor Castro); la propaganda (Matthews, Radio Rebelde) multiplicaba.",
          "Lo decisivo fue el colapso del adversario: Operación Verano fracasa, el ejército pierde la moral, EE. UU. suelta a Batista (1958).",
          "Farber: Castro ganó «por walkover»; el Estado batistiano se descompuso.",
          "Conclusión: la fuerza fue central como símbolo y método, no como superioridad militar."
        ] },
      { titulo: "Plan C · ¿La radicalización de la revolución fue elegida o forzada?",
        tesis: "No fue ni pura decisión ni puro asedio: la presión externa y la voluntad interna de monopolio se retroalimentaron.",
        pasos: [
          "Tesis del asedio (Gott): cuota cancelada, sabotajes, Girón, Operación Mangosta → el bloque soviético como única salida.",
          "Tesis de la decisión (Farber, Thomas): Matos preso (oct 1959, antes del embargo), elecciones nunca convocadas, prensa cerrada (1960).",
          "El conflicto fue real pero funcional: el enemigo externo justificaba la unanimidad interna.",
          "Evidencia equilibrada: Matos (interna) + Girón (externa).",
          "Conclusión: la radicalización fue un proceso de retroalimentación, no un hecho con causa única."
        ] },
      { titulo: "Plan D · ¿Lograron sus objetivos las políticas económicas cubanas?",
        tesis: "Lograron los objetivos que sostenían el poder (igualdad, empleo) y fracasaron en los que requerían autonomía (diversificación, independencia).",
        pasos: [
          "Objetivo estructural (diversificar, independizarse): fracaso; azúcar ~75% de las exportaciones en 1989; de EE. UU. a la URSS a Venezuela.",
          "Las tres estrategias fallidas: industrialización voluntarista (zafra 3,8 M, 1963), Zafra de los 10 M (1970), década soviética (subsidio $4–5 mil M).",
          "Objetivo de poder (igualdad, empleo): cumplido; base de legitimidad.",
          "Pérez-Stable: legitimidad sobre eficiencia; Farber: sin crítica libre no hay corrección de errores.",
          "Conclusión: «rara vez lograron sus objetivos» es excesivo: lograron los del poder y fallaron los estructurales."
        ] },
      { titulo: "Plan E · Examine el tratamiento de la oposición por parte del régimen cubano.",
        tesis: "El régimen combinó represión selectiva, encuadramiento total y emigración como válvula, dejando a la oposición sin masa, organización ni dirigentes.",
        pasos: [
          "Represión selectiva: Escambray (1960–65), 15.000–20.000 presos, UMAP (1965–68), Primavera Negra (2003, 75 condenados).",
          "Encuadramiento: CDR (800.000 en 1961), FMC, CTC; control tercerizado (Domínguez).",
          "Válvula migratoria: Camarioca, Vuelos de la Libertad (260.000), Mariel (125.000), balseros (~35.000); >1 M de exiliados.",
          "Domínguez (control + participación) vs Farber (movilización, no ciudadanía).",
          "Conclusión: eficacia altísima con letalidad baja; contraste con Alemania (que destruyó a su oposición)."
        ] },
      { titulo: "Plan F · ¿Fue el carisma la clave del mantenimiento del poder?",
        tesis: "El carisma fue una clave real pero no autosuficiente: sin los logros sociales, el aparato de control y el enemigo externo, habría sido un estilo, no un sistema.",
        pasos: [
          "El carisma en ejercicio: discursos-maratón, presencia física, culto por delegación (Martí, el Che).",
          "Balfour: el carisma como recurso político deliberado (imagen gestionada como institución).",
          "Kapcia: la «cultura de la revolución» rutinizó el carisma; el régimen no cayó ni en 1991 ni en 2006.",
          "Pilares complementarios: logros sociales, encuadramiento, enemigo externo (asedio).",
          "Conclusión: el carisma castrista sobrevivió al Período Especial donde el «mito de Hitler» no resistió Stalingrado, porque estaba institucionalizado."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida fue decisivo el uso de la fuerza en el ascenso de Castro?»",
        parrafos: [
          { texto: "La imagen heroica del Ejército Rebelde bajando de la Sierra Maestra invita a responder que la fuerza fue decisiva. Pero los números la desmienten: el Ejército Rebelde nunca pasó de unos 3.000 combatientes frente a los 40.000 de Batista. Tesis: la fuerza fue el método central del ascenso, pero su eficacia no fue militar sino simbólica y política: Castro no ganó una guerra convencional, ganó una guerra de legitimidad sobre un Estado que se descomponía por dentro.", nota: "Intro que concede la intuición y la corrige con la tesis y la cifra clave." },
          { texto: "La fuerza fue el método, y Castro la usó de un modo peculiar. El asalto al Moncada (1953) y el desembarco del Granma (1956) fueron desastres militares, pero cada derrota se convirtió en mito fundacional: «La historia me absolverá», los «doce» de la Sierra. Como subraya Balfour, el factor Castro fue su talento para convertir derrotas en capital político. Esto demuestra que la fuerza operaba sobre todo como símbolo.", nota: "Párrafo que sostiene «la fuerza como método simbólico» con evidencia e historiador (PEEL)." },
          { texto: "Lo verdaderamente decisivo, sin embargo, fue la descomposición del adversario. En 1958 la Operación Verano (10.000 soldados contra unos 300 guerrilleros) fracasó y quebró la moral del ejército; EE. UU. impuso un embargo de armas a Batista; y el 1 de enero de 1959 Batista simplemente huyó. Como sostiene Farber, Castro ganó en buena medida «por walkover»: el régimen se pudrió por dentro y nadie quiso morir por él. Por lo tanto, la fuerza rebelde no venció, ocupó un vacío.", nota: "Contraste central: el colapso del adversario pesó más que la fuerza propia." },
          { texto: "En conclusión, la fuerza fue decisiva solo en un sentido matizado: fue el método central y el generador de los mitos del régimen, pero no ganó batallas decisivas ni superó militarmente a Batista. Lo que decidió el ascenso fue la combinación del talento político de Castro para convertir la fuerza en legitimidad y la descomposición del Estado batistiano. La propaganda cosechó, y el adversario se derrumbó solo.", nota: "Conclusión con grado y jerarquía causal clara." }
        ] },
      { titulo: "Ensayo 2 · «¿Lograron sus objetivos las políticas económicas del régimen de Castro?»",
        parrafos: [
          { texto: "Las políticas económicas de Castro tenían dos clases de objetivos que conviene separar: los estructurales (acabar con la dependencia, diversificar fuera del azúcar, industrializar) y los de poder (igualdad y pleno empleo como base de legitimidad). Tesis: el régimen fracasó en los primeros y triunfó en los segundos, de modo que la afirmación de que «rara vez lograron sus objetivos» es, en realidad, demasiado gruesa: lograron los objetivos que sostenían el poder y fracasaron en los que requerían autonomía.", nota: "Intro que define dos clases de objetivos, condición para una respuesta con grado." },
          { texto: "En lo estructural, el fracaso es rotundo. Las tres estrategias sucesivas —la industrialización voluntarista del Che (zafra desplomada a 3,8 millones en 1963), la Zafra de los Diez Millones (1970: 8,5 millones, récord y fracaso oficial) y la década soviética— no diversificaron nada. El dato demoledor: en 1989, tras treinta años, el azúcar seguía siendo el ~75% de las exportaciones. La dependencia no se curó, cambió de acreedor: de Estados Unidos a la URSS y luego a Venezuela.", nota: "Fracaso estructural con tres evidencias fechadas y el dato estrella." },
          { texto: "En lo que sostenía el poder, en cambio, las políticas cumplieron. El pleno empleo estatal, el racionamiento y la gratuidad garantizaron la igualdad y la lealtad. Como señala Pérez-Stable, ésa es la paradoja central: las políticas que aseguraban la legitimidad eran las mismas que destruían la productividad; el régimen eligió sistemáticamente legitimidad sobre eficiencia. Farber añade que, sin prensa ni crítica, los errores no tenían mecanismo de corrección.", nota: "Éxito en los objetivos de poder con la paradoja de Pérez-Stable y el matiz de Farber." },
          { texto: "En conclusión, las políticas económicas cubanas lograron sus objetivos solo de forma asimétrica: cumplieron los objetivos políticos de igualdad y empleo que legitimaban al régimen, y fracasaron en los objetivos estructurales de independencia y diversificación. Es exactamente el mismo veredicto que el de la economía nazi —cumplir el objetivo que legitima y fallar el estructural—, con la diferencia de que el «milagro» cubano se sostuvo con subsidio soviético y el nazi con saqueo y guerra.", nota: "Conclusión asimétrica con grado y el espejo comparativo con Hitler." }
        ] }
    ],
    guia: {
      tesis: "Respondé con grado. Tesis maestra del caso Castro: «La revolución fue la explosión de un nacionalismo frustrado, detonada por el cierre de la vía electoral en 1952; Castro ganó una guerra de legitimidad y consolidó el poder en una espiral donde la presión de EE. UU. y su voluntad de monopolio se retroalimentaron.»",
      argumentos: [
        "Respetá las tres fases: surgimiento (1952–59), consolidación (1959–65), mantenimiento (el resto). El examinador penaliza mezclarlas.",
        "Cada párrafo comparativo: afirmación → dato de Hitler → dato de Castro → por qué difieren → historiador → mini-juicio.",
        "En «¿en qué medida?»: tesis con grado («en gran medida, pero…»; «solo en escasa medida, porque…»)."
      ],
      evidencia: [
        "Surgimiento: golpe 10-3-1952, Moncada 1953, Granma 1956 (82 → ~20), Operación Verano (10.000 vs ~300), Ejército Rebelde ~3.000 vs 40.000.",
        "Consolidación: Matos (oct 1959), nacionalizaciones (~$1.000 M, 1960), Girón (1961), «socialista» (1961), PCC (1965).",
        "Políticas: alfabetización 23% → 3,9% (1961), mortalidad infantil 60 → 7, azúcar 75% (1989), empleo femenino 13% → 40%, PIB −35% (1989–93)."
      ],
      historiografia: [
        "«P-F-D-K»: Pérez-Stable (nacionalismo frustrado / legitimidad sobre eficiencia), Farber (decisión / auditoría crítica), Domínguez (control + participación), Kapcia/Balfour (sistema / carisma gestionado).",
        "Regalo: Gott vs Thomas (asedio vs dictadura), De la Fuente (límites raciales).",
        "Un historiador por argumento, dos enfrentados por párrafo clave; nunca cites textual entre comillas; cerrá vos con tu juicio."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej. «todo fue culpa del bloqueo» o «la revolución fue un fracaso total») y refutala con evidencia (Matos antes del embargo; alfabetización y mortalidad infantil reales) que confirme tu tesis."
    }
  }
});
