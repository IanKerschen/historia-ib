/* ============================================================
   tema-t8-cuba.js — Paper 2, Tema 8 (Movimientos independentistas)
   Cuba y José Martí (1868–1902)
   Transcripción fiel del PDF "Tema8_en_profundidad_Cuba_Vietnam".
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "t8-cuba",
  carpeta: "p2-t8",
  titulo: "Cuba: José Martí",
  subtitulo: "Movimiento independentista cubano · 1868–1902 · origen, métodos y primeros 10 años",
  periodo: "Origen y métodos 1868–1898 · «Primeros 10 años» 1902–1912",
  estado: "listo",
  etiquetas: ["Paper 2", "Tema 8", "independencia", "Cuba", "José Martí", "nacionalismo", "1898", "Enmienda Platt"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Cuba tuvo que inventar su nación (contra España, entre razas) y construyó un nacionalismo —el martiano, antirracista— que resolvió los tres problemas de 1868 (región, clase, raza) y organizó al exilio en el PRC. Pero el movimiento tuvo líderes y no una organización que los sobreviviera: Martí murió a los tres meses, Maceo al año siguiente, y cuando los cubanos estaban ganando en 1898 entró Estados Unidos, decidió la guerra en diez semanas y confiscó la victoria. La independencia de 1902 no fue obra cubana: nació tutelada por la Enmienda Platt, con la soberanía hipotecada.",
    historiadoresLinea: [
      { nombre: "Pérez Jr.", linea: "«CONFISCADA»: los cubanos estaban ganando en 1898; EE. UU. intervino para impedir una Cuba independiente de ejército multirracial y sustituyó a España (Platt + Reciprocidad = anexión económica)." },
      { nombre: "Thomas", linea: "«ESTANCADA»: en 1898 la guerra estaba estancada (los mambises no tomaban las ciudades) y el movimiento fragmentado tras Martí y Maceo; la debilidad española y la intervención decidieron." },
      { nombre: "Ferrer", linea: "«SIN RAZAS»: la insurgencia fue multirracial y antirracista (~40% de oficiales de color en 1895); ese nacionalismo sin razas le dio masas al independentismo, y la república de 1902 lo traicionó." },
      { nombre: "De la Fuente", linea: "«1912»: la masacre del PIC muestra que la nueva nación eligió el orden racial sobre el ideal martiano; continuidad del racismo en la república." }
    ],
    datosClave: [
      { grupo: "Cuba: datos que valen oro", items: [
        "Colonia española desde 1511; tras Haití (1791–1804), Cuba = primer productor mundial de azúcar con ~800.000 esclavos.",
        "Tres corrientes: independencia, anexión (muere con la Guerra de Secesión de EE. UU.) y autonomía.",
        "Hacia 1894 EE. UU. compraba ~90% de las exportaciones cubanas: colonia política de España, económica de EE. UU.",
        "10 oct 1868 Grito de Yara (Céspedes) · Guerra de los Diez Años (~200.000 †) · Pacto del Zanjón (1878) · Protesta de Baraguá (Maceo).",
        "Guerra Chiquita (1879–80) fracasa · abolición definitiva de la esclavitud (1886).",
        "Martí (1853–1895): Nuestra América (1891), «con todos y para el bien de todos» (Tampa, 1891), PRC (1892), periódico Patria; tabaqueros aportan el 10% del salario.",
        "Arancel Wilson-Gorman (1894) hunde el azúcar · 24 feb 1895 Grito de Baire · 19 may 1895 Martí † en Dos Ríos.",
        "Invasión Oriente→Occidente (oct 95–ene 96, 1.500 km), la «tea»; ~40.000 mambises vs ~200.000 españoles; Weyler: reconcentración (~150.000–170.000 † civiles); dic 1896 Maceo †.",
        "15 feb 1898 explosión del Maine (266 †) · Enmienda Teller · guerra de 10 semanas · cubanos excluidos de Santiago y del Tratado de París (10 dic 1898).",
        "Ocupación de EE. UU. 1899–1902; Ejército Libertador disuelto ($75 por fusil); Enmienda Platt (1901, 15–14): intervención + Guantánamo. 20 may 1902: república (Estrada Palma).",
        "Reciprocidad (1903): azúcar 0,3 → 1 M t (1900–05); ~60% de la tierra rural extranjera.",
        "Fraude de 1905 → Guerrita de Agosto (1906) → 2ª ocupación (1906–09, Magoon); intervenciones 1912 y 1917.",
        "PIC (1908, Estenoz) · Ley Morúa (1910) lo prohíbe · may 1912: alzamiento y masacre de ~3.000 negros con marines desembarcados."
      ]}
    ],
    comparacion: [
      { eje: "Identidad", texto: "El nacionalismo cubano hubo que inventarlo (contra España, entre razas); el vietnamita solo había que activarlo (mil años resistiendo a China). Diferencia de partida." },
      { eje: "Organización", texto: "Cuba organizó el exilio (PRC, 1892, partido de la emigración); Vietnam organizó el territorio (contra-Estado). De ahí 1898 vs. 1945." },
      { eje: "Liderazgo", texto: "Cuba tuvo líderes (Martí, Gómez, Maceo) pero sin organización que los sobreviviera; Martí murió a los 3 meses. Personal y truncado." },
      { eje: "Coyuntura internacional", texto: "El vacío cubano de 1898 lo llenó otro imperio (EE. UU.) porque no había Estado cubano en espera; el vietnamita de 1945 lo llenó el movimiento." },
      { eje: "Resultado", texto: "Independencia formal 1902, tutelada por la Platt («inconclusa» hasta 1959): creció rápido con la Reciprocidad pero pagó con la soberanía." }
    ],
    veredictos: [
      { titulo: "Nacionalismo", texto: "El nacionalismo martiano fue el pegamento que resolvió los tres problemas de 1868 (región, clase, raza): necesario para unificar, insuficiente sin la crisis de 1894 y sin el ejército." },
      { titulo: "La guerra y 1898", texto: "La violencia cubana fue necesaria pero no suficiente: destruyó el poder español en el campo pero no pudo rematarlo; la intervención fue decisiva para el resultado y letal para su contenido." },
      { titulo: "Primeros 10 años", texto: "La república nació con tres hipotecas —política (Platt), económica (monocultivo y tierra extranjera) y racial (masacre de 1912)—: creció sin soberanía y enterró el ideal martiano." }
    ]
  },

  /* ===================== HISTORIADORES (4 del PDF + regalo) ===================== */
  historiadores: [
    {
      nombre: "Louis A. Pérez Jr.", nacionalidad: "Historiador estadounidense (cubanista)",
      obra: "The War of 1898 · Cuba Between Empires",
      postura: "«CONFISCADA»: la intervención robó la victoria cubana",
      funcion: "Guerra de 1898, factores externos, éxito, primeros 10 años.",
      ideaCentral: "Los cubanos estaban ganando: treinta años de guerra habían quebrado a España, y la intervención de 1898 no fue un rescate sino una confiscación de la victoria. EE. UU. entró precisamente para impedir una Cuba independiente gobernada por su ejército multirracial, y por eso excluyó a los cubanos de la rendición de Santiago y del Tratado de París. Hasta el nombre habitual —«guerra hispano-americana»— borra a los cubanos de su propia guerra. La Platt y la Reciprocidad fueron una «anexión económica».",
      matiz: "También pone el acento en la estructura: la economía azucarera atada a EE. UU. (que compraba ~90% en 1894) y la crisis del arancel de 1894 hicieron insostenible el statu quo colonial; el nacionalismo dio forma a un descontento que la economía había creado.",
      fraseLista: "Como sostiene Pérez, la intervención de 1898 confiscó una victoria en marcha: EE. UU. entró para impedir una Cuba independiente de ejército multirracial, y sustituyó a España con la Platt y la Reciprocidad.",
      paraPreguntas: ["Guerra y factores externos", "Causas del éxito/fracaso", "Primeros 10 años", "Si solo recordás uno de Cuba, este"]
    },
    {
      nombre: "Hugh Thomas", nacionalidad: "Historiador británico",
      obra: "Cuba: The Pursuit of Freedom",
      postura: "«ESTANCADA»: en 1898 la guerra estaba empatada",
      funcion: "Contrapunto de Pérez; liderazgo y otros factores.",
      ideaCentral: "En 1898 la guerra estaba estancada: los mambises no podían tomar las ciudades y, sin la intervención, el conflicto pudo prolongarse años. Además, el movimiento estaba fragmentado tras las muertes de Martí (1895) y Maceo (1896). La debilidad española y la intervención fueron lo que decidió.",
      matiz: "Es el escéptico frente a Pérez: si Pérez dice que la intervención «robó una victoria», Thomas dice que «compró un empate»; en ambos casos la independencia de 1902 no fue obra cubana.",
      fraseLista: "Thomas, en cambio, ve en 1898 una guerra estancada: los mambises no tomaban las ciudades y el movimiento estaba fragmentado tras Martí y Maceo, de modo que la intervención decidió un empate.",
      paraPreguntas: ["El contrapunto de Pérez en cualquier pregunta", "Liderazgo (fragmentación cubana)", "Otros factores del éxito"]
    },
    {
      nombre: "Ada Ferrer", nacionalidad: "Historiadora cubano-estadounidense",
      obra: "Insurgent Cuba",
      postura: "«SIN RAZAS»: el nacionalismo antirracista le dio masas",
      funcion: "Nacionalismo, raza, factores sociales, primeros 10 años.",
      ideaCentral: "Lo revolucionario del movimiento fue su nacionalismo antirracista: en un mundo de imperios racistas, el ejército rebelde cubano fue un espacio multirracial real —hacia 1895, alrededor del 40% de los oficiales eran negros o mulatos— y esa promesa de una nación «sin razas» fue lo que le dio masas al independentismo. La república de 1902 traicionó ese proyecto (Ley Morúa 1910, masacre de 1912).",
      matiz: "El antirracismo martiano («no hay odio de razas, porque no hay razas») no era retórica: se materializó en la composición multirracial del Ejército Libertador.",
      fraseLista: "Según Ferrer, lo revolucionario del independentismo cubano fue su nacionalismo antirracista: un ejército multirracial (~40% de oficiales de color en 1895) que prometía una nación «sin razas» y así ganó masas.",
      paraPreguntas: ["Nacionalismo e ideología", "Raza y factores sociales", "Primeros 10 años (traición del ideal)"]
    },
    {
      nombre: "Alejandro de la Fuente", nacionalidad: "Historiador cubano",
      obra: "A Nation for All (estudio sobre raza en Cuba)",
      postura: "«1912»: la república eligió el orden racial sobre Martí",
      funcion: "Desafíos étnico-raciales post-independencia.",
      ideaCentral: "La masacre del Partido Independiente de Color (1912) muestra que la nueva nación eligió el orden racial por encima del ideal martiano «con todos y para el bien de todos»: hay una continuidad del racismo en la república tutelada. Es el dato que describe a Cuba (no a Vietnam) cuando se pregunta por desafíos étnico-raciales.",
      matiz: "Es el que mejor sirve para el «primer decenio» en clave racial: los negros fueron ~85% de los combatientes y no recibieron casi nada (Guardia Rural blanca, inmigración española fomentada, Ley Morúa 1910, masacre de 1912).",
      fraseLista: "Para De la Fuente, la masacre de 1912 prueba que la república tutelada eligió el orden racial antes que el ideal martiano: el racismo colonial sobrevivió a la independencia.",
      paraPreguntas: ["Desafíos étnicos/raciales en los primeros 10 años", "Continuidad del racismo"]
    },
    {
      nombre: "Prensa de Hearst y Pulitzer (contexto de opinión pública)", regalo: true, nacionalidad: "Dato de examen (no historiador)",
      postura: "La opinión pública la cosechó un tercero",
      ideaCentral: "La reconcentración de Weyler (~150.000–170.000 † civiles) se volvió escándalo mundial gracias a la prensa sensacionalista estadounidense (Hearst, Pulitzer). En Cuba la opinión pública favoreció la causa, pero la cosechó un tercero: terminó sirviendo a la intervención ajena.",
      fraseLista: "La campaña de prensa contra Weyler (Hearst, Pulitzer) fue exitosa pero terminó alimentando la intervención de EE. UU.: en Cuba la opinión pública favorable la capitalizó un tercero.",
      paraPreguntas: ["Métodos no violentos / propaganda", "Opinión pública", "Factores externos"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1511, fecha: "1511–1860s", pais: "Cuba", titulo: "La colonia que España no podía perder",
      descripcion: "Cuba, colonia española desde 1511, se vuelve el primer productor mundial de azúcar tras la revolución de esclavos de Haití (1791–1804). Sociedad partida en tres: peninsulares, criollos y población negra (~la mitad de la isla).",
      causas: ["El azúcar y la esclavitud (~800.000 esclavos).", "La independencia continental (1810–25) deja a España solo Cuba, Puerto Rico y Filipinas: «la siempre fiel isla de Cuba»."],
      consecuencias: ["Tres corrientes: independencia, anexión (a EE. UU.) y autonomía.", "El miedo a Haití (que la independencia se vuelva revolución de esclavos) frena a los criollos medio siglo."],
      historiador: "Pérez: la economía azucarera atada a EE. UU. hace insostenible el statu quo." },
    { anio: 1868, fecha: "10 oct 1868", pais: "Cuba", titulo: "Grito de Yara · Guerra de los Diez Años",
      descripcion: "Carlos Manuel de Céspedes proclama la independencia en Oriente y libera a sus propios esclavos. La guerra dura diez años (~200.000 †) y termina en el Pacto del Zanjón (1878): paz sin independencia ni abolición general.",
      causas: ["Exclusión política de los criollos, impuestos y aranceles.", "Oriente: hacendados más pobres, con menos esclavos que perder."],
      consecuencias: ["Tres problemas crónicos: regionalismo, fractura civiles-militares, miedo racial.", "Herencias: jefes militares (Gómez, Maceo), la Protesta de Baraguá y la abolición (definitiva en 1886)."],
      historiador: "El fracaso fue la escuela: la lección que recogería Martí." },
    { anio: 1879, fecha: "1879–1886", pais: "Cuba", titulo: "Guerra Chiquita y abolición",
      descripcion: "La «Guerra Chiquita» (1879–80) fracasa en meses por falta de organización y dinero. La abolición definitiva de la esclavitud llega en 1886. Martí se instala en Nueva York (1881–95).",
      causas: ["Sin organización ni dinero, la voluntad no alcanza."],
      consecuencias: ["Martí concluye que hace falta organizar lo que la guerra no pudo."] },
    { anio: 1891, fecha: "1891–1894", pais: "Cuba / EE. UU.", titulo: "Nuestra América · PRC · Patria",
      descripcion: "Martí publica Nuestra América (1891), lanza en Tampa la fórmula «con todos y para el bien de todos», funda el Partido Revolucionario Cubano (PRC, 1892) y el periódico Patria, y reconcilia a Gómez y Maceo (1892–94). El arancel Wilson-Gorman (1894) hunde el azúcar.",
      causas: ["Decenas de miles de cubanos exiliados (tabaqueros) en Tampa, Cayo Hueso y Nueva York aportan el 10% de su salario."],
      consecuencias: ["Un partido de la emigración unifica clubes, compra armas y subordina a los generales a una dirección política.", "La crisis azucarera de 1894 prepara el estallido."],
      historiador: "Ferrer: el nacionalismo antirracista fue el pegamento que le dio masas." },
    { anio: 1895, fecha: "24 feb 1895", pais: "Cuba", titulo: "Grito de Baire · muerte de Martí",
      descripcion: "El Grito de Baire (24 feb 1895) reinicia la guerra. Martí desembarca con Gómez y muere en su primer combate, en Dos Ríos, el 19 de mayo de 1895, a los 42 años.",
      causas: ["Todo estaba listo tras la reconciliación de los jefes y la crisis de 1894."],
      consecuencias: ["La revolución pierde a su cabeza política y símbolo a los tres meses.", "Vuelve la vieja fractura civiles-militares."] },
    { anio: 1896, fecha: "oct 1895–dic 1896", pais: "Cuba", titulo: "Invasión, la «tea» y reconcentración de Weyler",
      descripcion: "Gómez y Maceo ejecutan la invasión de Oriente a Occidente (1.500 km) y aplican la «tea»: quemar cañaverales e ingenios para arruinar la economía que financia a España. España responde con Weyler y la reconcentración (1896): ~150.000–170.000 † civiles. Maceo cae en dic 1896.",
      causas: ["~40.000 mambises mal armados vs. un ejército español de ~200.000.", "Movilidad, machete y fiebre amarilla (que mató más españoles que las balas)."],
      consecuencias: ["Catástrofe humanitaria que la prensa de Hearst y Pulitzer vuelve escándalo mundial.", "La revolución pierde también a su símbolo racial (Maceo)."] },
    { anio: 1898, fecha: "15 feb 1898", pais: "Cuba / EE. UU.", titulo: "El Maine · la intervención",
      descripcion: "El acorazado USS Maine explota en La Habana (266 †; hoy se acepta que fue casi con certeza un accidente interno). En abril EE. UU. declara la guerra a España, aprobando la Enmienda Teller (promesa de no anexar). La guerra dura diez semanas; la flota española es aniquilada.",
      causas: ["EE. UU. tenía ~50 M de dólares invertidos y ~100 M de comercio anual, más interés estratégico en el Caribe.", "La prensa gritó «sabotaje español»."],
      consecuencias: ["Los cubanos son excluidos de la rendición de Santiago (Shafter prohíbe la entrada a Calixto García).", "Tratado de París (10 dic 1898): España cede Cuba sin que ningún cubano participe."],
      historiador: "Pérez: confiscación de la victoria. Thomas: compra de un empate." },
    { anio: 1901, fecha: "1899–1902", pais: "Cuba", titulo: "Ocupación · Enmienda Platt · república",
      descripcion: "Ocupación militar estadounidense (1899–1902) que disuelve el Ejército Libertador (pagando $75 por fusil). La condición para irse es la Enmienda Platt (1901): derecho de EE. UU. a intervenir, base en Guantánamo, límites a deuda y tratados. La constituyente la acepta 15–14 bajo amenaza. El 20 may 1902 nace la república (Estrada Palma).",
      causas: ["No había Estado cubano en espera que llenara el vacío."],
      consecuencias: ["Soberanía hipotecada desde el día uno.", "EE. UU. queda como árbitro interno de la política cubana."],
      historiador: "Pérez: Platt + Reciprocidad = anexión económica." },
    { anio: 1906, fecha: "1903–1906", pais: "Cuba", titulo: "Reciprocidad y segunda ocupación",
      descripcion: "El Tratado de Reciprocidad (1903) da preferencia al azúcar cubano a cambio de abrir Cuba a productos de EE. UU.: el azúcar pasa de 0,3 a 1 M t (1900–05), pero ~60% de la propiedad rural se vuelve extranjera. El fraude de Estrada Palma (1905) desata la Guerrita de Agosto (1906, 24.000 rebeldes) y la 2ª ocupación (1906–09, Magoon).",
      causas: ["La Platt convierte a Washington en árbitro: cada bando derrotado apela a EE. UU."],
      consecuencias: ["Monocultivo profundizado; industria propia destruida.", "Más marines en 1912 y 1917."] },
    { anio: 1912, fecha: "1908–1912", pais: "Cuba", titulo: "PIC · Ley Morúa · masacre de 1912",
      descripcion: "Los veteranos negros (~85% de los combatientes) fundan el Partido Independiente de Color (PIC, 1908, Estenoz). El Congreso lo prohíbe (Ley Morúa, 1910) y su protesta armada de mayo de 1912 es respondida con una masacre de ~3.000 negros, con marines desembarcados «para proteger propiedades».",
      causas: ["La república entrega administración y Guardia Rural a blancos y fomenta inmigración española (~1 millón en tres décadas)."],
      consecuencias: ["El ideal martiano «con todos y para el bien de todos» queda enterrado.", "El nacionalismo renace en los años 20 y culmina en 1933 y 1959: la «independencia inconclusa»."],
      historiador: "De la Fuente: la nación eligió el orden racial sobre Martí. Ferrer: la república traicionó el proyecto sin razas." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Tema 8 del Paper 2 = <b>movimientos independentistas</b>. La estructura del temario es siempre la misma: <b>origen y desarrollo → métodos y causas del éxito → desafíos tras la independencia</b> («primeros 10 años»). Para Cuba, el origen y los métodos van de <b>1868 a 1898</b>, y los «primeros 10 años» son <b>1902–1912</b>. Declaralo en la intro.</p>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> <b>No uses 1959 como núcleo del Tema 8:</b> eso es Tema 10 (Castro). Acá el protagonista es Martí y la frase que ordena todo es la «independencia inconclusa» hasta 1959, no la revolución del 59.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>«Cada uno de una región diferente».</b> El Paper 2 pide dos ejemplos de regiones distintas: Cuba (América) y Vietnam (Asia) cumplen. Decilo en la primera línea del ensayo comparativo.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La frase que ordena todo el tema:</b> «Los factores externos crearon las oportunidades; la organización interna decidió quién las aprovechó — por eso el vacío de 1898 lo llenó Estados Unidos y el de 1945 lo llenó el Viet Minh.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario cubano:</b> <b>Peninsulares</b> = nacidos en España, monopolizan gobierno y gran comercio. <b>Criollos</b> = blancos nacidos en Cuba, dueños de tierras pero sin poder político. <b>Mambises</b> = los rebeldes cubanos. <b>La «tea»</b> = quemar cañaverales e ingenios para arruinar la economía que financia a España. <b>Reconcentración</b> = encerrar a la población rural en pueblos fortificados (Weyler, 1896) para quitarle base a la guerrilla. <b>Anexionismo</b> = unirse a EE. UU. <b>Autonomismo</b> = seguir bajo España con autogobierno.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El independentismo <b>nunca fue la opción única ni obvia</b>: independencia, anexión y autonomía compitieron hasta el final. Si lo presentás como inevitable, perdés el matiz que suma banda.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuáles son los «primeros 10 años» de Cuba para el Tema 8?", etiqueta: "fecha",
            opciones: [
              { texto: "1902–1912: de la república tutelada a la masacre del PIC.", correcta: true, explicacion: "Correcto: hay que declararlo en la intro; origen y métodos son 1868–1898." },
              { texto: "1959–1969: la primera década de la Revolución de Castro.", correcta: false, explicacion: "Eso es Tema 10; no se usa 1959 como núcleo del Tema 8." },
              { texto: "1868–1878: la Guerra de los Diez Años completa.", correcta: false, explicacion: "Eso es el origen del movimiento, no los «primeros 10 años» tras la independencia." },
              { texto: "1898–1908: desde la explosión del Maine hasta la fundación del PIC.", correcta: false, explicacion: "El decenio se cuenta desde la república de 1902, no desde 1898." }
            ] },
          { pregunta: "Las tres corrientes políticas que competían en Cuba eran…", etiqueta: "concepto",
            opciones: [
              { texto: "Independencia, anexión a EE. UU. y autonomía bajo España.", correcta: true, explicacion: "Correcto: el independentismo no era la opción única ni obvia." },
              { texto: "Monarquía, república y protectorado británico del Caribe.", correcta: false, explicacion: "No figura en el PDF; las corrientes eran independencia, anexión y autonomía." },
              { texto: "Comunismo, liberalismo y conservadurismo criollo.", correcta: false, explicacion: "Son categorías ajenas al debate cubano del siglo XIX descrito." },
              { texto: "Abolicionismo, esclavismo y neutralidad frente a España.", correcta: false, explicacion: "Mezcla la cuestión esclavista con las corrientes políticas; no es eso." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Contexto: la colonia que España no podía perder (1511–1868)",
        html: `
          <p>Cuba fue colonia española desde 1511 y, tras la independencia continental (1810–25), era lo único importante que le quedaba a España en América junto con Puerto Rico y Filipinas: «la siempre fiel isla de Cuba». Perder Cuba era dejar de ser imperio, y por eso España la defendería con una ferocidad que no mostró en el continente.</p>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>¿Por qué Cuba no se independizó con el resto?</b> Por el <b>azúcar y la esclavitud</b>. Tras la revolución de Haití (1791–1804), Cuba se volvió el primer productor mundial de azúcar con ~800.000 esclavos. La élite criolla quería independencia, pero le tenía <b>terror a Haití</b>: una guerra podía volverse revolución de esclavos. Ese miedo mantuvo a Cuba española medio siglo.</p></div>

          <h3>Una sociedad partida en tres</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Grupo</th><th>Quiénes eran</th><th>Posición</th></tr></thead>
            <tbody>
              <tr><td>Peninsulares</td><td>Nacidos en España.</td><td>Monopolizaban el gobierno y el gran comercio.</td></tr>
              <tr><td>Criollos</td><td>Blancos nacidos en Cuba, dueños de ingenios.</td><td>Ricos pero excluidos del poder político: motivo para la independencia.</td></tr>
              <tr><td>Población negra y mulata</td><td>Esclava o libre; hacia mediados de siglo ~la mitad de la isla.</td><td>La clave del «miedo a Haití» que frenaba a los criollos.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La colonia era políticamente española y económicamente estadounidense —hacia 1894 EE. UU. compraba alrededor del 90% de las exportaciones cubanas—, una contradicción que estallaría en 1898.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Pérez Jr.: la economía azucarera atada a EE. UU. y la crisis de 1894 hicieron insostenible el statu quo colonial; el nacionalismo dio forma a un descontento que la economía ya había creado.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué frenó la independencia cubana durante medio siglo?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El miedo a que una guerra se volviera una revolución de esclavos como Haití.", correcta: true, explicacion: "Correcto: la élite criolla quería independencia pero temía a su propia población esclava." },
              { texto: "La ausencia total de una élite criolla con intereses propios.", correcta: false, explicacion: "Sí había élite criolla rica; justamente tenía motivos para la independencia." },
              { texto: "La falta de cualquier producto de exportación valioso en la isla.", correcta: false, explicacion: "Al revés: el azúcar hizo a Cuba el primer productor mundial." },
              { texto: "La presión militar directa y constante de los Estados Unidos sobre el puerto de La Habana.", correcta: false, explicacion: "EE. UU. intervino en 1898, no para frenar la independencia antes." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · La Guerra de los Diez Años (1868–1878): el ensayo general",
        html: `
          <p>El 10 de octubre de 1868, el hacendado criollo Carlos Manuel de Céspedes dio el <b>Grito de Yara</b>: proclamó la independencia y —gesto fundacional— liberó a sus propios esclavos y los invitó a pelear como hombres libres. No es casual que empezara en Oriente: allí los hacendados eran más pobres y tenían menos esclavos que perder.</p>

          <h3>Los tres problemas crónicos del independentismo</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Problema</th><th>Qué pasó</th></tr></thead>
            <tbody>
              <tr><td>Regionalismo</td><td>Occidente, la zona rica de los grandes ingenios, casi no se sumó.</td></tr>
              <tr><td>Fractura civiles–militares</td><td>La Cámara republicana destituyó a Céspedes en 1873 por miedo a un caudillo.</td></tr>
              <tr><td>Miedo racial</td><td>Cada avance de oficiales negros reavivaba el fantasma de Haití.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> La guerra duró diez años y dejó unos <b>200.000 muertos</b>. Los rebeldes, agotados, firmaron el <b>Pacto del Zanjón (1878)</b>: paz sin independencia y sin abolición general.</div>

          <h3>Tres herencias decisivas</h3>
          <ol class="escalera">
            <li><b>Un ejército con experiencia y sus jefes:</b> el dominicano Máximo Gómez, maestro de la guerrilla, y el mulato Antonio Maceo, el «Titán de Bronce».</li>
            <li><b>La Protesta de Baraguá (1878):</b> Maceo rechazó formalmente el Zanjón ante el general español — símbolo de todo lo pendiente.</li>
            <li><b>La abolición de la esclavitud,</b> que la guerra hizo inevitable (definitiva en 1886).</li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La Guerra Chiquita (1879–80) fracasó en meses: sin organización ni dinero, la voluntad no alcanzaba. Esa es exactamente la lección que recogería Martí.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «la guerra como factor» o «fracasos-escuela»: la de 1868 fue el <b>ensayo general</b>. Enseñó qué faltaba (unidad regional, de clase y de raza) y qué había (jefes militares). El fracaso fue la escuela — igual que Nghe-Tinh en Vietnam.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué gesto fundacional hizo Céspedes en el Grito de Yara?", etiqueta: "concepto",
            opciones: [
              { texto: "Liberó a sus propios esclavos y los invitó a pelear como hombres libres.", correcta: true, explicacion: "Correcto: unió independencia y abolición desde el primer día." },
              { texto: "Firmó de inmediato un pacto de autonomía con la corona española.", correcta: false, explicacion: "El pacto (Zanjón) llegó diez años después y fue sin independencia." },
              { texto: "Pidió formalmente la anexión de Cuba a los Estados Unidos.", correcta: false, explicacion: "El anexionismo era otra corriente; no fue lo de Céspedes en Yara." },
              { texto: "Proclamó de inmediato una república socialista con reparto de tierras a los campesinos.", correcta: false, explicacion: "Eso describe a Vietnam; nada que ver con 1868 en Cuba." }
            ] },
          { pregunta: "Los tres problemas crónicos que mostró la Guerra de los Diez Años fueron…", etiqueta: "concepto",
            opciones: [
              { texto: "Regionalismo, fractura civiles-militares y miedo racial.", correcta: true, explicacion: "Correcto: son los tres que Martí tendría que resolver después." },
              { texto: "Analfabetismo, hambruna y falta de puertos para comerciar.", correcta: false, explicacion: "No son los problemas señalados en el PDF." },
              { texto: "Intervención rusa, bloqueo naval británico y deuda externa.", correcta: false, explicacion: "Nada de eso aparece; los problemas eran internos al movimiento." },
              { texto: "Exceso de líderes civiles y ausencia total de jefes militares.", correcta: false, explicacion: "Al contrario: dejó jefes militares (Gómez, Maceo); el problema era la división entre civiles y militares." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Martí: el que organizó lo que la guerra no pudo",
        html: `
          <p>José Martí (1853–1895) es una figura inusual: <b>no fue general sino poeta, periodista y organizador político</b>. Hijo de españoles pobres, a los 16 años fue condenado a trabajos forzados por escribir a favor de la independencia; pasó casi toda su vida adulta en el exilio, sobre todo en Nueva York (1881–1895), desde donde fue el periodista en español más leído de América.</p>

          <h3>Sus dos ideas-fuerza</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Idea</th><th>Contenido</th><th>Frase</th></tr></thead>
            <tbody>
              <tr><td>Independencia = justicia social y unidad racial</td><td>Una nación de blancos y negros, ricos y pobres, o si no sería solo un cambio de amos criollos.</td><td>«No hay odio de razas, porque no hay razas» · «Con todos y para el bien de todos» (Tampa, 1891).</td></tr>
              <tr><td>El peligro no era solo España sino EE. UU.</td><td>Viviendo «en las entrañas del monstruo», advirtió el expansionismo: había que ganar rápido y con fuerzas propias para que EE. UU. no se quedara con la isla.</td><td>Nuestra América (1891); carta a Mercado (1895): impedir «que se extiendan por las Antillas los Estados Unidos».</td></tr>
            </tbody>
          </table></div>

          <h3>La obra práctica: el PRC (1892)</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> El <b>Partido Revolucionario Cubano (PRC, 1892)</b> era un <b>partido de la emigración</b>: decenas de miles de cubanos (muchos obreros tabaqueros) en Tampa, Cayo Hueso y Nueva York. Martí los recorrió club por club y los organizó en una estructura que aportaba el <b>10% de los salarios</b> a la causa.</div>

          <ul>
            <li>Unificaba a los clubes del exilio y publicaba el periódico <i>Patria</i>.</li>
            <li>Compraba armas.</li>
            <li>Reconcilió a Gómez y Maceo (que desconfiaban de los «doctores» civiles) con una dirección política común (1892–94).</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Cuando el arancel Wilson-Gorman (1894) hundió el precio del azúcar y sumió a Cuba en la crisis, todo estaba listo: el 24 de febrero de 1895, el Grito de Baire reinició la guerra.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Ferrer: lo revolucionario fue el <b>nacionalismo antirracista</b> —un ejército multirracial (~40% de oficiales de color en 1895)— que le dio masas al independentismo. Pérez: la crisis de 1894 (EE. UU. compraba ~90% del azúcar) fue el combustible estructural. Juicio: el nacionalismo martiano fue el pegamento que resolvió los tres problemas de 1868, necesario para unificar pero insuficiente sin la crisis y sin el ejército.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué tenía de nuevo el Partido Revolucionario Cubano (1892)?", etiqueta: "concepto",
            opciones: [
              { texto: "Era un partido de la emigración que organizaba al exilio tabaquero (10% del salario).", correcta: true, explicacion: "Correcto: unificaba clubes, publicaba Patria y compraba armas desde el exilio." },
              { texto: "Era el primer partido comunista de masas organizado en toda América Latina y el Caribe hispano.", correcta: false, explicacion: "Nada de comunismo: eso es Vietnam. El PRC era de orientación liberal-republicana y antirracista." },
              { texto: "Era un partido militar que subordinaba a los civiles a los generales.", correcta: false, explicacion: "Al revés: subordinó a los generales (Gómez, Maceo) a una dirección política." },
              { texto: "Era una alianza formal con el gobierno de Estados Unidos.", correcta: false, explicacion: "Martí desconfiaba de EE. UU.; el PRC era de la emigración cubana." }
            ] },
          { pregunta: "La segunda idea-fuerza de Martí (además de la justicia social) era que…", etiqueta: "historiador",
            opciones: [
              { texto: "El peligro no era solo España sino Estados Unidos, por lo que había que ganar rápido.", correcta: true, explicacion: "Correcto: Nuestra América (1891) y la carta a Mercado lo dicen explícitamente." },
              { texto: "Había que pedir la anexión a Estados Unidos para garantizar la libertad.", correcta: false, explicacion: "Es lo contrario: Martí advertía contra el expansionismo estadounidense." },
              { texto: "La independencia debía esperar pacientemente hasta que España concediera primero la autonomía.", correcta: false, explicacion: "Martí organizó la guerra, no el autonomismo." },
              { texto: "La revolución debía liderarla exclusivamente el ejército profesional.", correcta: false, explicacion: "Martí era civil y subordinó lo militar a una dirección política." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · La Guerra de Independencia (1895–1898): ganar el campo",
        html: `
          <p>La guerra de 1895 corrigió los errores de 1868. Gómez y Maceo ejecutaron la <b>invasión de Oriente a Occidente</b> (oct 1895–ene 1896): 1.500 kilómetros a caballo para llevar la guerra a la zona rica que en 1868 había quedado al margen.</p>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>La «tea»:</b> estrategia económica despiadada y deliberada de quemar los cañaverales e ingenios —incluso de cubanos— para arruinar la economía que financiaba a España y forzar a los hacendados a definirse.</div>

          <h3>David contra Goliat</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dato</th><th>Cifra</th></tr></thead>
            <tbody>
              <tr><td>Mambises (mal armados)</td><td>~40.000</td></tr>
              <tr><td>Ejército español (el mayor que cruzó el Atlántico)</td><td>~200.000</td></tr>
              <tr><td>Muertos españoles</td><td>~50.000, la gran mayoría por fiebre amarilla, no por balas</td></tr>
              <tr><td>Reconcentración de Weyler (1896): † civiles</td><td>~150.000–170.000 (un 10% de la población)</td></tr>
            </tbody>
          </table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> La <b>reconcentración</b> fue la respuesta de España: encerrar a la población rural en pueblos fortificados para quitarle base a la guerrilla. El resultado —una catástrofe humanitaria— lo convirtió en escándalo la prensa de Hearst y Pulitzer, pero esa opinión pública terminó sirviendo a la <b>intervención ajena</b>, no a los cubanos.</div>

          <h3>Dos golpes al liderazgo</h3>
          <ul>
            <li><b>19 may 1895:</b> Martí muere en su primer combate, en Dos Ríos (había desembarcado con Gómez semanas antes; tenía 42 años).</li>
            <li><b>dic 1896:</b> Maceo cae. La revolución pierde su cabeza política y su símbolo racial; vuelve la fractura civiles-militares (el gobierno en armas nunca controló a los generales).</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Para 1897–98, España estaba agotada: ofreció la autonomía (noviembre de 1897) que veinte años antes habría bastado, y ya no bastó. Los rebeldes dominaban el campo, España las ciudades, y ninguno podía rematar. Entonces entró el tercero.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué mató a más soldados españoles en la guerra de 1895–98?", etiqueta: "fecha",
            opciones: [
              { texto: "La fiebre amarilla, no las balas de los mambises.", correcta: true, explicacion: "Correcto: de ~50.000 muertos españoles, la gran mayoría fue por enfermedad." },
              { texto: "La artillería pesada del ejército rebelde cubano organizado.", correcta: false, explicacion: "Los mambises eran ~40.000 y estaban mal armados; su arma era la movilidad y el machete." },
              { texto: "El bombardeo naval de la flota de los Estados Unidos.", correcta: false, explicacion: "EE. UU. entró recién en 1898 y aniquiló a la flota española, no al ejército de tierra español por enfermedad." },
              { texto: "La reconcentración de Weyler aplicada a los propios soldados.", correcta: false, explicacion: "La reconcentración fue contra civiles, no causa de muerte de soldados." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · 1898: la intervención que decidió y confiscó",
        html: `
          <p>Estados Unidos tenía en Cuba unos <b>50 millones de dólares invertidos</b> y un comercio de <b>100 millones anuales</b>, más un interés estratégico creciente (el Caribe, el futuro canal).</p>

          <h3>La escalera de 1898</h3>
          <ol class="escalera">
            <li><b>15 feb 1898 · El Maine:</b> el acorazado explota en La Habana (266 †). Hoy se acepta que fue casi con certeza un accidente interno, pero la prensa gritó «sabotaje español».</li>
            <li><b>Abril 1898 · Declaración de guerra</b> con la <b>Enmienda Teller</b> (promesa de no anexar Cuba) para tranquilizar a la opinión pública.</li>
            <li><b>10 semanas · Victoria relámpago:</b> la flota española es aniquilada en Santiago y en Filipinas; España capitula.</li>
            <li><b>Rendición de Santiago:</b> el general Shafter prohíbe la entrada del ejército cubano (Calixto García) a la ciudad.</li>
            <li><b>10 dic 1898 · Tratado de París:</b> España cede Cuba, Puerto Rico, Filipinas y Guam sin que ningún cubano participe.</li>
            <li><b>1899–1902 · Ocupación:</b> se disuelve el Ejército Libertador ($75 por fusil entregado).</li>
          </ol>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Enmienda Platt (1901):</b> condición para que EE. UU. se fuera. Daba a EE. UU. el derecho de intervenir militarmente, una base naval en Guantánamo y límites a la deuda y a los tratados cubanos. La constituyente la aceptó por <b>15 votos contra 14</b>, bajo la amenaza explícita de que la ocupación no terminaría de otro modo.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El 20 de mayo de 1902 nació la república — con la soberanía hipotecada.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>EL debate central del caso cubano.</b> Pérez: los cubanos estaban ganando y la intervención fue una <b>confiscación</b> de la victoria; EE. UU. entró para impedir una Cuba independiente de ejército multirracial (por eso excluyó a los cubanos de Santiago y París). Thomas: en 1898 la guerra estaba <b>estancada</b> y el movimiento fragmentado tras Martí y Maceo; sin la intervención pudo durar años. Juicio de banda alta: la intervención fue decisiva para el resultado y letal para su contenido — si Pérez tiene razón, robó una victoria; si Thomas tiene razón, compró un empate; en ambos casos, <b>la independencia de 1902 no fue obra cubana</b>.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Enfrentá a los dos en el párrafo clave y cerrás vos: «Como sostiene Pérez, la intervención confiscó una victoria en marcha; Thomas, en cambio, ve una guerra estancada — en ambos casos, la independencia de 1902 no fue obra cubana.»</div>
        `,
        miniQuiz: [
          { pregunta: "Según Pérez Jr., ¿por qué intervino EE. UU. en 1898?", etiqueta: "historiador",
            opciones: [
              { texto: "Para impedir una Cuba independiente gobernada por su ejército multirracial, confiscando la victoria.", correcta: true, explicacion: "Correcto: por eso excluyó a los cubanos de Santiago y del Tratado de París." },
              { texto: "Para rescatar a unos mambises que, según Pérez, estaban a punto de ser aniquilados por el ejército de España.", correcta: false, explicacion: "Para Pérez los cubanos estaban ganando: no fue un rescate sino una confiscación." },
              { texto: "Para cumplir una promesa de larga data de abolir la esclavitud en la isla.", correcta: false, explicacion: "La esclavitud ya estaba abolida (1886); no fue ese el motivo." },
              { texto: "Porque España había pedido formalmente la mediación de Washington.", correcta: false, explicacion: "No hubo tal pedido; EE. UU. declaró la guerra tras el Maine." }
            ] },
          { pregunta: "La Enmienda Platt (1901) establecía, entre otras cosas…", etiqueta: "concepto",
            opciones: [
              { texto: "El derecho de EE. UU. a intervenir militarmente y una base naval en Guantánamo.", correcta: true, explicacion: "Correcto: la constituyente la aceptó 15–14 bajo amenaza de prolongar la ocupación." },
              { texto: "La anexión inmediata y total de Cuba como estado de la Unión.", correcta: false, explicacion: "No: la Enmienda Teller había prometido no anexar; la Platt dejó una soberanía tutelada." },
              { texto: "El reparto de la tierra azucarera y los ingenios entre los veteranos del Ejército Libertador.", correcta: false, explicacion: "Al contrario: el Ejército Libertador fue disuelto pagando $75 por fusil." },
              { texto: "La prohibición permanente de cualquier inversión estadounidense en la isla.", correcta: false, explicacion: "Lo opuesto: la economía quedó abierta a EE. UU. (Reciprocidad, 1903)." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Métodos y liderazgo: balance del caso cubano",
        html: `
          <h3>Métodos</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Tipo</th><th>Qué fue</th><th>Eficacia</th></tr></thead>
            <tbody>
              <tr><td>Violentos</td><td>Tres guerras (1868–78, 1879–80, 1895–98), guerrilla rural, guerra económica (la «tea»), desgaste de un ejército superior.</td><td>Enorme para destruir el poder español en el campo; insuficiente para rematarlo. Necesaria pero no suficiente.</td></tr>
              <tr><td>No violentos</td><td>Organización política (PRC, 1892) y propaganda hacia afuera: Patria para la emigración y la alimentación sistemática de la prensa estadounidense con las atrocidades de Weyler.</td><td>Campaña exitosa que terminó sirviendo a la intervención ajena.</td></tr>
              <tr><td>Diplomacia propia</td><td>Casi nula: EE. UU. jamás reconoció la beligerancia cubana.</td><td>Los cubanos no firmaron ni su guerra ni su paz.</td></tr>
            </tbody>
          </table></div>

          <h3>Liderazgo: excepcional y trunco</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Martí</span>Resolvió el problema que había matado a la guerra de 1868 —la unidad— y murió a los tres meses (1895).</div>
              <div><span class="et">Maceo</span>Símbolo racial del movimiento; cayó al año siguiente (1896).</div>
              <div><span class="et">Gómez</span>Ganó la guerra en el campo, pero no había estructura política que convirtiera esa victoria en Estado.</div>
            </div>
          </div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La comparación con Vietnam se escribe sola: Cuba tuvo líderes; Vietnam tuvo, además, una organización que sobrevivía a sus líderes.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Thomas: el movimiento quedó <b>fragmentado</b> tras Martí y Maceo — la clave del liderazgo cubano es que fue personal y truncado, no institucional.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál fue el gran límite del liderazgo cubano?", etiqueta: "historiador",
            opciones: [
              { texto: "Fue personal y trunco: no había una organización que sobreviviera a sus líderes.", correcta: true, explicacion: "Correcto: Martí murió a los 3 meses, Maceo al año; Gómez ganó el campo sin Estado detrás." },
              { texto: "Fue demasiado institucional y burocrático, sin ninguna figura carismática.", correcta: false, explicacion: "Al revés: sobraban líderes carismáticos y faltaba la institución." },
              { texto: "Dependía por completo de la ayuda militar directa de Estados Unidos.", correcta: false, explicacion: "EE. UU. jamás reconoció la beligerancia cubana; la diplomacia propia fue nula." },
              { texto: "Rechazó siempre y por principio cualquier método violento en favor de la negociación.", correcta: false, explicacion: "La violencia fue el método central y eficaz; lo que faltó fue diplomacia propia." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Los primeros diez años (1902–1912): la independencia tutelada",
        html: `
          <p>La república nació con <b>tres hipotecas</b>.</p>

          <h3>Hipoteca política</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> La Platt convirtió a EE. UU. en <b>árbitro interno</b>: cada bando derrotado en elecciones fraudulentas apelaba a Washington. El fraude de Estrada Palma (1905) provocó el alzamiento liberal de 1906 (la «Guerrita de Agosto», 24.000 rebeldes); Estrada renunció pidiendo la intervención y EE. UU. gobernó Cuba otra vez (1906–09, el gobernador Magoon). Habría más marines en 1912 y 1917.</div>

          <h3>Hipoteca económica</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Medida</th><th>Efecto positivo</th><th>Precio</th></tr></thead>
            <tbody>
              <tr><td>Tratado de Reciprocidad (1903)</td><td>Reconstrucción veloz: azúcar de 300.000 t (1900) a un millón (1905).</td><td>Mató la industria propia y profundizó el monocultivo.</td></tr>
              <tr><td>Apertura a productos de EE. UU.</td><td>—</td><td>Hacia 1905, +13.000 estadounidenses habían comprado tierras y ~60% de la propiedad rural era extranjera.</td></tr>
            </tbody>
          </table></div>

          <h3>Hipoteca racial — la más amarga</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Los negros habían sido <b>~85% de los combatientes</b> y no recibieron casi nada: administración y Guardia Rural blancas, inmigración española fomentada oficialmente (~1 millón en tres décadas). Cuando fundaron el <b>Partido Independiente de Color (1908)</b>, el Congreso lo prohibió (<b>Ley Morúa, 1910</b>), y su protesta armada de mayo de 1912 fue respondida con una <b>masacre de ~3.000 negros</b>, con marines desembarcados «para proteger propiedades».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El ideal martiano —"con todos y para el bien de todos"— quedó enterrado ahí; recuperarlo sería la bandera de todas las revoluciones cubanas posteriores, hasta 1959.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> De la Fuente: la masacre de 1912 muestra que la nueva nación eligió el orden racial sobre el ideal martiano — continuidad del racismo en la república. Ferrer: la república traicionó el proyecto «sin razas» que había dado masas a la insurgencia.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «desafíos de los primeros 10 años»: tres hipotecas = <b>política (Platt)</b>, <b>económica (monocultivo + tierra extranjera)</b>, <b>racial (PIC → Morúa → masacre 1912)</b>. Cerrá con la «independencia inconclusa» hasta 1959.</div>
        `,
        miniQuiz: [
          { pregunta: "El Tratado de Reciprocidad (1903) trajo…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Reconstrucción rápida del azúcar pero monocultivo y ~60% de tierra extranjera.", correcta: true, explicacion: "Correcto: creció rápido pero mató la industria propia y aumentó la dependencia." },
              { texto: "La nacionalización inmediata de toda la industria azucarera y de los ingenios cubanos.", correcta: false, explicacion: "Al contrario: abrió Cuba a EE. UU. y la tierra pasó a manos extranjeras." },
              { texto: "El fin definitivo de cualquier dependencia comercial con EE. UU.", correcta: false, explicacion: "Profundizó la dependencia, no la terminó." },
              { texto: "La entrega del azúcar cubano en exclusiva al mercado europeo.", correcta: false, explicacion: "La preferencia era para el mercado estadounidense, no el europeo." }
            ] },
          { pregunta: "¿Qué simboliza la masacre de 1912 para De la Fuente?", etiqueta: "historiador",
            opciones: [
              { texto: "Que la república eligió el orden racial sobre el ideal martiano «con todos».", correcta: true, explicacion: "Correcto: es la continuidad del racismo colonial en la nación independiente." },
              { texto: "Que Cuba había cumplido plenamente la promesa de igualdad de Martí.", correcta: false, explicacion: "Lo contrario: enterró ese ideal." },
              { texto: "Que los negros cubanos nunca habían participado en las guerras de independencia.", correcta: false, explicacion: "Habían sido ~85% de los combatientes; por eso es tan amargo." },
              { texto: "Que Estados Unidos defendió a los veteranos negros del PIC.", correcta: false, explicacion: "Los marines desembarcaron «para proteger propiedades», no a los negros." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Kit comparativo con Vietnam (desde Cuba)",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> En Paper 2 comparativo, <b>cada párrafo</b> lleva: afirmación → dato cubano → dato vietnamita → por qué difieren → historiador → mini-juicio. <b>Los dos casos siempre.</b> Acá va el lado cubano de cada par.</div>

          <h3>Datos espejo (lado Cuba)</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Cuba</th><th>Qué prueba el par</th></tr></thead>
            <tbody>
              <tr><td>Identidad</td><td>Había que inventarla: criollos vs. peninsulares vs. esclavos; miedo a Haití frena la independencia 50 años.</td><td>El nacionalismo cubano hubo que inventarlo; el vietnamita, activarlo.</td></tr>
              <tr><td>Fracaso-escuela</td><td>Guerra de los Diez Años (1868–78) → Zanjón; división región/clase/raza.</td><td>Ambos aprendieron de derrotas previas: la lección fue la organización.</td></tr>
              <tr><td>Organización</td><td>PRC (1892), partido de la emigración; tabaqueros aportan el 10%.</td><td>Cuba organizó el exilio; Vietnam, el territorio — de ahí 1898 vs. 1945.</td></tr>
              <tr><td>Ideología</td><td>Liberal-republicana + antirracismo martiano; sin programa social.</td><td>Una ideología para fundar una república vs. una para transformar una sociedad.</td></tr>
              <tr><td>Líder</td><td>Martí † 19-5-1895 (a 3 meses); Maceo † 1896.</td><td>Liderazgo personal y truncado vs. institucional y longevo.</td></tr>
              <tr><td>Portazo de las potencias</td><td>Nuestra América (1891) y la carta a Mercado advierten: el peligro es EE. UU.</td><td>Las potencias liberales fallaron a ambos; solo Ho encontró aliado alternativo.</td></tr>
              <tr><td>Guerra propia</td><td>40.000 mambises vs. 200.000 españoles; la «tea»; reconcentración (~150.000 † civiles).</td><td>Misma guerrilla de desgaste; solo Vietnam pudo escalar a batalla decisiva.</td></tr>
              <tr><td>Coyuntura</td><td>1898: EE. UU. interviene, decide en 10 semanas… y se queda (Platt, 15–14).</td><td>El vacío cubano lo llenó otro imperio; faltaba Estado en espera.</td></tr>
              <tr><td>Paz</td><td>Tratado de París (dic 1898) sin Cuba; cubanos excluidos de Santiago.</td><td>«Ambos combatieron; solo Vietnam negoció.»</td></tr>
              <tr><td>Opinión pública</td><td>Prensa de Hearst contra Weyler… capitalizada por la intervención de EE. UU.</td><td>En Cuba la cosechó un tercero; en Vietnam, el propio movimiento.</td></tr>
              <tr><td>Primeros 10 años</td><td>Reciprocidad 1903; intervenciones 1906/1912; masacre de 1912.</td><td>«República dependiente vs. Estado sitiado.»</td></tr>
              <tr><td>Resultado</td><td>Independencia formal 1902, tutelada; «inconclusa» hasta 1959.</td><td>Crecer sin soberanía vs. soberanía sin crecer.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El vacío cubano de 1898 lo llenó otro imperio porque no había un Estado cubano en espera; esa es la diferencia estructural con Vietnam, donde el vacío de 1945 lo llenó el propio movimiento.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Nada de «todos los factores importaron». Tesis con grado y conclusión que jerarquiza: los factores externos crearon las oportunidades, la organización interna decidió quién las aprovechó. 8–10 datos cubanos bien puestos valen más que veinte sueltos.</div>
        `,
        miniQuiz: [
          { pregunta: "La diferencia estructural de Cuba con Vietnam en la coyuntura internacional es que…", etiqueta: "concepto",
            opciones: [
              { texto: "El vacío cubano de 1898 lo llenó otro imperio porque no había Estado cubano en espera.", correcta: true, explicacion: "Correcto: en Vietnam el vacío de 1945 lo llenó el propio movimiento (Viet Minh)." },
              { texto: "Que Cuba nunca tuvo ninguna coyuntura internacional realmente favorable a su independencia.", correcta: false, explicacion: "Sí la tuvo (1898); el problema es quién la aprovechó." },
              { texto: "Que Vietnam recibió ayuda de España mientras Cuba la de Francia.", correcta: false, explicacion: "Confunde las metrópolis: España colonizó Cuba; Francia, Vietnam." },
              { texto: "Que Cuba negoció su paz y Vietnam quedó excluido de la suya.", correcta: false, explicacion: "Es al revés: Cuba fue excluida de París 1898; Vietnam negoció Ginebra y París." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "¿Por qué Cuba no se independizó con el resto de América?", dorso: "Por el azúcar y la esclavitud: la élite criolla quería independencia pero temía que una guerra se volviera revolución de esclavos como Haití." },
    { id: "fc02", categoria: "concepto", frente: "Las tres corrientes políticas cubanas", dorso: "Independencia, anexión a EE. UU. (muere con la Guerra de Secesión) y autonomía bajo España." },
    { id: "fc03", categoria: "concepto", frente: "La «tea»", dorso: "Estrategia de quemar cañaverales e ingenios —incluso de cubanos— para arruinar la economía que financiaba a España y forzar a los hacendados a definirse." },
    { id: "fc04", categoria: "concepto", frente: "Reconcentración (Weyler, 1896)", dorso: "Encerrar a la población rural en pueblos fortificados para quitarle base a la guerrilla; ~150.000–170.000 † civiles (un 10% de la población)." },
    { id: "fc05", categoria: "concepto", frente: "Mambises", dorso: "Los rebeldes cubanos: ~40.000 mal armados que enfrentaron a ~200.000 españoles con movilidad, machete y clima." },
    { id: "fc06", categoria: "concepto", frente: "PRC (1892)", dorso: "Partido Revolucionario Cubano: partido de la emigración fundado por Martí; unificaba clubes del exilio, publicaba Patria y compraba armas (tabaqueros aportan el 10% del salario)." },
    { id: "fc07", categoria: "concepto", frente: "«Con todos y para el bien de todos»", dorso: "Fórmula de Martí (Tampa, 1891) para una república sin razas ni clases; enterrada en la masacre de 1912." },
    { id: "fc08", categoria: "fecha", frente: "10 oct 1868", dorso: "Grito de Yara: Céspedes proclama la independencia y libera a sus esclavos. Empieza la Guerra de los Diez Años." },
    { id: "fc09", categoria: "fecha", frente: "1878", dorso: "Pacto del Zanjón (paz sin independencia); Protesta de Baraguá (Maceo lo rechaza)." },
    { id: "fc10", categoria: "fecha", frente: "1886", dorso: "Abolición definitiva de la esclavitud en Cuba." },
    { id: "fc11", categoria: "fecha", frente: "1891", dorso: "Martí publica Nuestra América y lanza en Tampa «con todos y para el bien de todos»." },
    { id: "fc12", categoria: "fecha", frente: "24 feb 1895", dorso: "Grito de Baire: reinicia la guerra tras la crisis del arancel Wilson-Gorman (1894)." },
    { id: "fc13", categoria: "fecha", frente: "19 may 1895", dorso: "Martí muere en su primer combate, en Dos Ríos, a los 42 años." },
    { id: "fc14", categoria: "fecha", frente: "15 feb 1898", dorso: "Explosión del USS Maine en La Habana (266 †); hoy se acepta que fue accidente interno." },
    { id: "fc15", categoria: "fecha", frente: "10 dic 1898", dorso: "Tratado de París: España cede Cuba, Puerto Rico, Filipinas y Guam sin que ningún cubano participe." },
    { id: "fc16", categoria: "fecha", frente: "1901", dorso: "Enmienda Platt: derecho de EE. UU. a intervenir + base en Guantánamo; aceptada 15–14." },
    { id: "fc17", categoria: "fecha", frente: "20 may 1902", dorso: "Nace la república de Cuba (Estrada Palma), con la soberanía hipotecada." },
    { id: "fc18", categoria: "fecha", frente: "1903", dorso: "Tratado de Reciprocidad: preferencia al azúcar cubano a cambio de abrir Cuba a productos de EE. UU." },
    { id: "fc19", categoria: "fecha", frente: "1912", dorso: "Masacre de ~3.000 negros tras el alzamiento del PIC; marines desembarcados." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Qué arancel detonó la guerra de 1895?", dorso: "El Wilson-Gorman (1894): hundió el precio del azúcar y sumió a Cuba en crisis (EE. UU. compraba ~90% de las exportaciones)." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "Consecuencia de la muerte de Martí y Maceo", dorso: "La revolución perdió su cabeza política y su símbolo racial; volvió la fractura civiles-militares y el movimiento quedó fragmentado (Thomas)." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "¿Por qué el vacío de 1898 lo llenó EE. UU. y no los cubanos?", dorso: "Porque no había un Estado cubano en espera: Cuba organizó el exilio pero no el territorio." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "Las tres hipotecas de la república (1902)", dorso: "Política (Platt), económica (monocultivo + ~60% de tierra extranjera) y racial (PIC → Ley Morúa 1910 → masacre 1912)." },
    { id: "fc24", categoria: "historiador", frente: "Pérez Jr. (ancla: «CONFISCADA»)", dorso: "Los cubanos estaban ganando en 1898; EE. UU. intervino para impedir una Cuba independiente de ejército multirracial (Platt + Reciprocidad = anexión económica)." },
    { id: "fc25", categoria: "historiador", frente: "Thomas (ancla: «ESTANCADA»)", dorso: "En 1898 la guerra estaba estancada y el movimiento fragmentado tras Martí y Maceo; la debilidad española y la intervención decidieron." },
    { id: "fc26", categoria: "historiador", frente: "Ferrer (ancla: «SIN RAZAS»)", dorso: "La insurgencia fue multirracial y antirracista (~40% de oficiales de color en 1895); la república de 1902 traicionó ese proyecto." },
    { id: "fc27", categoria: "historiador", frente: "De la Fuente (ancla: «1912»)", dorso: "La masacre del PIC muestra que la nación eligió el orden racial sobre el ideal martiano: continuidad del racismo en la república." },
    { id: "fc28", categoria: "concepto", frente: "Enmienda Teller (1898)", dorso: "Promesa de EE. UU. de no anexar Cuba, aprobada al declarar la guerra para tranquilizar a la opinión pública." },
    { id: "fc29", categoria: "concepto", frente: "Partido Independiente de Color (PIC, 1908)", dorso: "Partido de veteranos negros (Estenoz); prohibido por la Ley Morúa (1910); su protesta de 1912 terminó en masacre." },
    { id: "fc30", categoria: "concepto", frente: "«Independencia inconclusa»", dorso: "El hilo de toda la historia cubana: la república tutelada por la Platt alimentó el nacionalismo que culminaría en 1933 y 1959." },
    { id: "fc31", categoria: "causa-consecuencia", frente: "El debate central del caso cubano", dorso: "Pérez: la intervención «robó una victoria». Thomas: «compró un empate». En ambos casos, la independencia de 1902 no fue obra cubana." },
    { id: "fc32", categoria: "concepto", frente: "Métodos no violentos de Cuba", dorso: "Organización política (PRC) y propaganda hacia afuera (Patria, prensa de Hearst); la diplomacia propia fue casi nula." }
  ],

  /* ===================== QUIZ ===================== */
  quiz: [
    { pregunta: "¿Qué hacía único al PRC de Martí (1892)?", etiqueta: "concepto",
      opciones: [
        { texto: "Era un partido de la emigración que organizaba al exilio tabaquero.", correcta: true, explicacion: "Correcto: recorrió club por club en Tampa, Cayo Hueso y Nueva York (10% del salario)." },
        { texto: "Era un partido marxista-leninista que repartía tierras a campesinos.", correcta: false, explicacion: "Eso describe a Vietnam; el PRC era liberal-republicano y antirracista." },
        { texto: "Era un partido militar dirigido por el general Máximo Gómez.", correcta: false, explicacion: "Lo dirigía Martí (civil) y subordinó a los generales a la política." },
        { texto: "Era una alianza formal con el gobierno de los Estados Unidos.", correcta: false, explicacion: "Martí desconfiaba de EE. UU.; el PRC era de la emigración cubana." }
      ] },
    { pregunta: "La «tea» consistía en…", etiqueta: "concepto",
      opciones: [
        { texto: "Quemar cañaverales e ingenios para arruinar la economía que financiaba a España.", correcta: true, explicacion: "Correcto: guerra económica deliberada para forzar a los hacendados a definirse." },
        { texto: "Encerrar a la población rural en pueblos fortificados para aislar a la guerrilla.", correcta: false, explicacion: "Eso era la reconcentración de Weyler, no la tea." },
        { texto: "Un impuesto especial que los tabaqueros del exilio pagaban al PRC.", correcta: false, explicacion: "El aporte del exilio era el 10% del salario, no la tea." },
        { texto: "El bloqueo naval de los puertos cubanos por parte de la flota rebelde.", correcta: false, explicacion: "Los mambises eran guerrilla terrestre; no había flota rebelde." }
      ] },
    { pregunta: "¿Qué pasó con el ejército cubano en la rendición de Santiago (1898)?", etiqueta: "fecha",
      opciones: [
        { texto: "El general Shafter prohibió la entrada de las tropas de Calixto García a la ciudad.", correcta: true, explicacion: "Correcto: los cubanos fueron excluidos pese a haber hecho posible el desembarco." },
        { texto: "Las tropas cubanas firmaron la rendición española junto a los estadounidenses.", correcta: false, explicacion: "Lo contrario: los cubanos no firmaron ni su guerra ni su paz." },
        { texto: "El Ejército Libertador de Calixto García ocupó y administró Santiago antes que las tropas de EE. UU.", correcta: false, explicacion: "Se les prohibió la entrada; no ocuparon la ciudad." },
        { texto: "España entregó Santiago directamente al gobierno en armas cubano.", correcta: false, explicacion: "España capituló ante EE. UU.; Cuba quedó fuera." }
      ] },
    { pregunta: "La crisis que detonó la guerra de 1895 vino de…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "El arancel Wilson-Gorman (1894), que hundió el precio del azúcar.", correcta: true, explicacion: "Correcto: con EE. UU. comprando ~90% del azúcar, la crisis fue el combustible." },
        { texto: "La abolición de la esclavitud decretada por España en 1886.", correcta: false, explicacion: "La abolición es de 1886 y no fue el detonante inmediato de 1895." },
        { texto: "La Enmienda Platt impuesta por Estados Unidos en 1894.", correcta: false, explicacion: "La Platt es de 1901, posterior a la guerra." },
        { texto: "El bloqueo comercial total que España impuso sobre el puerto de La Habana.", correcta: false, explicacion: "No figura: el detonante económico fue el arancel estadounidense de 1894." }
      ] },
    { pregunta: "Según Ferrer, lo revolucionario del independentismo cubano fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Su nacionalismo antirracista: un ejército multirracial que prometía una nación «sin razas».", correcta: true, explicacion: "Correcto: ~40% de oficiales de color en 1895; eso le dio masas al movimiento." },
        { texto: "Su programa de colectivización de la tierra y reparto a los campesinos.", correcta: false, explicacion: "El nacionalismo cubano no tenía programa social; eso es Vietnam." },
        { texto: "Su alianza estratégica con la clase obrera industrial y los sindicatos azucareros de La Habana.", correcta: false, explicacion: "Ferrer destaca lo racial y multirracial, no una alianza obrera urbana." },
        { texto: "Su rechazo total a cualquier forma de guerra o violencia armada.", correcta: false, explicacion: "La violencia fue central; lo revolucionario fue el antirracismo." }
      ] },
    { pregunta: "El debate Pérez vs. Thomas sobre 1898 se resume en que…", etiqueta: "historiador",
      opciones: [
        { texto: "Pérez ve una victoria confiscada y Thomas una guerra estancada; en ambos casos 1902 no fue obra cubana.", correcta: true, explicacion: "Correcto: es el juicio de banda alta del caso cubano." },
        { texto: "Ambos coinciden en que la independencia de 1902 fue una conquista plenamente cubana.", correcta: false, explicacion: "Ninguno de los dos: justamente coinciden en que no lo fue." },
        { texto: "Pérez dice que la guerra estaba empatada y Thomas que los cubanos ganaban.", correcta: false, explicacion: "Es al revés: Pérez = confiscada; Thomas = estancada." },
        { texto: "Los dos sostienen que Estados Unidos rescató a unos mambises que estaban ya al borde de la derrota total.", correcta: false, explicacion: "Para Pérez los cubanos ganaban; no fue un rescate." }
      ] },
    { pregunta: "La Enmienda Platt (1901) fue aceptada por la constituyente cubana…", etiqueta: "fecha",
      opciones: [
        { texto: "Por 15 votos contra 14, bajo amenaza de que la ocupación no terminaría de otro modo.", correcta: true, explicacion: "Correcto: una aceptación mínima y coaccionada." },
        { texto: "Por unanimidad y con entusiasmo de todos los delegados cubanos.", correcta: false, explicacion: "Fue ajustadísima (15–14) y bajo coacción." },
        { texto: "Tras un plebiscito popular que la aprobó con amplia mayoría.", correcta: false, explicacion: "No hubo plebiscito; la votó la constituyente, 15–14." },
        { texto: "Después de que Estados Unidos renunciara formalmente a toda intervención militar futura en la isla.", correcta: false, explicacion: "Al contrario: la Platt le daba a EE. UU. el derecho a intervenir." }
      ] },
    { pregunta: "¿Qué fue la «Guerrita de Agosto» (1906)?", etiqueta: "fecha",
      opciones: [
        { texto: "Un alzamiento liberal (24.000 rebeldes) tras el fraude de Estrada Palma, que llevó a la 2ª ocupación de EE. UU.", correcta: true, explicacion: "Correcto: Estrada renunció pidiendo la intervención; gobernó Magoon (1906–09)." },
        { texto: "La guerra final de independencia contra España en el oriente de la isla.", correcta: false, explicacion: "Esa fue 1895–98; la Guerrita de Agosto es ya en la república (1906)." },
        { texto: "El alzamiento del Partido Independiente de Color aplastado en una masacre.", correcta: false, explicacion: "Eso fue en 1912, no la Guerrita de Agosto de 1906." },
        { texto: "Una revuelta de veteranos y de colonos españoles descontentos con las duras cláusulas del Tratado de París de 1898.", correcta: false, explicacion: "Fue un conflicto interno cubano por fraude electoral, no de españoles." }
      ] },
    { pregunta: "El principal desafío racial de los primeros 10 años culminó en…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "La masacre de ~3.000 negros en 1912, tras prohibirse el PIC con la Ley Morúa (1910).", correcta: true, explicacion: "Correcto: los negros fueron ~85% de los combatientes y recibieron casi nada." },
        { texto: "La entrega masiva de tierras y cargos públicos a los veteranos negros del Ejército Libertador.", correcta: false, explicacion: "No hubo tal entrega; administración y Guardia Rural quedaron blancas." },
        { texto: "La elección de un presidente afrocubano apoyado por los marines.", correcta: false, explicacion: "No ocurrió; los marines desembarcaron para reprimir, no para eso." },
        { texto: "La integración plena de los negros en la Guardia Rural y la administración.", correcta: false, explicacion: "Fue lo contrario: exclusión e inmigración española fomentada." }
      ] },
    { pregunta: "¿Cuál es la diferencia estructural de Cuba con Vietnam, según el kit?", etiqueta: "concepto",
      opciones: [
        { texto: "El vacío cubano de 1898 lo llenó otro imperio porque no había Estado cubano en espera.", correcta: true, explicacion: "Correcto: en Vietnam el vacío de 1945 lo llenó el propio Viet Minh." },
        { texto: "Que Cuba jamás recurrió a la lucha armada y Vietnam sí.", correcta: false, explicacion: "Cuba hizo tres guerras; la violencia fue central en ambos casos." },
        { texto: "Que Vietnam fue colonia de España y Cuba de Francia.", correcta: false, explicacion: "Es al revés de ambos: España colonizó Cuba; Francia, Vietnam." },
        { texto: "Que Cuba negoció directamente su propia paz con España y Vietnam quedó del todo excluido de la suya.", correcta: false, explicacion: "Al revés: Cuba fue excluida de París 1898; Vietnam negoció Ginebra y París." }
      ] },
    { pregunta: "El liderazgo cubano se define mejor como…", etiqueta: "historiador",
      opciones: [
        { texto: "Excepcional pero trunco: Martí murió a los 3 meses y faltó una organización que lo sobreviviera.", correcta: true, explicacion: "Correcto: la gran diferencia con Vietnam, cuyo liderazgo fue institucional." },
        { texto: "Burocrático y colectivo, sin ninguna figura destacada.", correcta: false, explicacion: "Al revés: sobraban figuras (Martí, Gómez, Maceo) y faltaba la institución." },
        { texto: "Totalmente dependiente del apoyo militar y financiero directo del gobierno de los Estados Unidos.", correcta: false, explicacion: "EE. UU. nunca reconoció la beligerancia cubana." },
        { texto: "Pacifista y opuesto a cualquier forma de guerra.", correcta: false, explicacion: "La violencia fue el método central del movimiento." }
      ] },
    { pregunta: "¿Por qué Cuba no se independizó junto al resto de América (1810–25)?", etiqueta: "concepto",
      opciones: [
        { texto: "Por el azúcar y la esclavitud: el miedo a una revolución de esclavos como Haití frenó a los criollos.", correcta: true, explicacion: "Correcto: ese miedo mantuvo a Cuba española medio siglo." },
        { texto: "Porque España envió de inmediato a Bolívar y a San Martín con sus ejércitos a reprimir cualquier revuelta en la isla.", correcta: false, explicacion: "Bolívar y San Martín lideraron la independencia continental, no la represión de Cuba." },
        { texto: "Porque Estados Unidos ya la había anexado como estado en 1810.", correcta: false, explicacion: "La anexión era solo una corriente política; nunca ocurrió así." },
        { texto: "Porque Cuba carecía por completo de una élite criolla propia.", correcta: false, explicacion: "Sí tenía élite criolla rica; el freno fue el miedo racial, no su ausencia." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Compare y contraste el papel del nacionalismo/ideología en dos movimientos independentistas.", frecuencia: "Muy alta",
        plan: "C: Martí une región/clase/raza (PRC 1892) pero sin programa social. V: Ho fusiona nación + marxismo (reforma agraria = masas). Juicio: Cuba organizó para la guerra, Vietnam para el Estado. Ferrer / Duiker." },
      { pregunta: "¿En qué medida fue decisiva la guerra (factor externo) en el éxito de un movimiento?", frecuencia: "Muy alta",
        plan: "Catalizador en ambos, decisiva y propia solo en Vietnam. C: tres guerras agotan a España; 1898 decide y confisca. Pérez vs. Thomas." },
      { pregunta: "Evalúe la importancia de los factores externos frente a los internos.", frecuencia: "Alta",
        plan: "Los externos abren oportunidades; los internos deciden quién las toma. C: debilidad española + intervención = desenlace ajeno. Logevall / Duiker." },
      { pregunta: "Examine los métodos (violentos y no violentos) de un movimiento independentista.", frecuencia: "Alta",
        plan: "C: guerrilla + tea + propaganda hacia afuera (Patria, Hearst), sin diplomacia propia. «Ambos combatieron; solo Vietnam negoció.»" },
      { pregunta: "Analice los desafíos de los primeros diez años tras la independencia.", frecuencia: "Alta",
        plan: "Tres hipotecas: política (Platt, intervenciones 1906/1912), económica (Reciprocidad, 60% tierra extranjera), racial (masacre 1912). Pérez / De la Fuente." },
      { pregunta: "Discuta el papel del liderazgo en el éxito de un movimiento independentista.", frecuencia: "Media",
        plan: "C: Martí organiza y muere (1895); Gómez/Maceo ganan el campo sin Estado detrás. Personal y truncado. Thomas (fragmentación)." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida el nacionalismo explica el éxito del movimiento cubano?",
        tesis: "El nacionalismo martiano fue necesario pero no suficiente: resolvió los tres problemas de 1868 (región, clase, raza) pero el desenlace lo decidieron la crisis económica y la intervención.",
        pasos: [
          "Qué resolvió: unidad regional (invasión Oriente→Occidente), racial (ejército multirracial, ~40% oficiales de color, Ferrer), de clase («con todos y para el bien de todos»).",
          "Qué organizó: el PRC (1892) de la emigración, Patria, reconciliación Gómez–Maceo (1892–94).",
          "Límite económico: sin la crisis del arancel de 1894 (EE. UU. compraba ~90%) no estalla (Pérez: la economía dio el combustible).",
          "Límite del desenlace: la intervención de 1898 confiscó la victoria; faltó un Estado en espera.",
          "Conclusión: el nacionalismo fue el pegamento, pero la independencia de 1902 no fue obra cubana."
        ] },
      { titulo: "Plan B · ¿Hasta qué punto fue decisiva la intervención de EE. UU. en 1898?",
        tesis: "Fue decisiva para el resultado y letal para su contenido: robó una victoria (Pérez) o compró un empate (Thomas), pero en ambos casos impidió que la independencia fuera cubana.",
        pasos: [
          "Contexto: EE. UU. con ~$50 M invertidos y ~$100 M de comercio anual; interés estratégico en el Caribe.",
          "El episodio: Maine (15 feb 1898), Enmienda Teller, guerra de 10 semanas.",
          "La confiscación: exclusión de Santiago (Calixto García) y del Tratado de París; Ejército Libertador disuelto.",
          "La tutela: Enmienda Platt (1901, 15–14) + Reciprocidad (1903) = anexión económica (Pérez).",
          "Contraste con Thomas: la guerra estaba estancada y el movimiento fragmentado tras Martí y Maceo.",
          "Conclusión: la independencia de 1902 nació hipotecada."
        ] },
      { titulo: "Plan C · Examine los desafíos de los primeros diez años (1902–1912).",
        tesis: "La república enfrentó tres hipotecas —política, económica y racial— que la volvieron una «independencia inconclusa».",
        pasos: [
          "Política: la Platt hace de EE. UU. árbitro interno; fraude de 1905 → Guerrita de Agosto (1906) → 2ª ocupación (Magoon); marines en 1912 y 1917.",
          "Económica: Reciprocidad (1903) → azúcar ×3 en 5 años, pero monocultivo y ~60% de tierra extranjera.",
          "Racial: negros ~85% de los combatientes sin recompensa; PIC (1908) → Ley Morúa (1910) → masacre de 1912 (~3.000, De la Fuente).",
          "Juicio: el ideal martiano quedó enterrado; el nacionalismo renacerá hasta 1933 y 1959.",
          "Conclusión: Cuba creció sin soberanía — «república dependiente»."
        ] },
      { titulo: "Plan D · Examine los métodos del movimiento independentista cubano.",
        tesis: "La violencia fue esencial pero no autosuficiente; la propaganda fue exitosa hacia afuera y la diplomacia propia, nula.",
        pasos: [
          "Violentos: tres guerras (1868–78, 1879–80, 1895–98), guerrilla, la «tea», desgaste del ejército español (fiebre amarilla).",
          "Eficacia: enorme para destruir el poder español en el campo, insuficiente para rematarlo (Thomas: no tomaban ciudades).",
          "No violentos: PRC (1892) y propaganda (Patria; prensa de Hearst contra Weyler).",
          "El límite: la opinión pública favorable la cosechó un tercero (la intervención de EE. UU.); la diplomacia propia fue nula.",
          "Conclusión: «ambos combatieron; solo Vietnam negoció» — a Cuba le faltó convertir la fuerza en diplomacia propia."
        ] },
      { titulo: "Plan E · Discuta el papel del liderazgo en el movimiento cubano.",
        tesis: "El liderazgo fue excepcional pero trunco: resolvió la unidad y murió al inicio, sin dejar una organización que lo sobreviviera.",
        pasos: [
          "Martí: resolvió el problema que mató a la guerra de 1868 (la unidad) y murió a los tres meses (Dos Ríos, 1895).",
          "Maceo: símbolo racial; cayó en 1896.",
          "Gómez: ganó la guerra en el campo pero sin estructura política que la volviera Estado.",
          "Thomas: tras Martí y Maceo el movimiento quedó fragmentado.",
          "Conclusión: liderazgo personal y truncado vs. el institucional y longevo de Vietnam — esa diferencia explica 1898 vs. 1945."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida fueron los factores externos decisivos para el resultado del movimiento independentista cubano?»",
        parrafos: [
          { texto: "El movimiento independentista cubano (1868–1902) ilustra mejor que ningún otro la relación entre factores externos e internos, porque fue un movimiento que ganó el campo y perdió el desenlace. Tesis: los factores externos —la decadencia española y, sobre todo, la intervención de Estados Unidos en 1898— fueron decisivos para el resultado, pero solo porque los factores internos cubanos, pese a un nacionalismo y una guerra ejemplares, no habían construido un Estado capaz de ocupar el vacío. Como resume la fórmula del tema, los factores externos crearon la oportunidad y la organización interna decidió quién la aprovechó.", nota: "Intro: tesis con grado, no «todos importaron». Anticipa el veredicto (externos decisivos para el resultado, internos para el contenido)." },
          { texto: "Internamente, Cuba hizo casi todo bien. El nacionalismo martiano resolvió los tres problemas que habían matado la guerra de 1868: el regionalismo (la invasión de Oriente a Occidente, 1.500 km), el conflicto de clase y el miedo racial —el ejército rebelde fue multirracial, con cerca del 40% de oficiales de color en 1895, lo que Ferrer señala como lo verdaderamente revolucionario—. El PRC (1892), partido de la emigración financiado por los tabaqueros (10% del salario), dio organización, y la «tea» y la guerrilla desgastaron a un ejército español de 200.000 hombres. «Esto demuestra que» el factor interno cubano fue potente: para 1897 España ofrecía la autonomía que veinte años antes habría bastado.", nota: "Factores internos con evidencia fechada y un historiador usado, no pegado. Cierra volviendo al argumento." },
          { texto: "Pero el desenlace lo decidió el factor externo. Estados Unidos, con ~50 millones invertidos y un interés estratégico en el Caribe, usó la explosión del Maine (15 feb 1898) para entrar, y en diez semanas aniquiló a la flota española. Lo decisivo fue el contenido de esa intervención: excluyó a los cubanos de la rendición de Santiago y del Tratado de París, disolvió el Ejército Libertador e impuso la Enmienda Platt (1901, 15–14). Para Pérez, esto fue una confiscación de la victoria cubana; Thomas matiza que la guerra estaba estancada y el movimiento fragmentado tras Martí y Maceo — pero en ambas lecturas la independencia de 1902 no fue obra cubana.", nota: "Factor externo con el debate historiográfico enfrentado (Pérez vs. Thomas) y cierre propio." },
          { texto: "En conclusión, los factores externos fueron decisivos para el resultado pero no lo habrían sido sin una debilidad interna precisa: la falta de un Estado cubano en espera. Esa es la diferencia estructural con Vietnam, donde el vacío de 1945 lo llenó el Viet Minh porque ya gobernaba un territorio. Cuba organizó el exilio y ganó el campo, pero no construyó la institución que convirtiera la victoria militar en soberanía — y por eso el vacío de 1898 lo llenó otro imperio.", nota: "Conclusión que jerarquiza y usa el contraste con Vietnam como veredicto, sin resumir mecánicamente." }
        ] },
      { titulo: "Ensayo 2 · «Evalúe los desafíos que enfrentó Cuba en los primeros diez años de independencia.»",
        parrafos: [
          { texto: "La república cubana nació el 20 de mayo de 1902 con la soberanía hipotecada, y sus primeros diez años (1902–1912) fueron la gestión de tres hipotecas heredadas de 1898: una política, una económica y una racial. Tesis: ninguna se resolvió, y la racial —la traición del ideal martiano— fue la más grave, porque convirtió la «independencia» en lo que la historiografía cubana llama «inconclusa».", nota: "Intro con veredicto tripartito y jerarquía (la racial como la más grave)." },
          { texto: "El desafío político fue la Enmienda Platt, que convirtió a Washington en árbitro interno: cada bando derrotado apelaba a EE. UU. El fraude de Estrada Palma (1905) desató la Guerrita de Agosto (1906) y una segunda ocupación estadounidense (1906–09, Magoon), con nuevos desembarcos en 1912 y 1917. «Esto demuestra que» la soberanía era nominal: la república no controlaba ni su propia sucesión.", nota: "Desafío político con evidencia fechada; frase de enlace que lo vuelve argumento." },
          { texto: "El desafío económico fue el monocultivo. El Tratado de Reciprocidad (1903) reconstruyó el azúcar a toda velocidad —de 300.000 a un millón de toneladas en cinco años— pero a costa de matar la industria propia y entregar la tierra: hacia 1905, ~60% de la propiedad rural era extranjera. Como señala Pérez, Platt y Reciprocidad fueron una «anexión económica»: Cuba creció, pero creció dependiente.", nota: "Desafío económico con cifras y el historiador articulando el juicio." },
          { texto: "El desafío racial fue el más amargo y decisivo. Los negros habían sido ~85% de los combatientes y no recibieron casi nada; cuando fundaron el PIC (1908), el Congreso lo prohibió (Ley Morúa, 1910) y respondió su protesta de 1912 con una masacre de ~3.000 personas, con marines desembarcados. Para De la Fuente, esto prueba que la nueva nación eligió el orden racial sobre el ideal martiano. En conclusión, la república tutelada no resolvió ninguna de sus tres hipotecas: creció sin soberanía y enterró la promesa de «con todos y para el bien de todos» —la bandera que reaparecería en 1933 y 1959—.", nota: "Desafío racial + conclusión que jerarquiza y cierra con la «independencia inconclusa»." }
        ] }
    ],
    guia: {
      tesis: "Respondé con grado y veredicto. Tesis maestra del caso cubano: «Cuba construyó un nacionalismo y ganó la guerra en el campo, pero sin un Estado en espera; por eso, cuando entró EE. UU. en 1898, el vacío lo llenó otro imperio y la independencia de 1902 nació tutelada por la Platt.»",
      argumentos: [
        "Estructura del temario: origen y desarrollo (1868–1898) → métodos y causas → primeros 10 años (1902–1912). Declaralo.",
        "Cada párrafo comparativo: afirmación → dato cubano → dato vietnamita → por qué difieren → historiador → mini-juicio.",
        "Jerarquizá: «los factores externos crearon la oportunidad; la organización interna decidió quién la aprovechó»."
      ],
      evidencia: [
        "Guerra: 40.000 mambises vs. 200.000 españoles; la «tea»; reconcentración (~150.000–170.000 † civiles); fiebre amarilla.",
        "Organización: PRC (1892), Patria, 10% del salario tabaquero; ~40% de oficiales de color (1895).",
        "1898: Maine (266 †), Teller, 10 semanas, exclusión de Santiago y París, Platt (1901, 15–14), Reciprocidad (1903), masacre de 1912 (~3.000)."
      ],
      historiografia: [
        "Pérez («CONFISCADA») vs. Thomas («ESTANCADA») para 1898 y el éxito.",
        "Ferrer («SIN RAZAS») para nacionalismo y raza; De la Fuente («1912») para los primeros 10 años.",
        "Un historiador por argumento, dos enfrentados en el párrafo clave, y cerrás vos."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej. «la intervención de 1898 fue un rescate» o «la guerra estaba ganada sola») y refutala: Pérez muestra la confiscación, Thomas el empate — en ambos casos la independencia de 1902 no fue cubana."
    }
  }
});
