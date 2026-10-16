/* ============================================================
   tema-p1-dcafro.js — Paper 1: Derechos civiles afroamericanos (EE. UU.)
   Enfoque Paper 1 (preguntas basadas en fuentes: OPVL, valor y
   limitación, comparar-contrastar, mini-ensayo con fuentes).
   Mismo PDF que 17.2, adaptado a destrezas de fuentes y cronología de hitos.
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "p1-dcafro",
  carpeta: "p1",
  titulo: "Derechos civiles afroamericanos (EE. UU.)",
  subtitulo: "Hitos y destrezas de fuentes · Brown → VRA · MLK · Malcolm X · Black Power",
  periodo: "Brown 1954 · CRA 1964 · VRA 1965 · Black Power 1965–1972",
  estado: "listo",
  etiquetas: ["Paper 1", "fuentes", "OPVL", "derechos civiles", "MLK", "Malcolm X", "Black Power", "Brown", "Montgomery", "Selma", "VRA"],

  /* ===================== RESUMEN (hoja ultra-condensada para fuentes) ===================== */
  resumen: {
    tesisMaestra: "Paper 1 no pide un ensayo largo sino destrezas de fuentes: entender una fuente, extraer su mensaje, evaluar su valor y limitación por origen/propósito/contenido (OPVL), comparar y contrastar dos fuentes, y usar fuentes + conocimiento propio en un mini-ensayo. El contenido fáctico es el mismo que 17.2 (los hitos Brown→VRA, MLK, Malcolm X, Black Power), pero acá lo que suma banda es la habilidad, no la narración.",
    historiadoresLinea: [
      { nombre: "OPVL", linea: "Para «valor y limitación»: Origen (quién, qué, cuándo), Propósito (para qué se produjo), Valor (qué permite saber por ese origen y propósito), Limitación (qué deja afuera o sesga por ese mismo origen y propósito)." },
      { nombre: "Carson", linea: "«Desde abajo»: útil para contextualizar fuentes de base (volantes del boicot, testimonios del SNCC) frente al relato centrado en King." },
      { nombre: "Dudziak", linea: "Guerra Fría: contextualiza fuentes oficiales y de prensa (por qué el gobierno respondía a las fotos de Little Rock o Birmingham)." },
      { nombre: "Joseph", linea: "Black Power: contextualiza fuentes radicales (discursos de Malcolm, Programa de 10 Puntos de las Panteras) como movimiento paralelo, no como decadencia." },
      { nombre: "De regalo", linea: "Anderson (balance positivo) y el cameo Paul Johnson (lectura conservadora): sirven para el contraste de perspectivas en el mini-ensayo de evaluación." }
    ],
    datosClave: [
      { grupo: "Hitos para ubicar cualquier fuente (fechas clave)", items: [
        "17-V-1954 Brown v. Board · 1-XII-1955 Rosa Parks (boicot 381 días) · 24-IX-1957 Little Rock.",
        "1-II-1960 sit-ins de Greensboro · 4-V-1961 Freedom Rides (Anniston 14-V).",
        "IV–V-1963 Birmingham (Connor, niños) · 28-VIII-1963 Marcha sobre Washington («I Have a Dream»).",
        "2-VII-1964 Civil Rights Act · VI–VIII-1964 Freedom Summer (Neshoba, MFDP, Hamer).",
        "7-III-1965 Selma / Bloody Sunday · 6-VIII-1965 Voting Rights Act · 11-VIII Watts.",
        "21-II-1965 asesinato de Malcolm X · 16-VI-1966 «Black Power» · 15-X-1966 Panteras · 4-XII-1969 Hampton."
      ]},
      { grupo: "Tipos de fuente que suelen caer", items: [
        "Fotos: Elizabeth Eckford en Little Rock (1957); perros de Birmingham (1963); puente de Selma (1965). Valor: impacto en la opinión y la política exterior (Dudziak).",
        "Discursos: «I Have a Dream» (King, 1963); «El voto o la bala» (Malcolm, 1964); «We shall overcome» (Johnson, 15-III-1965).",
        "Documentos oficiales: fallo Brown; textos de la CRA (Título II, VI, VII) y la VRA (Secc. 4 y 5, preclearance).",
        "Fuentes de base: los 35.000 volantes de Jo Ann Robinson; testimonio de Fannie Lou Hamer en Atlantic City; Programa de 10 Puntos de las Panteras.",
        "Prensa: fotos del autobús de Anniston en llamas; portada del New York Times con los perros; ABC interrumpe su programación por el puente de Selma (48 M)."
      ]}
    ],
    comparacion: [
      { eje: "Integración vs. nacionalismo negro", texto: "Una fuente de King (no violencia, integración, coalición) frente a una de Malcolm X (autodefensa, autodeterminación): el contraste clásico de «comparar y contrastar»." },
      { eje: "De jure vs. de facto", texto: "Una fuente del Sur (segregación por ley: Brown, CRA) frente a una del Norte (gueto, pobreza, policía: Watts, Panteras): mismos derechos, distinto problema." },
      { eje: "Oficial vs. de base", texto: "Una fuente del gobierno (discurso presidencial, fallo) frente a una de base (volante, testimonio): perspectivas y propósitos opuestos para el OPVL." },
      { eje: "Antes vs. después de 1965", texto: "Fuentes de la fase heroica (1954–65, optimismo, leyes) frente a fuentes de la fase radical (1965–72, frustración, backlash)." }
    ],
    veredictos: [
      { titulo: "Qué premia Paper 1", texto: "No el relato sino: leer la fuente, inferir su mensaje, evaluar valor y limitación por origen y propósito, comparar dos fuentes punto por punto, y en el mini-ensayo integrar fuentes + conocimiento propio." },
      { titulo: "El error que más cuesta banda", texto: "En «valor y limitación», decir «es fiable/no es fiable» o «es antigua». Hay que anclar el valor y el límite en el origen y el propósito concretos de esa fuente." },
      { titulo: "La frase que ordena el tema", texto: "La misma semana de agosto de 1965 se firma la VRA (6-VIII) y arde Watts (11-VIII): cualquier fuente se ubica según en qué lado de ese quiebre esté." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Clayborne Carson", nacionalidad: "Estadounidense (Stanford), afroamericano",
      obra: "In Struggle: SNCC and the Black Awakening of the 1960s (1981)",
      postura: "«Desde abajo»: organizar > movilizar",
      funcion: "Contextualizar fuentes de base (volantes, testimonios del SNCC) frente al relato centrado en King.",
      ideaCentral: "El impulso del movimiento vino de comunidades locales y organizadores de base (Jo Ann Robinson, Ella Baker, Bob Moses, Fannie Lou Hamer), no del carisma de King. «El movimiento hizo a King, no King al movimiento». Útil cuando una fuente es un volante, un testimonio o un documento de organización local.",
      matiz: "No niega el valor de King como símbolo; niega que explique el movimiento. Ayuda a leer el propósito de fuentes que ensalzan o minimizan a King.",
      fraseLista: "Para contextualizar una fuente de base, Clayborne Carson recuerda que la organización precedió al carisma: el volante de Jo Ann Robinson es anterior al liderazgo de King.",
      paraPreguntas: ["Contexto de fuentes de base", "Comparar fuente oficial vs. de base", "Valor de testimonios del SNCC"]
    },
    {
      nombre: "Mary Dudziak", nacionalidad: "Estadounidense, historiadora del derecho (Emory)",
      obra: "Cold War Civil Rights (2000)",
      postura: "La Guerra Fría explica el timing",
      funcion: "Contextualizar fotos y fuentes oficiales: por qué el gobierno respondía a las imágenes.",
      ideaCentral: "El gobierno federal apoyó los derechos civiles por la Guerra Fría: la segregación dañaba la imagen de EE.UU. ante el mundo descolonizado. Por eso las fotos (Eckford en Little Rock, los perros de Birmingham, el puente de Selma) tuvieron tanto peso: cada intervención federal siguió a una crisis de imagen internacional.",
      matiz: "No dice que el movimiento no importara: explica por qué una foto podía mover a la Casa Blanca. Clave para evaluar el valor de fotos y de prensa.",
      fraseLista: "Como muestra Dudziak, una foto como la de Elizabeth Eckford valía por su efecto internacional: el gobierno actuó cuando el costo de imagen superó el costo político interno.",
      paraPreguntas: ["Valor de fotos y prensa", "Contexto de fuentes oficiales (Little Rock, Birmingham)", "Por qué el gobierno respondía"]
    },
    {
      nombre: "Peniel Joseph", nacionalidad: "Estadounidense (Univ. de Texas), afroamericano",
      obra: "Waiting 'Til the Midnight Hour (2006) · The Sword and the Shield (2020)",
      postura: "Black Power = movimiento paralelo, no decadencia",
      funcion: "Contextualizar fuentes radicales (Malcolm, Panteras, Carmichael).",
      ideaCentral: "El Black Power no fue el «gemelo malvado» del movimiento sino un movimiento paralelo con raíces propias (Malcolm, Williams, Garvey): ganó orgullo, identidad y poder local. King y Malcolm convergieron después de 1964. Útil para leer el propósito de discursos radicales sin caer en «radicalismo = violencia».",
      matiz: "Reconoce el costo (backlash, COINTELPRO) pero lo atribuye al racismo blanco, no al radicalismo. Ayuda a equilibrar una fuente hostil al Black Power.",
      fraseLista: "Para contextualizar una fuente radical, Peniel Joseph sostiene que el Black Power fue menos el gemelo malvado del movimiento que su segundo capítulo.",
      paraPreguntas: ["Contexto de fuentes de Malcolm X / Panteras", "Valor de discursos radicales", "Contraste con fuentes integracionistas"]
    },
    {
      nombre: "Terry H. Anderson", nacionalidad: "Estadounidense",
      obra: "The Movement and the Sixties (1995)",
      postura: "Optimista: balance positivo con costo político",
      funcion: "Perspectiva para el mini-ensayo de evaluación (contraste con Joseph / P. Johnson).",
      ideaCentral: "El movimiento inventó la caja de herramientas (boicot, sit-in, marcha, viaje) que después usaron todos los movimientos de los sesenta; las leyes de 1964–65 sobrevivieron y EE.UU. quedó más democrático. El Black Power tuvo lógica pero fragmentó la coalición y alimentó el backlash de 1968.",
      matiz: "Mira el costo político del Black Power; Joseph mira la ganancia cultural. Da el contrapunto equilibrado en el mini-ensayo.",
      fraseLista: "Como muestra Anderson, el movimiento inventó un repertorio de protesta que ninguna ley podía derogar, y las leyes de 1964–65 sobrevivieron al propio movimiento.",
      paraPreguntas: ["Mini-ensayo de evaluación", "Contraste con Joseph (costo vs ganancia)", "Balance del éxito"]
    },
    {
      nombre: "Fairclough · P. Johnson · Rosenberg", regalo: true, nacionalidad: "Frases regalo",
      postura: "Perspectivas para el contraste",
      ideaCentral: "Adam Fairclough: King y la SCLC como catalizador indispensable (útil frente a una fuente que minimiza a King). Paul Johnson (cameo conservador): la radicalización posterior a 1965 produjo el backlash (Nixon, Reagan). Gerald Rosenberg (The Hollow Hope): los tribunales solos no cambian nada; la desegregación llegó con la CRA de 1964.",
      fraseLista: "Para enriquecer el mini-ensayo: Fairclough ve a King como catalizador; Rosenberg recuerda que sin el dinero del Congreso (CRA 1964) Brown no habría cambiado las escuelas.",
      paraPreguntas: ["Perspectivas alternativas en el mini-ensayo", "Contexto de fuentes sobre King o la Corte"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1954, fecha: "17-V-1954", pais: "EE. UU.", titulo: "Brown v. Board of Education",
      descripcion: "La Corte de Warren falla 9–0: la segregación educativa viola la Enmienda XIV; deroga Plessy. Fuente típica: el texto del fallo o reacciones de prensa.",
      causas: ["45 años de litigio de la NAACP (Marshall, LDF).", "Guerra Fría: la segregación dañaba la política exterior (Dudziak)."],
      consecuencias: ["Brown II (1955) no fija plazo → resistencia masiva; en 1964 solo ~2% de niños negros del Sur en escuelas integradas."] },
    { anio: 1955, fecha: "1-XII-1955", pais: "EE. UU.", titulo: "Rosa Parks · boicot de Montgomery",
      descripcion: "Arresto de Parks (activista entrenada, no «costurera cansada»); el 5-XII empieza el boicot (381 días). Jo Ann Robinson imprime 35.000 volantes esa noche: fuente de base clásica.",
      causas: ["La organización ya existía (Carson): el Consejo Político de Mujeres lo planeaba."],
      consecuencias: ["Browder v. Gayle (13-XI-1956); nace King y el método; SCLC (1957)."] },
    { anio: 1957, fecha: "24-IX-1957", pais: "EE. UU.", titulo: "Little Rock",
      descripcion: "Faubus bloquea a los Nueve de Little Rock; la foto de Elizabeth Eckford sola frente a la turba da la vuelta al mundo; Eisenhower envía la 101.ª Aerotransportada. Fuente estrella: la foto.",
      causas: ["Un estado desafía un fallo federal; Dudziak: le estaba «costando» en la ONU."],
      consecuencias: ["Primer uso de tropas federales en el Sur desde 1877; Cooper v. Aaron (1958)."] },
    { anio: 1960, fecha: "1-II-1960", pais: "EE. UU.", titulo: "Sit-ins de Greensboro · SNCC",
      descripcion: "Cuatro estudiantes se sientan en el mostrador «solo blancos»; en 2 meses, 50+ ciudades. Nace el SNCC (IV-1960, Ella Baker).",
      causas: ["Boynton v. Virginia (XII-1960) da base legal a la acción directa."],
      consecuencias: ["Los estudiantes toman el relevo; nace la organización de Freedom Rides, Freedom Summer y Selma."] },
    { anio: 1961, fecha: "4-V-1961", pais: "EE. UU.", titulo: "Freedom Rides",
      descripcion: "CORE: 13 viajeros (7 negros, 6 blancos). En Anniston (14-V) el Klan incendia el autobús. Fuente típica: la foto del autobús en llamas.",
      causas: ["Provocar la violencia del Sur para forzar a Kennedy a hacer cumplir su ley."],
      consecuencias: ["La ICC desegrega las terminales interestatales (1-XI-1961)."] },
    { anio: 1963, fecha: "IV–V-1963", pais: "EE. UU.", titulo: "Birmingham",
      descripcion: "King elige a Bull Connor; Carta desde la cárcel (16-IV); Cruzada de los Niños; perros y mangueras en las portadas del mundo. 11-VI: JFK anuncia la ley.",
      causas: ["Lección de Albany (1961–62): elegir adversario y objetivo concreto."],
      consecuencias: ["Proyecto de la CRA; 15-IX bomba del Klan: cuatro niñas muertas."] },
    { anio: 1963, fecha: "28-VIII-1963", pais: "EE. UU.", titulo: "Marcha sobre Washington",
      descripcion: "~250.000 personas; «I Have a Dream» de King, transmitido en directo. Fuente estrella: el discurso.",
      causas: ["Idea de A. Philip Randolph (la amenaza de 1941 que sacó la Orden 8802)."],
      consecuencias: ["Consolidó la coalición y a King como voz nacional; no «logró» la ley por sí sola."] },
    { anio: 1964, fecha: "2-VII-1964", pais: "EE. UU.", titulo: "Civil Rights Act",
      descripcion: "Cloture 71–29 (primera vez en derechos civiles); Título II (alojamientos), VI (fondos federales), VII (empleo/EEOC). Fuente típica: el texto de la ley.",
      causas: ["Birmingham + asesinato de Kennedy + trabajo de Johnson con Dirksen."],
      consecuencias: ["Fin legal de Jim Crow; integración escolar del Sur 2% (1964) → 32% (1968)."] },
    { anio: 1964, fecha: "VI–VIII-1964", pais: "EE. UU.", titulo: "Freedom Summer · MFDP",
      descripcion: "Bob Moses trae ~1.000 voluntarios a Mississippi; Neshoba (Chaney-Goodman-Schwerner); Fannie Lou Hamer testifica en TV en Atlantic City. Fuente de base: el testimonio de Hamer.",
      causas: ["En Mississippi solo el 6,7% de los adultos negros estaban registrados (1964)."],
      consecuencias: ["El SNCC se desilusiona del liberalismo: empieza el camino al Black Power (Carson)."] },
    { anio: 1965, fecha: "7-III-1965", pais: "EE. UU.", titulo: "Selma · Bloody Sunday",
      descripcion: "~600 marchan por el puente Edmund Pettus; la policía estatal usa gases y garrotes; la ABC lo muestra a 48 millones. 15-III: Johnson: «We shall overcome».",
      causas: ["Repetir Birmingham con el voto como objetivo (sheriff Jim Clark)."],
      consecuencias: ["Lleva a la Voting Rights Act (6-VIII-1965)."] },
    { anio: 1965, fecha: "6-VIII-1965", pais: "EE. UU.", titulo: "Voting Rights Act · Watts",
      descripcion: "Johnson firma la VRA (examinadores federales, preclearance). Cinco días después (11-VIII) arde Watts: 34 muertos. El quiebre del tema.",
      causas: ["Selma y la presión del MFDP + Neshoba."],
      consecuencias: ["Registro negro en Mississippi 6,7% → 59,8% (1968); pero el gueto del Norte sigue."] },
    { anio: 1965, fecha: "21-II-1965", pais: "EE. UU.", titulo: "Asesinato de Malcolm X",
      descripcion: "Acribillado en el Audubon Ballroom (Harlem) por miembros de la NOI. Ya había dejado el antiblanquismo tras La Meca (1964) y buscaba el voto y la coalición. Su Autobiografía (X-1965) forma al Black Power.",
      causas: ["Ruptura con Elijah Muhammad y la NOI (8-III-1964)."],
      consecuencias: ["Deja a disposición del Black Power su vocabulario (autodefensa, orgullo, derechos humanos)."] },
    { anio: 1966, fecha: "16-VI-1966", pais: "EE. UU.", titulo: "«Black Power» · Panteras",
      descripcion: "Carmichael grita «Black Power» en la Marcha de Meredith; King no puede frenarlo. En octubre, Newton y Seale fundan las Panteras (Programa de 10 Puntos). Fuente típica: el programa o un discurso radical.",
      causas: ["Las leyes no llegan al Norte de facto; desilusión con el liberalismo; Malcolm y su Autobiografía."],
      consecuencias: ["Se rompe la coalición interracial (el SNCC expulsa a los blancos, XII-1966)."] },
    { anio: 1968, fecha: "4-IV-1968", pais: "EE. UU.", titulo: "Asesinato de King · Fair Housing",
      descripcion: "King es asesinado en Memphis; disturbios en 100+ ciudades; la Fair Housing Act (11-IV) se aprueba con las ciudades en llamas, pero sin mecanismo de aplicación.",
      causas: ["El King tardío (Chicago, Vietnam) había perdido a Johnson y a la prensa liberal."],
      consecuencias: ["Fin de la fase legislativa; Wallace 13,5% y Nixon con «ley y orden»."] }
  ],

  /* ===================== CONTENIDO (secciones navegables, enfoque fuentes) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega Paper 1 + vocabulario",
        html: `
          <p>Paper 1 no es un ensayo de 1.000 palabras: es un examen de <b>destrezas de fuentes</b> sobre un conjunto de 4 fuentes (texto, foto, caricatura, cita de historiador). El contenido fáctico es el mismo que 17.2, pero acá lo que da banda es manejar las fuentes, no narrar la historia.</p>

          <h3>Las cuatro preguntas típicas de Paper 1</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Pregunta</th><th>Qué pide</th><th>Qué NO hacer</th></tr></thead>
            <tbody>
              <tr><td>1a (≈3 pts) · comprensión</td><td>Qué dice/qué significa una fuente: 2–3 puntos del mensaje.</td><td>No copiar literal; parafraseá e inferí.</td></tr>
              <tr><td>1b (≈2 pts) · foto/caricatura</td><td>El mensaje de una fuente visual.</td><td>No describir solo lo que se ve; decí qué transmite.</td></tr>
              <tr><td>2 (≈4 pts) · valor y limitación (OPVL)</td><td>Evaluar una fuente por origen, propósito y contenido.</td><td>No decir «es fiable/no es fiable» ni «es antigua».</td></tr>
              <tr><td>3 (≈6 pts) · comparar y contrastar</td><td>Similitudes Y diferencias entre dos fuentes, punto por punto.</td><td>No describir una y después la otra en bloques.</td></tr>
              <tr><td>4 (≈9 pts) · mini-ensayo</td><td>Usar las 4 fuentes + tu conocimiento propio para responder una pregunta.</td><td>No ignorar fuentes ni olvidar el conocimiento externo.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>OPVL para «valor y limitación»:</b> <b>O</b>rigen (quién, qué tipo de fuente, cuándo, dónde), <b>P</b>ropósito (para qué se produjo, para quién), <b>V</b>alor (qué permite saber <i>por</i> ese origen y propósito), <b>L</b>imitación (qué deja afuera o sesga <i>por</i> ese mismo origen y propósito). Cada valor y cada límite se anclan en el origen o el propósito, nunca en «es vieja» o «es parcial» a secas.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Comparar y contrastar (pregunta 3):</b> frases con las dos fuentes juntas. «Ambas fuentes coinciden en… (A dice X, B dice Y)»; «Sin embargo, difieren en que mientras A…, B…». Un bloque de similitudes y un bloque de diferencias; nunca «primero A, después B».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El valor de esta fuente reside en que, al ser [origen] producida con el propósito de [propósito], revela [qué revela]; su limitación es que, por ese mismo origen y propósito, omite o distorsiona [qué omite].»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>De jure / de facto</b> = segregación por ley (Sur) / por costumbre y barrio (Norte). <b>Jim Crow</b> = leyes segregacionistas del Sur. <b>«Separados pero iguales»</b> = Plessy (1896), derogado por Brown (1954). <b>Integracionismo</b> (King) vs <b>nacionalismo negro</b> (Malcolm, NOI, Panteras). <b>Preclearance</b> = permiso federal previo de la VRA. <b>Backlash</b> = reacción blanca (Wallace, Nixon). <b>OPVL</b> = Origen, Propósito, Valor, Limitación.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El error que más cuesta banda en la pregunta 2: evaluar «fiabilidad» en abstracto. Una fuente de propaganda tiene mucho valor <i>para</i> estudiar la propaganda; un discurso parcial tiene valor <i>para</i> conocer la postura de quien lo dio. El límite no es «ser parcial»: es qué deja afuera esa parcialidad concreta.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué significa OPVL en Paper 1?", etiqueta: "concepto",
            opciones: [
              { texto: "Origen, Propósito, Valor y Limitación de una fuente.", correcta: true, explicacion: "Correcto: el esquema para evaluar fuentes (pregunta 2)." },
              { texto: "Opinión, Perspectiva, Validez y Lógica del argumento del examinador.", correcta: false, explicacion: "No es eso; OPVL se refiere a los atributos de la fuente." },
              { texto: "Objetivo, Problema, Variable y Límite de una investigación histórica.", correcta: false, explicacion: "No corresponde al método de fuentes de Paper 1." },
              { texto: "Orden, Propaganda, Veracidad y Localización de un documento.", correcta: false, explicacion: "No es el significado del acrónimo OPVL." }
            ] },
          { pregunta: "En la pregunta 2, ¿cuál es el error que más cuesta banda?", etiqueta: "trampa",
            opciones: [
              { texto: "Decir «es fiable» o «es antigua» sin anclar en origen y propósito.", correcta: true, explicacion: "Correcto: el valor y el límite se derivan del origen y propósito concretos." },
              { texto: "Explicar qué revela la fuente gracias a su propósito concreto de propaganda.", correcta: false, explicacion: "Eso es lo correcto: valor anclado en el propósito." },
              { texto: "Mencionar quién produjo la fuente, cuándo y con qué intención.", correcta: false, explicacion: "Identificar el origen es parte de un buen OPVL." },
              { texto: "Comparar el contenido de la fuente con tu conocimiento del contexto.", correcta: false, explicacion: "Usar el contexto es válido y recomendable." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Mapa de hitos + tipos de fuente",
        html: `
          <p>Para Paper 1 conviene saber ubicar cualquier fuente en los hitos y reconocer su tipo. Tres tríos ordenan la cronología: Tribunal → Calle → Congreso.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Trío</th><th>Hitos</th><th>Fuentes que suelen aparecer</th></tr></thead>
            <tbody>
              <tr><td>Tribunal</td><td>Brown (1954) · Montgomery (1955–56) · Little Rock (1957)</td><td>Fallo Brown; volantes del boicot; foto de Eckford.</td></tr>
              <tr><td>Calle</td><td>Sit-ins (1960) · Freedom Rides (1961) · Birmingham (1963)</td><td>Fotos de sit-ins; autobús de Anniston; perros de Birmingham; Carta desde la cárcel.</td></tr>
              <tr><td>Congreso</td><td>Washington (1963) · CRA + Freedom Summer (1964) · Selma + VRA (1965)</td><td>«I Have a Dream»; testimonio de Hamer; puente de Selma; texto de la CRA y la VRA.</td></tr>
              <tr><td>Radicalización</td><td>Malcolm (1952–65) · «Black Power» (1966) · Panteras (1966) · Hampton (1969)</td><td>«El voto o la bala»; Programa de 10 Puntos; discursos de Carmichael; fotos de Sacramento.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Los cuatro años maestros:</b> 1954 (Brown) · 1963 (Birmingham + Washington) · 1965 (Selma + VRA + Watts) · 1968 (muerte de King + Fair Housing + Nixon). Si una fuente está fechada, ubicala respecto de estos cuatro años para contextualizarla al instante.</div>

          <h3>Cómo leer cada tipo de fuente</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Tipo</th><th>Qué mirar primero</th><th>Valor típico / Límite típico</th></tr></thead>
            <tbody>
              <tr><td>Foto</td><td>Quién la tomó, cuándo, qué muestra, dónde se publicó.</td><td>Valor: impacto en la opinión y la política exterior (Dudziak). Límite: un instante congelado, puede estar encuadrado.</td></tr>
              <tr><td>Discurso</td><td>Quién, a quién, para qué (persuadir, movilizar).</td><td>Valor: la postura y la estrategia de quien habla. Límite: busca persuadir, no describir neutralmente.</td></tr>
              <tr><td>Documento oficial / ley</td><td>Qué órgano lo emite y qué efecto legal tiene.</td><td>Valor: lo que el Estado decidió. Límite: dice lo que la ley manda, no lo que pasó en la práctica.</td></tr>
              <tr><td>Fuente de base</td><td>Quién la produce desde la organización local.</td><td>Valor: la perspectiva «desde abajo» (Carson). Límite: visión local, no de conjunto.</td></tr>
              <tr><td>Cita de historiador</td><td>Qué escuela/postura representa (Carson, Dudziak, Joseph, Anderson).</td><td>Valor: interpretación informada. Límite: una perspectiva entre varias.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Para contextualizar fuentes: una foto o fuente oficial → Dudziak (la Guerra Fría explica por qué importó). Una fuente de base (volante, testimonio) → Carson (la organización «desde abajo»). Una fuente radical (Malcolm, Panteras) → Joseph (movimiento paralelo, no decadencia). El contraste de perspectivas en el mini-ensayo → Anderson vs Joseph.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuáles son los «tres tríos» que ordenan la cronología?", etiqueta: "concepto",
            opciones: [
              { texto: "Tribunal, Calle y Congreso.", correcta: true, explicacion: "Correcto: Brown/Montgomery/Little Rock → sit-ins/viajes/Birmingham → Washington/CRA/Selma." },
              { texto: "Norte, Sur y Oeste, según la geografía de cada campaña del movimiento.", correcta: false, explicacion: "No es un criterio geográfico; es el método de escalada." },
              { texto: "Prensa, Radio y Televisión, según el medio que cubrió cada hito.", correcta: false, explicacion: "No corresponde a los tres tríos del tema." },
              { texto: "NAACP, SCLC y Panteras, según la organización protagonista de cada etapa.", correcta: false, explicacion: "Son organizaciones, no los tres tríos de hitos." }
            ] },
          { pregunta: "Para contextualizar una foto (Little Rock, Birmingham), ¿qué historiador conviene citar?", etiqueta: "historiador",
            opciones: [
              { texto: "Dudziak: la Guerra Fría explica por qué la imagen movió al gobierno.", correcta: true, explicacion: "Correcto: cada intervención federal siguió a una crisis de imagen internacional." },
              { texto: "Carson, porque las fotos eran siempre producidas por organizadores de base locales.", correcta: false, explicacion: "Carson sirve para fuentes de base, no para explicar el impacto de las fotos." },
              { texto: "Joseph, porque las fotos pertenecen al movimiento del Black Power posterior a 1966.", correcta: false, explicacion: "Little Rock (1957) y Birmingham (1963) son anteriores al Black Power." },
              { texto: "Anderson, porque las fotos prueban que el movimiento fue un fracaso político.", correcta: false, explicacion: "Anderson no sostiene eso; además no es el historiador de las fotos." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Valor y limitación (pregunta 2) con ejemplos",
        html: `
          <p>Esta sección entrena la pregunta estrella de Paper 1. Para cada fuente típica del tema, OPVL aplicado.</p>

          <h3>Ejemplo 1 · La foto de Elizabeth Eckford en Little Rock (1957)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Origen</span>Foto de prensa (Will Counts), 4-IX-1957, publicada en el mundo entero.</div>
              <div><span class="et">Propósito</span>Informar/impactar: mostrar a una adolescente negra sola ante una turba blanca.</div>
              <div><span class="et">Valor</span>Revela el poder de la imagen: como muestra Dudziak, dañó la imagen de EE.UU. y empujó a Eisenhower a enviar tropas.</div>
            </div>
          </div>
          <p><b>Limitación:</b> congela un instante y no muestra el proceso (ni la crisis constitucional de fondo, ni la negociación federal); el encuadre resalta el drama individual.</p>

          <h3>Ejemplo 2 · El discurso «El voto o la bala» de Malcolm X (1964)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Origen</span>Discurso público de Malcolm X (Cleveland, 3-IV-1964), ya fuera de la NOI.</div>
              <div><span class="et">Propósito</span>Persuadir: llamar a la autodeterminación y a la unidad negra más allá de la religión.</div>
              <div><span class="et">Valor</span>Revela la postura radical/nacionalista y el giro de Malcolm hacia la política y la coalición (Joseph).</div>
            </div>
          </div>
          <p><b>Limitación:</b> busca movilizar, no describir; como representa a una corriente minoritaria (la OAAU tenía cientos de miembros), no da la visión del movimiento integracionista mayoritario.</p>

          <h3>Ejemplo 3 · El texto de la Voting Rights Act (1965)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Origen</span>Documento legal federal firmado por Johnson el 6-VIII-1965.</div>
              <div><span class="et">Propósito</span>Crear un mecanismo (examinadores, preclearance) para garantizar el voto negro.</div>
              <div><span class="et">Valor</span>Revela lo que el Estado decidió y cómo (no un derecho declarativo sino un mecanismo).</div>
            </div>
          </div>
          <p><b>Limitación:</b> dice lo que la ley manda, no lo que pasó en la práctica (el gerrymandering siguió diluyendo el voto; voto ≠ poder).</p>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La foto de Little Rock tiene gran valor como evidencia del impacto propagandístico de la segregación —por su origen de prensa y su circulación mundial reveló, como señala Dudziak, por qué el gobierno intervino—, pero su limitación es que, al congelar un instante, no muestra la crisis constitucional ni la negociación federal que la rodeaban.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No digas que un discurso «no es fiable porque es parcial». Todo discurso es parcial: eso es justamente su valor para conocer la postura de quien lo da. El límite concreto es qué deja afuera (p. ej., Malcolm no representa al movimiento integracionista mayoritario).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es la limitación correcta de la foto de Elizabeth Eckford?", etiqueta: "concepto",
            opciones: [
              { texto: "Congela un instante y no muestra la crisis ni la negociación de fondo.", correcta: true, explicacion: "Correcto: el límite se ancla en el tipo de fuente (foto) y su encuadre." },
              { texto: "Es poco fiable porque fue tomada por un fotógrafo con intenciones desconocidas.", correcta: false, explicacion: "«Poco fiable» en abstracto no sirve; hay que anclar en qué omite." },
              { texto: "No tiene ningún valor histórico porque es una imagen y no un documento escrito.", correcta: false, explicacion: "Las fotos tienen gran valor; aquí fue decisiva (Dudziak)." },
              { texto: "Es demasiado antigua para explicar lo que ocurrió en Little Rock en 1957.", correcta: false, explicacion: "La fuente es de 1957: contemporánea, no «demasiado antigua»." }
            ] },
          { pregunta: "El valor del texto de la VRA reside sobre todo en que…", etiqueta: "concepto",
            opciones: [
              { texto: "Revela lo que el Estado decidió y cómo: un mecanismo, no solo un derecho.", correcta: true, explicacion: "Correcto: el valor se ancla en el origen (documento legal federal)." },
              { texto: "Demuestra que el voto negro dio de inmediato poder político real en todo el Sur.", correcta: false, explicacion: "Eso es un hecho discutible (voto ≠ poder); el texto solo dice lo que la ley manda." },
              { texto: "Prueba que Kennedy fue el autor intelectual de toda la legislación de derechos civiles.", correcta: false, explicacion: "La VRA la firmó Johnson en 1965; JFK había muerto en 1963." },
              { texto: "Es una fuente de base que recoge la voz de los organizadores de Mississippi.", correcta: false, explicacion: "Es un documento oficial, no una fuente de base." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Comparar y contrastar (pregunta 3)",
        html: `
          <p>La pregunta 3 pide similitudes Y diferencias entre dos fuentes, punto por punto. El tema ofrece contrastes naturales.</p>

          <h3>Los contrastes más jugosos</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Fuente A</th><th>Fuente B</th></tr></thead>
            <tbody>
              <tr><td>Integración vs. nacionalismo</td><td>King: «I Have a Dream» (no violencia, integración, coalición).</td><td>Malcolm: «El voto o la bala» (autodefensa, autodeterminación).</td></tr>
              <tr><td>De jure vs. de facto</td><td>Fallo Brown / texto CRA (segregación por ley en el Sur).</td><td>Programa de 10 Puntos de las Panteras (gueto, pobreza, policía del Norte).</td></tr>
              <tr><td>Oficial vs. de base</td><td>Discurso presidencial o fallo de la Corte.</td><td>Volante de Robinson o testimonio de Hamer.</td></tr>
              <tr><td>Antes vs. después de 1965</td><td>Discurso de Washington (1963, optimismo, leyes).</td><td>Discurso de Carmichael (1966, frustración, Black Power).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Estructura de la respuesta 3: un párrafo de <b>similitudes</b> («ambas fuentes reclaman la plena igualdad de los negros: A lo hace por X, B por Y») y un párrafo de <b>diferencias</b> («sin embargo, difieren en el método: mientras A propone la no violencia y la coalición, B propone la autodefensa y la autodeterminación»). Siempre las dos fuentes en la misma frase.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Ambas fuentes coinciden en exigir el fin de la opresión racial y en apelar a la dignidad negra; sin embargo, difieren en el método y la geografía: la fuente A (King) busca la integración en el sistema mediante la no violencia y la coalición con blancos, mientras que la fuente B (Malcolm) rechaza esa coalición y defiende la autodeterminación y la autodefensa, porque responde al gueto del Norte y no a la segregación legal del Sur.»</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> King y Malcolm son «dos respuestas a dos preguntas distintas»: la del Sur (¿cómo derribar una segregación escrita en la ley?) y la del Norte (¿cómo vivir con dignidad en un gueto donde ninguna ley te discrimina y todas te excluyen?). Ese marco ordena cualquier comparación entre una fuente integracionista y una radical.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No describas una fuente en un párrafo y la otra en otro: eso es «describir», no «comparar». Tampoco des solo similitudes o solo diferencias: la pregunta pide ambas.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se estructura bien una respuesta de «comparar y contrastar»?", etiqueta: "concepto",
            opciones: [
              { texto: "Un bloque de similitudes y uno de diferencias, con las dos fuentes en cada frase.", correcta: true, explicacion: "Correcto: nunca «primero una, después la otra» en bloques separados." },
              { texto: "Describiendo primero toda la fuente A y a continuación toda la fuente B por separado.", correcta: false, explicacion: "Eso es describir, no comparar: no obtiene la banda alta." },
              { texto: "Enumerando solo las diferencias, porque las similitudes no cuentan en Paper 1.", correcta: false, explicacion: "La pregunta pide similitudes Y diferencias." },
              { texto: "Evaluando cuál de las dos fuentes es la más fiable y descartando la otra.", correcta: false, explicacion: "Eso es la pregunta 2 (OPVL), no la 3 (comparar)." }
            ] },
          { pregunta: "El contraste King (A) vs. Malcolm (B) se resume mejor como…", etiqueta: "concepto",
            opciones: [
              { texto: "Coinciden en exigir igualdad; difieren en el método y la geografía.", correcta: true, explicacion: "Correcto: no violencia/integración (King) vs. autodefensa/autodeterminación (Malcolm); Sur de jure vs. Norte de facto." },
              { texto: "Son idénticas en todo: ambas defienden la separación total de las razas en EE.UU.", correcta: false, explicacion: "King buscaba integración, no separación; no son idénticas." },
              { texto: "Difieren en todo y no comparten absolutamente ningún objetivo ni valor común.", correcta: false, explicacion: "Comparten el objetivo de la dignidad e igualdad negras." },
              { texto: "A defiende la violencia armada y B la no violencia cristiana estricta.", correcta: false, explicacion: "Es al revés: King (A) = no violencia; Malcolm (B) = autodefensa." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · El mini-ensayo (pregunta 4) con fuentes + conocimiento",
        html: `
          <p>La pregunta 4 (la de más puntos) pide responder una pregunta usando <b>las cuatro fuentes</b> + tu <b>conocimiento propio</b>. Es un mini-ensayo, no un ensayo largo de Paper 3.</p>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Estructura en ~4 párrafos cortos: (1) mini-intro con una postura; (2–3) argumentos que <b>tejen</b> fuentes («la Fuente A muestra… lo que mi conocimiento confirma con [dato]») y las contrastan; (4) una conclusión breve con juicio. Citá cada fuente por su letra y sumá al menos un dato externo por párrafo.</div>

          <h3>Checklist del párrafo de la pregunta 4</h3>
          <ol class="escalera">
            <li><b>Afirmación</b> que responde la pregunta.</li>
            <li><b>Fuente(s)</b> citada(s) por letra, con lo que aportan.</li>
            <li><b>Conocimiento propio</b>: un dato con fecha o cifra del tema (p. ej. Mississippi 6,7%→59,8%).</li>
            <li><b>Evaluación</b>: si las fuentes se apoyan o se contradicen, y qué perspectiva pesa más.</li>
          </ol>

          <h3>Ejemplo: «¿Fue el gobierno federal el motor del cambio?»</h3>
          <ul>
            <li><b>A favor con fuentes:</b> una foto de Little Rock o una ley (CRA/VRA) muestra la acción federal; mi conocimiento lo apoya (tropas en 1957, cloture 1964, VRA 1965).</li>
            <li><b>En contra con fuentes:</b> un volante de base o un testimonio (Hamer) muestra que el impulso vino de abajo; Carson: «el movimiento hizo a King».</li>
            <li><b>Evaluación:</b> el gobierno fue reactivo (Dudziak: respondió a las imágenes); cada ley es posterior a una crisis en la calle.</li>
            <li><b>Conclusión:</b> el gobierno federal fue el brazo del movimiento, no su cabeza.</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Las fuentes muestran al gobierno federal interviniendo (la Fuente [X] documenta la acción presidencial), pero mi conocimiento del contexto indica que cada intervención siguió a una crisis en la calle —las tropas de Little Rock a la foto de Eckford, la VRA al puente de Selma—; como sostiene Mary Dudziak, el gobierno respondió cuando el costo internacional de la segregación superó el costo político interno.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Para el juicio final, enfrentá dos perspectivas: Anderson (balance positivo: las leyes sobrevivieron) vs. Joseph (el Black Power sumó identidad y poder local aunque costó la coalición), o Carson (desde abajo) vs. Dudziak (la Guerra Fría). Elegir una y justificarla es lo que sube la banda.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Dos errores que hunden la pregunta 4: (1) narrar la historia sin citar las fuentes; (2) parafrasear las fuentes sin sumar conocimiento propio. La banda alta exige las dos cosas tejidas.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué exige la banda alta en la pregunta 4 (mini-ensayo)?", etiqueta: "concepto",
            opciones: [
              { texto: "Tejer las fuentes con conocimiento propio y evaluar las perspectivas.", correcta: true, explicacion: "Correcto: citar fuentes por letra + datos externos + juicio." },
              { texto: "Narrar toda la historia del movimiento sin necesidad de citar las fuentes dadas.", correcta: false, explicacion: "Ignorar las fuentes hunde la banda." },
              { texto: "Parafrasear las cuatro fuentes una por una sin añadir ningún dato externo.", correcta: false, explicacion: "Falta el conocimiento propio: no basta con las fuentes." },
              { texto: "Elegir la fuente más fiable y responder solo con ella, descartando las demás.", correcta: false, explicacion: "Hay que usar las cuatro fuentes, no una sola." }
            ] },
          { pregunta: "Para «¿fue el gobierno federal el motor del cambio?», el juicio equilibrado es…", etiqueta: "historiador",
            opciones: [
              { texto: "Fue reactivo (Dudziak): el brazo del movimiento, no su cabeza.", correcta: true, explicacion: "Correcto: intervino tras las imágenes de la calle; cada ley siguió a una crisis." },
              { texto: "Fue el motor proactivo que planificó y lideró el movimiento desde 1945 por convicción.", correcta: false, explicacion: "Dudziak y Carson muestran que siguió a la calle, no la lideró." },
              { texto: "No tuvo ningún papel: todo lo lograron los tribunales estatales del Sur por su cuenta.", correcta: false, explicacion: "El gobierno federal fue decisivo (tropas, leyes), aunque reactivo." },
              { texto: "Se opuso siempre al movimiento, ya que todos los presidentes defendían a Jim Crow.", correcta: false, explicacion: "Truman, Kennedy y Johnson lo impulsaron, de forma reactiva." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "OPVL", dorso: "Origen, Propósito, Valor y Limitación: el esquema para evaluar una fuente (pregunta 2 de Paper 1)." },
    { id: "fc02", categoria: "concepto", frente: "¿De dónde sale el valor de una fuente?", dorso: "De su origen y propósito concretos: qué permite saber por haber sido producida por quien fue, cuándo y para qué." },
    { id: "fc03", categoria: "concepto", frente: "¿De dónde sale la limitación?", dorso: "Del mismo origen y propósito: qué deja afuera o sesga. Nunca «es antigua» o «es parcial» a secas." },
    { id: "fc04", categoria: "concepto", frente: "Comparar y contrastar (pregunta 3)", dorso: "Similitudes Y diferencias entre dos fuentes, punto por punto, con las dos en cada frase. Nunca en bloques separados." },
    { id: "fc05", categoria: "concepto", frente: "Mini-ensayo (pregunta 4)", dorso: "Responder usando las 4 fuentes + conocimiento propio; citar cada fuente por letra y sumar datos externos; evaluar perspectivas." },
    { id: "fc06", categoria: "concepto", frente: "De jure vs. de facto", dorso: "Segregación por ley (Sur, Jim Crow) vs. por costumbre, barrio y dinero (Norte, gueto). Marco para contrastar fuentes." },
    { id: "fc07", categoria: "concepto", frente: "Integración vs. nacionalismo negro", dorso: "King (integración, no violencia, coalición) vs. Malcolm/NOI/Panteras (autodeterminación, autodefensa). Contraste clásico." },
    { id: "fc08", categoria: "fecha", frente: "17-V-1954", dorso: "Brown v. Board: la segregación educativa viola la XIV. Fuente típica: el fallo." },
    { id: "fc09", categoria: "fecha", frente: "1-XII-1955", dorso: "Rosa Parks; boicot de Montgomery (381 días). Fuente de base: los 35.000 volantes de Jo Ann Robinson." },
    { id: "fc10", categoria: "fecha", frente: "24-IX-1957", dorso: "Little Rock: foto de Elizabeth Eckford; Eisenhower envía la 101.ª Aerotransportada." },
    { id: "fc11", categoria: "fecha", frente: "1-II-1960", dorso: "Sit-ins de Greensboro; nace el SNCC (IV-1960, Ella Baker)." },
    { id: "fc12", categoria: "fecha", frente: "14-V-1961", dorso: "Freedom Rides: autobús incendiado en Anniston. Fuente típica: la foto del autobús en llamas." },
    { id: "fc13", categoria: "fecha", frente: "IV–V-1963", dorso: "Birmingham: Connor, perros y mangueras contra niños; Carta desde la cárcel." },
    { id: "fc14", categoria: "fecha", frente: "28-VIII-1963", dorso: "Marcha sobre Washington: «I Have a Dream». Fuente estrella: el discurso." },
    { id: "fc15", categoria: "fecha", frente: "2-VII-1964", dorso: "Civil Rights Act: Título II (alojamientos), VI (fondos federales), VII (empleo/EEOC)." },
    { id: "fc16", categoria: "fecha", frente: "Freedom Summer (1964)", dorso: "Neshoba (Chaney-Goodman-Schwerner); MFDP; testimonio de Fannie Lou Hamer en Atlantic City." },
    { id: "fc17", categoria: "fecha", frente: "7-III-1965", dorso: "Selma / Bloody Sunday: puente Edmund Pettus; la ABC lo muestra a 48 millones." },
    { id: "fc18", categoria: "fecha", frente: "6-VIII-1965", dorso: "Voting Rights Act (examinadores, preclearance); cinco días después arde Watts (11-VIII)." },
    { id: "fc19", categoria: "fecha", frente: "21-II-1965", dorso: "Asesinato de Malcolm X (Audubon Ballroom, Harlem) por miembros de la NOI." },
    { id: "fc20", categoria: "fecha", frente: "16-VI-1966", dorso: "Carmichael grita «Black Power». Panteras fundadas el 15-X-1966 (Programa de 10 Puntos)." },
    { id: "fc21", categoria: "fecha", frente: "4-IV-1968", dorso: "Asesinato de King en Memphis; Fair Housing Act el 11-IV, sin mecanismo de aplicación." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "Cifra estrella de la VRA", dorso: "Registro negro en Mississippi: 6,7% (1964) → 59,8% (1968). Dato de conocimiento propio para la pregunta 4." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "¿Por qué una foto movía a la Casa Blanca?", dorso: "Guerra Fría (Dudziak): la segregación dañaba la imagen de EE.UU.; el gobierno respondía al costo internacional." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "El quiebre de agosto de 1965", dorso: "VRA (6-VIII) y Watts (11-VIII): cinco días. Ubicá cualquier fuente según en qué lado del quiebre esté." },
    { id: "fc25", categoria: "historiador", frente: "Carson (para fuentes)", dorso: "Contexto de fuentes de base: «el movimiento hizo a King»; organización local (Robinson, Baker, Moses, Hamer)." },
    { id: "fc26", categoria: "historiador", frente: "Dudziak (para fuentes)", dorso: "Contexto de fotos y fuentes oficiales: la Guerra Fría explica por qué el gobierno respondía a las imágenes." },
    { id: "fc27", categoria: "historiador", frente: "Joseph (para fuentes)", dorso: "Contexto de fuentes radicales (Malcolm, Panteras): movimiento paralelo con raíces propias, no decadencia." },
    { id: "fc28", categoria: "historiador", frente: "Anderson (para el juicio)", dorso: "Balance positivo: la caja de herramientas y las leyes sobrevivieron; contrapeso de Joseph en el mini-ensayo." },
    { id: "fc29", categoria: "concepto", frente: "Tipos de fuente del tema", dorso: "Fotos (Eckford, Birmingham, Selma), discursos (King, Malcolm, LBJ), leyes (CRA, VRA), fuentes de base (volantes, Hamer), citas de historiadores." },
    { id: "fc30", categoria: "concepto", frente: "«Dos respuestas a dos preguntas»", dorso: "King responde al Sur de jure; Malcolm al Norte de facto. Marco para comparar una fuente integracionista y una radical." }
  ],

  /* ===================== QUIZ (global del tema, enfoque fuentes) ===================== */
  quiz: [
    { pregunta: "En Paper 1, la pregunta de «valor y limitación» se resuelve con…", etiqueta: "concepto",
      opciones: [
        { texto: "El esquema OPVL: anclar valor y límite en el origen y el propósito.", correcta: true, explicacion: "Correcto: no en «fiabilidad» abstracta sino en qué revela y qué omite la fuente." },
        { texto: "Un juicio sobre si la fuente es verdadera o falsa respecto de los hechos históricos.", correcta: false, explicacion: "No se evalúa «verdad/falsedad» sino valor y límite según origen y propósito." },
        { texto: "La comparación de la fuente con las otras tres fuentes del examen.", correcta: false, explicacion: "Eso es la pregunta 3 (comparar), no la 2 (OPVL)." },
        { texto: "Un resumen del contenido de la fuente sin ninguna evaluación.", correcta: false, explicacion: "Resumir no es evaluar; falta el valor y la limitación." }
      ] },
    { pregunta: "¿Cuál es la limitación típica de una foto como fuente?", etiqueta: "concepto",
      opciones: [
        { texto: "Congela un instante y puede estar encuadrada; no muestra el proceso de fondo.", correcta: true, explicacion: "Correcto: el límite se ancla en el tipo de fuente (foto)." },
        { texto: "Siempre es falsa porque las fotos de prensa se manipulaban en los años cincuenta.", correcta: false, explicacion: "No se asume falsedad; el límite es el instante congelado y el encuadre." },
        { texto: "No sirve para nada porque solo los documentos escritos tienen valor histórico.", correcta: false, explicacion: "Las fotos tienen gran valor (Eckford, Birmingham fueron decisivas)." },
        { texto: "Es demasiado subjetiva para usarla en un examen de historia del IB.", correcta: false, explicacion: "Toda fuente tiene perspectiva; eso no la invalida." }
      ] },
    { pregunta: "¿Cómo debe estructurarse una respuesta de «comparar y contrastar»?", etiqueta: "concepto",
      opciones: [
        { texto: "Similitudes y diferencias con las dos fuentes en cada frase.", correcta: true, explicacion: "Correcto: nunca describir una y luego la otra en bloques." },
        { texto: "Describiendo la fuente A en un párrafo entero y la B en el siguiente.", correcta: false, explicacion: "Eso es describir, no comparar." },
        { texto: "Dando solo las diferencias, porque las similitudes no otorgan puntos.", correcta: false, explicacion: "La pregunta pide similitudes Y diferencias." },
        { texto: "Eligiendo la fuente más valiosa y explicando por qué la otra sobra.", correcta: false, explicacion: "Eso sería OPVL (pregunta 2), no comparar." }
      ] },
    { pregunta: "¿Qué estableció Brown v. Board (1954)?", etiqueta: "fecha",
      opciones: [
        { texto: "Que la segregación educativa es inconstitucional (viola la XIV).", correcta: true, explicacion: "Correcto: fallo 9–0; deroga Plessy en lo educativo." },
        { texto: "Que todas las escuelas del país debían integrarse antes de que acabara 1955.", correcta: false, explicacion: "Brown II no fijó plazo: «toda la rapidez deliberada»." },
        { texto: "Que el gobierno federal financiaría las escuelas negras del Sur profundo.", correcta: false, explicacion: "No era sobre financiación: declaró ilegal la segregación." },
        { texto: "Que el impuesto electoral quedaba prohibido en las elecciones federales.", correcta: false, explicacion: "Eso es la Enmienda XXIV (1964)." }
      ] },
    { pregunta: "La foto de Elizabeth Eckford (Little Rock) tuvo tanto peso porque…", etiqueta: "historiador",
      opciones: [
        { texto: "Dañó la imagen de EE.UU. en la Guerra Fría y forzó la intervención federal (Dudziak).", correcta: true, explicacion: "Correcto: el valor de la foto está en su impacto internacional." },
        { texto: "Era la primera fotografía a color jamás publicada en la prensa de los Estados Unidos.", correcta: false, explicacion: "No es el motivo; el peso vino del impacto político-internacional." },
        { texto: "Mostraba a Martin Luther King entrando en la escuela de Little Rock.", correcta: false, explicacion: "Mostraba a Eckford, una estudiante; King no estaba en esa escena." },
        { texto: "Fue tomada por el propio gobierno federal como propaganda oficial.", correcta: false, explicacion: "Fue una foto de prensa (Will Counts), no propaganda oficial." }
      ] },
    { pregunta: "¿Qué contraste representan King y Malcolm X como fuentes?", etiqueta: "concepto",
      opciones: [
        { texto: "Integración y no violencia vs. autodeterminación y autodefensa.", correcta: true, explicacion: "Correcto: dos respuestas a dos preguntas distintas (Sur/Norte)." },
        { texto: "Separatismo religioso vs. ateísmo revolucionario de corte marxista puro.", correcta: false, explicacion: "No es ese el eje; King era cristiano integracionista y Malcolm, musulmán nacionalista." },
        { texto: "Defensa del gobierno federal vs. defensa de los gobiernos estatales del Sur.", correcta: false, explicacion: "Ninguno defendía los gobiernos segregacionistas del Sur." },
        { texto: "Apoyo al Partido Republicano vs. apoyo al Partido Demócrata del Sur.", correcta: false, explicacion: "No es un eje partidario; es método y geografía." }
      ] },
    { pregunta: "En la pregunta 4 (mini-ensayo), ¿qué hay que combinar?", etiqueta: "concepto",
      opciones: [
        { texto: "Las cuatro fuentes y el conocimiento propio, evaluando perspectivas.", correcta: true, explicacion: "Correcto: tejer fuentes + datos externos + juicio." },
        { texto: "Solo las fuentes, parafraseadas una por una sin añadir contexto externo.", correcta: false, explicacion: "Falta el conocimiento propio: no basta con las fuentes." },
        { texto: "Solo el conocimiento propio, narrando la historia sin citar las fuentes.", correcta: false, explicacion: "Ignorar las fuentes hunde la banda." },
        { texto: "Una sola fuente, la más fiable, descartando las otras tres por sesgadas.", correcta: false, explicacion: "Hay que usar las cuatro fuentes." }
      ] },
    { pregunta: "¿Por qué el boicot de Montgomery terminó en victoria?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Por el fallo de la Corte en Browder v. Gayle (13-XI-1956).", correcta: true, explicacion: "Correcto: lo ganó el tribunal, no solo la presión económica." },
        { texto: "Porque la empresa de autobuses quebró por la pérdida de pasajeros negros.", correcta: false, explicacion: "La empresa habría aguantado; la ley fue lo decisivo." },
        { texto: "Porque el gobernador de Alabama ordenó desegregar los autobuses.", correcta: false, explicacion: "No fue el gobernador: fue la Corte federal." },
        { texto: "Porque Kennedy envió alguaciles federales a proteger el boicot.", correcta: false, explicacion: "Kennedy ni siquiera era presidente en 1956." }
      ] },
    { pregunta: "¿Qué pasó la misma semana de agosto de 1965?", etiqueta: "fecha",
      opciones: [
        { texto: "Se firmó la VRA (6-VIII) y cinco días después ardió Watts (11-VIII).", correcta: true, explicacion: "Correcto: el quiebre que ordena el tema." },
        { texto: "Se aprobó la Civil Rights Act y se celebró la Marcha sobre Washington.", correcta: false, explicacion: "La CRA fue en 1964 y la Marcha en 1963." },
        { texto: "King fue asesinado y se aprobó la Fair Housing Act en la misma semana.", correcta: false, explicacion: "Eso fue en abril de 1968." },
        { texto: "Carmichael gritó «Black Power» y se fundaron las Panteras Negras.", correcta: false, explicacion: "Eso fue en 1966." }
      ] },
    { pregunta: "Para contextualizar una fuente de base (volante, testimonio), conviene citar a…", etiqueta: "historiador",
      opciones: [
        { texto: "Carson: «el movimiento hizo a King»; la organización precedió al carisma.", correcta: true, explicacion: "Correcto: Carson es el historiador «desde abajo»." },
        { texto: "Dudziak, porque toda fuente de base solo se explica por la Guerra Fría.", correcta: false, explicacion: "Dudziak sirve para fotos y fuentes oficiales, no para las de base." },
        { texto: "Paul Johnson, porque defiende que las fuentes de base carecen de valor.", correcta: false, explicacion: "No sostiene eso; además es un cameo conservador institucional." },
        { texto: "Anderson, porque considera que las fuentes de base son propaganda radical.", correcta: false, explicacion: "No es su postura; Anderson valora la organización de base." }
      ] },
    { pregunta: "¿Qué hizo tan eficaz a la Voting Rights Act (1965)?", etiqueta: "concepto",
      opciones: [
        { texto: "Creó un mecanismo (examinadores, preclearance), no solo declaró un derecho.", correcta: true, explicacion: "Correcto: por eso el registro en Mississippi saltó de 6,7% a 59,8%." },
        { texto: "Prohibió de una vez la segregación en escuelas, hoteles, empleo y vivienda.", correcta: false, explicacion: "Eso mezcla la CRA y la Fair Housing; la VRA fue sobre el voto." },
        { texto: "La firmó Kennedy con gran autoridad moral después de Birmingham.", correcta: false, explicacion: "La firmó Johnson en 1965; JFK había muerto en 1963." },
        { texto: "Eliminó para siempre el gerrymandering y dio poder, no solo voto.", correcta: false, explicacion: "El gerrymandering siguió: voto ≠ poder." }
      ] },
    { pregunta: "Según Joseph, ¿cómo hay que leer una fuente radical (Malcolm, Panteras)?", etiqueta: "historiador",
      opciones: [
        { texto: "Como un movimiento paralelo con raíces propias, no como decadencia.", correcta: true, explicacion: "Correcto: ganó identidad y poder local; el backlash es del racismo blanco." },
        { texto: "Como la prueba de que el radicalismo fue solo violencia, sin ninguna propuesta.", correcta: false, explicacion: "Joseph rechaza eso: gran parte fue cultural y electoral." },
        { texto: "Como una copia exacta del programa integracionista de Martin Luther King.", correcta: false, explicacion: "Es distinto: autodeterminación y autodefensa, no integración." },
        { texto: "Como fuentes sin ningún valor histórico por ser de grupos minoritarios.", correcta: false, explicacion: "Tienen valor para conocer la corriente radical y su vocabulario." }
      ] }
  ],

  /* ===================== PLANIFICADOR (orientado a destrezas de Paper 1) ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Pregunta 1 (comprensión) · ¿Qué revela la Fuente [X] sobre [un hito]?", frecuencia: "Muy alta",
        plan: "2–3 puntos del mensaje, parafraseados (no copiados). Inferí lo que la fuente da a entender, no solo lo que dice literal." },
      { pregunta: "Pregunta 1b (visual) · ¿Cuál es el mensaje de la foto/caricatura?", frecuencia: "Muy alta",
        plan: "No describas solo lo que se ve; decí qué transmite (p. ej. la foto de Eckford transmite la crueldad de la segregación y la vulnerabilidad individual)." },
      { pregunta: "Pregunta 2 (OPVL) · Evalúe el valor y la limitación de la Fuente [X].", frecuencia: "Muy alta",
        plan: "Origen → Propósito → Valor (qué revela por ese origen/propósito) → Limitación (qué omite por ese mismo origen/propósito). Un valor y un límite, bien anclados." },
      { pregunta: "Pregunta 3 (comparar y contrastar) · Compare y contraste las Fuentes [A] y [B].", frecuencia: "Muy alta",
        plan: "Un bloque de similitudes y uno de diferencias, con las dos fuentes en cada frase. Usá contrastes del tema (King vs Malcolm; oficial vs de base; de jure vs de facto)." },
      { pregunta: "Pregunta 4 (mini-ensayo) · Usando las fuentes y su conocimiento, evalúe [una afirmación].", frecuencia: "Muy alta",
        plan: "~4 párrafos: postura → fuentes + conocimiento propio tejidos → contraste de perspectivas (Carson/Dudziak/Joseph/Anderson) → conclusión con juicio." }
    ],
    planes: [
      { titulo: "Plan A · Pregunta 2 (OPVL) · La foto de Little Rock (1957)",
        tesis: "El valor y la limitación de una foto se derivan de su origen (prensa, 1957) y su propósito (impactar/informar).",
        pasos: [
          "Origen: foto de prensa de Will Counts, 4-IX-1957, de circulación mundial.",
          "Propósito: mostrar a una adolescente negra sola ante una turba blanca.",
          "Valor: revela el poder de la imagen; Dudziak: dañó la imagen de EE.UU. y empujó la intervención federal.",
          "Limitación: congela un instante; no muestra la crisis constitucional ni la negociación de fondo.",
          "Cierre: una frase que combine valor y límite anclados en el origen y el propósito."
        ] },
      { titulo: "Plan B · Pregunta 3 · Comparar King («I Have a Dream») y Malcolm («El voto o la bala»)",
        tesis: "Coinciden en exigir igualdad y dignidad negras; difieren en método y geografía.",
        pasos: [
          "Similitud 1: ambas reclaman el fin de la opresión racial y apelan a la dignidad negra.",
          "Similitud 2: ambas son discursos de persuasión dirigidos a movilizar a la comunidad negra.",
          "Diferencia 1 (método): no violencia y coalición (King) vs. autodefensa y autodeterminación (Malcolm).",
          "Diferencia 2 (geografía/objetivo): Sur de jure e integración (King) vs. Norte de facto y poder negro (Malcolm).",
          "Cierre: «dos respuestas a dos preguntas distintas» (marco DE CLASE)."
        ] },
      { titulo: "Plan C · Pregunta 4 · «El gobierno federal fue el motor del cambio». Evalúe.",
        tesis: "El gobierno federal fue el brazo del movimiento, no su cabeza: reactivo, no proactivo.",
        pasos: [
          "A favor con fuentes: una foto/ley (CRA, VRA) muestra acción federal; conocimiento: tropas 1957, cloture 1964, VRA 1965.",
          "En contra con fuentes: un volante o testimonio (Hamer) muestra el impulso desde abajo; Carson: «el movimiento hizo a King».",
          "Evaluación: Dudziak: cada intervención siguió a una crisis de imagen (Little Rock, Birmingham, Selma).",
          "Perspectivas: Anderson (balance positivo) vs. Joseph (ganancia cultural del Black Power).",
          "Conclusión: el gobierno fue reactivo; la calle le fijó la agenda."
        ] },
      { titulo: "Plan D · Pregunta 4 · «¿En qué medida fue exitoso el movimiento hacia 1968?» (con fuentes)",
        tesis: "Éxito en lo legal y político, limitación en lo socioeconómico: la ley cambió el Sur, la economía no cambió el Norte.",
        pasos: [
          "Éxito legal/político con fuentes: ley (CRA, VRA); conocimiento: Jim Crow legal muerto en 1965; Mississippi 6,7%→59,8%.",
          "Límite con fuentes: Programa de 10 Puntos de las Panteras o una fuente sobre Watts; conocimiento: en 1980 la pobreza negra triplica la blanca.",
          "El quiebre: VRA (6-VIII-1965) y Watts (11-VIII): cinco días.",
          "Perspectivas: Anderson (las leyes sobrevivieron) vs. Marable (Segunda Reconstrucción incompleta).",
          "Conclusión: éxito donde bastaba una ley, límite donde hacía falta redistribución."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Modelo pregunta 2 · Valor y limitación del texto de la Voting Rights Act (1965)",
        parrafos: [
          { texto: "Esta fuente es el texto de la Voting Rights Act, un documento legal federal firmado por el presidente Johnson el 6 de agosto de 1965, con el propósito de garantizar el voto negro en el Sur mediante un mecanismo y no solo una declaración de principios.", nota: "Origen y propósito primero: quién, qué tipo de fuente, cuándo y para qué." },
          { texto: "Su valor reside precisamente en ese origen y propósito: revela qué decidió el Estado y cómo lo hizo —suspendió las pruebas de alfabetización, mandó examinadores federales y creó el preclearance—, lo que permite entender por qué esta ley fue más eficaz que la Civil Rights Act del año anterior.", nota: "Valor anclado en el origen (documento legal) y el propósito (crear un mecanismo)." },
          { texto: "Su limitación, derivada del mismo origen, es que un texto legal dice lo que la ley manda, no lo que ocurrió en la práctica: no muestra que el gerrymandering siguiera diluyendo el voto negro, es decir, que el voto no equivaliera automáticamente a poder. Para esa dimensión haría falta otra fuente (estadísticas de representación, por ejemplo).", nota: "Límite anclado en el tipo de fuente; sugiere qué fuente complementaria haría falta." },
          { texto: "En suma, como documento oficial tiene gran valor para conocer la respuesta del Estado y el mecanismo de la ley, pero su limitación es que, por ser un texto normativo, no evidencia la brecha entre la norma y su aplicación efectiva.", nota: "Cierre que combina valor y límite sin repetir; evaluación equilibrada." }
        ] },
      { titulo: "Modelo pregunta 4 · «El gobierno federal fue el motor del cambio». Evalúe con las fuentes y su conocimiento.",
        parrafos: [
          { texto: "Las fuentes sugieren que el gobierno federal actuó con fuerza, pero una lectura cuidadosa muestra que fue el brazo del movimiento y no su cabeza: intervino de forma reactiva, después de cada crisis en la calle. Esta respuesta sostiene que el gobierno federal fue necesario pero no el motor.", nota: "Postura clara en la mini-intro." },
          { texto: "A favor de la tesis del «motor», una fuente que documente la acción federal (una ley como la CRA o la VRA, o una foto de las tropas en Little Rock) prueba que el Estado usó tropas, leyes y fallos; mi conocimiento lo confirma: Eisenhower envió la 101.ª Aerotransportada en 1957, Johnson rompió el filibuster con Dirksen en 1964 y firmó la VRA en 1965.", nota: "Fuente citada + conocimiento propio con fechas." },
          { texto: "Sin embargo, otras fuentes —un volante de base o el testimonio de Fannie Lou Hamer en Atlantic City— muestran que el impulso vino de abajo, y Clayborne Carson sostiene que «el movimiento hizo a King». Mary Dudziak añade que cada intervención federal siguió a una crisis de imagen internacional: las tropas de Little Rock a la foto de Eckford, la Voting Rights Act al puente de Selma. El gobierno respondió cuando el costo internacional superó el costo político interno.", nota: "Contraste de fuentes + dos historiadores (Carson, Dudziak) para evaluar." },
          { texto: "En conclusión, las fuentes muestran a un gobierno federal potente pero reactivo: imprescindible para convertir la protesta en ley, pero incapaz de encabezar el cambio. Fue, como indica el conjunto de las fuentes y mi conocimiento, el brazo del movimiento y no su cabeza.", nota: "Conclusión con juicio, tejiendo fuentes y conocimiento." }
        ] }
    ],
    guia: {
      tesis: "En Paper 1 no hay una «tesis maestra» de ensayo largo: hay una destreza por pregunta. La regla de oro es anclar siempre valor y límite en el origen y el propósito, y en la pregunta 4 tejer fuentes + conocimiento propio.",
      argumentos: [
        "Pregunta 1: parafraseá e inferí 2–3 puntos del mensaje (no copies).",
        "Pregunta 2 (OPVL): Origen → Propósito → Valor → Limitación, cada uno anclado en el origen/propósito concreto.",
        "Pregunta 3: similitudes Y diferencias, con las dos fuentes en cada frase; nunca en bloques separados.",
        "Pregunta 4: las cuatro fuentes + conocimiento propio + evaluación de perspectivas, en ~4 párrafos cortos."
      ],
      evidencia: [
        "Hitos para fechar fuentes: 17-V-1954 (Brown), 1-XII-1955 (Parks), 24-IX-1957 (Little Rock), 1-II-1960 (Greensboro), IV–V-1963 (Birmingham), 28-VIII-1963 (Washington), 2-VII-1964 (CRA), 7-III-1965 (Selma), 6-VIII-1965 (VRA), 16-VI-1966 (Black Power), 4-IV-1968 (King).",
        "Cifras de conocimiento propio: 381 días (boicot), 250.000 (Washington), Mississippi 6,7%→59,8%, escuelas del Sur 2%→32%→91%, apoyo blanco 60%→30%.",
        "Fechas espejo para ubicar fuentes: VRA (6-VIII-1965) y Watts (11-VIII): cinco días; King (4-IV-1968) y Fair Housing (11-IV): una semana."
      ],
      historiografia: [
        "Para contextualizar fuentes: Carson (fuentes de base), Dudziak (fotos y fuentes oficiales), Joseph (fuentes radicales), Anderson (balance para el juicio).",
        "Regalos para el contraste del mini-ensayo: Fairclough (King catalizador), Rosenberg (Hollow Hope: la CRA, no Brown, integró las escuelas), cameo P. Johnson (lectura conservadora del backlash).",
        "No cites de adorno: usá al historiador para contextualizar la fuente o para enfrentar perspectivas en la pregunta 4."
      ],
      contraargumento: "En la pregunta 4, reconocé la perspectiva contraria (p. ej. «el gobierno federal lideró» o «el Black Power solo trajo backlash») y refutala con el timing (cada ley es posterior a una crisis) y con la ganancia cultural y política (alcaldes, Black Studies), apoyándote en fuentes y conocimiento."
    }
  }
});
