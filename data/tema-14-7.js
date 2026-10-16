/* ============================================================
   tema-14-7.js — 14.7 Teología de la liberación
   Transcripción fiel de la guía Paper 3 del usuario (cap. 5.6 + guía).
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "14.7",
  carpeta: "p3-s14",
  titulo: "Teología de la liberación",
  subtitulo: "Orígenes · Ideas · Expansión · Papel de la Iglesia · Impacto político y social",
  periodo: "América Latina, 1959–1992 (núcleo 1968–1980)",
  estado: "listo",
  etiquetas: ["teología de la liberación", "Medellín", "Gutiérrez", "CEBs", "opción por los pobres", "Nicaragua", "Romero", "Löwy", "Levine"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "No fue ni una importación europea ni un marxismo con sotana: fue la respuesta latinoamericana a cómo ser cristiano en un continente de pobreza estructural. Nace de la convergencia de tres corrientes en los 60 (Vaticano II, dependencia, Cuba), cristaliza en Medellín (1968) y recibe su nombre con Gutiérrez (1971). Su impacto fue importante pero asimétrico: grande en lo eclesial y lo social, indirecto en lo político (salvo Nicaragua), y amplificado por la represión que desató.",
    historiadoresLinea: [
      { nombre: "Löwy", linea: "Impacto GRANDE: hay que hablar de «cristianismo de la liberación», un movimiento social, no sólo una teología; «afinidad electiva» con el marxismo; explica el FSLN y el PT." },
      { nombre: "Levine", linea: "Impacto REAL PERO MODESTO y mediado: las CEBs eran más religiosas que políticas; su alcance dependió de la jerarquía que las protegía o abandonaba." },
      { nombre: "De regalo", linea: "Lernoux (está en tu libro: 850 religiosos reprimidos 1968–79, complicidad de EE. UU.) · Klaiber (la Iglesia defendió DDHH donde estuvo unida y falló donde estuvo dividida)." }
    ],
    datosClave: [
      { grupo: "Orígenes: datos que valen oro", items: [
        "1959 Revolución cubana · 1961 Alianza para el Progreso · 1962–65 Concilio Vaticano II.",
        "1966 muere Camilo Torres (ELN) · 1967 Populorum Progressio · 1967 MSTM (Argentina).",
        "mar 1968 ONIS (Lima) · jul 1968 Gutiérrez en Chimbote · ago-sep 1968 Medellín (CELAM II).",
        "oct 1968 Velasco Alvarado en Perú · 1968 Freire, Pedagogía del oprimido.",
        "1971 Gutiérrez, Teología de la liberación · Cristianos por el Socialismo (Chile).",
        "Mnemotecnia VAPO-CU-DE-ME: Vaticano II · Populorum · Cuba · Dependencia · Medellín."
      ]},
      { grupo: "Expansión y represión: datos que valen oro", items: [
        "CEBs en Brasil: ≈80.000 hacia 1980 (la infraestructura del movimiento).",
        "1972 Boff, Jesucristo liberador · López Trujillo secretario del CELAM (reacción).",
        "1973 golpes Chile/Uruguay, Comité Pro Paz · 1976 Vicaría de la Solidaridad (Chile).",
        "1977 Romero arzobispo + asesinato de Rutilio Grande · Somoza bombardea Solentiname.",
        "19 jul 1979 triunfo sandinista · 24 mar 1980 asesinato de Romero · 2 dic 1980 cuatro misioneras.",
        "1980 PT en Brasil · Documento de Santa Fe · Lernoux: 850 religiosos reprimidos 1968–79."
      ]},
      { grupo: "Reacción vaticana (NO va en preguntas «hasta 1980»)", items: [
        "1979 Puebla (CELAM III, Juan Pablo II): «opción preferencial por los pobres» + clero sin política.",
        "1983 Managua: Juan Pablo II reprende a Ernesto Cardenal (la foto de la ruptura).",
        "1984 Instrucción de Ratzinger (condena el análisis marxista) · 1985 Boff silenciado un año.",
        "1986 segunda Instrucción (Libertatis conscientia), más conciliadora · 1989 masacre UCA.",
        "1990 derrota electoral del FSLN · 1992 Boff deja la orden franciscana (cierre del ciclo)."
      ]}
    ],
    comparacion: [
      { eje: "Tres P (truco maestro)", texto: "Pobres (quién), Praxis (cómo: concientización, CEBs, acción) y Poder (contra quién: oligarquías, dictaduras, EE. UU., Vaticano conservador). Si cada párrafo toca las tres, está equilibrado." },
      { eje: "Desarrollo vs. liberación", texto: "«Desarrollo» = el pobre crece hasta alcanzar al rico (CEPAL, Alianza para el Progreso). «Liberación» = el pobre es pobre porque el rico es rico; hay que cambiar la relación. Ese cambio de palabra es el núcleo." },
      { eje: "Tres niveles de impacto", texto: "Conciencia (social) → organización (CEBs, sindicatos) → poder (Estado). Fuerte en el primero, mediano en el segundo, débil en el tercero salvo Nicaragua. No mezclarlos." },
      { eje: "Iglesia dividida", texto: "No es «la Iglesia frente a la TL» sino «una Iglesia dividida por ella». Tres niveles a distinto ritmo: Vaticano, episcopado (CELAM) y clero de base (siempre va más rápido que sus obispos)." },
      { eje: "Nicaragua: aliada, no motor", texto: "El FSLN es una guerrilla marxista-nacionalista (1961). La TL le aportó cuadros, legitimidad y base social, pero no lo fundó. Única revolución con curas en el gabinete, y ahí la Iglesia se dividió." }
    ],
    veredictos: [
      { titulo: "Fórmula de tesis", texto: "«Importante pero asimétrico»: grande en lo eclesial y lo social, indirecto en lo político (salvo Nicaragua), amplificado por la represión. Cuatro palabras: asimétrico, eclesial, indirecto, amplificado." },
      { titulo: "El argumento de la reacción", texto: "El mejor indicador de su impacto es la coalición que se formó en su contra: oligarquías, ejércitos, el Departamento de Estado y la Congregación para la Doctrina de la Fe rara vez coincidieron en algo. Nadie reprime lo que no importa." },
      { titulo: "Impacto más lento, más duradero", texto: "Medir su impacto sólo por revoluciones es como medir el Concilio por los votos que cambió: su efecto principal fue cultural y organizativo. Romero santo (2018), Francisco recibe a Gutiérrez (2013)." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Michael Löwy", nacionalidad: "Sociólogo marxista franco-brasileño",
      obra: "Guerra de dioses: religión y política en América Latina (1996; trad. 1999)",
      postura: "Impacto grande · «cristianismo de la liberación»",
      funcion: "Orígenes como encuentro izquierda-Iglesia, impacto político grande (Nicaragua, Brasil).",
      ideaCentral: "Hay que hablar de «cristianismo de la liberación», un movimiento social amplio (curas, monjas, laicos, comunidades), no sólo una teología de libros. Entre catolicismo y marxismo hubo una «afinidad electiva» (concepto de Weber): no una infiltración sino un encuentro, porque ambos criticaban éticamente el capitalismo. Es un fenómeno latinoamericano original, no una copia europea. Su impacto político fue decisivo: sin él no se explican ni la revolución sandinista ni el PT brasileño; «por primera vez en la historia un sector importante de la Iglesia se puso del lado de una revolución».",
      matiz: "Escribe desde la simpatía marxista: tiende a ver el movimiento más unido y más político de lo que era.",
      fraseLista: "Mientras Löwy ve en la teología de la liberación un movimiento social capaz de cambiar la historia, Levine advierte que la mayoría de sus comunidades estaban más ocupadas en conseguir agua potable que en hacer la revolución.",
      paraPreguntas: ["Impacto político (grande)", "Orígenes / izquierda e Iglesia", "Nicaragua y Brasil"]
    },
    {
      nombre: "Daniel H. Levine", nacionalidad: "Politólogo estadounidense (Universidad de Michigan)",
      obra: "Popular Voices in Latin American Catholicism (1992)",
      postura: "Impacto real pero modesto y mediado",
      funcion: "Matizar: por qué el impacto político fue indirecto; CEBs reales; papel de la jerarquía.",
      ideaCentral: "Las CEBs reales eran heterogéneas y en su mayoría más religiosas que políticas: rezar, organizar la capilla, pedir agua y luz. Su alcance dependió de la mediación de la jerarquía: donde el obispo las protegió, crecieron; donde las abandonó, se apagaron. El impacto fue real pero modesto y de largo plazo: cambió la «cultura política» de los pobres (voz, dignidad, capacidad de organizarse) más que los regímenes. Tanto admiradores como enemigos exageraron su radicalidad.",
      matiz: "Sus casos (Venezuela, Colombia) no son los más dramáticos; quizás subestima Centroamérica.",
      fraseLista: "Daniel Levine advierte que la mayoría de las comunidades de base estaba más ocupada en conseguir agua y luz que en hacer la revolución, y que su radicalidad fue exagerada por admiradores y enemigos.",
      paraPreguntas: ["Impacto social (cultura política)", "Expansión / CEBs", "Papel de la Iglesia (mediación)"]
    },
    {
      nombre: "Penny Lernoux", regalo: true, nacionalidad: "Periodista católica estadounidense (en Colombia)",
      obra: "Cry of the People (1980)",
      postura: "Represión como medida del impacto",
      funcion: "Dar la cifra de la represión (está en tu libro).",
      ideaCentral: "La Iglesia fue la única institución que defendió a los pobres, y la represión contó con la complicidad de EE. UU. Aporta la cifra estrella: 850 religiosos torturados, asesinados, expulsados o arrestados entre Medellín (1968) y Puebla (1979).",
      matiz: "Es más denuncia que historia académica, pero la cifra es oro para un párrafo de represión. Combinala con Löwy (impacto grande medido por la reacción).",
      fraseLista: "La cifra de Lernoux —850 religiosos reprimidos en once años— mide menos el radicalismo del movimiento que el pánico de sus adversarios.",
      paraPreguntas: ["Represión", "Impacto (el argumento de la reacción)"]
    },
    {
      nombre: "Jeffrey Klaiber, SJ", regalo: true, nacionalidad: "Jesuita e historiador estadounidense (Univ. Católica del Perú)",
      obra: "Iglesia, dictaduras y democracia en América Latina (1997)",
      postura: "La variable es la unidad episcopal, no la TL",
      funcion: "Eje «papel de la Iglesia» y diferencias entre países.",
      ideaCentral: "La Iglesia fue la defensora más eficaz de los derechos humanos bajo las dictaduras donde estuvo unida (Chile, Brasil, Perú) y fracasó donde estuvo dividida (Argentina, Nicaragua). La TL importó menos que la unidad de la jerarquía. Combina perfecto con Levine (la jerarquía como mediadora).",
      matiz: "Desplaza el foco: la pregunta no es cuán radical fue la teología sino si el episcopado la respaldó.",
      fraseLista: "Como muestra Klaiber, la variable decisiva no fue la teología sino la unidad de la Iglesia: en Chile protegió, en Argentina abandonó.",
      paraPreguntas: ["Papel de la Iglesia", "Diferencias entre países", "Argentina como contraejemplo"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1959, fecha: "1959", pais: "Cuba", titulo: "Revolución cubana",
      descripcion: "El triunfo de Castro demuestra que el cambio radical es posible en América Latina y, a la vez, asusta a la Iglesia, que teme perder a los pobres frente al marxismo.",
      causas: ["Dictadura de Batista; desigualdad; Guerra Fría."],
      consecuencias: ["La TL es en parte una competencia por los pobres.", "El Informe Rockefeller (1969) ve a la Iglesia «vulnerable a la penetración subversiva»."],
      historiador: "Causa política de la TL: el cambio es posible / la Iglesia teme perder a los pobres." },
    { anio: 1962, fecha: "1962–65", pais: "Vaticano", titulo: "Concilio Vaticano II",
      descripcion: "Aggiornamento: la Iglesia se abre al «mundo moderno», valoriza a los laicos, misa en lengua vernácula; Gaudium et Spes pide leer «los signos de los tiempos».",
      causas: ["Necesidad de renovar la Iglesia frente al mundo contemporáneo."],
      consecuencias: ["Da permiso para pensar la fe desde la realidad social. «Sin esto no hay TL.»"],
      historiador: "Causa religiosa número uno." },
    { anio: 1966, fecha: "1966", pais: "Colombia", titulo: "Muere Camilo Torres en combate",
      descripcion: "Sacerdote y sociólogo colombiano que se une a la guerrilla del ELN y muere en combate. Mártir-símbolo: ya había curas que daban el paso a la lucha armada antes de que existiera la teología.",
      causas: ["Radicalización del clero; injusticia estructural."],
      consecuencias: ["El precedente radical: el cura que elige las armas."] },
    { anio: 1967, fecha: "1967", pais: "Vaticano", titulo: "Populorum Progressio · nace el MSTM",
      descripcion: "Encíclica de Pablo VI sobre el «desarrollo de los pueblos»: critica el «imperialismo internacional del dinero» y admite la insurrección ante «una tiranía evidente y prolongada». Los obispos la leen como luz verde. En Argentina nace el MSTM.",
      consecuencias: ["Encíclica-puente que Medellín cita una y otra vez."] },
    { anio: 1968, fecha: "ago-sep 1968", pais: "Colombia", titulo: "Medellín (CELAM II) · el punto de cristalización",
      descripcion: "II Conferencia General del Episcopado Latinoamericano, inaugurada por Pablo VI en Bogotá. Objetivo oficial: «aplicar el Vaticano II a América Latina». Gutiérrez fue perito. Conceptos: «violencia institucionalizada», pobreza como «situación de pecado», «concientización», «comunidades de base». Marzo: se funda la ONIS en Lima; julio: Gutiérrez en Chimbote; Freire publica Pedagogía del oprimido.",
      causas: ["Convergencia de Vaticano II, dependencia y Cuba."],
      consecuencias: ["El Vaticano censuró los documentos; los conservadores condenaron la violencia.", "Medellín abre, Puebla regula."],
      historiador: "El año fundacional: Perú + Medellín + Freire." },
    { anio: 1971, fecha: "1971", pais: "Perú / Chile", titulo: "Gutiérrez le pone nombre · Cristianos por el Socialismo",
      descripcion: "Gustavo Gutiérrez publica Teología de la liberación: perspectivas (Lima, CEP). En Chile, 80 curas forman Cristianos por el Socialismo en apoyo a Allende. Bambarén y las invasiones de Pamplona (Lima).",
      consecuencias: ["El movimiento recibe su nombre: primero la práctica (Medellín 1968), después la teoría."],
      historiador: "Trampa: Medellín (1968) precede al libro que le dio nombre (1971)." },
    { anio: 1972, fecha: "1972", pais: "Brasil / CELAM", titulo: "Boff, Jesucristo liberador · López Trujillo",
      descripcion: "Leonardo Boff publica Jesucristo liberador. Alfonso López Trujillo (colombiano, conservador) es elegido secretario general del CELAM y empieza a limpiarlo de teólogos de la liberación.",
      consecuencias: ["Expansión teológica + inicio de la reacción institucional, cinco años antes de Juan Pablo II."] },
    { anio: 1973, fecha: "1973", pais: "Chile / Uruguay", titulo: "Golpes en Chile y Uruguay · Comité Pro Paz",
      descripcion: "Golpes del 11-9 (Chile) y 27-6 (Uruguay). Al prohibir partidos y sindicatos, la parroquia queda como único espacio legal. La Iglesia chilena funda el Comité Pro Paz.",
      consecuencias: ["La Iglesia como refugio; la pastoral se vuelve política por default."] },
    { anio: 1976, fecha: "1976", pais: "Argentina / Chile", titulo: "Golpe en Argentina · Vicaría de la Solidaridad",
      descripcion: "Golpe en Argentina; asesinato del obispo Angelelli; el cardenal Silva Henríquez crea la Vicaría de la Solidaridad (Chile), que documenta desaparecidos y defiende presos. Terremoto en Guatemala y entrada de sectas evangélicas.",
      causas: ["Dictaduras de seguridad nacional en el Cono Sur."],
      consecuencias: ["La Iglesia institucional como escudo (impacto político indirecto).", "Argentina: la jerarquía no protege (contraejemplo de Klaiber)."],
      historiador: "El año más duro del Cono Sur." },
    { anio: 1977, fecha: "1977", pais: "El Salvador / Nicaragua", titulo: "Romero arzobispo · asesinato de Rutilio Grande",
      descripcion: "Romero, elegido arzobispo por moderado, se radicaliza tras el asesinato del jesuita Rutilio Grande (marzo): homilías radiales, denuncia de la represión. Somoza bombardea Solentiname.",
      consecuencias: ["Punto de inflexión de Romero: «la represión fabricaba teólogos de la liberación»."] },
    { anio: 1979, fecha: "19 jul 1979", pais: "Nicaragua / México", titulo: "Puebla · triunfo sandinista",
      descripcion: "Ene-feb: Puebla (CELAM III) con Juan Pablo II adopta la «opción preferencial por los pobres» y a la vez pide clero sin compromiso político. 19 de julio: los sandinistas derrocan a Somoza; tres curas en el gabinete. Octubre: comienza la guerra civil salvadoreña.",
      causas: ["Pobres concientizados + represión de Somoza + guerrilla del FSLN."],
      consecuencias: ["El año bisagra: doctrina oficial + revolución real.", "Aliada, no motor: la Iglesia popular fue aliada del FSLN y quedó enfrentada a Obando y Bravo."],
      historiador: "Löwy: la prueba de un impacto decisivo (pero no se puede generalizar)." },
    { anio: 1980, fecha: "24 mar 1980", pais: "El Salvador / Brasil", titulo: "Asesinato de Romero · PT · Documento de Santa Fe",
      descripcion: "24 de marzo: Romero asesinado celebrando misa, un día después de ordenar al ejército «cese la represión». 2 de diciembre: cuatro misioneras estadounidenses violadas y asesinadas por la Guardia Nacional. Fundación del PT en Brasil (feb). Documento de Santa Fe. Lernoux publica Cry of the People.",
      causas: ["Reacción de oligarquías, escuadrones de la muerte y EE. UU."],
      consecuencias: ["Límite de la pregunta de Nov 2021: todo lo de este año entra.", "El movimiento tenía mártires y comunidades, no poder."],
      historiador: "Lernoux: 850 religiosos reprimidos 1968–79." },
    { anio: 1983, fecha: "mar 1983", pais: "Nicaragua", titulo: "Juan Pablo II reprende a Cardenal en Managua",
      descripcion: "Juan Pablo II reprende a Ernesto Cardenal de rodillas ante las cámaras. La misa termina con gritos de «queremos la paz» y el Papa pidiendo «¡silencio!».",
      consecuencias: ["La foto de la ruptura entre el Vaticano y la Iglesia popular."],
      historiador: "NO desarrollar en preguntas «hasta 1980»." },
    { anio: 1984, fecha: "1984", pais: "Vaticano", titulo: "Instrucción de Ratzinger",
      descripcion: "La Congregación para la Doctrina de la Fe condena el uso del análisis marxista como incompatible con la fe. 1985: Boff silenciado un año; suspensión de los curas-ministros sandinistas. 1986: segunda Instrucción (Libertatis conscientia), más conciliadora.",
      consecuencias: ["Condena doctrinal; matiz: Roma no condena todo (reconoce la «liberación» como tema cristiano)."] },
    { anio: 1989, fecha: "16 nov 1989", pais: "El Salvador / global", titulo: "Masacre de la UCA · caída del Muro",
      descripcion: "Seis jesuitas de la Universidad Centroamericana (Ellacuría) asesinados. Cae el Muro de Berlín. 1990: derrota electoral del FSLN; 1992: Boff deja la orden y acuerdos de paz en El Salvador.",
      causas: ["Guerra civil salvadoreña; fin de la Guerra Fría."],
      consecuencias: ["Fin del marco de Guerra Fría; «después de 1989, esta teología es menos política». Cierre del ciclo."] }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Un tema con un error gigante que todos cometen: decir que «nació en Medellín en 1968». Medellín es donde <b>cristaliza</b>, no donde nace. La teología de la liberación (TL) es la convergencia de tres ríos —religioso, socioeconómico y político— que venían cocinándose desde fines de los 50. Si lo ves así, cualquier pregunta se ordena sola.</p>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La definición KISS (va en la intro de todo ensayo):</b> «La teología de la liberación es una corriente dentro del catolicismo latinoamericano que, desde fines de los 60, sostiene que la fe exige luchar contra las estructuras que producen pobreza, usando herramientas de las ciencias sociales (incluido el marxismo) para entenderlas.»</div>

          <h3>El truco maestro: las tres P</h3>
          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Regla de las tres P</b> para cualquier pregunta de 14.7: <b>P</b>obres (quién), <b>P</b>raxis (cómo: concientización, CEBs, acción) y <b>P</b>oder (contra quién: oligarquías, dictaduras, EE. UU., Vaticano conservador). Si tu ensayo toca las tres P en cada párrafo, está equilibrado.</div>

          <h3>Palabras que suben la nota</h3>
          <div class="caja truco"><span class="caja-et">TRUCO</span> Usá dos o tres por ensayo, no más: <i>asimétrico, mediado, indirecto, amplificado, cristalizó, laboratorio, infraestructura, afinidad electiva, violencia institucionalizada, opción preferencial</i>.</div>

          <h3>Código de colores</h3>
          <ul>
            <li><b>KISS</b> — aclaración simple de un término. Si ya lo sabés, saltalo.</li>
            <li><b>FRASE LISTA</b> — oración que podés copiar casi textual al ensayo.</li>
            <li><b>TRUCO</b> — técnica de examen o mnemotecnia.</li>
            <li><b>HISTORIADOR</b> — cómo integrar un historiador en el argumento.</li>
            <li><b>TRAMPA</b> — error común que cuesta bandas.</li>
            <li><b>DE CLASE</b> — lo que viene del capítulo 5.6 de tu libro. Si tu profe insiste, gana el profe.</li>
          </ul>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Opción preferencial por los pobres</b> = Dios no es neutral, está del lado del pobre (doctrina oficial en Puebla 1979). <b>Pecado estructural</b> = las estructuras (latifundio, dependencia, dictadura) también son pecado porque producen muerte; la injusticia es «violencia institucionalizada». <b>Concientización</b> = que el pobre descubra que su pobreza no es natural ni voluntad de Dios (método de Freire). <b>CEBs</b> = comunidades eclesiales de base: grupos de 15–30 vecinos que leen la Biblia y la conectan con sus problemas. <b>Praxis / ver-juzgar-actuar</b> = la teología empieza en la realidad, no en la biblioteca. <b>Aggiornamento</b> = la apertura de la Iglesia al mundo moderno (Vaticano II).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No escribas «la TL era marxista». Escribí: «incorporó categorías del análisis marxista (clase, dependencia, explotación) como herramienta de diagnóstico, lo que la hizo sospechosa tanto para el Vaticano como para Washington». Si decís «era marxista» perdés matiz y el examinador anota «simplificación».</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué está mal decir que la TL «nació en Medellín en 1968»?", etiqueta: "concepto",
            opciones: [
              { texto: "Porque Medellín es donde cristaliza; nace de tres corrientes previas de los años 60.", correcta: true, explicacion: "Correcto: la convergencia religiosa, socioeconómica y política venía de antes." },
              { texto: "Porque Medellín fue en realidad en 1971, el año del libro de Gutiérrez.", correcta: false, explicacion: "Medellín es de 1968; el libro de Gutiérrez es de 1971." },
              { texto: "Porque la TL nació en Europa y recién llegó a América Latina bastante tiempo después.", correcta: false, explicacion: "Löwy insiste en que fue un fenómeno latinoamericano original, no una importación." },
              { texto: "Porque Medellín no tuvo nada que ver con la teología de la liberación.", correcta: false, explicacion: "Sí tuvo: es el punto de cristalización (violencia institucionalizada, CEBs)." }
            ] },
          { pregunta: "La «regla de las tres P» para ordenar un ensayo de 14.7 es…", etiqueta: "concepto",
            opciones: [
              { texto: "Pobres (quién), Praxis (cómo) y Poder (contra quién).", correcta: true, explicacion: "Correcto: si cada párrafo toca las tres, el ensayo queda equilibrado." },
              { texto: "Pobreza, Protesta y Pacifismo de la Iglesia latinoamericana.", correcta: false, explicacion: "No es la regla del PDF; mezcla términos que no van." },
              { texto: "Papa, Partido y Pueblo como los tres actores del conflicto.", correcta: false, explicacion: "No es la mnemotecnia del material." },
              { texto: "Perú, Puebla y Populorum como las tres fuentes del movimiento.", correcta: false, explicacion: "Son hitos, pero no la regla de las tres P." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · El tema en una página",
        html: `
          <p>Si sólo leés una página antes del examen, que sea esta: los cinco ejes del programa con su idea-fuerza y una frase lista.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Idea-fuerza</th><th>Frase lista</th></tr></thead>
            <tbody>
              <tr><td>Orígenes</td><td>Convergen tres corrientes en los 60: renovación de la Iglesia (Vaticano II, Populorum Progressio), crisis del desarrollismo (dependencia) y shock de la Revolución cubana. Medellín (1968) cristaliza; Gutiérrez le pone nombre (1971).</td><td>«No fue una importación europea ni un marxismo con sotana: fue la respuesta latinoamericana a cómo ser cristiano en un continente de pobreza estructural.»</td></tr>
              <tr><td>Ideas principales</td><td>Opción preferencial por los pobres; pobreza como «pecado estructural»; liberación en lugar de desarrollo; praxis (ver-juzgar-actuar); concientización; CEBs.</td><td>«Su novedad no estuvo en la caridad hacia el pobre —que la Iglesia siempre predicó— sino en preguntar por qué el pobre es pobre.»</td></tr>
              <tr><td>Expansión</td><td>De Perú y Brasil (laboratorios) a Chile, Argentina y, sobre todo, Centroamérica: El Salvador (Romero), Nicaragua (sandinistas), Guatemala. Canales: CEBs, órdenes, editoriales.</td><td>«Se expandió donde había tres cosas: pobreza masiva, clero joven post-conciliar y un Estado represivo que convertía la pastoral en política.»</td></tr>
              <tr><td>Papel de la Iglesia</td><td>Fue a la vez motor (Medellín, obispos como Câmara, Romero, Arns, Silva Henríquez) y freno (Puebla, Juan Pablo II, Ratzinger). Nunca fue una sola Iglesia.</td><td>«No se trata de la Iglesia frente a la TL sino de una Iglesia dividida por ella, en cada país y en cada diócesis.»</td></tr>
              <tr><td>Impacto político y social</td><td>Social: concientización y organización. Político: decisivo en Nicaragua (1979), indirecto en el resto, pero con reacción feroz (dictaduras, EE. UU., Vaticano). 850 religiosos reprimidos 1968–79 (Lernoux).</td><td>«Su impacto fue importante pero asimétrico: cambió más a la Iglesia y a los pobres que a los Estados, y buena parte de su influencia política fue indirecta, a través de la represión que desató.»</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Tres países, no siete.</b> Brasil (masas: CEBs, PT), El Salvador (martirio: Romero) y Nicaragua (poder: sandinistas). Chile como cuarto si la pregunta es sobre «papel de la Iglesia» (Vicaría de la Solidaridad). Perú como extra para «orígenes». Guatemala y Argentina, sólo una oración de apoyo.</div>
        `,
        miniQuiz: [
          { pregunta: "La frase-tesis estándar sobre el impacto de la TL es que fue…", etiqueta: "concepto",
            opciones: [
              { texto: "Importante pero asimétrico: más eclesial y social que político (salvo Nicaragua).", correcta: true, explicacion: "Correcto: cambió más a la Iglesia y a los pobres que a los Estados." },
              { texto: "Total y revolucionario, con idéntica intensidad en toda América Latina por igual.", correcta: false, explicacion: "Fue asimétrico y desigual entre países, no uniforme." },
              { texto: "Nulo: no cambió nada ni en la Iglesia ni en la sociedad.", correcta: false, explicacion: "Cambió profundamente la Iglesia y la conciencia de los pobres." },
              { texto: "Puramente teológico, sin ninguna consecuencia social.", correcta: false, explicacion: "Tuvo impacto social (CEBs, concientización) muy real." }
            ] },
          { pregunta: "Para un ensayo, el PDF recomienda concentrarse en…", etiqueta: "concepto",
            opciones: [
              { texto: "Tres países: Brasil, El Salvador y Nicaragua (Chile como extra).", correcta: true, explicacion: "Correcto: cubren lo social, lo represivo y lo político." },
              { texto: "Los siete países completos de la tabla, dedicando un párrafo a cada uno.", correcta: false, explicacion: "El PDF dice «tres países y no más»: siete dispersa el ensayo." },
              { texto: "Sólo Perú, porque es donde nació la teología.", correcta: false, explicacion: "Perú es extra para «orígenes», no el único caso." },
              { texto: "Sólo el Vaticano, porque es quien decide todo.", correcta: false, explicacion: "La TL se juega en los países; el Vaticano es un nivel más." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Orígenes: los tres ríos",
        html: `
          <p>Nace de la convergencia de tres corrientes —religiosa, socioeconómica y política— que ya venían desde fines de los 50. Tres ríos que desembocan en un mismo delta.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Tipo</th><th>Causa</th><th>Cómo empuja hacia la TL</th></tr></thead>
            <tbody>
              <tr><td>REL</td><td>Concilio Vaticano II (1962–65)</td><td>Aggiornamento: la Iglesia se abre al mundo moderno; Gaudium et Spes pide leer «los signos de los tiempos». Da permiso para pensar la fe desde la realidad social.</td></tr>
              <tr><td>REL</td><td>Populorum Progressio (1967)</td><td>Pablo VI critica el «imperialismo internacional del dinero» y admite la insurrección ante «una tiranía evidente y prolongada». Los obispos la leen como luz verde.</td></tr>
              <tr><td>SOC</td><td>Pobreza estructural y fracaso del desarrollismo</td><td>La Alianza para el Progreso (1961) no cumple; crece la pobreza urbana (favelas, pueblos jóvenes). «Desarrollo» pierde credibilidad → se busca otra palabra: «liberación».</td></tr>
              <tr><td>SOC</td><td>Teoría de la dependencia</td><td>Prebisch/CEPAL, Cardoso y Faletto (1969), Gunder Frank: el subdesarrollo no es «atraso» sino producto de la dependencia. Si la pobreza es estructural, hay que romper la estructura.</td></tr>
              <tr><td>POL</td><td>Revolución cubana (1959)</td><td>Demuestra que el cambio radical es posible y asusta a la Iglesia, que teme perder a los pobres. La TL es en parte una competencia por los pobres.</td></tr>
              <tr><td>POL</td><td>Dictaduras y Guerra Fría</td><td>Brasil 1964, Chile 1973, Argentina 1976: con partidos y sindicatos prohibidos, la parroquia queda como único espacio legal. La Iglesia se vuelve política por default.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Desarrollo vs. liberación:</b> «desarrollo» = el pobre crece hasta alcanzar al rico (CEPAL, Alianza para el Progreso). «Liberación» = el pobre es pobre porque el rico es rico; hay que cambiar la relación, no sólo crecer. Ese cambio de palabra es el núcleo de la TL.</div>

          <h3>Medellín 1968 y los curas peruanos</h3>
          <p>En Medellín (26 ago–6 sep 1968), el episcopado latinoamericano habla de «violencia institucionalizada» y de la pobreza como «situación de pecado». Gutiérrez fue perito y redactó buena parte de los documentos de paz y pobreza. En Perú, la doble raíz: <b>Gutiérrez</b> (el teórico, el libro de 1971) + la <b>ONIS / Álvarez Calderón</b> (el grupo militante, 1968, que pidió reforma agraria antes de que la hiciera el gobierno militar de Velasco).</p>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Löwy subraya que, aunque la formación europea de los teólogos (Gutiérrez en Lovaina y Lyon) fue decisiva, el resultado fue un fenómeno latinoamericano original: «Europa aportó el permiso; América Latina, la pregunta.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Mnemotecnia de orígenes: <b>«VAPO-CU-DE-ME»</b> → VAticano II · POpulorum Progressio · CUba · DEpendencia · MEdellín. Cinco causas, casi en orden cronológico; las dos primeras religiosas, la tercera política, la cuarta económica, la quinta la síntesis.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Medellín (1968) es <b>anterior</b> al libro de Gutiérrez (1971): primero la práctica pastoral, después el nombre. Decilo así suena a 7: «la TL nació como práctica pastoral antes que como teoría».</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es el núcleo intelectual del paso del «desarrollo» a la «liberación»?", etiqueta: "concepto",
            opciones: [
              { texto: "El pobre es pobre porque el rico es rico: hay que cambiar la estructura, no sólo crecer.", correcta: true, explicacion: "Correcto: lo aporta la teoría de la dependencia." },
              { texto: "El pobre debe crecer con ayuda externa y cooperación internacional hasta alcanzar al rico.", correcta: false, explicacion: "Eso es «desarrollo» (CEPAL, Alianza), justo lo que la TL rechaza." },
              { texto: "La pobreza es voluntad de Dios y hay que aceptarla con fe.", correcta: false, explicacion: "La TL dice lo contrario: la pobreza no es natural ni destino." },
              { texto: "La solución es la caridad individual hacia cada pobre.", correcta: false, explicacion: "La novedad de la TL fue preguntar por qué el pobre es pobre, no la caridad." }
            ] },
          { pregunta: "La «doble raíz» peruana de la TL combina a…", etiqueta: "historiador",
            opciones: [
              { texto: "Gutiérrez (el teórico, libro 1971) y la ONIS / Álvarez Calderón (militantes, 1968).", correcta: true, explicacion: "Correcto: teoría + organización, el laboratorio teológico peruano." },
              { texto: "El sacerdote Camilo Torres y la guerrilla del ELN colombiano, entregados a la lucha armada.", correcta: false, explicacion: "Torres es colombiano, no la raíz peruana." },
              { texto: "Helder Câmara y las CEBs brasileñas.", correcta: false, explicacion: "Eso es Brasil, el laboratorio de masas, no Perú." },
              { texto: "Óscar Romero y los jesuitas de la UCA.", correcta: false, explicacion: "Eso es El Salvador, no Perú." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Ideas principales (glosario)",
        html: `
          <p>El examinador quiere ver que entendés las ideas, no sólo los nombres. Cada idea con su versión KISS, quién la encarna y una frase.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Idea</th><th>Qué significa</th><th>Quién la encarna</th></tr></thead>
            <tbody>
              <tr><td>Opción preferencial por los pobres</td><td>Dios no es neutral: está del lado del pobre. Doctrina oficial en Puebla (1979), ya implícita en Medellín.</td><td>Gutiérrez; Puebla 1979</td></tr>
              <tr><td>Pecado estructural</td><td>Las estructuras (latifundio, dependencia, dictadura) también son pecado porque producen muerte: «violencia institucionalizada».</td><td>Medellín 1968; Gutiérrez</td></tr>
              <tr><td>Liberación (vs. desarrollo)</td><td>No basta crecer; hay que romper la dependencia. Gutiérrez: tres niveles (económico-política, histórica, del pecado).</td><td>Gutiérrez (1971); Hugo Assmann</td></tr>
              <tr><td>Praxis / ver-juzgar-actuar</td><td>La teología empieza en la realidad: ver (análisis), juzgar (Evangelio), actuar. «Reflexión crítica sobre la praxis», segundo acto.</td><td>Método de Cardijn, adoptado por Medellín</td></tr>
              <tr><td>Concientización</td><td>Que el pobre descubra que su pobreza no es natural sino producto de una historia que se puede cambiar. Pedagogía antes que agitación.</td><td>Paulo Freire (1968/1970)</td></tr>
              <tr><td>CEBs</td><td>Grupos de 15–30 vecinos que leen la Biblia y la conectan con sus problemas. Nacen por falta de curas; terminan siendo escuelas de organización. Brasil: 70.000–100.000 hacia 1980.</td><td>Brasil (CNBB, Boff); Nicaragua (Cardenal)</td></tr>
              <tr><td>Lectura «desde abajo» de la Biblia</td><td>Éxodo, profetas, Jesús liberador, Magníficat. No es una Biblia nueva: es leer la misma Biblia desde el pobre.</td><td>Boff; Cardenal (Solentiname)</td></tr>
              <tr><td>Marxismo como herramienta</td><td>No como filosofía (ateísmo) sino como «ciencia social» para analizar la pobreza. El Vaticano (Ratzinger 1984) no acepta separar método y sistema.</td><td>Gutiérrez; Cristianos por el Socialismo</td></tr>
              <tr><td>Martirio</td><td>Morir por la justicia es morir por la fe. El martirio se vuelve argumento teológico y fuente de legitimidad política.</td><td>Jon Sobrino (UCA)</td></tr>
            </tbody>
          </table></div>

          <h3>Las ideas en una escalera lógica</h3>
          <ol class="escalera">
            <li><b>Ver la pobreza</b> (praxis).</li>
            <li><b>Entenderla como estructural</b>, no natural (pecado social, dependencia).</li>
            <li><b>Decidir de qué lado estar</b> (opción preferencial por los pobres).</li>
            <li><b>Organizar</b> (CEBs + concientización).</li>
            <li><b>Actuar por la liberación.</b></li>
            <li><b>Aceptar el costo</b> (martirio).</li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Al definir la pobreza como pecado estructural, la teología de la liberación desplazó la culpa del pobre a la estructura: ese desplazamiento fue su revolución intelectual.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Löwy prefiere hablar de «cristianismo de la liberación»: lo que importa no son los libros sino el movimiento social de curas, monjas, laicos y comunidades. Levine responde que, al mirar las comunidades reales, la mayoría se dedicaba a rezar, organizar la capilla y pedir servicios básicos: «mucho más religioso y menos revolucionario» de lo que suponen admiradores y enemigos.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué aportó Paulo Freire a la teología de la liberación?", etiqueta: "concepto",
            opciones: [
              { texto: "El método de la concientización; la TL le dio el contenido religioso.", correcta: true, explicacion: "Correcto: Freire aportó el método (Pedagogía del oprimido, 1968)." },
              { texto: "La doctrina oficial de la opción preferencial por los pobres consagrada en Puebla.", correcta: false, explicacion: "Eso es de Medellín/Puebla y Gutiérrez, no de Freire." },
              { texto: "La idea de usar el análisis marxista como ciencia social.", correcta: false, explicacion: "Eso viene de Gutiérrez y la teoría de la dependencia." },
              { texto: "La fundación de las primeras comunidades eclesiales de base.", correcta: false, explicacion: "Las CEBs son obra de la pastoral brasileña; Freire aportó el método pedagógico." }
            ] },
          { pregunta: "La forma correcta de describir el uso del marxismo en la TL es…", etiqueta: "trampa",
            opciones: [
              { texto: "Tomó categorías del análisis marxista como herramienta de diagnóstico.", correcta: true, explicacion: "Correcto: diagnóstico, no receta; por eso fue sospechosa para Roma y Washington." },
              { texto: "La TL era plenamente marxista y buscaba instaurar un Estado comunista ateo.", correcta: false, explicacion: "Trampa: decir «era marxista» es simplificación y pierde matiz." },
              { texto: "Rechazaba cualquier herramienta de las ciencias sociales.", correcta: false, explicacion: "Al contrario: usaba clase, dependencia y explotación como diagnóstico." },
              { texto: "Usaba el marxismo sólo como filosofía atea y materialista.", correcta: false, explicacion: "Lo usaba como ciencia social, no como filosofía; esa distinción es clave." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Expansión país por país",
        html: `
          <p>Tres ingredientes aparecen siempre donde la TL prendió fuerte: <b>pobreza masiva + clero joven post-conciliar</b> (muchas veces extranjero) <b>+ represión estatal</b> que cerraba otros canales. Donde faltó uno, quedó en los seminarios.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>País</th><th>Figuras clave</th><th>Hitos</th><th>Reacción / represión</th></tr></thead>
            <tbody>
              <tr><td>Perú</td><td>Gutiérrez; ONIS; obispo Bambarén</td><td>Chimbote 1968 → Medellín → libro 1971 → Instituto Bartolomé de las Casas 1974. Apoyo a la reforma agraria de Velasco.</td><td>Baja en los 70 (gobierno reformista); el Vaticano investiga a Gutiérrez (1983–86) pero no lo condena.</td></tr>
              <tr><td>Brasil</td><td>Câmara (Recife); Boff; Arns (São Paulo); Freire</td><td>Dictadura desde 1964 → la CNBB se vuelve la oposición más organizada; CEBs ≈80.000 hacia 1980; el PT (1980) nace con militantes de CEBs.</td><td>Tortura y asesinato de curas; Câmara censurado; Boff silenciado (1985) y deja la orden (1992).</td></tr>
              <tr><td>Chile</td><td>Cardenal Silva Henríquez; Cristianos por el Socialismo</td><td>Bajo Allende, 80 curas firman apoyo al socialismo (1971). Tras el golpe, Comité Pro Paz (1973) y Vicaría de la Solidaridad (1976).</td><td>Cristianos por el Socialismo disuelto por los obispos (1973); Pinochet hostiga a la Vicaría pero no puede cerrarla.</td></tr>
              <tr><td>Argentina</td><td>MSTM (1967); Mugica; obispo Angelelli</td><td>MSTM: ≈400 curas ligados al peronismo de izquierda; Mugica en la villa 31.</td><td>Mugica asesinado por la Triple A (1974); Angelelli (1976); la jerarquía NO protege (contraejemplo de Klaiber).</td></tr>
              <tr><td>El Salvador</td><td>Romero (arzobispo 1977–80); Rutilio Grande; jesuitas UCA (Ellacuría, Sobrino)</td><td>«La primera zona de América Central donde se ensayó». Romero, elegido por moderado, se radicaliza tras el asesinato de Grande (1977).</td><td>«Sé patriota, mata a un cura». Romero asesinado (24-3-1980); cuatro religiosas (dic 1980); seis jesuitas de la UCA (1989).</td></tr>
              <tr><td>Nicaragua</td><td>Ernesto y Fernando Cardenal; Miguel d'Escoto; vs. Obando y Bravo</td><td>Curas y monjas difunden la TL en los 70; Misa campesina (1975). Triunfo sandinista: 19 jul 1979; tres curas en el gabinete.</td><td>Somoza bombardea Solentiname (1977). Tras 1979 la represión viene del Vaticano: Juan Pablo II reprende a Cardenal (1983); suspensión de curas-ministros (1985).</td></tr>
              <tr><td>Guatemala</td><td>Stanley Rother; Juan Gerardi; Ríos Montt (adversario)</td><td>Misioneros extranjeros entre comunidades mayas; catequistas indígenas como cuadros.</td><td>Ríos Montt (dictador 1982–83, converso evangélico) trata a curas y monjas «como el enemigo». Rother asesinado (1981); Gerardi (1998).</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La geografía de la teología de la liberación coincide con la geografía de la represión: donde el Estado cerró los sindicatos y los partidos, la parroquia quedó como el último espacio público, y la pastoral se volvió política aunque no quisiera.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Agentes de expansión</b> (nombrarlos en un párrafo): (1) las CEBs; (2) las órdenes religiosas —jesuitas (UCA), dominicos (Gutiérrez), franciscanos (Boff), Maryknoll (misioneros de EE. UU.)—; (3) las conferencias episcopales (CNBB en Brasil, Chile); (4) editoriales y centros (CEP Lima, Vozes, Instituto Bartolomé de las Casas); (5) la cultura (Misa campesina 1975, El Evangelio en Solentiname, el cine).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Romero <b>no</b> era de la TL al principio: fue elegido arzobispo (1977) justamente por conservador. Lo radicaliza la muerte de Rutilio Grande. Decirlo demuestra matiz: la represión fabricaba teólogos de la liberación.</div>
        `,
        miniQuiz: [
          { pregunta: "Los tres ingredientes donde la TL prendió fuerte fueron…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Pobreza masiva, clero joven post-conciliar y represión estatal que cerraba otros canales.", correcta: true, explicacion: "Correcto: donde faltó uno, la TL quedó en los seminarios." },
              { texto: "Riqueza, clero anciano conservador y plena libertad política.", correcta: false, explicacion: "Es casi lo opuesto a lo que dice el material." },
              { texto: "Apoyo del Vaticano, dinero de EE. UU. y gobiernos socialistas.", correcta: false, explicacion: "El Vaticano y EE. UU. fueron más freno que motor." },
              { texto: "Mayoría protestante evangélica, universidades laicas y sindicatos obreros fuertes y legales.", correcta: false, explicacion: "No es lo que describe el PDF; era catolicismo y parroquias." }
            ] },
          { pregunta: "¿Por qué Argentina funciona como contraejemplo (Klaiber)?", etiqueta: "historiador",
            opciones: [
              { texto: "Porque la jerarquía no protegió al clero de base y la represión lo exterminó.", correcta: true, explicacion: "Correcto: sin episcopado unido, Mugica y Angelelli asesinados sin defensa." },
              { texto: "Porque allí la TL nunca existió ni tuvo sacerdotes.", correcta: false, explicacion: "Sí existió: el MSTM con ≈400 curas." },
              { texto: "Porque la Iglesia argentina protegió a su clero mucho mejor que la Iglesia chilena.", correcta: false, explicacion: "Al revés: Chile protegió (Vicaría), Argentina abandonó." },
              { texto: "Porque el gobierno argentino apoyó abiertamente a la TL.", correcta: false, explicacion: "La dictadura de 1976 la reprimió duramente." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Papel de la Iglesia (escalera 1962–1992)",
        html: `
          <p>La clave: «la Iglesia» nunca fue una sola. Tres niveles que se mueven a distinto ritmo: el <b>Vaticano</b> (de la apertura de Pablo VI al freno de Juan Pablo II), el <b>episcopado latinoamericano</b> (CELAM: de Medellín a Puebla) y el <b>clero de base</b> (que casi siempre va más rápido que sus obispos).</p>
          <ol class="escalera">
            <li><b>1962–65 · Vaticano II.</b> Aggiornamento. «Sin esto no hay TL.»</li>
            <li><b>1967 · Populorum Progressio.</b> Pablo VI abre la puerta (con condiciones) a la insurrección contra la tiranía.</li>
            <li><b>1968 · Medellín.</b> «Violencia institucionalizada» y «situación de pecado». Máxima sintonía jerarquía–base; Roma censura partes.</li>
            <li><b>1972 · Giro en el CELAM.</b> López Trujillo (conservador) secretario general: empieza la reacción institucional, cinco años antes de Juan Pablo II.</li>
            <li><b>1979 · Puebla.</b> Juan Pablo II inaugura: adopta la «opción preferencial por los pobres» PERO pide clero sin compromiso político. Los dos bandos dicen que ganaron.</li>
            <li><b>1983 · Managua.</b> Juan Pablo II reprende a Ernesto Cardenal ante las cámaras. La foto de la ruptura.</li>
            <li><b>1984 · Instrucción de Ratzinger.</b> Condena el análisis marxista. 1985: Boff silenciado. 1986: segunda Instrucción, más conciliadora.</li>
            <li><b>1985–92 · Desgaste.</b> Obispos conservadores; caída del bloque soviético (1989); avance pentecostal; Boff deja la orden (1992). «Después de 1989, esta teología es menos política.»</li>
          </ol>

          <h3>Motor y freno</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Motor</span>Medellín 1968; obispos «rojos» (Câmara, Romero, Arns, Silva Henríquez, Angelelli, Bambarén); Vicaría de la Solidaridad y CNBB; órdenes religiosas; legitimidad moral (la única institución que las dictaduras no pueden cerrar).</div>
              <div><span class="et">Freno</span>Pablo VI «no a la violencia» y censura en Medellín; obispos conservadores (López Trujillo, Obando y Bravo); Puebla 1979 (clero sin política); Juan Pablo II 1983 e Instrucción de Ratzinger 1984; nombramientos y crecimiento evangélico vacían la base.</div>
              <div><span class="et">Veredicto</span>No es una posición sino una trayectoria: la misma institución que dio lenguaje al movimiento intentó domesticarlo y luego lo condenó.</div>
            </div>
          </div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Klaiber: la Iglesia fue la defensora más eficaz de los DDHH donde estuvo unida (Chile, Brasil) y fracasó donde estuvo dividida (Argentina). La variable no es la TL en sí sino si la jerarquía la respaldó. Combina con Levine (la jerarquía como mediadora).</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La misma institución que en Medellín dio lenguaje al movimiento fue la que en Puebla intentó domesticarlo y en 1984 lo condenó: el papel de la Iglesia no se entiende como una posición sino como una trayectoria.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Medellín ≠ Puebla. Medellín (1968, Colombia, Pablo VI) = lenguaje radical, «violencia institucionalizada». Puebla (1979, México, Juan Pablo II) = «opción preferencial» como doctrina oficial, pero clero sin política. Regla: <b>Medellín abre, Puebla regula</b>.</div>
        `,
        miniQuiz: [
          { pregunta: "La diferencia entre Medellín (1968) y Puebla (1979) es que…", etiqueta: "fecha",
            opciones: [
              { texto: "Medellín abre con lenguaje radical; Puebla consagra la opción por los pobres pero pide clero sin política.", correcta: true, explicacion: "Correcto: «Medellín abre, Puebla regula»." },
              { texto: "Puebla fue bastante más radical que Medellín y llamó abiertamente a la revolución armada contra las oligarquías.", correcta: false, explicacion: "Puebla fue más contenida: clero sin compromiso político." },
              { texto: "Medellín condenó la TL y Puebla la fundó oficialmente.", correcta: false, explicacion: "Medellín la impulsó; no la condenó." },
              { texto: "Ambas conferencias fueron inauguradas por Juan Pablo II.", correcta: false, explicacion: "Medellín la inauguró Pablo VI; Puebla, Juan Pablo II." }
            ] },
          { pregunta: "Para Klaiber, la variable decisiva en el papel de la Iglesia fue…", etiqueta: "historiador",
            opciones: [
              { texto: "Si la jerarquía episcopal estuvo unida o dividida en cada país.", correcta: true, explicacion: "Correcto: unida protegió (Chile, Brasil), dividida falló (Argentina)." },
              { texto: "El grado de radicalidad teológica de los libros escritos por Gutiérrez.", correcta: false, explicacion: "Klaiber dice que la TL importó menos que la unidad episcopal." },
              { texto: "La cantidad de dinero que enviaba el Vaticano a cada país.", correcta: false, explicacion: "No es la variable que plantea Klaiber." },
              { texto: "El número de CEBs fundadas en cada diócesis.", correcta: false, explicacion: "Eso se asocia a Löwy/Levine, no a la tesis de Klaiber." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · La izquierda y la Iglesia (los dos sentidos)",
        html: `
          <p>Tu profe lo llama «la izquierda influenciando a la Iglesia». Pero para un 7 hay que mostrar que la flecha fue <b>doble</b>: la izquierda cambió a la Iglesia y la Iglesia cambió a la izquierda.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Izquierda → Iglesia</th><th>Iglesia → Izquierda</th></tr></thead>
            <tbody>
              <tr><td><b>Análisis de clase y dependencia:</b> la pobreza como producto de estructuras (Marx, CEPAL, Gunder Frank).</td><td><b>Fin del ateísmo militante:</b> el FSLN declara (1980) que entre cristianismo y revolución «no hay contradicción»; curas en el gabinete.</td></tr>
              <tr><td><b>Modelo cubano:</b> la revolución como posibilidad real (1959). El Che como icono.</td><td><b>Legitimidad moral:</b> la izquierda deja de ser «los comunistas ateos» y pasa a tener santos y mártires (Romero, Grande).</td></tr>
              <tr><td><b>Militancia y método:</b> concientización de Freire, ocupaciones de tierras, Camilo Torres (1966).</td><td><b>Base social:</b> las CEBs alimentan sindicatos y partidos de los 80 (PT, MST, movimientos de DDHH, las «Madres»).</td></tr>
              <tr><td><b>Lenguaje:</b> «liberación», «opresión», «oligarquía», «imperialismo» entran en documentos episcopales (Medellín).</td><td><b>Nuevos actores:</b> cristianos en la izquierda (Cristianos por el Socialismo, MSTM, curas-ministros). La izquierda se «ensancha».</td></tr>
              <tr><td><b>Costo:</b> la asociación con el marxismo es lo que usan la derecha (Santa Fe, 1980) y el Vaticano (Ratzinger, 1984) para condenarla.</td><td><b>Costo:</b> para la izquierda armada la TL fue a veces competidor (ofrecía reforma, no revolución) y a veces escudo (Nicaragua).</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Documento de Santa Fe (1980):</b> informe de asesores de Reagan que recomienda que la política exterior de EE. UU. «comience a contrarrestar» la teología de la liberación. Es la prueba de que Washington la leía como un arma soviética. Con el Informe Rockefeller (1969) tenés la línea completa: vista como amenaza antes de Nicaragua y con más fuerza después.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El marxismo le dio a la teología de la liberación su diagnóstico; la teología de la liberación le dio a la izquierda latinoamericana sus mártires. Ese intercambio explica por qué fue combatida a la vez desde Washington y desde Roma.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Löwy habla de una «afinidad electiva» (Weber) entre el catolicismo latinoamericano y el marxismo: no una infiltración sino un encuentro, porque ambos tenían una crítica ética del capitalismo. Levine matiza: la mayoría de los participantes de las CEBs no se definía de izquierda; la politización fuerte fue cosa de élites de activistas, no de la masa.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué muestra el Documento de Santa Fe (1980)?", etiqueta: "concepto",
            opciones: [
              { texto: "Que asesores de Reagan recomendaban «contrarrestar» la TL como arma soviética.", correcta: true, explicacion: "Correcto: prueba que Washington la leía como amenaza de Guerra Fría." },
              { texto: "Que EE. UU. financió abiertamente las CEBs y a Gutiérrez.", correcta: false, explicacion: "Al contrario: quería contrarrestar el movimiento, no financiarlo." },
              { texto: "Que el Vaticano aprobó y respaldó oficialmente la teología de la liberación en 1980.", correcta: false, explicacion: "Es un documento de EE. UU., no del Vaticano, y en contra." },
              { texto: "Que los sandinistas renunciaron al cristianismo en 1980.", correcta: false, explicacion: "El FSLN declaró en 1980 que no había contradicción con el cristianismo." }
            ] },
          { pregunta: "La «afinidad electiva» de Löwy describe la relación entre…", etiqueta: "historiador",
            opciones: [
              { texto: "El catolicismo latinoamericano y el marxismo: un encuentro, no una infiltración.", correcta: true, explicacion: "Correcto: ambos compartían una crítica ética del capitalismo." },
              { texto: "El Vaticano conservador y el Departamento de Estado de los Estados Unidos de Reagan.", correcta: false, explicacion: "Esa coincidencia fue en contra de la TL, no una afinidad teórica." },
              { texto: "Las sectas evangélicas y la jerarquía católica.", correcta: false, explicacion: "No es la relación que describe el concepto." },
              { texto: "La CEPAL y la Alianza para el Progreso.", correcta: false, explicacion: "Son modelos de desarrollo, no la afinidad de Löwy." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Impacto político y social",
        html: `
          <p>Las dos preguntas reales (mayo y noviembre 2021) son de impacto. La estructura que mejor funciona es <b>acción → reacción → efecto</b>, separando lo social de lo político y de lo eclesial, y cerrando con los límites.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Nivel</th><th>Acción de la TL</th><th>Reacción</th><th>Efecto neto</th></tr></thead>
            <tbody>
              <tr><td>SOC</td><td>Concientización: los pobres descubren que su pobreza «no era moralmente aceptable dentro de su fe católica».</td><td>Las élites lo ven como «amenaza para su liderazgo y para el capitalismo».</td><td>«Enorme frustración» y deseo de cambio. Cambio cultural duradero: la pobreza deja de ser destino.</td></tr>
              <tr><td>SOC</td><td>CEBs (≈80.000 en Brasil); ligas campesinas, cooperativas, ocupaciones de tierra.</td><td>Represión selectiva; 850 religiosos reprimidos 1968–79 (Lernoux).</td><td>Nace una generación de dirigentes populares: base del PT (1980), del MST (1984), de los movimientos de DDHH.</td></tr>
              <tr><td>POL</td><td>Nicaragua: los pobres «más dispuestos a apoyar a los grupos revolucionarios»; curas en el FSLN y el gobierno (1979).</td><td>Somoza bombardea Solentiname; luego Vaticano (1983, 1985) y la Contra financiada por EE. UU.</td><td>Único caso de revolución triunfante. Pero: aliada, no motor; divide a la Iglesia nicaragüense.</td></tr>
              <tr><td>POL</td><td>El Salvador: Romero pide reforma agraria y fin de la represión; homilías radiales.</td><td>«Sé patriota, mata a un cura»; asesinato de Romero (1980) y de las misioneras.</td><td>No evita la guerra civil (1980–92), pero la Iglesia se vuelve referencia moral; Romero santo (2018).</td></tr>
              <tr><td>POL</td><td>Chile y Brasil: la Iglesia institucional como escudo (Vicaría 1976; CNBB).</td><td>Hostigamiento de Pinochet; curas asesinados en Brasil.</td><td>Documentación de crímenes que sirve a las transiciones. Impacto político indirecto pero real.</td></tr>
              <tr><td>ECL</td><td>Medellín → Puebla: la «opción preferencial por los pobres» entra en la doctrina oficial.</td><td>López Trujillo (1972), Juan Pablo II, Ratzinger (1984), silencio a Boff (1985).</td><td>La Iglesia «se centró en los pobres, en lugar de los ricos»; afectó a la Iglesia en todo el mundo. Francisco recibe a Gutiérrez (2013).</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Fórmula de tesis</b> para cualquier pregunta de impacto: «importante pero asimétrico»: grande en lo eclesial y lo social, indirecto en lo político (salvo Nicaragua), amplificado por la represión. Cuatro palabras: asimétrico, eclesial, indirecto, amplificado.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>El argumento de la reacción:</b> cuando te falte evidencia de impacto directo, usá la magnitud de la represión como prueba de importancia (Lernoux 850, Santa Fe, Ratzinger). Es el as bajo la manga para «¿en qué medida tuvo impacto?».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El mejor indicador de su impacto es la coalición que se formó en su contra: oligarquías, ejércitos, el Departamento de Estado y la Congregación para la Doctrina de la Fe rara vez coincidieron en algo.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El libro dice que el impacto «fue importante porque creó una enorme frustración». Ojo: eso es impacto <i>subjetivo</i> (conciencia), no estructural. Un ensayo de 7 distingue impacto en la <b>conciencia / organización / poder</b>. Si mezclás los tres niveles, el examinador no ve análisis.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> En preguntas «hasta 1980» NO desarrolles Managua 1983, Ratzinger 1984 ni Boff 1985. Como mucho, una oración en la conclusión. Lo que SÍ entra: Juan Pablo II en Puebla (1979), Romero (24-3-1980) y las misioneras (2-12-1980).</div>
        `,
        miniQuiz: [
          { pregunta: "La «fórmula de tesis» para una pregunta de impacto resume el impacto como…", etiqueta: "concepto",
            opciones: [
              { texto: "Asimétrico, eclesial, indirecto y amplificado por la represión.", correcta: true, explicacion: "Correcto: grande en lo eclesial y social, indirecto en lo político salvo Nicaragua." },
              { texto: "Directo, uniforme y revolucionario en todos los países por igual.", correcta: false, explicacion: "Fue asimétrico e indirecto, no uniforme ni directo." },
              { texto: "Inexistente en lo social y total en lo político.", correcta: false, explicacion: "Es al revés: fuerte en lo social, débil en lo político (salvo Nicaragua)." },
              { texto: "Limitado a la conciencia, sin ningún efecto organizativo.", correcta: false, explicacion: "Creó organización duradera (CEBs, PT, MST)." }
            ] },
          { pregunta: "El «argumento de la reacción» sostiene que…", etiqueta: "historiador",
            opciones: [
              { texto: "La magnitud de la represión (850 religiosos, Santa Fe, Ratzinger) prueba su importancia.", correcta: true, explicacion: "Correcto: nadie reprime lo que no importa." },
              { texto: "La TL no tuvo ninguna importancia justamente porque terminó reprimida, aislada y derrotada.", correcta: false, explicacion: "La represión se usa como prueba de importancia, no de fracaso." },
              { texto: "La reacción vino sólo del Vaticano, no de los Estados.", correcta: false, explicacion: "Vino de oligarquías, ejércitos, EE. UU. y Roma a la vez." },
              { texto: "La represión demuestra que la TL era efectivamente marxista.", correcta: false, explicacion: "La represión mide el pánico de los adversarios, no «prueba» marxismo." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Balance y trampas finales",
        html: `
          <h3>¿Cuánto impacto? El debate en una tabla</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Impacto GRANDE (Löwy / Lernoux)</th><th>Impacto LIMITADO (Levine / contexto)</th></tr></thead>
            <tbody>
              <tr><td>Cambió el eje de la Iglesia más grande de la región: de los ricos a los pobres, de forma oficial (Puebla).</td><td>Cambió a la Iglesia más que a los Estados: ninguna dictadura cayó por la TL; cayeron por crisis y derrotas (Malvinas, plebiscito 1988).</td></tr>
              <tr><td>Nicaragua 1979: contribución decisiva a una revolución, con curas en el gobierno.</td><td>Nicaragua es la excepción, no la regla; y ahí la Iglesia se dividió (Obando terminó en la oposición).</td></tr>
              <tr><td>Creó organización popular duradera: CEBs → PT, MST, movimientos de DDHH.</td><td>La mayoría de las CEBs eran religiosas y locales (Levine); el salto a la política lo dieron minorías de activistas.</td></tr>
              <tr><td>La magnitud de la reacción prueba su importancia: 850 religiosos; Santa Fe; Instrucción de 1984.</td><td>Parte de su «impacto» fue la represión que desató, no cambios conseguidos: en El Salvador y Guatemala el saldo fue masacre.</td></tr>
              <tr><td>Impacto global: influyó en la teología negra, feminista, asiática; Francisco como papa «de los pobres».</td><td>Después de 1989 pierde fuerza política; los pobres migran al pentecostalismo; «es menos política».</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Medir el impacto de la teología de la liberación sólo por las revoluciones que produjo es como medir el del Concilio por los votos que cambió: su efecto principal fue cultural y organizativo, y por eso más lento y más duradero.»</div>

          <h3>Trampas que cuestan bandas</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> <b>Sandinistas ≠ TL.</b> El FSLN es una guerrilla marxista-nacionalista (1961). La TL le aportó cuadros, legitimidad y base social; no lo fundó. Decí siempre «aliada, no motor».</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> <b>Gutiérrez no es «OP» de origen.</b> Fue cura diocesano de Lima; entró a los dominicos recién en 1998. Si te preguntan, es «sacerdote peruano», y listo.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> <b>Fechas de 1980:</b> Romero muere el 24 de marzo; las cuatro misioneras el 2 de diciembre. Ambos entran en una pregunta «hasta 1980».</div>

          <h3>Cómo citar a los historiadores</h3>
          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Nunca de adorno («según Löwy, la TL fue importante»). Siempre: <b>historiador + tesis específica + tu evaluación</b>. Ejemplo: «Löwy sostiene que sin la TL no se explica la revolución sandinista; el argumento es sólido para Nicaragua pero no se puede generalizar: en El Salvador, con igual presencia de la TL, no hubo revolución sino guerra civil.» Eso es evaluación de perspectivas (banda 13–15).</div>

          <h3>Quién usar en qué párrafo</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Si el párrafo es sobre…</th><th>Principal</th><th>Para matizar</th></tr></thead>
            <tbody>
              <tr><td>Orígenes / izquierda e Iglesia</td><td>Löwy (afinidad electiva, originalidad)</td><td>Levine (la base no era de izquierda)</td></tr>
              <tr><td>Expansión / CEBs</td><td>Levine (heterogeneidad, dependencia del obispo)</td><td>Löwy (≈80.000 CEBs como movimiento de masas)</td></tr>
              <tr><td>Papel de la Iglesia</td><td>Klaiber (unidad episcopal)</td><td>Levine (mediación de la jerarquía)</td></tr>
              <tr><td>Impacto social</td><td>Levine (cultura política de los pobres)</td><td>Löwy (base del PT y MST)</td></tr>
              <tr><td>Impacto político</td><td>Löwy (Nicaragua, Brasil)</td><td>Levine (indirecto) + Klaiber (depende del país)</td></tr>
              <tr><td>Represión</td><td>Lernoux (850, complicidad de EE. UU.)</td><td>Levine (golpeó a activistas, no a la masa)</td></tr>
            </tbody>
          </table></div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es la frase correcta sobre el papel de la TL en Nicaragua?", etiqueta: "trampa",
            opciones: [
              { texto: "Fue aliada del FSLN, no su motor: le aportó cuadros, legitimidad y base.", correcta: true, explicacion: "Correcto: el FSLN es guerrilla marxista-nacionalista de 1961; la TL no lo fundó." },
              { texto: "La TL fundó y dirigió el Frente Sandinista desde 1961.", correcta: false, explicacion: "Falso: el FSLN es anterior y de origen marxista-nacionalista." },
              { texto: "La TL no tuvo ningún papel en la revolución nicaragüense.", correcta: false, explicacion: "Sí tuvo: cuadros, legitimidad, base social y curas en el gabinete." },
              { texto: "La jerarquía eclesiástica nicaragüense apoyó de forma unánime y constante al FSLN.", correcta: false, explicacion: "La Iglesia se dividió: Obando y Bravo terminó en la oposición." }
            ] },
          { pregunta: "¿Cómo NO hay que citar a un historiador para apuntar a banda alta?", etiqueta: "concepto",
            opciones: [
              { texto: "«Según Löwy, la TL fue importante», sin tesis específica ni evaluación.", correcta: true, explicacion: "Correcto: eso es adorno; falta tesis específica + tu evaluación." },
              { texto: "Löwy + su tesis sobre Nicaragua + tu matiz sobre El Salvador.", correcta: false, explicacion: "Esa es justamente la forma correcta de citar." },
              { texto: "Contrastar a Löwy con Levine y decidir con evidencia.", correcta: false, explicacion: "Contrastar y evaluar es lo que pide la banda 13–15." },
              { texto: "Usar a Lernoux para el dato de 850 religiosos en un párrafo de represión.", correcta: false, explicacion: "Eso es un uso correcto y específico del historiador." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "f1", frente: "¿Dónde «nace» y dónde «cristaliza» la TL?", dorso: "Nace de tres corrientes de los 60 (Vaticano II, dependencia, Cuba); cristaliza en Medellín (1968); recibe su nombre con Gutiérrez (1971).", categoria: "concepto" },
    { id: "f2", frente: "Definición KISS de teología de la liberación", dorso: "Corriente del catolicismo latinoamericano (desde fines de los 60) que dice que la fe exige luchar contra las estructuras que producen pobreza, usando las ciencias sociales (incluido el marxismo) para entenderlas.", categoria: "concepto" },
    { id: "f3", frente: "Las tres P del tema", dorso: "Pobres (quién), Praxis (cómo: concientización, CEBs, acción) y Poder (contra quién: oligarquías, dictaduras, EE. UU., Vaticano conservador).", categoria: "concepto" },
    { id: "f4", frente: "Mnemotecnia de orígenes", dorso: "VAPO-CU-DE-ME: VAticano II (1962–65) · POpulorum Progressio (1967) · CUba (1959) · DEpendencia · MEdellín (1968).", categoria: "causa-consecuencia" },
    { id: "f5", frente: "Desarrollo vs. liberación", dorso: "Desarrollo = el pobre crece hasta alcanzar al rico (CEPAL, Alianza). Liberación = el pobre es pobre porque el rico es rico; hay que cambiar la relación.", categoria: "concepto" },
    { id: "f6", frente: "¿Qué es la «violencia institucionalizada»? (Medellín)", dorso: "La injusticia estructural es ya una forma de violencia; la pobreza como «situación de pecado».", categoria: "concepto" },
    { id: "f7", frente: "Opción preferencial por los pobres", dorso: "Dios no es neutral: está del lado del pobre. Doctrina oficial en Puebla (1979), ya implícita en Medellín.", categoria: "concepto" },
    { id: "f8", frente: "Pecado estructural / social", dorso: "Las estructuras (latifundio, dependencia, dictadura) también son pecado porque producen muerte. Desplaza la culpa del pobre a la estructura.", categoria: "concepto" },
    { id: "f9", frente: "Ver-juzgar-actuar (praxis)", dorso: "La teología empieza en la realidad: ver (análisis social), juzgar (Evangelio), actuar. Es «reflexión crítica sobre la praxis», segundo acto.", categoria: "concepto" },
    { id: "f10", frente: "Concientización y su autor", dorso: "Que el pobre descubra que su pobreza no es natural. Método del pedagogo Paulo Freire (Pedagogía del oprimido, 1968). «Freire aportó el método; la TL le dio el contenido religioso.»", categoria: "historiador" },
    { id: "f11", frente: "¿Qué son las CEBs? ¿Cuántas en Brasil?", dorso: "Comunidades eclesiales de base: grupos de 15–30 vecinos que leen la Biblia y la conectan con sus problemas. ≈80.000 en Brasil hacia 1980. La infraestructura del movimiento.", categoria: "concepto" },
    { id: "f12", frente: "¿Era marxista la TL? (cómo decirlo)", dorso: "No: incorporó categorías del análisis marxista (clase, dependencia, explotación) como herramienta de diagnóstico. Diagnóstico, no receta.", categoria: "trampa" },
    { id: "f13", frente: "Gustavo Gutiérrez", dorso: "Padre del movimiento; Teología de la liberación (1971); Chimbote 1968; perito en Medellín; ONIS. Cura diocesano de Lima; entró a los dominicos en 1998. Nunca condenado por Roma.", categoria: "historiador" },
    { id: "f14", frente: "¿Qué fue la ONIS?", dorso: "Oficina Nacional de Información Social (Lima, 1968): ~40 curas peruanos (Gutiérrez, Álvarez Calderón) que pidieron reforma agraria y criticaron la oligarquía. «Los dos curas de Perú».", categoria: "concepto" },
    { id: "f15", frente: "Camilo Torres", dorso: "Cura y sociólogo colombiano que se une al ELN y muere en combate (1966). El precedente radical: el cura que elige las armas, antes de que existiera la teología.", categoria: "historiador" },
    { id: "f16", frente: "Leonardo Boff", dorso: "Franciscano brasileño; Jesucristo liberador (1972); silenciado por Ratzinger (1985); deja la orden (1992). El caso emblemático de la represión eclesial.", categoria: "historiador" },
    { id: "f17", frente: "Óscar Romero", dorso: "Arzobispo de San Salvador (1977–80), elegido por moderado; se radicaliza tras el asesinato de Rutilio Grande. Asesinado el 24-3-1980 en misa. Santo (2018).", categoria: "historiador" },
    { id: "f18", frente: "Helder Câmara (frase)", dorso: "«Obispo rojo» de Recife: «Cuando doy comida a los pobres me llaman santo; cuando pregunto por qué no tienen comida me llaman comunista.»", categoria: "historiador" },
    { id: "f19", frente: "Vicaría de la Solidaridad", dorso: "Chile, 1976 (Silva Henríquez): oficina de la Iglesia que defendió presos y documentó desaparecidos bajo Pinochet. La Iglesia institucional como escudo; impacto político indirecto.", categoria: "concepto" },
    { id: "f20", frente: "¿Qué pasó el 19 de julio de 1979?", dorso: "Triunfo sandinista: el FSLN derroca a Somoza. Tres curas en el gabinete. La TL fue aliada, no motor.", categoria: "fecha" },
    { id: "f21", frente: "Medellín vs. Puebla", dorso: "Medellín (1968, Pablo VI): lenguaje radical, «violencia institucionalizada». Puebla (1979, Juan Pablo II): «opción preferencial» oficial PERO clero sin política. Medellín abre, Puebla regula.", categoria: "fecha" },
    { id: "f22", frente: "Giro en el CELAM (1972)", dorso: "López Trujillo (conservador) secretario general: empieza la reacción institucional, cinco años antes de Juan Pablo II.", categoria: "fecha" },
    { id: "f23", frente: "Juan Pablo II en Managua (1983)", dorso: "Reprende a Ernesto Cardenal ante las cámaras. La foto de la ruptura entre el Vaticano y la Iglesia popular.", categoria: "fecha" },
    { id: "f24", frente: "Instrucción de Ratzinger (1984)", dorso: "La Congregación para la Doctrina de la Fe condena el uso del análisis marxista como incompatible con la fe. 1986: segunda Instrucción, más conciliadora.", categoria: "fecha" },
    { id: "f25", frente: "Löwy: tesis", dorso: "Impacto GRANDE: «cristianismo de la liberación», un movimiento social; «afinidad electiva» con el marxismo; fenómeno latinoamericano original; explica el FSLN y el PT.", categoria: "historiador" },
    { id: "f26", frente: "Levine: tesis", dorso: "Impacto REAL PERO MODESTO: las CEBs eran más religiosas que políticas; su alcance dependió de la jerarquía; cambió la cultura política de los pobres más que los regímenes.", categoria: "historiador" },
    { id: "f27", frente: "Lernoux: el dato estrella", dorso: "850 religiosos torturados, asesinados, expulsados o arrestados entre Medellín (1968) y Puebla (1979). Oro para un párrafo de represión.", categoria: "historiador" },
    { id: "f28", frente: "Klaiber: tesis", dorso: "La Iglesia defendió los DDHH donde estuvo unida (Chile, Brasil) y fracasó donde estuvo dividida (Argentina). La variable es la unidad episcopal, no la TL.", categoria: "historiador" },
    { id: "f29", frente: "Documento de Santa Fe (1980)", dorso: "Informe de asesores de Reagan que recomienda «contrarrestar» la TL como arma soviética. Con el Informe Rockefeller (1969), la línea completa de la hostilidad de EE. UU.", categoria: "fecha" },
    { id: "f30", frente: "Fórmula de tesis de impacto", dorso: "«Importante pero asimétrico»: grande en lo eclesial y social, indirecto en lo político (salvo Nicaragua), amplificado por la represión.", categoria: "concepto" },
    { id: "f31", frente: "Tres niveles de impacto", dorso: "Conciencia (social) → organización (CEBs, sindicatos) → poder (Estado). Fuerte en el primero, mediano en el segundo, débil en el tercero salvo Nicaragua.", categoria: "concepto" },
    { id: "f32", frente: "¿Por qué Argentina es contraejemplo?", dorso: "El MSTM (≈400 curas) fue aniquilado (Mugica 1974, Angelelli 1976) sin que la jerarquía lo defendiera. Klaiber: donde la Iglesia estuvo dividida, falló.", categoria: "causa-consecuencia" },
    { id: "f33", frente: "Tres ingredientes de la expansión", dorso: "Pobreza masiva + clero joven post-conciliar + represión estatal que cerraba otros canales. Donde faltó uno, la TL quedó en los seminarios.", categoria: "causa-consecuencia" },
    { id: "f34", frente: "Los cinco años clave (68-71-79-80-84)", dorso: "1968 Medellín · 1971 el libro · 1979 Puebla + sandinistas · 1980 Romero + maryknolls + Santa Fe · 1984 Ratzinger.", categoria: "fecha" },
    { id: "f35", frente: "Sandinistas ≠ TL", dorso: "El FSLN es guerrilla marxista-nacionalista (1961). La TL le aportó cuadros, legitimidad y base; no lo fundó. «Aliada, no motor.»", categoria: "trampa" }
  ],

  /* ===================== QUIZ ===================== */
  quiz: [
    { pregunta: "¿Cuáles son las tres corrientes de las que surge la TL?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "La renovación de la Iglesia, la crisis del desarrollismo y la Revolución cubana.", correcta: true, explicacion: "Correcto: religiosa (Vaticano II), socioeconómica (dependencia) y política (Cuba 1959)." },
        { texto: "El protestantismo evangélico, el capitalismo liberal europeo y la democracia cristiana alemana.", correcta: false, explicacion: "Ninguna es fuente de la TL; es catolicismo y crítica del capitalismo." },
        { texto: "La Guerra Fría, el fascismo europeo y el peronismo argentino.", correcta: false, explicacion: "No son las tres corrientes que identifica el material." },
        { texto: "El Concilio de Trento, la Reforma y la Ilustración.", correcta: false, explicacion: "Son procesos muy anteriores y europeos; la TL es de los años 60." }
      ] },
    { pregunta: "¿Qué documento de 1967 abrió (con condiciones) la puerta a la insurrección contra la tiranía?", etiqueta: "fecha",
      opciones: [
        { texto: "La encíclica Populorum Progressio de Pablo VI.", correcta: true, explicacion: "Correcto: admite la insurrección ante «una tiranía evidente y prolongada»." },
        { texto: "La Instrucción de Ratzinger sobre la teología de la liberación.", correcta: false, explicacion: "Es de 1984 y condena el análisis marxista, no abre nada." },
        { texto: "El documento final de la Conferencia de Puebla.", correcta: false, explicacion: "Puebla es de 1979 y pide clero sin compromiso político." },
        { texto: "La Carta Testamento de los obispos latinoamericanos.", correcta: false, explicacion: "No existe tal documento en el material." }
      ] },
    { pregunta: "La idea de «pecado estructural» sostiene que…", etiqueta: "concepto",
      opciones: [
        { texto: "Las estructuras injustas también son pecado porque producen muerte.", correcta: true, explicacion: "Correcto: desplaza la culpa del pobre a la estructura." },
        { texto: "El pobre peca por no trabajar lo suficiente para salir de la pobreza.", correcta: false, explicacion: "Es lo opuesto: la TL niega que la pobreza sea culpa del pobre." },
        { texto: "El pecado es sólo individual y nunca tiene dimensión social.", correcta: false, explicacion: "La TL amplía el pecado a lo estructural, no lo reduce a lo individual." },
        { texto: "La Iglesia debe perdonar los pecados de las oligarquías sin condiciones.", correcta: false, explicacion: "No tiene relación con el concepto de pecado estructural." }
      ] },
    { pregunta: "¿Qué distingue a Löwy de Levine sobre el impacto de la TL?", etiqueta: "historiador",
      opciones: [
        { texto: "Löwy lo ve grande (movimiento social); Levine, real pero modesto y mediado por la jerarquía.", correcta: true, explicacion: "Correcto: Löwy mira desde arriba, Levine desde las comunidades reales." },
        { texto: "Löwy niega todo impacto y Levine lo considera una revolución total.", correcta: false, explicacion: "Es al revés en ambos extremos." },
        { texto: "Ambos coinciden en que la TL no tuvo ningún impacto político.", correcta: false, explicacion: "No coinciden: Löwy ve impacto político decisivo en Nicaragua." },
        { texto: "Löwy estudia sobre todo Venezuela y Colombia, mientras que Levine se concentra en Nicaragua y Brasil.", correcta: false, explicacion: "Es al revés: Levine trabajó en Venezuela y Colombia." }
      ] },
    { pregunta: "¿Qué ocurrió en Medellín en 1968?", etiqueta: "fecha",
      opciones: [
        { texto: "El episcopado latinoamericano habló de «violencia institucionalizada» y de pobreza como pecado.", correcta: true, explicacion: "Correcto: la II Conferencia del CELAM, inaugurada por Pablo VI; Gutiérrez fue perito." },
        { texto: "El Vaticano condenó formalmente la teología de la liberación y prohibió el uso del análisis marxista.", correcta: false, explicacion: "La condena doctrinal fue en 1984 (Ratzinger), no en Medellín." },
        { texto: "Juan Pablo II reprendió a Ernesto Cardenal ante las cámaras.", correcta: false, explicacion: "Eso fue en Managua en 1983." },
        { texto: "Se fundó el Frente Sandinista de Liberación Nacional.", correcta: false, explicacion: "El FSLN se fundó en 1961, y no en Medellín." }
      ] },
    { pregunta: "¿Por qué se dice que la TL fue «aliada, no motor» del FSLN?", etiqueta: "trampa",
      opciones: [
        { texto: "El FSLN es una guerrilla marxista-nacionalista de 1961; la TL le dio cuadros y base, no lo fundó.", correcta: true, explicacion: "Correcto: la TL aportó legitimidad y militantes, pero el Frente ya existía." },
        { texto: "Porque la teología de la liberación fundó, organizó y dirigió por completo al FSLN desde su creación en 1961.", correcta: false, explicacion: "Falso: eso la convertiría en motor, no en aliada." },
        { texto: "Porque la TL se opuso abiertamente a la revolución sandinista desde el principio.", correcta: false, explicacion: "Fue aliada: hubo curas en el gabinete sandinista." },
        { texto: "Porque los sandinistas eran todos sacerdotes de la TL.", correcta: false, explicacion: "No: el FSLN era mayormente laico y marxista-nacionalista." }
      ] },
    { pregunta: "¿Cuál fue el aporte de las CEBs al movimiento?", etiqueta: "concepto",
      opciones: [
        { texto: "Fueron la infraestructura: sin ellas la teología habría quedado en los libros.", correcta: true, explicacion: "Correcto: ≈80.000 en Brasil, escuelas de organización popular." },
        { texto: "Fueron un partido político de izquierda con candidatos propios y listas electorales.", correcta: false, explicacion: "Eran grupos de lectura bíblica y organización, no un partido." },
        { texto: "Fueron tribunales religiosos para juzgar a las dictaduras.", correcta: false, explicacion: "No tenían función judicial." },
        { texto: "Fueron seminarios para formar obispos conservadores.", correcta: false, explicacion: "Eran comunidades de base, no seminarios episcopales." }
      ] },
    { pregunta: "¿Qué dice la cifra de Penny Lernoux?", etiqueta: "historiador",
      opciones: [
        { texto: "850 religiosos reprimidos entre Medellín (1968) y Puebla (1979).", correcta: true, explicacion: "Correcto: torturados, asesinados, expulsados o arrestados; mide el pánico de los adversarios." },
        { texto: "80.000 comunidades eclesiales de base fundadas en toda América Latina.", correcta: false, explicacion: "Las ≈80.000 CEBs son un dato distinto, y sólo de Brasil." },
        { texto: "400 curas del MSTM asesinados por la Triple A en Argentina.", correcta: false, explicacion: "El MSTM tenía ≈400 curas, pero no todos asesinados; otra cifra." },
        { texto: "19 curas en el gabinete del gobierno sandinista.", correcta: false, explicacion: "Fueron tres curas en el gabinete, no la cifra de Lernoux." }
      ] },
    { pregunta: "¿Cómo radicalizó la represión a Óscar Romero?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "El asesinato del jesuita Rutilio Grande (1977) convirtió al moderado en voz de los pobres.", correcta: true, explicacion: "Correcto: «la represión fabricaba teólogos de la liberación»." },
        { texto: "Fue elegido arzobispo por ser el más radical del episcopado.", correcta: false, explicacion: "Fue elegido justamente por conservador y moderado." },
        { texto: "Lo radicalizó la lectura del libro de Gustavo Gutiérrez publicado en Lima en 1971.", correcta: false, explicacion: "El detonante fue el asesinato de Grande, no el libro." },
        { texto: "Se radicalizó tras ser reprendido públicamente por el papa Juan Pablo II en Managua en 1983.", correcta: false, explicacion: "Romero fue asesinado en 1980; no llegó a 1983." }
      ] },
    { pregunta: "En una pregunta «hasta 1980», ¿qué NO debés desarrollar en el cuerpo?", etiqueta: "trampa",
      opciones: [
        { texto: "Managua 1983, la Instrucción de Ratzinger (1984) y el silencio a Boff (1985).", correcta: true, explicacion: "Correcto: son posteriores a 1980; como mucho, una oración en la conclusión." },
        { texto: "La Conferencia de Puebla y el triunfo sandinista de 1979.", correcta: false, explicacion: "Sí entran: son de 1979, dentro del corte." },
        { texto: "El asesinato del arzobispo Romero y el de las cuatro misioneras estadounidenses.", correcta: false, explicacion: "Ambos son de 1980 y entran en la pregunta." },
        { texto: "La fundación del PT en Brasil en febrero de 1980.", correcta: false, explicacion: "Es de 1980: entra perfectamente." }
      ] },
    { pregunta: "¿Qué significa que el papel de la Iglesia fue «una trayectoria, no una posición»?", etiqueta: "concepto",
      opciones: [
        { texto: "La misma institución dio lenguaje al movimiento (Medellín), lo reguló (Puebla) y lo condenó (1984).", correcta: true, explicacion: "Correcto: motor y freno a distinto ritmo según Vaticano, CELAM y clero de base." },
        { texto: "La Iglesia apoyó la TL de forma unánime y constante hasta hoy.", correcta: false, explicacion: "No fue unánime ni constante: se dividió y cambió de posición." },
        { texto: "La Iglesia rechazó de forma tajante la teología de la liberación desde el principio y sin ningún matiz.", correcta: false, explicacion: "Al inicio fue motor (Medellín); el rechazo vino después." },
        { texto: "La Iglesia nunca tuvo ninguna relación institucional con la teología de la liberación.", correcta: false, explicacion: "Fue el escenario central del conflicto." }
      ] },
    { pregunta: "¿Qué muestra el contraste Chile / Argentina para Klaiber?", etiqueta: "historiador",
      opciones: [
        { texto: "Que la Iglesia protegió los DDHH donde estuvo unida y falló donde estuvo dividida.", correcta: true, explicacion: "Correcto: Chile (Vicaría) protegió; Argentina abandonó al clero de base." },
        { texto: "Que la TL fue más radical en Chile que en Argentina.", correcta: false, explicacion: "La variable de Klaiber es la unidad episcopal, no la radicalidad." },
        { texto: "Que ambos países tuvieron idéntico papel de la Iglesia.", correcta: false, explicacion: "Fueron opuestos: uno protegió, el otro no." },
        { texto: "Que en ningún país de la región la Iglesia defendió los derechos humanos de los perseguidos.", correcta: false, explicacion: "En Chile y Brasil sí lo hizo, de forma muy eficaz." }
      ] },
    { pregunta: "La «fórmula de tesis» para una pregunta de impacto es que fue…", etiqueta: "concepto",
      opciones: [
        { texto: "Importante pero asimétrico: eclesial y social fuerte, político indirecto, amplificado por la represión.", correcta: true, explicacion: "Correcto: cuatro palabras clave: asimétrico, eclesial, indirecto, amplificado." },
        { texto: "Uniforme y revolucionario en todos los países por igual.", correcta: false, explicacion: "Fue asimétrico y desigual, no uniforme." },
        { texto: "Nulo en lo social pero decisivo en lo político en absolutamente todos los países del continente.", correcta: false, explicacion: "Es al revés: fuerte social, débil político salvo Nicaragua." },
        { texto: "Puramente doctrinal y teológico, sin ningún efecto real sobre los pobres ni sobre la política regional.", correcta: false, explicacion: "Tuvo efectos sociales y políticos muy reales." }
      ] },
    { pregunta: "¿Por qué está mal escribir «la teología de la liberación era marxista»?", etiqueta: "trampa",
      opciones: [
        { texto: "Porque sólo tomó del marxismo categorías de diagnóstico; decirlo así es una simplificación.", correcta: true, explicacion: "Correcto: diagnóstico, no receta; la frase sin matiz baja la nota." },
        { texto: "Porque la TL rechazaba por completo cualquier idea marxista.", correcta: false, explicacion: "No la rechazaba: usaba sus categorías como herramienta." },
        { texto: "Porque el marxismo nunca influyó en ningún teólogo ni en ningún documento episcopal latinoamericano.", correcta: false, explicacion: "Sí influyó, como herramienta de análisis." },
        { texto: "Porque la TL era en realidad una corriente protestante.", correcta: false, explicacion: "Era católica; nada que ver con el protestantismo." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "«El movimiento de la teología de la liberación tuvo un importante impacto en América Latina.» ¿En qué medida está de acuerdo? (Mayo 2021, Q28)", frecuencia: "Muy alta",
        plan: "Tesis «asimétrico». Párrafos: eclesial (Klaiber) · social (Levine vs. Löwy) · político (Löwy evaluado: Nicaragua sí, El Salvador no) · reacción/límites (Lernoux) · conclusión con idea nueva (Romero santo 2018)." },
      { pregunta: "Discuta el impacto de la teología de la liberación hasta 1980. (Noviembre 2021, Q28)", frecuencia: "Muy alta",
        plan: "Estructura cronológico-temática en tres etapas: 1968–72 doctrinal (Löwy) · 1973–78 organizativo bajo dictaduras (Levine + Klaiber) · 1979–80 político máximo (Löwy) · 1980 como techo (Lernoux). NADA posterior a 1980 en el cuerpo." },
      { pregunta: "Examine las razones del surgimiento y la expansión de la TL en América Latina.", frecuencia: "Alta",
        plan: "Dos partes: surgimiento (causa religiosa, socioeconómica, política) + expansión (tres agentes: CEBs, órdenes, represión). No confundirlas. Veredicto: prendió donde coincidieron pregunta, permiso y persecución." },
      { pregunta: "Evalúe el papel de la Iglesia en la teología de la liberación.", frecuencia: "Alta",
        plan: "Iglesia nunca fue una sola: Vaticano / CELAM / clero de base. Motor (Medellín, obispos rojos, Vicaría) y freno (Puebla, Juan Pablo II, Ratzinger). Klaiber: la variable es la unidad episcopal." },
      { pregunta: "¿Hasta qué punto fue la TL un movimiento político más que religioso?", frecuencia: "Media",
        plan: "Tabla de ideas (praxis, opción por los pobres, marxismo como diagnóstico) + Löwy (movimiento social) vs. Levine (más religioso que político). Veredicto: ambas cosas eran, para esos pobres, la misma lucha." },
      { pregunta: "Analice el impacto de la TL en un país (Nicaragua o El Salvador).", frecuencia: "Media",
        plan: "Nicaragua: concientización → FSLN 1979, curas-ministros, «aliada no motor», Iglesia dividida. El Salvador: Romero, Rutilio Grande, martirio, guerra civil sin revolución. Löwy sólido para uno, no generalizable." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida tuvo un importante impacto la TL? (Mayo 2021)",
        tesis: "De acuerdo en gran medida, pero el impacto fue asimétrico: profundo en la Iglesia y en la conciencia de los pobres, indirecto en la política (salvo Nicaragua) y amplificado por la represión que provocó.",
        pasos: [
          "Intro: contexto (años 60: Vaticano II, Cuba, dependencia) + definición KISS + tesis «asimétrico».",
          "Eclesial: Medellín «violencia institucionalizada» → Puebla «opción preferencial»; obispos Câmara, Arns, Silva Henríquez; Vicaría 1976. Klaiber (unidad episcopal).",
          "Social: CEBs ≈80.000 en Brasil, Freire, PT 1980, MST. Levine (cultura política) vs. Löwy (movimiento).",
          "Político: FSLN 1979, Cardenal, d'Escoto (Löwy decisivo); El Salvador: Romero 1980 sin evitar la guerra; Chile/Brasil: indirecto.",
          "Reacción/límites: 850 (Lernoux), «Sé patriota, mata a un cura», Santa Fe 1980, Ratzinger 1984, 1989 y pentecostalismo.",
          "Conclusión: cambió más a la Iglesia y a los pobres que a los Estados; idea nueva (Romero santo 2018, Francisco recibe a Gutiérrez 2013)."
        ] },
      { titulo: "Plan B · Discuta el impacto hasta 1980 (Noviembre 2021)",
        tesis: "Hasta 1980 el impacto fue creciente y de tres tipos (doctrinal, organizativo, político), pero ya en 1980 era visible su límite: la represión y el inicio de la reacción vaticana.",
        pasos: [
          "Intro: por qué 1980 es buen corte (Romero, maryknolls, PT, Santa Fe) + tesis de tres etapas.",
          "1968–72 doctrinal: Medellín, Gutiérrez 1971, ONIS y Velasco en Perú, Boff 1972, Cristianos por el Socialismo 1971. Löwy (originalidad).",
          "1973–78 organizativo bajo dictaduras: golpes 1973/1976, CEBs, Vicaría 1976, MSTM y Mugica 1974, Angelelli 1976, Romero 1977. Levine + Klaiber.",
          "1979–80 político máximo: Puebla ene-feb 1979, sandinistas 19-7-1979, curas-ministros, Cruzada de Alfabetización, PT feb 1980. Löwy evaluado.",
          "1980 como techo: Romero 24-3, misioneras 2-12, Lernoux 850, Santa Fe, Puebla ya pedía clero sin política.",
          "Conclusión: impacto creciente pero ya contenido; una sola oración sobre la reacción posterior."
        ] },
      { titulo: "Plan C · Examine el surgimiento y la expansión de la TL",
        tesis: "Surgió por la convergencia de tres causas (religiosa, socioeconómica, política) y se expandió porque tres agentes la llevaron de los libros a las masas: las CEBs, las órdenes religiosas y, paradójicamente, la represión.",
        pasos: [
          "Intro: distinguir surgimiento (causas) de expansión (agentes). No confundirlas.",
          "Causa religiosa: Vaticano II, Populorum Progressio 1967, Medellín, Gutiérrez en Lovaina/Lyon. Löwy: Europa aportó el permiso; América Latina, la pregunta.",
          "Causa socioeconómica: Alianza para el Progreso 1961, CEPAL, Cardoso y Faletto 1969, «liberación» vs. «desarrollo». Löwy (afinidad electiva).",
          "Causa política: Cuba 1959, Rockefeller 1969, Camilo Torres 1966, ONIS y Velasco. Levine: la masa no era de izquierda.",
          "Expansión (agentes): CEBs ≈80.000, jesuitas (UCA), Maryknoll, franciscanos; Freire; Misa campesina 1975; Solentiname. + la represión como acelerador paradójico (dictaduras cierran todo lo demás).",
          "Conclusión: prendió donde coincidieron la pregunta, el permiso y la persecución; donde faltó un ingrediente (Colombia, Venezuela), fue más tenue."
        ] },
      { titulo: "Plan D · Evalúe el papel de la Iglesia",
        tesis: "La Iglesia no tuvo una posición sino una trayectoria: fue a la vez motor y freno, en tres niveles a distinto ritmo, y la variable decisiva fue la unidad episcopal (Klaiber).",
        pasos: [
          "Tres niveles: Vaticano (Pablo VI → Juan Pablo II), CELAM (Medellín → Puebla, giro de López Trujillo 1972), clero de base (más rápido que sus obispos).",
          "Motor: Medellín 1968, obispos rojos, Vicaría 1976, CNBB, órdenes religiosas, legitimidad moral.",
          "Freno: Puebla 1979 (clero sin política), Juan Pablo II en Managua 1983, Instrucción de Ratzinger 1984, silencio a Boff 1985.",
          "Klaiber: unida protegió (Chile, Brasil); dividida falló (Argentina). Levine: la jerarquía como mediadora.",
          "Conclusión: «no una posición sino una trayectoria»: dio lenguaje, luego lo reguló y lo condenó."
        ] },
      { titulo: "Plan E · ¿Fue la TL más política que religiosa?",
        tesis: "Fue inseparablemente las dos cosas: su política nacía de su teología (la fe exige transformar las estructuras), y para la mayoría de los pobres rezar y organizarse eran la misma lucha.",
        pasos: [
          "Lo religioso: lectura «desde abajo» de la Biblia, opción por los pobres, martirio como argumento teológico (Sobrino).",
          "Lo político: concientización, CEBs como organización, Nicaragua, cristianos por el socialismo.",
          "Löwy: «cristianismo de la liberación», un movimiento social. Levine: la mayoría de las CEBs era más religiosa que política.",
          "Síntesis: la politización fuerte fue de élites de activistas; la masa vivía fe y organización como una sola cosa.",
          "Conclusión: la dicotomía es falsa; la novedad fue preguntar por qué el pobre es pobre, una pregunta a la vez religiosa y política."
        ] },
      { titulo: "Plan F · Analice el caso de Nicaragua (o El Salvador)",
        tesis: "Nicaragua es el único caso donde la TL participó de una revolución triunfante, pero como aliada y no como motor, y a costa de dividir profundamente a la Iglesia.",
        pasos: [
          "Concientización en los 70 (Solentiname, Misa campesina 1975) → pobres «más dispuestos a apoyar a los grupos revolucionarios».",
          "Triunfo sandinista 19-7-1979; tres curas en el gabinete; FSLN declara (1980) que no hay contradicción con el cristianismo.",
          "«Aliada, no motor»: el FSLN es guerrilla marxista-nacionalista de 1961; la TL aportó cuadros y legitimidad.",
          "División eclesial: Iglesia popular vs. Obando y Bravo; reacción del Vaticano (Managua 1983, suspensión 1985).",
          "Contraste con El Salvador: igual presencia de TL, pero no revolución sino guerra civil (Romero mártir). Löwy no se puede generalizar.",
          "Conclusión: impacto político real pero excepcional y mediado por la jerarquía."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida tuvo un importante impacto la TL en América Latina?» (Mayo 2021, Q28)",
        parrafos: [
          { texto: "A fines de los años sesenta, tres corrientes convergieron en América Latina: la renovación de la Iglesia tras el Concilio Vaticano II (1962–65), el desencanto con el «desarrollo» prometido por la Alianza para el Progreso —que las teorías de la dependencia explicaban como un fracaso estructural— y el impacto político de la Revolución cubana (1959). De esa convergencia nació la teología de la liberación: una corriente del catolicismo latinoamericano que, cristalizada en Medellín (1968) y bautizada por el peruano Gustavo Gutiérrez en 1971, sostuvo que la fe exige luchar contra las estructuras que producen pobreza. Que tuvo un impacto importante es difícil de negar; la cuestión es dónde y de qué tipo. Este ensayo sostiene que fue importante pero asimétrico: profundo en la propia Iglesia y en la conciencia de los pobres, indirecto en la política —salvo Nicaragua— y, paradójicamente, amplificado por la represión que desató.", nota: "Intro en tres oraciones: contexto, definición KISS, tesis con «asimétrico» + anuncio de ejes." },
          { texto: "El primer impacto, y el más duradero, fue sobre la Iglesia misma. Medellín habló de «violencia institucionalizada» y definió la pobreza como una «situación de pecado», un lenguaje inédito en documentos episcopales. Once años después, Puebla (1979), pese a su clima conservador bajo Juan Pablo II, adoptó oficialmente la «opción preferencial por los pobres»: la Iglesia «se centró en los pobres, en lugar de los ricos». El giro produjo obispos como Câmara en Recife, Arns en São Paulo o Silva Henríquez en Chile, cuya Vicaría de la Solidaridad (1976) fue durante años el único espacio legal de defensa de los perseguidos bajo Pinochet. Como muestra Jeffrey Klaiber, donde el episcopado estuvo unido —Chile, Brasil— la Iglesia se convirtió en la institución de derechos humanos más eficaz del continente; donde se dividió, como en Argentina, fracasó. El impacto eclesial fue real pero desigual, y dependió de que la jerarquía respaldara a su clero de base.", nota: "Eclesial con Klaiber integrado (tesis específica), no de adorno." },
          { texto: "El segundo impacto fue social. A través de la «concientización» de Paulo Freire y de las comunidades eclesiales de base —unas 80.000 sólo en Brasil hacia 1980— los pobres «comenzaron a darse cuenta de que la situación socioeconómica en la que se encontraban no era moralmente aceptable dentro de su fe católica». Michael Löwy ve en estas comunidades un auténtico movimiento social, el «cristianismo de la liberación», y recuerda que de ellas salieron los cuadros del PT (1980) y del MST. Daniel Levine, en cambio, advierte que la mayoría estaba más ocupada en conseguir agua y luz que en hacer la revolución. Ambas lecturas son compatibles: el impacto social fue menos una movilización revolucionaria que un cambio en la cultura política de los pobres —voz, dignidad, capacidad de organizarse— que precisamente por ser cultural resultó lento y difícil de revertir.", nota: "Social con Löwy vs. Levine contrastados y sintetizados; separa niveles de impacto." },
          { texto: "El impacto político directo fue mucho más limitado, con una gran excepción. En Nicaragua, los sacerdotes que difundieron la teología de la liberación en los setenta volvieron a los pobres «más dispuestos a apoyar a los grupos revolucionarios»; cuando Somoza no garantizó sus derechos, esos pobres apoyaron al FSLN, que triunfó el 19 de julio de 1979, con tres curas en el gabinete. Löwy considera este caso la prueba de un impacto decisivo; el argumento es sólido para Nicaragua, pero no se puede generalizar: en El Salvador, con una presencia igual del movimiento, Romero fue asesinado el 24 de marzo de 1980 y el país no obtuvo una revolución sino doce años de guerra civil. Y Nicaragua fue, además, una revolución donde la Iglesia popular fue aliada del FSLN, no su motor, y donde la jerarquía de Obando y Bravo terminó en la oposición.", nota: "Político con Löwy evaluado (sólido para Nicaragua, no generalizable) + «aliada, no motor»." },
          { texto: "Un indicador alternativo del impacto es la magnitud de la reacción que provocó. Según Penny Lernoux, entre Medellín y Puebla 850 sacerdotes y religiosas fueron torturados, asesinados, expulsados o arrestados; en El Salvador los paramilitares proclamaban «Sé patriota, mata a un cura», y en diciembre de 1980 cuatro misioneras estadounidenses fueron asesinadas por la Guardia Nacional. El Documento de Santa Fe (1980) recomendó «contrarrestar» la teología de la liberación como arma soviética, y en 1984 la Instrucción de Ratzinger condenó su uso del análisis marxista. Oligarquías, ejércitos, Washington y Roma rara vez coincidieron en algo; que coincidieran en esto mide la importancia que le atribuían. Pero esa misma reacción marca los límites: en El Salvador y Guatemala el saldo inmediato fue la masacre, no la reforma; y tras 1989 el movimiento se volvió «menos político».", nota: "Reacción como medida del impacto (Lernoux) + límites." },
          { texto: "En conclusión, la afirmación es correcta en gran medida, a condición de precisar la naturaleza del impacto. La teología de la liberación cambió más a la Iglesia y a los pobres que a los Estados; su efecto político fue decisivo en Nicaragua, indirecto en Chile y Brasil, y trágico en El Salvador y Guatemala. Löwy acierta en la escala del fenómeno y Levine en su textura cotidiana: fue a la vez un movimiento histórico y un conjunto de pequeñas comunidades que pedían agua potable. Que Romero sea hoy santo (2018) y que un papa latinoamericano haya recibido a Gutiérrez en el Vaticano (2013) sugiere que el impacto más importante fue el más lento: el que se mide en décadas, no en revoluciones.", nota: "Conclusión con veredicto asimétrico + idea nueva, sin repetir." }
        ] },
      { titulo: "Ensayo 2 · «Discuta el impacto de la TL hasta 1980» (Noviembre 2021, Q28)",
        parrafos: [
          { texto: "La teología de la liberación —la corriente del catolicismo latinoamericano que, a partir de Medellín (1968) y del libro de Gutiérrez (1971), sostuvo que la fe exige combatir las estructuras que producen pobreza— tuvo hasta 1980 un impacto creciente y de tres tipos: doctrinal, organizativo y político. El año 1980 es un corte significativo: en él se asesinó a monseñor Romero y a cuatro misioneras en El Salvador, se fundó el PT en Brasil y los asesores de Reagan recomendaron «contrarrestar» el movimiento en el Documento de Santa Fe. Este ensayo discute ese impacto en tres etapas —génesis doctrinal (1968–72), expansión bajo las dictaduras (1973–78) y clímax político (1979–80)— para argumentar que fue importante, pero más eclesial y social que político, y que ya en 1980 estaba siendo contenido.", nota: "Intro: justifica el corte 1980 + tesis de tres etapas." },
          { texto: "El primer impacto fue doctrinal y se concentró entre 1968 y 1972. Medellín aplicó el Vaticano II a América Latina con un lenguaje sin precedentes: la injusticia como «violencia institucionalizada», la pobreza como «situación de pecado». Gutiérrez sistematizó esas intuiciones en 1971, reemplazando la idea de «desarrollo» por la de «liberación», tomada de las teorías de la dependencia. En Perú la ONIS (1968) apoyó la reforma agraria de Velasco Alvarado (1969); en Chile, ochenta sacerdotes formaron Cristianos por el Socialismo (1971); en Brasil, Boff publicó Jesucristo liberador (1972). Michael Löwy subraya que se trató de un fenómeno latinoamericano original, una «afinidad electiva» entre la crítica cristiana y la marxista del capitalismo. En esta etapa el impacto fue sobre todo intelectual y clerical.", nota: "Etapa doctrinal con Löwy (originalidad/afinidad electiva)." },
          { texto: "La segunda etapa, entre los golpes de 1973 y 1976 y el fin de la década, fue la del impacto organizativo. Al prohibir partidos y sindicatos, las dictaduras dejaron a la parroquia como único espacio legal, y la pastoral se volvió política aunque no quisiera. En Brasil las CEBs se multiplicaron hasta rondar las 80.000, protegidas por la CNBB; en Chile, Silva Henríquez creó la Vicaría de la Solidaridad (1976). Daniel Levine ha mostrado que este crecimiento dependió de la mediación de la jerarquía: donde el obispo protegió, florecieron; donde las abandonó, fueron destruidas. Argentina lo confirma por contraste: el MSTM fue aniquilado —Mugica en 1974, Angelelli en 1976— sin que la jerarquía lo defendiera. En El Salvador, el asesinato de Rutilio Grande (1977) radicalizó al moderado Romero: la represión fabricaba teólogos de la liberación.", nota: "Etapa organizativa con Levine (mediación) + Klaiber implícito (Argentina)." },
          { texto: "La tercera etapa, 1979–80, fue la del máximo impacto político. En Puebla (1979), pese al nuevo papa y a un CELAM reorganizado por López Trujillo, el episcopado adoptó oficialmente la «opción preferencial por los pobres». Cinco meses después, el 19 de julio de 1979, los sandinistas derrocaron a Somoza; tres sacerdotes ocuparon ministerios y Fernando Cardenal dirigió en 1980 la Cruzada de Alfabetización. En febrero de 1980, militantes de las CEBs fundaron con Lula el PT. Löwy ve aquí la confirmación de su tesis; conviene matizarla: la Iglesia popular fue aliada del FSLN, no su motor, y la Iglesia nicaragüense quedó «profundamente dividida» entre esa Iglesia popular y la jerarquía de Obando y Bravo.", nota: "Clímax político con Löwy evaluado + matiz «aliada, no motor»." },
          { texto: "Pero 1980 mostró también el techo del impacto. El 24 de marzo Romero fue asesinado durante la misa; el 2 de diciembre, cuatro religiosas estadounidenses fueron asesinadas por la Guardia Nacional. Según Penny Lernoux, entre Medellín y Puebla 850 religiosos habían sido reprimidos; el lema «Sé patriota, mata a un cura» resumía la respuesta de las oligarquías. El Documento de Santa Fe definió la TL como instrumento del comunismo, y la propia Puebla había exigido «trabajo comunitario sin compromiso político para el clero»: la misma conferencia que consagró la opción por los pobres empezó a regularla. Levine tiene razón en que la represión golpeó sobre todo a los activistas, no a la masa, pero eso mismo revela el límite: el movimiento tenía mártires y comunidades, no poder.", nota: "1980 como techo: represión (Lernoux) + reacción vaticana/EE. UU. + límite." },
          { texto: "En conclusión, hasta 1980 la teología de la liberación tuvo un impacto importante y creciente: dio a la Iglesia un nuevo lenguaje y una opción oficial, dotó a los pobres de una infraestructura que sobrevivió a las dictaduras y, en Nicaragua, contribuyó a una revolución. Pero su impacto político fue indirecto fuera de ese caso, y en 1980 ya se perfilaba la coalición —oligarquías, ejércitos, Washington y un sector de Roma— que lo contendría en la década siguiente. El asesinato de Romero condensa ambas caras: prueba de cuánto importaba el movimiento y de cuán poco poder tenía para protegerse.", nota: "Conclusión con una sola oración sobre lo posterior a 1980, respetando el corte." }
        ] }
    ],
    guia: {
      tesis: "Respondé la pregunta con un adjetivo evaluativo. Tesis maestra para impacto: «La teología de la liberación tuvo un impacto importante pero asimétrico: profundo en la Iglesia y en la conciencia de los pobres, indirecto en la política (salvo Nicaragua) y amplificado por la represión que desató.»",
      argumentos: [
        "Usá las tres P (Pobres, Praxis, Poder) en cada párrafo para equilibrar.",
        "Separá siempre los tres niveles de impacto: conciencia (social) → organización (CEBs) → poder (Estado).",
        "Intro en tres oraciones: contexto (años 60: Vaticano II + Cuba + dependencia), definición KISS, tesis con «asimétrico» + anuncio de ejes."
      ],
      evidencia: [
        "Orígenes: Vaticano II 1962–65, Populorum Progressio 1967, Cuba 1959, Medellín 1968, Gutiérrez 1971.",
        "Expansión/impacto: CEBs ≈80.000 (Brasil), FSLN 19-7-1979, Romero 24-3-1980, misioneras 2-12-1980, PT feb 1980.",
        "Represión: 850 religiosos 1968–79 (Lernoux), «Sé patriota, mata a un cura», Documento de Santa Fe 1980."
      ],
      historiografia: [
        "Löwy (impacto grande, «cristianismo de la liberación», afinidad electiva) vs. Levine (modesto y mediado, cultura política).",
        "Regalo: Lernoux (850 religiosos, está en tu libro) y Klaiber (unidad episcopal como variable).",
        "Nunca de adorno: historiador + tesis específica + tu evaluación (ej.: Löwy sólido para Nicaragua pero no generalizable)."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej. «la TL cambió a la Iglesia, no a los Estados: ninguna dictadura cayó por ella») y refutala mostrando que el impacto fue cultural y organizativo —más lento y más duradero— y que la magnitud de la reacción (Lernoux, Santa Fe, Ratzinger) prueba su importancia."
    }
  }
});
