/* ============================================================
   tema-t10-hitler.js — Paper 2 · Tema 10 (Estados autoritarios)
   Adolf Hitler · Alemania (1933–1945)
   Transcripción fiel de la guía "Tema10_en_profundidad_Hitler_Castro".
   No se agregan historiadores ni datos nuevos.
   Enfoque Paper 2: surgimiento · consolidación · políticas y resultados.
   ============================================================ */
window.registrarTema({
  id: "t10-hitler",
  carpeta: "p2-t10",
  titulo: "Adolf Hitler",
  subtitulo: "Alemania nazi · surgimiento, consolidación y políticas (1919–1945)",
  periodo: "Surgimiento 1919–1933 · poder 1933–1945",
  estado: "listo",
  etiquetas: ["estado autoritario", "Hitler", "nazismo", "Weimar", "Gleichschaltung", "totalitarismo", "intencionalistas vs estructuralistas", "Paper 2"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Hitler no «tomó» el poder: la Depresión le fabricó los votos (2,6% en 1928 → 37,3% en 1932), la democracia de Weimar ya estaba vaciada (gobierno por decreto) y un pequeño círculo de élites conservadoras lo «llevó al poder» creyendo que lo controlaría (Papen: «lo arrinconaremos hasta que chille»). Consolidó una dictadura pseudo-legal en 18 meses (Gleichschaltung), se sostuvo con consentimiento + coerción (no un Estado policial omnipotente), logró el objetivo que lo legitimaba (empleo) pero no el estructural (autarquía), y su «milagro» solo era sostenible con saqueo y guerra. El orden causal: crisis → votos, debilidad institucional → oportunidad, decisión de las élites → poder.",
    historiadoresLinea: [
      { nombre: "Kershaw", linea: "El «mito de Hitler»: carisma condicional a los éxitos; fue «llevado al poder» por las élites; los subordinados «trabajaban en dirección al Führer». Si recordás uno, que sea este." },
      { nombre: "Gellately", linea: "Consentimiento + coerción: Gestapo de ~15.000 agentes, ~80% de casos por denuncias ciudadanas; la sociedad se vigilaba sola. Desmiente la imagen del Estado policial omnipresente." },
      { nombre: "Mason (vs Overy)", linea: "Cuando ideología y economía chocaron, ganó la economía (mujeres al trabajo pese al KKK; «huida hacia la guerra» en 1939). Overy: no hubo crisis terminal, mandó la ideología." },
      { nombre: "Bracher (vs Mommsen)", linea: "Bracher (intencionalista): Hitler amo absoluto con plan. Mommsen (estructuralista): «dictador débil», policracia, «radicalización acumulativa». Nombrarlos como pareja ya cuenta como «perspectivas»." },
      { nombre: "De regalo", linea: "Childers (electorado «atrapa-todo»), Broszat (autocoordinación), Schoenbaum («revolución percibida, no estructural»), Evans (bajo el consenso siempre hubo coerción), Bullock (Hitler oportunista maquiavélico)." }
    ],
    datosClave: [
      { grupo: "Surgimiento (1919–1933): datos que valen oro", items: [
        "Versalles (28 jun 1919): art. 231 («cláusula de culpabilidad»), ejército de 100.000, reparaciones de 132.000 M de marcos oro.",
        "Hiperinflación de 1923: 1 dólar = 4,2 billones de marcos (nov); arruina a la clase media ahorrista.",
        "Putsch de Múnich (8–9 nov 1923): fracasa, 16 nazis muertos; Hitler cumple 9 meses, dicta Mein Kampf → «estrategia de la legalidad».",
        "Elecciones de 1928 (prosperidad): NSDAP 2,6% y 12 escaños. El dato que resume todo.",
        "Depresión: desempleo 1,3 M (1928) → 3 M (1930) → 6 M (1933); producción industrial −40%.",
        "NSDAP: 18,3% (1930) → 37,3% y 230 escaños (jul 1932, primer partido) → 33,1% (nov 1932). SA: 400.000. KPD: 100 escaños.",
        "30 ene 1933: Hitler canciller por procedimiento constitucional; gabinete de solo 3 nazis entre 11 ministros."
      ]},
      { grupo: "Consolidación y políticas (1933–1945): datos que valen oro", items: [
        "27–28 feb 1933: incendio del Reichstag → Decreto que suspende libertades. 5 mar: elecciones, 43,9% (sin mayoría).",
        "23 mar 1933: Ley Habilitante (444–94). Gleichschaltung completa en 18 meses.",
        "30 jun 1934: Noche de los Cuchillos Largos (Röhm; 85–200 muertos). 2 ago: muere Hindenburg → Führer; plebiscito 89,9%.",
        "Terror: Gestapo ~15.000 agentes para 65 M de habitantes; ~80% de casos por denuncias. Volksgerichtshof: ~16.000 penas de muerte.",
        "Economía: desempleo 6 M → <0,5 M (1938); gasto militar de ~1% del PNB (1933) a 17–23% (1938–39). Autarquía fallida (importaba ~1/3).",
        "Sociedad: KdF ~10 M de vacaciones (1938); Juventudes Hitlerianas 8,7 M (1939); radio en 70% de los hogares (1939).",
        "Mujeres: objetivo sacarlas del trabajo, pero el empleo SUBE de 4,85 M (1933) a 7,1 M (1939).",
        "Raza: Leyes de Núremberg (1935), Kristallnacht (9–10 nov 1938: 91 muertos), Wannsee (1942), ~6 M de judíos asesinados."
      ]}
    ],
    comparacion: [
      { eje: "Condiciones de surgimiento", texto: "Lo decisivo fue la incapacidad del régimen previo de ofrecer salida: art. 48 (66 decretos en 1932), 6 M de desempleados, élites desleales. Crisis aguda como detonante. (En Cuba: cierre político del golpe de 1952.)" },
      { eje: "Uso de la fuerza", texto: "Marginal: el Putsch fracasa; la SA de 400.000 solo intimida; el poder llega por nombramiento. (En Cuba la fuerza fue central pero simbólica.)" },
      { eje: "Consolidación", texto: "Desde arriba y desde el aparato estatal, en 18 meses: incendio → decreto → Habilitante → Cuchillos Largos → Führer. (En Cuba, ~6 años desde la movilización.)" },
      { eje: "Terror", texto: "Selectivo y tercerizado en la sociedad (80% de denuncias), pero con letalidad incomparable: genocidio, no represión selectiva + emigración." },
      { eje: "Economía", texto: "Logró el objetivo que legitimaba (empleo) y falló el estructural (autarquía: importaba 1/3 en 1939); sostenible solo con saqueo y guerra." }
    ],
    veredictos: [
      { titulo: "Cómo llegó", texto: "Hitler no venció en las urnas: fue «llevado al poder» por las élites (Kershaw). La crisis creó los votos, la debilidad institucional la oportunidad, la decisión de las élites entregó el poder." },
      { titulo: "Control total", texto: "La imagen de dictadura hipereficiente es propaganda del propio régimen: 15.000 agentes no vigilan a 65 millones (Gellately); el consenso era real pero condicional a los éxitos (Kershaw)." },
      { titulo: "Políticas y resultados", texto: "Éxito en lo que legitimaba (empleo, orgullo), fracaso en lo estructural (autarquía) y en lo social (clases intactas: «revolución percibida», Schoenbaum). Radical solo en la exclusión racial." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Ian Kershaw", nacionalidad: "Británico, biógrafo de Hitler",
      obra: "The Hitler Myth · Hitler (biografía) · «working towards the Führer»",
      postura: "Carisma condicional + «llevado al poder»",
      funcion: "Surgimiento, carisma, propaganda, estructura del régimen, mantenimiento. Sirve en casi todo.",
      ideaCentral: "El «mito de Hitler» separaba al Führer (honesto, sacrificado) del partido (corrupto): «si el Führer lo supiera…». El carisma fue una relación social (la gente desesperada proyectaba esperanzas sobre un salvador), no una técnica que lavara cerebros, y era condicional a los resultados. Hitler no tomó el poder: fue «llevado al poder» (levered into power) por las élites conservadoras. Y no necesitaba ordenarlo todo: fijaba la dirección ideológica y los subordinados competían por «trabajar en dirección al Führer».",
      matiz: "Media entre intencionalistas y estructuralistas: la ideología fijaba la dirección, la estructura caótica aceleraba el movimiento (clave para explicar la escalada antisemita).",
      fraseLista: "Como sostiene Kershaw, Hitler no tomó el poder sino que fue «llevado al poder» por unas élites que creían poder controlarlo, y su carisma fue un consenso condicional que se desinfló cuando los éxitos se acabaron en Stalingrado.",
      paraPreguntas: ["Surgimiento (papel de las élites)", "Carisma y propaganda (mantenimiento)", "Control total", "Política racial (síntesis)"]
    },
    {
      nombre: "Robert Gellately", nacionalidad: "Historiador del terror nazi",
      obra: "La Gestapo y la sociedad alemana · Backing Hitler",
      postura: "Consentimiento + coerción",
      funcion: "Oposición, «control total», fuerza vs propaganda.",
      ideaCentral: "El régimen se sostuvo sobre una mezcla de consentimiento y coerción, y la vigilancia fue en buena medida obra de la sociedad sobre sí misma. La Gestapo tenía ~15.000 agentes para 65 millones de habitantes; no controlaba vigilando, sino recibiendo denuncias: ~80% de los expedientes se iniciaban por denuncias de ciudadanos comunes (vecinos, colegas, parientes), muchas veces por rencillas privadas vestidas de patriotismo. El terror fue real y brutal, pero participativo y ampliamente aprobado.",
      matiz: "La propaganda funcionaba porque decía a muchos alemanes lo que querían oír (orden, empleo, orgullo), no porque lavara cerebros.",
      fraseLista: "Siguiendo a Gellately, «quince mil agentes no pueden vigilar a sesenta y cinco millones; el control fue posible porque millones de alemanes vigilaban por ellos»: el régimen se sostuvo sobre consentimiento tanto como sobre coerción.",
      paraPreguntas: ["Tratamiento de la oposición", "¿Fue un control total?", "Fuerza vs propaganda", "Por qué fracasó la oposición"]
    },
    {
      nombre: "Timothy Mason (vs Richard Overy)", nacionalidad: "Británico (debate económico)",
      obra: "Debate sobre la economía de rearme y la crisis de 1938–39",
      postura: "«La economía manda» (vs Overy: mandó la ideología)",
      funcion: "Políticas económicas, política hacia las mujeres, objetivos y resultados.",
      ideaCentral: "Cuando la ideología chocó con las necesidades de la economía de guerra, ganó la economía: las mujeres volvieron al trabajo pese al «Kinder, Küche, Kirche» (empleo femenino 4,85 M → 7,1 M), y hacia 1938–39 la economía de rearme había generado una crisis interna (escasez de mano de obra, presión salarial) que empujó a una «huida hacia adelante»: conquistar para no ajustar. Overy lo refuta con datos: no hubo crisis terminal; la guerra respondió al programa ideológico, el problema fue de calendario (Hitler apuntaba a 1943–45 y empezó en 1939).",
      matiz: "Overy advierte que donde la ideología no costaba nada (exclusión de la mujer del poder, propaganda maternal) se aplicó a rajatabla: no fue puro pragmatismo.",
      fraseLista: "Para Mason, la política nazi hacia la mujer era en el fondo política de mano de obra: cuando ideología y economía chocaron, ganó siempre la economía, como lo prueba el empleo femenino subiendo de 4,85 a 7,1 millones.",
      paraPreguntas: ["Políticas económicas (objetivos y resultados)", "Políticas hacia la mujer", "¿Lograron sus objetivos?"]
    },
    {
      nombre: "Karl D. Bracher (vs Hans Mommsen)", nacionalidad: "Alemán (debate intencionalismo/estructuralismo)",
      obra: "Intencionalismo (Bracher, Bullock, Hildebrand) vs estructuralismo (Mommsen, Broszat)",
      postura: "«Plan vs caos»",
      funcion: "Consolidación, «control total», política racial, estructura del régimen.",
      ideaCentral: "Bracher (intencionalista) lee el régimen desde arriba: Hitler tenía un programa (revisión, expansión, guerra racial) desde los años veinte y lo ejecutó; el caos administrativo era una técnica de «divide y reinarás». Mommsen (estructuralista) lee desde el sistema: habla de «policracia» (muchos centros de poder) y llega a llamar a Hitler «dictador débil», rehén de una dinámica que él mismo desató; la política se radicalizaba por «radicalización acumulativa», cada agencia proponiendo medidas más extremas para ganar la competencia interna.",
      matiz: "Las dos lecturas se combinan: la dirección era intencional, la mecánica fue oportunista, y la sociedad colaboró (autocoordinación, Broszat).",
      fraseLista: "Nombrar a Bracher y Mommsen como pareja enfrentada ya cuenta como «perspectivas»: para uno la consolidación fue la ejecución metódica de un plan; para el otro, un «dictador débil» cuya política se radicalizaba por competencia interna.",
      paraPreguntas: ["Consolidación del poder", "¿Estado totalitario o caos organizado?", "Política racial", "Estructura del régimen"]
    },
    {
      nombre: "Thomas Childers", regalo: true, nacionalidad: "Frase regalo (electorado nazi)",
      postura: "Partido «atrapa-todo» (Volkspartei)",
      ideaCentral: "El NSDAP fue un partido «atrapa-todo»: sobrerrepresentado entre protestantes, rurales, clase media y jóvenes, débil entre católicos y obreros industriales organizados. Su éxito fue capturar el pánico de la clase media golpeada por 1923 y 1929.",
      fraseLista: "Como muestra Childers, el NSDAP no fue un partido de clase sino un «atrapa-todo» que capitalizó el pánico de la clase media.",
      paraPreguntas: ["Quién votaba nazi", "Condiciones del surgimiento"]
    },
    {
      nombre: "David Schoenbaum / Richard Evans", regalo: true, nacionalidad: "Frase regalo (sociedad nazi)",
      obra: "Hitler's Social Revolution / La llegada del Tercer Reich",
      postura: "«Revolución percibida, no estructural»",
      ideaCentral: "Schoenbaum: la Volksgemeinschaft fue una revolución percibida, no estructural; cambió el estatus subjetivo (rituales, orgullo), no la estructura de clases. Evans corrige: bajo la superficie del consenso siempre operó la coerción (el obrero que no podía cambiar de empleo, el joven que no podía no afiliarse): seducción y encierro a la vez.",
      fraseLista: "Según Schoenbaum fue una «revolución percibida, no estructural»; y como advierte Evans, bajo el consenso siempre hubo coerción.",
      paraPreguntas: ["¿Produjeron cambio significativo las políticas sociales?", "Volksgemeinschaft"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1919, fecha: "28 jun 1919", pais: "Alemania", titulo: "Tratado de Versalles",
      descripcion: "Alemania pierde 13% del territorio y 10% de la población; ejército limitado a 100.000 hombres sin aviación ni tanques; Renania desmilitarizada; art. 231 («cláusula de culpabilidad») → reparaciones de 132.000 M de marcos oro (1921).",
      causas: ["Derrota de la PGM mal digerida.", "La Dolchstoßlegende («puñalada por la espalda»): el ejército no fue vencido sino traicionado."],
      consecuencias: ["Deslegitima a Weimar desde el día uno (la fundaron los que firmaron la rendición).", "El revisionismo de Versalles pasa a ser consenso nacional, no idea nazi."],
      historiador: "Evans: el contexto no produjo a Hitler, pero produjo un país donde Hitler era posible." },
    { anio: 1923, fecha: "nov 1923", pais: "Alemania", titulo: "Hiperinflación · Putsch de Múnich",
      descripcion: "La ocupación franco-belga del Ruhr y la «resistencia pasiva» (imprimir dinero) hunden el marco: 1 dólar = 4,2 billones de marcos. El 8–9 nov Hitler intenta un golpe imitando la Marcha sobre Roma: fracasa en un día (16 nazis muertos).",
      causas: ["Deuda de guerra + ocupación del Ruhr.", "El ejemplo de Mussolini."],
      consecuencias: ["Arruina a la clase media ahorrista, que no olvida.", "Hitler cumple 9 meses, dicta Mein Kampf y adopta la «estrategia de la legalidad»."] },
    { anio: 1928, fecha: "may 1928", pais: "Alemania", titulo: "Elecciones en plena prosperidad",
      descripcion: "En los «años dorados» (crédito de EE. UU. tras el Plan Dawes), el NSDAP saca 2,6% y 12 escaños: un partido marginal de agitadores.",
      consecuencias: ["Prueba que sin crisis el nazismo era insignificante: la Depresión lo cambia todo."],
      historiador: "Kershaw: la Depresión explica el 37%, pero el 37% no explica el poder." },
    { anio: 1930, fecha: "sep 1930", pais: "Alemania", titulo: "La Depresión dispara al NSDAP",
      descripcion: "Tras el crac de 1929, los bancos de EE. UU. retiran los préstamos; el desempleo salta a 3 M. Brüning gobierna por el art. 48 («canciller del hambre», deflación). El NSDAP salta a 18,3% y 107 escaños.",
      causas: ["Retiro del crédito estadounidense; producción industrial −40%.", "La democracia ya no funcionaba: gobierno por decreto."],
      consecuencias: ["El KPD crece a 100 escaños y aterroriza a las élites con el fantasma bolchevique."] },
    { anio: 1932, fecha: "jul 1932", pais: "Alemania", titulo: "Techo electoral: 37,3%",
      descripcion: "Con 6 millones de desempleados, el NSDAP llega a 37,3% y 230 escaños: primer partido de Alemania. La SA ya tiene 400.000 miembros (cuatro veces el ejército legal). En noviembre baja a 33,1%.",
      causas: ["Correlación casi perfecta con el desempleo.", "Propaganda de Goebbels: «Hitler sobre Alemania» (gira aérea)."],
      consecuencias: ["Es el máximo en elecciones libres: Hitler nunca ganó el poder en las urnas."],
      historiador: "Childers: partido «atrapa-todo» que captura el pánico de la clase media." },
    { anio: 1933, fecha: "30 ene 1933", pais: "Alemania", titulo: "Hitler, canciller (intriga de las élites)",
      descripcion: "Von Papen convence a Hindenburg (86 años) de nombrar a Hitler canciller de un gabinete con solo 3 nazis entre 11 ministros. El cálculo: «en dos meses lo habremos arrinconado hasta que chille».",
      causas: ["Rencilla Papen–Schleicher.", "Carta de industriales a Hindenburg (nov 1932) pidiendo nombrar a Hitler."],
      consecuencias: ["Juró por un procedimiento perfectamente constitucional."],
      historiador: "Kershaw: Hitler fue «llevado al poder»; Bracher: las élites fueron el instrumento final de un movimiento con voluntad totalitaria." },
    { anio: 1933, fecha: "27–28 feb 1933", pais: "Alemania", titulo: "Incendio del Reichstag",
      descripcion: "Van der Lubbe (comunista holandés) incendia el parlamento. El Decreto del Incendio (28-2) suspende «provisoriamente» las libertades y habilita la «custodia preventiva»: ~4.000 comunistas arrestados en días. Es la base jurídica del terror hasta 1945.",
      causas: ["El régimen lo presenta como señal de insurrección comunista (hoy se acepta que Van der Lubbe actuó solo)."],
      consecuencias: ["5 mar: elecciones con la oposición perseguida → 43,9% (ni así hay mayoría absoluta)."],
      historiador: "Broszat: el incendio fue un regalo del azar que el régimen supo explotar." },
    { anio: 1933, fecha: "23 mar 1933", pais: "Alemania", titulo: "Ley Habilitante",
      descripcion: "Aprobada 444 a 94 en la ópera Kroll rodeada de SA, con los comunistas presos y el Centro católico a favor. Solo el SPD vota en contra (Otto Wels). El gobierno puede legislar sin Reichstag ni presidente: la constitución queda viva en el papel y muerta en los hechos.",
      consecuencias: ["Abr: purga del funcionariado. 2 may: fin de los sindicatos → DAF. 14 jul: partido único. 20 jul: Concordato."] },
    { anio: 1934, fecha: "30 jun 1934", pais: "Alemania", titulo: "Noche de los Cuchillos Largos",
      descripcion: "Hitler decapita a su propia SA: Röhm y entre 85 y 200 personas asesinadas por la SS (incluidos Schleicher y Strasser). La SA hablaba de «segunda revolución» y de absorber al ejército.",
      causas: ["El ejército era lo único que podía derrocar a Hitler."],
      consecuencias: ["Compra la lealtad de los generales. El 2 ago muere Hindenburg → Hitler fusiona presidencia y cancillería como Führer; el ejército le jura lealtad personal; plebiscito 89,9%."] },
    { anio: 1935, fecha: "15 sep 1935", pais: "Alemania", titulo: "Leyes de Núremberg",
      descripcion: "La Ley de Ciudadanía degrada a los judíos a «súbditos» sin derechos políticos; la Ley de Protección de la Sangre prohíbe matrimonios y relaciones entre judíos y «arios». Definición racial (abuelos), no religiosa.",
      consecuencias: ["Institucionaliza la discriminación; antesala de la radicalización de 1938."] },
    { anio: 1936, fecha: "1936", pais: "Alemania", titulo: "Plan Cuatrienal · Göring",
      descripcion: "Memorándum secreto de Hitler: el ejército debe estar listo para la guerra en cuatro años. El Plan Cuatrienal (Göring, desplazando a Schacht) busca la autarquía a cualquier costo: caucho y combustible sintéticos, acerías Hermann Göring.",
      causas: ["Miedo a que un bloqueo repita el hambre de 1914–18."],
      consecuencias: ["Resultados mediocres: en 1939 el combustible sintético cubría 1/3; Alemania seguía importando ~1/3 de las materias primas."],
      historiador: "Mason: hacia 1938–39 la economía de rearme empuja a una «huida hacia la guerra»." },
    { anio: 1938, fecha: "9–10 nov 1938", pais: "Alemania", titulo: "Kristallnacht",
      descripcion: "Pogromo organizado tras el atentado de Grynszpan en París: 91 muertos, 267 sinagogas incendiadas, ~30.000 judíos deportados a campos, y una «multa» de 1.000 M de marcos a las víctimas.",
      causas: ["1938 es «el año de la radicalización»: arianización forzada de empresas."],
      consecuencias: ["Para 1939, ~280.000 de los 525.000 judíos de 1933 habían emigrado, despojados de casi todo."] },
    { anio: 1942, fecha: "20 ene 1942", pais: "Alemania", titulo: "Conferencia de Wannsee",
      descripcion: "La guerra transforma la persecución en genocidio: guetos en Polonia, fusilamientos de los Einsatzgruppen (~1,5 M), y en Wannsee se coordina la «solución final». Resultado: ~6 M de judíos asesinados.",
      causas: ["La invasión de la URSS (1941) abre el escenario del exterminio."],
      consecuencias: ["El contraste más extremo del temario con Cuba: exterminio vs inclusión forzada."],
      historiador: "Mommsen: «radicalización acumulativa»; Kershaw: sin la obsesión de Hitler no hay Holocausto, pero su implementación fue «trabajar en dirección al Führer»." },
    { anio: 1943, fecha: "feb 1943", pais: "Alemania", titulo: "Stalingrado: se quiebra el mito",
      descripcion: "La derrota de Stalingrado desinfla el «mito de Hitler»: la gente deja de hacer el saludo y el régimen pasa a depender del terror puro (la mayoría de las 16.000 penas de muerte del Tribunal Popular son de estos años). La Rosa Blanca reparte panfletos (hermanos Scholl guillotinados).",
      consecuencias: ["El consenso era real pero condicional a los éxitos."] },
    { anio: 1944, fecha: "20 jul 1944", pais: "Alemania", titulo: "Atentado de Stauffenberg",
      descripcion: "Las élites militares (el único peligro real) intentan matar a Hitler: la bomba estalla pero Hitler sobrevive. La represalia se lleva ~5.000 vidas, incluidos mariscales y el propio Rommel (forzado al suicidio).",
      causas: ["La guerra perdida convence a los conspiradores."],
      consecuencias: ["El régimen era invulnerable a la conspiración sin masas; cae con la derrota militar (suicidio de Hitler, 30 abr 1945; capitulación, 8 may)."] }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega (Paper 2) + vocabulario",
        html: `
          <p>Esto es <b>Paper 2, Tema 10: Estados autoritarios</b>. No es Paper 3. El temario del IB tiene tres patas y el examinador te penaliza <b>explícitamente</b> si las mezclás: <b>surgimiento</b> (1919–33) · <b>consolidación/mantenimiento</b> (1933–45) · <b>políticas y resultados</b>. Casi siempre te van a pedir comparar a Hitler con <b>otro</b> estado autoritario (acá, Castro), «cada uno de una región diferente»: Hitler (Europa) y Castro (América) cumplen; decilo en la primera línea para que el examinador lo tilde.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fase</th><th>Fechas (Hitler)</th><th>Pregunta típica</th></tr></thead>
            <tbody>
              <tr><td>Surgimiento</td><td>1919–1933</td><td>Condiciones y métodos del ascenso (fuerza, propaganda, el factor de las élites).</td></tr>
              <tr><td>Consolidación y mantenimiento</td><td>1933–1945</td><td>Trato a la oposición, «control total», propaganda vs fuerza, carisma.</td></tr>
              <tr><td>Políticas y resultados</td><td>1933–1939/45</td><td>¿Lograron sus objetivos? ¿Produjeron cambio significativo? (economía, sociedad, mujeres, raza, religión).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Cada política se evalúa contra sus propios objetivos declarados, no contra nuestros valores.</b> Tres pasos: enunciá el objetivo, medí el resultado con datos, explicá la brecha. La pregunta del IB es casi siempre «¿lograron sus objetivos?» o «¿produjeron cambio significativo?».</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Estructura del párrafo comparativo (Tabla 2 del PDF):</b> afirmación → dato de Hitler → dato de Castro → por qué difieren → historiador → mini-juicio. <b>Los dos casos en todos los párrafos.</b> En 45 minutos: 5 de plan, 33 de escritura (intro + 3–4 párrafos + conclusión), 2 de relectura.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La tesis maestra del caso Hitler:</b> «Hitler no tomó el poder: la Gran Depresión le fabricó los votos, la democracia de Weimar ya se había vaciado a sí misma y un círculo de élites conservadoras lo llevó al poder creyendo que lo controlaría; una vez dentro, consolidó una dictadura pseudo-legal en dieciocho meses y se sostuvo tanto por consentimiento como por coerción.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Weimar</b> = la república democrática alemana (1919–33). <b>Dolchstoßlegende</b> = «leyenda de la puñalada por la espalda»: el mito de que el ejército no fue vencido sino traicionado. <b>Art. 48</b> = permitía gobernar por decreto en emergencia (se volvió rutina). <b>Gleichschaltung</b> = «coordinación»: alinear todas las instituciones con el partido. <b>Führerprinzip</b> = Alemania no necesita un programa sino un líder. <b>Volksgemeinschaft</b> = «comunidad del pueblo» racialmente definida. <b>Autarquía</b> = autosuficiencia económica. <b>Policracia</b> = muchos centros de poder rivales (Mommsen).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No confundir las fases. «Surgimiento» termina el 30 de enero de 1933; «consolidación» es 1933–34; el resto es «mantenimiento». Meter el Holocausto en una pregunta de «surgimiento» es un error de banda.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se evalúa cada política en Paper 2, según la «regla de oro» del PDF?", etiqueta: "concepto",
            opciones: [
              { texto: "Contra sus propios objetivos declarados: enunciar objetivo, medir resultado, explicar la brecha.", correcta: true, explicacion: "Correcto: la pregunta del IB es «¿lograron sus objetivos?», no «¿eran buenas?»." },
              { texto: "Contra nuestros valores morales actuales sobre lo que está bien o mal en una sociedad democrática.", correcta: false, explicacion: "El PDF advierte justo lo contrario: no se evalúa contra nuestros valores." },
              { texto: "Comparándolas únicamente con la economía de Gran Bretaña y EE. UU.", correcta: false, explicacion: "La comparación externa es un dato de apoyo, no el criterio de evaluación." },
              { texto: "Según cuántos votos obtuvo el NSDAP en la elección siguiente.", correcta: false, explicacion: "El voto no es el criterio para evaluar políticas de gobierno." }
            ] },
          { pregunta: "Un ensayo de Paper 2 que mezcla surgimiento, consolidación y políticas…", etiqueta: "trampa",
            opciones: [
              { texto: "Es penalizado explícitamente: hay que respetar las tres fases.", correcta: true, explicacion: "Correcto: el examinador penaliza confundir las fases del temario." },
              { texto: "Suma puntos porque demuestra que conocés todo el período.", correcta: false, explicacion: "No: confundir fases resta, no suma." },
              { texto: "Es obligatorio, porque las tres fases van siempre juntas.", correcta: false, explicacion: "Son fases distintas con fechas distintas; hay que separarlas." },
              { texto: "Da igual, porque el IB no distingue en absoluto entre las fases del tema.", correcta: false, explicacion: "Sí distingue y lo penaliza explícitamente." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Contexto: de dónde viene todo (1871–1919)",
        html: `
          <p>Para entender por qué una de las sociedades más cultas de Europa entregó el poder a Hitler, hay tres datos de contexto.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Factor</th><th>Qué pasaba</th><th>Por qué abre la puerta</th></tr></thead>
            <tbody>
              <tr><td>País joven, sin tradición democrática</td><td>Alemania se unifica recién en 1871 bajo Prusia; el Káiser combina un parlamento débil con poder real en manos del emperador, el ejército y los Junkers.</td><td>Jueces, oficiales y funcionarios se forman en un mundo autoritario y nacionalista; después sirven a Weimar y luego a Hitler.</td></tr>
              <tr><td>PGM mal digerida</td><td>En nov 1918 el ejército se retira pero todavía pelea en territorio extranjero; Ludendorff empuja a los civiles a firmar el armisticio.</td><td>Nace la Dolchstoßlegende: la derrota se culpa a socialistas, demócratas y judíos (los «criminales de noviembre»).</td></tr>
              <tr><td>Versalles (28 jun 1919)</td><td>−13% territorio, −10% población; ejército de 100.000; Renania desmilitarizada; art. 231; reparaciones de 132.000 M de marcos oro.</td><td>Ningún partido alemán aceptó Versalles: el revisionismo era consenso nacional. Hitler ofreció la versión más radical de algo que todos querían.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> La vieja tesis del <b>Sonderweg</b> («camino especial», Wehler) sostiene que Alemania se modernizó económicamente sin modernizarse políticamente. <b>Evans</b> matiza: no había nada inevitable, pero la PGM y Versalles crearon una cultura política donde la violencia era normal y la democracia parecía imposición extranjera. Frase de ensayo: «el contexto no produjo a Hitler, pero produjo un país donde Hitler era posible».</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Junkers</b> = los terratenientes aristocráticos prusianos, columna del viejo régimen autoritario.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué es la Dolchstoßlegende y por qué importa?", etiqueta: "concepto",
            opciones: [
              { texto: "El mito de la «puñalada por la espalda»: deslegitimó a Weimar desde el día uno.", correcta: true, explicacion: "Correcto: culpaba a socialistas, demócratas y judíos de una derrota en realidad militar." },
              { texto: "El plan secreto de rearme alemán de los años treinta financiado con los bonos MEFO de Schacht.", correcta: false, explicacion: "Los bonos MEFO son de los años treinta y son económicos, no un mito." },
              { texto: "La ley que permitía al presidente gobernar por decreto.", correcta: false, explicacion: "Eso es el art. 48 de la Constitución de Weimar." },
              { texto: "La campaña aérea «Hitler sobre Alemania» de Goebbels en 1932.", correcta: false, explicacion: "Eso es propaganda electoral, no la leyenda de la puñalada." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Surgimiento (1919–1933): condiciones",
        html: `
          <h3>Weimar: una democracia con defectos de fábrica</h3>
          <ul>
            <li><b>Representación proporcional sin piso:</b> más de veinte partidos; unos veinte gobiernos entre 1919 y 1933, duración media inferior al año.</li>
            <li><b>Art. 48 (gobierno por decreto):</b> 5 decretos en 1930, 44 en 1931, 66 en 1932, contra un Reichstag que casi no legislaba. <b>La democracia dejó de funcionar como democracia dos años antes de Hitler.</b></li>
            <li><b>Élites del viejo régimen intactas:</b> los jueces le dieron a Hitler, tras el Putsch de 1923, 9 meses de celda cómoda; el ejército, la burocracia y los industriales toleraron la república mientras les sirvió.</li>
          </ul>

          <h3>La economía como montaña rusa: 1923 y 1929</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Crisis</th><th>Qué pasó</th><th>Quién perdió / efecto</th></tr></thead>
            <tbody>
              <tr><td>Hiperinflación 1923</td><td>Ocupación del Ruhr + «resistencia pasiva» (imprimir dinero): 1 dólar = 4,2 billones de marcos.</td><td>La clase media ahorrista (pensiones, bonos, seguros evaporados). No olvidó.</td></tr>
              <tr><td>«Años dorados» 1924–29</td><td>Rentenmark, Plan Dawes (1924): prosperidad real pero prestada, con crédito de corto plazo de EE. UU.</td><td>En 1928 el NSDAP saca 2,6% y 12 escaños: marginal.</td></tr>
              <tr><td>Gran Depresión 1929–33</td><td>EE. UU. retira los préstamos; desempleo 1,3 M (1928) → 3 M (1930) → 6 M (1933); producción −40%. Brüning («canciller del hambre») responde con deflación y art. 48.</td><td>NSDAP 18,3% (1930) → 37,3% (jul 1932). El KPD crece a 100 escaños y aterroriza a las élites.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> ¿Explica la economía el ascenso? A favor: correlación casi perfecta (2,6% con prosperidad, 37,3% con 6 M de desempleados). En contra: GB y EE. UU. sufrieron la misma Depresión y no produjeron fascismo → condición necesaria, no suficiente. <b>Childers</b>: partido «atrapa-todo» que captura el pánico de la clase media. <b>Kershaw</b>: la Depresión explica el 37%, pero el 37% no explica el poder (eso son las élites).</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La Gran Depresión fue la condición necesaria del ascenso nazi —sin ella el NSDAP seguía en el 2,6% de 1928— pero no la suficiente: Gran Bretaña y Estados Unidos padecieron la misma crisis sin producir fascismo.»</div>
        `,
        miniQuiz: [
          { pregunta: "El dato que «resume todo el surgimiento nazi» según el PDF es…", etiqueta: "fecha",
            opciones: [
              { texto: "En 1928, en plena prosperidad, el NSDAP sacó 2,6% y 12 escaños.", correcta: true, explicacion: "Correcto: muestra que sin crisis el nazismo era marginal; la Depresión lo cambió todo." },
              { texto: "En 1932 la SA llegó a tener 400.000 miembros armados.", correcta: false, explicacion: "Es un dato de método/fuerza, no el que resume el surgimiento electoral." },
              { texto: "En 1933 Dachau abrió como primer campo de concentración.", correcta: false, explicacion: "Eso es consolidación, no surgimiento." },
              { texto: "En 1919 el Tratado de Versalles impuso reparaciones de 132.000 M de marcos.", correcta: false, explicacion: "Es contexto, no el dato que resume el ascenso electoral." }
            ] },
          { pregunta: "¿Por qué dice el PDF que «la democracia dejó de funcionar dos años antes de Hitler»?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Porque Brüning gobernó por decreto (art. 48): 66 decretos en 1932.", correcta: true, explicacion: "Correcto: el Reichstag casi no legislaba; Weimar ya se había vaciado." },
              { texto: "Porque el NSDAP ya tenía mayoría absoluta en el Reichstag en 1931.", correcta: false, explicacion: "El NSDAP nunca tuvo mayoría absoluta en elecciones libres (techo 37,3%)." },
              { texto: "Porque Hitler ya era canciller desde 1931.", correcta: false, explicacion: "Hitler fue canciller recién el 30 de enero de 1933." },
              { texto: "Porque Versalles había prohibido las elecciones alemanas.", correcta: false, explicacion: "Versalles no prohibió elecciones; limitó el ejército y el territorio." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Surgimiento: métodos (fuerza, legalidad, propaganda)",
        html: `
          <h3>Fuerza que fracasa, legalidad que funciona</h3>
          <ol class="escalera">
            <li><b>La fuerza (fracasa):</b> el Putsch de Múnich (1923) dura un día. Pero el juicio le da tribuna nacional y la sentencia ridícula le muestra que el Estado no era su enemigo.</li>
            <li><b>La legalidad (funciona):</b> llegar por las urnas y destruir el sistema desde adentro: «les tomará más tiempo superarnos en votos que a nosotros fusilarlos».</li>
            <li><b>La SA (intimida):</b> ~400.000 en 1932; su función no era tomar el poder sino demostrar dos cosas a la vez: que había caos (que ellos mismos producían) y que solo el NSDAP podía imponer orden.</li>
          </ol>

          <h3>La propaganda (amplifica)</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> Bajo <b>Goebbels</b> (jefe de propaganda desde 1928): mítines con coreografía cuasi religiosa, carteles de mensaje único, y en 1932 la gira aérea «Hitler sobre Alemania» (hablar en cinco ciudades el mismo día). El contenido era deliberadamente flexible (a cada grupo le prometía algo) y el <b>Programa de 25 puntos</b> (1920) era vago para contenerlo todo. Lo único fijo: el Führerprinzip.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El antisemitismo (central en Mein Kampf) se <b>dosificaba</b> según la audiencia: muchos alemanes votaron al NSDAP <b>a pesar</b> del antisemitismo más que por él, lo cual <b>agrava</b> la responsabilidad posterior, no la atenúa.</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Bullock</b> (visión clásica): Hitler oportunista maquiavélico, sin más programa que el poder; la propaganda, puro instrumento. <b>Kershaw</b> responde con el poder carismático (Weber): la propaganda no fabricó el liderazgo de la nada; funcionó porque millones querían creer en un salvador. Para el ensayo: la propaganda explica cómo se cosechó la crisis, no la crisis misma; fue multiplicador, no causa.</div>

          <h3>El factor decisivo: la intriga de las élites (1932–ene 1933)</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Hitler nunca ganó el poder en las urnas: su techo fue el 37,3% de julio de 1932, y en noviembre bajó al 33,1%. Llegó al poder porque un pequeño círculo de conservadores, encabezado por Von Papen, convenció a Hindenburg de nombrarlo canciller con solo tres nazis en once ministerios, calculando que lo arrinconarían «hasta que chille».»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Kershaw</b>: Hitler fue «llevado al poder» (levered into power); el nazismo pudo morir de éxito ajeno en el invierno de 1932–33. <b>Bracher</b> (intencionalista): las élites fueron el instrumento final, pero la causa activa era un movimiento totalitario con un líder con programa. Orden causal que conviene defender: crisis → votos, debilidad institucional → oportunidad, decisión de las élites → poder.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál fue la lección que Hitler sacó del fracaso del Putsch de 1923?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "La «estrategia de la legalidad»: llegar por las urnas y destruir el sistema desde adentro.", correcta: true, explicacion: "Correcto: la sentencia ridícula le mostró que el Estado no era su enemigo." },
              { texto: "Que debía abandonar para siempre la violencia callejera y disolver del todo sus milicias armadas.", correcta: false, explicacion: "La violencia no desapareció: la SA llegó a 400.000 y libró guerra callejera." },
              { texto: "Que tenía que imitar exactamente la Marcha sobre Roma de nuevo.", correcta: false, explicacion: "Justamente eso fue lo que fracasó; cambió de estrategia." },
              { texto: "Que la propaganda era inútil para ganar apoyo de masas.", correcta: false, explicacion: "Al contrario: potenció la propaganda de Goebbels." }
            ] },
          { pregunta: "Según Kershaw, el papel de la propaganda nazi fue…", etiqueta: "historiador",
            opciones: [
              { texto: "Un multiplicador que cosechó la crisis, no la causa que la creó.", correcta: true, explicacion: "Correcto: funcionó porque millones querían creer en un salvador." },
              { texto: "La causa única y suficiente del ascenso al poder de Hitler.", correcta: false, explicacion: "Fue amplificador, no causa; sin la crisis no había qué cosechar." },
              { texto: "Un instrumento irrelevante que casi nadie llegó a ver ni oír.", correcta: false, explicacion: "Fue técnicamente revolucionaria y masiva (radio, mítines, avión)." },
              { texto: "Una técnica que lavaba cerebros al margen de lo que la gente quería.", correcta: false, explicacion: "Kershaw dice lo contrario: funcionó porque decía lo que querían oír." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Consolidación: la Gleichschaltung en 18 meses",
        html: `
          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Gleichschaltung</b> = «coordinación» o «sincronización»: alinear todas las instituciones con el partido. Lo extraordinario es la velocidad (18 meses) y la forma pseudo-legal.</div>

          <h3>La secuencia (sabérsela de memoria)</h3>
          <ol class="escalera">
            <li><b>27–28 feb 1933 · Incendio del Reichstag:</b> el Decreto suspende las libertades y habilita la «custodia preventiva». ~4.000 comunistas arrestados: base jurídica del terror hasta 1945.</li>
            <li><b>5 mar · Elecciones semi-libres:</b> con la oposición perseguida y la radio en manos del gobierno, el NSDAP saca 43,9%: <b>ni así logra mayoría absoluta</b> (necesita al DNVP).</li>
            <li><b>23 mar · Ley Habilitante (444–94):</b> legislar sin Reichstag ni presidente por cuatro años. Solo el SPD vota en contra (Otto Wels).</li>
            <li><b>Primavera–verano 1933:</b> purga del funcionariado (7 abr); fin de los sindicatos → DAF (2 may); partido único (14 jul); Concordato con el Vaticano (20 jul); Dachau abre (mar).</li>
            <li><b>30 jun 1934 · Noche de los Cuchillos Largos:</b> Hitler decapita a su SA (Röhm; 85–200 muertos) y compra la lealtad del ejército.</li>
            <li><b>2 ago 1934 · Muere Hindenburg:</b> Hitler es Führer; el ejército le jura lealtad personal; plebiscito 89,9%. <b>Consolidación completa.</b></li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Dato precioso para «control»:</b> «incluso el 5 de marzo de 1933, con la oposición perseguida y la radio monopolizada, el NSDAP solo obtuvo 43,9%: ni siquiera con terror la mayoría de los alemanes votó nazi».</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Bracher</b> (intencionalista): la secuencia es la ejecución metódica de un plan de toma total del poder. <b>Broszat</b> (estructuralista): más improvisación que plan; el incendio fue un regalo del azar, y la «coordinación» fue en gran parte <b>autocoordinación</b> (clubes, empresas y asociaciones se nazificaron solos por oportunismo y miedo). Síntesis de ensayo: la dirección era intencional, la mecánica fue oportunista, y la sociedad colaboró.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué dato de las elecciones del 5 de marzo de 1933 es «precioso» para una pregunta de control?", etiqueta: "fecha",
            opciones: [
              { texto: "El NSDAP sacó 43,9%: ni con terror logró la mayoría absoluta de los alemanes.", correcta: true, explicacion: "Correcto: necesitó al DNVP; muestra el límite del control incluso con represión." },
              { texto: "El NSDAP superó holgadamente el 90% gracias a la radio y a la persecución de la oposición.", correcta: false, explicacion: "El 89,9% fue el plebiscito de 1934, no la elección de 1933." },
              { texto: "El KPD ganó la elección pese a estar perseguido.", correcta: false, explicacion: "El KPD estaba proscrito y perseguido; no ganó." },
              { texto: "La Ley Habilitante se votó ese mismo día por unanimidad.", correcta: false, explicacion: "La Habilitante fue el 23 de marzo, 444 a 94, con el SPD en contra." }
            ] },
          { pregunta: "El concepto de «autocoordinación» de Broszat sostiene que…", etiqueta: "historiador",
            opciones: [
              { texto: "Muchas instituciones se nazificaron solas por oportunismo y miedo, antes de recibir órdenes.", correcta: true, explicacion: "Correcto: la Gleichschaltung fue en parte iniciativa de la propia sociedad." },
              { texto: "Hitler ordenó personalmente y por escrito cada paso de la coordinación institucional del Reich.", correcta: false, explicacion: "Esa es la lectura intencionalista de Bracher, no la de Broszat." },
              { texto: "La oposición coordinó por sí misma la resistencia al régimen.", correcta: false, explicacion: "La autocoordinación es de las instituciones hacia el régimen, no de la oposición." },
              { texto: "El ejército coordinó un golpe contra Hitler en 1934.", correcta: false, explicacion: "No hubo tal golpe en 1934; el ejército le juró lealtad." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Mantenimiento: terror, propaganda y el «mito»",
        html: `
          <h3>El terror: menos policías de los que imaginás</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Pieza</th><th>Qué era</th><th>Dato clave</th></tr></thead>
            <tbody>
              <tr><td>Gestapo</td><td>Policía secreta del Estado (Göring 1933, unificada bajo Himmler 1934).</td><td>~15.000 agentes para 65 M de habitantes.</td></tr>
              <tr><td>SS + SD</td><td>De 280 guardaespaldas (1929) a Estado dentro del Estado; desde 1936 controla toda la policía.</td><td>Himmler; inteligencia SD (Heydrich).</td></tr>
              <tr><td>Campos</td><td>Dachau (mar 1933) para presos políticos.</td><td>~100.000 pasaron por «custodia preventiva» en 1933; hacia 1939, seis grandes campos con ~21.000 internos.</td></tr>
              <tr><td>Justicia</td><td>Tribunal Popular (Volksgerichtshof, 1934), juez Freisler.</td><td>~16.000 penas de muerte, la mayoría durante la guerra.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Gellately</b>: ~80% de los expedientes de la Gestapo se iniciaban por <b>denuncias de ciudadanos</b> (muchas por rencillas privadas vestidas de patriotismo). Frase de ensayo: «quince mil agentes no pueden vigilar a sesenta y cinco millones; el control fue posible porque millones de alemanes vigilaban por ellos». Enfrentalo con la imagen totalitaria clásica de Bracher/Bullock (Estado policial omnipresente): los números la desmienten.</div>

          <h3>El «mito de Hitler»</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> Goebbels recibe el Ministerio de Propaganda (mar 1933) y crea la Cámara de Cultura (sep): censura convertida en autocensura laboral. El <b>Volksempfänger</b> («receptor del pueblo») lleva la radio del 25% (1932) al 70% de los hogares (1939). <i>El triunfo de la voluntad</i> (Riefenstahl) y los Juegos de 1936 son operaciones de imagen.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El "mito de Hitler" (Kershaw) separaba al Führer honesto del partido corrupto —"si el Führer lo supiera…"—: cada fracaso se atribuía a los de abajo y cada éxito al líder. Pero el consenso era condicional a los resultados, y se desinfló con Stalingrado (febrero de 1943).»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Kershaw</b> (The Hitler Myth): el carisma fue una relación social y condicional. <b>Gellately</b>: la propaganda funcionaba porque decía lo que la gente quería oír. Juicio para «¿fue la propaganda el factor más importante?»: importante como amplificador y constructor del mito, pero parasitaria de los resultados económicos y exteriores, e inseparable de la coerción.</div>
        `,
        miniQuiz: [
          { pregunta: "El argumento central de Gellately sobre el terror nazi es que…", etiqueta: "historiador",
            opciones: [
              { texto: "El control se basó en denuncias de la propia sociedad, no en una Gestapo omnipresente.", correcta: true, explicacion: "Correcto: ~15.000 agentes, ~80% de casos por denuncias ciudadanas." },
              { texto: "La Gestapo tenía cientos de miles de agentes propios vigilando cada calle y cada hogar del país.", correcta: false, explicacion: "Tenía solo ~15.000 para 65 millones; de ahí el argumento." },
              { texto: "El terror nazi no existió y todo fue pura propaganda inventada.", correcta: false, explicacion: "Gellately dice que el terror fue real y brutal, pero participativo." },
              { texto: "Los alemanes no sabían nada de lo que hacía el régimen.", correcta: false, explicacion: "Al revés: muchos participaban denunciando y aprobaban." }
            ] },
          { pregunta: "¿Qué muestra que el «mito de Hitler» era condicional?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Que se desinfló con Stalingrado (1943) y la gente dejó de hacer el saludo.", correcta: true, explicacion: "Correcto: cuando los éxitos se acabaron, el régimen dependió del terror puro." },
              { texto: "Que Hitler renunció voluntariamente tras perder una elección.", correcta: false, explicacion: "No hubo renuncia ni elección perdida: el régimen cayó con la guerra." },
              { texto: "Que el mito creció y se fortaleció justamente después de las grandes derrotas militares.", correcta: false, explicacion: "Es al revés: el mito se desinfló con las derrotas." },
              { texto: "Que el carisma sobrevivió sin problemas a toda la guerra.", correcta: false, explicacion: "No sobrevivió: se quebró con Stalingrado." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · ¿Totalitario o caos organizado? Oposición",
        html: `
          <h3>El debate estructural: intencionalistas vs estructuralistas</h3>
          <p>La imagen de dictadura hipereficiente es en gran parte propaganda del propio régimen. Por dentro, el Tercer Reich era un enjambre de jurisdicciones rivales (ministerios vs oficinas del partido, Gauleiter vs Berlín, SS vs ejército). Hitler detestaba el trabajo administrativo, se levantaba tarde y dejaba competir a sus subordinados.</p>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Intencionalistas</b> (Bracher, Bullock, Hildebrand): Hitler tenía un programa desde los años veinte y lo ejecutó; el caos era «divide y reinarás». <b>Estructuralistas</b> (Broszat, Mommsen): «policracia» y Hitler como «dictador débil», rehén de la dinámica que desató; la política se radicalizaba por «radicalización acumulativa». <b>Síntesis de Kershaw</b>: «trabajar en dirección al Führer» (working towards the Führer): Hitler fijaba la dirección con discursos y «deseos», y burócratas y jefes locales competían por anticiparse a su voluntad. El caos no era debilidad: era el motor de radicalización.</div>

          <h3>La oposición, por círculos (de la queja a la conspiración)</h3>
          <ol class="escalera">
            <li><b>Descontento cotidiano:</b> chistes, no hacer el saludo, escuchar la BBC (delito capital desde 1939). Los informes Sopade del SPD exiliado: mucha queja material, poca oposición política.</li>
            <li><b>Izquierda organizada:</b> KPD y SPD, primeras víctimas de 1933 (~150.000 comunistas por los campos); heroísmo enorme, eficacia casi nula por la fractura socialistas/comunistas.</li>
            <li><b>Iglesias (el único actor con estructura propia):</b> Iglesia Confesante (Niemöller, Bonhoeffer); encíclica Mit brennender Sorge (1937); el <b>obispo Von Galen</b> (1941) frena con sus sermones el programa de «eutanasia» T4 (ya había matado a ~70.000).</li>
            <li><b>Juventud disidente:</b> Piratas del Edelweiss, Swing-Jugend; la Rosa Blanca (hermanos Scholl, guillotinados feb 1943).</li>
            <li><b>El único peligro real, las élites militares:</b> conspiración de 1938 (abortada por Múnich) y el atentado del <b>20 de julio de 1944</b> (Stauffenberg): la bomba estalla, Hitler sobrevive, represalia de ~5.000 vidas (incluido Rommel).</li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El contraste entre Von Galen (1941) y el 20 de julio de 1944 da el matiz de banda alta: el régimen era sensible a la protesta moral pública con base social e invulnerable a la conspiración sin masas, exactamente lo inverso de lo que sugiere la imagen del terror omnipotente.»</div>
        `,
        miniQuiz: [
          { pregunta: "La síntesis de Kershaw entre intencionalistas y estructuralistas es…", etiqueta: "historiador",
            opciones: [
              { texto: "«Trabajar en dirección al Führer»: Hitler fijaba la dirección y los subordinados competían por anticiparse.", correcta: true, explicacion: "Correcto: el caos no era debilidad sino motor de radicalización." },
              { texto: "Que Hitler ordenaba por escrito cada medida del régimen en detalle y supervisaba a diario toda la burocracia.", correcta: false, explicacion: "Es la lectura intencionalista pura; Kershaw la matiza." },
              { texto: "Que Hitler no tenía ningún poder y el régimen se gobernaba solo.", correcta: false, explicacion: "Kershaw no niega el poder de Hitler; dice que fijaba la dirección." },
              { texto: "Que el régimen era una dictadura hipereficiente y centralizada.", correcta: false, explicacion: "Justamente niega esa imagen: por dentro era una policracia caótica." }
            ] },
          { pregunta: "¿Qué oposición logró frenar algo al régimen, y qué muestra?", etiqueta: "concepto",
            opciones: [
              { texto: "Von Galen (1941) frenó el programa T4: la protesta moral con base social podía frenar al régimen.", correcta: true, explicacion: "Correcto: la conspiración sin masas (20 de julio) fracasó; la protesta moral pública, no." },
              { texto: "El KPD derrocó al régimen nazi mediante una huelga general obrera coordinada a escala nacional en 1935.", correcta: false, explicacion: "El KPD fue aplastado en 1933; no derrocó nada." },
              { texto: "La Rosa Blanca tomó el poder en Múnich en 1943.", correcta: false, explicacion: "Los hermanos Scholl fueron ejecutados; no tomaron el poder." },
              { texto: "El atentado del 20 de julio de 1944 mató a Hitler.", correcta: false, explicacion: "La bomba estalló pero Hitler sobrevivió." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Políticas: economía (empleo y autarquía)",
        html: `
          <p><b>Objetivos:</b> (1) eliminar el desempleo (fuente de legitimidad); (2) rearmar (prohibido por Versalles); (3) autarquía (que un bloqueo no repita el hambre de 1914–18); (4) en el fondo, preparar la guerra del «espacio vital».</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fase</th><th>Medidas</th><th>Resultado</th></tr></thead>
            <tbody>
              <tr><td>1933–36 · Schacht</td><td>Autobahnen (~3.000 km hacia 1938), RAD (servicio laboral obligatorio desde 1935), bonos MEFO (rearme oculto), «Nuevo Plan» (1934, trueque bilateral con Balcanes y América Latina).</td><td><b>Desempleo de 6 M (1933) a <0,5 M (1938)</b>: pleno empleo cuando EE. UU. seguía con dos dígitos.</td></tr>
              <tr><td>1936–39 · Göring</td><td>Plan Cuatrienal: autarquía a cualquier costo (caucho Buna, combustible sintético, acerías Hermann Göring). Schacht renuncia (1937).</td><td>Mediocre: en 1939 el combustible sintético cubría 1/3; Alemania importaba ~1/3 de las materias primas.</td></tr>
            </tbody>
          </table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El dato del pleno empleo tiene <b>letra chica</b>: las estadísticas excluían a judíos, a mujeres sacadas del registro, a los del RAD y, desde 1935, a los conscriptos. Aun descontando el maquillaje, la recuperación fue real y es la base del consenso.</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>«Cañones antes que mantequilla»</b> (Göring, literal): el gasto militar pasó de ~1% del PNB (1933) a 17–23% (1938–39), cuatro veces el británico; los salarios reales apenas recuperaron 1929, con jornadas más largas. La autarquía real solo llegaba por el <b>saqueo</b> (oro austríaco 1938, industria checa 1939, luego Europa entera).</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Mason vs Overy.</b> Mason: hacia 1938–39 la economía de rearme generó una crisis interna → la guerra fue «huida hacia adelante» (conquistar para no ajustar). Overy: no hubo crisis terminal; la guerra respondió al programa ideológico; el problema fue de calendario. Juicio para «¿lograron sus objetivos?»: legitimación (empleo) cumplida con creces; autarquía incumplida; el «éxito» global era insostenible sin guerra.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál objetivo económico se cumplió y cuál fracasó?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Se cumplió el empleo (6 M → <0,5 M en 1938); fracasó la autarquía (importaba 1/3 en 1939).", correcta: true, explicacion: "Correcto: éxito en lo que legitimaba, fracaso en lo estructural." },
              { texto: "Se cumplieron plenamente tanto el objetivo del pleno empleo como el de la autosuficiencia económica total.", correcta: false, explicacion: "La autarquía fracasó: Alemania seguía importando ~1/3." },
              { texto: "Fracasaron los dos: el desempleo nunca bajó de los 6 millones.", correcta: false, explicacion: "El desempleo sí bajó drásticamente a menos de medio millón." },
              { texto: "Se cumplió la autarquía pero fracasó la reducción del desempleo.", correcta: false, explicacion: "Es al revés: el empleo se logró, la autarquía no." }
            ] },
          { pregunta: "Según Mason, ¿por qué fue a la guerra la economía nazi en 1939?", etiqueta: "historiador",
            opciones: [
              { texto: "Por una «huida hacia adelante»: la crisis de rearme empujaba a conquistar para no ajustar.", correcta: true, explicacion: "Correcto, esa es la tesis de Mason (Overy la refuta con datos)." },
              { texto: "Porque la autarquía ya estaba totalmente lograda en 1939 y le sobraban recursos y materias primas.", correcta: false, explicacion: "La autarquía fracasó; no sobraban recursos." },
              { texto: "Porque Overy demostró que no había ninguna presión económica.", correcta: false, explicacion: "Esa es la posición de Overy, no la de Mason." },
              { texto: "Porque el desempleo volvió a subir a 6 millones en 1939.", correcta: false, explicacion: "El desempleo estaba en mínimos en 1938–39." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Políticas: sociedad, mujeres y religión",
        html: `
          <h3>Sociedad: la Volksgemeinschaft, ¿revolución o decorado?</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Grupo</th><th>Instrumento</th><th>Dato</th></tr></thead>
            <tbody>
              <tr><td>Obreros</td><td>DAF de Robert Ley (23 M de afiliados) y KdF («Fuerza por la alegría»): vacaciones subsidiadas, el Volkswagen.</td><td>~10 M de vacaciones (1938); 340.000 ahorristas del VW y ninguno recibió el auto. Trueque: bienestar por pérdida de huelga y salario libre.</td></tr>
              <tr><td>Juventud</td><td>Juventudes Hitlerianas (obligatorias de hecho 1936, de derecho 1939) y BDM; escuela reescrita (97% de docentes en la asociación nazi).</td><td>8,7 M de miembros (1939); 15% del horario a educación física.</td></tr>
              <tr><td>Campesinos</td><td>«Sangre y suelo»: Ley de Granjas Hereditarias (1933), precios garantizados.</td><td>Aun así el éxodo rural siguió (la industria pagaba mejor).</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Schoenbaum</b>: una «revolución percibida, no estructural»: cambió el estatus subjetivo, no la estructura de clases. <b>Evans</b>: bajo la superficie del consenso siempre operó la coerción (el obrero que no podía cambiar de empleo desde 1935). Juicio: significativo en la socialización de la juventud y en la destrucción de la sociedad civil; superficial en las clases; radical solo en la exclusión racial: un «sí, pero no donde decían».</div>

          <h3>Mujeres: la ideología contra la economía</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> Objetivo: <b>Kinder, Küche, Kirche</b> (hijos, cocina, iglesia). Instrumentos: préstamos matrimoniales (1933, con condición de dejar el empleo), Cruz de Honor de la Madre (1938), cuota del 10% para mujeres en la universidad.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El gran fracaso instructivo: el empleo femenino, que debía bajar, subió de 4,85 millones (1933) a 7,1 millones (1939), porque el rearme devoró la mano de obra masculina; la condición laboral del préstamo se eliminó en 1937. El único objetivo logrado fue el político: la exclusión total del poder.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Mason</b>: cuando la ideología chocó con la economía de guerra, ganó la economía; la política hacia la mujer era en el fondo política de mano de obra. <b>Overy</b>: donde la ideología no costaba nada (exclusión del poder, propaganda maternal) se aplicó a rajatabla. Es el mejor contraste con Cuba: cuando ideología y economía empujan juntas (Cuba), la política de género avanza; cuando chocan (Alemania), gana la economía.</div>

          <h3>Religión: el enemigo que no pudo digerir</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Con los católicos, el Concordato de 1933 (la Iglesia se retira de la política a cambio de garantías… violadas de inmediato); con los protestantes, la absorción, que provocó la Iglesia Confesante (Niemöller, Bonhoeffer). Resultado: fracaso relativo: la única institución con lealtades superiores al Estado sobrevivió.»</div>
        `,
        miniQuiz: [
          { pregunta: "La fórmula de Schoenbaum para la Volksgemeinschaft es…", etiqueta: "historiador",
            opciones: [
              { texto: "Una «revolución percibida, no estructural»: cambió el estatus subjetivo, no las clases.", correcta: true, explicacion: "Correcto: las estructuras objetivas casi no se movieron." },
              { texto: "Una revolución social total que eliminó las clases, la propiedad privada y las jerarquías de ingreso.", correcta: false, explicacion: "Lo contrario: las clases y la propiedad siguieron donde estaban." },
              { texto: "Una contrarrevolución que restauró la monarquía del Káiser.", correcta: false, explicacion: "No hubo restauración monárquica; es un anacronismo." },
              { texto: "Un simple decorado sin ningún efecto sobre la población.", correcta: false, explicacion: "Sí tuvo efecto en la percepción y la socialización de la juventud." }
            ] },
          { pregunta: "¿Qué pasó con el empleo femenino y por qué, según Mason?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Subió de 4,85 a 7,1 M porque el rearme devoró la mano de obra masculina: ganó la economía.", correcta: true, explicacion: "Correcto: la ideología Kinder-Küche-Kirche cedió ante la necesidad económica." },
              { texto: "Bajó prácticamente a cero porque se cumplió a rajatabla el ideal del Kinder, Küche, Kirche.", correcta: false, explicacion: "Al revés: el empleo femenino subió, contradiciendo la ideología." },
              { texto: "No cambió, porque las mujeres tenían prohibido trabajar por ley.", correcta: false, explicacion: "Sí cambió: subió más de 2 millones entre 1933 y 1939." },
              { texto: "Subió porque el régimen quería emancipar políticamente a la mujer.", correcta: false, explicacion: "El único objetivo logrado fue la exclusión del poder, no la emancipación." }
            ] }
        ]
      },

      {
        id: "s9", titulo: "9 · Política racial: de la discriminación al genocidio",
        html: `
          <p>El «objetivo» declarado («apartar» a los judíos) escaló hasta el exterminio. La periodización es esencial para no anacronizar.</p>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">1933</span>Boicot de un día a comercios judíos (1 abr, tibio); expulsión del funcionariado (7 abr).</div>
              <div><span class="et">1935</span>Leyes de Núremberg (15 sep): ciudadanía degradada a «súbditos»; prohibición de matrimonios; definición racial (abuelos).</div>
              <div><span class="et">1938</span>«Año de la radicalización»: arianización forzada; Kristallnacht (9–10 nov: 91 muertos, 267 sinagogas, ~30.000 deportados, multa de 1.000 M).</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">1939–41</span>Guetos en Polonia; Einsatzgruppen tras la invasión de la URSS (~1,5 M asesinados).</div>
              <div><span class="et">1942</span>Conferencia de Wannsee (20 ene): coordinación de la «solución final».</div>
              <div><span class="et">Balance</span>~6 M de judíos asesinados. Otras víctimas: ~400.000 esterilizados, ~70.000 del T4, roma y sinti, homosexuales (~50.000 condenas), testigos de Jehová.</div>
            </div>
          </div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Aquí el debate alcanza su forma más seria. <b>Intencionalistas</b>: el genocidio estaba en la lógica (y casi en la letra) de Mein Kampf; la guerra solo dio la oportunidad. <b>Mommsen</b> y los estructuralistas: no hay orden escrita ni plan maestro; hubo «radicalización acumulativa» (burócratas y jefes locales resolviendo «problemas» autocreados con soluciones cada vez más criminales, en competencia por complacer al centro). <b>Kershaw</b> media: sin la obsesión ideológica de Hitler no hay Holocausto, pero su implementación fue exactamente «trabajar en dirección al Führer».</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> En el compare-contraste con Cuba, este es «el contraste más extremo del temario»: exterminio vs inclusión forzada. Ambos subordinan la minoría al proyecto estatal, pero <b>la diferencia moral es abismal y hay que decirla sin equivalencias falsas</b>.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué establecieron las Leyes de Núremberg (1935)?", etiqueta: "fecha",
            opciones: [
              { texto: "Degradaron a los judíos a «súbditos» y prohibieron matrimonios, con definición racial (abuelos).", correcta: true, explicacion: "Correcto: ciudadanía y «protección de la sangre», criterio racial, no religioso." },
              { texto: "Ordenaron directamente la construcción de los campos de exterminio y el inicio de la deportación masiva.", correcta: false, explicacion: "El exterminio se coordina en Wannsee (1942), no en 1935." },
              { texto: "Fueron el pogromo de las sinagogas incendiadas en noviembre.", correcta: false, explicacion: "Eso es la Kristallnacht de 1938, no las Leyes de Núremberg." },
              { texto: "Expulsaron a los judíos del funcionariado por primera vez.", correcta: false, explicacion: "La expulsión del funcionariado fue en abril de 1933." }
            ] },
          { pregunta: "La «radicalización acumulativa» de Mommsen explica el Holocausto como…", etiqueta: "historiador",
            opciones: [
              { texto: "Soluciones cada vez más criminales a problemas autocreados, en competencia por complacer al centro.", correcta: true, explicacion: "Correcto: lectura estructuralista; sin orden escrita ni plan maestro." },
              { texto: "La ejecución literal y planificada desde el principio de una orden escrita por Hitler en Mein Kampf.", correcta: false, explicacion: "Esa es la lectura intencionalista, no la de Mommsen." },
              { texto: "Un hecho sin relación alguna con la ideología nazi.", correcta: false, explicacion: "Kershaw media: sin la obsesión de Hitler no hay Holocausto." },
              { texto: "Una invención de la propaganda aliada de posguerra.", correcta: false, explicacion: "El genocidio fue real; no es una invención." }
            ] }
        ]
      },

      {
        id: "s10", titulo: "10 · Transversal: frases listas y espejos con Castro",
        html: `
          <h3>Los 12 datos espejo (lado Hitler)</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dato de Hitler</th><th>Espejo cubano</th><th>Qué prueban juntos</th></tr></thead>
            <tbody>
              <tr><td>NSDAP 2,6% (1928) → 37,3% (1932) con 6 M de desempleados.</td><td>Cuba sin depresión: renta alta pero analfabetismo rural 40%.</td><td>Crisis aguda como detonante vs malestar estructural como contexto.</td></tr>
              <tr><td>Putsch 1923 fracasa → estrategia de la legalidad.</td><td>Moncada 1953 fracasa → mito fundacional.</td><td>Ambos convierten una derrota en capital político (en direcciones opuestas).</td></tr>
              <tr><td>Nombramiento 30-1-1933 (Papen: «lo arrinconaremos»).</td><td>Huida de Batista 1-1-1959.</td><td>Ninguno «venció»: a uno lo invitaron, al otro le abandonaron el campo.</td></tr>
              <tr><td>Consolidación en 18 meses (Habilitante → Führer ago. 1934).</td><td>Consolidación en ~6 años (Matos 1959 → Girón 1961 → PCC 1965).</td><td>Desde el aparato estatal vs desde la movilización y el conflicto externo.</td></tr>
              <tr><td>Gestapo ~15.000 agentes; 80% denuncias.</td><td>CDR: 800.000 miembros (1961).</td><td>El control se terceriza en la sociedad (Gellately / Domínguez).</td></tr>
              <tr><td>Crisis usada: incendio del Reichstag (feb. 1933).</td><td>Crisis usada: Girón (abr. 1961).</td><td>Ambos convierten una agresión en salto de radicalización.</td></tr>
              <tr><td>Desempleo 6 M → <0,5 M; autarquía fallida.</td><td>Alfabetización 23% → 3,9%; azúcar 75% en 1989.</td><td>Ambos cumplen el objetivo que legitima y fallan el estructural.</td></tr>
              <tr><td>Mujeres: objetivo sacarlas → empleo SUBE a 7,1 M.</td><td>Mujeres: objetivo incorporarlas → empleo 13% → 40%.</td><td>Objetivos opuestos, mismo veredicto: decide la economía; el poder no se comparte.</td></tr>
              <tr><td>Fin del consenso: Stalingrado 1943.</td><td>Prueba superada: Período Especial, PIB −35%.</td><td>Consenso por resultados (frágil) vs por nacionalismo + asedio (resiliente).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Mnemotecnia de historiadores alemanes: «K-G-M-B»</b> → Kershaw (MITO), Gellately (DENUNCIAS), Mason/Overy (ECONOMÍA MANDA), Bracher/Mommsen (PLAN vs CAOS). Cuatro nombres cubren casi todas las preguntas.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Nunca cites textual entre comillas (riesgo de inventar); nunca los amontones («X, Y y Z dicen…»): <b>un historiador por argumento, dos enfrentados por párrafo clave</b>, y siempre cerrás vos con tu juicio. Fórmulas seguras: «Como sostiene X…», «Frente a X, Y subraya que…».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La diferencia clave de consolidación es que Hitler llegó al poder desde el aparato estatal y lo blindó en dieciocho meses, mientras Castro llegó desde la movilización y tardó seis años, usando el conflicto con Estados Unidos como motor de radicalización.»</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El carisma de Hitler era condicional a los éxitos y se quebró con Stalingrado; el de Castro se alimentaba del asedio y sobrevivió hasta a la catástrofe del Período Especial: por eso el "mito de Hitler" no resistió dos inviernos rusos y el castrismo resistió el colapso de su único patrón.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué prueban juntos el incendio del Reichstag (1933) y Girón (1961)?", etiqueta: "concepto",
            opciones: [
              { texto: "Que ambos regímenes convierten una crisis o agresión en un salto de radicalización.", correcta: true, explicacion: "Correcto: es uno de los «12 datos espejo» del PDF." },
              { texto: "Que los dos líderes ganaron elecciones libres y multipartidistas gracias precisamente a esas crisis.", correcta: false, explicacion: "Ni Hitler ni Castro llegaron o se consolidaron por elecciones libres." },
              { texto: "Que ambos países fueron invadidos por la misma potencia extranjera.", correcta: false, explicacion: "Son hechos distintos: un incendio interno y una invasión de exiliados." },
              { texto: "Que las dos crisis frenaron la consolidación del poder.", correcta: false, explicacion: "Al contrario: la aceleraron." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "¿Qué es la Gleichschaltung?", dorso: "«Coordinación/sincronización»: alinear todas las instituciones con el partido. Hitler la completó en 18 meses (feb 1933 – ago 1934)." },
    { id: "fc02", categoria: "concepto", frente: "Dolchstoßlegende", dorso: "«Leyenda de la puñalada por la espalda»: el mito de que el ejército no fue vencido sino traicionado por socialistas, demócratas y judíos. Deslegitimó a Weimar." },
    { id: "fc03", categoria: "concepto", frente: "Art. 48 (Weimar)", dorso: "Permitía al presidente gobernar por decreto en emergencia. Se volvió rutina: 5 decretos en 1930, 66 en 1932. La democracia dejó de funcionar dos años antes de Hitler." },
    { id: "fc04", categoria: "concepto", frente: "Führerprinzip", dorso: "El «principio del líder»: Alemania no necesita un programa sino un líder. Era lo único fijo de la propaganda nazi." },
    { id: "fc05", categoria: "concepto", frente: "Volksgemeinschaft", dorso: "«Comunidad del pueblo»: sociedad racialmente definida, sin conflicto de clases, unida por la lealtad al Führer. Para Schoenbaum, «revolución percibida, no estructural»." },
    { id: "fc06", categoria: "concepto", frente: "Autarquía", dorso: "Autosuficiencia económica (objetivo del Plan Cuatrienal). Fracasó: en 1939 Alemania importaba ~1/3 de sus materias primas." },
    { id: "fc07", categoria: "concepto", frente: "Policracia / «dictador débil»", dorso: "Concepto de Mommsen: el Tercer Reich era un enjambre de jurisdicciones rivales; Hitler, rehén de la dinámica que desató. La política se radicalizaba por «radicalización acumulativa»." },
    { id: "fc08", categoria: "fecha", frente: "28 jun 1919", dorso: "Tratado de Versalles: art. 231, ejército de 100.000, reparaciones de 132.000 M de marcos oro." },
    { id: "fc09", categoria: "fecha", frente: "nov 1923", dorso: "Hiperinflación (1 dólar = 4,2 billones de marcos) y Putsch de Múnich (fracasa en un día)." },
    { id: "fc10", categoria: "fecha", frente: "may 1928", dorso: "Elecciones en plena prosperidad: NSDAP 2,6% y 12 escaños. El dato que resume el surgimiento." },
    { id: "fc11", categoria: "fecha", frente: "jul 1932", dorso: "NSDAP 37,3% y 230 escaños: primer partido y techo electoral de Hitler en elecciones libres." },
    { id: "fc12", categoria: "fecha", frente: "30 ene 1933", dorso: "Hitler, canciller por procedimiento constitucional (3 nazis de 11 ministros). Las élites lo «llevan al poder»." },
    { id: "fc13", categoria: "fecha", frente: "23 mar 1933", dorso: "Ley Habilitante (444–94): legislar sin Reichstag ni presidente. Solo el SPD votó en contra." },
    { id: "fc14", categoria: "fecha", frente: "30 jun 1934", dorso: "Noche de los Cuchillos Largos: Hitler decapita a su SA (Röhm; 85–200 muertos) y compra al ejército." },
    { id: "fc15", categoria: "fecha", frente: "15 sep 1935", dorso: "Leyes de Núremberg: judíos degradados a «súbditos»; definición racial por abuelos." },
    { id: "fc16", categoria: "fecha", frente: "9–10 nov 1938", dorso: "Kristallnacht: 91 muertos, 267 sinagogas incendiadas, ~30.000 deportados, multa de 1.000 M a las víctimas." },
    { id: "fc17", categoria: "fecha", frente: "20 ene 1942", dorso: "Conferencia de Wannsee: coordinación de la «solución final». Balance: ~6 M de judíos asesinados." },
    { id: "fc18", categoria: "fecha", frente: "feb 1943", dorso: "Stalingrado: se quiebra el «mito de Hitler»; el régimen pasa a depender del terror puro." },
    { id: "fc19", categoria: "causa-consecuencia", frente: "¿Por qué fue marginal el NSDAP en 1928?", dorso: "Porque la prosperidad de los «años dorados» (crédito de EE. UU.) no dejaba lugar a los agitadores: solo 2,6%." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Cómo llegó Hitler al poder realmente?", dorso: "No por las urnas (techo 37,3%): la intriga de Papen convenció a Hindenburg. Kershaw: fue «llevado al poder». Orden: crisis→votos, debilidad→oportunidad, élites→poder." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "¿Por qué la SA no servía para tomar el poder?", dorso: "Su función era demostrar dos cosas: que había caos (que ellos producían) y que solo el NSDAP podía imponer orden. Hitler la eliminó en 1934." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "¿Por qué fracasó la autarquía?", dorso: "Los resultados fueron mediocres (combustible sintético solo 1/3 en 1939); la autosuficiencia real solo llegaba por el saqueo (Austria, Checoslovaquia) y la guerra." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "¿Por qué subió el empleo femenino pese al Kinder, Küche, Kirche?", dorso: "El rearme devoró la mano de obra masculina: empleo femenino 4,85 M (1933) → 7,1 M (1939). Mason: ganó la economía." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "¿Por qué se desinfló el «mito de Hitler»?", dorso: "Porque el consenso era condicional a los éxitos: con Stalingrado (1943) la gente dejó de hacer el saludo." },
    { id: "fc25", categoria: "historiador", frente: "Kershaw (palabra ancla: MITO)", dorso: "Carisma condicional a los éxitos; Hitler «llevado al poder»; los subordinados «trabajaban en dirección al Führer». Sirve en casi todo." },
    { id: "fc26", categoria: "historiador", frente: "Gellately (ancla: DENUNCIAS)", dorso: "Consentimiento + coerción: Gestapo de ~15.000 agentes, ~80% de casos por denuncias ciudadanas. La sociedad se vigilaba sola." },
    { id: "fc27", categoria: "historiador", frente: "Mason vs Overy (ancla: ECONOMÍA MANDA)", dorso: "Mason: cuando ideología y economía chocan, gana la economía («huida hacia la guerra» 1939). Overy: no hubo crisis, mandó la ideología." },
    { id: "fc28", categoria: "historiador", frente: "Bracher vs Mommsen (ancla: PLAN vs CAOS)", dorso: "Bracher (intencionalista): Hitler amo con plan. Mommsen (estructuralista): «dictador débil», policracia, radicalización acumulativa." },
    { id: "fc29", categoria: "historiador", frente: "Childers", dorso: "El NSDAP fue un partido «atrapa-todo» (Volkspartei) que capturó el pánico de la clase media; débil entre católicos y obreros organizados." },
    { id: "fc30", categoria: "historiador", frente: "Schoenbaum / Evans", dorso: "Schoenbaum: «revolución percibida, no estructural». Evans: bajo el consenso siempre hubo coerción." },
    { id: "fc31", categoria: "concepto", frente: "Gestapo: ¿cómo controlaba?", dorso: "No vigilando (solo ~15.000 agentes para 65 M): recibiendo denuncias (~80% de los casos). Terror participativo." },
    { id: "fc32", categoria: "concepto", frente: "«Cañones antes que mantequilla»", dorso: "Gasto militar de ~1% del PNB (1933) a 17–23% (1938–39), cuatro veces el británico, comprimiendo el consumo." },
    { id: "fc33", categoria: "fecha", frente: "27–28 feb 1933", dorso: "Incendio del Reichstag y Decreto que suspende libertades: base jurídica del terror hasta 1945." },
    { id: "fc34", categoria: "concepto", frente: "«Trabajar en dirección al Führer»", dorso: "Síntesis de Kershaw: Hitler fijaba la dirección ideológica y los subordinados competían por anticiparse a su voluntad. El caos era el motor de radicalización." },
    { id: "fc35", categoria: "concepto", frente: "KdF y el Volkswagen", dorso: "«Fuerza por la alegría»: vacaciones subsidiadas (~10 M en 1938). 340.000 ahorristas pagaron el VW y ninguno recibió el auto." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Cuál fue el techo electoral de Hitler en elecciones libres?", etiqueta: "fecha",
      opciones: [
        { texto: "37,3% en julio de 1932, primer partido pero sin mayoría absoluta.", correcta: true, explicacion: "Correcto: en noviembre bajó al 33,1%; nunca ganó el poder en las urnas." },
        { texto: "El 43,9% obtenido en las elecciones semi-libres de marzo de 1933.", correcta: false, explicacion: "Esas no fueron libres (oposición perseguida) y fueron posteriores a su nombramiento." },
        { texto: "La mayoría absoluta del 51% alcanzada en 1932.", correcta: false, explicacion: "Nunca alcanzó mayoría absoluta en elecciones libres." },
        { texto: "El plebiscito del 89,9% que lo confirmó como Führer.", correcta: false, explicacion: "Ese fue un plebiscito de 1934, no una elección libre." }
      ] },
    { pregunta: "Según Kershaw, Hitler llegó al poder porque…", etiqueta: "historiador",
      opciones: [
        { texto: "Fue «llevado al poder» por un círculo de élites conservadoras que creía controlarlo.", correcta: true, explicacion: "Correcto: Papen convenció a Hindenburg; «lo arrinconaremos hasta que chille»." },
        { texto: "Ganó una mayoría absoluta arrolladora en las elecciones totalmente libres de julio de 1932.", correcta: false, explicacion: "No: su techo libre fue 37,3% y venía bajando." },
        { texto: "Dio un golpe de Estado militar exitoso en enero de 1933.", correcta: false, explicacion: "Juró como canciller por un procedimiento constitucional, no por un golpe." },
        { texto: "Lo impusieron las potencias extranjeras tras Versalles.", correcta: false, explicacion: "Versalles es contexto; no impuso a Hitler." }
      ] },
    { pregunta: "El argumento de Gellately sobre la Gestapo es que…", etiqueta: "historiador",
      opciones: [
        { texto: "Con solo ~15.000 agentes controlaba por denuncias ciudadanas (~80% de los casos).", correcta: true, explicacion: "Correcto: consentimiento + coerción; la sociedad se vigilaba sola." },
        { texto: "Tenía una red de cientos de miles de agentes en cada esquina del país.", correcta: false, explicacion: "Tenía ~15.000 para 65 millones; de ahí su tesis." },
        { texto: "El terror era un invento que en realidad nunca se aplicó.", correcta: false, explicacion: "Gellately dice que fue real y brutal, pero participativo." },
        { texto: "El régimen era un Estado policial totalitario y omnipresente tal como lo creían Bracher y Bullock.", correcta: false, explicacion: "Gellately desmiente esa imagen con los números." }
      ] },
    { pregunta: "¿Qué pasó el 5 de marzo de 1933 y por qué importa?", etiqueta: "fecha",
      opciones: [
        { texto: "Elecciones con terror: el NSDAP sacó 43,9% y ni así tuvo mayoría absoluta.", correcta: true, explicacion: "Correcto: muestra el límite del control; necesitó al DNVP." },
        { texto: "Hitler fue nombrado canciller por Hindenburg ese mismo día, con un gabinete de solo tres nazis.", correcta: false, explicacion: "El nombramiento fue el 30 de enero, no el 5 de marzo." },
        { texto: "Se votó la Ley Habilitante por unanimidad.", correcta: false, explicacion: "La Habilitante fue el 23 de marzo, 444 a 94." },
        { texto: "Se incendió el Reichstag.", correcta: false, explicacion: "El incendio fue el 27–28 de febrero." }
      ] },
    { pregunta: "La Noche de los Cuchillos Largos (1934) sirvió para que Hitler…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Eliminara a su propia SA y comprara la lealtad del ejército.", correcta: true, explicacion: "Correcto: la SA (segunda revolución) amenazaba al ejército, lo único que podía derrocarlo." },
        { texto: "Derrotara una invasión extranjera lanzada contra la frontera oriental alemana.", correcta: false, explicacion: "No hubo invasión; fue una purga interna." },
        { texto: "Ganara las elecciones de marzo de 1933.", correcta: false, explicacion: "Fue en 1934, después de esas elecciones." },
        { texto: "Firmara el Concordato con el Vaticano.", correcta: false, explicacion: "El Concordato fue en julio de 1933." }
      ] },
    { pregunta: "¿Qué objetivo económico logró y cuál falló el régimen?", etiqueta: "concepto",
      opciones: [
        { texto: "Logró el empleo (6 M → <0,5 M en 1938); falló la autarquía (importaba ~1/3).", correcta: true, explicacion: "Correcto: éxito en lo que legitimaba, fracaso en lo estructural." },
        { texto: "Logró la autosuficiencia total en materias primas pero no pudo bajar nunca el desempleo.", correcta: false, explicacion: "Es al revés: el empleo bajó, la autarquía fracasó." },
        { texto: "Falló en ambos: el desempleo siguió en 6 millones.", correcta: false, explicacion: "El desempleo cayó a menos de medio millón." },
        { texto: "Logró ambos objetivos de forma completa y sostenible.", correcta: false, explicacion: "El «éxito» global era insostenible sin saqueo y guerra." }
      ] },
    { pregunta: "El empleo femenino bajo Hitler…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Subió de 4,85 a 7,1 M porque el rearme necesitaba mano de obra: ganó la economía (Mason).", correcta: true, explicacion: "Correcto: la ideología Kinder-Küche-Kirche cedió ante la necesidad económica." },
        { texto: "Cayó prácticamente a cero porque la ideología maternal del Kinder, Küche, Kirche se aplicó a rajatabla.", correcta: false, explicacion: "Lo contrario: subió más de 2 millones." },
        { texto: "No cambió porque las mujeres tenían prohibido trabajar.", correcta: false, explicacion: "Sí cambió: aumentó claramente entre 1933 y 1939." },
        { texto: "Subió porque el régimen buscaba emancipar a la mujer.", correcta: false, explicacion: "El único objetivo logrado fue su exclusión del poder, no la emancipación." }
      ] },
    { pregunta: "¿Qué oposición logró frenar algo al régimen?", etiqueta: "concepto",
      opciones: [
        { texto: "El obispo Von Galen, cuyos sermones de 1941 frenaron el programa de «eutanasia» T4.", correcta: true, explicacion: "Correcto: la protesta moral pública con base social podía frenar al régimen." },
        { texto: "El KPD, que derrocó al régimen con una huelga general.", correcta: false, explicacion: "El KPD fue aplastado en 1933; no derrocó nada." },
        { texto: "El atentado del 20 de julio de 1944, que mató a Hitler.", correcta: false, explicacion: "La bomba estalló pero Hitler sobrevivió." },
        { texto: "Los informes Sopade del SPD exiliado, que organizaron una resistencia obrera de masas en todo el Reich.", correcta: false, explicacion: "Los Sopade registraban queja, pero poca oposición política real." }
      ] },
    { pregunta: "El debate intencionalistas vs estructuralistas enfrenta a…", etiqueta: "historiador",
      opciones: [
        { texto: "Bracher (Hitler con plan) contra Mommsen («dictador débil», policracia).", correcta: true, explicacion: "Correcto: plan vs caos; Kershaw media con «trabajar en dirección al Führer»." },
        { texto: "Kershaw contra Gellately sobre el número exacto de agentes que tuvo la Gestapo.", correcta: false, explicacion: "Ese no es el debate intencionalismo/estructuralismo." },
        { texto: "Mason contra Overy sobre el rol de las mujeres.", correcta: false, explicacion: "Mason/Overy es el debate económico, no el estructural." },
        { texto: "Childers contra Schoenbaum sobre el electorado nazi.", correcta: false, explicacion: "No es ese el debate; además no se enfrentan así." }
      ] },
    { pregunta: "La Volksgemeinschaft, según Schoenbaum, fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Una «revolución percibida, no estructural»: cambió el estatus subjetivo, no las clases.", correcta: true, explicacion: "Correcto: significativa en la socialización, superficial en la estructura, radical en la exclusión racial." },
        { texto: "Una revolución social total que abolió las clases, la propiedad privada y la jerarquía de ingresos.", correcta: false, explicacion: "Las clases y la propiedad siguieron intactas." },
        { texto: "Un fracaso absoluto sin ningún efecto sobre la sociedad.", correcta: false, explicacion: "Tuvo efecto real en la percepción y la juventud." },
        { texto: "La inclusión igualitaria de todos los grupos alemanes.", correcta: false, explicacion: "Se definía por exclusión: quién quedaba afuera." }
      ] },
    { pregunta: "El Decreto del Incendio del Reichstag (feb 1933)…", etiqueta: "fecha",
      opciones: [
        { texto: "Suspendió las libertades y habilitó la «custodia preventiva»: base del terror hasta 1945.", correcta: true, explicacion: "Correcto: ~4.000 comunistas arrestados en días." },
        { texto: "Disolvió el ejército y creó la SS como fuerza armada única.", correcta: false, explicacion: "No disolvió el ejército; la SS creció después (1936)." },
        { texto: "Otorgó plenos poderes legislativos a Hitler por cuatro años para legislar sin el Reichstag.", correcta: false, explicacion: "Esos plenos poderes son la Ley Habilitante (23 mar), no el Decreto." },
        { texto: "Prohibió las reparaciones de Versalles.", correcta: false, explicacion: "Nada que ver: el Decreto es sobre libertades internas." }
      ] },
    { pregunta: "¿Cómo conviene presentar el contraste racial Hitler/Castro?", etiqueta: "trampa",
      opciones: [
        { texto: "Como el contraste más extremo (exterminio vs inclusión forzada), sin equivalencias falsas.", correcta: true, explicacion: "Correcto: la diferencia moral es abismal y hay que decirla explícitamente." },
        { texto: "Como dos políticas raciales esencialmente idénticas en sus efectos y en su gravedad moral.", correcta: false, explicacion: "La diferencia moral es abismal: no son equivalentes." },
        { texto: "Omitiendo el tema racial porque no entra en Paper 2.", correcta: false, explicacion: "La política de minorías sí entra en «políticas y resultados»." },
        { texto: "Afirmando que Castro fue más genocida que Hitler.", correcta: false, explicacion: "Es falso y una equivalencia invertida indefendible." }
      ] },
    { pregunta: "La diferencia de consolidación entre Hitler y Castro es que…", etiqueta: "concepto",
      opciones: [
        { texto: "Hitler consolidó en 18 meses desde el aparato estatal; Castro en ~6 años desde la movilización.", correcta: true, explicacion: "Correcto: aparato estatal vs movilización + conflicto externo." },
        { texto: "Ambos consolidaron en exactamente el mismo plazo y con el mismo método de movilización de masas.", correcta: false, explicacion: "Ni el plazo ni el método coinciden." },
        { texto: "Castro consolidó en 18 meses y Hitler tardó seis años.", correcta: false, explicacion: "Es al revés: Hitler 18 meses, Castro ~6 años." },
        { texto: "Ninguno de los dos llegó nunca a consolidar el poder.", correcta: false, explicacion: "Ambos lo consolidaron plenamente." }
      ] },
    { pregunta: "¿Qué muestra el fracaso de la Iglesia nazi (Concordato, Iglesia Confesante)?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Que la única institución con lealtades superiores al Estado sobrevivió: el límite del control.", correcta: true, explicacion: "Correcto: fracaso relativo; la asistencia religiosa no se desplomó." },
        { texto: "Que el régimen eliminó por completo toda práctica religiosa.", correcta: false, explicacion: "La religiosidad no desapareció; las iglesias conservaron voz." },
        { texto: "Que la Iglesia, católica y protestante, apoyó sin fisuras ni disidencias al nazismo hasta 1945.", correcta: false, explicacion: "Hubo resistencia: Iglesia Confesante, Von Galen, Mit brennender Sorge." },
        { texto: "Que Hitler reemplazó con éxito el cristianismo por el culto al Führer.", correcta: false, explicacion: "Ese objetivo de largo plazo no se logró; pospuso la confrontación." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Examine las condiciones que explican el surgimiento de un estado autoritario (Hitler y Castro).", frecuencia: "Muy alta",
        plan: "Capas: estructural (Versalles, Weimar vaciada / Platt, desigualdad), coyuntural (Depresión / golpe de 1952), personal (métodos, élites). Kershaw «llevado al poder» / Pérez-Stable nacionalismo frustrado." },
      { pregunta: "Compare y contraste los métodos usados para llegar al poder por dos líderes autoritarios.", frecuencia: "Muy alta",
        plan: "Fuerza (Putsch fracasa; SA intimida / Moncada, Granma, Sierra), propaganda (Goebbels / Matthews, Radio Rebelde), y el factor decisivo (élites / colapso de Batista). Farber: descomposición del Estado." },
      { pregunta: "¿En qué medida el régimen de Hitler ejerció un control total sobre la sociedad?", frecuencia: "Muy alta",
        plan: "En escasa medida absoluta: 43,9% con terror (1933), Gestapo 15.000/80% denuncias (Gellately), policracia (Mommsen), iglesias resisten (Von Galen). Pero sí blindó toda organización alternativa. Veredicto: consentimiento + coerción." },
      { pregunta: "¿Lograron sus objetivos las políticas económicas del régimen nazi?", frecuencia: "Alta",
        plan: "Empleo (6 M → 0,5): sí. Autarquía (1/3 importado): no. Sostenible solo con saqueo y guerra. Mason vs Overy. Veredicto: cumplió el objetivo que legitimaba, falló el estructural." },
      { pregunta: "Examine el tratamiento de la oposición por parte de un estado autoritario.", frecuencia: "Alta",
        plan: "Círculos: queja, izquierda aplastada, iglesias, juventud, élites militares (20 jul 1944). Von Galen frena T4. Contraste: Alemania destruye la oposición, Cuba la exporta." },
      { pregunta: "¿Produjeron las políticas sociales un cambio significativo? (comparar con Castro).", frecuencia: "Media",
        plan: "Schoenbaum: revolución percibida, no estructural; clases intactas, radical solo en exclusión racial. Contraste con Cuba: cambio real y universalista vs percibido y excluyente." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida llegó Hitler al poder por medios legales y democráticos?",
        tesis: "Llegó por una vía formalmente constitucional pero no democrática: la Depresión fabricó los votos, la democracia ya estaba vaciada y fueron las élites, no el electorado, las que lo entregaron el poder.",
        pasos: [
          "Vía legal: tras el fracaso del Putsch (1923), «estrategia de la legalidad»; juró como canciller el 30-1-1933 por procedimiento constitucional.",
          "Pero no democrática: techo del 37,3% (jul 1932), bajando a 33,1%; nunca mayoría absoluta en elecciones libres.",
          "El factor decisivo fueron las élites: Papen, Hindenburg, la carta de industriales (nov 1932). Kershaw: «llevado al poder».",
          "Contexto habilitante: Weimar gobernaba por decreto (art. 48, 66 en 1932); la democracia dejó de funcionar dos años antes.",
          "Conclusión: legal en la forma, antidemocrático en el fondo; orden causal crisis→votos, debilidad→oportunidad, élites→poder."
        ] },
      { titulo: "Plan B · ¿Hasta qué punto fue el régimen nazi un estado totalitario?",
        tesis: "Totalitario en la ambición y en la destrucción de la sociedad civil, pero lejos de omnipotente: dependía del consentimiento y dejaba espacios.",
        pasos: [
          "A favor del control: terror (Decreto del Incendio, Dachau, Volksgerichtshof 16.000), partido único, Cámara de Cultura, radio 70%.",
          "En contra: 43,9% aun con terror (mar 1933); Gestapo 15.000 / 80% denuncias (Gellately); iglesias resisten (Von Galen frena T4).",
          "Estructura interna: policracia y «dictador débil» (Mommsen); el caos no era control sino motor de radicalización.",
          "Síntesis de Kershaw: «trabajar en dirección al Führer»: dirección intencional, mecánica oportunista.",
          "Conclusión: describe la ambición, no el alcance; De acuerdo solo en escasa medida (Mommsen / Dominguez para el contraste cubano)."
        ] },
      { titulo: "Plan C · Compare y contraste la importancia de la fuerza en el ascenso de Hitler y Castro.",
        tesis: "La fuerza pesó de forma inversa: marginal en Alemania (el poder llegó por nombramiento), central pero simbólica en Cuba (3.000 contra 40.000 no ganan una guerra convencional, ganan una de legitimidad).",
        pasos: [
          "Hitler: el Putsch fracasa; la SA de 400.000 solo intimida; el poder llega por la intriga de las élites.",
          "Castro: Moncada, Granma, Sierra; la fuerza fue el método central pero su eficacia fue simbólica y política.",
          "Similitud: ambos convierten una derrota (Putsch / Moncada) en capital político.",
          "Diferencia: a Hitler lo «invitaron» las élites; a Castro le «abandonaron el campo» (Batista huye, EE. UU. lo soltó en 1958). Farber: descomposición del Estado.",
          "Conclusión: en ninguno de los dos la fuerza venció militarmente; decidieron la debilidad del régimen previo y el talento político."
        ] },
      { titulo: "Plan D · ¿Lograron sus objetivos las políticas económicas de Hitler?",
        tesis: "Lograron el objetivo que legitimaba el régimen (empleo) y fracasaron en el estructural (autarquía); el «milagro» era insostenible sin saqueo y guerra.",
        pasos: [
          "Objetivo de legitimación (empleo): 6 M → <0,5 M (1938), pleno empleo. Con letra chica (exclusiones), pero real.",
          "Objetivo estructural (autarquía): fracaso; combustible sintético 1/3, materias primas 1/3 importadas en 1939.",
          "Rearme: gasto militar de ~1% a 17–23% del PNB; «cañones antes que mantequilla»; salarios apenas en 1929.",
          "Mason: «huida hacia la guerra» por crisis interna; Overy: no hubo crisis, mandó la ideología.",
          "Conclusión: la afirmación «rara vez lograron sus objetivos» es excesiva: lograron los del poder y fallaron los que requerían autonomía."
        ] },
      { titulo: "Plan E · Examine el papel de la propaganda en el mantenimiento del poder nazi.",
        tesis: "La propaganda fue un multiplicador decisivo y el constructor del «mito de Hitler», pero parasitaria de los resultados y de la coerción: importante, no autosuficiente.",
        pasos: [
          "Aparato: Ministerio de Goebbels (1933), Cámara de Cultura, radio del 25% al 70%, Riefenstahl.",
          "Producto central: el «mito de Hitler» (Kershaw), que separaba al Führer honesto del partido corrupto.",
          "Límite 1: funcionaba porque decía lo que la gente quería oír (Gellately), no por lavado de cerebro.",
          "Límite 2: condicional a los éxitos; se desinfló con Stalingrado (1943).",
          "Conclusión: amplificador y constructor del mito, inseparable de la coerción que silenciaba las voces alternativas."
        ] },
      { titulo: "Plan F · ¿Produjeron un cambio social significativo las políticas de Hitler? (comparar con Castro).",
        tesis: "Cambio percibido y excluyente en Alemania frente a cambio real y universalista en Cuba; en ambos, pagado con la libertad.",
        pasos: [
          "Volksgemeinschaft: KdF 10 M, HJ 8,7 M, el VW que nadie recibió; clases intactas. Schoenbaum: revolución percibida.",
          "Evans: bajo el consenso siempre la coerción (obrero atado al empleo desde 1935).",
          "Mujeres: objetivo sacarlas, empleo sube a 7,1 M (Mason: manda la economía).",
          "Contraste con Cuba: alfabetización 3,9%, mortalidad infantil 7/1.000; cambio medible y universalista.",
          "Conclusión: significativo en socialización y exclusión racial; superficial en la estructura de clases."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida llegó Hitler al poder por medios legales?»",
        parrafos: [
          { texto: "Hitler juró como canciller el 30 de enero de 1933 por un procedimiento perfectamente constitucional, y de ahí surge la tentación de responder «en gran medida». Pero legal no es lo mismo que democrático. Tesis: Hitler llegó por una vía formalmente legal que escondía un proceso profundamente antidemocrático: la Gran Depresión fabricó sus votos, la democracia de Weimar ya se había vaciado a sí misma mediante el gobierno por decreto, y fueron las élites conservadoras —no el electorado— las que, como sostiene Kershaw, lo «llevaron al poder».", nota: "Intro que concede el punto legal y lo matiza con la tesis; historiador clave anticipado." },
          { texto: "La vía fue legal porque Hitler había aprendido del fracaso del Putsch de Múnich (1923) la «estrategia de la legalidad»: llegar por las urnas y destruir el sistema desde adentro. Esto se ve en que renunció al golpe y construyó un partido de masas que pasó del 2,6% (1928) al 37,3% (julio de 1932). Esto demuestra que la fachada institucional fue deliberada: Hitler quería el poder con apariencia de legitimidad.", nota: "Párrafo que sostiene la parte «legal» con evidencia fechada (PEEL)." },
          { texto: "Sin embargo, no fue democrático. Su techo en elecciones libres fue el 37,3%, y en noviembre de 1932 bajó al 33,1%: nunca obtuvo mayoría. El poder no se lo dio el voto sino la intriga de Von Papen, que convenció a Hindenburg de nombrarlo con solo tres nazis en once ministerios, calculando que lo arrinconarían «hasta que chille». Esto se enmarca en una democracia ya muerta: Brüning gobernaba por el artículo 48 (66 decretos en 1932). Por lo tanto, la legalidad era una cáscara sobre una decisión de élites.", nota: "Contraste central: evidencia electoral + papel de las élites + contexto institucional." },
          { texto: "En conclusión, Hitler llegó al poder en gran medida por medios legales pero en muy escasa medida por medios democráticos. El orden causal que conviene defender es claro: la crisis económica creó los votos, la debilidad institucional creó la oportunidad y la decisión de las élites entregó el poder. La forma constitucional no debe confundirse con una victoria popular: como resume Kershaw, Hitler no tomó el poder, fue llevado a él.", nota: "Conclusión con grado («en gran medida»/«en escasa medida») y veredicto jerarquizado." }
        ] },
      { titulo: "Ensayo 2 · «¿Hasta qué punto ejerció el régimen nazi un control total sobre la sociedad?»",
        parrafos: [
          { texto: "La imagen de una dictadura hipereficiente y omnipresente es, en buena parte, propaganda del propio régimen. Tesis: el nazismo fue totalitario en su ambición y en su destrucción de la sociedad civil autónoma, pero su control estuvo lejos de ser total: dependía del consentimiento activo de la población y dejaba espacios que no pudo cerrar. El mejor resumen es el de Gellately: quince mil agentes no pueden vigilar a sesenta y cinco millones.", nota: "Intro con tesis matizada y historiador central." },
          { texto: "El aparato de control fue real y temible: el Decreto del Incendio del Reichstag (febrero de 1933) suspendió las libertades, Dachau abrió ese mismo año, el Tribunal Popular dictó unas 16.000 penas de muerte y la Cámara de Cultura convirtió la censura en autocensura laboral. Esto demuestra que la ambición totalitaria existió y que la sociedad civil independiente fue aniquilada.", nota: "Lado «a favor del control» con evidencia; concede antes de refutar." },
          { texto: "Pero el control no fue total. Incluso el 5 de marzo de 1933, con la oposición perseguida y la radio monopolizada, el NSDAP solo obtuvo 43,9%. La Gestapo tenía apenas ~15.000 agentes y, según Gellately, el 80% de sus casos nacía de denuncias ciudadanas: el régimen no vigilaba, era vigilado por la propia sociedad. Y las iglesias, única institución con lealtades superiores al Estado, resistieron: los sermones de Von Galen frenaron en 1941 el programa T4. Mommsen añade que, por dentro, el régimen era una «policracia» gobernada por un «dictador débil».", nota: "Contraste con tres evidencias (voto, Gellately, Von Galen) y el matiz estructural de Mommsen." },
          { texto: "En conclusión, el régimen nazi ejerció un control total solo en escasa medida: logró destruir toda organización alternativa, pero se sostuvo sobre una mezcla de consentimiento y coerción más que sobre la vigilancia omnipotente. La síntesis de Kershaw lo cierra: los alemanes «trabajaban en dirección al Führer», de modo que el control fue tanto obra de la sociedad sobre sí misma como del aparato estatal.", nota: "Conclusión con grado y veredicto; cierra con el historiador." }
        ] }
    ],
    guia: {
      tesis: "Respondé con grado. Tesis maestra del caso Hitler: «Hitler no tomó el poder: la Depresión le dio los votos, Weimar ya estaba vaciada y las élites lo llevaron al poder; consolidó en 18 meses y se sostuvo por consentimiento tanto como por coerción.»",
      argumentos: [
        "Respetá las tres fases: surgimiento (1919–33), consolidación (1933–34), mantenimiento (1933–45). El examinador penaliza mezclarlas.",
        "Cada párrafo comparativo: afirmación → dato de Hitler → dato de Castro → por qué difieren → historiador → mini-juicio.",
        "En «¿en qué medida?»: tesis con grado («en gran medida, pero…»; «solo en escasa medida, porque…»)."
      ],
      evidencia: [
        "Surgimiento: 2,6% (1928) → 37,3% (1932) con 6 M de desempleados; 30-1-1933 (3 nazis de 11).",
        "Consolidación: Decreto del Incendio (feb 1933), Habilitante 444–94 (mar 1933), Cuchillos Largos (jun 1934), Führer (ago 1934, plebiscito 89,9%).",
        "Políticas: desempleo 6 M → <0,5 M (1938); gasto militar 17–23% PNB; empleo femenino 4,85 M → 7,1 M; ~6 M de judíos asesinados."
      ],
      historiografia: [
        "«K-G-M-B»: Kershaw (mito / llevado al poder / trabajar en dirección al Führer), Gellately (denuncias), Mason vs Overy (economía manda), Bracher vs Mommsen (plan vs caos).",
        "Regalo: Childers (electorado atrapa-todo), Schoenbaum (revolución percibida), Evans, Broszat (autocoordinación), Bullock.",
        "Un historiador por argumento, dos enfrentados por párrafo clave; nunca cites textual entre comillas; cerrá vos con tu juicio."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej. «el régimen fue totalitario y omnipotente» o «la economía fue un éxito rotundo») y refutala con evidencia (43,9% con terror, Gestapo de 15.000, autarquía fallida) que confirme tu tesis."
    }
  }
});
