/* ============================================================
   tema-17-1.js — 17.1 Pueblos indígenas y derechos civiles en las Américas
   Transcripción fiel de la guía Paper 3 del usuario (Oxford IB cap. 8.1 + guía del profesor).
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "17.1",
  carpeta: "p3-s17",
  titulo: "Pueblos indígenas y derechos civiles",
  subtitulo: "Canadá · Estados Unidos · México, Guatemala y los Andes · después de 1945",
  periodo: "Desde 1945 (con puntos de partida: Ley India 1876, Dawes 1887, indigenismo 1940) hasta 2015",
  estado: "listo",
  etiquetas: ["pueblos indígenas", "derechos civiles", "autodeterminación", "soberanía tribal", "Red Power", "AIM", "Sección 35", "terminación", "indigenismo", "plurinacionalidad"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Para los indígenas «derechos civiles» no fue igualdad individual sino soberanía, tierra y derechos colectivos como pueblos distintos. El avance fue real pero asimétrico: considerable en la jerarquía de las normas (voto, Sección 35, autodeterminación), parcial en el control de la tierra y los recursos, y limitado en las condiciones materiales de vida. No fue progreso continuo sino un péndulo, con retrocesos tan graves como la terminación de 1953 y el genocidio guatemalteco. «Reforzados en la ley, no en la vida.»",
    historiadoresLinea: [
      { nombre: "Wilkinson", linea: "Desde el «punto más bajo» de la terminación, las tribus protagonizaron un «renacimiento de la soberanía»: hoy son gobiernos con tribunales y presupuestos. Revolución silenciosa de líderes, abogados y tribunales. Mide soberanía, no pobreza." },
      { nombre: "Smith & Warrior", linea: "El activismo de 1969–73 fue un «huracán»: breve, intenso, transformador. Alcatraz creó orgullo panindio; Wounded Knee fue el final, no la cima. Ganancias culturales y simbólicas; demandas concretas no cumplidas." },
      { nombre: "Miller (cameo)", linea: "Canadá: cooperación → coerción → confrontación. El Libro Blanco (1969) fue el catalizador que unificó a las Primeras Naciones y produjo la generación de la Sección 35. Pero el reconocimiento constitucional no cerró la brecha de bienestar." },
      { nombre: "Bonfil Batalla (cameo)", linea: "México: el indigenismo es «desindianización», el intento del «México imaginario» de negar al «México profundo»: integrar sin reconocer. El INI (1948) amplió el Estado sin ampliar derechos." }
    ],
    datosClave: [
      { grupo: "Canadá: datos que valen oro", items: [
        "1876 Ley India (Estado tutor) · 1884–85 prohibición del potlatch · escuelas residenciales hasta 1996.",
        "1946–51 comité parlamentario revisa la Ley India · 1951 enmienda (fin prohibición potlatch, se permite litigar).",
        "1960 Diefenbaker: voto federal sin renunciar al estatus (fin del «enfranchisement»).",
        "1969 Libro Blanco (Trudeau/Chrétien) · 1970 Libro Rojo (Harold Cardinal, «ciudadanos plus») · 1971 retiro.",
        "1973 caso Calder (título aborigen existe) → política de reclamos integrales · 1975 Acuerdo de James Bay (1.er tratado moderno).",
        "1980 Constitution Express (George Manuel, UBCIC) · 1982 Sección 35 (constitucional) + AFN · 1985 Bill C-31.",
        "1990 crisis de Oka (78 días, 1 policía muerto) · 1991–96 Comisión Real (440 recomendaciones).",
        "1999 Nunavut (20% del territorio, 85% inuit) · 2000 Acuerdo Final Nisga'a · 22 tratados modernos (1975–2009).",
        "2008 disculpa de Harper · CVR 2008–15 («genocidio cultural») · 2012 Idle No More · votó contra UNDRIP 2007, adhirió 2010."
      ]},
      { grupo: "Estados Unidos: datos que valen oro", items: [
        "1887 Ley Dawes (de 138 M a 48 M de acres en 1934) · 1924 ciudadanía · 1934 Ley Wheeler-Howard (IRA, Collier).",
        "1944 NCAI (Denver) · 1946 Comisión de Reclamos Indios (paga +800 M, no devuelve tierra).",
        "1953 terminación: Resolución 108 + PL 280 (109 tribus, ~1,3 M acres, 200.000 reubicados a 1962).",
        "1961 NIYC (Clyde Warrior, «Red Power») + Declaración de Chicago · 1964 fish-ins (Billy Frank Jr., Medicine Creek 1854) + Guerra contra la Pobreza.",
        "1968 ICRA + nace AIM (Minneapolis: Banks, Bellecourt, Mitchell) · «Triple 68» (ICRA, AIM, NIB).",
        "Alcatraz (20 nov 1969 – 11 jun 1971, Richard Oakes/LaNada Means): sin demandas cumplidas, 200+ ocupaciones después.",
        "8 jul 1970 mensaje de Nixon (autodeterminación sin terminación) · dic 1970 Blue Lake (48.000 acres a Taos) · 1971 ANCSA (44 M acres).",
        "1972 Camino de los Tratados Rotos + BIA · 1973 Wounded Knee (71 días, 2 muertos) · Pine Ridge «reino del terror» 1973–76 · Peltier 1975.",
        "1974 fallo Boldt (50% de la pesca) · 1975 ISDEAA (autodeterminación) · 1976 salud · 1978 AIRFA e ICWA · 1988 casinos · 1990 NAGPRA."
      ]},
      { grupo: "América Latina e internacional: datos que valen oro", items: [
        "1940 Pátzcuaro (Cárdenas): indigenismo continental · 1948 INI (Alfonso Caso): integración vía asimilación.",
        "México: 1992 art. 4 (nación pluricultural), 1.º en ratificar OIT 169 (1990) · 1994 EZLN (Chiapas) · 1996 San Andrés · 2001 art. 2 diluido.",
        "Guatemala: guerra civil 1960–96 · 1981–83 tierra arrasada (CEH: 200.000 muertos, 83% mayas, 93% del Estado, «genocidio»).",
        "Rigoberta Menchú (maya k'iche'): testimonio 1983, Nobel 1992 · Ríos Montt condenado por genocidio 2013 (anulado).",
        "Andes: voto a analfabetos Ecuador 1979 / Perú 1980 / Bolivia 1952 · CONAIE (Ecuador 1986), levantamiento Inti Raymi 1990.",
        "Bolivia: Evo Morales presidente (2006), Estado Plurinacional (2009) · Ecuador plurinacional (2008).",
        "OIT 107 (1957, asimilacionista) · OIT 169 (1989, antiasimilacionista, consulta previa) · UNDRIP 2007 (144 a favor, 4 en contra)."
      ]}
    ],
    comparacion: [
      { eje: "Jerarquía del reconocimiento", texto: "Canadá: constitucional (Sección 35, 1982). EE.UU.: legislativa, nunca constitucional («poder plenario» del Congreso). América Latina: constitucional pero tardío (1991–2009). Diferencia." },
      { eje: "Retroceso dentro del período", texto: "EE.UU.: la terminación se aplicó (109 tribus). Canadá: el Libro Blanco se propuso y se retiró. Guatemala: genocidio. El período contiene su propio contraejemplo. Diferencia." },
      { eje: "Método estatal", texto: "Canadá: negociación de tratados modernos. EE.UU.: litigio y legislación + represión del FBI a AIM. Guatemala: contrainsurgencia genocida. Diferencia." },
      { eje: "Método indígena", texto: "Ambos combinan organización nacional (NCAI 1944 / NIB 1968) y Red Power. En EE.UU. AIM domina 4 años (confrontación); en Canadá la acción directa es puntual y domina la negociación de jefes. Similitud con matiz." },
      { eje: "Gobierno propio y límites", texto: "Canadá: gobierno territorial (Nunavut). EE.UU.: autogestión de programas federales. Pero la brecha socioeconómica y la violencia tardía (Oka / Pine Ridge) son compartidas. Empate en el fracaso socioeconómico." }
    ],
    veredictos: [
      { titulo: "Éxitos y fracasos (las 3 R)", texto: "Reconocimiento considerable, Recursos parcial, Realidad limitada. Avance considerable en la primera R, parcial en la segunda, limitado en la tercera." },
      { titulo: "¿Progreso continuo?", texto: "No: fue un péndulo. Que la terminación (1953) y la autodeterminación (1975) quepan en el mismo cuarto de siglo, y que el genocidio coincida con la era de los derechos humanos, demuestra que el avance fue reversible y desigual." },
      { titulo: "¿Quién fue responsable?", texto: "Las organizaciones fueron condición necesaria (agenda, derrota de la asimilación) pero no suficiente: los resultados concretos pasaron por tribunales, presidentes y el marco internacional. Donde faltaron (Guatemala), no hubo avance sino masacre." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Charles Wilkinson", nacionalidad: "Estadounidense, jurista (Universidad de Colorado)",
      obra: "Blood Struggle: The Rise of Modern Indian Nations (2005)",
      postura: "Renacimiento de la soberanía tribal",
      funcion: "El sí a «considerablemente reforzados» (lado territorial y de gobierno); el factor institucional; contra la lectura heroica de AIM.",
      ideaCentral: "Escribe desde adentro del movimiento legal tribal (trabajó en el NARF). Desde el «punto más bajo» de la terminación en los años 50, las tribus protagonizaron un «renacimiento de la soberanía»: hoy son gobiernos reales con tierras, tribunales, escuelas y empresas. Fue una «revolución silenciosa» de líderes tribales, abogados y tribunales (Billy Frank Jr. y Boldt, Ada Deer y Menominee, los contratos de 1975, los fondos de la Guerra contra la Pobreza). AIM creó conciencia, pero los resultados concretos salieron de juzgados y legislaturas.",
      matiz: "Es optimista y legalista: mide soberanía, no pobreza. Pine Ridge y Cobell no entran bien en su relato; hay que contrastarlo con la 3.ª R (la Realidad socioeconómica).",
      fraseLista: "Para Wilkinson, el período posterior a 1953 no fue de simple mejora sino de renacimiento: las tribus pasaron de estar al borde de la extinción legal a administrar sus propios programas, tribunales y recursos; desde esa óptica los derechos fueron reforzados de manera considerable, aunque el refuerzo se concentró en la soberanía antes que en el bienestar.",
      paraPreguntas: ["¿En qué medida se reforzaron considerablemente? (lado del sí)", "Discuta: ¿organizaciones responsables? (lado Estado/tribunales)", "Examine los factores (factor institucional)"]
    },
    {
      nombre: "Paul Chaat Smith & Robert Allen Warrior", nacionalidad: "Historiadores indígenas de EE.UU. (Smith comanche; Warrior osage)",
      obra: "Like a Hurricane: The Indian Movement from Alcatraz to Wounded Knee (1996)",
      postura: "El activismo como «huracán»: visibilidad, no leyes",
      funcion: "El matiz en «considerablemente»; dividir la pregunta de organizaciones (militantes = agenda, no leyes); impacto cultural vs. fracaso político.",
      ideaCentral: "Escriben desde la crítica interna al movimiento, sin heroísmo. El activismo de 1969–73 fue un huracán: breve, intenso y transformador. Alcatraz convirtió a una generación de indígenas urbanos en activistas y creó un orgullo panindio nuevo; pero Wounded Knee fue el final, no la cima: el movimiento se agotó por la represión, los juicios, las divisiones internas y la falta de programa. Las ganancias fueron sobre todo culturales y simbólicas; las demandas concretas (Alcatraz, los 20 puntos de 1972) no se cumplieron.",
      matiz: "Miran solo 1969–73 y solo EE.UU.; no ponderan los logros legales posteriores (1975–78) que Wilkinson sí ve. Reconocen que el giro de Nixon (1970) llegó en medio de Alcatraz, pero no lo atribuyen al movimiento militante como causa suficiente. Juntos con Wilkinson cubren el tema completo.",
      fraseLista: "Smith y Warrior describen el ciclo que va de Alcatraz a Wounded Knee como un huracán: transformó la identidad indígena y obligó al país a mirar, pero pasó rápido y dejó pocas estructuras; esa lectura explica por qué el movimiento más visible del período fue también el que menos leyes produjo.",
      paraPreguntas: ["¿En qué medida? (lado del matiz: visibilidad ≠ resultado)", "Discuta: organizaciones militantes (agenda, no leyes)", "Analice el impacto de Alcatraz / AIM"]
    },
    {
      nombre: "J.R. Miller", nacionalidad: "Canadiense", regalo: true,
      obra: "Skyscrapers Hide the Heavens (1989)",
      postura: "El Libro Blanco como catalizador",
      funcion: "Canadá en los ejes 2 (movimientos) y 4 (límites); comparación Canadá–EE.UU.",
      ideaCentral: "Lee la relación indígena-blanco como una secuencia: cooperación (comercio de pieles) → coerción (Ley India, escuelas) → confrontación y resurgimiento político tras 1945. El Libro Blanco de 1969 fue el catalizador: la amenaza de perder el estatus unificó a las Primeras Naciones y produjo la generación de líderes que llegó a la Sección 35. Pero advierte que el reconocimiento constitucional no cerró la brecha de bienestar.",
      fraseLista: "Como señala Miller, el Libro Blanco (una iniciativa estatal) fue el catalizador que unificó a las Primeras Naciones y produjo la generación de líderes de 1982, aunque el reconocimiento constitucional dejó intacta la brecha de bienestar.",
      paraPreguntas: ["Impacto de las políticas gubernamentales (Canadá)", "Comparar Canadá–EE.UU.", "Discuta organizaciones (el Estado cataliza el movimiento)"]
    },
    {
      nombre: "Guillermo Bonfil Batalla", nacionalidad: "Mexicano, antropólogo", regalo: true,
      obra: "México profundo: una civilización negada (1987)",
      postura: "El indigenismo como «desindianización»",
      funcion: "América Latina (eje socioeconómico/cultural); por qué el Estado intervino más pero reconoció menos.",
      ideaCentral: "El indigenismo fue el proyecto del «México imaginario» (la élite mestiza modernizadora) para «desindianizar» al «México profundo» (la civilización mesoamericana que sobrevivió): integrar sin reconocer. Por eso la creación del INI en 1948 amplió la presencia del Estado sin ampliar los derechos; su crítica anticipa al EZLN, y el reconocimiento de 1992 llegó después de que el indigenismo fracasara.",
      fraseLista: "Como sostiene Bonfil Batalla, el indigenismo no buscaba reconocer al indígena sino convertirlo en mestizo; por eso la creación del INI en 1948 amplió la presencia del Estado sin ampliar los derechos.",
      paraPreguntas: ["Impacto del indigenismo en México", "¿Fueron considerables las mejoras en América Latina?", "Integración vs. reconocimiento"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1876, fecha: "1876", pais: "Canadá", titulo: "Ley India (Indian Act)",
      descripcion: "El Departamento de Asuntos Indígenas define quién es «indio de estatus» y administra las tierras de reserva. Estatus por línea paterna; la mujer que se casaba con un no-indígena lo perdía. «Enfranchisement»: para votar había que renunciar al estatus. Prohibición de ceremonias (potlatch, Sun Dance) desde 1884–85.",
      causas: ["Tutela estatal heredada de la Proclamación Real (1763) y los tratados numerados.", "Lógica de asimilación forzada."],
      consecuencias: ["Estado tutor: define quién sos, administra tu tierra y te «libera» solo si dejás de ser indígena.", "Base del punto cero canadiense."],
      historiador: "Miller: coerción (Ley India, escuelas) tras la cooperación del comercio de pieles." },
    { anio: 1887, fecha: "1887", pais: "EE.UU.", titulo: "Ley Dawes (allotment)",
      descripcion: "Asignación individual de parcelas para destruir la propiedad tribal y crear «granjeros». La tierra «sobrante» se vende a no indígenas desde 1891.",
      causas: ["Política de asimilación por disolución de la propiedad colectiva."],
      consecuencias: ["De ~138 millones de acres (1887) a 48 millones (1934). Pobreza masiva."] },
    { anio: 1934, fecha: "1934", pais: "EE.UU.", titulo: "Ley Wheeler-Howard (IRA)",
      descripcion: "«Nuevo Trato Indio» de John Collier: fin de las asignaciones, devolución de tierras excedentes, gobiernos tribales con constituciones y créditos.",
      causas: ["Fracaso de Dawes; reformismo del New Deal."],
      consecuencias: ["Constituciones modelo impuestas desde la BIA; tribus inviables; gobiernos corruptos → semilla del conflicto de Pine Ridge (1973)."] },
    { anio: 1944, fecha: "1944", pais: "EE.UU.", titulo: "Se funda el NCAI (Denver)",
      descripcion: "Congreso Nacional de Indios Americanos: 80 delegados de unos 50 gobiernos tribales de la IRA. Membresía solo indígena. Método: cabildeo, litigio, voto.",
      causas: ["Necesidad de un frente institucional nacional."],
      consecuencias: ["Será el frente institucional contra la terminación; leyes 1965–78.", "Límite: poca llegada a los urbanos."] },
    { anio: 1948, fecha: "1948", pais: "México", titulo: "Instituto Nacional Indigenista (INI)",
      descripcion: "Dirigido por Alfonso Caso. Centros coordinadores (el primero en San Cristóbal, 1951): antropólogos diseñan educación, salud y agricultura. Castellanización, internados, integración vía el PRI.",
      causas: ["Pátzcuaro 1940 (Cárdenas): indigenismo continental coordinado por los Estados, no por indígenas."],
      consecuencias: ["Más intervención estatal basada en la asimilación cultural: museos para culturas «muertas», asimilación para los vivos."],
      historiador: "Bonfil Batalla: «desindianización»; amplió el Estado sin ampliar los derechos." },
    { anio: 1953, fecha: "1953", pais: "EE.UU.", titulo: "Terminación (Resolución 108 + PL 280)",
      descripcion: "La Resolución 108 termina la responsabilidad federal «lo antes posible»; la Ley Pública 280 da jurisdicción estatal sobre reservas sin consulta. Reubicación voluntaria (1952) y Ley de Reubicación (1956).",
      causas: ["La Guerra Fría: los senadores ven «comunismo» en la propiedad colectiva tribal.", "Preferencia por la asimilación «igualitaria»."],
      consecuencias: ["109 tribus y bandas terminadas, ~1,3 M de acres perdidos (Menominee y Klamath 1961); 200.000 reubicados a 1962.", "Retroceso en pleno período de estudio; AIM nace de la Minneapolis urbana."] },
    { anio: 1960, fecha: "1960", pais: "Canadá", titulo: "Voto federal sin perder el estatus",
      descripcion: "Diefenbaker otorga el voto federal a los indios de estatus sin exigir renunciar al estatus (fin del «enfranchisement» como condición).",
      causas: ["Contexto de posguerra y servicio en la guerra; presión de derechos humanos."],
      consecuencias: ["Primer derecho civil clásico. Participación electoral baja al principio: muchos desconfiaban de un derecho «canadiense».", "Canadá llega tarde al voto pero temprano a la constitución."] },
    { anio: 1969, fecha: "1969", pais: "Canadá", titulo: "Libro Blanco (Trudeau/Chrétien)",
      descripcion: "Propone abolir la Ley India, el estatus, el Departamento y las reservas: «igualdad sin privilegios especiales».",
      causas: ["Ideología de igualdad formal individual."],
      consecuencias: ["Rechazo masivo. 1970 Libro Rojo / Citizens Plus (Harold Cardinal): «ciudadanos plus». Retiro en 1971.", "Nace el nacionalismo indígena moderno; se consolida la National Indian Brotherhood (1968)."],
      historiador: "Miller: el Libro Blanco fue el catalizador que unificó a las Primeras Naciones." },
    { anio: 1969, fecha: "20 nov 1969 – 11 jun 1971", pais: "EE.UU.", titulo: "Ocupación de Alcatraz",
      descripcion: "Indios de Todas las Tribus (Richard Oakes, LaNada Means) ocupan la isla 19 meses. Proclamación al «Gran Padre Blanco»: la compran por 24 dólares en cuentas de vidrio; la isla «se parece a una reserva». El gobierno corta luz y agua.",
      causas: ["Panindianismo urbano creado por la reubicación; influencia del movimiento afroamericano."],
      consecuencias: ["Ninguna demanda concreta cumplida; moral destruida por las condiciones. Pero: 200+ ocupaciones posteriores, cobertura nacional.", "Visibilidad ≠ victoria legislativa inmediata."],
      historiador: "Smith & Warrior: el «huracán» empieza acá; transforma identidad, no leyes." },
    { anio: 1970, fecha: "8 jul 1970", pais: "EE.UU.", titulo: "Mensaje de Nixon + Blue Lake",
      descripcion: "Nixon repudia la terminación y propone «autodeterminación sin terminación» mientras Alcatraz sigue ocupada. En diciembre devuelve Blue Lake (48.000 acres) al pueblo de Taos; en 1971, ANCSA en Alaska (44 M de acres + 962,5 M de dólares).",
      causas: ["¿La presión de Alcatraz (Smith & Warrior) o el trabajo previo de NCAI y abogados (Wilkinson)? Es el nudo del debate historiográfico."],
      consecuencias: ["Giro oficial de política; la tierra puede volver.", "Nixon: el presidente más favorable a la autodeterminación (paradoja: el FBI perseguía a AIM)."] },
    { anio: 1973, fecha: "ene 1973", pais: "Canadá", titulo: "Caso Calder (Nisga'a)",
      descripcion: "Seis de siete jueces de la Corte Suprema reconocen que el título aborigen existe en el derecho canadiense (aunque se dividen sobre si seguía vigente). Los Nisga'a litigaban hacía décadas (Frank Calder, primer indígena en una legislatura, 1949).",
      causas: ["Décadas de litigio Nisga'a."],
      consecuencias: ["Ottawa crea la política de reclamos integrales (1973). Entre 1975 y 2009: 22 «tratados modernos». Acuerdo Final Nisga'a (2000)."] },
    { anio: 1973, fecha: "27 feb – 8 may 1973", pais: "EE.UU.", titulo: "Wounded Knee (71 días)",
      descripcion: "OSCRO pide ayuda a AIM contra el presidente tribal Dick Wilson y su milicia (GOONs). 200–300 ocupantes; marshals y FBI cercan. Dos ocupantes muertos (Frank Clearwater, Buddy Lamont).",
      causas: ["Conflicto interno en Pine Ridge; AIM elige el sitio por el símbolo de la masacre de 1890."],
      consecuencias: ["Último gran acto militante de AIM. Causa de Banks y Means anulada (mala conducta del FBI, 1974).", "«Reino del terror» en Pine Ridge (1973–76, +60 muertes); caso Leonard Peltier (1975)."],
      historiador: "Smith & Warrior: Wounded Knee fue el final, no la cima." },
    { anio: 1974, fecha: "1974", pais: "EE.UU.", titulo: "Fallo Boldt (50% de la pesca)",
      descripcion: "El juez federal George Boldt (EE.UU. vs. Washington) falla que las tribus tienen derecho al 50% de la pesca anual según los tratados. Confirmado por la Corte Suprema en 1979. Diez años de fish-ins de por medio (Billy Frank Jr., Tratado de Medicine Creek de 1854).",
      causas: ["Fish-ins del NIYC desde 1964; arrestos y violencia de vigilantes blancos."],
      consecuencias: ["Las reivindicaciones podían volverse resultados judiciales concretos: avance territorial-económico efectivo."],
      historiador: "Wilkinson: el modelo protesta + tratado + tribunal." },
    { anio: 1975, fecha: "1975", pais: "EE.UU.", titulo: "Ley de Autodeterminación (ISDEAA)",
      descripcion: "Las tribus pueden contratar y administrar ellas mismas los programas federales (salud, educación) que antes manejaba la BIA. Menominee ya había sido restaurada en 1973 (campaña DRUMS de Ada Deer).",
      causas: ["Giro de Nixon (1970); fondos de la Guerra contra la Pobreza (1964) que enseñaron a administrar."],
      consecuencias: ["Reversión formal de la terminación: cambio significativo respecto de 1953. Las políticas no fueron uniformes."] },
    { anio: 1982, fecha: "1982", pais: "Canadá", titulo: "Sección 35 + AFN",
      descripcion: "La Sección 35 de la Ley Constitucional «reconoce y afirma los derechos aborígenes y de tratados existentes» de indios, inuit y métis, fuera de la Carta de Derechos (para que no queden sujetos a la igualdad individual). Se funda la Asamblea de las Primeras Naciones. Fruto de la Constitution Express (1980, George Manuel, UBCIC).",
      causas: ["Constitution Express: dos trenes de Vancouver a Ottawa (~1.000 personas), delegaciones a la ONU y a Londres."],
      consecuencias: ["Evidencia más fuerte de refuerzo considerable (jerarquía constitucional). Pero las conferencias 1983–87 fracasan en definir el autogobierno: la Sección 35 queda vacía de contenido concreto durante años."],
      historiador: "Miller: la Sección 35 fue el resultado de la movilización que catalizó el Libro Blanco." },
    { anio: 1990, fecha: "1990", pais: "Canadá", titulo: "Crisis de Oka",
      descripcion: "El municipio de Oka (Quebec) quiere ampliar un campo de golf sobre un cementerio mohawk. Barricadas de Kanesatake y Kahnawake, 78 días, un policía muerto, intervención del ejército.",
      causas: ["Ocho años después de la Sección 35, el Estado todavía envía al ejército por tierras."],
      consecuencias: ["Comisión Real sobre Pueblos Aborígenes (1991–96): 440 recomendaciones, mayoría sin aplicar.", "Muestra el límite: la Constitución reconocía derechos que el Estado no estaba dispuesto a honrar sobre el terreno."] },
    { anio: 1992, fecha: "1992", pais: "América Latina", titulo: "El año-bisagra latinoamericano",
      descripcion: "V Centenario + Nobel de la Paz a Rigoberta Menchú (maya k'iche') + reforma del art. 4 mexicano (nación pluricultural) + reforma de Paraguay. México ya era el 1.º en ratificar el Convenio 169 (1990).",
      causas: ["Año Internacional de los Pueblos Indígenas (1993) y Decenio (1994–2004); crítica al indigenismo (Barbados 1971)."],
      consecuencias: ["Ola constitucional: Colombia 1991, México/Paraguay 1992, Perú 1993, Bolivia 1994, Ecuador 1998, Venezuela 1999.", "El Nobel de Menchú fue el reconocimiento de una catástrofe, no de un avance."],
      historiador: "Bonfil Batalla: el reconocimiento de 1992 llegó cuando el indigenismo ya había fracasado." },
    { anio: 1994, fecha: "1 ene 1994", pais: "México", titulo: "Alzamiento del EZLN (Chiapas)",
      descripcion: "El EZLN se alza el día en que entra en vigor el TLCAN. Acuerdos de San Andrés (1996) sobre autonomía; la reforma de 2001 (art. 2) los diluye y es rechazada por el EZLN y el Congreso Nacional Indígena.",
      causas: ["La reforma de 1992 no evitó una rebelión armada: la brecha legal/efectivo en su forma más dramática."],
      consecuencias: ["Ejemplo local positivo: la UCIHJ de los wixaritari (huicholes) de Jalisco, financiada por el INI pero dirigida por líderes propios."] },
    { anio: 1999, fecha: "1 abr 1999", pais: "Canadá", titulo: "Creación de Nunavut",
      descripcion: "A partir del Acuerdo de Reclamos de Tierras de Nunavut (1993) con la Inuit Tapirisat (fundada 1971). Negociación de 20 años, no confrontación. 20% del territorio canadiense; 85% de población inuit; gobierno territorial propio (no provincia, gobierno público).",
      causas: ["Negociación de 20 años con la Inuit Tapirisat."],
      consecuencias: ["Paso del reconocimiento jurídico al gobierno concreto, pero es una solución regional, no general."] },
    { anio: 2009, fecha: "2009", pais: "América Latina", titulo: "Bolivia, Estado Plurinacional",
      descripcion: "Evo Morales (primer presidente aymara, electo dic. 2005) lleva a la Constitución de 2009 el Estado Plurinacional. Ecuador 2008: plurinacional e intercultural, derechos de la naturaleza. Precedente: «Guerra del agua» de Cochabamba (2000).",
      causas: ["Levantamientos de CONAIE (1990), marchas bolivianas; del clasismo al etnicismo (katarismo)."],
      consecuencias: ["El punto más alto del eje político-jurídico del continente. Límite: TIPNIS (2011), el gobierno indígena también choca con las comunidades."] }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Para los pueblos indígenas «derechos civiles» <b>no</b> significa lo mismo que para los afroamericanos. Los afroamericanos pedían integración e igualdad individual; los indígenas pedían (y piden) <b>soberanía, tierras y derechos colectivos</b> como pueblos distintos. Esa diferencia es la clave de todo el tema: una ley «igualitaria» (Libro Blanco 1969, terminación 1953) puede ser un <b>retroceso</b>.</p>

          <h3>Lo que el examinador quiere ver</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Banda</th><th>Qué pide</th><th>Qué significa en tu ensayo</th></tr></thead>
            <tbody>
              <tr><td>13–15 (el 7)</td><td>Argumento sostenido, evidencia precisa, perspectivas evaluadas, conclusión con juicio.</td><td>Tesis en la intro; cada párrafo con evidencia fechada y un juicio (considerable/parcial/limitado); 2 historiadores que se contrastan; conclusión que pesa.</td></tr>
              <tr><td>10–12</td><td>Enfocada, argumento mayormente sostenido, algo de análisis.</td><td>Buen contenido, pero narrás o los historiadores están de adorno.</td></tr>
              <tr><td>7–9</td><td>Conocimiento correcto pero descriptivo.</td><td>Contás la historia en orden. No pasa de acá sin juicio.</td></tr>
            </tbody>
          </table></div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Tu profe propone organizar <b>cualquier ensayo en cuatro ejes</b> (son también los colores de las fichas de planning): <b>1) Político-jurídico</b> (voto, ciudadanía, reformas, reconocimiento constitucional). <b>2) Movimientos y autodeterminación</b> (NCAI, NIYC, AIM, AFN, CONAIE, EZLN; cabildeo vs. acción directa). <b>3) Territorial y cultural</b> (reclamos de tierras, recursos, lengua, religión, escuelas residenciales). <b>4) Límites y continuidades</b> (pobreza, violencia estatal, asimilación disfrazada, incumplimiento).</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Las 3 R del juicio final:</b> <b>R</b>econocimiento (ley), <b>R</b>ecursos (tierra/agua/gobierno), <b>R</b>ealidad (vida socioeconómica). Avance considerable en la primera R, parcial en la segunda, limitado en la tercera. Con esa escalera armás cualquier conclusión.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La tesis maestra (sirve para casi cualquier pregunta):</b> «En este período la distancia decisiva no fue entre tener o no tener derechos, sino entre el reconocimiento legal de esos derechos y su ejercicio efectivo: los Estados americanos aprendieron a escribir los derechos indígenas en sus constituciones mucho antes de aprender a cumplirlos. El avance fue real pero asimétrico: considerable en la jerarquía de las normas, parcial en el control de la tierra y los recursos, y limitado en las condiciones materiales de vida.»</div>

          <h3>Código de colores</h3>
          <ul>
            <li><b>KISS</b> — la versión en una frase de algo que suena complicado.</li>
            <li><b>FRASE LISTA</b> — oración que podés copiar casi textual al ensayo.</li>
            <li><b>TRUCO</b> — mnemotecnia, secuencia o atajo.</li>
            <li><b>HISTORIADOR</b> — posición historiográfica y cómo meterla en el argumento.</li>
            <li><b>TRAMPA</b> — error típico que cuesta puntos.</li>
            <li><b>DE CLASE</b> — lo que viene de la guía de tu profe. Es la capa prioritaria: el examinador que corrige piensa como él.</li>
          </ul>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Ley India (1876)</b> = Estado tutor: el gobierno define quién sos, administra tu tierra y te «libera» solo si dejás de ser indígena. <b>Enfranchisement</b> = para votar había que renunciar al estatus de indio. <b>Terminación</b> = política de EE.UU. (1953) que acaba con la responsabilidad federal hacia las tribus. <b>Autodeterminación</b> = las tribus administran sus propios programas (EE.UU. 1975). <b>Indigenismo</b> = política continental de los Estados (Pátzcuaro 1940) para «integrar» al indígena asimilándolo. <b>Plurinacionalidad</b> = reconocer varias naciones dentro del Estado (Bolivia 2009, Ecuador 2008). <b>Red Power</b> = acción directa indígena (NIYC acuña el término). <b>Panindianismo</b> = identidad común de todas las tribus, creada por la urbanización.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No contestes una pregunta con adverbio de grado («considerablemente», «significativamente», «plenamente») con una tesis que solo demuestre que <b>hubo cambio</b>. Si hay adverbio, el ensayo entero tiene que <b>medir la magnitud</b>, no solo la dirección.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué significa «derechos civiles» para los pueblos indígenas en este tema?", etiqueta: "concepto",
            opciones: [
              { texto: "Soberanía, tierras y derechos colectivos como pueblos distintos.", correcta: true, explicacion: "Correcto: no es la igualdad individual que pedían los afroamericanos; por eso una ley «igualitaria» puede ser un retroceso." },
              { texto: "Básicamente la igualdad individual y la plena integración al ciudadano común del país.", correcta: false, explicacion: "Eso describe la demanda afroamericana; para los indígenas la clave son los derechos colectivos." },
              { texto: "El derecho exclusivo a votar en elecciones nacionales sin ninguna otra demanda.", correcta: false, explicacion: "El voto es solo una parte; dejar afuera tierra y soberanía es la mitad del tema." },
              { texto: "El derecho a recibir únicamente dinero del Estado como compensación.", correcta: false, explicacion: "La Comisión de Reclamos (1946) pagó dinero y no devolvió tierra: eso es justamente el límite, no la demanda central." }
            ] },
          { pregunta: "¿Qué miden las «3 R» del juicio final?", etiqueta: "concepto",
            opciones: [
              { texto: "Reconocimiento (ley), Recursos (tierra/gobierno) y Realidad (vida socioeconómica).", correcta: true, explicacion: "Correcto: considerable → parcial → limitado, de arriba hacia abajo." },
              { texto: "Reservas, Reclamos judiciales de tierra y Reubicación forzada hacia las grandes ciudades.", correcta: false, explicacion: "No son esas; las 3 R miden el grado de avance en tres planos." },
              { texto: "Revolución, Represión estatal y Reconciliación nacional posterior.", correcta: false, explicacion: "No corresponde al esquema de las 3 R del tema." },
              { texto: "Raza, Religión y Residencia urbana de la población indígena.", correcta: false, explicacion: "No es ese el contenido de las 3 R." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Antes de 1945: el punto de partida",
        html: `
          <p>Para argumentar «mejora» o «refuerzo» necesitás un punto cero. Tres situaciones de partida distintas con un denominador común: <b>asimilación forzada + pérdida de tierras + tutela estatal</b>.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>País</th><th>Punto cero</th><th>Qué significaba</th></tr></thead>
            <tbody>
              <tr><td>Canadá</td><td>Ley India (1876), escuelas residenciales (hasta 1996).</td><td>Estado tutor: el gobierno define quién es «indio de estatus», administra la tierra de reserva y exige renunciar al estatus para votar («enfranchisement»). Prohibición del potlatch (1884–85).</td></tr>
              <tr><td>EE.UU.</td><td>Ley Dawes (1887) → IRA (1934).</td><td>Péndulo: Dawes disuelve la tierra tribal en parcelas individuales (de 138 a 48 M de acres); la IRA de Collier la reorganiza, pero con constituciones impuestas desde la BIA.</td></tr>
              <tr><td>América Latina</td><td>Ciudadanos formales en el s. XIX; indigenismo desde Pátzcuaro (1940).</td><td>Ciudadanos en el papel, excluidos en la práctica: la élite criolla conserva tierra y riqueza. El indigenismo busca «integrar» asimilando.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> El art. I, sección 8 de la Constitución de EE.UU. regula el comercio «con las naciones extranjeras, entre los estados y con las tribus indias» → las tribus son <b>naciones dentro de la nación</b>. Todo el activismo posterior exige que se cumpla eso.</div>

          <h3>Por qué 1945 es bisagra: cinco cambios de contexto</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Factor</th><th>Contenido</th><th>Para qué sirve</th></tr></thead>
            <tbody>
              <tr><td>Servicio en la guerra</td><td>~25.000 nativos de EE.UU. (code talkers navajos) y +3.000 indígenas de estatus canadienses. Volvieron con expectativas y una contradicción: pelearon por libertades que no tenían.</td><td>Factor de causa. Canadá reformó la Ley India (1946–51) explícitamente por ese servicio.</td></tr>
              <tr><td>Derechos humanos</td><td>Carta de la ONU (1945), Declaración Universal (1948), descolonización. La tutela se vuelve vergonzosa.</td><td>Contexto que luego se vuelve instrumento (OIT 107 en 1957, 169 en 1989).</td></tr>
              <tr><td>Guerra Fría</td><td>Ambivalente: alimentó la terminación (el «comunismo» de la propiedad colectiva) y la contrainsurgencia genocida en Guatemala, pero dio valor propagandístico a la «igualdad».</td><td>Para matizar: el contexto no empujó en una sola dirección.</td></tr>
              <tr><td>Urbanización</td><td>Reubicación de la BIA (1952–56): 200.000 indígenas en ciudades para 1962; California 80% urbana en 1960.</td><td>Rompe el aislamiento tribal y crea el panindianismo (AIM nace urbano).</td></tr>
              <tr><td>Modelo de otros</td><td>El movimiento afroamericano (sit-ins → fish-ins 1964), las Panteras Negras (patrullas de AIM 1968), la Nueva Izquierda.</td><td>La acción directa indígena copia y adapta métodos.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «Examine los factores»: <b>G-U-D-O-I</b> → <b>G</b>uerra (veteranos), <b>U</b>rbanización, <b>D</b>erechos humanos, <b>O</b>rganización indígena, <b>I</b>nstituciones (tribunales, Congreso, OIT). Los tres primeros son contexto; los dos últimos, motor.</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Bonfil Batalla: el indigenismo nacido en Pátzcuaro es «desindianización» (el «México imaginario» que niega al «México profundo»). Útil para decir que en América Latina el Estado de posguerra intervino más, pero no necesariamente reconoció más.</div>
        `,
        miniQuiz: [
          { pregunta: "La Ley India canadiense de 1876 se define mejor como…", etiqueta: "concepto",
            opciones: [
              { texto: "Un régimen de tutela: el Estado define quién es indígena y administra su tierra.", correcta: true, explicacion: "Correcto: es el «Estado tutor», con el enfranchisement y la prohibición del potlatch." },
              { texto: "Una ley que les concedió de inmediato el pleno voto federal sin ninguna condición previa.", correcta: false, explicacion: "Al contrario: el voto federal sin perder el estatus recién llega en 1960." },
              { texto: "Una norma que reconoció la soberanía territorial plena de las Primeras Naciones.", correcta: false, explicacion: "Hizo lo opuesto: dejó la propiedad legal de la tierra en manos del Estado." },
              { texto: "Un tratado internacional firmado entre Canadá y las Naciones Unidas en la posguerra.", correcta: false, explicacion: "Es una ley interna de 1876, anterior a la ONU." }
            ] },
          { pregunta: "Según «G-U-D-O-I», ¿cuáles son los factores motor (no de contexto)?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "La organización indígena y las instituciones (tribunales, Congreso, OIT).", correcta: true, explicacion: "Correcto: Guerra, Urbanización y Derechos humanos son contexto; los dos últimos son el motor." },
              { texto: "El servicio en la guerra mundial y la urbanización acelerada de la posguerra.", correcta: false, explicacion: "Esos son factores de contexto, no el motor del cambio." },
              { texto: "La Guerra Fría y el modelo del movimiento afroamericano de los años sesenta.", correcta: false, explicacion: "Ambos son contexto; el motor es organización + instituciones." },
              { texto: "Únicamente la Declaración Universal de los Derechos Humanos de 1948.", correcta: false, explicacion: "Los derechos humanos son contexto, y además el motor son dos factores, no uno." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Canadá: de la Ley India a Nunavut",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>V-L-C-N</b> = <b>V</b>oto 1960 → <b>L</b>ibro Blanco 1969 → <b>C</b>onstitución 1982 (Sección 35) → <b>N</b>unavut 1999. Cuatro escalones: derechos individuales → rechazo de la igualdad formal → derechos colectivos constitucionales → gobierno propio.</div>

          <h3>Acción – reacción – efecto</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Acción</span>1969 · Libro Blanco: abolir la Ley India, el estatus y las reservas en nombre de la «igualdad».</div>
              <div><span class="et">Reacción</span>Rechazo masivo; Libro Rojo de Harold Cardinal: «ciudadanos plus».</div>
              <div><span class="et">Efecto</span>Retiro en 1971. Nace el nacionalismo indígena moderno (Miller: catalizador).</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>Quebec lanza James Bay sin tratados (1971).</div>
              <div><span class="et">Reacción</span>Cree e inuit obtienen una orden judicial (1973, juez Malouf) que detiene las obras.</div>
              <div><span class="et">Efecto</span>Acuerdo de James Bay (1975): primer tratado moderno. El Estado negocia en vez de imponer.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1980 · Trudeau repatría la Constitución; el borrador no menciona derechos aborígenes.</div>
              <div><span class="et">Reacción</span>Constitution Express: George Manuel (UBCIC) fleta dos trenes de Vancouver a Ottawa (~1.000 personas).</div>
              <div><span class="et">Efecto</span>Sección 35 (1982): «se reconocen y afirman los derechos aborígenes y de tratados».</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1990 · Oka quiere un campo de golf sobre un cementerio mohawk.</div>
              <div><span class="et">Reacción</span>Barricadas de Kanesatake y Kahnawake, 78 días, intervención del ejército.</div>
              <div><span class="et">Efecto</span>Comisión Real (1991–96): 440 recomendaciones, mayoría sin aplicar. Muestra el límite.</div>
            </div>
          </div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Libro Blanco</b> = el gobierno quiere igualdad <b>borrando</b> la diferencia. <b>Libro Rojo</b> = los indígenas quieren igualdad <b>más</b> la diferencia («ciudadanos plus»). <b>Red Power</b> = acción directa (Kenora 1974). No confundas Libro Rojo (documento de cabildeo) con Red Power (método).</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Miller: la relación indígena-blanco va de cooperación → coerción → confrontación. El Libro Blanco fue el <b>catalizador</b>: la amenaza de perder el estatus unificó a las Primeras Naciones y produjo la generación que llegó a la Sección 35. Pero advierte que el reconocimiento constitucional no cerró la brecha de bienestar.</div>

          <h3>Balance Canadá</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Avance</th><th>Límite</th><th>Juicio</th></tr></thead>
            <tbody>
              <tr><td>Político-jurídica</td><td>Voto 1960; Ley India reformada 1951, 1985; Sección 35 (constitucional).</td><td>La Ley India de 1876 sigue vigente; el Estado sigue definiendo el estatus.</td><td>Considerable</td></tr>
              <tr><td>Movimientos</td><td>NIB/AFN como interlocutor formal; Constitution Express exitosa; Idle No More.</td><td>Dependencia del financiamiento federal; divisiones métis/inuit/Primeras Naciones.</td><td>Considerable</td></tr>
              <tr><td>Territorial-cultural</td><td>Calder 1973; James Bay 1975; 22 tratados modernos; Nunavut; Nisga'a 2000.</td><td>Columbia Británica casi sin tratados; Oka 1990; escuelas residenciales hasta 1996.</td><td>Parcial</td></tr>
              <tr><td>Socioeconómica</td><td>Disculpa 2008; CVR 2015.</td><td>Brecha en salud, agua, vivienda, cárcel, suicidio; 440 recomendaciones sin aplicar.</td><td>Limitado</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Canadá es el caso donde el reconocimiento alcanzó la jerarquía constitucional (Sección 35, 1982) y llegó a materializarse en gobierno propio (Nunavut, 1999); sin embargo, la crisis de Oka de 1990, con el ejército desplegado por un campo de golf, demostró que la Constitución reconocía derechos que el Estado todavía no estaba dispuesto a honrar sobre el terreno.»</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Las reformas de la Ley India (1946–51, voto 1960) sirven para «mejoraron», pero <b>no alcanzan</b> para «considerablemente»: la Ley India sigue en pie (reforma, no abolición). La evidencia más fuerte de refuerzo considerable es la Sección 35 (jerarquía constitucional, fruto de movilización).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué es la Sección 35 de 1982 y por qué importa?", etiqueta: "concepto",
            opciones: [
              { texto: "El reconocimiento constitucional de los derechos aborígenes y de tratados de indios, inuit y métis.", correcta: true, explicacion: "Correcto: es la evidencia más fuerte de «refuerzo considerable» por su jerarquía constitucional." },
              { texto: "La ley ordinaria que abolió por completo y de manera definitiva la vieja Ley India canadiense de 1876.", correcta: false, explicacion: "La Ley India sigue vigente; además la Sección 35 es constitucional, no ordinaria." },
              { texto: "El tratado que creó directamente el territorio autónomo inuit de Nunavut en el norte.", correcta: false, explicacion: "Nunavut es de 1999 y surge de otro acuerdo (1993); no es la Sección 35." },
              { texto: "La cláusula de la Carta de Derechos que garantiza la igualdad individual de todos.", correcta: false, explicacion: "Al revés: la Sección 35 se puso fuera de la Carta justamente para que los derechos colectivos no quedaran sujetos a la igualdad individual." }
            ] },
          { pregunta: "Para Miller, el Libro Blanco de 1969 fue…", etiqueta: "historiador",
            opciones: [
              { texto: "El catalizador que unificó a las Primeras Naciones y produjo la generación de la Sección 35.", correcta: true, explicacion: "Correcto: la amenaza de perder el estatus hizo lo que ninguna reforma había hecho, unificar." },
              { texto: "Una política plenamente exitosa que fue aplicada en todas las reservas del país durante años.", correcta: false, explicacion: "Nunca se aplicó: fue retirado en 1971 tras el rechazo masivo." },
              { texto: "Un documento redactado por los propios líderes indígenas para pedir «ciudadanos plus».", correcta: false, explicacion: "Eso fue el Libro Rojo de Cardinal; el Libro Blanco era la propuesta de Trudeau." },
              { texto: "Un acuerdo de tierras que entregó a los inuit el gobierno del norte canadiense.", correcta: false, explicacion: "Eso describe Nunavut, no el Libro Blanco." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · EE.UU.: de la terminación a la autodeterminación",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>D-I-T-A</b> (Dawes → IRA → Terminación → Autodeterminación): el péndulo oscila dos veces entre asimilar y reconocer. Si la pregunta dice «¿fue un progreso continuo?», la respuesta es <b>no</b>: 1953 es un retroceso en pleno período de estudio.</div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Año</th><th>Política</th><th>Qué hizo</th></tr></thead>
            <tbody>
              <tr><td>1887</td><td>Dawes</td><td>Asimilación por parcelas individuales.</td></tr>
              <tr><td>1934</td><td>IRA (Wheeler-Howard)</td><td>Reorganización: gobiernos tribales, fin de asignaciones.</td></tr>
              <tr><td>1953</td><td>Terminación</td><td>Asimilación por abolición del vínculo federal y reubicación urbana.</td></tr>
              <tr><td>1970–75</td><td>Autodeterminación</td><td>Nixon repudia la terminación; las tribus administran los programas federales.</td></tr>
            </tbody>
          </table></div>

          <h3>Tres generaciones, tres métodos</h3>
          <div class="caja kiss"><span class="caja-et">KISS</span> <b>NCAI</b> (1944) = traje y corbata, cabildeo en Washington, indios de reserva. <b>NIYC</b> (1961) = jóvenes universitarios, fish-ins, inventan «Red Power». <b>AIM</b> (1968) = urbanos, pobres, confrontación (Alcatraz → Rushmore → Tratados Rotos → Wounded Knee). Tres generaciones, tres métodos.</div>

          <h3>La secuencia militante (A-R-T-W)</h3>
          <ol class="escalera">
            <li><b>20 nov 1969 – 11 jun 1971 · Alcatraz.</b> Indios de Todas las Tribus (Richard Oakes, LaNada Means): «compran» la isla por 24 dólares. Ninguna demanda cumplida, pero 200+ ocupaciones después y panindianismo.</li>
            <li><b>8 jul 1970 · Mensaje de Nixon</b> (autodeterminación sin terminación), mientras Alcatraz sigue ocupada. Dic 1970: Blue Lake (48.000 acres) a Taos. 1971: ANCSA en Alaska (44 M de acres).</li>
            <li><b>4 jul 1971 · Mount Rushmore</b> (pancarta «Sioux Indian Power»).</li>
            <li><b>nov 1972 · Camino de los Tratados Rotos:</b> caravana de 500+ a Washington, 20 demandas; nadie los recibe (elecciones); ocupan la sede de la BIA 6 días.</li>
            <li><b>27 feb – 8 may 1973 · Wounded Knee</b> (71 días): OSCRO pide ayuda a AIM contra Dick Wilson y los GOONs. Dos ocupantes muertos. Último gran acto militante de AIM.</li>
          </ol>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> El debate central: ¿por qué giró Nixon en 1970? <b>Smith & Warrior</b> apuntan a la presión de Alcatraz (el «huracán»); <b>Wilkinson</b> al trabajo previo de NCAI y los abogados tribales (la «revolución silenciosa»). Usá el contraste: el movimiento fijó la agenda, los tribunales y el Congreso la convirtieron en ley.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El fallo Boldt de 1974 convirtió diez años de fish-ins en el 50% de la pesca: el ejemplo más claro de cómo la protesta rendía cuando encontraba un tratado y un juez.»</div>

          <h3>Balance Estados Unidos</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Avance</th><th>Límite</th><th>Juicio</th></tr></thead>
            <tbody>
              <tr><td>Político-jurídica</td><td>ICRA 1968; autodeterminación 1975; restauraciones (Menominee 1973).</td><td>Terminación 1953 en pleno período; todo por ley ordinaria; el Congreso conserva «poder plenario».</td><td>Parcial-considerable</td></tr>
              <tr><td>Movimientos</td><td>NCAI frena la terminación; Alcatraz y AIM cambian la agenda y la identidad.</td><td>AIM colapsa tras 1973 (FBI, juicios, divisiones); pérdida de apoyo público.</td><td>Parcial</td></tr>
              <tr><td>Territorial-cultural</td><td>Blue Lake 1970; ANCSA 1971; Boldt 1974; AIRFA, ICWA 1978; NAGPRA 1990.</td><td>La Comisión de Reclamos solo paga dinero; AIRFA sin dientes; Black Hills nunca devueltas.</td><td>Parcial</td></tr>
              <tr><td>Socioeconómica</td><td>Salud (1976), casinos (1988) en algunas tribus.</td><td>Pine Ridge entre los condados más pobres; Cobell; desigualdad entre tribus con y sin casinos.</td><td>Limitado</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «En Estados Unidos el período no fue una línea ascendente sino un péndulo: la terminación de 1953 amenazó la existencia misma de las tribus, y la autodeterminación de 1975 la restauró; que ambas políticas cupieran en el mismo cuarto de siglo demuestra que los derechos dependían menos de la Constitución que de la mayoría del Congreso.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Dos Wounded Knee: <b>1890</b> (masacre de ~300 lakotas) y <b>1973</b> (ocupación de AIM, 71 días). AIM eligió el lugar por el simbolismo. Y no confundas la Resolución 108 (fin de la responsabilidad federal) con la PL 280 (jurisdicción estatal): son dos piezas de la misma política de 1953.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué logró —y qué no— la ocupación de Alcatraz (1969–71)?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "No cumplió ninguna demanda concreta, pero disparó el panindianismo y 200+ ocupaciones.", correcta: true, explicacion: "Correcto: visibilidad y conciencia, no victoria legislativa inmediata (Smith & Warrior)." },
              { texto: "Obtuvo de inmediato la devolución legal y definitiva de la isla a los pueblos indígenas.", correcta: false, explicacion: "No obtuvo nada concreto: el gobierno cortó luz y agua y la ocupación terminó con arrestos." },
              { texto: "Forzó por sí sola la abolición total del poder plenario del Congreso sobre las tribus.", correcta: false, explicacion: "El poder plenario del Congreso siguió intacto." },
              { texto: "Consiguió que el Congreso aprobara en el acto la Ley de Autodeterminación.", correcta: false, explicacion: "La ISDEAA es de 1975, años después, y surge de varios factores, no solo de Alcatraz." }
            ] },
          { pregunta: "El fallo Boldt (1974) es importante porque demostró que…", etiqueta: "historiador",
            opciones: [
              { texto: "La protesta podía volverse resultado judicial concreto: 50% de la pesca por tratado.", correcta: true, explicacion: "Correcto: es el modelo de Wilkinson, protesta + tratado + tribunal." },
              { texto: "El Congreso de Estados Unidos había decidido devolver por ley todas las tierras tribales.", correcta: false, explicacion: "Boldt es un fallo judicial sobre pesca, no una ley de devolución de tierras." },
              { texto: "La terminación de 1953 había sido, en realidad, un avance territorial para las tribus.", correcta: false, explicacion: "La terminación fue un retroceso; Boldt es posterior y la contradice." },
              { texto: "La acción directa de AIM había conseguido todas sus demandas en Wounded Knee.", correcta: false, explicacion: "Wounded Knee no obtuvo sus demandas; Boldt surge de los fish-ins del NIYC." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · América Latina: indigenismo, violencia y plurinacionalidad",
        html: `
          <p>Tres trayectorias distintas, mismo marco: del indigenismo (integrar) al reconocimiento (plurinacionalidad), con un contraejemplo brutal en el medio.</p>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Caso</th><th>Trayectoria en una línea</th><th>Para qué sirve</th></tr></thead>
            <tbody>
              <tr><td>México</td><td>Indigenismo estatal (INI 1948) → crítica y crisis (1970–82) → reconocimiento pluricultural (1992) → EZLN (1994) y reforma 2001.</td><td>«Integración → reconocimiento»: el Estado hizo mucho <i>por</i> los indígenas y poco <i>con</i> ellos.</td></tr>
              <tr><td>Guatemala</td><td>Guerra civil 1960–96 → genocidio maya 1981–83 → Menchú Nobel 1992 → Acuerdos de Paz 1996 → consulta 1999 rechaza las reformas.</td><td>El contraejemplo brutal: en pleno auge de los derechos humanos, el peor retroceso del continente.</td></tr>
              <tr><td>Bolivia / Ecuador</td><td>Voto a analfabetos (Ecuador 1979, Perú 1980) → CONAIE 1986, levantamiento 1990 → reformas 1994/1998 → Evo Morales 2005/06, Estado Plurinacional 2009.</td><td>El avance más profundo en lo político (de excluidos a presidentes), el más tardío (siglo XXI).</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Bonfil Batalla: el indigenismo es «desindianización», el intento del «México imaginario» de negar la civilización del «México profundo». «Como sostiene Bonfil Batalla, el indigenismo no buscaba reconocer al indígena sino convertirlo en mestizo; por eso la creación del INI en 1948 amplió la presencia del Estado sin ampliar los derechos.»</div>

          <h3>Guatemala: el genocidio en la era de los derechos humanos</h3>
          <ul>
            <li><b>1960–96:</b> guerra civil; los mayas (más de la mitad de la población) vistos como base social de la insurgencia.</li>
            <li><b>1978:</b> Comité de Unidad Campesina (CUC), primera organización campesino-indígena nacional. <b>1980:</b> masacre de la embajada de España.</li>
            <li><b>1981–83:</b> tierra arrasada bajo Lucas García y Ríos Montt: +400 aldeas destruidas. La CEH (1999) contó ~200.000 muertos y desaparecidos, 83% mayas, 93% responsabilidad del Estado, «actos de genocidio».</li>
            <li><b>Rigoberta Menchú</b> (maya k'iche'): testimonio <i>Me llamo Rigoberta Menchú</i> (1983); Nobel de la Paz 1992. <b>2013:</b> Ríos Montt condenado por genocidio, sentencia anulada a los diez días.</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Guatemala impide cualquier lectura del período como progreso generalizado: mientras Canadá constitucionalizaba los derechos aborígenes en 1982, el Estado guatemalteco arrasaba más de cuatrocientas aldeas mayas; el Nobel de Menchú en 1992 fue el reconocimiento internacional de una catástrofe, no de un avance.»</div>

          <h3>La capa internacional</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Año</th><th>Instrumento</th><th>Qué significa</th></tr></thead>
            <tbody>
              <tr><td>1957</td><td>OIT Convenio 107</td><td>Primer tratado sobre pueblos «indígenas y tribales», orientación integracionista (como la terminación y el INI).</td></tr>
              <tr><td>1989</td><td>OIT Convenio 169</td><td>Elimina la orientación asimilacionista; derecho a mantener instituciones, lenguas, religiones; consulta previa. Canadá y EE.UU. no lo ratificaron; México fue el 1.º (1990).</td></tr>
              <tr><td>2007</td><td>UNDRIP (ONU)</td><td>144 votos a favor, 4 en contra: EE.UU., Canadá, Australia y Nueva Zelanda (por miedo a los reclamos de tierras). Adhirieron en 2010.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>1992</b> es el año-bisagra latinoamericano: V Centenario + Nobel de Menchú + reforma mexicana + Paraguay. Si solo recordás un año para América Latina, que sea ese. Para los Andes: <b>1990</b> (levantamiento ecuatoriano Inti Raymi + marcha boliviana por el Territorio).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El INI mexicano es una política <b>del Estado</b>; no lo pongas en la lista de organizaciones indígenas.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué Guatemala es el «contraejemplo» del período?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "En plena era de derechos humanos, el Estado cometió genocidio contra los mayas (1981–83).", correcta: true, explicacion: "Correcto: ~200.000 muertos, 83% mayas; impide leer el período como progreso generalizado." },
              { texto: "Fue el primer país del continente en darle a los mayas un gobierno territorial propio.", correcta: false, explicacion: "No hubo tal gobierno; hubo tierra arrasada y masacres." },
              { texto: "Ratificó antes que nadie el Convenio 169 de la OIT y reconoció del todo a los pueblos indígenas.", correcta: false, explicacion: "El primero en ratificar el 169 fue México (1990); Guatemala es el caso de la violencia extrema." },
              { texto: "Logró que la consulta popular de 1999 aprobara masivamente las reformas pro indígenas.", correcta: false, explicacion: "Al contrario: la consulta de 1999 rechazó las reformas constitucionales." }
            ] },
          { pregunta: "El Convenio 169 de la OIT (1989) se diferencia del 107 (1957) en que…", etiqueta: "concepto",
            opciones: [
              { texto: "Abandona la orientación asimilacionista y reconoce instituciones, lenguas y consulta previa.", correcta: true, explicacion: "Correcto: el 107 era integracionista; el 169 marca el cambio de concepción internacional." },
              { texto: "Fue firmado y plenamente ratificado tanto por Estados Unidos como por Canadá de forma inmediata.", correcta: false, explicacion: "Ni EE.UU. ni Canadá lo ratificaron; el primero en hacerlo fue México." },
              { texto: "Obligaba a los indígenas a abandonar sus lenguas e integrarse a la cultura nacional.", correcta: false, explicacion: "Eso describe la lógica asimilacionista del 107, no del 169." },
              { texto: "Creó directamente los Estados plurinacionales de Bolivia y de Ecuador en los años 90.", correcta: false, explicacion: "La plurinacionalidad llega después (2008–09); el 169 fue un marco, no la creó." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Reconocimiento legal vs. ejercicio efectivo",
        html: `
          <div class="caja clase"><span class="caja-et">DE CLASE</span> «La distinción entre reconocimiento legal de derechos y ejercicio efectivo de esos derechos es especialmente importante.» Esta tabla es esa distinción hecha herramienta: <b>cada fila es un párrafo potencial</b>.</div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Reconocimiento legal</th><th>Ejercicio efectivo</th><th>Juicio</th></tr></thead>
            <tbody>
              <tr><td>Voto y ciudadanía</td><td>EE.UU. 1924; Canadá 1960; Bolivia 1952; Ecuador 1979; Perú 1980.</td><td>Estados de EE.UU. bloquean el voto hasta 1948–62 (Arizona/N. México 1948, Utah 1962); en Guatemala el voto maya coexiste con el genocidio.</td><td>Considerable</td></tr>
              <tr><td>Estatus jurídico colectivo</td><td>Sección 35 (1982); art. 4 México (1992); Bolivia 2009; ISDEAA 1975.</td><td>La Ley India sigue vigente; conferencias 1983–87 no definen el autogobierno; San Andrés diluido en 2001; «poder plenario» del Congreso de EE.UU.</td><td>Considerable (ley) / parcial (práctica)</td></tr>
              <tr><td>Tierra y recursos</td><td>Calder 1973; Boldt 1974; ANCSA 1971; 22 tratados modernos; Nunavut.</td><td>La Comisión de Reclamos paga pero no devuelve; Black Hills sin devolver; C. Británica casi sin tratados; conflicto mapuche; TIPNIS.</td><td>Parcial</td></tr>
              <tr><td>Cultura, lengua, religión</td><td>Fin del potlatch (1951); AIRFA 1978; NAGPRA 1990; educación bilingüe en los 90.</td><td>Escuelas residenciales hasta 1996; AIRFA sin mecanismo de aplicación; castellanización forzada del INI.</td><td>Parcial</td></tr>
              <tr><td>Protección frente a la violencia estatal</td><td>ICRA 1968; derechos humanos internacionales; Acuerdos de Paz 1996.</td><td>Pine Ridge 1973–76; Oka; 200.000 muertos en Guatemala (83% mayas); condena a Ríos Montt anulada.</td><td>Limitado</td></tr>
              <tr><td>Condiciones socioeconómicas</td><td>Leyes de salud (1976), autodeterminación educativa, programas del INI, casinos (1988).</td><td>Esperanza de vida, desempleo, cárcel, suicidio y agua potable siguen muy por debajo del promedio en los tres países.</td><td>Limitado</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Leé la columna «Juicio» de arriba hacia abajo: verde → amarillo → rojo. Esa es la tesis de la pregunta «considerablemente» en una imagen: cuanto más cerca de la ley, más avance; cuanto más cerca de la vida, menos. Memorizá la gradación, no las frases.</div>

          <h3>Comparación rápida Canadá / EE.UU. / A. Latina</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Criterio</th><th>Canadá</th><th>EE.UU.</th><th>A. Latina</th></tr></thead>
            <tbody>
              <tr><td>Jerarquía del reconocimiento</td><td>Constitucional (Sección 35).</td><td>Legislativa; nunca constitucional.</td><td>Constitucional pero tardío (1991–2009).</td></tr>
              <tr><td>Retroceso en el período</td><td>Libro Blanco (propuesto y retirado).</td><td>Terminación (aplicada, 109 tribus).</td><td>Genocidio guatemalteco; indigenismo asimilador.</td></tr>
              <tr><td>Método indígena</td><td>Organización de jefes + acción directa puntual (Kenora, Express, Oka).</td><td>Cabildeo (NCAI) + acción directa radical (AIM).</td><td>Movimientos de masas y partidos (CONAIE, MAS); guerrilla (EZLN).</td></tr>
              <tr><td>Gobierno propio logrado</td><td>Nunavut (territorio), Nisga'a.</td><td>Autogestión de programas; soberanía limitada.</td><td>Presidencia (Bolivia), Estado plurinacional.</td></tr>
              <tr><td>Violencia</td><td>Baja (Oka: 1 muerto).</td><td>Media (Wounded Knee: 2; Pine Ridge 60+).</td><td>Extrema (Guatemala: 200.000).</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El reforzamiento fue considerable si se mide por la jerarquía de las normas; fue parcial si se mide por el control efectivo de tierras y gobiernos; y fue limitado si se mide por la vida cotidiana. Un juicio honesto debe sostener las tres medidas a la vez.»</div>
        `,
        miniQuiz: [
          { pregunta: "La distinción central para juzgar el período es entre…", etiqueta: "concepto",
            opciones: [
              { texto: "El reconocimiento legal de los derechos y su ejercicio efectivo en la práctica.", correcta: true, explicacion: "Correcto: «reforzados en la ley, no en la vida»; cada fila de la tabla es un párrafo." },
              { texto: "Los derechos individuales de los indígenas urbanos y los de los que vivían en reservas rurales.", correcta: false, explicacion: "No es esa la distinción maestra del tema." },
              { texto: "Los derechos civiles del siglo XIX y los derechos civiles de después de 1945 en cada país.", correcta: false, explicacion: "El eje no es temporal sino entre ley reconocida y ejercicio real." },
              { texto: "Los derechos reconocidos por la ONU y los reconocidos por los Estados nacionales.", correcta: false, explicacion: "La brecha clave es ley vs. práctica, no ONU vs. Estado." }
            ] },
          { pregunta: "Según la tabla, ¿en qué dimensión el avance fue solo «limitado»?", etiqueta: "concepto",
            opciones: [
              { texto: "En las condiciones socioeconómicas y en la protección frente a la violencia estatal.", correcta: true, explicacion: "Correcto: salud, empleo, cárcel, suicidio y la violencia (Pine Ridge, Oka, Guatemala) son la 3.ª R." },
              { texto: "En el voto, la ciudadanía y el estatus jurídico colectivo de los pueblos indígenas.", correcta: false, explicacion: "En esas dimensiones el juicio es «considerable», no limitado." },
              { texto: "En la jerarquía constitucional del reconocimiento en Canadá y América Latina.", correcta: false, explicacion: "Ahí el avance fue considerable (la 1.ª R)." },
              { texto: "En absolutamente todas las dimensiones por igual, sin ninguna diferencia entre ellas.", correcta: false, explicacion: "Justamente el punto es que el avance fue asimétrico, no parejo." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Personalidades y agrupaciones",
        html: `
          <h3>Personalidades</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Arthur Watkins</td><td>Senador por Utah: arquitecto de la terminación; la comparó con la emancipación de los esclavos. La «igualdad» como arma.</td></tr>
            <tr><td>Clyde Warrior</td><td>Ponca, NIYC: acuña «Red Power» y la crítica al «tío Tomahawk» (indígena sumiso). Puente entre NCAI y AIM.</td></tr>
            <tr><td>Billy Frank Jr.</td><td>Nisqually: +50 arrestos en los fish-ins; su lucha termina en el fallo Boldt. Modelo de protesta local + tribunal.</td></tr>
            <tr><td>Richard Oakes / LaNada Means</td><td>Líderes iniciales de Alcatraz; Oakes abandona tras la muerte de su hija (1970), asesinado en 1972.</td></tr>
            <tr><td>Banks / Bellecourt / Mitchell</td><td>Fundadores de AIM (Minneapolis 1968). Banks lidera Tratados Rotos y Wounded Knee.</td></tr>
            <tr><td>Russell Means</td><td>Oglala lakota, AIM: rostro público de Wounded Knee; procesado en 1974 (causa anulada).</td></tr>
            <tr><td>Dick Wilson</td><td>Presidente tribal de Pine Ridge (IRA), acusado de corrupción y violencia (GOONs). El enemigo también podía ser indígena.</td></tr>
            <tr><td>Richard Nixon</td><td>Presidente 1969–74: mensaje de 1970, Blue Lake, ANCSA. El más favorable a la autodeterminación (mientras el FBI perseguía a AIM).</td></tr>
            <tr><td>George Boldt</td><td>Juez federal: fallo de 1974 sobre el 50% de la pesca. Los tratados valen.</td></tr>
            <tr><td>Ada Deer</td><td>Menominee: campaña DRUMS → restauración de 1973. Primera mujer al frente de la BIA (1993).</td></tr>
            <tr><td>Vine Deloria Jr.</td><td>Lakota, intelectual, director del NCAI 1964–67. <i>Custer Died for Your Sins</i> (1969): el problema es la soberanía, no los derechos civiles.</td></tr>
            <tr><td>Trudeau / Chrétien</td><td>Libro Blanco 1969; después Trudeau acepta la Sección 35 (1982). El mismo gobierno produce el retroceso y el avance.</td></tr>
            <tr><td>Harold Cardinal</td><td>Cree, Indian Association of Alberta: <i>The Unjust Society</i> (1969) y el Libro Rojo (1970): «ciudadanos plus».</td></tr>
            <tr><td>Frank Calder</td><td>Nisga'a: primer indígena en una legislatura (1949); el caso Calder (1973) reconoce el título aborigen.</td></tr>
            <tr><td>George Manuel</td><td>Shuswap, UBCIC/NIB: organiza la Constitution Express (1980).</td></tr>
            <tr><td>Cárdenas / Alfonso Caso</td><td>México: Cárdenas (Pátzcuaro 1940); Caso, primer director del INI (1948–70). El indigenismo como proyecto de antropólogos.</td></tr>
            <tr><td>Rigoberta Menchú</td><td>Guatemala, maya k'iche': Nobel 1992, símbolo continental. Su testimonio fue cuestionado en 1999 (David Stoll): útil para una nota sobre fuentes.</td></tr>
            <tr><td>Efraín Ríos Montt</td><td>Guatemala, dictador 1982–83: tierra arrasada; condenado por genocidio en 2013 (anulado).</td></tr>
            <tr><td>Evo Morales</td><td>Bolivia, aymara: primer presidente indígena (2006); Estado Plurinacional (2009). El techo político del período.</td></tr>
          </tbody></table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El libro de Oxford atribuye la Constitution Express a «Arthur Manuel, presidente de la UBCIC». El presidente y organizador fue <b>George Manuel</b>; Arthur es su hijo, que la describió años después. Si citás, poné «George Manuel (UBCIC)».</div>

          <h3>Agrupaciones</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>NCAI (1944)</td><td>Congreso Nacional de Indios Americanos: gobiernos tribales de reserva. Cabildeo, litigio, testimonios. Frena la terminación; límite: poca llegada a los urbanos.</td></tr>
            <tr><td>NIYC (1961)</td><td>Consejo Nacional de la Juventud India: universitarios, fish-ins, «Red Power». Camino al fallo Boldt (1974).</td></tr>
            <tr><td>Indios de Todas las Tribus (1969)</td><td>Estudiantes de California: ocupación de Alcatraz (19 meses). Panindianismo; ninguna demanda cumplida.</td></tr>
            <tr><td>AIM (1968)</td><td>Movimiento Indio Americano: urbanos pobres (Minneapolis). Patrullas, ocupaciones, confrontación armada (Rushmore, Tratados Rotos, Wounded Knee). Visibilidad máxima; colapso tras 1973.</td></tr>
            <tr><td>OSCRO (1973)</td><td>Org. de Derechos Civiles Oglala Sioux (Pine Ridge): pide ayuda a AIM contra Wilson. Wounded Knee nació de un conflicto interno.</td></tr>
            <tr><td>NIB → AFN (1968 / 1982)</td><td>National Indian Brotherhood → Asamblea de las Primeras Naciones: jefes de bandas, negociación federal-provincial. Interlocutor formal; Sección 35.</td></tr>
            <tr><td>Indian Association of Alberta</td><td>Libro Rojo (1970): derrota del Libro Blanco.</td></tr>
            <tr><td>UBCIC</td><td>Unión de Jefes de Columbia Británica: Constitution Express → Sección 35.</td></tr>
            <tr><td>Inuit Tapirisat (1971)</td><td>Negociación de 20 años → Nunavut (1999).</td></tr>
            <tr><td>Idle No More (2012)</td><td>Base, redes sociales, flash mobs, huelga de hambre (Theresa Spence). Debate nacional; sin cambios legales.</td></tr>
            <tr><td>INI (1948, México)</td><td>Instituto Nacional Indigenista: es el <b>Estado</b> «integrando», no una organización indígena.</td></tr>
            <tr><td>CUC (1978, Guatemala)</td><td>Comité de Unidad Campesina: huelgas, organización campesina. Reprimido en el genocidio.</td></tr>
            <tr><td>CONAIE (1986, Ecuador)</td><td>Levantamientos, bloqueos → plurinacionalidad 2008.</td></tr>
            <tr><td>EZLN (1994, Chiapas)</td><td>Alzamiento armado → negociación. San Andrés 1996; reforma 2001 insuficiente.</td></tr>
          </tbody></table></div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál era la diferencia de método entre NCAI, NIYC y AIM?", etiqueta: "concepto",
            opciones: [
              { texto: "NCAI cabildeo; NIYC fish-ins y «Red Power»; AIM confrontación y ocupaciones.", correcta: true, explicacion: "Correcto: tres generaciones, tres métodos." },
              { texto: "Las tres eran organizaciones estatales creadas por el gobierno federal de los Estados Unidos.", correcta: false, explicacion: "Eran organizaciones indígenas, no estatales (el INI mexicano sí es estatal)." },
              { texto: "NCAI usaba la lucha armada; NIYC el litigio; AIM únicamente el cabildeo pacífico.", correcta: false, explicacion: "Está invertido: AIM fue la confrontación, NCAI el cabildeo." },
              { texto: "Las tres rechazaban cualquier forma de acción directa o de protesta pública.", correcta: false, explicacion: "NIYC inventó los fish-ins y AIM las ocupaciones: acción directa pura." }
            ] },
          { pregunta: "Sobre la Constitution Express, la trampa a evitar es…", etiqueta: "trampa",
            opciones: [
              { texto: "La organizó George Manuel (UBCIC), no su hijo Arthur, que la describió después.", correcta: true, explicacion: "Correcto: el libro de Oxford confunde a padre e hijo; citá «George Manuel (UBCIC)»." },
              { texto: "Fue una ocupación armada de la sede del gobierno federal en la ciudad de Ottawa.", correcta: false, explicacion: "No fue una ocupación armada: fueron dos trenes y delegaciones, sin violencia." },
              { texto: "No tuvo ninguna relación con la Sección 35 de la Constitución canadiense de 1982.", correcta: false, explicacion: "Fue precisamente lo que logró la inclusión de la Sección 35." },
              { texto: "La organizó el gobierno de Trudeau para repatriar la Constitución sin los indígenas.", correcta: false, explicacion: "La organizaron los indígenas contra un borrador que los omitía." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Los historiadores y cómo combinarlos",
        html: `
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No inventes citas textuales. Citá en estilo indirecto: «Como sostiene Wilkinson…», «Smith y Warrior argumentan que…». El examinador premia que uses la interpretación para construir tu argumento, no la comilla.</div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Pregunta</th><th>Wilkinson</th><th>Smith & Warrior</th><th>Cómo los combinás</th></tr></thead>
            <tbody>
              <tr><td>¿Cuánto cambió?</td><td>Mucho: renacimiento de la soberanía.</td><td>Mucho en identidad, poco en política concreta.</td><td>Cambió mucho la ley y la conciencia; menos la vida.</td></tr>
              <tr><td>¿Quién lo produjo?</td><td>Líderes tribales, abogados, tribunales, Congreso.</td><td>Activistas urbanos y la acción directa (y luego se agotaron).</td><td>La acción directa abrió la puerta; los litigantes y el Congreso la cruzaron. Responsabilidad compartida.</td></tr>
              <tr><td>¿Qué método rindió?</td><td>Protesta local + tratado + tribunal (Boldt).</td><td>La ocupación generó atención, no leyes.</td><td>Complementarios: sin fish-ins no hay Boldt; sin Boldt los fish-ins son solo noticia.</td></tr>
              <tr><td>¿Y la pobreza?</td><td>Fuera de foco.</td><td>Fuera de foco.</td><td>Ninguno la mide: por eso necesitás tu 3.ª R con datos propios.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Wilkinson</b> (<i>Blood Struggle</i>, 2005): «renacimiento de la soberanía», una revolución silenciosa de abogados y tribunales. Usalo en el párrafo de avances/tribunales y en «¿quién fue responsable?» (lado Estado/instituciones).</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Smith & Warrior</b> (<i>Like a Hurricane</i>, 1996): el ciclo Alcatraz–Wounded Knee como un «huracán» que transformó la identidad pero no produjo leyes. Usalo en el párrafo de movimientos y en el matiz «visibilidad ≠ resultado».</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> <b>Cameos:</b> <b>Miller</b> (<i>Skyscrapers Hide the Heavens</i>, 1989) para Canadá: el Libro Blanco como catalizador de la organización indígena moderna. <b>Bonfil Batalla</b> (<i>México profundo</i>, 1987) para América Latina: el indigenismo como «desindianización».</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Mientras Wilkinson lee el período como un renacimiento de la soberanía producido por abogados y tribunales, Smith y Warrior advierten que el movimiento más visible —el huracán de Alcatraz a Wounded Knee— cambió la identidad indígena pero no dejó leyes; juntos muestran que la acción directa fijó la agenda y las instituciones produjeron los resultados.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Un historiador por párrafo, máximo dos por ensayo en los párrafos clave. Esquema: Wilkinson en el de avances/tribunales, Smith & Warrior en el de movimientos, Miller si entra Canadá, Bonfil si entra América Latina. <b>Nunca los cuatro en el mismo párrafo.</b></div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se complementan Wilkinson y Smith & Warrior?", etiqueta: "historiador",
            opciones: [
              { texto: "Wilkinson ve el renacimiento legal de la soberanía; Smith & Warrior, el impacto cultural del activismo.", correcta: true, explicacion: "Correcto: la acción directa fijó la agenda, los tribunales y el Congreso la convirtieron en ley." },
              { texto: "Los dos sostienen exactamente lo mismo: que AIM consiguió todas y cada una de sus demandas concretas en 1973.", correcta: false, explicacion: "No: Smith & Warrior dicen que las demandas concretas no se cumplieron." },
              { texto: "Wilkinson estudia solo Canadá y Smith & Warrior estudian solo América Latina y Guatemala.", correcta: false, explicacion: "Ambos miran EE.UU.; Canadá es Miller y A. Latina es Bonfil." },
              { texto: "Ambos coinciden en que la pobreza indígena fue el eje central y mejor medido de su análisis.", correcta: false, explicacion: "Ninguno mide bien la pobreza: por eso hace falta tu 3.ª R con datos propios." }
            ] },
          { pregunta: "¿Para qué sirve Bonfil Batalla en un ensayo?", etiqueta: "historiador",
            opciones: [
              { texto: "Para argumentar que en A. Latina el Estado intervino más (INI) pero reconoció menos.", correcta: true, explicacion: "Correcto: el indigenismo como «desindianización», integrar sin reconocer." },
              { texto: "Para demostrar que la Sección 35 canadiense fue fruto directo de la acción de AIM.", correcta: false, explicacion: "Bonfil es sobre México; la Sección 35 la trabaja Miller en Canadá." },
              { texto: "Para probar que el indigenismo mexicano amplió plenamente los derechos de los indígenas.", correcta: false, explicacion: "Sostiene lo contrario: amplió el Estado sin ampliar derechos." },
              { texto: "Para medir con datos la pobreza y el desempleo en las reservas de Estados Unidos.", correcta: false, explicacion: "Eso es EE.UU. y datos propios; Bonfil es un cameo sobre el indigenismo latinoamericano." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Transversal: trucos, trampas y frases listas",
        html: `
          <h3>Trucos de memoria</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Truco</th><th>Qué recuerda</th></tr></thead>
            <tbody>
              <tr><td>D-I-T-A</td><td>Dawes 1887 → IRA 1934 → Terminación 1953 → Autodeterminación 1975: el péndulo de EE.UU.</td></tr>
              <tr><td>V-L-C-N</td><td>Voto 1960 → Libro Blanco 1969 → Constitución 1982 → Nunavut 1999: la escalera de Canadá.</td></tr>
              <tr><td>A-R-T-W</td><td>Alcatraz 69 → Rushmore 71 → Tratados Rotos 72 → Wounded Knee 73: la secuencia militante.</td></tr>
              <tr><td>Triple 68</td><td>1968: ICRA + AIM + NIB. Tres nacimientos, dos países.</td></tr>
              <tr><td>1973, el año en que la ley cede</td><td>Calder (ene) + Wounded Knee (feb–may) + James Bay (nov) + Menominee restaurada (dic).</td></tr>
              <tr><td>1992, el año-bisagra latino</td><td>V Centenario + Nobel Menchú + art. 4 México + Paraguay.</td></tr>
              <tr><td>3 R</td><td>Reconocimiento → Recursos → Realidad: considerable → parcial → limitado.</td></tr>
              <tr><td>G-U-D-O-I</td><td>Guerra, Urbanización, Derechos humanos, Organización, Instituciones: los factores.</td></tr>
              <tr><td>P-M-T-L</td><td>Para «compare y contraste»: Políticas, Movimientos, Tierra, Límites. Semejanza en P y M, contraste en T, semejanza en L.</td></tr>
            </tbody>
          </table></div>

          <h3>Trampas que cuestan puntos</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Ciudadanía de EE.UU. es <b>1924</b>, no 1960. 1960 es el voto federal canadiense.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> La Sección 35 está en la Ley Constitucional de 1982 pero <b>fuera</b> de la Carta de Derechos: fue deliberado, para que los derechos colectivos no quedaran sujetos a la cláusula de igualdad individual.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Nunavut es un <b>territorio</b>, no una provincia; y es gobierno público (vota todo residente), aunque de hecho inuit por mayoría.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Calder (1973) es canadiense y sobre título; Boldt (1974) es estadounidense y sobre pesca. No los mezcles.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> La Comisión de Reclamos Indios (1946) no devolvió tierras, solo pagó dinero. No la uses como avance territorial.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Derechos civiles» en este tema incluye soberanía y tierra. Si escribís solo sobre voto y discriminación, dejás afuera la mitad del tema.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Si la pregunta dice «un país», elegí uno y no te vayas. Podés mencionar otro como contraste de una línea, no como segundo caso.</div>

          <h3>Frases listas (copiar casi textual)</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Intro–contexto:</b> «Hasta 1945 los pueblos indígenas de las Américas compartían una condición de tutela: la Ley India de 1876, la Ley Dawes de 1887 y el indigenismo mexicano de 1940 partían de la misma premisa, que el indígena debía dejar de serlo para ser ciudadano.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Cuerpo–movimientos:</b> «Alcatraz no obtuvo ninguna de sus demandas y, sin embargo, cambió la política: siete meses después de la ocupación Nixon repudió la terminación. La acción directa no legisló, pero fijó la agenda.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Cuerpo–igualdad formal:</b> «El Libro Blanco mostró que la igualdad formal podía ser la forma más eficaz de abolir derechos colectivos: por eso las Primeras Naciones respondieron reclamando ser ciudadanos plus.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Conclusión–causas:</b> «Ni la presión organizada ni la iniciativa estatal explican por sí solas los avances: los movimientos crearon el problema político y las instituciones produjeron las soluciones legales; donde faltó uno de los dos, como en Guatemala, no hubo avance sino masacre.»</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Estructura obligatoria de cada evidencia: <b>qué ocurrió → por qué → qué demuestra → para qué argumento sirve</b>. Contar la historia no es evaluarla: cada evidencia termina con «esto demuestra que…» y un juicio (considerable / parcial / limitado).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál de estas afirmaciones es correcta (evita la trampa)?", etiqueta: "trampa",
            opciones: [
              { texto: "La ciudadanía de EE.UU. es de 1924 y el voto federal canadiense de 1960.", correcta: true, explicacion: "Correcto: son dos fechas distintas en dos países distintos; no las mezcles." },
              { texto: "La Comisión de Reclamos Indios de 1946 devolvió grandes extensiones de tierra a las tribus.", correcta: false, explicacion: "Solo pagó dinero (+800 M), nunca devolvió un acre." },
              { texto: "Nunavut es una nueva provincia canadiense de gobierno exclusivamente inuit por ley.", correcta: false, explicacion: "Es un territorio, no una provincia, y es gobierno público (vota todo residente)." },
              { texto: "Los fallos Calder y Boldt son el mismo caso canadiense sobre los derechos de pesca.", correcta: false, explicacion: "Calder es canadiense y sobre título; Boldt es de EE.UU. y sobre pesca." }
            ] },
          { pregunta: "La fórmula «P-M-T-L» para «compare y contraste» indica…", etiqueta: "concepto",
            opciones: [
              { texto: "Semejanza en Políticas y Movimientos, contraste en Tierra, semejanza en Límites.", correcta: true, explicacion: "Correcto: cuatro criterios, con los dos países en cada párrafo." },
              { texto: "Que hay que escribir primero todo un país y después, por separado, todo el otro país.", correcta: false, explicacion: "Es justo lo que hay que evitar: cada párrafo lleva a los dos países." },
              { texto: "Pobreza, Migración, Trabajo y Lengua como únicos cuatro ejes de la comparación.", correcta: false, explicacion: "No son esos; P-M-T-L es Políticas, Movimientos, Tierra, Límites." },
              { texto: "Que solo se comparan países latinoamericanos entre sí, nunca Canadá con EE.UU.", correcta: false, explicacion: "La fórmula sirve para cualquier par, sobre todo Canadá–EE.UU." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "¿Qué pedían los indígenas con «derechos civiles»?", dorso: "No igualdad individual (como los afroamericanos), sino soberanía, tierras y derechos colectivos como pueblos distintos." },
    { id: "fc02", categoria: "concepto", frente: "Las 3 R del juicio", dorso: "Reconocimiento (ley) = considerable; Recursos (tierra/gobierno) = parcial; Realidad (vida socioeconómica) = limitado." },
    { id: "fc03", categoria: "concepto", frente: "Ley India (1876, Canadá)", dorso: "Estado tutor: define quién es «indio de estatus», administra la tierra y exige renunciar al estatus para votar («enfranchisement»)." },
    { id: "fc04", categoria: "concepto", frente: "Terminación (1953, EE.UU.)", dorso: "Resolución 108 + PL 280: fin de la responsabilidad federal y jurisdicción estatal sin consulta. 109 tribus terminadas, ~1,3 M acres." },
    { id: "fc05", categoria: "concepto", frente: "Autodeterminación (1975, EE.UU.)", dorso: "ISDEAA: las tribus administran los programas federales que antes manejaba la BIA. Reversión formal de la terminación." },
    { id: "fc06", categoria: "concepto", frente: "Indigenismo", dorso: "Política continental de los Estados (Pátzcuaro 1940, INI 1948) para «integrar» al indígena asimilándolo. Bonfil: «desindianización»." },
    { id: "fc07", categoria: "concepto", frente: "Red Power / panindianismo", dorso: "Red Power = acción directa indígena (NIYC la acuña). Panindianismo = identidad común de todas las tribus, creada por la urbanización." },
    { id: "fc08", categoria: "concepto", frente: "Libro Blanco vs. Libro Rojo (Canadá)", dorso: "Libro Blanco (1969): igualdad borrando la diferencia. Libro Rojo (1970, Cardinal): igualdad MÁS la diferencia («ciudadanos plus»)." },
    { id: "fc09", categoria: "fecha", frente: "1960 (Canadá)", dorso: "Voto federal a los indios de estatus sin renunciar al estatus (fin del enfranchisement como condición)." },
    { id: "fc10", categoria: "fecha", frente: "1973 · caso Calder", dorso: "La Corte Suprema canadiense reconoce que el título aborigen existe → política de reclamos integrales." },
    { id: "fc11", categoria: "fecha", frente: "1982 · Sección 35", dorso: "Ley Constitucional canadiense: reconoce los derechos aborígenes y de tratados, fuera de la Carta de Derechos. Fruto de la Constitution Express." },
    { id: "fc12", categoria: "fecha", frente: "1999 · Nunavut", dorso: "Territorio (no provincia): 20% del territorio canadiense, 85% inuit, gobierno territorial propio. Negociación de 20 años." },
    { id: "fc13", categoria: "fecha", frente: "1944 · NCAI", dorso: "Congreso Nacional de Indios Americanos (Denver): cabildeo y litigio; frena la terminación." },
    { id: "fc14", categoria: "fecha", frente: "1969–71 · Alcatraz", dorso: "Indios de Todas las Tribus (Oakes, Means), 19 meses. Ninguna demanda cumplida; panindianismo y 200+ ocupaciones." },
    { id: "fc15", categoria: "fecha", frente: "8 jul 1970 · Nixon", dorso: "Mensaje al Congreso: «autodeterminación sin terminación». Dic: Blue Lake a Taos. 1971: ANCSA (44 M acres)." },
    { id: "fc16", categoria: "fecha", frente: "1973 · Wounded Knee", dorso: "AIM ocupa 71 días (OSCRO vs. Dick Wilson/GOONs). Dos muertos. Último gran acto militante de AIM." },
    { id: "fc17", categoria: "fecha", frente: "1974 · fallo Boldt", dorso: "50% de la pesca de Washington por tratado (Medicine Creek 1854), tras diez años de fish-ins. Protesta + tratado + tribunal." },
    { id: "fc18", categoria: "fecha", frente: "1992 · año-bisagra latino", dorso: "V Centenario + Nobel de Menchú + art. 4 México (nación pluricultural) + Paraguay." },
    { id: "fc19", categoria: "fecha", frente: "1994 · EZLN", dorso: "Alzamiento en Chiapas el día del TLCAN. La reforma de 1992 no evitó una rebelión armada: la brecha ley/vida." },
    { id: "fc20", categoria: "fecha", frente: "2009 · Bolivia plurinacional", dorso: "Evo Morales (primer presidente aymara, 2006) lleva a la Constitución de 2009 el Estado Plurinacional. Ecuador: 2008." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "¿Por qué 1945 es bisagra?", dorso: "Cinco cambios (G-U-D-O-I): servicio en la guerra, derechos humanos, Guerra Fría, urbanización y modelo del movimiento afroamericano." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "¿Fue el período un progreso continuo?", dorso: "No: fue un péndulo. La terminación (1953) y la autodeterminación (1975) caben en el mismo cuarto de siglo; el genocidio coincide con los derechos humanos." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "¿Quién fue responsable de los avances?", dorso: "Las organizaciones = condición necesaria (agenda), no suficiente; los resultados pasaron por tribunales, presidentes y la OIT. Guatemala = prueba negativa." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "¿Qué muestra Oka (1990)?", dorso: "Ocho años después de la Sección 35, el Estado envió al ejército por un campo de golf: la Constitución reconocía derechos que no honraba." },
    { id: "fc25", categoria: "causa-consecuencia", frente: "¿Qué muestra Guatemala?", dorso: "El contraejemplo: ~200.000 muertos (83% mayas, 93% del Estado) en plena era de derechos humanos. Impide leer el período como progreso generalizado." },
    { id: "fc26", categoria: "historiador", frente: "Wilkinson (postura)", dorso: "«Renacimiento de la soberanía»: revolución silenciosa de líderes tribales, abogados y tribunales. Mide soberanía, no pobreza." },
    { id: "fc27", categoria: "historiador", frente: "Smith & Warrior (postura)", dorso: "El activismo 1969–73 fue un «huracán»: transformó la identidad pero no produjo leyes. Wounded Knee fue el final, no la cima." },
    { id: "fc28", categoria: "historiador", frente: "Miller (cameo)", dorso: "Canadá: el Libro Blanco (1969) fue el catalizador que unificó a las Primeras Naciones; pero no cerró la brecha de bienestar." },
    { id: "fc29", categoria: "historiador", frente: "Bonfil Batalla (cameo)", dorso: "El indigenismo es «desindianización»: el «México imaginario» niega al «México profundo». El INI amplió el Estado sin ampliar derechos." },
    { id: "fc30", categoria: "concepto", frente: "Reconocimiento legal vs. ejercicio efectivo", dorso: "La distancia decisiva del tema: los Estados escribieron los derechos en las constituciones antes de aprender a cumplirlos." },
    { id: "fc31", categoria: "concepto", frente: "Convenio 107 vs. 169 de la OIT", dorso: "107 (1957): asimilacionista. 169 (1989): abandona el asimilacionismo, consulta previa. México lo ratificó 1.º (1990)." },
    { id: "fc32", categoria: "concepto", frente: "UNDRIP (2007)", dorso: "Declaración de la ONU: 144 a favor, 4 en contra (EE.UU., Canadá, Australia, N. Zelanda), por miedo a los reclamos de tierras. Adhirieron en 2010." },
    { id: "fc33", categoria: "concepto", frente: "«Poder plenario» del Congreso (EE.UU.)", dorso: "En EE.UU. el reconocimiento fue legislativo, nunca constitucional: el Congreso puede revocar por ley lo que concedió por ley." },
    { id: "fc34", categoria: "fecha", frente: "Triple 68", dorso: "1968: ICRA (EE.UU.) + nace AIM (EE.UU.) + National Indian Brotherhood (Canadá). Tres nacimientos, dos países." },
    { id: "fc35", categoria: "concepto", frente: "D-I-T-A y V-L-C-N", dorso: "D-I-T-A: Dawes→IRA→Terminación→Autodeterminación (péndulo EE.UU.). V-L-C-N: Voto→Libro Blanco→Constitución→Nunavut (escalera Canadá)." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Qué distingue la demanda indígena de la demanda afroamericana de derechos civiles?", etiqueta: "concepto",
      opciones: [
        { texto: "Los indígenas pedían soberanía, tierra y derechos colectivos, no solo igualdad individual.", correcta: true, explicacion: "Correcto: por eso una ley «igualitaria» (Libro Blanco, terminación) podía ser un retroceso." },
        { texto: "Los indígenas pedían exclusivamente el derecho al voto y a no sufrir ninguna discriminación.", correcta: false, explicacion: "Eso deja afuera la mitad del tema: soberanía y tierra." },
        { texto: "Los indígenas rechazaban por completo cualquier forma de ciudadanía dentro del Estado nacional.", correcta: false, explicacion: "No la rechazaban; pedían ciudadanía MÁS derechos colectivos («ciudadanos plus»)." },
        { texto: "Los indígenas pedían únicamente una compensación económica por las tierras perdidas.", correcta: false, explicacion: "El dinero (Comisión de Reclamos) fue justamente el límite, no la demanda central." }
      ] },
    { pregunta: "La terminación de 1953 en EE.UU. consistió en…", etiqueta: "fecha",
      opciones: [
        { texto: "Acabar con la responsabilidad federal hacia las tribus y dar jurisdicción estatal sin consulta.", correcta: true, explicacion: "Correcto: Resolución 108 + PL 280; 109 tribus terminadas, ~1,3 M acres perdidos." },
        { texto: "Reconocer de forma plena y constitucional la soberanía territorial de todas las tribus del país.", correcta: false, explicacion: "Fue lo opuesto: un retroceso que amenazó la existencia misma de las tribus." },
        { texto: "Devolver a las tribus las tierras que la Ley Dawes les había quitado en el siglo XIX.", correcta: false, explicacion: "No devolvió tierras; la terminación hizo perder tierra y estatus." },
        { texto: "Permitir que las tribus administraran por sí mismas los programas de salud y educación.", correcta: false, explicacion: "Eso es la autodeterminación de 1975, que revirtió la terminación." }
      ] },
    { pregunta: "¿Por qué la Sección 35 (1982) se puso fuera de la Carta de Derechos canadiense?", etiqueta: "concepto",
      opciones: [
        { texto: "Para que los derechos colectivos no quedaran sujetos a la cláusula de igualdad individual.", correcta: true, explicacion: "Correcto: fue deliberado; así el reconocimiento colectivo tiene jerarquía constitucional propia." },
        { texto: "Porque el gobierno de Trudeau se oponía por completo a todo reconocimiento aborigen.", correcta: false, explicacion: "Trudeau terminó aceptando la Sección 35; el matiz es dónde ubicarla." },
        { texto: "Porque los derechos aborígenes eran considerados inferiores a los derechos individuales.", correcta: false, explicacion: "Al revés: se los protegió de quedar subordinados a la igualdad individual." },
        { texto: "Porque de ese modo podían ser modificados por el Congreso mediante una ley ordinaria cualquiera.", correcta: false, explicacion: "Lo contrario: al ser constitucional, solo cambia por reforma constitucional." }
      ] },
    { pregunta: "Las tres generaciones del activismo en EE.UU. (NCAI, NIYC, AIM) se distinguen por…", etiqueta: "concepto",
      opciones: [
        { texto: "El método: cabildeo (NCAI), fish-ins / Red Power (NIYC) y confrontación (AIM).", correcta: true, explicacion: "Correcto: tres generaciones, tres métodos distintos." },
        { texto: "El país: NCAI en Canadá, NIYC en México y AIM en los Estados Unidos continentales.", correcta: false, explicacion: "Las tres son de EE.UU.; la NIB es la canadiense." },
        { texto: "La ideología: NCAI comunista, NIYC liberal y AIM conservadora nacionalista cristiana.", correcta: false, explicacion: "No se distinguen por ideología sino por método." },
        { texto: "El hecho de que ninguna de ellas recurrió jamás a ninguna forma de acción directa.", correcta: false, explicacion: "NIYC inventó los fish-ins y AIM las ocupaciones." }
      ] },
    { pregunta: "El fallo Boldt (1974) demostró que…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "La protesta rendía cuando encontraba un tratado y un juez: 50% de la pesca.", correcta: true, explicacion: "Correcto: diez años de fish-ins + Medicine Creek (1854) + juez federal." },
        { texto: "El Congreso había decidido revocar por ley todos los tratados del siglo XIX.", correcta: false, explicacion: "Boldt reafirmó los tratados; no fue una revocación." },
        { texto: "La acción directa de AIM había logrado por sí sola todas sus demandas políticas.", correcta: false, explicacion: "AIM no consiguió sus demandas; Boldt surge de los fish-ins del NIYC." },
        { texto: "La Comisión de Reclamos Indios había devuelto tierras a las tribus del noroeste.", correcta: false, explicacion: "Esa comisión solo pagó dinero; Boldt es sobre pesca." }
      ] },
    { pregunta: "Para Wilkinson, el período posterior a 1953 fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Un «renacimiento de la soberanía» producido por líderes tribales, abogados y tribunales.", correcta: true, explicacion: "Correcto: una revolución silenciosa; mide soberanía, no pobreza." },
        { texto: "Un fracaso rotundo en el que las tribus perdieron de forma definitiva todos sus derechos legales.", correcta: false, explicacion: "Wilkinson es optimista: ve un renacimiento, no un fracaso." },
        { texto: "Un cambio producido única y exclusivamente por la acción directa militante de AIM.", correcta: false, explicacion: "Para él AIM creó conciencia, pero los resultados salieron de juzgados y legislaturas." },
        { texto: "Una mejora medible sobre todo en la reducción de la pobreza en las reservas indígenas.", correcta: false, explicacion: "Justamente la pobreza queda fuera de su foco; por eso hay que contrastarlo con la 3.ª R." }
      ] },
    { pregunta: "Según Smith & Warrior, el ciclo Alcatraz–Wounded Knee fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Un «huracán»: transformó la identidad indígena pero dejó pocas leyes.", correcta: true, explicacion: "Correcto: ganancias culturales y simbólicas; las demandas concretas no se cumplieron." },
        { texto: "El origen directo y suficiente de todas las leyes de autodeterminación de 1975–78.", correcta: false, explicacion: "No lo atribuyen al movimiento militante como causa suficiente." },
        { texto: "Un período que ellos estudian abarcando por igual a Canadá, México y Guatemala.", correcta: false, explicacion: "Miran solo 1969–73 y solo EE.UU." },
        { texto: "Un movimiento que logró todas sus demandas concretas en la ocupación de la BIA.", correcta: false, explicacion: "Las 20 demandas del Camino de los Tratados Rotos nunca fueron consideradas." }
      ] },
    { pregunta: "¿Qué papel cumplió el Libro Blanco (1969) según Miller?", etiqueta: "historiador",
      opciones: [
        { texto: "Fue el catalizador que unificó a las Primeras Naciones y llevó a la Sección 35.", correcta: true, explicacion: "Correcto: la amenaza de perder el estatus hizo lo que ninguna reforma había logrado." },
        { texto: "Fue una política aplicada con éxito que eliminó por completo la vieja Ley India de 1876.", correcta: false, explicacion: "Nunca se aplicó: fue retirado en 1971, y la Ley India sigue vigente." },
        { texto: "Fue el documento con el que los indígenas canadienses reclamaron ser «ciudadanos plus».", correcta: false, explicacion: "Eso fue el Libro Rojo de Cardinal; el Blanco era la propuesta del gobierno." },
        { texto: "Fue el acuerdo internacional que la ONU impuso a Canadá para proteger a los inuit.", correcta: false, explicacion: "Fue una iniciativa interna del gobierno de Trudeau, no de la ONU." }
      ] },
    { pregunta: "La diferencia central entre Canadá y EE.UU. en el reconocimiento fue…", etiqueta: "concepto",
      opciones: [
        { texto: "Canadá reconoció a nivel constitucional (Sección 35); EE.UU. solo por ley ordinaria.", correcta: true, explicacion: "Correcto: en EE.UU. el Congreso conserva «poder plenario» y puede revocar por ley." },
        { texto: "EE.UU. jamás reconoció ningún derecho a las tribus, mientras Canadá lo reconoció todo.", correcta: false, explicacion: "EE.UU. sí reconoció (ICRA, ISDEAA), pero por vía legislativa, no constitucional." },
        { texto: "Canadá aplicó una política de terminación y EE.UU. nunca intentó asimilar a nadie.", correcta: false, explicacion: "Está invertido: la terminación fue de EE.UU.; Canadá propuso y retiró el Libro Blanco." },
        { texto: "Ninguno de los dos países votó jamás en contra de la Declaración de la ONU (UNDRIP).", correcta: false, explicacion: "Ambos votaron en contra en 2007 y adhirieron recién en 2010." }
      ] },
    { pregunta: "¿Por qué Guatemala impide leer el período como «progreso generalizado»?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Porque el Estado cometió genocidio contra los mayas en plena era de derechos humanos.", correcta: true, explicacion: "Correcto: ~200.000 muertos, 83% mayas; es el contraejemplo brutal del continente." },
        { texto: "Porque fue el primer país en darle a los pueblos indígenas un Estado plurinacional.", correcta: false, explicacion: "La plurinacionalidad llega en Bolivia (2009) y Ecuador (2008), no en Guatemala." },
        { texto: "Porque su consulta popular de 1999 aprobó de forma masiva todas las reformas indígenas.", correcta: false, explicacion: "La consulta de 1999 rechazó las reformas." },
        { texto: "Porque ratificó antes que ningún otro país el Convenio 169 de la OIT sobre indígenas.", correcta: false, explicacion: "El primero en ratificar el 169 fue México (1990)." }
      ] },
    { pregunta: "¿Qué sostiene Bonfil Batalla sobre el indigenismo mexicano?", etiqueta: "historiador",
      opciones: [
        { texto: "Fue «desindianización»: el INI amplió el Estado sin ampliar los derechos indígenas.", correcta: true, explicacion: "Correcto: el «México imaginario» buscaba integrar sin reconocer." },
        { texto: "Fue un movimiento indígena de base que conquistó la autonomía plena en los años 50.", correcta: false, explicacion: "El indigenismo era política del Estado, no un movimiento indígena." },
        { texto: "Reconoció de inmediato a México como nación pluricultural ya en el año 1948.", correcta: false, explicacion: "El reconocimiento pluricultural (art. 4) recién llega en 1992." },
        { texto: "Logró eliminar la pobreza y preservar todas las lenguas indígenas del país.", correcta: false, explicacion: "A fines de los 70 las comunidades seguían pobres y las lenguas, perseguidas." }
      ] },
    { pregunta: "La mejor síntesis de «¿quién fue responsable de los avances?» es…", etiqueta: "concepto",
      opciones: [
        { texto: "Las organizaciones fijaron la agenda; los tribunales, presidentes y la OIT dieron los resultados.", correcta: true, explicacion: "Correcto: condición necesaria pero no suficiente; donde faltaron instituciones (Guatemala) no hubo avance." },
        { texto: "Las organizaciones indígenas lograron por sí solas todos los avances legales del período.", correcta: false, explicacion: "Fueron necesarias pero no suficientes: los resultados pasaron por instituciones que no controlaban." },
        { texto: "Los avances fueron obra exclusiva de los gobiernos nacionales, sin ninguna presión de los movimientos.", correcta: false, explicacion: "Sin las organizaciones no habría habido agenda ni derrota de la asimilación." },
        { texto: "Todo se debió al marco internacional (OIT y ONU), sin aporte de las luchas locales.", correcta: false, explicacion: "El marco internacional ayudó, pero los avances concretos nacieron de la interacción." }
      ] },
    { pregunta: "¿Qué muestra la crisis de Oka (1990)?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Que ocho años después de la Sección 35 el Estado todavía mandaba al ejército por tierras.", correcta: true, explicacion: "Correcto: la Constitución reconocía derechos que el Estado no estaba dispuesto a honrar." },
        { texto: "Que Canadá había resuelto por completo y de forma definitiva todos sus conflictos de tierras.", correcta: false, explicacion: "Lo contrario: Oka probó que la brecha persistía." },
        { texto: "Que los inuit obtuvieron el territorio de Nunavut tras una ocupación armada violenta.", correcta: false, explicacion: "Nunavut se obtuvo por negociación de 20 años, no por Oka." },
        { texto: "Que el gobierno de Trudeau aplicó el Libro Blanco por la fuerza sobre los mohawk.", correcta: false, explicacion: "El Libro Blanco se retiró en 1971; Oka es un conflicto de 1990 por un campo de golf." }
      ] },
    { pregunta: "La conclusión honesta sobre «¿se reforzaron considerablemente?» es…", etiqueta: "concepto",
      opciones: [
        { texto: "Considerable en la ley, parcial en tierra y gobierno, limitado en la vida cotidiana.", correcta: true, explicacion: "Correcto: hay que sostener las tres medidas (3 R) a la vez; «reforzados en la ley, no en la vida»." },
        { texto: "Un refuerzo pleno y parejo en absolutamente todos los planos y en todos los países a la vez.", correcta: false, explicacion: "El avance fue asimétrico, no parejo." },
        { texto: "Un fracaso total sin ningún avance real en ningún país durante todo el período.", correcta: false, explicacion: "Hubo avances considerables en lo jurídico-constitucional." },
        { texto: "Un progreso perfectamente continuo y ascendente desde 1945 hasta el presente.", correcta: false, explicacion: "No fue continuo sino pendular (terminación, Libro Blanco, Guatemala)." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "«Los derechos civiles de los pueblos indígenas se vieron considerablemente reforzados después de 1945.» ¿En qué medida está de acuerdo?", frecuencia: "Muy alta",
        plan: "Hay adverbio de grado: hay que MEDIR. Las 3 R: considerable (ley) / parcial (tierra y gobierno) / limitado (vida). Incluir un retroceso (terminación, Libro Blanco, Guatemala). Wilkinson vs. Smith & Warrior." },
      { pregunta: "«Los derechos civiles de los pueblos indígenas en América mejoraron después de 1945.» ¿En qué medida está de acuerdo?", frecuencia: "Muy alta",
        plan: "Barra más baja: basta probar mejora neta. Mejoras políticas y territoriales al centro; los retrocesos como matiz (no contrapeso igual). Conclusión: mejora neta, desigual entre países y dimensiones." },
      { pregunta: "Compare y contraste los avances en los derechos civiles de los pueblos indígenas en dos países de América después de 1945.", frecuencia: "Muy alta",
        plan: "P-M-T-L: Políticas (péndulo), Movimientos (NIB/NCAI + Red Power), Tierra (contraste: Nunavut vs. autogestión), Límites (empate socioeconómico). Miller vs. Smith & Warrior; Wilkinson." },
      { pregunta: "Discuta la afirmación de que las organizaciones indígenas fueron las principales responsables de los avances después de 1945.", frecuencia: "Alta",
        plan: "Confrontar interpretaciones. A favor: institucionales (NCAI, AFN) y militantes (AIM) con matiz. En contra: Estado, tribunales, OIT. Síntesis: interacción. Prueba negativa: Guatemala. Wilkinson vs. Smith & Warrior + Miller." },
      { pregunta: "Examine los factores que contribuyeron a la mejora de los derechos indígenas después de 1945.", frecuencia: "Alta",
        plan: "G-U-D-O-I encadenados: posguerra/derechos humanos → urbanización/panindianismo → organización institucional → acción directa → respuesta de tribunales, gobiernos y OIT. Decisivo: presión organizada + instituciones receptivas." },
      { pregunta: "Evalúe el éxito de los pueblos indígenas en obtener derechos civiles en un país de la región después de 1945.", frecuencia: "Media",
        plan: "Elegí un país (EE.UU. o Canadá). Punto cero → organización → militancia → resultados → límites. Juicio con las 3 R: éxito considerable en soberanía, limitado en bienestar." }
    ],
    planes: [
      { titulo: "Plan A · «¿En qué medida se reforzaron considerablemente?» (las 3 R)",
        tesis: "Acuerdo parcial: refuerzo considerable en lo jurídico-constitucional, parcial en lo territorial y de autogobierno, limitado en lo socioeconómico, con retrocesos graves (terminación, Guatemala). «Reforzados en la ley, no en la vida.»",
        pasos: [
          "P1 político-jurídico (SÍ, considerable): voto Canadá 1960, ICRA 1968, ISDEAA 1975, Sección 35 1982, art. 4 México 1992, ola constitucional 1991–99. Wilkinson (renacimiento de la soberanía).",
          "P2 el retroceso (NO lineal): terminación 1953 (109 tribus, 1,3 M acres), Libro Blanco 1969 (igualdad como abolición), Guatemala 1981–83 (200.000, 83% mayas). El período contiene su contraejemplo.",
          "P3 territorial (PARCIAL): Calder 1973, James Bay 1975, Boldt 1974, Nunavut 1999; pero Comisión de Reclamos solo paga, Oka 1990, EZLN 1994. Smith & Warrior (visibilidad ≠ resultado) + Miller (brecha).",
          "P4 socioeconómico (LIMITADO): Pine Ridge, Cobell 3.400 M, brecha canadiense, Bonfil (desindianización). Las disculpas certifican el daño.",
          "Conclusión: considerable (ley) / parcial (recursos) / limitado (realidad). «Considerablemente» solo es defendible para la primera R."
        ] },
      { titulo: "Plan B · «Los derechos mejoraron» (barra más baja, P1)",
        tesis: "Mejoraron de forma inequívoca aunque no lineal ni uniforme: el período incluyó retrocesos tan graves como la terminación y el genocidio, y las mejoras llegaron a distinto ritmo en cada país.",
        pasos: [
          "Mejoras políticas y territoriales fundidas en el centro: voto, Sección 35, autodeterminación, Nunavut, ola constitucional.",
          "Retrocesos como MATIZ (no contrapeso igual): terminación y Libro Blanco prueban que no fue lineal.",
          "Socioeconómico acortado: la pobreza prueba que las mejoras fueron insuficientes, no que no existieron.",
          "Historiadores: Wilkinson para el renacimiento; Miller para el catalizador canadiense.",
          "Conclusión: acuerdo amplio: hubo mejora neta, desigual entre países y dimensiones."
        ] },
      { titulo: "Plan C · Compare y contraste Canadá y EE.UU. (P-M-T-L)",
        tesis: "Misma trayectoria (asimilación → rechazo → reconocimiento) y distinta profundidad: Canadá reconoció más alto (Constitución) y entregó más (tratados, Nunavut); EE.UU. retrocedió más (terminación) y avanzó por leyes revocables.",
        pasos: [
          "C1 Políticas (semejanza: péndulo): posguerra reformista → asimilación «igualitaria» (Libro Blanco / terminación) → reconocimiento (Sección 35 / ISDEAA). Contraste: el Libro Blanco se retiró, la terminación se aplicó.",
          "C2 Movimientos (semejanza con matiz): NIB/NCAI + Red Power. Contraste: en Canadá acción directa puntual + negociación de jefes (Express); en EE.UU. AIM 4 años + FBI. Miller vs. Smith & Warrior.",
          "C3 Tierra (contraste central): Calder y Boldt en el mismo bienio, pero Canadá hace reclamos integrales y Nunavut; EE.UU. autogestión de programas bajo «poder plenario». Wilkinson.",
          "C4 Límites (semejanza): brecha socioeconómica intacta, violencia (Wounded Knee / Oka), disculpas tardías, voto contra UNDRIP. Contraste de escala: más violencia en EE.UU.",
          "Conclusión: misma trayectoria, distinta profundidad; en lo socioeconómico, empate en el fracaso."
        ] },
      { titulo: "Plan D · Discuta: ¿organizaciones responsables? (confrontar interpretaciones)",
        tesis: "Condición necesaria pero no suficiente: las organizaciones fijaron la agenda y derrotaron la asimilación, pero los resultados concretos pasaron por tribunales, presidentes y el marco internacional. Distinguir institucionales (leyes) de militantes (urgencia).",
        pasos: [
          "P1 institucionales (a favor): NCAI frena la terminación (Chicago 1961), DRUMS → Menominee 1973, Libro Rojo derrota al Libro Blanco, Express → Sección 35, Inuit Tapirisat → Nunavut.",
          "P2 militantes (a favor con matiz): Alcatraz → Nixon 7 meses después; AIM → BIA, Wounded Knee, panindianismo. Pero ninguna demanda cumplida. Smith & Warrior (huracán).",
          "P3 en contra (Estado/tribunales/internacional): Nixon 1970, ISDEAA 1975, Boldt y Calder (jueces), Guerra contra la Pobreza, OIT 169. Wilkinson. Prueba negativa: Guatemala (CUC organizado, Estado genocida → sin avance hasta 1996).",
          "P4 síntesis: la interacción. Boldt = fish-ins + tratado + juez. Sección 35 = Express + Calder + repatriación. Miller: el Estado (Libro Blanco) catalizó al movimiento.",
          "Conclusión: «principales» sí como iniciadoras y necesarias, no como suficientes. Las militantes dieron urgencia; las institucionales, leyes."
        ] },
      { titulo: "Plan E · Examine los factores (G-U-D-O-I)",
        tesis: "Cinco factores encadenados: posguerra y derechos humanos → urbanización y panindianismo → organización institucional → acción directa → respuesta de tribunales, gobiernos y OIT. El decisivo fue la combinación de presión desde abajo con instituciones receptivas.",
        pasos: [
          "Contexto (G-U-D): veteranos de guerra, reubicación urbana (200.000 a 1962), Declaración Universal 1948 → la tutela se vuelve vergonzosa.",
          "Agencia (O): NCAI, NIYC, AIM, NIB/AFN; el panindianismo urbano nacido de la terminación.",
          "Instituciones (I): tribunales (Calder, Boldt), presidentes (Nixon), Congreso (ISDEAA), OIT 169 → ola constitucional latina.",
          "Jerarquía: los factores de contexto explican el «cuándo»; los de agencia explican el «qué».",
          "Conclusión: la terminación, al crear al indígena urbano y la amenaza común, fue un factor causal clave del propio activismo."
        ] },
      { titulo: "Plan F · Evalúe el éxito en un país (EE.UU.)",
        tesis: "Éxito considerable en soberanía, limitado en bienestar: de la terminación de 1953 a la autodeterminación de 1975, pero con la brecha socioeconómica intacta.",
        pasos: [
          "Punto cero: la terminación de 1953 como el momento más bajo.",
          "Organización institucional: NCAI, fish-ins, Menominee restaurada (DRUMS).",
          "Militancia: Alcatraz–Wounded Knee (Smith & Warrior: huracán).",
          "Resultados: Nixon 1970, Boldt, ISDEAA, AIRFA (Wilkinson) vs. Pine Ridge, Cobell.",
          "Conclusión con las 3 R: éxito considerable en soberanía, limitado en bienestar."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida se reforzaron considerablemente los derechos indígenas después de 1945?»",
        parrafos: [
          { texto: "Hasta 1945 los pueblos indígenas de las Américas compartían una condición de tutela: la Ley India canadiense de 1876, la Ley Dawes estadounidense de 1887 y el indigenismo surgido en Pátzcuaro en 1940 partían de la misma premisa, que el indígena debía dejar de serlo para convertirse en ciudadano. Medir si sus derechos fueron «considerablemente» reforzados exige un criterio, porque el adverbio pide magnitud, no solo dirección. Este ensayo distingue tres niveles —si cambió la ley, si ese cambio se tradujo en control efectivo de tierras y gobiernos, y si modificó las condiciones de vida— y sostiene que el refuerzo fue considerable en lo jurídico-constitucional, parcial en lo territorial y limitado en lo socioeconómico, con retrocesos que impiden leerlo como progreso continuo. Fueron reforzados en la ley mucho más que en la vida.", nota: "Intro: punto cero, el adverbio obliga a medir, criterio de 3 R y tesis asimétrica anticipada." },
          { texto: "En el nivel de las normas el cambio fue profundo y en varios casos de jerarquía constitucional. Canadá reformó la Ley India en 1951 y en 1960 otorgó el voto federal sin exigir renunciar al estatus, rompiendo la lógica del «enfranchisement»; el salto decisivo llegó en 1982 con la Sección 35, que «reconoce y afirma» los derechos aborígenes fuera de la Carta de Derechos para que no queden subordinados a la igualdad individual. En Estados Unidos el reconocimiento fue legislativo pero nítido: la ICRA de 1968 y, sobre todo, la Ley de Autodeterminación de 1975 revirtieron formalmente la terminación. América Latina llegó más tarde pero más alto: el artículo 4 mexicano (1992) y la ola constitucional de 1991–99 bajo el Convenio 169 de la OIT. Como sostiene Wilkinson, las tribus protagonizaron un renacimiento de la soberanía. En este nivel, el refuerzo fue considerable.", nota: "P1: evidencia fechada de los tres bloques, Wilkinson usado para argumentar, juicio explícito." },
          { texto: "Sin embargo, el mismo período produjo las amenazas más graves, lo que obliga a descartar la idea de avance lineal. En 1953 la Resolución 108 y la Ley Pública 280 inauguraron la terminación: 109 tribus terminadas, ~1,3 millones de acres perdidos y 200.000 reubicados a 1962. Canadá ensayó lo mismo con el Libro Blanco de 1969, derrotado por el Libro Rojo de Harold Cardinal y retirado en 1971, lo que demuestra que la igualdad formal podía ser la vía más eficaz para abolir derechos colectivos. Pero el contraejemplo más brutal es Guatemala: mientras Canadá constitucionalizaba los derechos aborígenes, el Estado guatemalteco arrasaba más de cuatrocientas aldeas mayas (1981–83), con unos 200.000 muertos (83% mayas), calificados por la Comisión de Esclarecimiento Histórico como actos de genocidio. El Nobel de Menchú (1992) reconoció una catástrofe, no un avance.", nota: "P2: el retroceso con datos; incluir Guatemala es lo que evita la lectura lineal (indicación del profe)." },
          { texto: "En el segundo y tercer nivel el balance baja. En territorio el avance fue parcial: Calder (1973), James Bay (1975), Boldt (1974) y Nunavut (1999) fueron reales, pero la Comisión de Reclamos de 1946 solo pagó dinero, las Black Hills nunca volvieron y, ocho años después de la Sección 35, Canadá envió el ejército a Oka. Smith y Warrior describen el ciclo de Alcatraz a Wounded Knee como un huracán que cambió la identidad pero no dejó leyes; Miller recuerda que el reconocimiento constitucional dejó intacta la brecha. En lo socioeconómico el refuerzo fue limitado: Pine Ridge sigue entre los condados más pobres, Cobell costó 3.400 millones, y en México, como sostiene Bonfil Batalla, el indigenismo fue desindianización. La afirmación es válida en una medida precisa: considerable en la ley, parcial en los recursos y limitada en la vida; sostener las tres cosas a la vez es la única forma honesta de responder.", nota: "P3+P4 y conclusión comprimidos: parcial y limitado con historiadores y veredicto asimétrico final." }
        ] },
      { titulo: "Ensayo 2 · «Discuta: ¿fueron las organizaciones indígenas las principales responsables de los avances?»",
        parrafos: [
          { texto: "Después de 1945 los pueblos indígenas obtuvieron avances impensables bajo la Ley India de 1876 o la Ley Dawes de 1887: el voto, el fin de la terminación, el reconocimiento constitucional, tratados modernos y territorios propios. Atribuirlos a un solo actor es tentador. Sostendré que las organizaciones indígenas fueron la condición necesaria de esos avances, porque fijaron la agenda y derrotaron los proyectos asimilacionistas, pero no la suficiente: los resultados concretos pasaron por instituciones que ellas no controlaban, y donde esas instituciones faltaron, como en Guatemala, la organización no produjo avances sino mártires. Conviene además distinguir entre organizaciones institucionales y militantes.", nota: "Intro con tesis de responsabilidad compartida y la distinción institucional/militante que el profe pide." },
          { texto: "El argumento más fuerte a favor lo dan las organizaciones de cabildeo y litigio. En Estados Unidos el NCAI (1944) combatió la terminación tribu por tribu y en la Declaración de Chicago (1961) formuló la alternativa que el gobierno adoptaría una década después; la campaña DRUMS de Ada Deer logró en 1973 la restauración de los Menominee. En Canadá la respuesta organizada fue aún más decisiva: el Libro Rojo de la Indian Association of Alberta obligó a Trudeau a retirar el Libro Blanco en 1971, y la Constitution Express de 1980, organizada por George Manuel, consiguió la Sección 35 cuando el borrador no mencionaba a los pueblos aborígenes. Como sostiene Miller, la amenaza del Libro Blanco unificó a las Primeras Naciones. Sin estas organizaciones no habría habido ni agenda ni derrota de la asimilación.", nota: "P1: organizaciones institucionales, evidencia fechada y Miller como respaldo." },
          { texto: "El ala militante apoya la afirmación de un modo más ambiguo. La ocupación de Alcatraz (1969–71) no obtuvo ninguna de sus demandas, pero siete meses después Nixon repudió la terminación y en diciembre devolvió Blue Lake. AIM llevó la confrontación a Wounded Knee (1973) y convirtió el panindianismo en identidad política. Sin embargo, los veinte puntos de 1972 nunca fueron considerados, la ocupación de la BIA erosionó la simpatía pública y Wounded Knee terminó con dos muertos y la fragmentación del movimiento bajo el FBI. Smith y Warrior describen ese ciclo como un huracán: transformó lo que los indígenas pensaban de sí mismos, pero pasó rápido y no dejó estructuras. Las organizaciones militantes fueron responsables de la urgencia, no de los resultados.", nota: "P2: militantes con el matiz de Smith & Warrior (agenda sí, leyes no)." },
          { texto: "Contra la afirmación pesa que casi todos los avances concretos llevan la firma de un actor estatal: la ISDEAA de 1975, el acuerdo de Alaska de 1971, los fallos Calder (1973) y Boldt (1974), y en América Latina la ola constitucional que siguió al Convenio 169 de la OIT. Wilkinson lee el período como una revolución silenciosa de abogados y tribunales. La prueba negativa es Guatemala: el CUC organizó a los mayas tanto como el NCAI a las tribus, pero frente a un Estado genocida la organización no produjo derechos sino víctimas hasta la paz de 1996. La discusión se resuelve observando que ningún avance tiene un solo autor: el fallo Boldt combina fish-ins, un tratado de 1854 y un juez. La afirmación es válida si «principales» significa iniciadoras y necesarias, y falsa si significa suficientes: las organizaciones hicieron que hubiera algo que reconocer; los Estados y los tribunales, que se reconociera.", nota: "P3 + síntesis + conclusión: el lado del Estado con Wilkinson, la prueba negativa y el veredicto final matizado." }
        ] }
    ],
    guia: {
      tesis: "Respondé con un juicio asimétrico y un criterio explícito. Tesis maestra: «El avance fue real pero asimétrico: considerable en la jerarquía de las normas, parcial en el control de la tierra y los recursos, y limitado en las condiciones materiales de vida. Reforzados en la ley, no en la vida.»",
      argumentos: [
        "Usá los 4 ejes del profe (político-jurídico, movimientos, territorial-cultural, límites) o las 3 R (Reconocimiento, Recursos, Realidad) para estructurar.",
        "Para «compare y contraste»: P-M-T-L (los dos países en cada párrafo, conector de comparación en la primera oración).",
        "Cada evidencia termina con «esto demuestra que…» y un juicio (considerable / parcial / limitado). Contar no es evaluar."
      ],
      evidencia: [
        "Canadá (V-L-C-N): voto 1960, Libro Blanco 1969, Calder 1973, James Bay 1975, Sección 35 1982, Oka 1990, Nunavut 1999.",
        "EE.UU. (D-I-T-A / A-R-T-W): terminación 1953 (109 tribus, 1,3 M acres), Alcatraz 1969–71, Nixon 1970, Wounded Knee 1973, Boldt 1974 (50%), ISDEAA 1975.",
        "A. Latina (1992): INI 1948, Guatemala 1981–83 (200.000, 83% mayas), Nobel Menchú 1992, art. 4 México, EZLN 1994, Bolivia plurinacional 2009. OIT 169 (1989), UNDRIP 2007."
      ],
      historiografia: [
        "Wilkinson (renacimiento de la soberanía; abogados y tribunales) vs. Smith & Warrior (huracán; identidad sí, leyes no).",
        "Cameos: Miller (Libro Blanco como catalizador; brecha de bienestar) para Canadá; Bonfil Batalla (indigenismo = desindianización) para A. Latina.",
        "Citá en estilo indirecto, no textual. Un historiador por párrafo; nunca los cuatro juntos."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej., «el refuerzo fue considerable y punto», lectura de Wilkinson) y refutala con la 3.ª R: la pobreza, la violencia tardía (Oka, Pine Ridge) y Guatemala muestran que el reconocimiento legal no se tradujo en vida."
    }
  }
});
