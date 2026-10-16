/* ============================================================
   tema-t8-vietnam.js — Paper 2, Tema 8 (Movimientos independentistas)
   Vietnam y Ho Chi Minh (1930–1975)
   Transcripción fiel del PDF "Tema8_en_profundidad_Cuba_Vietnam".
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "t8-vietnam",
  carpeta: "p2-t8",
  titulo: "Vietnam: Ho Chi Minh",
  subtitulo: "Movimiento independentista vietnamita · 1930/41–1975 · origen, métodos y primeros 10 años",
  periodo: "Origen y métodos 1930/41–1954 (extensible a 1975) · «Primeros 10 años» 1975–1985",
  estado: "listo",
  etiquetas: ["Paper 2", "Tema 8", "independencia", "Vietnam", "Ho Chi Minh", "Viet Minh", "Dien Bien Phu", "guerra popular", "comunismo"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Vietnam no tuvo que inventar su nación: la activó. Sobre una identidad milenaria de resistencia a China, Ho Chi Minh fusionó nacionalismo y marxismo-leninismo —tras el portazo de Versalles (1919), Lenin le dio teoría y una organización mundial— y construyó algo que a Cuba le faltó: una organización que gobernaba el territorio antes de vencer. Cuando la Segunda Guerra destruyó a Francia y abrió el vacío de 1945, el Viet Minh —la única fuerza organizada— lo llenó. Dien Bien Phu (1954) venció a Francia y la Ofensiva del Tet (1968) quebró la voluntad de EE. UU.: la independencia y la reunificación de 1975 fueron completas, sin Enmienda Platt — pero costaron ~3 millones de muertos y una década de miseria (boat people, Camboya, China).",
    historiadoresLinea: [
      { nombre: "Duiker", linea: "«PRAGMÁTICO»: Ho fue nacionalista antes que comunista; el marxismo fue la herramienta más eficaz; su genio fue subordinar la ideología a la independencia (frente amplio, Jefferson en 1945)." },
      { nombre: "Logevall", linea: "«ELIGIERON»: Francia y EE. UU. eligieron guerras evitables e inganables por prestigio y política interna; el desenlace dependió tanto de París/Washington como de Hanói." },
      { nombre: "Marr", linea: "«AGOSTO POPULAR»: la Revolución de Agosto de 1945 fue un levantamiento espontáneo y plural que el Viet Minh encauzó más que dirigió; el nacionalismo tenía raíces largas." },
      { nombre: "Quinn-Judge", linea: "«LE DUAN»: Ho fue un agente disciplinado de la Komintern con menos poder del que dice el mito; desde 1960 la guerra la dirigió la línea dura de Le Duan." },
      { nombre: "De reserva", linea: "Kolko («ALDEAS»: ganó la movilización social campesina) vs. Moyar («AUTODERROTA»: EE. UU. se derrotó solo) — juntos confirman a Giap: la guerra popular se gana en la voluntad del enemigo." }
    ],
    datosClave: [
      { grupo: "Vietnam: datos que valen oro", items: [
        "Mil años de provincia china (hasta 939) y nueve siglos resistiendo invasiones: identidad nacional antiquísima (hermanas Trung, Le Loi, Tran Hung Dao).",
        "Conquista francesa 1858–85; Unión Indochina (1887): Vietnam partido en tres (Tonkín, Annam, Cochinchina) + Camboya y Laos.",
        "Sistema colonial explotador: monopolios de sal, alcohol y opio; capitación; corvée; plantaciones de caucho (Michelin). En Cochinchina (años 30) ~70% de la tierra en manos del 6%.",
        "Resistencias fracasadas: Can Vuong (1885–96, Phan Dinh Phung); Phan Boi Chau y Phan Chu Trinh; VNQDD y el motín de Yen Bai (1930, 13 líderes guillotinados).",
        "Ho (1890–1969, Nguyen Ai Quoc): Versalles (1919) sin respuesta → Lenin (1920), PCF; Moscú (1923–24, Komintern); Thanh Nien (1925, Cantón).",
        "Feb 1930: Partido Comunista Indochino (PCI, Hong Kong). Soviets de Nghe-Tinh (1930–31) reprimidos; Poulo Condore lleno de comunistas.",
        "May 1941: Viet Minh (cueva de Pac Bo), frente amplio. Dic 1944: Giap forma la primera unidad — 34 hombres.",
        "1945: golpe japonés (marzo) elimina la administración francesa; hambruna de Tonkín (~1–2 M †); rendición japonesa (15 ago) → Revolución de Agosto; Bao Dai abdica. 2 sep 1945: Ho proclama la RDV citando la Declaración de Independencia de EE. UU.; 8 cartas a Truman sin respuesta.",
        "Haiphong (nov 1946, ~6.000 †) → guerra (19 dic). Guerra popular prolongada en 3 fases (Giap/Mao); China comunista (1949) da santuario y armas.",
        "Dien Bien Phu (13 mar–7 may 1954): 200.000 porteadores, ~11.000 prisioneros. Ginebra (jul 1954): independencia + partición por el paralelo 17 + elecciones prometidas para 1956.",
        "Diem rechaza las elecciones (1956); persigue budistas (autoinmolaciones 1963); golpe y muerte de Diem (nov 1963). FNL/«Viet Cong» (1960); ruta Ho Chi Minh (1959).",
        "Norte: reforma agraria 1953–56 con ejecuciones (5.000–15.000); Ho pide perdón (1956).",
        "Tonkín (1964); Rolling Thunder (1965–68); pico de 536.000 tropas de EE. UU. (1968); Tet (ene 1968): derrota militar del FNL (~40.000 †), victoria política; My Lai (mar 1968).",
        "Ho † (sep 1969); Le Duan dirige. Vietnamización de Nixon. París (27 ene 1973). Saigón cae el 30 abr 1975 (55 días). Balance: ~3 M vietnamitas †, 58.000 estadounidenses.",
        "RSV (jul 1976); reeducación 200.000–300.000; boat people >1 M; hoa expropiados (1978); Camboya (dic 1978) y guerra con China (feb–mar 1979); embargo; inflación 300%+ (1985). Doi Moi (dic 1986) → 3.er exportador de arroz (1989)."
      ]}
    ],
    comparacion: [
      { eje: "Identidad", texto: "El nacionalismo vietnamita solo había que activarlo (identidad milenaria contra China); el cubano hubo que inventarlo. Ventaja de partida." },
      { eje: "Organización", texto: "Vietnam organizó el territorio (PCI 1930 → Viet Minh 1941, contra-Estado en las montañas); Cuba organizó el exilio. De ahí 1945 vs. 1898." },
      { eje: "Ideología", texto: "Nacionalismo + marxismo-leninismo: la reforma agraria movilizó al 80% campesino. Una ideología para transformar la sociedad, no solo para fundar una república." },
      { eje: "Liderazgo", texto: "Ho duró 30 años más que Martí y el sistema lo sobrevivió (Le Duan hasta 1975): liderazgo institucional y longevo, no personal y trunco." },
      { eje: "Resultado", texto: "Independencia real 1954, reunificación 1975, sin Platt — pero con una década de miseria (boat people, Camboya, China): soberanía sin crecer." }
    ],
    veredictos: [
      { titulo: "La guerra como factor", texto: "La SGM fue condición suficiente del vacío de 1945, y el Viet Minh, condición suficiente de que ese vacío lo llenara la independencia: el mejor ejemplo del temario de interacción entre factor externo y organización interna." },
      { titulo: "Causas del éxito", texto: "El éxito vietnamita fue la integración de todos los métodos —militar, social, diplomático, propagandístico— bajo un solo mando; el cubano fue la ejecución brillante de uno solo (el militar) sin los demás." },
      { titulo: "Primeros 10 años", texto: "Vietnam ganó la soberanía plena que a Cuba le faltó, y la pagó con una década de miseria: reeducación, colectivización fallida, boat people y dos guerras nuevas, hasta el Doi Moi (1986)." }
    ]
  },

  /* ===================== HISTORIADORES (4 del PDF + reserva regalo) ===================== */
  historiadores: [
    {
      nombre: "William Duiker", nacionalidad: "Historiador estadounidense",
      obra: "Ho Chi Minh: A Life",
      postura: "«PRAGMÁTICO»: nacionalista antes que comunista",
      funcion: "Liderazgo, ideología, nacionalismo.",
      ideaCentral: "Ho fue primero nacionalista y siempre pragmático: el comunismo fue la herramienta más eficaz disponible para la independencia, y toda su carrera muestra la ideología subordinada al objetivo nacional (Versalles antes que Lenin; frentes amplios; citar a Jefferson en 1945). Frente a la espontaneidad popular de 1945, subraya lo que hace la diferencia: solo el Viet Minh tenía la organización para convertir el vacío en Estado.",
      matiz: "La fusión nacionalismo-comunismo no fue una máscara sino una síntesis real — y fue exactamente lo que le faltó a Cuba: una ideología que además organizara.",
      fraseLista: "Duiker ve en Ho al hombre indispensable: un nacionalista pragmático para quien el marxismo fue la herramienta más eficaz de la independencia, no un fin en sí mismo.",
      paraPreguntas: ["Liderazgo", "Ideología / nacionalismo", "La guerra como catalizador", "Si solo recordás uno de Vietnam, este"]
    },
    {
      nombre: "Fredrik Logevall", nacionalidad: "Historiador estadounidense (sueco de origen)",
      obra: "Embers of War · Choosing War",
      postura: "«ELIGIERON»: guerras evitables por prestigio",
      funcion: "Factores externos, guerra, debilidad colonial.",
      ideaCentral: "Responde desde las capitales enemigas: Francia y Estados Unidos eligieron guerras evitables e inganables por razones de prestigio y política interna; hubo momentos (1945–46, 1963–65) en que la decisión contraria era posible. El factor externo y la contingencia pesan tanto como Hanói.",
      matiz: "No niega la fuerza de Hanói, pero descentra el relato: el desenlace también se decidió en París y en Washington, no solo en Vietnam.",
      fraseLista: "Para Logevall, Francia y EE. UU. eligieron guerras evitables e inganables por prestigio y política interna; el desenlace dependió tanto de las capitales enemigas como de Hanói.",
      paraPreguntas: ["Factores externos vs. internos", "La guerra como factor", "Debilidad de la metrópoli"]
    },
    {
      nombre: "David Marr", nacionalidad: "Historiador australiano",
      obra: "Vietnam 1945",
      postura: "«AGOSTO POPULAR»: levantamiento espontáneo encauzado",
      funcion: "La guerra como catalizador, factores internos, nacionalismo.",
      ideaCentral: "Matiza el relato oficial: la Revolución de Agosto de 1945 fue en gran medida un levantamiento popular espontáneo y plural —comités locales, muchedumbres, notables— que el Viet Minh, con apenas unos miles de militantes, supo encauzar y capitalizar más que dirigir. El nacionalismo vietnamita tenía raíces largas (hasta Can Vuong).",
      matiz: "Es el matiz al mito del Viet Minh todopoderoso: hubo espontaneidad por todas partes, pero solo el Viet Minh tenía la organización para convertirla en Estado (ahí Duiker lo completa).",
      fraseLista: "Marr recuerda que la Revolución de Agosto fue un levantamiento espontáneo y plural que el Viet Minh encauzó más que dirigió — pero fue el único con organización para volverlo Estado.",
      paraPreguntas: ["Guerra como catalizador", "Factores internos", "Nacionalismo (raíces largas)"]
    },
    {
      nombre: "Sophie Quinn-Judge", nacionalidad: "Historiadora estadounidense",
      obra: "Ho Chi Minh: The Missing Years",
      postura: "«LE DUAN»: Ho, agente de la Komintern con menos poder del que dice el mito",
      funcion: "Contraargumento en liderazgo.",
      ideaCentral: "Trabajando con los archivos de la Komintern, complica el cuadro de Duiker: Ho fue un agente disciplinado de Moscú, a veces marginado por sus propios camaradas por «nacionalista», y con menos control del partido del que sugiere el mito — desde 1960, la línea dura de Le Duan dirigió la guerra más que él.",
      matiz: "Sirve como contraargumento en liderazgo: ni siquiera en Vietnam el éxito dependió de un solo hombre; el liderazgo era una institución, no una persona.",
      fraseLista: "Quinn-Judge recuerda que desde 1960 dirigía Le Duan: el liderazgo vietnamita era una institución, no una persona.",
      paraPreguntas: ["Liderazgo (¿dependió del líder?)", "Contraargumento a Duiker"]
    },
    {
      nombre: "Kolko vs. Moyar (de reserva)", regalo: true, nacionalidad: "Debate de examen (reserva)",
      obra: "Kolko, Anatomy of a War · Moyar, Triumph Forsaken",
      postura: "«ALDEAS vs. AUTODERROTA»",
      ideaCentral: "Kolko responde desde las aldeas: ganó la movilización social — el bando que ofrecía tierra, dignidad nacional y un Estado presente derrotó a un régimen survietnamita sin base propia. Moyar, en refutación conservadora, sostiene que la guerra era ganable y que EE. UU. se autoderrotó (prensa, golpe contra Diem). Juntos confirman, en negativo, la doctrina de Giap: la guerra popular se gana en la voluntad política del enemigo.",
      fraseLista: "Kolko ve ganar a la movilización social de las aldeas; Moyar, una autoderrota estadounidense — ambos confirman a Giap: la guerra popular se gana en la voluntad del enemigo.",
      paraPreguntas: ["Métodos", "Opinión pública", "Causas del éxito"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 939, fecha: "hasta 1887", pais: "Vietnam", titulo: "Mil años de resistencia · conquista francesa",
      descripcion: "Vietnam fue provincia china durante mil años (hasta 939) y pasó nueve siglos rechazando invasiones chinas (hermanas Trung, Le Loi, Tran Hung Dao). Francia conquista gradualmente (1858–85) y en 1887 organiza la Unión Indochina: Vietnam partido en tres (Tonkín, Annam, Cochinchina) más Camboya y Laos.",
      causas: ["Identidad nacional antiquísima forjada resistiendo al extranjero.", "«Dividir para reinar»: reglas distintas por región y un emperador decorativo en Hue."],
      consecuencias: ["Cuando Ho apele al nacionalismo, no inventará una nación: activará una memoria milenaria.", "Diferencia con Cuba, donde la nación había que construirla."],
      historiador: "Marr: el nacionalismo tenía raíces largas." },
    { anio: 1887, fecha: "1887–1929", pais: "Vietnam", titulo: "El sistema colonial más explotador de Asia",
      descripcion: "Monopolios estatales de sal, alcohol y opio (precios fijados; los campesinos obligados por ley a comprar alcohol), impuesto de capitación en dinero, corvée (trabajo forzado) y plantaciones de caucho (Michelin) con condiciones asesinas.",
      causas: ["La «misión civilizadora» educó en francés a una minoría ínfima — de la que saldrían los revolucionarios."],
      consecuencias: ["Concentración brutal de la tierra: en Cochinchina (años 30), ~70% en manos del 6%.", "Un campesinado (>80% de la población) empobrecido y sin nada que perder."] },
    { anio: 1919, fecha: "1919", pais: "Francia", titulo: "El portazo de Versalles",
      descripcion: "Ho (Nguyen Ai Quoc) aprovecha la conferencia de paz y la retórica de Wilson para presentar una petición modestísima (derechos legales, representación — ni siquiera la independencia). Nadie le contesta.",
      causas: ["Treinta años de exilio: marinero, fotógrafo en París, pastelero en Londres."],
      consecuencias: ["Aprende que las potencias liberales no darán nada.", "Al año siguiente, lee las «Tesis» de Lenin: teoría del colonialismo + una organización mundial dispuesta a destruirlo."],
      historiador: "Duiker: Versalles antes que Lenin — nacionalista primero, pragmático siempre." },
    { anio: 1930, fecha: "feb 1930", pais: "Vietnam / Hong Kong", titulo: "PCI · soviets de Nghe-Tinh",
      descripcion: "Tras fundar el PCF (1920), formarse en Moscú (1923–24, Komintern) y organizar la Thanh Nien (1925, Cantón), Ho unifica las facciones en el Partido Comunista Indochino (PCI, Hong Kong, feb 1930). Ese año la Depresión hunde el arroz y estallan los soviets de Nghe-Tinh (1930–31).",
      causas: ["El VNQDD lanzó el motín de Yen Bai (1930): aplastado, 13 líderes guillotinados. Fin del nacionalismo no comunista."],
      consecuencias: ["Francia reprime Nghe-Tinh con bombardeos y miles de muertos; Poulo Condore se llena de comunistas.", "Lección: el PCI era el único capaz de movilizar campesinos, pero sin coyuntura externa la insurrección era suicida."],
      historiador: "Como en Cuba con 1868: el fracaso fue la escuela." },
    { anio: 1941, fecha: "may 1941", pais: "Vietnam", titulo: "Viet Minh (Pac Bo) · los 34 de Giap",
      descripcion: "Ho vuelve a Vietnam en 1941 tras treinta años y funda el Viet Minh (Liga para la Independencia de Vietnam) en la cueva de Pac Bo: un frente patriótico amplio con el comunismo discretamente al mando y un solo eslogan, independencia. Construye bases en el Viet Bac; Giap forma la primera unidad armada: 34 hombres (dic 1944).",
      causas: ["En 1940 Alemania derrota a Francia y Japón ocupa Indochina dejando administrar a Vichy: dos amos, prestigio blanco destruido."],
      consecuencias: ["Esos 34 hombres serán, en diez años, el ejército que derrota a Francia."] },
    { anio: 1945, fecha: "1945", pais: "Vietnam", titulo: "El vacío perfecto · Revolución de Agosto · RDV",
      descripcion: "Marzo: golpe japonés que desmantela en un día la administración francesa. Hambruna de Tonkín (~1–2 M †): el Viet Minh asalta graneros y recluta al instante. 15 ago: rendición japonesa → Revolución de Agosto; Bao Dai abdica entregando el sello imperial. 2 sep 1945: ante medio millón de personas en Hanói, Ho proclama la RDV citando la Declaración de Independencia de EE. UU.",
      causas: ["La SGM crea el vacío de poder perfecto; la hambruna da la causa de masas."],
      consecuencias: ["El Viet Minh, única fuerza organizada, toma el poder ciudad por ciudad.", "Ho escribe 8 cartas a Truman pidiendo apoyo: ninguna fue respondida. Versalles, otra vez."],
      historiador: "Marr: levantamiento espontáneo que el Viet Minh encauzó. Duiker: solo el Viet Minh tenía la organización para volverlo Estado." },
    { anio: 1946, fecha: "1946–1949", pais: "Vietnam", titulo: "Guerra con Francia · fase defensiva",
      descripcion: "Fracasa el acuerdo Ho–Sainteny (mar 1946) y las negociaciones de Fontainebleau; la escalada termina en el bombardeo naval de Haiphong (nov, ~6.000 † civiles). El 19 dic empieza la guerra. Fase defensiva: ceder las ciudades, sobrevivir en las montañas y construir el contra-Estado (impuestos, alfabetización, reparto de tierra en las «zonas liberadas»).",
      causas: ["Para el prestigio de posguerra, Francia considera existencial recuperar el imperio."],
      consecuencias: ["«Pueden matar a diez de los nuestros por cada uno que matemos de los suyos, pero aun así ellos perderán»: la apuesta es el tiempo y la voluntad."] },
    { anio: 1954, fecha: "13 mar–7 may 1954", pais: "Vietnam", titulo: "Dien Bien Phu · Acuerdos de Ginebra",
      descripcion: "Giap realiza la «fantasía» imposible: 200.000 porteadores suben cañones chinos pieza por pieza a las montañas que rodean el valle. El asedio dura 56 días; la guarnición francesa se rinde con ~11.000 prisioneros, la víspera de la conferencia de Ginebra. Los Acuerdos (jul 1954) reconocen la independencia pero parten el país por el paralelo 17, con elecciones de reunificación prometidas para 1956.",
      causas: ["La victoria comunista en China (1949) dio santuario, entrenamiento y armas; EE. UU. pagaba ~80% del costo francés."],
      consecuencias: ["Sincronización deliberada de lo militar con lo diplomático.", "Ho acepta la partición bajo presión de China y la URSS: hasta el vencedor dependía de la Guerra Fría."],
      historiador: "Logevall: Francia eligió una guerra inganable. Kolko: el contra-Estado ganó la base social." },
    { anio: 1963, fecha: "1954–1963", pais: "Vietnam del Sur", titulo: "Diem rechaza las elecciones",
      descripcion: "Las elecciones de 1956 nunca se celebran: Ngo Dinh Diem —católico, autoritario, apoyado por EE. UU.— proclama su propia república y las rechaza (todos sabían que Ho las ganaba). La «teoría del dominó» vuelve a Vietnam del Sur proyecto estadounidense ($1.000 M de ayuda, 1955–61).",
      causas: ["Diem persigue a los budistas (autoinmolaciones de monjes, 1963), revierte la reforma agraria del Viet Minh y gobierna con su familia."],
      consecuencias: ["Washington bendice el golpe que lo mata (nov 1963).", "Desde 1959–60: FNL/«Viet Cong» (1960) y ruta Ho Chi Minh por Laos y Camboya."] },
    { anio: 1968, fecha: "ene–feb 1968", pais: "Vietnam", titulo: "Ofensiva del Tet · My Lai",
      descripcion: "El FNL ataca simultáneamente un centenar de ciudades, incluida la embajada de EE. UU. en Saigón. Militarmente es un desastre para los atacantes (~40.000 †, el FNL queda quebrado); políticamente es la victoria decisiva: la TV muestra que, tras tres años y miles de muertos propios, el enemigo puede atacar en todas partes.",
      causas: ["Escalada de EE. UU.: incidente de Tonkín (1964), Rolling Thunder (1965–68), pico de 536.000 tropas (1968)."],
      consecuencias: ["Johnson renuncia a la reelección y empieza la retirada.", "My Lai (mar 1968, ~400–500 civiles masacrados, revelado en 1969) desmorona el frente interno."],
      historiador: "Moyar: EE. UU. se autoderrotó (prensa). Giap: la guerra popular se gana en la voluntad del enemigo." },
    { anio: 1975, fecha: "1969–1975", pais: "Vietnam", titulo: "Vietnamización · París 1973 · caída de Saigón",
      descripcion: "Ho muere en sep 1969; Le Duan dirige. Nixon «vietnamiza» (retira tropas, arma al ARVN) y negocia en París (acuerdos de ene 1973: EE. UU. se va, el ejército norvietnamita se queda en el sur — la cláusula que decide todo). En la primavera de 1975 la ofensiva final disuelve al sur en 55 días: Saigón cae el 30 abr 1975.",
      causas: ["El frente interno estadounidense ya estaba roto tras Tet y My Lai."],
      consecuencias: ["Independencia y reunificación completas, sin Enmienda Platt.", "Costo total: ~3 M de vietnamitas †, 58.000 estadounidenses, un país arrasado."],
      historiador: "Quinn-Judge: desde 1960 dirigía Le Duan — liderazgo institucional, no personal." },
    { anio: 1979, fecha: "1975–1986", pais: "Vietnam", titulo: "La victoria empobrecida · Camboya y China · Doi Moi",
      descripcion: "Reunificación formal (RSV, jul 1976) = absorción del sur por el norte: 200.000–300.000 por campos de «reeducación». La colectivización del sur fracasa; la campaña de 1978 contra el «comercio burgués» expropia a la minoría china (hoa); embargo de EE. UU.; boat people (>1 M, 200.000–400.000 † en el mar). Dos guerras nuevas: Camboya (dic 1978) y China (feb–mar 1979). Inflación 300%+ (1985).",
      causas: ["Partido único (Le Duan) sin mecanismos de integración; autarquía económica."],
      consecuencias: ["La salida llega con el Doi Moi («renovación», dic 1986): mercado, inversión extranjera.", "En 1989 Vietnam es el 3.er exportador mundial de arroz; EE. UU. levanta el embargo (1994) y reconoce (1995)."],
      historiador: "Soberanía sin crecer: la corrección vietnamita llegó tarde pero llegó; la cubana, nunca (hasta 1959)." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Tema 8 del Paper 2 = <b>movimientos independentistas</b>, con la estructura de siempre: <b>origen y desarrollo → métodos y causas del éxito → desafíos tras la independencia</b>. Para Vietnam, el origen y los métodos van de <b>1930/41 a 1954</b> (extensible a 1975), y los «primeros 10 años» son <b>1975–1985</b>. Declaralo en la intro.</p>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Período: para «origen y métodos» arrancá en 1930 (PCI) o 1941 (Viet Minh); podés extender a 1975. «Primeros 10 años» = 1975–1985. Si mezclás los períodos sin declararlos, perdés claridad y banda.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>«Cada uno de una región diferente».</b> El Paper 2 pide dos regiones distintas: Vietnam (Asia) y Cuba (América) cumplen. Decilo en la primera línea del ensayo comparativo.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La frase que ordena todo el tema:</b> «Los factores externos crearon las oportunidades; la organización interna decidió quién las aprovechó — por eso el vacío de 1898 lo llenó Estados Unidos y el de 1945 lo llenó el Viet Minh.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario vietnamita:</b> <b>Unión Indochina</b> = Vietnam partido en tres (Tonkín, Annam, Cochinchina) + Camboya y Laos. <b>Komintern</b> = la internacional comunista (Moscú). <b>Viet Minh</b> = Liga para la Independencia de Vietnam (1941), frente amplio con el comunismo al mando. <b>Guerra popular prolongada</b> = doctrina de Giap en tres fases (defensa, equilibrio, contraofensiva). <b>Vietnamización</b> = política de Nixon: retirar tropas de EE. UU. y armar al ARVN survietnamita. <b>Boat people</b> = el >1 M que huyó en barcos tras 1975. <b>Doi Moi</b> = «renovación» (1986): mercado e inversión extranjera.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No uses 1959 como núcleo del Tema 8 (eso es Tema 10, Castro). Y recordá: el éxito vietnamita no fue de un solo hombre — desde 1960 dirigía Le Duan (Quinn-Judge).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuáles son los «primeros 10 años» de Vietnam para el Tema 8?", etiqueta: "fecha",
            opciones: [
              { texto: "1975–1985: de la reunificación a la víspera del Doi Moi.", correcta: true, explicacion: "Correcto: declaralo en la intro; origen y métodos son 1930/41–1954 (extensible a 1975)." },
              { texto: "1945–1955: de la Revolución de Agosto a Dien Bien Phu.", correcta: false, explicacion: "Ese es el origen y desarrollo, no los «primeros 10 años» tras la independencia plena." },
              { texto: "1954–1964: de los Acuerdos de Ginebra a la escalada estadounidense.", correcta: false, explicacion: "Es parte del desarrollo, no el decenio posterior a 1975." },
              { texto: "1986–1996: la primera década del Doi Moi.", correcta: false, explicacion: "El Doi Moi (1986) queda ya fuera del período de «primeros 10 años»." }
            ] },
          { pregunta: "¿Qué era el Viet Minh (1941)?", etiqueta: "concepto",
            opciones: [
              { texto: "La Liga para la Independencia de Vietnam: un frente amplio con el comunismo al mando y un solo eslogan, independencia.", correcta: true, explicacion: "Correcto: fundado en la cueva de Pac Bo; campesinos, obreros, intelectuales, minorías." },
              { texto: "El partido nacionalista republicano calcado del Kuomintang chino que lanzó el fracasado motín de Yen Bai en el año 1930.", correcta: false, explicacion: "Ese era el VNQDD, aplastado en Yen Bai (1930)." },
              { texto: "La internacional comunista con sede en Moscú que coordinaba a todos los partidos comunistas del mundo.", correcta: false, explicacion: "Esa es la Komintern, no el Viet Minh." },
              { texto: "El ejército regular survietnamita armado por EE. UU.", correcta: false, explicacion: "Ese era el ARVN; el Viet Minh era el frente independentista de Ho." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Contexto: mil años de resistencia y sesenta de colonia",
        html: `
          <p>Lo primero que hay que saber de Vietnam es que su <b>identidad nacional es antiquísima y se forjó resistiendo</b>. Fue provincia china mil años (hasta 939) y pasó nueve siglos rechazando invasiones chinas: las hermanas Trung, Le Loi y Tran Hung Dao son el equivalente de nuestros próceres.</p>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Marr: el nacionalismo tenía raíces largas. Clave para tus ensayos: cuando Ho apeló al nacionalismo, <b>no estaba inventando una nación, estaba activando una memoria milenaria</b> — diferencia con Cuba, donde la nación había que construirla casi desde cero.</div>

          <h3>La conquista y el sistema colonial</h3>
          <p>La conquista francesa fue gradual (1858–85) y en 1887 Francia organizó la Unión Indochina: dividir para reinar, con un emperador decorativo en Hue. El sistema fue de los más explotadores de Asia.</p>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Instrumento</th><th>Qué era</th></tr></thead>
            <tbody>
              <tr><td>Monopolios</td><td>Sal, alcohol y opio con precios fijados (los campesinos legalmente obligados a comprar alcohol).</td></tr>
              <tr><td>Capitación</td><td>Impuesto en dinero que forzaba a los campesinos a endeudarse o vender tierra.</td></tr>
              <tr><td>Corvée</td><td>Trabajo forzado en caminos y minas.</td></tr>
              <tr><td>Plantaciones</td><td>Arroz y caucho (Michelin) con condiciones de trabajo asesinas.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «En Cochinchina, hacia los años 30, alrededor del 70% de la tierra estaba en manos de un 6% de propietarios, y un campesinado que era más del 80% de la población quedó empobrecido y sin nada que perder.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> La «misión civilizadora» educó en francés a una minoría ínfima; de esa minoría, irónicamente, saldrían <b>todos</b> los revolucionarios.</div>
        `,
        miniQuiz: [
          { pregunta: "Según Marr, la diferencia clave de Vietnam con Cuba en la nación es que…", etiqueta: "historiador",
            opciones: [
              { texto: "El nacionalismo vietnamita había que activarlo (identidad milenaria), no inventarlo.", correcta: true, explicacion: "Correcto: mil años resistiendo a China; en Cuba la nación se construía desde cero." },
              { texto: "Vietnam nunca tuvo una identidad nacional previa a la llegada de Francia.", correcta: false, explicacion: "Al revés: su identidad era antiquísima (hermanas Trung, Le Loi)." },
              { texto: "El nacionalismo vietnamita fue un fenómeno puramente importado de la Unión Soviética por Ho.", correcta: false, explicacion: "Tenía raíces largas propias; el marxismo llegó después, con Ho." },
              { texto: "Vietnam y Cuba partían exactamente de la misma situación nacional.", correcta: false, explicacion: "Es justo el contraste que marca el PDF: activar vs. inventar." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Las resistencias fracasadas: por qué quedó el comunismo",
        html: `
          <p>La resistencia nunca paró, y sus fracasos sucesivos son la mejor explicación del triunfo comunista posterior. Ordenalos: cada camino no comunista fue probado y fracasó. Quedaba uno.</p>

          <ol class="escalera">
            <li><b>Resistencia monárquico-tradicional:</b> el movimiento Can Vuong («ayudar al rey», 1885–96, con Phan Dinh Phung): letrados confucianos peleando por restaurar el pasado — aplastada.</li>
            <li><b>Reformistas de principios de siglo:</b> Phan Boi Chau (buscar ayuda japonesa) y Phan Chu Trinh (modernizar con Francia) — vigilados, presos, sin masas.</li>
            <li><b>Nacionalistas republicanos del VNQDD</b> (partido calcado del Kuomintang chino): en 1930 lanzaron el motín de Yen Bai — aplastado en días, 13 líderes guillotinados, el partido destruido.</li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Cada camino no comunista había sido probado y había fracasado. Quedaba uno.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «¿por qué triunfó el comunismo?»: no fue solo ideología, fue <b>eliminación de competidores</b>. La represión francesa destruyó a monárquicos, reformistas y nacionalistas republicanos; el PCI quedó como la única estructura capaz de movilizar al campesinado (Nghe-Tinh, 1930–31).</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Como en Cuba con 1868, el fracaso fue la escuela: los soviets de Nghe-Tinh (1930–31), reprimidos con bombardeos y miles de muertos, probaron dos cosas — que el PCI era el único que podía movilizar campesinos, y que sin una coyuntura internacional favorable la insurrección era suicida.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué fue el motín de Yen Bai (1930)?", etiqueta: "fecha",
            opciones: [
              { texto: "La última apuesta del VNQDD nacionalista: aplastada en días, 13 líderes guillotinados.", correcta: true, explicacion: "Correcto: marcó el fin del nacionalismo no comunista como opción viable." },
              { texto: "El gran levantamiento comunista dirigido por el PCI que llevó a Ho directamente al poder.", correcta: false, explicacion: "No: Ho llega al poder en 1945; Yen Bai fue del VNQDD, no comunista." },
              { texto: "La primera gran victoria militar del Viet Minh contra Francia.", correcta: false, explicacion: "El Viet Minh es de 1941; Yen Bai fue un fracaso de 1930." },
              { texto: "El golpe japonés que eliminó la administración francesa.", correcta: false, explicacion: "Ese golpe fue en marzo de 1945, no Yen Bai." }
            ] },
          { pregunta: "La mejor explicación del triunfo comunista es que…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Cada camino no comunista (Can Vuong, reformistas, VNQDD) fue probado y fracasó.", correcta: true, explicacion: "Correcto: la represión francesa dejó al PCI como única estructura capaz de movilizar." },
              { texto: "El comunismo contó con el apoyo abierto de Estados Unidos desde el inicio.", correcta: false, explicacion: "EE. UU. terminó siendo el enemigo; no apoyó al comunismo vietnamita." },
              { texto: "Francia favoreció deliberadamente a los comunistas por encima de los grupos nacionalistas.", correcta: false, explicacion: "Francia reprimió a todos, incluido el PCI (Poulo Condore)." },
              { texto: "El campesinado rechazó siempre cualquier reparto de tierra.", correcta: false, explicacion: "Al contrario: la reforma agraria fue lo que movilizó al campesinado." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Ho Chi Minh: el nacionalista que encontró en Lenin una herramienta",
        html: `
          <p>Ho Chi Minh (1890–1969) —nacido Nguyen Sinh Cung, conocido como Nguyen Ai Quoc («Nguyen el Patriota») y por medio centenar de alias— es el revolucionario profesional por excelencia. Hijo de un letrado confuciano nacionalista, salió de Vietnam en 1911 como ayudante de cocina y pasó treinta años en el exilio: marinero, fotógrafo retocador en París, pastelero en Londres.</p>

          <h3>El momento-bisagra: Versalles, 1919</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> En Versalles (1919), Ho presentó una petición modestísima (derechos legales, representación — ni siquiera la independencia), aprovechando la retórica de Wilson. <b>Nadie le contestó.</b> Ese portazo le enseñó que las potencias liberales no darían nada.</div>

          <p>Al año siguiente, leyendo las «Tesis sobre la cuestión nacional y colonial» de Lenin, encontró lo que buscaba: una teoría que explicaba el colonialismo (como fase del capitalismo) y —más importante— una organización mundial dispuesta a ayudar a destruirlo.</p>

          <ol class="escalera">
            <li><b>1920:</b> fundador del Partido Comunista Francés (PCF).</li>
            <li><b>1923–24:</b> se forma en Moscú como agente de la Komintern.</li>
            <li><b>1925:</b> organiza en Cantón a los exiliados vietnamitas (la Thanh Nien), entrenando cuadros.</li>
            <li><b>feb 1930:</b> en Hong Kong, unifica las facciones en el Partido Comunista Indochino (PCI).</li>
          </ol>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>¿Nacionalista o comunista?</b> Duiker: Ho fue primero nacionalista y siempre pragmático; el comunismo fue la herramienta más eficaz para la independencia (Versalles antes que Lenin; frentes amplios; Jefferson en 1945). Quinn-Judge, con los archivos de la Komintern, complica el cuadro: Ho fue un agente disciplinado de Moscú, a veces marginado por «nacionalista», con menos control del partido del que dice el mito. Juicio: la fusión nacionalismo-comunismo no fue máscara sino una síntesis real — lo que le faltó a Cuba: una ideología que además organizara.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Duiker ve en Ho al hombre indispensable; Quinn-Judge recuerda que desde 1960 dirigía Le Duan — el liderazgo vietnamita era una institución, no una persona.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué le enseñó a Ho el «portazo de Versalles» (1919)?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Que las potencias liberales no darían nada, lo que lo acercó a Lenin al año siguiente.", correcta: true, explicacion: "Correcto: su petición modesta quedó sin respuesta; en 1920 leyó las «Tesis» de Lenin." },
              { texto: "Que Wilson apoyaría la independencia inmediata de Vietnam.", correcta: false, explicacion: "Nadie le contestó; la retórica de Wilson no se tradujo en nada." },
              { texto: "Que debía aliarse de inmediato con el Japón imperial para expulsar a Francia de Indochina.", correcta: false, explicacion: "Esa fue la vía de Phan Boi Chau, no la de Ho." },
              { texto: "Que la lucha armada era inútil y había que negociar con Francia.", correcta: false, explicacion: "Al contrario: lo empujó hacia la organización revolucionaria comunista." }
            ] },
          { pregunta: "Según Duiker, la relación de Ho con el comunismo fue…", etiqueta: "historiador",
            opciones: [
              { texto: "El marxismo como herramienta más eficaz para la independencia: nacionalista primero, pragmático siempre.", correcta: true, explicacion: "Correcto: Versalles antes que Lenin, frentes amplios, Jefferson en 1945." },
              { texto: "Una fe doctrinaria por encima de cualquier objetivo nacional.", correcta: false, explicacion: "Eso se acerca más a lo que matiza Quinn-Judge; Duiker subraya el pragmatismo." },
              { texto: "Un rechazo total e interno al marxismo, que solo usó como una fachada falsa de cara a Moscú y la Komintern.", correcta: false, explicacion: "Para Duiker no fue máscara sino síntesis real nacionalismo-comunismo." },
              { texto: "Una imposición de la Komintern contra la voluntad de Ho.", correcta: false, explicacion: "Fue una elección pragmática de Ho, no una imposición." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · La SGM: la coyuntura que lo cambió todo (1940–1945)",
        html: `
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Si tuvieras que elegir el factor individual más importante del caso vietnamita, es la Segunda Guerra Mundial.»</div>

          <p>En 1940, Alemania derrotó a Francia en seis semanas y Japón ocupó Indochina, pero con una particularidad: dejó a la administración colonial francesa (leal a Vichy) gobernando bajo supervisión japonesa. Vietnam tuvo <b>dos amos a la vez</b>, y el prestigio del hombre blanco invencible se hizo trizas. Ho volvió a Vietnam en 1941 tras treinta años y fundó el Viet Minh (Pac Bo); Giap formó la primera unidad: <b>34 hombres (dic 1944)</b>.</p>

          <h3>El final de la guerra: los astros se alinean en cadena</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Marzo 1945</span>Japón, temiendo un desembarco aliado, da un golpe contra los franceses y desmantela en un día la administración colonial: el vacío de poder perfecto.</div>
              <div><span class="et">1944–45</span>La hambruna de Tonkín (~1–2 M †, por requisas japonesas y desidia colonial) da al Viet Minh su causa de masas: asaltar los graneros y repartir el arroz — reclutamiento instantáneo.</div>
              <div><span class="et">15 ago 1945</span>Japón se rinde; en las dos semanas hasta que llegan los Aliados, el Viet Minh toma el poder ciudad por ciudad en la Revolución de Agosto; Bao Dai abdica entregando el sello imperial.</div>
            </div>
          </div>

          <div class="caja kiss"><span class="caja-et">KISS</span> El <b>2 de septiembre de 1945</b>, ante medio millón de personas en Hanói, Ho proclamó la República Democrática de Vietnam (RDV) abriendo con una cita literal de la Declaración de Independencia de EE. UU. («todos los hombres nacen iguales…»): un gesto calculado hacia Washington, cuyos agentes de la OSS habían colaborado con el Viet Minh contra Japón. Ho escribió después <b>8 cartas a Truman</b>. Ninguna fue respondida. Versalles, otra vez.</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Marr: la Revolución de Agosto fue en gran medida un levantamiento espontáneo y plural que el Viet Minh (apenas unos miles de militantes) supo encauzar más que dirigir. Duiker subraya lo contrario que hace la diferencia: espontaneidad hubo en todas partes; solo el Viet Minh tenía la organización para convertirla en Estado. Juicio: la SGM fue condición del vacío, y el Viet Minh, condición de que lo llenara la independencia.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «la guerra como factor»: contrastá 1898 con 1945. Allí el vacío que dejó España lo llenó Estados Unidos, porque no había Estado cubano en espera; acá el vacío lo llenó el Viet Minh, porque ya gobernaba un territorio. Es el mejor ejemplo del temario de interacción externo/interno.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué tres hechos alinearon «los astros» para el Viet Minh en 1945?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El golpe japonés de marzo, la hambruna de Tonkín y la rendición japonesa de agosto.", correcta: true, explicacion: "Correcto: vacío de poder + causa de masas + ventana de dos semanas antes de los Aliados." },
              { texto: "La victoria china de 1949, Dien Bien Phu y los Acuerdos de Ginebra.", correcta: false, explicacion: "Eso fue después (1949–54); el vacío de 1945 es anterior." },
              { texto: "La Ofensiva del Tet, My Lai y la renuncia de Johnson.", correcta: false, explicacion: "Eso es 1968, en la guerra contra EE. UU." },
              { texto: "El motín de Yen Bai, los soviets de Nghe-Tinh reprimidos y la fundación clandestina del PCI.", correcta: false, explicacion: "Eso fue 1930–31, el ciclo de fracasos previo." }
            ] },
          { pregunta: "¿Por qué el vacío de 1945 lo llenó el Viet Minh y el de 1898 no lo llenaron los cubanos?", etiqueta: "concepto",
            opciones: [
              { texto: "Porque el Viet Minh ya gobernaba un territorio (contra-Estado); Cuba había organizado solo el exilio.", correcta: true, explicacion: "Correcto: es la diferencia estructural entre organizar el territorio y organizar el exilio." },
              { texto: "Porque EE. UU. apoyó militarmente al Viet Minh en 1945.", correcta: false, explicacion: "EE. UU. no respondió las 8 cartas de Ho; no fue apoyo real." },
              { texto: "Porque en 1945 ya no quedaba en absoluto ninguna potencia extranjera con tropas cerca del territorio de Vietnam.", correcta: false, explicacion: "Estaban Japón, Francia y luego los Aliados; el punto es la organización interna." },
              { texto: "Porque los cubanos no habían luchado militarmente contra España.", correcta: false, explicacion: "Sí lucharon (tres guerras); lo que faltó fue un Estado en espera." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Contra Francia (1946–1954): la guerra popular prolongada",
        html: `
          <p>Francia no aceptó la pérdida: recuperar el imperio era existencial para su prestigio de posguerra. El acuerdo Ho–Sainteny (mar 1946: Vietnam como «Estado libre» dentro de la Unión Francesa) fracasó en Fontainebleau, y la escalada terminó en el bombardeo naval de Haiphong (nov 1946, ~6.000 † civiles). El 19 de diciembre empezó la guerra.</p>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> Ho la anunció con la frase que resume la estrategia: «Pueden matar a diez de los nuestros por cada uno que matemos de los suyos, pero aun así, ellos perderán y nosotros ganaremos» — la apuesta era el tiempo y la voluntad, no la fuerza.</div>

          <h3>La doctrina de Giap (adaptada de Mao): tres fases</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fase</th><th>Años</th><th>Qué pasa</th></tr></thead>
            <tbody>
              <tr><td>Defensa</td><td>1946–49</td><td>Ceder las ciudades, sobrevivir en las montañas, construir el ejército y el contra-Estado (en las «zonas liberadas» el Viet Minh cobraba impuestos, alfabetizaba, repartía tierra: gobernaba antes de vencer).</td></tr>
              <tr><td>Equilibrio</td><td>1950–51</td><td>La victoria comunista en China (1949) lo cambia todo: santuario, entrenamiento y armas. Giap limpia la frontera (Cao Bang, Lang Son, 1950). Pero cuando quiso pasar antes de tiempo a la fase tres, la ofensiva contra el delta del río Rojo (1951) fue una carnicería: la doctrina permitía retroceder, y retrocedió.</td></tr>
              <tr><td>Contraofensiva</td><td>1953–54</td><td>Culmina en la obra maestra: Dien Bien Phu.</td></tr>
            </tbody>
          </table></div>

          <h3>Dien Bien Phu (13 mar–7 may 1954)</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> Francia fortificó un valle remoto cerca de Laos con 15.000 hombres, buscando la batalla campal que creía imposible para los vietnamitas (artillería pesada en la selva era, para el mando francés, una fantasía). Giap la hizo real: <b>200.000 porteadores</b> —hombres y mujeres, con bicicletas reforzadas cargando 200 kilos— subieron cañones chinos pieza por pieza y los enterraron en casamatas. El asedio duró 56 días; la guarnición se rindió con <b>~11.000 prisioneros</b>, la víspera de la apertura de Ginebra.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Los Acuerdos de Ginebra (julio de 1954) reconocieron la independencia pero partieron el país "provisoriamente" por el paralelo 17, con elecciones de reunificación prometidas para 1956. Ho aceptó la partición bajo presión de sus propios aliados (China y la URSS): hasta el vencedor de Dien Bien Phu dependía de la Guerra Fría.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Logevall: Francia eligió una guerra inganable por prestigio (EE. UU. pagaba ~80% del costo). Kolko: ganó la movilización social — el contra-Estado que ofrecía tierra y dignidad derrotó al colonizador.</div>
        `,
        miniQuiz: [
          { pregunta: "La doctrina de la «guerra popular prolongada» de Giap consistía en…", etiqueta: "concepto",
            opciones: [
              { texto: "Tres fases (defensa, equilibrio, contraofensiva), apostando al tiempo y la voluntad.", correcta: true, explicacion: "Correcto: adaptada de Mao; permitía retroceder (delta del río Rojo, 1951)." },
              { texto: "Una guerra relámpago para tomar las ciudades en pocas semanas.", correcta: false, explicacion: "Al contrario: en la fase defensiva se cedían las ciudades." },
              { texto: "Una estrategia puramente diplomática sin combate armado.", correcta: false, explicacion: "La diplomacia (Ginebra) vino tras la victoria militar, no en lugar de ella." },
              { texto: "Depender exclusivamente de la intervención directa del ejército regular de la China de Mao.", correcta: false, explicacion: "China dio santuario y armas, pero combatió el Viet Minh." }
            ] },
          { pregunta: "¿Qué hizo posible la victoria en Dien Bien Phu (1954)?", etiqueta: "fecha",
            opciones: [
              { texto: "200.000 porteadores subieron cañones chinos pieza por pieza a las montañas del valle.", correcta: true, explicacion: "Correcto: hicieron real la «fantasía» de artillería pesada que Francia creía imposible." },
              { texto: "Un desembarco masivo de tropas soviéticas en el norte de Vietnam.", correcta: false, explicacion: "No hubo tropas soviéticas; fue logística vietnamita con armas chinas." },
              { texto: "La intervención aérea directa de los Estados Unidos a favor del Viet Minh.", correcta: false, explicacion: "EE. UU. pagaba a Francia; no apoyó al Viet Minh." },
              { texto: "La rendición voluntaria y pactada de la guarnición francesa antes de que iniciara la batalla.", correcta: false, explicacion: "Hubo un asedio de 56 días con ~11.000 prisioneros al final." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Contra EE. UU. (1955–1975): ganar en la retaguardia enemiga",
        html: `
          <p>Las elecciones de 1956 nunca se celebraron: en el sur, <b>Ngo Dinh Diem</b> —católico, autoritario, respaldado por EE. UU.— proclamó su propia república y las rechazó (todos sabían que Ho las ganaba). La «teoría del dominó» (si cae Vietnam, cae el sudeste asiático) convirtió a Vietnam del Sur en proyecto estadounidense: $1.000 M de ayuda entre 1955 y 1961.</p>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Diem se enajenó a su propio país: persiguió a los budistas (las autoinmolaciones de monjes en 1963 dieron la vuelta al mundo), revirtió la reforma agraria del Viet Minh devolviendo tierras a los terratenientes, y gobernó con su familia — hasta que Washington bendijo el golpe que lo mató (nov 1963).</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> El norte también tuvo su mancha: la reforma agraria de 1953–56, con tribunales populares y ejecuciones de «terratenientes» (estimaciones serias: 5.000–15.000), que <b>Ho reconoció públicamente como error en 1956</b> — dato clave para matizar la imagen del liderazgo.</div>

          <p>Desde 1959–60, Hanói reactivó la lucha en el sur: el Frente Nacional de Liberación (1960, «Viet Cong» para sus enemigos) y la ruta Ho Chi Minh a través de Laos y Camboya para infiltrar hombres y suministros.</p>

          <h3>La escalada y el mismo problema que Francia</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Hito</th><th>Dato</th></tr></thead>
            <tbody>
              <tr><td>Incidente de Tonkín</td><td>1964: pretexto de la escalada.</td></tr>
              <tr><td>Rolling Thunder</td><td>Bombardeos 1965–68.</td></tr>
              <tr><td>Tropas de combate</td><td>Desde marzo 1965 hasta un pico de 536.000 hombres (1968).</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>La Ofensiva del Tet (ene–feb 1968)</b> es la clave analítica: el FNL atacó un centenar de ciudades (hasta la embajada de EE. UU. en Saigón). Militarmente fue un desastre para los atacantes (~40.000 †, el FNL quedó quebrado); <b>políticamente fue la victoria decisiva</b>, porque la televisión mostró a los estadounidenses que, tras tres años y miles de muertos, el enemigo podía atacar en todas partes. La promesa de «luz al final del túnel» quedó en ridículo; Johnson renunció a la reelección.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Sumale My Lai (marzo de 1968: ~400–500 civiles masacrados por tropas de EE. UU., revelado en 1969) y el frente interno estadounidense se desmoronó: se puede ganar cada batalla y perder la guerra.»</div>

          <p>Nixon «vietnamizó» (retirar tropas, armar al ARVN), negoció en París (ene 1973: EE. UU. se va, el ejército norvietnamita se queda en el sur — la cláusula que decidió todo), y en la primavera de 1975 la ofensiva final disolvió al sur en 55 días: <b>Saigón cayó el 30 de abril de 1975</b>.</p>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> ¿Por qué ganó Vietnam? Logevall: Francia y EE. UU. eligieron guerras evitables por prestigio y política interna. Kolko: ganó la movilización social (tierra, dignidad, Estado presente). Moyar (tercera voz conservadora): la guerra era ganable, EE. UU. se autoderrotó — y así, en negativo, confirma a Giap: la guerra popular se gana en la voluntad política del enemigo. Juicio: el éxito vietnamita fue integrar todos los métodos bajo un solo mando; el cubano, ejecutar brillante uno solo.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué la Ofensiva del Tet (1968) fue una victoria para Hanói pese a la derrota militar?", etiqueta: "historiador",
            opciones: [
              { texto: "Porque la TV mostró a los estadounidenses que el enemigo podía atacar en todas partes, rompiendo su voluntad.", correcta: true, explicacion: "Correcto: Johnson renunció a reelegirse y empezó la retirada; se gana en la voluntad del enemigo." },
              { texto: "Porque el FNL tomó militarmente el control de todo Vietnam del Sur.", correcta: false, explicacion: "Militarmente fue un desastre: ~40.000 † y el FNL quedó quebrado." },
              { texto: "Porque la URSS entró en la guerra de inmediato tras la ofensiva.", correcta: false, explicacion: "No hubo entrada soviética; fue una victoria política interna en EE. UU." },
              { texto: "Porque obligó de inmediato a Francia a firmar los Acuerdos de Ginebra y a retirarse por completo de Indochina.", correcta: false, explicacion: "Ginebra fue en 1954 (contra Francia); Tet es 1968 (contra EE. UU.)." }
            ] },
          { pregunta: "La cláusula de los Acuerdos de París (1973) que «decidió todo» fue…", etiqueta: "concepto",
            opciones: [
              { texto: "Que EE. UU. se retiraba pero el ejército norvietnamita se quedaba en el sur.", correcta: true, explicacion: "Correcto: dejó al norte en posición de lanzar la ofensiva final de 1975." },
              { texto: "Que se celebrarían elecciones libres supervisadas por la ONU.", correcta: false, explicacion: "Las elecciones prometidas fueron las de 1956 (Ginebra), nunca celebradas." },
              { texto: "Que Vietnam del Sur conservaría tropas de combate estadounidenses permanentes en su territorio.", correcta: false, explicacion: "Al contrario: EE. UU. se retiraba (vietnamización)." },
              { texto: "Que el norte renunciaba a la reunificación del país.", correcta: false, explicacion: "Fue lo opuesto: la reunificación llegó en 1975." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Los primeros diez años (1975–1985): la victoria empobrecida",
        html: `
          <p>La posguerra vietnamita es el material para «desafíos en los primeros 10 años». Costo total de las guerras: ~3 millones de vietnamitas muertos, 58.000 estadounidenses, un país arrasado — pero independencia y reunificación completas, <b>sin Enmienda Platt</b>.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Qué pasó</th></tr></thead>
            <tbody>
              <tr><td>Político</td><td>Reunificación formal (RSV, jul 1976) = absorción del sur por el norte; 200.000–300.000 exmilitares y funcionarios por «campos de reeducación» (algunos, más de una década); partido único (Le Duan) sin mecanismos de integración.</td></tr>
              <tr><td>Económico</td><td>La colectivización del sur fracasó (los campesinos del Mekong resistieron); la campaña de 1978 contra el «comercio burgués» expropió a la minoría china (los hoa); embargo total de EE. UU.; reparaciones de París nunca llegaron. Hacia 1985: racionamiento, hambre localizada, inflación de tres dígitos.</td></tr>
              <tr><td>Social y humano</td><td>El éxodo de los boat people: +1 millón en barcos (1975–90), con 200.000–400.000 muertos estimados en el mar — una sangría comparable al exilio cubano.</td></tr>
              <tr><td>Exterior</td><td>Dos guerras nuevas: invasión de Camboya (dic 1978, derrocando al Khmer Rouge de Pol Pot, ocupación de una década) y guerra punitiva de China (feb–mar 1979). Vietnam aislado, sostenido solo por la URSS (~$1.000 M anuales, COMECON 1978, base de Cam Ranh).</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> La salida llegó con el <b>Doi Moi</b> («renovación», dic 1986): descolectivización, mercado, inversión extranjera. En tres años Vietnam pasó de importar arroz a ser el <b>tercer exportador mundial (1989)</b>; en 1994–95 EE. UU. levantó el embargo y reconoció a Hanói.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La comparación final con Cuba se arma sola: Vietnam ganó la soberanía plena que a Cuba le faltó, y pagó con una década de miseria; Cuba ganó prosperidad rápida en 1902, y pagó con la soberanía.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «desafíos económicos»: ninguna respuesta fue eficaz en la década — Cuba por exceso de dependencia, Vietnam por exceso de autarquía. Pero la corrección vietnamita (Doi Moi) llegó tarde y llegó; la cubana, nunca (hasta 1959).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué fueron los «boat people»?", etiqueta: "concepto",
            opciones: [
              { texto: "Más de un millón de personas que huyeron en barcos (1975–90), con 200.000–400.000 muertos en el mar.", correcta: true, explicacion: "Correcto: una sangría de capital humano comparable al exilio cubano." },
              { texto: "Los campesinos del Mekong que resistieron la colectivización.", correcta: false, explicacion: "Esos fueron un problema económico distinto, no los boat people." },
              { texto: "Los soldados survietnamitas enviados a campos de reeducación.", correcta: false, explicacion: "La reeducación fue en tierra (200.000–300.000); los boat people huyeron por mar." },
              { texto: "Únicamente los pescadores de la antigua minoría china (hoa) expulsados por tierra hacia China hacia 1979.", correcta: false, explicacion: "Los hoa fueron parte del éxodo, pero «boat people» abarca a todo el >1 M por mar." }
            ] },
          { pregunta: "El contraste final entre los «primeros 10 años» de Vietnam y de Cuba es…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Vietnam ganó soberanía plena pero con una década de miseria; Cuba creció rápido pero sin soberanía.", correcta: true, explicacion: "Correcto: «soberanía sin crecer» vs. «crecer sin soberanía»." },
              { texto: "Ambos lograron prosperidad y soberanía plena en su primera década.", correcta: false, explicacion: "Ninguno: cada uno sacrificó una de las dos cosas." },
              { texto: "Vietnam quedó tutelado por una Enmienda Platt igual que Cuba.", correcta: false, explicacion: "Vietnam fue soberano pleno, sin Platt; esa es la diferencia central." },
              { texto: "Que Cuba fue la que sufrió el masivo éxodo de los boat people mientras Vietnam no tuvo ningún exilio.", correcta: false, explicacion: "Los boat people fueron vietnamitas; Cuba tuvo su propio exilio." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Kit comparativo con Cuba (desde Vietnam)",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> En Paper 2 comparativo, <b>cada párrafo</b>: afirmación → dato cubano → dato vietnamita → por qué difieren → historiador → mini-juicio. <b>Los dos casos siempre.</b> Acá va el lado vietnamita de cada par.</div>

          <h3>Datos espejo (lado Vietnam)</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Vietnam</th><th>Qué prueba el par</th></tr></thead>
            <tbody>
              <tr><td>Identidad</td><td>Milenaria: mil años resistiendo a China (Trung, Le Loi).</td><td>El cubano hubo que inventarlo; el vietnamita, activarlo.</td></tr>
              <tr><td>Fracaso-escuela</td><td>Yen Bai y Nghe-Tinh (1930–31) aplastados; Poulo Condore.</td><td>Ambos aprendieron de derrotas previas: la lección fue la organización.</td></tr>
              <tr><td>Organización</td><td>PCI (1930) → Viet Minh (1941), frente amplio con contra-Estado en las montañas.</td><td>Cuba organizó el exilio; Vietnam, el territorio — de ahí 1898 vs. 1945.</td></tr>
              <tr><td>Ideología</td><td>Nacionalismo + marxismo-leninismo; la reforma agraria moviliza al 80% campesino.</td><td>Una ideología para fundar una república vs. una para transformar una sociedad.</td></tr>
              <tr><td>Líder</td><td>Ho † 1969, y el sistema sigue (Le Duan) hasta 1975.</td><td>Liderazgo institucional y longevo vs. personal y truncado.</td></tr>
              <tr><td>Portazo de las potencias</td><td>Versalles 1919 sin respuesta; 8 cartas a Truman (1945–46) sin respuesta.</td><td>Las potencias liberales fallaron a ambos; solo Ho halló un aliado alternativo (Lenin).</td></tr>
              <tr><td>Guerra propia</td><td>34 hombres (1944) → el ejército que gana Dien Bien Phu (1954): 200.000 porteadores, 11.000 prisioneros.</td><td>Misma guerrilla de desgaste; solo Vietnam pudo escalar a la batalla decisiva.</td></tr>
              <tr><td>Coyuntura</td><td>1940–45: Japón destruye a Francia; vacío de agosto de 1945 → RDV; China 1949 arma al Viet Minh.</td><td>El vacío vietnamita lo llenó el movimiento — porque había Estado en espera.</td></tr>
              <tr><td>Paz</td><td>Ginebra 1954 (negociada tras Dien Bien Phu) y París 1973 (el NVA se queda en el sur).</td><td>«Ambos combatieron; solo Vietnam negoció.»</td></tr>
              <tr><td>Opinión pública</td><td>Tet 1968 + My Lai: derrota militar convertida en victoria política en la TV estadounidense.</td><td>En Vietnam la cosechó el propio movimiento; en Cuba, un tercero.</td></tr>
              <tr><td>Primeros 10 años</td><td>Reeducación 200–300.000; colectivización fallida; boat people >1 M; Camboya 1978 y China 1979; Doi Moi 1986.</td><td>«República dependiente vs. Estado sitiado.»</td></tr>
              <tr><td>Resultado</td><td>Independencia real 1954, reunificación 1975; sin Platt, con miseria.</td><td>Soberanía sin crecer vs. crecer sin soberanía.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El vacío de 1945 lo llenó el Viet Minh porque ya gobernaba un territorio; el de 1898 lo llenó Estados Unidos porque no había un Estado cubano en espera. La diferencia de resultado es una diferencia de organización interna.»</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Fórmula de cita segura: «Duiker ve en Ho al hombre indispensable; Quinn-Judge recuerda que desde 1960 dirigía Le Duan — el liderazgo vietnamita era una institución, no una persona.» Un historiador por argumento, dos enfrentados en el párrafo clave, y cerrás vos.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Nada de «todos los factores importaron». Tesis con grado y conclusión que jerarquiza: los factores externos crearon las oportunidades, la organización interna decidió. 8–10 datos vietnamitas bien puestos valen más que veinte sueltos.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué prueba el par «34 hombres (1944) → Dien Bien Phu (1954)»?", etiqueta: "concepto",
            opciones: [
              { texto: "Que Vietnam pudo escalar de la guerrilla a la batalla decisiva, algo que a Cuba le faltó.", correcta: true, explicacion: "Correcto: misma guerrilla de desgaste, pero solo Vietnam llegó a la batalla campal que decidió." },
              { texto: "Que Vietnam nunca necesitó un ejército organizado para vencer.", correcta: false, explicacion: "Al contrario: construyó un ejército que creció de 34 hombres a Dien Bien Phu." },
              { texto: "Que el ejército de Francia superó siempre y con holgura en número de soldados al Viet Minh.", correcta: false, explicacion: "En Dien Bien Phu la logística vietnamita (200.000 porteadores) fue decisiva." },
              { texto: "Que la independencia se logró sin ninguna lucha militar.", correcta: false, explicacion: "Fue una guerra larga; la violencia fue esencial e integrada a la política." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "¿Por qué el nacionalismo vietnamita «había que activarlo»?", dorso: "Por una identidad milenaria de resistencia a China (mil años de provincia, nueve siglos rechazando invasiones). A diferencia de Cuba, la nación no había que inventarla." },
    { id: "fc02", categoria: "concepto", frente: "Unión Indochina (1887)", dorso: "Francia parte Vietnam en tres (Tonkín, Annam, Cochinchina) y suma Camboya y Laos: dividir para reinar, con un emperador decorativo en Hue." },
    { id: "fc03", categoria: "concepto", frente: "El sistema colonial francés", dorso: "Monopolios de sal, alcohol y opio; capitación en dinero; corvée (trabajo forzado); plantaciones de caucho (Michelin). En Cochinchina, ~70% de la tierra en el 6%." },
    { id: "fc04", categoria: "concepto", frente: "Viet Minh (1941)", dorso: "Liga para la Independencia de Vietnam, fundada por Ho en Pac Bo: frente patriótico amplio con el comunismo al mando y un solo eslogan, independencia." },
    { id: "fc05", categoria: "concepto", frente: "Guerra popular prolongada (Giap)", dorso: "Doctrina en 3 fases adaptada de Mao: defensa (ceder ciudades, construir contra-Estado), equilibrio y contraofensiva. Apuesta al tiempo y la voluntad." },
    { id: "fc06", categoria: "concepto", frente: "Vietnamización (Nixon)", dorso: "Retirar tropas de EE. UU. y armar al ARVN survietnamita, mientras se negociaba en París." },
    { id: "fc07", categoria: "concepto", frente: "Doi Moi (1986)", dorso: "«Renovación»: descolectivización, mercado e inversión extranjera; en 1989 Vietnam fue el 3.er exportador mundial de arroz." },
    { id: "fc08", categoria: "fecha", frente: "1919", dorso: "Portazo de Versalles: Ho presenta una petición modesta y nadie responde; al año siguiente lee a Lenin." },
    { id: "fc09", categoria: "fecha", frente: "feb 1930", dorso: "Ho funda el Partido Comunista Indochino (PCI) en Hong Kong. Yen Bai (VNQDD) es aplastado." },
    { id: "fc10", categoria: "fecha", frente: "1930–31", dorso: "Soviets de Nghe-Tinh reprimidos con bombardeos; Poulo Condore se llena de comunistas. Lección: sin coyuntura externa, la insurrección es suicida." },
    { id: "fc11", categoria: "fecha", frente: "may 1941", dorso: "Ho funda el Viet Minh en la cueva de Pac Bo tras 30 años de exilio." },
    { id: "fc12", categoria: "fecha", frente: "dic 1944", dorso: "Giap forma la primera unidad armada: 34 hombres (futuro ejército de Dien Bien Phu)." },
    { id: "fc13", categoria: "fecha", frente: "2 sep 1945", dorso: "Ho proclama la República Democrática de Vietnam (RDV) citando la Declaración de Independencia de EE. UU." },
    { id: "fc14", categoria: "fecha", frente: "13 mar–7 may 1954", dorso: "Dien Bien Phu: 200.000 porteadores, ~11.000 prisioneros franceses; la víspera de Ginebra." },
    { id: "fc15", categoria: "fecha", frente: "jul 1954", dorso: "Acuerdos de Ginebra: independencia + partición por el paralelo 17 + elecciones prometidas para 1956 (nunca celebradas)." },
    { id: "fc16", categoria: "fecha", frente: "ene–feb 1968", dorso: "Ofensiva del Tet: derrota militar del FNL (~40.000 †) pero victoria política decisiva en la TV estadounidense." },
    { id: "fc17", categoria: "fecha", frente: "27 ene 1973", dorso: "Acuerdos de París: EE. UU. se retira, el ejército norvietnamita se queda en el sur." },
    { id: "fc18", categoria: "fecha", frente: "30 abr 1975", dorso: "Cae Saigón (ofensiva final de 55 días): reunificación completa, sin Enmienda Platt." },
    { id: "fc19", categoria: "fecha", frente: "dic 1986", dorso: "Doi Moi: fin de la década de miseria; mercado e inversión extranjera." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué triunfó el comunismo y no otras resistencias?", dorso: "Porque cada vía no comunista (Can Vuong, Phan Boi Chau/Chu Trinh, VNQDD) fue probada y fracasó; el PCI quedó como única estructura capaz de movilizar campesinos." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "El factor individual más importante del caso vietnamita", dorso: "La Segunda Guerra Mundial: destruyó el prestigio francés y abrió el vacío de 1945 (golpe japonés de marzo, hambruna, rendición de agosto)." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "¿Por qué el vacío de 1945 lo llenó el Viet Minh?", dorso: "Porque ya gobernaba un territorio (contra-Estado en las montañas): había un Estado en espera, a diferencia de Cuba en 1898." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "¿Por qué Tet (1968) fue victoria pese a la derrota militar?", dorso: "Porque la TV mostró que el enemigo podía atacar en todas partes; rompió la voluntad política de EE. UU. (Johnson no se reelige)." },
    { id: "fc24", categoria: "historiador", frente: "Duiker (ancla: «PRAGMÁTICO»)", dorso: "Ho fue nacionalista antes que comunista; el marxismo fue la herramienta más eficaz; subordinó la ideología a la independencia." },
    { id: "fc25", categoria: "historiador", frente: "Logevall (ancla: «ELIGIERON»)", dorso: "Francia y EE. UU. eligieron guerras evitables e inganables por prestigio y política interna; el desenlace dependió de las capitales enemigas." },
    { id: "fc26", categoria: "historiador", frente: "Marr (ancla: «AGOSTO POPULAR»)", dorso: "La Revolución de Agosto fue un levantamiento espontáneo y plural que el Viet Minh encauzó más que dirigió; el nacionalismo tenía raíces largas." },
    { id: "fc27", categoria: "historiador", frente: "Quinn-Judge (ancla: «LE DUAN»)", dorso: "Ho fue un agente disciplinado de la Komintern con menos poder del que dice el mito; desde 1960 dirigió la línea dura de Le Duan." },
    { id: "fc28", categoria: "historiador", frente: "Kolko vs. Moyar (reserva)", dorso: "Kolko: ganó la movilización social campesina. Moyar: EE. UU. se autoderrotó. Juntos confirman a Giap: la guerra popular se gana en la voluntad del enemigo." },
    { id: "fc29", categoria: "concepto", frente: "Reforma agraria del norte (1953–56)", dorso: "Tribunales populares y ejecuciones de «terratenientes» (5.000–15.000); Ho la reconoció públicamente como error en 1956." },
    { id: "fc30", categoria: "concepto", frente: "Ngo Dinh Diem", dorso: "Líder católico y autoritario del sur, apoyado por EE. UU.; rechazó las elecciones de 1956, persiguió budistas y fue muerto en un golpe (nov 1963)." },
    { id: "fc31", categoria: "causa-consecuencia", frente: "Los desafíos de los «primeros 10 años» (1975–85)", dorso: "Reeducación (200–300.000), colectivización fallida, boat people (>1 M), embargo, y dos guerras (Camboya 1978, China 1979): soberanía sin crecer." },
    { id: "fc32", categoria: "concepto", frente: "Boat people", dorso: "Más de un millón que huyó en barcos (1975–90), con 200.000–400.000 muertos en el mar: sangría de capital humano comparable al exilio cubano." }
  ],

  /* ===================== QUIZ ===================== */
  quiz: [
    { pregunta: "¿Qué le dio a Ho la lectura de Lenin tras el portazo de Versalles?", etiqueta: "historiador",
      opciones: [
        { texto: "Una teoría del colonialismo y una organización mundial dispuesta a destruirlo.", correcta: true, explicacion: "Correcto: las «Tesis» de Lenin le dieron teoría y la Komintern como aliado." },
        { texto: "El apoyo militar inmediato del ejército soviético en Vietnam.", correcta: false, explicacion: "No hubo tropas soviéticas; lo que ganó fue teoría y organización." },
        { texto: "Una promesa formal de independencia firmada por todas las potencias reunidas en Versalles.", correcta: false, explicacion: "Versalles fue el portazo: nadie le respondió." },
        { texto: "La alianza formal con el VNQDD nacionalista republicano.", correcta: false, explicacion: "El VNQDD era rival y sería aplastado en Yen Bai (1930)." }
      ] },
    { pregunta: "El «factor individual más importante» del caso vietnamita fue…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "La Segunda Guerra Mundial, que destruyó a Francia y abrió el vacío de 1945.", correcta: true, explicacion: "Correcto: golpe japonés de marzo, hambruna de Tonkín y rendición de agosto." },
        { texto: "La victoria comunista de Mao en China en 1949, que dio santuario y armas al Viet Minh.", correcta: false, explicacion: "Fue clave (santuario y armas) pero posterior; el factor mayor es la SGM." },
        { texto: "La Ofensiva del Tet de 1968.", correcta: false, explicacion: "Tet fue decisiva contra EE. UU., pero el factor de origen es la SGM." },
        { texto: "La firma de los Acuerdos de Ginebra en 1954.", correcta: false, explicacion: "Ginebra fue consecuencia de Dien Bien Phu, no la coyuntura de origen." }
      ] },
    { pregunta: "¿Qué hizo única a la victoria de Dien Bien Phu (1954)?", etiqueta: "fecha",
      opciones: [
        { texto: "200.000 porteadores subieron cañones chinos a las montañas que Francia creía inexpugnables.", correcta: true, explicacion: "Correcto: hicieron real la «fantasía» de artillería pesada en la selva." },
        { texto: "El desembarco de tropas estadounidenses del lado del Viet Minh.", correcta: false, explicacion: "EE. UU. financiaba a Francia (~80%), no al Viet Minh." },
        { texto: "Una rendición francesa sin combate, antes del asedio.", correcta: false, explicacion: "Hubo 56 días de asedio con ~11.000 prisioneros al final." },
        { texto: "La intervención militar directa del ejército regular chino de Mao combatiendo dentro del propio valle.", correcta: false, explicacion: "China dio armas y santuario; combatió el ejército vietnamita." }
      ] },
    { pregunta: "Según Duiker, la ideología de Ho fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Un pragmatismo que subordinó el marxismo a la independencia nacional.", correcta: true, explicacion: "Correcto: nacionalista primero (Versalles antes que Lenin, frentes amplios)." },
        { texto: "Un dogmatismo comunista rígido, por encima de cualquier otra meta nacional.", correcta: false, explicacion: "Eso lo matiza Quinn-Judge; Duiker subraya el pragmatismo." },
        { texto: "Un liberalismo pro estadounidense disfrazado de comunismo.", correcta: false, explicacion: "No: la fusión nacionalismo-comunismo fue síntesis real, no disfraz." },
        { texto: "Una ideología impuesta por la Komintern contra su voluntad.", correcta: false, explicacion: "Fue una elección pragmática de Ho, no una imposición." }
      ] },
    { pregunta: "¿Por qué el vacío de poder de 1945 lo llenó el Viet Minh?", etiqueta: "concepto",
      opciones: [
        { texto: "Porque ya gobernaba un territorio (contra-Estado): había un Estado en espera.", correcta: true, explicacion: "Correcto: contraste con Cuba en 1898, que solo había organizado el exilio." },
        { texto: "Porque los Aliados le entregaron el poder de inmediato.", correcta: false, explicacion: "El Viet Minh tomó el poder en las dos semanas antes de que llegaran los Aliados." },
        { texto: "Porque Francia le cedió voluntariamente toda la administración colonial del territorio.", correcta: false, explicacion: "Fue un golpe japonés el que desmanteló la administración francesa; no una cesión." },
        { texto: "Porque EE. UU. respondió favorablemente a las cartas de Ho a Truman.", correcta: false, explicacion: "Ninguna de las 8 cartas fue respondida." }
      ] },
    { pregunta: "La Ofensiva del Tet (1968) fue, en balance…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Un desastre militar para el FNL pero una victoria política decisiva en la opinión pública de EE. UU.", correcta: true, explicacion: "Correcto: ~40.000 † del FNL, pero Johnson renunció a reelegirse." },
        { texto: "Una victoria militar total y aplastante que permitió al FNL tomar todas las ciudades del sur de inmediato.", correcta: false, explicacion: "Militarmente el FNL quedó quebrado; la victoria fue política." },
        { texto: "Un hecho irrelevante que no afectó el curso de la guerra.", correcta: false, explicacion: "Fue la clave analítica: cambió la voluntad política estadounidense." },
        { texto: "El fin inmediato de la guerra con la retirada total de EE. UU.", correcta: false, explicacion: "La retirada fue gradual (vietnamización, París 1973); no fue inmediata." }
      ] },
    { pregunta: "La cláusula de los Acuerdos de París (1973) que decidió el desenlace fue…", etiqueta: "concepto",
      opciones: [
        { texto: "Que EE. UU. se retiraba pero el ejército norvietnamita se quedaba en el sur.", correcta: true, explicacion: "Correcto: dejó al norte listo para la ofensiva final de 1975." },
        { texto: "Que se garantizaban elecciones libres supervisadas directamente por la ONU en todo el país.", correcta: false, explicacion: "Las elecciones prometidas eran las de 1956 (Ginebra), nunca celebradas." },
        { texto: "Que Vietnam del Sur conservaba tropas estadounidenses permanentes.", correcta: false, explicacion: "Lo contrario: EE. UU. se retiraba." },
        { texto: "Que el norte renunciaba definitivamente a la reunificación.", correcta: false, explicacion: "La reunificación llegó en 1975." }
      ] },
    { pregunta: "Según Quinn-Judge, el liderazgo vietnamita fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Una institución, no una persona: desde 1960 dirigía la línea dura de Le Duan.", correcta: true, explicacion: "Correcto: matiza el mito de Ho todopoderoso; sirve de contraargumento en liderazgo." },
        { texto: "Dependiente por completo de la figura carismática y personal de Ho Chi Minh hasta 1975.", correcta: false, explicacion: "Es lo que Quinn-Judge matiza: Ho tenía menos poder del que dice el mito." },
        { texto: "Un liderazgo puramente militar de Giap sin dirección política.", correcta: false, explicacion: "Giap era el mando militar; la dirección política fue del partido." },
        { texto: "Un liderazgo impuesto directamente por la Unión Soviética.", correcta: false, explicacion: "La URSS fue aliado, no quien dirigía el partido vietnamita." }
      ] },
    { pregunta: "Un desafío político clave de los primeros 10 años (1975–85) fue…", etiqueta: "fecha",
      opciones: [
        { texto: "Los campos de «reeducación» por los que pasaron 200.000–300.000 exmilitares y funcionarios del sur.", correcta: true, explicacion: "Correcto: la reunificación fue en realidad la absorción del sur por el norte." },
        { texto: "La firma de una Enmienda Platt impuesta por Estados Unidos.", correcta: false, explicacion: "Vietnam fue soberano pleno, sin Platt; esa es la diferencia con Cuba." },
        { texto: "La restauración de la monarquía de Bao Dai en el sur.", correcta: false, explicacion: "Bao Dai había abdicado en 1945; no hubo restauración." },
        { texto: "La entrada inmediata de todo el Vietnam reunificado en el bloque occidental y en la alianza militar de la OTAN.", correcta: false, explicacion: "Vietnam quedó aislado, sostenido por la URSS (COMECON 1978)." }
      ] },
    { pregunta: "El contraste final entre Vietnam y Cuba en sus primeros 10 años es…", etiqueta: "concepto",
      opciones: [
        { texto: "Soberanía sin crecer (Vietnam) vs. crecer sin soberanía (Cuba).", correcta: true, explicacion: "Correcto: Vietnam ganó soberanía plena pero con miseria; Cuba creció rápido pero tutelada." },
        { texto: "Ambos lograron prosperidad y soberanía plena de inmediato.", correcta: false, explicacion: "Cada uno sacrificó una de las dos cosas." },
        { texto: "Ambos quedaron tutelados por una potencia extranjera sin excepción.", correcta: false, explicacion: "Vietnam fue soberano pleno; solo Cuba quedó tutelada (Platt)." },
        { texto: "Vietnam creció rápido y Cuba sufrió una década de miseria.", correcta: false, explicacion: "Es al revés: la miseria de la década fue vietnamita; Cuba creció rápido." }
      ] },
    { pregunta: "¿Por qué triunfó la vía comunista y no las otras resistencias?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Porque todas las vías no comunistas (Can Vuong, reformistas, VNQDD) habían fracasado antes.", correcta: true, explicacion: "Correcto: el PCI quedó como única estructura capaz de movilizar al campesinado." },
        { texto: "Porque Francia siempre prefirió negociar con los comunistas antes que con los grupos nacionalistas.", correcta: false, explicacion: "Francia reprimió a todos, incluido el PCI (Poulo Condore)." },
        { texto: "Porque el campesinado rechazaba cualquier reparto de tierras.", correcta: false, explicacion: "Al contrario: la reforma agraria fue lo que movilizó al campesinado." },
        { texto: "Porque EE. UU. financió al comunismo vietnamita desde 1930.", correcta: false, explicacion: "EE. UU. fue enemigo del comunismo vietnamita." }
      ] },
    { pregunta: "¿Cómo se caracteriza el éxito vietnamita frente al cubano?", etiqueta: "historiador",
      opciones: [
        { texto: "Integración de todos los métodos (militar, social, diplomático, propagandístico) bajo un solo mando.", correcta: true, explicacion: "Correcto: el cubano fue la ejecución brillante de uno solo (el militar) sin los demás." },
        { texto: "El uso exclusivo de la diplomacia sin recurrir nunca a la violencia.", correcta: false, explicacion: "La violencia fue esencial; la diplomacia se sumó a ella (Ginebra, París)." },
        { texto: "La dependencia total del liderazgo personal de un solo hombre.", correcta: false, explicacion: "Fue institucional: el sistema sobrevivió a Ho (Le Duan)." },
        { texto: "La renuncia deliberada y total a cualquier tipo de apoyo externo de China o de la URSS durante toda la guerra.", correcta: false, explicacion: "China (1949) y la URSS fueron aliados clave; no hubo renuncia al apoyo externo." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Compare y contraste el papel del nacionalismo/ideología en dos movimientos independentistas.", frecuencia: "Muy alta",
        plan: "V: Ho fusiona nación + marxismo (reforma agraria = masas campesinas). C: Martí une región/clase/raza pero sin programa social. Juicio: Vietnam organizó para el Estado. Duiker / Ferrer." },
      { pregunta: "¿En qué medida fue decisiva la guerra (factor externo) en el éxito del movimiento?", frecuencia: "Muy alta",
        plan: "V: la SGM crea el vacío (golpe de marzo, hambruna, rendición de agosto) → RDV; luego dos guerras propias lo consolidan. Decisiva y propia. Marr / Logevall." },
      { pregunta: "Evalúe los factores externos frente a los internos en el éxito del movimiento.", frecuencia: "Alta",
        plan: "Externos habilitan (SGM, China 1949, fatiga de EE. UU.); el Viet Minh convierte. La diferencia de resultado es de organización interna. Logevall / Duiker." },
      { pregunta: "Examine los métodos (violentos y no violentos) del movimiento vietnamita.", frecuencia: "Alta",
        plan: "Guerra popular en 3 fases; alfabetización y contra-Estado; Ginebra y París negociadas desde la fuerza. «Ambos combatieron; solo Vietnam negoció.»" },
      { pregunta: "Analice los desafíos de los primeros diez años tras la independencia (1975–85).", frecuencia: "Alta",
        plan: "Político (partido único, reeducación), económico (colectivización fallida, inflación 300%), social (boat people), exterior (Camboya 1978, China 1979). Doi Moi 1986." },
      { pregunta: "Discuta el papel del liderazgo en el éxito del movimiento.", frecuencia: "Media",
        plan: "V: Ho + Giap + partido; sobrevive a Ho (1969); errores admitidos (reforma agraria 1956). Institucional. Duiker vs. Quinn-Judge." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida la ideología explica el éxito del movimiento vietnamita?",
        tesis: "La fusión de nacionalismo y marxismo-leninismo fue decisiva, porque dio a la vez una causa de masas (independencia) y una organización que transformaba la sociedad — lo que a Cuba le faltó.",
        pasos: [
          "Nacionalismo: identidad milenaria activada (Marr), no inventada.",
          "Marxismo como herramienta (Duiker): teoría del colonialismo + la Komintern como aliado tras Versalles (1919).",
          "Organización: PCI (1930) → Viet Minh (1941), contra-Estado en las montañas; reforma agraria moviliza al 80% campesino (Kolko).",
          "Matiz (Quinn-Judge): Ho fue agente disciplinado de Moscú y desde 1960 dirigió Le Duan — el éxito no fue de un solo hombre.",
          "Conclusión: una ideología para transformar la sociedad, no solo para fundar una república."
        ] },
      { titulo: "Plan B · ¿Hasta qué punto fue decisiva la Segunda Guerra Mundial?",
        tesis: "La SGM fue el factor individual más importante del caso: condición suficiente del vacío de 1945, aunque el Viet Minh fue la condición de que ese vacío lo llenara la independencia.",
        pasos: [
          "1940: Alemania derrota a Francia; Japón ocupa Indochina dejando a Vichy: dos amos, prestigio blanco destruido.",
          "Marzo 1945: golpe japonés que elimina la administración francesa (vacío perfecto).",
          "Hambruna de Tonkín (~1–2 M †): causa de masas; el Viet Minh asalta graneros.",
          "15 ago–2 sep 1945: rendición japonesa → Revolución de Agosto → RDV (Marr: espontánea; Duiker: solo el Viet Minh pudo volverla Estado).",
          "Conclusión: contraste con 1898 — el vacío lo llenó el movimiento porque había Estado en espera."
        ] },
      { titulo: "Plan C · Examine los métodos del movimiento vietnamita.",
        tesis: "El éxito fue la integración de todos los métodos —militar, social, diplomático y propagandístico— bajo un solo mando.",
        pasos: [
          "Militar: guerra popular prolongada en 3 fases (Giap); Dien Bien Phu (1954), guerrilla y Tet (1968).",
          "Social: contra-Estado en las zonas liberadas (impuestos, alfabetización, reparto de tierra); reforma agraria (Kolko).",
          "Diplomático: Ginebra (1954) y París (1973), negociadas desde la fuerza militar.",
          "Propagandístico: Tet + My Lai vuelven la derrota militar victoria política en la TV de EE. UU.",
          "Conclusión: el cubano ejecutó brillante uno solo (el militar); el vietnamita, todos."
        ] },
      { titulo: "Plan D · Evalúe los factores externos frente a los internos.",
        tesis: "Los factores externos abrieron las oportunidades (SGM, China 1949, fatiga de Francia y EE. UU.); los internos decidieron quién las tomaba.",
        pasos: [
          "Externo habilitante: SGM (vacío 1945); China comunista (1949) da santuario y armas; EE. UU. pagaba ~80% del costo francés.",
          "Logevall: Francia y EE. UU. eligieron guerras evitables por prestigio y política interna.",
          "Interno decisivo: el Viet Minh convierte la oportunidad (contra-Estado, movilización campesina).",
          "Guerra Fría como límite: hasta el vencedor de Dien Bien Phu aceptó la partición por presión de China y la URSS.",
          "Conclusión: la diferencia de resultado con Cuba es una diferencia de organización interna."
        ] },
      { titulo: "Plan E · Analice los desafíos de los primeros diez años (1975–85).",
        tesis: "Vietnam ganó la soberanía plena que a Cuba le faltó y la pagó con una década de miseria por exceso de autarquía, hasta corregir con el Doi Moi.",
        pasos: [
          "Político: RSV (1976) = absorción del sur; reeducación 200.000–300.000; partido único (Le Duan).",
          "Económico: colectivización fallida, campaña contra el «comercio burgués» (hoa), embargo de EE. UU., inflación 300% (1985).",
          "Social: boat people (>1 M, 200.000–400.000 † en el mar).",
          "Exterior: Camboya (1978) y guerra con China (1979); aislamiento sostenido solo por la URSS.",
          "Conclusión: la corrección (Doi Moi, 1986) llegó tarde pero llegó; la cubana, nunca hasta 1959."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida fue la guerra el factor decisivo del éxito del movimiento independentista vietnamita?»",
        parrafos: [
          { texto: "El movimiento independentista vietnamita (1930/41–1975) es el mejor ejemplo del temario sobre la interacción entre un factor externo y la organización interna. Tesis: la guerra —en particular la Segunda Guerra Mundial— fue el factor individual más decisivo, porque destruyó el poder colonial francés y abrió el vacío de 1945; pero fue decisiva precisamente porque existía un movimiento, el Viet Minh, capaz de llenar ese vacío con un Estado. La guerra fue condición del vacío; la organización, condición de que lo llenara la independencia.", nota: "Intro con tesis de grado y la relación externo/interno anticipada." },
          { texto: "La Segunda Guerra fue la coyuntura que lo cambió todo. En 1940, Alemania derrotó a Francia y Japón ocupó Indochina dejando gobernar a Vichy: dos amos a la vez, y el prestigio del colonizador hecho trizas. El golpe japonés de marzo de 1945 desmanteló en un día la administración francesa, la hambruna de Tonkín (~1–2 millones de muertos) dio al Viet Minh su causa de masas, y la rendición japonesa del 15 de agosto abrió una ventana de dos semanas. «Esto demuestra que» sin la guerra no había vacío: la coyuntura externa fue la que hizo posible la Revolución de Agosto.", nota: "Factor externo con evidencia fechada y frase de enlace." },
          { texto: "Pero la guerra no bastaba por sí sola, y aquí está el matiz que da banda. Marr señala que la Revolución de Agosto fue en gran medida un levantamiento espontáneo que el Viet Minh, con pocos miles de militantes, encauzó más que dirigió; Duiker responde que la diferencia la hizo la organización: solo el Viet Minh, que ya gobernaba un territorio (el contra-Estado del Viet Bac), pudo convertir la espontaneidad en Estado. El contraste con Cuba lo confirma: en 1898 el vacío que dejó España lo llenó Estados Unidos, porque no había un Estado cubano en espera.", nota: "Factor interno con el debate Marr/Duiker y el contraste con Cuba como prueba." },
          { texto: "En conclusión, la guerra fue el factor más decisivo del caso vietnamita, pero su efecto dependió por completo de una variable interna: la existencia previa de una organización capaz de gobernar. La SGM, y más tarde la fatiga de Francia y de Estados Unidos, crearon las oportunidades; el Viet Minh decidió que las aprovechara la independencia y no otro imperio. Por eso el vacío de 1945 lo llenó el movimiento — y esa es exactamente la diferencia que separa a Vietnam de Cuba.", nota: "Conclusión que jerarquiza (externo decisivo pero mediado por lo interno) y cierra con el contraste." }
        ] },
      { titulo: "Ensayo 2 · «Discuta el papel del liderazgo en el éxito del movimiento independentista vietnamita.»",
        parrafos: [
          { texto: "El liderazgo vietnamita suele personalizarse en Ho Chi Minh, pero su verdadera fuerza fue que no dependía de un solo hombre. Tesis: el liderazgo fue esencial para el éxito, pero lo decisivo no fue el carisma de Ho sino el carácter institucional del liderazgo —partido, ejército y frente— que le permitió sobrevivir a sus propios líderes, justo lo que le faltó a Cuba.", nota: "Intro con tesis que relativiza el culto al líder y anticipa el contraste con Cuba." },
          { texto: "Ho fue indispensable en el origen. Duiker lo describe como un nacionalista pragmático que encontró en el marxismo la herramienta más eficaz: tras el portazo de Versalles (1919) construyó el PCI (1930) y el Viet Minh (1941), y en 1945 citó la Declaración de Independencia estadounidense en un gesto calculado hacia Washington. Su genio fue subordinar la ideología al objetivo nacional mediante frentes amplios. «Esto demuestra que» el liderazgo fundacional fue real y creativo.", nota: "Primer argumento (Ho indispensable) con Duiker usado, no pegado." },
          { texto: "Sin embargo, el liderazgo fue institucional, no personal, y eso lo hizo más fuerte. Quinn-Judge, con los archivos de la Komintern, recuerda que Ho fue un agente disciplinado de Moscú, a veces marginado por «nacionalista», y que desde 1960 la guerra la dirigió la línea dura de Le Duan. El sistema sobrevivió a la muerte de Ho en 1969 y ganó la guerra en 1975. A ello se suma el mando militar de Giap y la capacidad de admitir errores (la reforma agraria de 1953–56, que Ho reconoció como error en 1956).", nota: "Segundo argumento (liderazgo institucional) con el contrapunto de Quinn-Judge." },
          { texto: "En conclusión, el liderazgo fue esencial pero no autosuficiente: lo que explica el éxito no es una figura sino una institución capaz de reemplazarla. La comparación con Cuba lo sella: allí Martí resolvió la unidad y murió a los tres meses, y Gómez ganó el campo sin un Estado detrás; en Vietnam, el liderazgo era una institución, no una persona — y por eso una muerte no descabezó la revolución.", nota: "Conclusión que jerarquiza y cierra con el contraste Martí/Ho." }
        ] }
    ],
    guia: {
      tesis: "Respondé con grado y veredicto. Tesis maestra del caso vietnamita: «Sobre una identidad milenaria, Ho fusionó nacionalismo y marxismo y construyó una organización que gobernaba el territorio; por eso, cuando la SGM abrió el vacío de 1945, lo llenó el movimiento — y la independencia de 1954/1975 fue plena, sin Platt, aunque costó una década de miseria.»",
      argumentos: [
        "Estructura del temario: origen y desarrollo (1930/41–1954, extensible a 1975) → métodos y causas → primeros 10 años (1975–1985). Declaralo.",
        "Cada párrafo comparativo: afirmación → dato cubano → dato vietnamita → por qué difieren → historiador → mini-juicio.",
        "Jerarquizá: «los factores externos crearon la oportunidad; la organización interna decidió quién la aprovechó»."
      ],
      evidencia: [
        "Origen: Versalles 1919, PCI 1930, Viet Minh 1941, 34 hombres (1944), RDV (2 sep 1945), 8 cartas a Truman.",
        "Guerra: Dien Bien Phu (200.000 porteadores, 11.000 prisioneros), Ginebra 1954 (paralelo 17), Tet 1968 (~40.000 †), My Lai, París 1973, Saigón 30 abr 1975.",
        "Primeros 10 años: reeducación 200–300.000, boat people >1 M, Camboya 1978, China 1979, inflación 300% (1985), Doi Moi 1986."
      ],
      historiografia: [
        "Duiker («PRAGMÁTICO») vs. Quinn-Judge («LE DUAN») para liderazgo e ideología.",
        "Logevall («ELIGIERON») y Marr («AGOSTO POPULAR») para factores externos y la guerra como catalizador.",
        "Reserva: Kolko (aldeas) vs. Moyar (autoderrota). Un historiador por argumento, dos enfrentados en el párrafo clave, y cerrás vos."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej. «el éxito fue obra de un solo líder genial» o «ganó solo por el apoyo externo de China y la URSS») y refutala: Quinn-Judge muestra el liderazgo institucional, y Kolko, que la movilización social campesina —que ninguna potencia externa podía comprar— fue lo decisivo."
    }
  }
});
