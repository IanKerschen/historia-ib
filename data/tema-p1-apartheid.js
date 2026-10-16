/* ============================================================
   tema-p1-apartheid.js — Paper 1: Apartheid en Sudáfrica (1948–1964)
   Tema prescrito 4: Derechos y protesta · Caso de estudio 2.
   Enfoque Paper 1 (preguntas basadas en fuentes: 1a comprensión,
   1b visual, 2 OPCVL/valor-limitación, 3 comparar-contrastar,
   4 mini-ensayo con fuentes + conocimiento propio).
   Transcripción fiel de la guía Paper 1 del usuario.
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "p1-apartheid",
  carpeta: "p1",
  titulo: "Apartheid en Sudáfrica (1948–1964)",
  subtitulo: "Hitos y destrezas de fuentes · Leyes del apartheid · Protesta del ANC/PAC · Sharpeville · Rivonia",
  periodo: "1948 (victoria del PN) → 1964 (sentencia de Rivonia)",
  estado: "listo",
  etiquetas: ["Paper 1", "fuentes", "OPCVL", "apartheid", "Sudáfrica", "Mandela", "Luthuli", "Sharpeville", "Rivonia", "ANC", "PAC"],

  /* ===================== RESUMEN (hoja ultra-condensada para fuentes) ===================== */
  resumen: {
    tesisMaestra: "Paper 1 no pide un ensayo largo sino destrezas de fuentes: entender una fuente (1a), leer el mensaje de una imagen (1b), evaluar valor y limitación por origen/propósito/contenido (2 · OPCVL), comparar y contrastar dos fuentes punto por punto (3), y usar las cuatro fuentes + conocimiento propio en un mini-ensayo (4). El contenido fáctico es el apartheid de Malan a Verwoerd (1948–64) y la resistencia del ANC/PAC (Desafío → Carta → Buses → Sharpeville → MK → Rivonia), pero lo que da banda es la habilidad con las fuentes, no la narración.",
    historiadoresLinea: [
      { nombre: "OPCVL", linea: "Para «valor y limitación»: Origen (quién, qué, cuándo), Propósito (para qué se produjo), Contenido (qué dice), Valor (qué permite saber por ese origen y propósito) y Limitación (qué deja afuera o sesga por ese mismo origen y propósito)." },
      { nombre: "Posel", linea: "Contextualiza fuentes sobre la «naturaleza» del apartheid: no fue un plan maestro de 1948 sino conflicto y compromiso (puristas vs. prácticos); el gran apartheid es segunda fase (post-1959)." },
      { nombre: "Lodge", linea: "Contextualiza fuentes de resistencia: la Campaña de Desafío creó un movimiento de masas, las protestas exitosas nacieron de comités locales, Sharpeville es el quiebre y MK triunfó como mensaje, no como guerra." },
      { nombre: "Ellis (regalo)", linea: "Tesis polémica: la iniciativa de la lucha armada fue del SACP (dic. 1960) y Mandela era del comité central; perfecto para la OPCVL del discurso de Rivonia (por qué Mandela minimiza el vínculo comunista)." }
    ],
    datosClave: [
      { grupo: "Hitos para ubicar cualquier fuente (fechas clave)", items: [
        "26-V-1948 el PN (Malan) gana · 1949 Prohibición de Matrimonios Mixtos + Programa de Acción del ANC.",
        "1950 Registro de Población · Áreas de Grupo · Inmoralidad · Supresión del Comunismo.",
        "1952 Leyes de Pases + Campaña de Desafío (~8.500 arrestos; ANC 7.000→100.000) · Luthuli presidente.",
        "1953 Educación Bantú (Verwoerd) · 1955 desalojo de Sophiatown + Carta de la Libertad (Kliptown).",
        "1956 marcha de 20.000 mujeres + Juicio por Traición (156) · 1957 boicot de buses de Alexandra.",
        "21-III-1960 Sharpeville (69 muertos) · 8-IV ANC y PAC ilegalizados · Res. 134 de la ONU · Nobel a Luthuli.",
        "16-XII-1961 primeros sabotajes de MK · 1962 Mandela arrestado · 11-VII-1963 redada de Rivonia · 12-VI-1964 ocho perpetuas."
      ]},
      { grupo: "Tipos de fuente que suelen caer (y su valor/límite base)", items: [
        "Discurso de Mandela en Rivonia (20-IV-1964): valor = por qué el ANC pasó a la lucha armada; límite = autojustificación, minimiza el vínculo con el SACP.",
        "Carta de la Libertad (Kliptown, 1955): valor = objetivos y base multirracial; límite = documento aspiracional (qué querían, no qué pasó).",
        "Discurso de Verwoerd sobre educación bantú (1953–54): valor = la ideología sin filtro; límite = vista oficial, nada del efecto en las aulas.",
        "Foto de Sharpeville (Ian Berry, 21-III-1960): valor = evidencia visual inmediata (disparos por la espalda); límite = un instante, no muestra qué pasó antes.",
        "Libro de un historiador (Lodge, 2011): valor = perspectiva de conjunto con retrospectiva; límite = interpretación que selecciona evidencia según su tesis."
      ]}
    ],
    comparacion: [
      { eje: "Estado vs. resistencia", texto: "Una fuente oficial (discurso de Verwoerd, texto de una ley) frente a una del movimiento (Carta de la Libertad, discurso de Rivonia): propósitos opuestos para el OPCVL y el contraste." },
      { eje: "No violencia vs. lucha armada", texto: "Una fuente de la fase pacífica (Carta 1955, Luthuli) frente a una del giro armado (manifiesto de MK 1961, discurso de Mandela 1964): el contraste clásico de comparar-contrastar." },
      { eje: "ANC vs. PAC", texto: "Fuente multirracial (ANC, Carta de la Libertad, brazo armado MK) frente a africanista (PAC de Sobukwe, «África para los africanos», organizó Sharpeville, brazo armado Poqo)." },
      { eje: "Contemporánea vs. retrospectiva", texto: "Una fuente del momento (foto de Berry 1960, discurso de 1964) frente a una de historiador (Posel 1991, Lodge 2011): inmediatez vs. perspectiva de conjunto." }
    ],
    veredictos: [
      { titulo: "Qué premia Paper 1", texto: "No el relato sino: sacar 3 ideas de un texto (1a), leer el mensaje de una imagen (1b), evaluar valor y limitación por origen/propósito/contenido (2), comparar dos fuentes punto por punto (3), e integrar las cuatro fuentes + conocimiento propio en un mini-ensayo (4)." },
      { titulo: "El error que más cuesta banda", texto: "En «valor y limitación», decir «la fuente es parcial, por lo tanto no sirve» o «primaria = valiosa / secundaria = poco valiosa». La parcialidad es información, no descalificación: hay que anclar valor y límite en el origen y el propósito concretos." },
      { titulo: "Las tres bisagras que ordenan cualquier fuente", texto: "1952 (el ANC se vuelve movimiento de masas) · 1960 (Sharpeville: se cierra la vía legal) · 1964 (Rivonia: se cierra la vía armada interna). Ubicá toda fuente respecto de estas tres fechas." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Deborah Posel", nacionalidad: "Sudafricana, historiadora social",
      obra: "The Making of Apartheid 1948–1961: Conflict and Compromise (1991)",
      postura: "El apartheid se armó «a los tumbos»",
      funcion: "Contextualizar fuentes sobre la «naturaleza» o «coherencia» del apartheid (sección A, leyes de los 50).",
      ideaCentral: "El apartheid no fue la ejecución de un plano acabado en 1948 sino un proceso de conflicto y compromiso dentro del nacionalismo afrikáner: los «puristas» querían separación total; los «prácticos» (agro, industria) necesitaban mano de obra negra en las ciudades. Las leyes de los 50 son esa negociación; el «gran apartheid» de los bantustanes es una segunda fase (Verwoerd, post-1959), no el cumplimiento de un diseño original.",
      matiz: "Sirve para matizar fuentes oficiales que presentan el apartheid como un sistema armónico de «buena vecindad»: muestra la improvisación detrás de la fachada.",
      fraseLista: "Como sostiene Posel, el apartheid se construyó a los tumbos: más que un plan maestro, fue un compromiso entre quienes querían separar y quienes necesitaban explotar.",
      paraPreguntas: ["Contexto de fuentes oficiales sobre las leyes", "¿Fue el apartheid un plan?", "Naturaleza/coherencia del apartheid"]
    },
    {
      nombre: "Tom Lodge", nacionalidad: "Británico/sudafricano, politólogo",
      obra: "Black Politics in South Africa since 1945 (1983) · Sharpeville: An Apartheid Massacre and its Consequences (2011)",
      postura: "La historia desde la resistencia",
      funcion: "Contextualizar fuentes de protesta (Desafío, buses, Sharpeville, MK) y el giro armado (secciones B y C).",
      ideaCentral: "Lee la historia desde la resistencia: (1) la Campaña de Desafío convirtió al ANC en movimiento de masas pese a no derogar nada; (2) las protestas más exitosas (buses de Alexandra) nacieron de comités locales, no de la dirección nacional; (3) Sharpeville es el punto de quiebre del período: cierra la vía legal, internacionaliza el conflicto y empuja a la lucha armada; (4) MK fue militarmente débil pero funcionó como «propaganda del hecho»: su valor fue simbólico.",
      matiz: "Permite leer fuentes de protesta sin medir el éxito solo por leyes derogadas: el valor de la resistencia fue organizativo y simbólico.",
      fraseLista: "Lodge recuerda que el sabotaje de MK fracasó como guerra pero triunfó como mensaje: demostró que la resistencia seguía viva cuando toda política legal había sido prohibida.",
      paraPreguntas: ["Éxito/fracaso de la protesta", "Valor del giro armado (MK)", "Contexto de fuentes de resistencia", "Importancia de Sharpeville"]
    },
    {
      nombre: "Stephen Ellis", regalo: true, nacionalidad: "Británico (regalo para el contraste)",
      obra: "External Mission: The ANC in Exile (2012)",
      postura: "El SACP decidió la lucha armada primero",
      funcion: "Contrastar con Lodge y afilar la OPCVL del discurso de Rivonia.",
      ideaCentral: "Tesis polémica: la iniciativa de la lucha armada fue del SACP (decisión de diciembre de 1960), y Mandela era miembro del comité central del Partido cuando fundó MK; el relato de «Mandela convence al ANC» sería la versión oficial posterior. Se contrasta con Lodge (que coloca la iniciativa en Mandela y el ANC) y con el propio discurso de Rivonia, que niega la militancia comunista.",
      matiz: "Perfecto para una OPCVL del discurso de Mandela: su propósito ante un tribunal explica que minimice el vínculo con el SACP, vínculo que Ellis documenta.",
      fraseLista: "Según Ellis, la decisión de las armas fue del SACP a fines de 1960; por eso el discurso de Rivonia, dirigido a un tribunal que podía condenarlo a muerte, minimiza un vínculo comunista que Ellis documenta.",
      paraPreguntas: ["OPCVL del discurso de Rivonia", "¿Quién decidió la lucha armada?", "Contraste de perspectivas en la pregunta 4"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1948, fecha: "26-V-1948", pais: "Sudáfrica", titulo: "El Partido Nacional gana",
      descripcion: "El Partido Nacional de Malan gana las elecciones con la bandera del «apartheid» (con menos votos que Smuts, pero más bancas). Comienza la era. Fuente típica: propaganda o discurso del PN.",
      causas: ["Segregación previa (Ley de Tierras 1913, Hertzog en los 30) que el PN promete legalizar y radicalizar.", "Sistema electoral que sobrerrepresentaba al campo afrikáner."],
      consecuencias: ["Entre 1949 y 1959 se construye el andamiaje legal del apartheid."],
      historiador: "Posel: no había un plan maestro acabado en 1948 sino un programa a negociar." },
    { anio: 1950, fecha: "1950", pais: "Sudáfrica", titulo: "Las cuatro leyes madre",
      descripcion: "Registro de Población (clasificación racial, «la ley madre»), Áreas de Grupo (zonas urbanas por raza), enmienda a la Ley de Inmoralidad y Supresión del Comunismo (que define «comunismo» tan ampliamente que cualquier oposición cabe). Fuente típica: el texto de una ley.",
      causas: ["Necesidad de una base legal para clasificar antes de segregar."],
      consecuencias: ["Sin clasificación ninguna otra ley puede aplicarse; el banning confina a Luthuli, Mandela y cientos más."] },
    { anio: 1952, fecha: "26-VI-1952", pais: "Sudáfrica", titulo: "Leyes de Pases · Campaña de Desafío",
      descripcion: "El «dompas» (libro de referencia) se vuelve obligatorio para todo hombre africano. El ANC + el Congreso Indio lanzan la Campaña de Desafío (Mandela «voluntario en jefe»): violar a propósito seis leyes «petty». ~8.500 arrestos.",
      causas: ["La Liga Juvenil (1949) impuso el Programa de Acción: del petitorio a la acción de masas."],
      consecuencias: ["El ANC pasa de 7.000 a 100.000 miembros; Luthuli presidente; método no violento legitimado; ninguna ley cambió."],
      historiador: "Lodge: «fracaso de objetivos, éxito de organización»." },
    { anio: 1953, fecha: "1953", pais: "Sudáfrica", titulo: "Educación Bantú (Verwoerd)",
      descripcion: "El Estado toma las escuelas misioneras; currículo para formar mano de obra. Verwoerd: «no hay lugar para el bantú en la comunidad europea por encima de ciertas formas de trabajo». Fuente estrella: el discurso de Verwoerd.",
      causas: ["Ideología del «desarrollo separado»."],
      consecuencias: ["Un chico africano recibía ~1/10 del gasto por alumno blanco; formó la generación que estalla en 1976."] },
    { anio: 1955, fecha: "9-II / 25-26-VI-1955", pais: "Sudáfrica", titulo: "Sophiatown · Carta de la Libertad",
      descripcion: "El 9-II, 2.000 policías inician el desalojo de Sophiatown (~60.000 personas a Meadowlands); el barrio se rebautiza «Triomf». El 25-26-VI, en Kliptown, el Congreso del Pueblo (~3.000 delegados) adopta la Carta de la Libertad: «Sudáfrica pertenece a todos los que viven en ella». Fuente típica: la Carta.",
      causas: ["Ley de Reasentamiento de Nativos (1954): base legal para vaciar Sophiatown."],
      consecuencias: ["La Carta es el programa de referencia hasta 1994; el gobierno la tilda de comunista → Juicio por Traición (1956)."] },
    { anio: 1956, fecha: "9-VIII / XII-1956", pais: "Sudáfrica", titulo: "Marcha de mujeres · Juicio por Traición",
      descripcion: "El 9-VIII, 20.000 mujeres marchan a los Union Buildings contra los pases (FEDSAW). En diciembre, el gobierno lanza el Juicio por Traición: 156 acusados (Mandela, Luthuli, Sisulu…).",
      causas: ["La Carta de la Libertad y la movilización de masas alarman al Estado."],
      consecuencias: ["El juicio paraliza a la dirigencia; termina en 1961 con todos absueltos."] },
    { anio: 1957, fecha: "ene–abr 1957", pais: "Sudáfrica", titulo: "Boicot de buses de Alexandra",
      descripcion: "Contra la suba de 4 a 5 peniques («Azikwelwa» – no viajaremos). Decenas de miles caminan 15–30 km diarios durante ~3 meses. Organizado desde abajo, por comités locales. Fuente típica: un volante o testimonio.",
      causas: ["La tarifa extra equivalía a 1/4 de un jornal por mes."],
      consecuencias: ["Los empleadores subsidian la tarifa: victoria local, no política; muestra el poder económico de la población negra."],
      historiador: "Lodge: las protestas más exitosas nacieron de comités locales, no de la dirección nacional." },
    { anio: 1959, fecha: "1959", pais: "Sudáfrica", titulo: "Autogobierno Bantú · nace el PAC",
      descripcion: "La Promoción del Autogobierno Bantú crea 8 «naciones» y pone fin a toda representación africana en el Parlamento. En abril, los africanistas rompen con el ANC y fundan el PAC (Sobukwe).",
      causas: ["Rechazo africanista al multirracialismo de la Carta de la Libertad."],
      consecuencias: ["El africano deja de ser sudafricano: «ciudadano» de un bantustán pobre; el PAC organizará Sharpeville."] },
    { anio: 1960, fecha: "21-III-1960", pais: "Sudáfrica", titulo: "Sharpeville",
      descripcion: "Campaña anti-pases del PAC: «dejá el pase en casa y presentate a ser arrestado». La policía dispara sobre la multitud: 69 muertos (8 mujeres, 10 niños), ~180 heridos, la mayoría por la espalda. Fuente estrella: la foto de Ian Berry.",
      causas: ["El PAC lanza su campaña 10 días antes que la del ANC."],
      consecuencias: ["30-III estado de emergencia; 8-IV ANC y PAC ilegalizados; Res. 134 de la ONU; fuga de capitales; Nobel a Luthuli; nacen los brazos armados."],
      historiador: "Lodge: Sharpeville es el punto de quiebre: cierra la vía legal e internacionaliza el conflicto." },
    { anio: 1961, fecha: "16-XII-1961", pais: "Sudáfrica", titulo: "Umkhonto we Sizwe (MK)",
      descripcion: "El ANC autoriza a Mandela a crear MK como organización separada. Primeros sabotajes (torres eléctricas, oficinas de pases), evitando muertes. Manifiesto: «someterse o luchar». Fuente típica: el manifiesto de MK.",
      causas: ["Se cerró la vía legal (ilegalización); Sharpeville mostró que el Estado mataba; fracasó el «stay-at-home» de mayo de 1961."],
      consecuencias: ["~200 sabotajes en 18 meses; seis días antes Luthuli había recibido el Nobel."],
      historiador: "Ellis: la iniciativa armada venía del SACP desde fines de 1960." },
    { anio: 1962, fecha: "5-VIII-1962", pais: "Sudáfrica", titulo: "Mandela arrestado · Ley de Sabotaje",
      descripcion: "Tras viajar por África (entrenamiento en Etiopía y Argelia), Mandela es arrestado cerca de Howick y condenado a 5 años. La Ley de Sabotaje (1962) habilita la pena de muerte.",
      causas: ["El Estado endurece la represión tras los primeros sabotajes."],
      consecuencias: ["Prepara el terreno para la redada de Rivonia."] },
    { anio: 1963, fecha: "11-VII-1963", pais: "Sudáfrica", titulo: "Redada de Rivonia",
      descripcion: "En Liliesleaf Farm (Rivonia) cae el alto mando de MK y el plan «Operación Mayibuye». La Ley de detención de 90 días permite el arresto sin juicio. En octubre empieza el Juicio de Rivonia.",
      causas: ["El SACP había comprado la granja; el alto mando se reunía allí."],
      consecuencias: ["El Estado juzga por Sabotaje (no por traición): menos carga de prueba."] },
    { anio: 1964, fecha: "12-VI-1964", pais: "Sudáfrica", titulo: "Sentencia de Rivonia",
      descripcion: "El 20-IV, Mandela convierte el juicio en tribuna: «un ideal por el que estoy dispuesto a morir». El 12-VI, ocho condenas a cadena perpetua (Mandela, Sisulu, Mbeki…). Robben Island. Fuente estrella: el discurso de Mandela.",
      causas: ["La presión internacional (ONU, vigilias en Londres) probablemente evitó la pena de muerte."],
      consecuencias: ["El ANC interno queda decapitado; Tambo dirige desde el exilio; Mandela se vuelve símbolo global."],
      historiador: "Lodge: el Estado gana la batalla y pierde la narrativa." }
  ],

  /* ===================== CONTENIDO (secciones navegables, enfoque fuentes) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se rinde Paper 1 + vocabulario",
        html: `
          <p>Paper 1 dura <b>1 hora</b>, vale <b>24 puntos</b> y tiene <b>4 preguntas</b> sobre un conjunto de 4 fuentes (texto, imagen/foto/afiche, documento y cita de historiador). No es un ensayo de 1.000 palabras: es un examen de <b>destrezas de fuentes</b>. El caso es el apartheid de 1948 (victoria del PN de Malan) a 1964 (sentencia de Rivonia).</p>

          <h3>Las cuatro preguntas (1 hora · 24 puntos)</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Pregunta</th><th>Pts · tiempo</th><th>Qué te piden / truco de corrector</th></tr></thead>
            <tbody>
              <tr><td>1a · comprensión</td><td>3 pts · 5 min</td><td>«¿Qué dice la Fuente A sobre…?» → 3 ideas distintas, con tus palabras. 3 puntos = 3 oraciones cortas. No analices ni agregues conocimiento propio.</td></tr>
              <tr><td>1b · visual</td><td>2 pts · 3 min</td><td>«¿Cuál es el mensaje de la Fuente B?» (casi siempre caricatura/foto/afiche) → 2 mensajes. Describí el detalle visual + lo que significa.</td></tr>
              <tr><td>2 · OPCVL</td><td>4 pts · 8 min</td><td>«Con referencia a origen, propósito y contenido, analice valor y limitaciones de la Fuente C para un historiador que estudia…». 2 valores + 2 limitaciones, cada uno anclado en O, P o C.</td></tr>
              <tr><td>3 · comparar-contrastar</td><td>6 pts · 14 min</td><td>«Compare y contraste lo que revelan las Fuentes C y D sobre…». ≈ 3 semejanzas + 3 diferencias, integradas. Sin OPCVL acá.</td></tr>
              <tr><td>4 · mini-ensayo</td><td>9 pts · 25 min</td><td>«Usando las fuentes y sus propios conocimientos, evalúe / discuta / ¿en qué medida…?». Tesis + 3 párrafos que mezclan las 4 fuentes con conocimiento propio + conclusión. Acá entran los historiadores.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>5 minutos de lectura al inicio (sin escribir):</b> leé primero la pregunta 4, así sabés para qué sirve cada fuente mientras las leés. Total: 55 min de escritura + 5 de margen.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>OPCVL para «valor y limitación» (pregunta 2):</b> <b>O</b>rigen (quién, qué tipo de fuente, cuándo), <b>P</b>ropósito (para qué/para quién se produjo), <b>C</b>ontenido (qué dice), y de ahí el <b>valor</b> (qué permite saber por ese origen y propósito) y la <b>limitación</b> (qué deja afuera o sesga por ese mismo origen y propósito). Un párrafo de valor y uno de limitación.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Valor:</b> «Al tratarse de [origen], la fuente tiene valor porque ofrece [perspectiva interna/contemporánea/oficial] sobre…; su propósito de [convencer/justificar] es en sí mismo valioso: muestra cómo [actor] quería ser visto.» <b>Limitación:</b> «Sin embargo, ese mismo propósito limita la fuente: al buscar [X], omite/exagera…; su contenido se centra en… y no permite ver…».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Comparar (pregunta 3):</b> «Ambas fuentes coinciden en que…»; «De modo similar, la Fuente D también…». <b>Contrastar:</b> «Mientras que la Fuente C atribuye…, la Fuente D sostiene…»; «A diferencia de…». <b>Pregunta 4:</b> «Como sugiere la Fuente A y confirma [dato propio]…»; «La Fuente B, aunque [limitación], ilustra…»; «Esto coincide con la interpretación de [historiador], quien…».</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Apartheid</b> = «separación» en afrikáans; legalización y radicalización de una segregación que ya existía. <b>Petty apartheid</b> = la separación cotidiana (con quién te casás, qué baño usás, qué pase llevás). <b>Grand apartheid</b> = la separación territorial y política (dónde vivís, de qué «nación» sos, si votás). <b>Dompas</b> = el libro de pases obligatorio. <b>Bantustán</b> = «patria» africana (13% de la tierra para ~70% de la población). <b>ANC</b> = Congreso Nacional Africano (multirracial, Carta de la Libertad). <b>PAC</b> = Congreso Panafricanista (africanista, Sobukwe). <b>MK</b> = Umkhonto we Sizwe, brazo armado. <b>SACP</b> = Partido Comunista Sudafricano. <b>OPCVL</b> = Origen, Propósito, Contenido, Valor, Limitación.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Las cuatro trampas clásicas del Paper 1: (1) decir «la fuente es parcial, por lo tanto no sirve» — la parcialidad es información, no descalificación; (2) «primaria → valiosa / secundaria → poco valiosa» — nunca; (3) en la pregunta 3 describir las fuentes una detrás de otra en vez de cruzarlas; (4) en la pregunta 4 escribir un ensayo sin nombrar «Fuente A/B/C/D», o al revés, un resumen de fuentes sin conocimiento propio.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué significa OPCVL en Paper 1?", etiqueta: "concepto",
            opciones: [
              { texto: "Origen, Propósito, Contenido, Valor y Limitación de una fuente.", correcta: true, explicacion: "Correcto: el esquema de la pregunta 2 para evaluar una fuente." },
              { texto: "Opinión, Perspectiva, Contexto, Validez y Lógica del argumento del examinador.", correcta: false, explicacion: "No es eso; OPCVL se refiere a los atributos de la fuente." },
              { texto: "Objetivo, Problema, Causa, Variable y Límite de una investigación histórica.", correcta: false, explicacion: "No corresponde al método de fuentes de Paper 1." },
              { texto: "Orden, Propaganda, Credibilidad, Veracidad y Localización del documento.", correcta: false, explicacion: "No es el significado del acrónimo OPCVL." }
            ] },
          { pregunta: "¿Cuál es una de las cuatro trampas clásicas del Paper 1?", etiqueta: "trampa",
            opciones: [
              { texto: "Decir que una fuente «es parcial, por lo tanto no sirve».", correcta: true, explicacion: "Correcto: la parcialidad es información, no descalificación." },
              { texto: "Leer primero la pregunta 4 para saber para qué sirve cada fuente.", correcta: false, explicacion: "Eso es un buen truco, no una trampa." },
              { texto: "Anclar cada valor y cada límite en el origen o el propósito de la fuente.", correcta: false, explicacion: "Eso es justamente lo correcto en la pregunta 2." },
              { texto: "Cruzar las dos fuentes en cada frase de la pregunta 3.", correcta: false, explicacion: "Eso es lo que pide la pregunta 3; la trampa es describirlas por separado." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Línea de tiempo + tipos de fuente",
        html: `
          <p>Para Paper 1 conviene ubicar cualquier fuente en los hitos y reconocer su tipo. El período se ordena con códigos: LEY (legislación), PROTESTA (acción del movimiento), ESTADO (represión) e INTERNACIONAL.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Año</th><th>Hito</th><th>Fuentes que suelen aparecer</th></tr></thead>
            <tbody>
              <tr><td>1948</td><td>El PN (Malan) gana las elecciones.</td><td>Propaganda/discurso del PN.</td></tr>
              <tr><td>1950–53</td><td>Leyes madre (Registro, Áreas de Grupo, Supresión del Comunismo) · Educación Bantú.</td><td>Texto de una ley; discurso de Verwoerd.</td></tr>
              <tr><td>1952</td><td>Campaña de Desafío (~8.500 arrestos; ANC 7.000→100.000).</td><td>Volantes; testimonios; fotos de arrestos.</td></tr>
              <tr><td>1955</td><td>Sophiatown (desalojo) · Carta de la Libertad (Kliptown).</td><td>La Carta; fotos del desalojo.</td></tr>
              <tr><td>1956–57</td><td>Marcha de 20.000 mujeres · Juicio por Traición · boicot de buses de Alexandra.</td><td>Testimonios; afiches; recortes de prensa.</td></tr>
              <tr><td>1960</td><td>Sharpeville (69 muertos) · ilegalización de ANC/PAC · Res. 134 ONU.</td><td>Foto de Berry; prensa internacional; resolución de la ONU.</td></tr>
              <tr><td>1961–64</td><td>MK (sabotajes) · Mandela arrestado · Rivonia · ocho perpetuas.</td><td>Manifiesto de MK; discurso de Rivonia; cita de historiador.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Las tres bisagras del período:</b> 1952 (el ANC se vuelve movimiento de masas) · 1960 (Sharpeville: se cierra la vía legal) · 1964 (Rivonia: se cierra la vía armada interna). Cualquier pregunta 4 sobre «cambio» o «impacto» se ordena con estas tres fechas; y toda fuente se ubica según en qué lado de cada bisagra esté.</div>

          <h3>Cómo leer cada tipo de fuente</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Tipo</th><th>Qué mirar primero</th><th>Valor típico / Límite típico</th></tr></thead>
            <tbody>
              <tr><td>Foto (p. ej. Sharpeville, Berry)</td><td>Quién la tomó, cuándo, qué muestra, dónde se publicó.</td><td>Valor: evidencia visual inmediata. Límite: un instante, no muestra el antes (tamaño de la multitud, tensión, decisiones policiales).</td></tr>
              <tr><td>Discurso (Verwoerd, Mandela)</td><td>Quién, a quién, para qué (justificar, persuadir).</td><td>Valor: la postura/ideología de quien habla. Límite: busca convencer o justificar, no describir neutralmente.</td></tr>
              <tr><td>Documento (ley, Carta)</td><td>Qué órgano lo emite y qué efecto/objetivo tiene.</td><td>Valor: lo que el Estado mandó o lo que el movimiento quería. Límite: dice la norma o el deseo, no lo que pasó en la práctica.</td></tr>
              <tr><td>Cita de historiador (Posel, Lodge)</td><td>Qué escuela/postura representa.</td><td>Valor: interpretación informada con retrospectiva. Límite: selecciona evidencia según su tesis; no vivió los hechos.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Para contextualizar fuentes: una fuente oficial sobre la «naturaleza» del apartheid → Posel (se armó a los tumbos, no un plan maestro). Una fuente de resistencia (Desafío, buses, Sharpeville, MK) → Lodge (la historia desde la resistencia). La OPCVL del discurso de Rivonia → Ellis (por qué Mandela minimiza el vínculo con el SACP).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuáles son las tres bisagras que ordenan el período?", etiqueta: "fecha",
            opciones: [
              { texto: "1952 (masas), 1960 (Sharpeville) y 1964 (Rivonia).", correcta: true, explicacion: "Correcto: masas → cierre de la vía legal → cierre de la vía armada interna." },
              { texto: "1948 (Malan al poder), 1958 (Verwoerd) y 1966 (asesinato de Verwoerd).", correcta: false, explicacion: "Son fechas del Estado, no las tres bisagras de la resistencia." },
              { texto: "1949 (Programa de Acción), 1955 (Carta) y 1961 (República).", correcta: false, explicacion: "Son hitos, pero no las tres bisagras que marca la guía." },
              { texto: "1950 (Registro de Población), 1953 (Educación Bantú) y 1959 (bantustanes).", correcta: false, explicacion: "Son leyes, no las bisagras del movimiento." }
            ] },
          { pregunta: "¿Qué historiador conviene citar para contextualizar una foto de resistencia como Sharpeville?", etiqueta: "historiador",
            opciones: [
              { texto: "Lodge: lee la historia desde la resistencia y ve Sharpeville como el quiebre.", correcta: true, explicacion: "Correcto: Lodge es el historiador de la protesta y del giro armado." },
              { texto: "Posel, porque toda foto de protesta prueba que el apartheid fue un plan maestro.", correcta: false, explicacion: "Posel sirve para la «naturaleza» del apartheid, no para las fotos de resistencia." },
              { texto: "Ellis, porque sostiene que las fotos de Sharpeville las tomó el SACP.", correcta: false, explicacion: "Ellis trata la decisión armada del SACP, no la autoría de las fotos." },
              { texto: "Verwoerd, porque fue quien ordenó registrar fotográficamente las protestas.", correcta: false, explicacion: "Verwoerd es un actor histórico, no un historiador." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Valor y limitación (pregunta 2 · OPCVL) con ejemplos",
        html: `
          <p>Esta es la pregunta estrella de Paper 1. Para cada fuente típica del tema, OPCVL aplicado. La guía ya trae un cuadro de referencia con las cinco fuentes más probables.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fuente</th><th>Origen / propósito</th><th>Valor</th><th>Limitación</th></tr></thead>
            <tbody>
              <tr><td>Discurso de Mandela en Rivonia (20-IV-1964)</td><td>Acusado n.º 1, en juicio, con pena de muerte posible; dirigido al tribunal y al mundo.</td><td>Explicación de primera mano de por qué el ANC pasó a la lucha armada; muestra cómo el ANC quería ser visto.</td><td>Autojustificación: minimiza el vínculo con el SACP y presenta el sabotaje como último recurso controlado.</td></tr>
              <tr><td>Carta de la Libertad (Kliptown, 1955)</td><td>Congreso del Pueblo, Alianza del Congreso; programa para una Sudáfrica no racial.</td><td>Muestra los objetivos y la base multirracial del movimiento; explica por qué el gobierno lo tachó de comunista.</td><td>Documento aspiracional: dice qué querían, no qué pasó ni cuánta gente lo apoyaba.</td></tr>
              <tr><td>Discurso de Verwoerd sobre educación bantú (1953–54)</td><td>Ministro de Asuntos Nativos; justificar la ley ante el Senado.</td><td>Revela sin filtro la ideología y la intención de la ley.</td><td>Vista oficial: nada sobre el efecto real en las aulas ni sobre la resistencia.</td></tr>
              <tr><td>Foto de Sharpeville (Ian Berry, 21-III-1960)</td><td>Fotoperiodista de Drum, presente ese día; publicada internacionalmente.</td><td>Evidencia visual inmediata: gente huyendo, disparos por la espalda.</td><td>Un instante: no muestra qué pasó antes (tamaño de la multitud, tensión) ni las decisiones policiales.</td></tr>
              <tr><td>Libro de un historiador (Lodge, 2011)</td><td>Académico, décadas después, con acceso a archivos y testimonios.</td><td>Perspectiva de conjunto, causas y consecuencias con retrospectiva.</td><td>Interpretación: selecciona evidencia según su tesis; no vivió los hechos.</td></tr>
            </tbody>
          </table></div>

          <h3>Ejemplo 1 · El discurso de Mandela en Rivonia (1964)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Origen</span>Discurso del acusado n.º 1 (Mandela) ante el tribunal de Rivonia, 20-IV-1964, con pena de muerte posible.</div>
              <div><span class="et">Propósito</span>Justificar ante el tribunal y el mundo por qué el ANC pasó al sabotaje; ser visto como luchador moral, no como terrorista.</div>
              <div><span class="et">Valor</span>Explicación de primera mano del giro armado; muestra cómo el ANC quería presentarse.</div>
            </div>
          </div>
          <p><b>Limitación:</b> es una autojustificación hecha para salvar la vida: minimiza el vínculo con el SACP (vínculo que Ellis documenta) y presenta el sabotaje como un último recurso cuidadosamente controlado.</p>

          <h3>Ejemplo 2 · La foto de Sharpeville (Ian Berry, 1960)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Origen</span>Foto de Ian Berry, fotoperiodista de Drum presente ese día; publicada internacionalmente.</div>
              <div><span class="et">Propósito</span>Informar/impactar: mostrar al mundo la masacre en el momento.</div>
              <div><span class="et">Valor</span>Evidencia visual inmediata: gente huyendo, disparos por la espalda; dio al apartheid una imagen que la propaganda no pudo borrar.</div>
            </div>
          </div>
          <p><b>Limitación:</b> captura un instante y no muestra qué pasó antes (el tamaño de la multitud, la tensión) ni las decisiones policiales que llevaron a la orden de disparar.</p>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El discurso de Rivonia tiene gran valor porque, al tratarse de una declaración de primera mano del propio Mandela, revela cómo el ANC quería justificar el giro a la lucha armada; sin embargo, su limitación es que, al ser una autodefensa pronunciada ante un tribunal que podía condenarlo a muerte, minimiza el vínculo con el SACP que Stephen Ellis documenta.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No digas que el discurso de Mandela «no sirve porque es parcial». Todo discurso de defensa es parcial: eso es justamente su valor para conocer cómo quería ser visto el ANC. El límite concreto es qué omite esa parcialidad (el vínculo comunista, el control real sobre el sabotaje).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es la limitación correcta del discurso de Mandela en Rivonia?", etiqueta: "concepto",
            opciones: [
              { texto: "Es una autojustificación que minimiza el vínculo con el SACP.", correcta: true, explicacion: "Correcto: el límite se ancla en el propósito (defenderse ante el tribunal)." },
              { texto: "Es poco fiable porque fue pronunciado por alguien que no estaba presente en los hechos.", correcta: false, explicacion: "Mandela sí fue protagonista; «poco fiable» en abstracto no es un buen límite." },
              { texto: "No tiene ningún valor histórico porque es una fuente primaria sesgada.", correcta: false, explicacion: "Las fuentes primarias parciales tienen gran valor para conocer la postura de quien habla." },
              { texto: "Es demasiado antigua para explicar lo que ocurrió en el juicio de 1964.", correcta: false, explicacion: "Es del propio juicio de 1964: contemporánea, no «antigua»." }
            ] },
          { pregunta: "El valor típico de la foto de Sharpeville (Berry) reside en que…", etiqueta: "concepto",
            opciones: [
              { texto: "Es evidencia visual inmediata de la masacre (disparos por la espalda).", correcta: true, explicacion: "Correcto: el valor se ancla en el origen (fotoperiodista presente ese día)." },
              { texto: "Explica con detalle las decisiones policiales que condujeron a abrir fuego.", correcta: false, explicacion: "Eso es justamente lo que la foto NO muestra: es su limitación." },
              { texto: "Demuestra que la multitud era violenta y había provocado a la policía.", correcta: false, explicacion: "La foto no muestra el antes; no prueba provocación." },
              { texto: "Prueba el número exacto de manifestantes presentes esa mañana en Sharpeville.", correcta: false, explicacion: "Un instante congelado no permite contar la multitud: es su límite." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Comparar y contrastar (pregunta 3)",
        html: `
          <p>La pregunta 3 pide semejanzas Y diferencias entre dos fuentes, integradas (nunca resumir una y después la otra). El tema ofrece contrastes naturales.</p>

          <h3>Los contrastes más jugosos</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Fuente A</th><th>Fuente B</th></tr></thead>
            <tbody>
              <tr><td>Estado vs. resistencia</td><td>Discurso de Verwoerd / texto de una ley (visión oficial).</td><td>Carta de la Libertad / discurso de Rivonia (visión del movimiento).</td></tr>
              <tr><td>No violencia vs. lucha armada</td><td>Carta de la Libertad (1955, programa pacífico y no racial).</td><td>Manifiesto de MK (1961, «someterse o luchar»).</td></tr>
              <tr><td>ANC vs. PAC</td><td>Fuente del ANC (multirracial, Carta, brazo armado MK).</td><td>Fuente del PAC (africanista, Sobukwe, organizó Sharpeville).</td></tr>
              <tr><td>Contemporánea vs. retrospectiva</td><td>Foto de Berry / discurso de 1964 (inmediatez).</td><td>Cita de Posel o Lodge (perspectiva de conjunto).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Estructura de la respuesta 3: un bloque de <b>semejanzas</b> («ambas fuentes coinciden en que…; de modo similar, la Fuente D también…») y un bloque de <b>diferencias</b> («mientras que la Fuente C atribuye…, la Fuente D sostiene…»). Apuntá a ≈3 semejanzas + 3 diferencias, siempre con las dos fuentes en la misma frase. Nada de OPCVL acá.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Ambas fuentes coinciden en rechazar el apartheid y en reclamar derechos para la población africana; sin embargo, difieren en el método: mientras que la Carta de la Libertad (Fuente C) propone una Sudáfrica no racial por la vía del programa y la movilización pacífica, el manifiesto de MK (Fuente D) sostiene que, cerrada la vía legal, solo quedaba "someterse o luchar".»</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> La Carta de la Libertad (1955) y el manifiesto de MK (1961) no representan dos ANC distintos sino dos momentos del mismo: el ANC de la no violencia respetable que construyó un programa, y el ANC que, con esa vía cerrada tras Sharpeville, pasó al sabotaje. Ese marco ordena cualquier comparación entre una fuente pacífica y una del giro armado.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No describas una fuente en un párrafo y la otra en otro: eso es «resumir», no «comparar». Tampoco des solo semejanzas o solo diferencias: la pregunta pide ambas, integradas con conectores (ambas / de modo similar / mientras que / a diferencia de).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se estructura bien una respuesta de «comparar y contrastar»?", etiqueta: "concepto",
            opciones: [
              { texto: "Semejanzas y diferencias integradas, con las dos fuentes en cada frase.", correcta: true, explicacion: "Correcto: nunca resumir una y después la otra en bloques separados." },
              { texto: "Resumiendo primero toda la Fuente C y a continuación toda la Fuente D por separado.", correcta: false, explicacion: "Eso es resumir, no comparar: no obtiene la banda alta." },
              { texto: "Enumerando solo las diferencias, porque las semejanzas no cuentan en la pregunta 3.", correcta: false, explicacion: "La pregunta pide semejanzas Y diferencias." },
              { texto: "Evaluando el valor y la limitación de cada una de las dos fuentes comparadas.", correcta: false, explicacion: "Eso es la pregunta 2 (OPCVL), no la 3; acá no va OPCVL." }
            ] },
          { pregunta: "El contraste Carta de la Libertad (C) vs. manifiesto de MK (D) se resume mejor como…", etiqueta: "concepto",
            opciones: [
              { texto: "Coinciden en rechazar el apartheid; difieren en el método (pacífico vs. sabotaje).", correcta: true, explicacion: "Correcto: dos momentos del mismo ANC, antes y después del cierre de la vía legal." },
              { texto: "Son idénticas entre sí: las dos llaman a la lucha armada inmediata contra el gobierno de Verwoerd.", correcta: false, explicacion: "La Carta (1955) es un programa pacífico y no racial, no un llamado a las armas." },
              { texto: "Difieren en todo y no comparten ningún objetivo común contra el apartheid.", correcta: false, explicacion: "Comparten el rechazo al apartheid y el reclamo de derechos africanos." },
              { texto: "C defiende el africanismo del PAC y D defiende el multirracialismo del ANC.", correcta: false, explicacion: "Las dos son del ANC multirracial; el contraste es método, no ANC vs. PAC." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · El mini-ensayo (pregunta 4) con fuentes + conocimiento",
        html: `
          <p>La pregunta 4 (9 puntos, la de más peso) pide responder usando <b>las cuatro fuentes</b> + tu <b>conocimiento propio</b>. Es un mini-ensayo (~330 palabras), no un ensayo largo de Paper 3. Acá entran los historiadores.</p>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Estructura: (1) tesis en una oración, sin fuentes; (2–4) tres párrafos que <b>tejen</b> fuentes («la Fuente B muestra… lo que mi conocimiento confirma con [dato con fecha/cifra]») y las contrastan; (5) conclusión con juicio. Cada párrafo usa una fuente + conocimiento propio, nombra la fuente por su letra y comenta su limitación en media oración cuando hace falta.</p></div>

          <h3>Checklist del párrafo de la pregunta 4</h3>
          <ol class="escalera">
            <li><b>Afirmación</b> que responde la pregunta.</li>
            <li><b>Fuente(s)</b> citada(s) por letra, con lo que aportan.</li>
            <li><b>Conocimiento propio</b>: un dato con fecha o cifra (p. ej. Sharpeville 69 muertos; ANC 7.000→100.000; bantustanes 13% de la tierra para ~70% de la población).</li>
            <li><b>Evaluación</b>: si las fuentes se apoyan o se contradicen, y qué perspectiva pesa más (Posel / Lodge / Ellis).</li>
          </ol>

          <h3>Ejemplo: «Evalúe el impacto de Sharpeville (1960) en el movimiento contra el apartheid»</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Parte</th><th>Qué va</th><th>Fuentes + propio</th></tr></thead>
            <tbody>
              <tr><td>Tesis</td><td>Sharpeville cambió el cómo y el dónde de la lucha: cerró la vía legal, abrió la armada e internacionalizó la causa; pero a corto plazo la debilitó.</td><td>Una oración, sin fuentes.</td></tr>
              <tr><td>Cierre legal</td><td>Estado de emergencia, ilegalización, estado policial.</td><td>Fuente del Estado + 30-III, 8-IV-1960 + 90 días (1963).</td></tr>
              <tr><td>Giro armado</td><td>Del Desafío a MK; «someterse o luchar».</td><td>Manifiesto de MK + stay-at-home 1961 + Lodge; Ellis para matizar.</td></tr>
              <tr><td>Internacional</td><td>Res. 134, fuga de capitales, Commonwealth, Nobel a Luthuli.</td><td>Foto de Berry (la imagen que dio la vuelta al mundo) + datos.</td></tr>
              <tr><td>Conclusión</td><td>Impacto decisivo pero paradójico: fortaleció la causa y destruyó la organización (Rivonia).</td><td>Vuelta a la tesis.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La Fuente A, la fotografía de Berry, recorrió el mundo y, aunque solo captura un instante, dio al apartheid una imagen que la propaganda de "buena vecindad" no pudo borrar: la Resolución 134 de la ONU, la fuga de capitales, la salida de la Commonwealth en 1961 y el Nobel a Luthuli son sus consecuencias directas.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Para el juicio final, enfrentá perspectivas: sobre el giro armado, Lodge (MK fracasó como guerra pero triunfó como mensaje) vs. Ellis (la iniciativa fue del SACP, no de Mandela). Sobre la «naturaleza» del apartheid, Posel (improvisación y compromiso) vs. la visión tradicional (plan coherente de Verwoerd). Elegir una perspectiva y justificarla es lo que sube la banda.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Dos errores que hunden la pregunta 4: (1) escribir un ensayo sin nombrar «Fuente A/B/C/D»; (2) parafrasear las fuentes sin sumar conocimiento propio. La banda alta exige las dos cosas tejidas, y una sola cita de historiador bien usada vale más que tres mal pegadas.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué exige la banda alta en la pregunta 4 (mini-ensayo)?", etiqueta: "concepto",
            opciones: [
              { texto: "Tejer las cuatro fuentes con conocimiento propio y evaluar las perspectivas.", correcta: true, explicacion: "Correcto: citar fuentes por letra + datos externos con fecha/cifra + juicio." },
              { texto: "Narrar toda la historia del apartheid sin necesidad de citar las fuentes dadas.", correcta: false, explicacion: "Ignorar las fuentes hunde la banda." },
              { texto: "Parafrasear las cuatro fuentes una por una sin añadir ningún dato externo.", correcta: false, explicacion: "Falta el conocimiento propio: no basta con las fuentes." },
              { texto: "Elegir la fuente más fiable y responder solo con ella, descartando las demás.", correcta: false, explicacion: "Hay que usar las cuatro fuentes, no una sola." }
            ] },
          { pregunta: "Para «evalúe el impacto de Sharpeville», el juicio equilibrado es…", etiqueta: "historiador",
            opciones: [
              { texto: "Impacto decisivo pero paradójico: fortaleció la causa y destruyó la organización.", correcta: true, explicacion: "Correcto: cerró la vía legal, internacionalizó la causa, pero llevó a Rivonia." },
              { texto: "No tuvo ningún impacto real, ya que el movimiento siguió funcionando tan legalmente como antes.", correcta: false, explicacion: "Al contrario: tras Sharpeville el ANC y el PAC fueron ilegalizados." },
              { texto: "Su único efecto fue militar: MK derrotó al Estado con la Operación Mayibuye.", correcta: false, explicacion: "MK fue militarmente irrelevante; su valor fue simbólico (Lodge)." },
              { texto: "Fortaleció al gobierno sin ninguna consecuencia internacional negativa para él.", correcta: false, explicacion: "Trajo la Res. 134 de la ONU, fuga de capitales y salida de la Commonwealth." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "OPCVL", dorso: "Origen, Propósito, Contenido, Valor y Limitación: el esquema para evaluar una fuente (pregunta 2 de Paper 1)." },
    { id: "fc02", categoria: "concepto", frente: "¿De dónde sale el valor de una fuente?", dorso: "De su origen y propósito concretos: qué permite saber por haber sido producida por quien fue, cuándo y para qué." },
    { id: "fc03", categoria: "concepto", frente: "¿De dónde sale la limitación?", dorso: "Del mismo origen y propósito: qué deja afuera o sesga. Nunca «es parcial, no sirve» ni «primaria = valiosa»." },
    { id: "fc04", categoria: "concepto", frente: "Comparar y contrastar (pregunta 3)", dorso: "Semejanzas Y diferencias entre dos fuentes, integradas, con las dos en cada frase. Nunca en bloques separados. Sin OPCVL." },
    { id: "fc05", categoria: "concepto", frente: "Mini-ensayo (pregunta 4)", dorso: "Responder usando las 4 fuentes + conocimiento propio; citar cada fuente por letra, sumar datos externos y evaluar perspectivas." },
    { id: "fc06", categoria: "concepto", frente: "Petty vs. grand apartheid", dorso: "Petty = separación cotidiana (matrimonio, baños, pases). Grand = separación territorial y política (bantustanes, ciudadanía, voto)." },
    { id: "fc07", categoria: "concepto", frente: "ANC vs. PAC", dorso: "ANC: multirracial, Carta de la Libertad, brazo armado MK. PAC: africanista (Sobukwe), «África para los africanos», organizó Sharpeville, brazo Poqo." },
    { id: "fc08", categoria: "fecha", frente: "26-V-1948", dorso: "El Partido Nacional (Malan) gana las elecciones con la bandera del «apartheid». Comienza la era." },
    { id: "fc09", categoria: "fecha", frente: "1950", dorso: "Las leyes madre: Registro de Población, Áreas de Grupo, Inmoralidad y Supresión del Comunismo." },
    { id: "fc10", categoria: "fecha", frente: "26-VI-1952", dorso: "Campaña de Desafío (ANC + Congreso Indio): ~8.500 arrestos; el ANC pasa de 7.000 a 100.000 miembros." },
    { id: "fc11", categoria: "fecha", frente: "1953", dorso: "Educación Bantú (Verwoerd): el Estado toma las escuelas; currículo para formar mano de obra. Fuente estrella: su discurso." },
    { id: "fc12", categoria: "fecha", frente: "25-26-VI-1955", dorso: "Congreso del Pueblo en Kliptown: se adopta la Carta de la Libertad («Sudáfrica pertenece a todos los que viven en ella»)." },
    { id: "fc13", categoria: "fecha", frente: "1956", dorso: "20.000 mujeres marchan contra los pases (9-VIII); Juicio por Traición: 156 acusados (todos absueltos en 1961)." },
    { id: "fc14", categoria: "fecha", frente: "1957", dorso: "Boicot de buses de Alexandra («Azikwelwa»): victoria local, organizada desde comités de base, no por el ANC central." },
    { id: "fc15", categoria: "fecha", frente: "21-III-1960", dorso: "Sharpeville: campaña anti-pases del PAC; la policía dispara: 69 muertos, ~180 heridos, la mayoría por la espalda." },
    { id: "fc16", categoria: "fecha", frente: "8-IV-1960", dorso: "ANC y PAC ilegalizados (Ley de Organizaciones Ilegales). Res. 134 de la ONU; Nobel de la Paz a Luthuli (1960)." },
    { id: "fc17", categoria: "fecha", frente: "16-XII-1961", dorso: "Primeros sabotajes de Umkhonto we Sizwe (MK), seis días después del Nobel de Luthuli. Manifiesto: «someterse o luchar»." },
    { id: "fc18", categoria: "fecha", frente: "11-VII-1963", dorso: "Redada de Liliesleaf Farm (Rivonia): cae el alto mando de MK y el plan «Operación Mayibuye»." },
    { id: "fc19", categoria: "fecha", frente: "12-VI-1964", dorso: "Sentencia de Rivonia: ocho cadenas perpetuas (Mandela, Sisulu, Mbeki…). Robben Island. Cierra el período." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué el ANC pasó a la lucha armada?", dorso: "Se cerró la vía legal (ilegalización 1960), Sharpeville mostró que el Estado mataba, fracasó el stay-at-home de 1961, presión desde abajo y el SACP." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "Balance de MK (para la pregunta 4)", dorso: "Militarmente irrelevante (destruido en 1964), pero simbólicamente decisivo: «propaganda del hecho» (Lodge)." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "Impacto de Sharpeville", dorso: "Cierra la vía legal (ilegalización), internacionaliza la causa (Res. 134, Commonwealth, Nobel) y empuja a la lucha armada." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "Balance de la Campaña de Desafío", dorso: "Fracaso de objetivos (ninguna ley cambió), éxito de organización (ANC 7.000→100.000; Luthuli presidente). Lodge." },
    { id: "fc24", categoria: "concepto", frente: "Las tres bisagras del período", dorso: "1952 (masas) · 1960 (Sharpeville: cierre de la vía legal) · 1964 (Rivonia: cierre de la vía armada interna)." },
    { id: "fc25", categoria: "historiador", frente: "Posel (para fuentes)", dorso: "La «naturaleza» del apartheid: no un plan maestro de 1948 sino conflicto y compromiso (puristas vs. prácticos); gran apartheid post-1959." },
    { id: "fc26", categoria: "historiador", frente: "Lodge (para fuentes)", dorso: "La historia desde la resistencia: Desafío creó masas; buses nacieron de base; Sharpeville es el quiebre; MK triunfó como mensaje." },
    { id: "fc27", categoria: "historiador", frente: "Ellis (regalo, para la OPCVL)", dorso: "La iniciativa armada fue del SACP (dic. 1960) y Mandela era del comité central; útil para la OPCVL del discurso de Rivonia." },
    { id: "fc28", categoria: "concepto", frente: "Tipos de fuente del tema", dorso: "Discurso (Verwoerd, Mandela), documento (ley, Carta de la Libertad), foto (Sharpeville de Berry), cita de historiador (Posel, Lodge)." },
    { id: "fc29", categoria: "concepto", frente: "Las cuatro trampas del Paper 1", dorso: "(1) «parcial = no sirve»; (2) «primaria = valiosa»; (3) describir fuentes por separado en la Q3; (4) Q4 sin nombrar fuentes o sin conocimiento propio." },
    { id: "fc30", categoria: "causa-consecuencia", frente: "«Dos momentos del mismo ANC»", dorso: "Carta de la Libertad (1955, no violencia) y manifiesto de MK (1961, lucha armada): el ANC antes y después del cierre de la vía legal." }
  ],

  /* ===================== QUIZ (global del tema, enfoque fuentes) ===================== */
  quiz: [
    { pregunta: "En Paper 1, la pregunta de «valor y limitación» se resuelve con…", etiqueta: "concepto",
      opciones: [
        { texto: "El esquema OPCVL: anclar valor y límite en el origen y el propósito.", correcta: true, explicacion: "Correcto: no en «fiabilidad» abstracta sino en qué revela y qué omite la fuente." },
        { texto: "Un juicio sobre si la fuente es verdadera o falsa respecto de los hechos históricos.", correcta: false, explicacion: "No se evalúa «verdad/falsedad» sino valor y límite según origen y propósito." },
        { texto: "La comparación de la fuente con las otras tres fuentes del examen.", correcta: false, explicacion: "Eso es la pregunta 3 (comparar), no la 2 (OPCVL)." },
        { texto: "Un resumen del contenido de la fuente sin ninguna evaluación.", correcta: false, explicacion: "Resumir no es evaluar; falta el valor y la limitación." }
      ] },
    { pregunta: "¿Cuál es la limitación típica de una foto como la de Sharpeville?", etiqueta: "concepto",
      opciones: [
        { texto: "Congela un instante; no muestra el antes ni las decisiones policiales.", correcta: true, explicacion: "Correcto: el límite se ancla en el tipo de fuente (foto)." },
        { texto: "Siempre es falsa porque las fotos de prensa se manipulaban en los años sesenta.", correcta: false, explicacion: "No se asume falsedad; el límite es el instante congelado." },
        { texto: "No sirve para nada porque solo los documentos escritos tienen valor histórico.", correcta: false, explicacion: "Las fotos tienen gran valor; la de Berry fue decisiva a nivel internacional." },
        { texto: "Es demasiado subjetiva para usarla en un examen de historia del IB.", correcta: false, explicacion: "Toda fuente tiene perspectiva; eso no la invalida." }
      ] },
    { pregunta: "¿Cómo debe estructurarse una respuesta de «comparar y contrastar»?", etiqueta: "concepto",
      opciones: [
        { texto: "Semejanzas y diferencias con las dos fuentes en cada frase.", correcta: true, explicacion: "Correcto: nunca describir una y luego la otra en bloques." },
        { texto: "Describiendo la Fuente C en un párrafo entero y la D en el siguiente.", correcta: false, explicacion: "Eso es resumir, no comparar." },
        { texto: "Dando solo las diferencias, porque las semejanzas no otorgan puntos.", correcta: false, explicacion: "La pregunta pide semejanzas Y diferencias." },
        { texto: "Eligiendo la fuente más valiosa y explicando por qué la otra sobra.", correcta: false, explicacion: "Eso sería OPCVL (pregunta 2), no comparar." }
      ] },
    { pregunta: "¿Qué estableció la Campaña de Desafío (1952) según el balance de Lodge?", etiqueta: "historiador",
      opciones: [
        { texto: "Fracaso de objetivos, éxito de organización: ninguna ley cambió, pero el ANC creció.", correcta: true, explicacion: "Correcto: el ANC pasó de 7.000 a 100.000 miembros; Luthuli presidente." },
        { texto: "La derogación inmediata de todas las leyes de pases en el conjunto del territorio de Sudáfrica.", correcta: false, explicacion: "No cambió ninguna ley: el PN incluso ganó más bancas en 1953." },
        { texto: "El fin de la clasificación racial creada por el Registro de Población de 1950.", correcta: false, explicacion: "El Registro siguió vigente; la Campaña no lo tocó." },
        { texto: "El traspaso del liderazgo del ANC a los africanistas que luego fundaron el PAC.", correcta: false, explicacion: "El PAC se escindió recién en 1959, no por la Campaña de Desafío." }
      ] },
    { pregunta: "La foto de Sharpeville (Ian Berry) tuvo tanto peso porque…", etiqueta: "historiador",
      opciones: [
        { texto: "Mostró la masacre al mundo y ayudó a internacionalizar la causa anti-apartheid.", correcta: true, explicacion: "Correcto: Res. 134 de la ONU, fuga de capitales, salida de la Commonwealth." },
        { texto: "Fue la primera fotografía a color jamás publicada en la prensa sudafricana de la época.", correcta: false, explicacion: "No es el motivo; el peso vino del impacto político-internacional." },
        { texto: "Mostraba a Nelson Mandela liderando personalmente la protesta anti-pases.", correcta: false, explicacion: "Sharpeville fue del PAC (Sobukwe), no del ANC de Mandela." },
        { texto: "Fue tomada por el propio gobierno sudafricano como propaganda oficial.", correcta: false, explicacion: "La tomó Ian Berry, fotoperiodista de Drum, no el gobierno." }
      ] },
    { pregunta: "¿Qué contraste representan la Carta de la Libertad y el manifiesto de MK?", etiqueta: "concepto",
      opciones: [
        { texto: "No violencia y programa no racial vs. lucha armada tras cerrarse la vía legal.", correcta: true, explicacion: "Correcto: dos momentos del mismo ANC (1955 vs. 1961)." },
        { texto: "El africanismo radical del PAC de Sobukwe frente al multirracialismo del Congreso Indio Sudafricano.", correcta: false, explicacion: "Ambos documentos son del ANC multirracial; el eje es el método." },
        { texto: "Defensa del gobierno de Malan vs. defensa del gobierno de Verwoerd.", correcta: false, explicacion: "Ninguno defiende al gobierno: ambos lo combaten." },
        { texto: "Ideología comunista pura vs. ideología liberal pro-mercado capitalista.", correcta: false, explicacion: "No es ese el eje; el contraste es no violencia vs. sabotaje." }
      ] },
    { pregunta: "En la pregunta 4 (mini-ensayo), ¿qué hay que combinar?", etiqueta: "concepto",
      opciones: [
        { texto: "Las cuatro fuentes y el conocimiento propio, evaluando perspectivas.", correcta: true, explicacion: "Correcto: tejer fuentes + datos externos + juicio con historiadores." },
        { texto: "Solo las fuentes, parafraseadas una por una sin añadir contexto externo.", correcta: false, explicacion: "Falta el conocimiento propio: no basta con las fuentes." },
        { texto: "Solo el conocimiento propio, narrando la historia sin citar las fuentes.", correcta: false, explicacion: "Ignorar las fuentes hunde la banda." },
        { texto: "Una sola fuente, la más fiable, descartando las otras tres por sesgadas.", correcta: false, explicacion: "Hay que usar las cuatro fuentes." }
      ] },
    { pregunta: "¿Por qué el boicot de buses de Alexandra (1957) fue una «victoria rara»?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Los empleadores terminaron subsidiando la tarifa: volvió a 4 peniques.", correcta: true, explicacion: "Correcto: mostró el poder económico de la población negra." },
        { texto: "El gobierno de Verwoerd derogó las leyes de pases para calmar a los manifestantes.", correcta: false, explicacion: "Los pases siguieron; la victoria fue solo sobre la tarifa, no política." },
        { texto: "El ANC central organizó la protesta y negoció directamente con el Estado.", correcta: false, explicacion: "Nació de comités locales, no del ANC central (Lodge)." },
        { texto: "La Corte declaró inconstitucional la segregación en el transporte urbano.", correcta: false, explicacion: "No hubo fallo: la salió a tarifa subsidiada por los empleadores." }
      ] },
    { pregunta: "¿Qué pasó el 8 de abril de 1960, tras Sharpeville?", etiqueta: "fecha",
      opciones: [
        { texto: "Se ilegalizaron el ANC y el PAC (Ley de Organizaciones Ilegales).", correcta: true, explicacion: "Correcto: cierre de la vía legal; el ANC fue prohibido «de rebote»." },
        { texto: "Se adoptó la Carta de la Libertad en el Congreso del Pueblo de Kliptown.", correcta: false, explicacion: "La Carta fue en 1955, no en 1960." },
        { texto: "Se condenó a Mandela a cadena perpetua en el Juicio de Rivonia.", correcta: false, explicacion: "Eso fue el 12-VI-1964." },
        { texto: "Verwoerd fue asesinado en el Parlamento por un ujier.", correcta: false, explicacion: "El 9-IV-1960 hubo un atentado, pero Verwoerd sobrevivió; su asesinato fue en 1966." }
      ] },
    { pregunta: "Para contextualizar una fuente sobre la «naturaleza» del apartheid, conviene citar a…", etiqueta: "historiador",
      opciones: [
        { texto: "Posel: se armó a los tumbos, no fue un plan maestro de 1948.", correcta: true, explicacion: "Correcto: conflicto y compromiso entre puristas y prácticos." },
        { texto: "Lodge, porque sostiene que el apartheid lo diseñó entero Verwoerd en 1948.", correcta: false, explicacion: "Esa es la visión tradicional, no la de Lodge; Lodge mira la resistencia." },
        { texto: "Ellis, porque documenta que el apartheid fue una decisión del SACP.", correcta: false, explicacion: "Ellis trata la lucha armada del movimiento, no el diseño del apartheid." },
        { texto: "Malan, porque como primer ministro explicó el plan completo del apartheid.", correcta: false, explicacion: "Malan es un actor histórico, no un historiador." }
      ] },
    { pregunta: "¿Cómo juzga Lodge el balance de MK (lucha armada)?", etiqueta: "historiador",
      opciones: [
        { texto: "Militarmente débil, pero simbólicamente eficaz: «propaganda del hecho».", correcta: true, explicacion: "Correcto: demostró que la resistencia seguía viva tras la prohibición." },
        { texto: "Una victoria militar total que obligó al gobierno a negociar en 1964.", correcta: false, explicacion: "MK fue militarmente irrelevante; en 1964 estaba destruido." },
        { texto: "Una traición al principio no violento que hizo fracasar al movimiento entero.", correcta: false, explicacion: "Lodge no lo lee así: ve el valor simbólico del sabotaje." },
        { texto: "Un invento de la prensa sin ningún sabotaje real contra el Estado.", correcta: false, explicacion: "Hubo ~200 sabotajes reales en 18 meses." }
      ] },
    { pregunta: "¿Por qué el discurso de Rivonia minimiza el vínculo de Mandela con el SACP?", etiqueta: "historiador",
      opciones: [
        { texto: "Porque es una autodefensa ante un tribunal que podía condenarlo a muerte.", correcta: true, explicacion: "Correcto: su propósito explica el sesgo; Ellis documenta ese vínculo." },
        { texto: "Porque Mandela nunca tuvo ninguna relación con el comunismo ni con el SACP.", correcta: false, explicacion: "Ellis sostiene que era del comité central del SACP; por eso el silencio llama la atención." },
        { texto: "Porque el SACP ya se había disuelto del todo y no existía en 1964.", correcta: false, explicacion: "El SACP operaba clandestino desde 1953; seguía activo." },
        { texto: "Porque el tribunal le prohibió expresamente mencionar al Partido Comunista.", correcta: false, explicacion: "No fue una prohibición del tribunal: fue una decisión estratégica de defensa." }
      ] }
  ],

  /* ===================== PLANIFICADOR (orientado a destrezas de Paper 1) ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Pregunta 1a (comprensión) · ¿Qué dice la Fuente [X] sobre [un hito]?", frecuencia: "Muy alta",
        plan: "3 ideas distintas del texto, parafraseadas (no copiadas). 3 puntos = 3 oraciones cortas. No analices ni agregues conocimiento propio." },
      { pregunta: "Pregunta 1b (visual) · ¿Cuál es el mensaje de la foto/caricatura/afiche?", frecuencia: "Muy alta",
        plan: "2 mensajes. Describí el detalle visual + lo que significa (p. ej. la foto de Sharpeville transmite la brutalidad del Estado y la indefensión de la multitud que huye)." },
      { pregunta: "Pregunta 2 (OPCVL) · Con referencia a origen, propósito y contenido, analice el valor y las limitaciones de la Fuente [X].", frecuencia: "Muy alta",
        plan: "2 valores + 2 limitaciones, cada uno anclado en O, P o C. Un párrafo de valor y uno de limitación; nunca «parcial = no sirve»." },
      { pregunta: "Pregunta 3 (comparar y contrastar) · Compare y contraste lo que revelan las Fuentes [C] y [D] sobre…", frecuencia: "Muy alta",
        plan: "≈3 semejanzas + 3 diferencias, integradas, con las dos fuentes en cada frase. Usá contrastes del tema (Estado vs. resistencia; Carta vs. MK; ANC vs. PAC). Sin OPCVL." },
      { pregunta: "Pregunta 4 (mini-ensayo) · Usando las fuentes y sus conocimientos, evalúe / discuta / ¿en qué medida…?", frecuencia: "Muy alta",
        plan: "Tesis + 3 párrafos que tejen las 4 fuentes con conocimiento propio + conclusión. Citá cada fuente por letra; usá un historiador (Posel / Lodge / Ellis)." }
    ],
    planes: [
      { titulo: "Plan A · Pregunta 2 (OPCVL) · El discurso de Mandela en Rivonia (1964)",
        tesis: "El valor y la limitación salen del origen (acusado en juicio, 1964) y del propósito (justificar el giro armado ante el tribunal y el mundo).",
        pasos: [
          "Origen: discurso del acusado n.º 1 (Mandela) ante el tribunal de Rivonia, 20-IV-1964, con pena de muerte posible.",
          "Propósito: justificar por qué el ANC pasó a la lucha armada y ser visto como luchador moral.",
          "Valor: explicación de primera mano del giro armado; muestra cómo el ANC quería presentarse.",
          "Limitación: autojustificación que minimiza el vínculo con el SACP (que Ellis documenta) y presenta el sabotaje como último recurso controlado.",
          "Cierre: una frase que combine valor y límite anclados en el origen y el propósito."
        ] },
      { titulo: "Plan B · Pregunta 3 · Comparar la Carta de la Libertad (1955) y el manifiesto de MK (1961)",
        tesis: "Coinciden en rechazar el apartheid y reclamar derechos africanos; difieren en el método (programa pacífico vs. sabotaje).",
        pasos: [
          "Semejanza 1: ambas rechazan el apartheid y reclaman derechos para la población africana.",
          "Semejanza 2: ambas son documentos del movimiento (el ANC y su alianza) dirigidos a movilizar.",
          "Diferencia 1 (método): la Carta propone una Sudáfrica no racial por vía pacífica; MK dice «someterse o luchar».",
          "Diferencia 2 (momento): la Carta es de la fase legal (1955); MK es posterior al cierre de la vía legal (1961, tras Sharpeville).",
          "Cierre: «dos momentos del mismo ANC» (marco DE CLASE)."
        ] },
      { titulo: "Plan C · Pregunta 4 · «Evalúe el impacto de Sharpeville (1960) en el movimiento»",
        tesis: "Impacto decisivo pero paradójico: cerró la vía legal, abrió la armada e internacionalizó la causa, pero a corto plazo debilitó la organización.",
        pasos: [
          "Cierre legal con fuentes: una fuente del Estado muestra la represión; conocimiento: estado de emergencia (30-III), ilegalización (8-IV), 90 días (1963).",
          "Giro armado con fuentes: el manifiesto de MK («someterse o luchar»); conocimiento: fracaso del stay-at-home de 1961; Lodge (MK como mensaje).",
          "Internacionalización con fuentes: la foto de Berry; conocimiento: Res. 134 de la ONU, fuga de capitales, salida de la Commonwealth, Nobel a Luthuli.",
          "Perspectivas: Lodge (Sharpeville es el quiebre) vs. Ellis (la decisión armada ya venía del SACP).",
          "Conclusión: fortaleció la causa y destruyó la organización interna (Rivonia, 1964)."
        ] },
      { titulo: "Plan D · Pregunta 4 · «¿Fue el apartheid un plan maestro desde 1948?» (con fuentes)",
        tesis: "Más que un plan acabado, fue un proceso de conflicto y compromiso; el «gran apartheid» de los bantustanes es una segunda fase (post-1959).",
        pasos: [
          "A favor del «plan» con fuentes: un discurso de Verwoerd o una ley muestra una ideología coherente; conocimiento: Registro 1950 → bantustanes 1959.",
          "En contra con fuentes: una fuente oficial de «buena vecindad» choca con la realidad; Posel: puristas vs. prácticos, improvisación.",
          "Matiz cronológico: las leyes de los 50 son negociación; el gran apartheid se consolida con Verwoerd después de 1959.",
          "Perspectivas: Posel (a los tumbos) vs. la visión tradicional/propaganda del PN (sistema coherente).",
          "Conclusión: hubo una dirección ideológica, pero se construyó por etapas y compromisos, no por un plano único de 1948."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Modelo pregunta 2 · Valor y limitación del discurso de Verwoerd sobre educación bantú (1953–54)",
        parrafos: [
          { texto: "Esta fuente es un discurso de Hendrik Verwoerd, ministro de Asuntos Nativos, pronunciado en 1953–54 ante el Senado con el propósito de justificar la Ley de Educación Bantú.", nota: "Origen y propósito primero: quién, qué tipo de fuente, cuándo y para qué." },
          { texto: "Su valor reside precisamente en ese origen y propósito: al provenir del propio arquitecto de la ley y buscar defenderla, revela sin filtro la ideología del apartheid educativo —«no hay lugar para el bantú en la comunidad europea por encima de ciertas formas de trabajo»—, lo que permite entender la intención deliberada de formar mano de obra y no ciudadanos.", nota: "Valor anclado en el origen (el ministro autor de la ley) y el propósito (justificarla)." },
          { texto: "Su limitación, derivada del mismo origen, es que un discurso oficial dice lo que el Estado quería, no lo que pasó en la práctica: no muestra el efecto real en las aulas (un chico africano recibía ~1/10 del gasto por alumno blanco) ni la resistencia que provocó, como el boicot escolar del ANC de 1955.", nota: "Límite anclado en el carácter oficial de la fuente; se apoya en conocimiento propio." },
          { texto: "En suma, como fuente oficial tiene gran valor para conocer la ideología y la intención de la ley, pero su limitación es que, por ser un discurso de justificación, no evidencia la brecha entre el propósito declarado y sus consecuencias sociales.", nota: "Cierre que combina valor y límite sin repetir; evaluación equilibrada." }
        ] },
      { titulo: "Modelo pregunta 4 · «Evalúe el impacto de Sharpeville (1960) en el movimiento contra el apartheid»",
        parrafos: [
          { texto: "La masacre de Sharpeville fue el punto de inflexión del período: no porque creara la oposición al apartheid, sino porque cambió sus métodos, su escenario y su público. A corto plazo debilitó al movimiento; a mediano plazo lo transformó.", nota: "Tesis clara en la mini-intro, sin fuentes." },
          { texto: "En primer lugar, Sharpeville cerró la vía legal. Una fuente oficial del Estado muestra la lógica represiva, y mi conocimiento lo confirma: el estado de emergencia del 30 de marzo y la ilegalización del ANC y el PAC el 8 de abril de 1960, consolidados por la detención de 90 días en 1963, dejaron sin ningún canal permitido a un movimiento que llevaba ocho años de protesta legal.", nota: "Fuente citada + conocimiento propio con fechas." },
          { texto: "En segundo lugar, empujó al movimiento a la lucha armada e internacionalizó la causa. El manifiesto de MK (Fuente [X]) lo dice sin rodeos —«someterse o luchar»—, y la foto de Berry (Fuente [Y]) dio al apartheid una imagen mundial que trajo la Resolución 134 de la ONU, la fuga de capitales y la salida de la Commonwealth. Como sostiene Lodge, MK fue militarmente débil pero simbólicamente eficaz; cabe matizar con Ellis que el SACP ya había optado por las armas a fines de 1960, de modo que Sharpeville aceleró una decisión más que crearla.", nota: "Dos fuentes + dos historiadores (Lodge, Ellis) para evaluar perspectivas." },
          { texto: "En conclusión, el impacto de Sharpeville fue decisivo pero paradójico: fortaleció la legitimidad internacional de la causa y cambió su estrategia, pero en 1964, con Rivonia, el movimiento interno estaba destruido. Ganó el argumento y perdió la organización.", nota: "Conclusión con juicio, tejiendo fuentes y conocimiento." }
        ] }
    ],
    guia: {
      tesis: "En Paper 1 no hay una «tesis maestra» de ensayo largo: hay una destreza por pregunta. La regla de oro es anclar siempre valor y límite en el origen y el propósito (pregunta 2), y en la pregunta 4 tejer las cuatro fuentes + conocimiento propio con un historiador bien usado.",
      argumentos: [
        "Pregunta 1a: parafraseá 3 puntos distintos del mensaje (no copies ni analices).",
        "Pregunta 1b: 2 mensajes de la imagen: detalle visual + lo que significa.",
        "Pregunta 2 (OPCVL): Origen → Propósito → Contenido → Valor → Limitación, cada uno anclado en el origen/propósito concreto.",
        "Pregunta 3: ≈3 semejanzas Y 3 diferencias, integradas, con las dos fuentes en cada frase; nunca en bloques. Sin OPCVL.",
        "Pregunta 4: las cuatro fuentes + conocimiento propio + evaluación de perspectivas, en tesis + 3 párrafos + conclusión."
      ],
      evidencia: [
        "Hitos para fechar fuentes: 26-V-1948 (PN gana), 1950 (leyes madre), 26-VI-1952 (Desafío), 1955 (Carta + Sophiatown), 1956 (Juicio por Traición), 1957 (buses), 21-III-1960 (Sharpeville), 8-IV-1960 (ilegalización), 16-XII-1961 (MK), 11-VII-1963 (Rivonia), 12-VI-1964 (perpetuas).",
        "Cifras de conocimiento propio: ~8.500 arrestos (Desafío), ANC 7.000→100.000, 156 acusados (traición), 69 muertos / ~180 heridos (Sharpeville), ~200 sabotajes de MK, bantustanes 13% de la tierra para ~70% de la población.",
        "Fechas espejo para ubicar fuentes: Nobel de Luthuli (10-XII-1961) y primeros sabotajes de MK (16-XII-1961): seis días; VRA del apartheid: la secuencia Sharpeville (21-III) → ilegalización (8-IV) → Res. 134 (1-IV) de 1960."
      ],
      historiografia: [
        "Para contextualizar fuentes: Posel (naturaleza del apartheid, fuentes oficiales), Lodge (resistencia, protesta y giro armado), Ellis (regalo: OPCVL del discurso de Rivonia y debate sobre quién decidió las armas).",
        "Debates en una línea: ¿el apartheid fue un plan? (Posel: no, improvisación / visión tradicional: sí, Verwoerd). ¿Quién decidió la lucha armada? (Lodge: ANC/Mandela / Ellis: el SACP). ¿Fue MK un fracaso? (Lodge: militar sí, simbólico no / lectura del Estado en 1964: fracaso total).",
        "No cites de adorno: usá al historiador para contextualizar la fuente o para enfrentar perspectivas en la pregunta 4. Una cita bien usada vale más que tres mal pegadas."
      ],
      contraargumento: "En la pregunta 4, reconocé la perspectiva contraria (p. ej. «Rivonia fue una victoria total del gobierno» o «el apartheid fue un plan coherente de Verwoerd») y refutala con el timing y con el balance: el Estado destruyó la organización interna pero perdió la narrativa (Mandela símbolo global, condena mundial); y el apartheid tuvo dirección ideológica pero se construyó por etapas y compromisos (Posel)."
    }
  }
});
