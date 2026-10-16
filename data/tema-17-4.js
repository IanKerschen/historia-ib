/* ============================================================
   tema-17-4.js — 17.4 Movimiento hispanoamericano (chicano)
   César Chávez · United Farm Workers · Movimiento chicano · Reforma inmigratoria
   Transcripción fiel de la guía Paper 3 del usuario (v2, con archivos del profesor).
   Lo marcado DE CLASE sale de los archivos del profesor (banco de evidencias y fichas).
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "17.4",
  carpeta: "p3-s17",
  titulo: "Movimiento hispanoamericano (chicano)",
  subtitulo: "César Chávez · United Farm Workers · Movimiento chicano · Derechos laborales e inmigración",
  periodo: "1962–1975 (Chávez hasta 1993) · reforma inmigratoria 1924–2006",
  estado: "listo",
  etiquetas: ["Chávez", "UFW", "chicano", "boicot", "no violencia", "derechos laborales", "reforma inmigratoria", "Young Lords"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Entre 1962 y 1975 una minoría invisible (sin sindicato, sin voto efectivo, sin voz en la escuela) pasó de la petición respetuosa a la protesta organizada: primero desde el campo (Chávez, UFW) y después desde la ciudad y la universidad (chicanos). Ganó reconocimiento legal y cultural, y perdió casi todo lo que dependía de mantener la organización. Medido por sus objetivos declarados (un sindicato para todos los agrícolas, la tierra de 1848, Aztlán, un partido chicano) fracasó; medido por sus efectos (ALRA, amnistía de 1986, estudios chicanos, una élite política hispana, el fin de la invisibilidad) transformó la posición de los hispanos en EE.UU.",
    historiadoresLinea: [
      { nombre: "Matt García", linea: "Revisionista: el boicot (obra colectiva) ganó; Chávez perdió lo ganado (La Paz, Synanon 1977, purgas 1977–81, no organizar tras la ALRA). Derrota «autoinfligida»; separa el símbolo (intacto) del sindicato (destruido)." },
      { nombre: "Carlos Muñoz Jr.", linea: "Militante-académico (East L.A. 13): el movimiento chicano fue juvenil y de identidad; rompió con la «generación mexicano-americana»; su legado fue cultural e institucional (estudios chicanos, MEChA, una élite), no leyes." },
      { nombre: "Terry Anderson", linea: "Optimista: un solo «Movimiento» con dos olas; el «Brown Power» aplicó las tácticas de los negros; balance positivo, los logros sobrevivieron. Hart-Celler = hija de los derechos civiles." },
      { nombre: "Todd Gitlin", linea: "Autocrítico (ex SDS): «de la esperanza a la rabia»; los nacionalismos de identidad fragmentaron a la izquierda y regalaron la política a Nixon. La identidad ganó orgullo a costa de poder." },
      { nombre: "De regalo", linea: "Griswold del Castillo & R. García 1995 (heroico, «triunfo del espíritu») · Bardacke 2011 («dos almas»; «líder de movimiento, no sindicalista») · Pawel 2014 · Oropeza 2005 (Moratoria) · Jeffries (Young Lords) DE CLASE · Vecchio (1965: nuevas prioridades, no abrir fronteras) DE CLASE." }
    ],
    datosClave: [
      { grupo: "Chávez y la UFW: datos que valen oro", items: [
        "31-III-1927 nace cerca de Yuma (Arizona); granja perdida en la Depresión; deja la escuela en 8.º grado.",
        "Ross lo recluta en la CSO (1952); director nacional (1958–62); DE CLASE dirige registro de votantes.",
        "III-1962 renuncia a la CSO; 30-IX-1962 funda la NFWA con Dolores Huerta y Gilbert Padilla.",
        "8-IX-1965 la AWOC filipina (Larry Itliong) inicia la huelga de Delano; 16-IX la NFWA se suma.",
        "6-IV-1966 Schenley firma (negocia Huerta); marcha de ~300 millas a Sacramento (10.000 personas).",
        "VIII-1966 fusión NFWA+AWOC = UFWOC (AFL-CIO). I-1968 boicot a toda la uva de mesa.",
        "Ayuno de 23 días (banco) / 25 (otras fuentes), roto con Robert Kennedy el 10-III-1968.",
        "29-VII-1970 contratos de Delano: 26 productores, 1,80 $/h + 20 c/caja, plan de salud RFK, prohibición del DDT.",
        "Boicot «más de tres años», ~17 M de consumidores. 1972: ~70.000 afiliados (pico); Prop. 22 derrotada 58–42.",
        "1973 colapso: Teamsters, 3.500 arrestos, 2 huelguistas muertos, ~6.500 afiliados.",
        "4-VI-1975 ALRA (gob. Jerry Brown, redacta Jerry Cohen): primer derecho a organizarse desde la NLRA de 1935.",
        "Decadencia: La Paz, «Juego» de Synanon 1977, purgas 1977–81; de >50.000 (70s) a ~15.000 (mediados 80).",
        "23-IV-1993 muere en San Luis (Arizona); ~40.000 en el funeral; Medalla de la Libertad 1994."
      ]},
      { grupo: "Movimiento chicano y Young Lords: datos que valen oro", items: [
        "Tijerina (Nuevo México): Alianza 1963; Kit Carson X-1966; Tierra Amarilla 5-VI-1967; preso 1969–71; ni una hectárea.",
        "Gonzales (Denver): Cruzada por la Justicia 1966; «Yo soy Joaquín» 1967; Denver III-1969 → Plan Espiritual de Aztlán.",
        "Gutiérrez (Texas): MAYO 1967; walkout de Crystal City XII-1969; Raza Unida (LRUP) I-1970.",
        "Raza Unida gana Crystal City (IV-1970); 0 de 11 cargos estatales (X-1971); Muñiz 6,3% (1972); El Paso IX-1972; se extingue h. 1978.",
        "Walkouts («blowouts») de East L.A.: 6-III-1968, ~15.000 estudiantes, 39 demandas; East L.A. 13.",
        "Santa Bárbara IV-1969 → Plan de Santa Bárbara: estudios chicanos, EOP, MEChA.",
        "Moratoria Chicana 29-VIII-1970: 20–30.000 personas; 3 muertos, entre ellos Rubén Salazar; ningún policía procesado.",
        "Brown Berets (David Sánchez, 1967, hasta ~5.000 en 90 capítulos); se disuelven 1972 (COINTELPRO).",
        "Young Lords: 1959 pandilla en Chicago; 1967 Jiménez los politiza; «Garbage Offensive» 1969; iglesia y McCormick; declive 1972."
      ]},
      { grupo: "Reforma inmigratoria: datos que valen oro", items: [
        "Regla «24 · 52 · 65 · 86 · 94»: cuotas (1924) → cuotas modificadas (1952) → fin de cuotas (1965) → amnistía (1986) → control (1994).",
        "1917 Ley Jones: puertorriqueños ciudadanos, fuera del régimen migratorio.",
        "Programa Bracero 1942–64: ~4,6 M de contratos, >400.000/año a fines de los 50; fin 31-XII-1964.",
        "Operación Wetback (1954): redadas y expulsiones en el Suroeste; ~1 M según el gobierno.",
        "3-X-1965 Hart-Celler (Johnson, al pie de la Estatua de la Libertad): fin total de cuotas, 170.000 visas, reunificación, calificados, refugiados (Vecchio).",
        "Primer tope al hemisferio occidental: 120.000 (1968); 20.000/país para México (1976) → crece la indocumentada.",
        "1966 Ley de Ajuste Cubano (residencia para los llegados desde 1959).",
        "Principios de los 80: Patrulla Fronteriza >1 M de detenciones/año; fracasos legislativos 1982, 1983, 1985.",
        "XI-1986 IRCA (Reagan): amnistía ~2,7 M (1,1 M por SAW agrícola) + sanciones a empleadores + control + antidiscriminación.",
        "1994 Operation Gatekeeper (Clinton) y Prop. 187; 1996 corte federal bloquea la 187; 2005 >10 M indocumentados; 10-IV-2006: protestas en 102 ciudades."
      ]}
    ],
    comparacion: [
      { eje: "Dos movimientos distintos", texto: "UFW: sindical, no violenta, católica, multiétnica (mexicanos + filipinos), con aliados liberales blancos; objetivo = contratos. Movimiento chicano: nacionalista, juvenil, urbano, de identidad («Aztlán», «la Raza»); objetivo = poder político y cultural. Chávez fue símbolo del segundo sin ser parte de él." },
      { eje: "Métodos (eficacia)", texto: "Los más eficaces trasladaron el conflicto a un terreno donde la minoría podía ganar: del campo al supermercado (boicot), de la calle al tribunal (litigio), del barrio a la urna (Raza Unida). Los menos eficaces enfrentaron al poder en su propio terreno (huelga sola, armas de Tijerina, manifestación reprimida)." },
      { eje: "Tres regímenes migratorios", texto: "No existe un único efecto para «los hispanos»: mexicanos (braceros, Wetback, tope, Gatekeeper), cubanos (refugio, Ajuste 1966, «pies secos»), puertorriqueños (ciudadanos desde 1917, fuera del régimen)." },
      { eje: "Respuesta federal vs. afroamericanos", texto: "El Estado federal legisló para los negros (1964, 1965, 1968) y nunca para los chicanos (solo California, ALRA 1975), aunque sí legisló inmigración (1965, 1986). Misma caja de herramientas (Anderson), distinto resultado." },
      { eje: "Éxito según el objetivo", texto: "Cuanto más simbólico el objetivo, mayor el éxito: los objetivos materiales (salario, tierra) fueron parciales y reversibles; los legales (ALRA, IRCA, cargos) parciales y duraderos; los culturales-identitarios, logrados." }
    ],
    veredictos: [
      { titulo: "Importancia de Chávez", texto: "Mayor como símbolo que como sindicalista: la UFW nunca pasó del 5–10% de los agrícolas y cayó de 70.000 (1972) a 15.000 (mediados 80), pero el boicot movió a 17 M de consumidores, la ALRA convirtió esa presión en derecho y su figura dio al movimiento chicano el líder moral que él mismo no había producido." },
      { titulo: "Reforma inmigratoria", texto: "Eficaz en lo que decide una ley (quién entra legalmente: fin de cuotas 1965, diversidad) e ineficaz en lo que decide el mercado de trabajo (quién entra de hecho: la indocumentada creció). Efectos positivos pero desiguales entre grupos y acompañados de control constante (Wetback → Gatekeeper)." },
      { titulo: "Balance del movimiento", texto: "Perdió casi todas sus batallas materiales y ganó la guerra del reconocimiento. Como sugiere Anderson, perdió sus batallas y ganó su guerra cultural; como replica Gitlin, ganar la cultura fue el consuelo de haber perdido la política." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Matt García", nacionalidad: "EE.UU. (Brown, luego Dartmouth), de familia mexicano-americana de California",
      obra: "From the Jaws of Victory: The Triumph and Tragedy of Cesar Chavez and the Farm Worker Movement (2012)",
      postura: "Revisionista: derrota autoinfligida",
      funcion: "Límites de Chávez, matizar su importancia, el boicot como obra colectiva.",
      ideaCentral: "La UFW ganó gracias al boicot, el arma más creativa del movimiento, construida por voluntarios y organizadores (Ganz, Medina, Govea, Cohen) en las ciudades, no solo por Chávez; y perdió en gran parte por decisiones propias: Chávez prefirió un «movimiento» comunitario controlado desde La Paz antes que un sindicato profesional, desconfió de sus cuadros, los sometió al «Juego» de Synanon (1977), expulsó a los mejores (1977–81) y se negó a organizar en los campos cuando la ALRA (1975) le abrió la puerta.",
      matiz: "No niega la grandeza de Chávez ni la hostilidad de los growers; separa el símbolo (intacto) del sindicato (destruido), y sitúa el punto de inflexión en 1976–77 (derrota de la Proposición 14 y purgas).",
      fraseLista: "Desde una lectura revisionista, Matt García sostiene que la tragedia de Chávez es que las mismas cualidades que hicieron posible la victoria de 1970 —el control personal, la desconfianza de los sindicatos convencionales, la UFW como comunidad moral— fueron las que impidieron consolidarla después de 1975.",
      paraPreguntas: ["Importancia / contribución de Chávez", "Éxitos y fracasos de la UFW", "Permanencia de los logros"]
    },
    {
      nombre: "Carlos Muñoz Jr.", nacionalidad: "EE.UU. (politólogo, Berkeley); fue uno de los «East L.A. 13»",
      obra: "Youth, Identity, Power: The Chicano Movement (1989; ed. revisada 2007)",
      postura: "El poder de la identidad",
      funcion: "Movimiento chicano, estudiantes, identidad; Chávez como símbolo adoptado; puente con 17.5.",
      ideaCentral: "El movimiento chicano fue ante todo un movimiento juvenil y estudiantil de identidad: una generación rompió con la «generación mexicano-americana» de sus padres (LULAC, GI Forum: asimilación, respetabilidad) y se rebautizó como «chicana», mestiza e indígena, orgullosa de lo que antes avergonzaba. Su núcleo: los walkouts (1968), las conferencias de Denver y Santa Bárbara (1969) y MEChA. Su legado no fueron leyes sino poder cultural e institucional (estudios chicanos, admisiones, una élite) y el fin de la vergüenza.",
      matiz: "Reconoce límites: nacionalismo que excluía alianzas, sexismo que expulsó a las chicanas, represión policial, y que el movimiento fue cooptado por el sistema que combatía (los líderes terminaron en universidades y en el Partido Demócrata).",
      fraseLista: "Según Carlos Muñoz, el movimiento chicano fue un movimiento de jóvenes que rompieron con la generación de sus padres: donde LULAC decía «somos americanos», los 15.000 estudiantes de East Los Ángeles dijeron «somos chicanos»; ese cambio de nombre fue su mayor conquista y su mayor límite.",
      paraPreguntas: ["Movimiento chicano / papel de la juventud", "Chávez como símbolo de una generación", "Comparación con 17.5"]
    },
    {
      nombre: "Terry H. Anderson", nacionalidad: "EE.UU. (Texas A&M), veterano de Vietnam",
      obra: "The Movement and the Sixties (1995)",
      postura: "Optimista: un Movimiento, dos olas",
      funcion: "Éxitos, métodos de protesta, comparación con los afroamericanos, Hart-Celler.",
      ideaCentral: "Hubo un solo «Movimiento» con dos olas: la primera (1960–65: derechos civiles negros) y la segunda (1965–73: Black Power, Brown Power/chicanos, mujeres, indígenas, antiguerra), en la que cada grupo tomó las tácticas de la primera ola y las aplicó a su «empoderamiento». Chávez y la UFW son el ejemplo de cómo la no violencia de King se trasladó a otra minoría; los chicanos, de cómo la segunda ola se volvió nacionalista. Balance positivo: el Movimiento hizo a EE.UU. más democrático, plural e inclusivo, y sus logros sobrevivieron a su desaparición.",
      matiz: "Inscribe Hart-Celler (1965) en la expansión de la igualdad legal de la Great Society: la reforma migratoria fue hija de los derechos civiles.",
      fraseLista: "Como muestra Terry Anderson, la UFW copió la marcha de Selma y el boicot de Montgomery: el «Brown Power» aplicó a otra minoría la caja de herramientas de la primera ola del Movimiento.",
      paraPreguntas: ["Métodos de protesta", "Éxitos del movimiento", "Comparación con el movimiento afroamericano", "Reforma de 1965"]
    },
    {
      nombre: "Todd Gitlin", nacionalidad: "EE.UU. (sociólogo, presidente de SDS 1963–64)",
      obra: "The Sixties: Years of Hope, Days of Rage (1987)",
      postura: "Autocrítico: de la esperanza a la rabia",
      funcion: "Decadencia del movimiento chicano y de los Young Lords; la Moratoria como ciclo «esperanza–rabia».",
      ideaCentral: "La Nueva Izquierda nació de la esperanza (Port Huron 1962, participación, derechos civiles) y se destruyó por la rabia: Vietnam, la militarización retórica, la fragmentación en nacionalismos de identidad (Black Power y, por extensión, el nacionalismo chicano y el de los Young Lords) y el vanguardismo. Al romper la coalición amplia, la izquierda entregó la política a la reacción conservadora (Nixon, la «mayoría silenciosa»). Los movimientos de identidad ganaron orgullo y perdieron poder.",
      matiz: "Escribe desde adentro (presidió SDS): el nacionalismo de identidad ganó orgullo a costa de aliados, y sin aliados una minoría del 5% no gobierna.",
      fraseLista: "El Plan Espiritual de Aztlán (1969) dio al movimiento un mito y una patria, pero como advierte Todd Gitlin sobre la Nueva Izquierda, el nacionalismo de identidad ganó orgullo a costa de aliados, y sin aliados una minoría del 5% no gobierna.",
      paraPreguntas: ["Decadencia del movimiento chicano", "Young Lords", "Moratoria de 1970", "Nacionalismo vs. coalición"]
    },
    {
      nombre: "Griswold del Castillo & R. A. García (1995)", regalo: true, nacionalidad: "Historiadores chicanos (San Diego State / Texas-Arlington), frase regalo",
      obra: "César Chávez: A Triumph of Spirit (1995)",
      postura: "Heroico: «el triunfo del espíritu»",
      ideaCentral: "Chávez como líder moral, católico y no violento, «el primer líder mexicano-americano de alcance nacional»; explican la decadencia de la UFW por los enemigos externos (Teamsters, Reagan, Nixon, Deukmejian). Es el polo heroico que Matt García revisa.",
      fraseLista: "Griswold del Castillo y Richard García lo resumen como «el primer líder mexicano-americano de alcance nacional», y atribuyen la caída de la UFW a sus enemigos externos, no al propio Chávez.",
      paraPreguntas: ["Importancia de Chávez (polo heroico)", "Contrapeso de Matt García"]
    },
    {
      nombre: "Bardacke · Pawel · Oropeza · Jeffries · Vecchio", regalo: true, nacionalidad: "Frases regalo (Jeffries y Vecchio son DE CLASE)",
      postura: "Matices sobre Chávez, Young Lords y la reforma de 1965",
      ideaCentral: "Frank Bardacke (2011): la UFW tuvo «dos almas» (los que hacían huelga en el campo y los del boicot de voluntarios urbanos); Chávez fue «líder de un movimiento, no un sindicalista». Miriam Pawel (2014): genio organizador en los 60, autoritario y aislado en los 70; el «santo» es construcción posterior. Lorena Oropeza (2005): la Moratoria unió antiguerra y nacionalismo. Judson Jeffries DE CLASE: los Young Lords ayudaron a formar «un nuevo tipo de puertorriqueño». Diane Vecchio DE CLASE: la ley de 1965 no «abrió las fronteras» sino que creó nuevas prioridades legales (reunificación, calificados, refugiados).",
      fraseLista: "Frank Bardacke lo formula así: Chávez fue «líder de un movimiento, no un sindicalista», y ese movimiento tuvo «dos almas», la del campo y la del boicot urbano, pero nunca el alma de toda la población hispana.",
      paraPreguntas: ["Dos almas de la UFW", "Moratoria", "Young Lords", "Reforma de 1965 (Vecchio)"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1917, fecha: "1917", pais: "EE.UU. / Puerto Rico", titulo: "Ley Jones · cuotas de 1924",
      descripcion: "La Ley Jones hace ciudadanos a los puertorriqueños, que migran al continente sin restricciones de extranjeros. En 1924 el sistema de cuotas por origen nacional favorece a Europa del norte y restringe otras fuentes de mano de obra.",
      causas: ["Necesidad de mano de obra y control racial de la inmigración."],
      consecuencias: ["Puertorriqueños fuera del régimen migratorio (base urbana de los Young Lords).", "Punto de partida restrictivo que Hart-Celler desmontará en 1965."] },
    { anio: 1942, fecha: "1942–1964", pais: "EE.UU. / México", titulo: "Programa Bracero",
      descripcion: "Acuerdo EE.UU.–México (PL 78, 1951) para importar trabajadores temporales: ~4,6 M de contratos en 22 años; DE CLASE a fines de los 50 ingresaban más de 400.000 por año. Salarios bajos, sin derecho a huelga, usados como rompehuelgas. Termina el 31-XII-1964 por el lobby de sindicatos, iglesias y la CSO (Huerta).",
      causas: ["Demanda de brazos del agro del Suroeste durante y después de la guerra."],
      consecuencias: ["Mientras hubo braceros fue imposible sindicalizar el campo.", "Su fin es la precondición de la huelga de Delano, nueve meses después."],
      historiador: "DE CLASE «La agricultura estadounidense dependía de una gran cantidad de trabajadores mexicanos»." },
    { anio: 1954, fecha: "1954", pais: "EE.UU.", titulo: "Hernandez v. Texas · Operación Wetback",
      descripcion: "La Corte Suprema (Hernandez, V-1954) declara a los mexicano-americanos una clase protegida por la 14.ª Enmienda, dos semanas antes de Brown. El mismo año, la Operación Wetback (Eisenhower) lanza redadas masivas en el Suroeste: ~1 M de «deportaciones» según el gobierno, muchas de ciudadanos.",
      causas: ["Litigio de la generación mexicano-americana + pánico migratorio simultáneo."],
      consecuencias: ["Base legal para MALDEF.", "DE CLASE «La reforma migratoria no siguió una trayectoria lineal hacia mayor apertura»: derechos por un lado, expulsión por el otro."] },
    { anio: 1962, fecha: "30-IX-1962", pais: "EE.UU. (California)", titulo: "Chávez funda la NFWA",
      descripcion: "La CSO vota no organizar a los trabajadores agrícolas; Chávez renuncia (III-1962), se muda a Delano y funda la National Farm Workers Association con Dolores Huerta y Gilbert Padilla. No la llama «sindicato»: es una asociación con cooperativa de crédito, seguro de entierro y periódico (El Malcriado, 1964). Bandera: águila azteca negra sobre rojo.",
      causas: ["La organización respetable (CSO) no toca el campo; Chávez cree que primero hay que crear comunidad."],
      consecuencias: ["DE CLASE «Se crea una estructura estable para reclamar salarios y mejores condiciones: contribución central de Chávez al movimiento laboral hispano».", "Tres años de organización silenciosa: la base de 1965."] },
    { anio: 1965, fecha: "8 y 16-IX-1965", pais: "EE.UU. (Delano)", titulo: "Empieza la huelga de Delano",
      descripcion: "La AWOC (comité de la AFL-CIO, mayoría filipina, Larry Itliong) va a la huelga el 8-IX contra los viñedos de Delano. El 16-IX la NFWA vota unirse: ¡Huelga! Unos 2.000 trabajadores en ~30 ranchos.",
      causas: ["Un cosechador ganaba ~1,10–1,25 $/h, sin baños ni agua, con esperanza de vida de 49 años."],
      consecuencias: ["DE CLASE «La lucha unió a trabajadores de distintos orígenes»: el movimiento no fue exclusivamente mexicano ni dirigido solo por Chávez.", "Los productores responden con rompehuelgas, intimidación física y fumigación con pesticidas sobre los piquetes."],
      historiador: "DE CLASE «La organización enfrentó una oposición empresarial fuerte»." },
    { anio: 1966, fecha: "III–IV-1966", pais: "EE.UU. (California)", titulo: "Marcha a Sacramento · Schenley firma",
      descripcion: "Robert Kennedy reprende al sheriff de Kern por arrestar huelguistas (III). Marcha de ~300 millas de Delano al Capitolio, 25 días, bajo la Virgen de Guadalupe, con el Plan de Delano (Luis Valdez). Llegan ~10.000 el Domingo de Pascua; el 6-IV Schenley firma (negocia Huerta).",
      causas: ["La huelga sola no alcanzaba: el boicot a Schenley y los aliados (Reuther, iglesias, SNCC) cambian el terreno."],
      consecuencias: ["Primer contrato entre un sindicato agrícola y un gran productor de California.", "VIII-1966: NFWA y AWOC se fusionan en la UFWOC, AFL-CIO."],
      historiador: "Anderson: método = Selma + Guadalupe." },
    { anio: 1968, fecha: "I–III-1968", pais: "EE.UU.", titulo: "Boicot total · primer ayuno",
      descripcion: "En I-1968 la UFWOC declara el boicot a TODA la uva de mesa de California; organizadores a 40+ ciudades (Huerta en Nueva York, Medina en Chicago, Govea en Canadá, Ganz como estratega). Chávez ayuna (banco: 23 días; otras fuentes: 25) para recomprometer al movimiento con la no violencia; lo rompe con Robert Kennedy el 10-III.",
      causas: ["DE CLASE «Las huelgas no habían logrado suficiente presión; el boicot permitió llevar la disputa a consumidores de todo el país»."],
      consecuencias: ["El salto de la huelga (que pierde) al boicot (que gana).", "Crítica (Pawel, Bardacke): el ayuno concentra el movimiento en la persona de Chávez."] },
    { anio: 1968, fecha: "6-III-1968", pais: "EE.UU. (East L.A.)", titulo: "Blowouts de East Los Ángeles",
      descripcion: "DE CLASE Unos 15.000 estudiantes abandonan las secundarias de East L.A. y presentan 39 demandas (educación bilingüe, maestros chicanos, fin del castigo corporal). Los organizan Sal Castro, los Brown Berets y UMAS. Trece organizadores («East L.A. 13», entre ellos Carlos Muñoz) son procesados; los cargos se anulan en 1970.",
      causas: ["130.000 niños en escuelas segregadas en L.A.; segregación de facto."],
      consecuencias: ["DE CLASE «La junta escolar acepta la mayoría de las demandas, pero después incumple muchas».", "«Los jóvenes se convirtieron en actores centrales del movimiento» = la tesis de Muñoz."],
      historiador: "Muñoz: acto fundacional de la generación chicana." },
    { anio: 1969, fecha: "III–IV-1969", pais: "EE.UU. (Denver / Santa Bárbara)", titulo: "Aztlán y MEChA",
      descripcion: "Conferencia de Liberación de la Juventud Chicana en Denver (~1.500 jóvenes): El Plan Espiritual de Aztlán (Alurista): «somos un pueblo de bronce». En Santa Bárbara, el Plan de Santa Bárbara crea los programas de Estudios Chicanos, las admisiones (EOP) y una sola organización estudiantil: MEChA. Los jóvenes adoptan «chicano» como nombre.",
      causas: ["Ruptura con la generación asimilacionista (LULAC, GI Forum)."],
      consecuencias: ["La institucionalización en la universidad: el legado más duradero según Muñoz.", "Nacionalismo que excluye aliados blancos, negros y moderados (Gitlin)."] },
    { anio: 1970, fecha: "29-VII-1970", pais: "EE.UU. (Delano)", titulo: "Victoria de Delano",
      descripcion: "Tras un boicot de «más de tres años» y ~17 M de consumidores (encuesta Harris 1970), 26 productores, incluido Giumarra, firman contratos de 3 años: 1,80 $/h + 20 c por caja, bolsa de trabajo, plan de salud «Robert F. Kennedy», prohibición del DDT.",
      causas: ["El boicot ganó en el supermercado lo que la huelga no ganó en el campo; median los obispos católicos."],
      consecuencias: ["El logro concreto máximo de la UFW.", "DE CLASE «Uno de los mejores ejemplos de eficacia de la acción no violenta y económica»."],
      historiador: "DE CLASE «El boicot dura más de tres años y termina con contratos sindicales»." },
    { anio: 1970, fecha: "29-VIII-1970", pais: "EE.UU. (East L.A.)", titulo: "Moratoria Chicana",
      descripcion: "Marcha nacional contra Vietnam en East L.A.: 20–30.000 personas, la mayor manifestación antiguerra de una minoría. Los sheriffs atacan con gases: 3 muertos, entre ellos el periodista Rubén Salazar; 150+ arrestos; ningún policía procesado. Los mexicano-americanos eran ~10–12% de la población del Suroeste y ~19–20% de sus muertos en Vietnam.",
      causas: ["Chicanos pasan de probar su patriotismo muriendo en Vietnam a rechazar la guerra como guerra contra «otro pueblo moreno» (Oropeza)."],
      consecuencias: ["Costo altísimo que une antiguerra e identidad.", "Gitlin: de la esperanza a la rabia. Puente con 17.5."] },
    { anio: 1973, fecha: "1973", pais: "EE.UU. (California)", titulo: "El colapso de la UFW",
      descripcion: "Vencen los contratos de 1970: los growers de uva firman con los Teamsters. Huelga con 3.500+ arrestos; en VIII mueren dos huelguistas (Nagi Daifullah y Juan de la Cruz). Chávez suspende la huelga y vuelve al boicot (uva, lechuga, vino Gallo). La UFW cae de ~150 contratos a ~12 y a ~6.500 afiliados.",
      causas: ["El enemigo ya no es solo el patrón: es otro sindicato (DE CLASE «competencia sindical»)."],
      consecuencias: ["DE CLASE «Varios contratos vencieron y parte de las ganancias se perdió: los avances no fueron permanentes ni lineales».", "La victoria de 1970 dependía de contratos, no de una ley."] },
    { anio: 1974, fecha: "1974", pais: "EE.UU. (Arizona)", titulo: "Campaña de la UFW contra indocumentados",
      descripcion: "La UFW denuncia a indocumentados usados como esquiroles ante el INS; «línea mojada» de Manuel Chávez en Arizona. Protesta chicana contra la UFW; la UFW rectifica en 1974–75 y en los 80 apoyará la amnistía.",
      causas: ["Lógica sindical (proteger a los afiliados) vs. lógica étnica (defender a los indocumentados)."],
      consecuencias: ["La contradicción migratoria divide al movimiento contra sí mismo.", "El sindicato de los mexicanos contra los mexicanos: no se oculta, se explica."] },
    { anio: 1975, fecha: "4-VI-1975", pais: "EE.UU. (California)", titulo: "ALRA · fin del «cortito»",
      descripcion: "El gobernador demócrata Jerry Brown firma la California Agricultural Labor Relations Act (redacta Jerry Cohen): derecho a organizarse, elecciones por voto secreto, Junta (ALRB). Primera ley del país continental que da a los agrícolas lo que la Wagner les negó desde 1935. Ese año la CRLA gana también la prohibición del azadón de mango corto («cortito»).",
      causas: ["Presión acumulada del movimiento sobre el nuevo gobernador demócrata."],
      consecuencias: ["Logro estructural máximo: un derecho, no un contrato.", "DE CLASE «El movimiento ayudó a convertir demandas laborales en reformas legales: éxito político y legal»."],
      historiador: "M. García: aquí está el giro; derrota de la Prop. 14 (1976) y purgas que aíslan a Chávez." },
    { anio: 1977, fecha: "1977–1981", pais: "EE.UU. (La Paz, Keene)", titulo: "Synanon y purgas",
      descripcion: "Aislado en La Paz, Chávez concibe la UFW como comunidad/movimiento más que como sindicato. Introduce el «Juego» de Synanon (1977), técnica de confrontación grupal, y purga al personal: Philip Vera Cruz (1977), el equipo legal de Jerry Cohen (1979), Marshall Ganz, Eliseo Medina, Jessica Govea, Gilbert Padilla (1980–81). La convención de 1981 expulsa a delegados de base.",
      causas: ["Rechazo a profesionalizar la UFW; paranoia sobre «comunistas»."],
      consecuencias: ["M. García: «los que ganaron el boicot fueron los primeros en irse». Punto de no retorno (Pawel, M. García)."],
      historiador: "M. García: la derrota «autoinfligida»; las purgas son anteriores a Deukmejian (1983)." },
    { anio: 1986, fecha: "XI-1986", pais: "EE.UU.", titulo: "IRCA (Simpson-Mazzoli)",
      descripcion: "Tras los fracasos de 1982, 1983 y 1985, Reagan firma la IRCA: amnistía para quienes vivían en el país desde antes de 1982 (~2,7 M, de los cuales ~1,1 M por el programa agrícola SAW) + sanciones a empleadores + más control fronterizo + prohibición de discriminar por origen nacional. La apoyan la UFW y MALDEF.",
      causas: ["Años de negociación entre empresas, organizaciones hispanas y partidarios del control; >1 M de detenciones/año a principios de los 80."],
      consecuencias: ["(+) Legalizados pasan del trabajo agrícola estacional a construcción, fábricas, oficios, educación y vivienda.", "(-) Discriminación contra hispanos documentados porque los empleadores temen las sanciones."],
      historiador: "Ficha del profesor: «combinó regularización y control»; efectos no previstos." },
    { anio: 1993, fecha: "23-IV-1993 · 1994", pais: "EE.UU.", titulo: "Muerte de Chávez · Gatekeeper y Prop. 187",
      descripcion: "Chávez muere en San Luis (Arizona); ~40.000 personas en el funeral; Medalla Presidencial de la Libertad (1994). El mismo 1994, Clinton lanza Operation Gatekeeper y los votantes de California aprueban la Proposición 187 (niega servicios públicos a indocumentados); en 1996 una corte federal la bloquea.",
      causas: ["El símbolo sobrevive al sindicato (reducido a ~15.000 a mediados de los 80)."],
      consecuencias: ["Hacia 2005: >10 M de indocumentados (el control redujo la migración circular).", "10-IV-2006: protestas en 102 ciudades; la población hispana se vuelve un actor político movilizado."],
      historiador: "Anderson: la protesta se convirtió en participación; Gitlin: identidad sin poder." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Dos movimientos que se tocan pero no son el mismo. (1) El movimiento de los trabajadores agrícolas (Chávez, UFW): sindical, no violento, católico, multiétnico (mexicanos + filipinos), con aliados liberales blancos; objetivo: contratos. (2) El movimiento chicano (Tijerina, Gonzales, Gutiérrez, estudiantes, Brown Berets): nacionalista, juvenil, urbano, de identidad («Aztlán», «la Raza»); objetivo: poder político y cultural. Chávez fue el símbolo del segundo sin ser parte de él. Si mostrás esa tensión, ya estás en banda alta.</p>

          <h3>Formato y las 5 preguntas reales</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dato</th><th>Qué significa</th></tr></thead>
            <tbody>
              <tr><td>Formato</td><td>3 preguntas de las 36 del cuadernillo (2 por tema). Cada una vale 15 puntos. 2h30, ~50 min por ensayo, 1.000–1.200 palabras.</td></tr>
              <tr><td>Patrón de las 5 reales</td><td>3 de 5 sobre Chávez, 2 de 5 sobre reforma inmigratoria; ninguna todavía sobre el movimiento chicano solo ni sobre métodos.</td></tr>
              <tr><td>Banda 13–15</td><td>Tesis clara + cada párrafo responde la pregunta + datos precisos (fechas, cifras, leyes, personas) + análisis (por qué, con qué efecto) + perspectivas evaluadas (historiadores en tensión y tu juicio) + conclusión que jerarquiza.</td></tr>
              <tr><td>Banda 10–12</td><td>Lo mismo, pero con algún párrafo narrativo o historiadores solo «mencionados». La diferencia está en usar un historiador contra otro y decidir quién explica mejor.</td></tr>
            </tbody>
          </table></div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> <b>Las 5 preguntas reales del profesor:</b> Mayo 2017 «¿En qué medida promovió César Chávez los derechos civiles de los hispanoamericanos después de 1945?» · Nov 2018 «Evalúe las contribuciones de César Chávez al movimiento hispanoamericano» · Nov 2021 «Evalúe la eficacia de la reforma inmigratoria de EE.UU.» · Mayo 2022 «Evalúe los efectos de la reforma inmigratoria en la población de ascendencia hispana después de 1945» · Nov 2024 «"César Chávez fue mayormente exitoso en la promoción de los intereses de la población hispanoamericana". ¿En qué medida está de acuerdo?».</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> <b>El método del profesor en 6 pasos:</b> 1) leer la pregunta (evaluar / comparar / explicar / en qué medida); 2) elegir el eje (Chávez, movimiento chicano o reforma inmigratoria); 3) buscar evidencia (fechas, leyes, resultados, límites); 4) explicar qué cambió y por qué importa cada dato; 5) contrastar logros y límites, y dos interpretaciones si las hay; 6) concluir con un juicio claro, no con una lista. Regla final: «en la conclusión, jerarquizá: decí qué fue más importante y qué límite cambia tu evaluación».</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Plantilla de párrafo (en TODOS):</b> Afirmación (una oración que responde) → Evidencia (2–3 datos: hecho + fecha + cifra) → Explicación (por qué eso prueba la afirmación) → Perspectiva (un historiador que apoya o discute, y qué te parece a vos) → Vuelta a la pregunta. ~200 palabras. Cuatro párrafos así + intro + conclusión = 7.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Hispanoamericano» incluye a mexicano-americanos (chicanos), puertorriqueños (Young Lords) y cubanos (exilio post-1959). DE CLASE El banco insiste: «no existía una identidad racial o nacional única; las demandas podían ser distintas según la comunidad». Una oración sobre puertorriqueños y cubanos muestra que no tratás al movimiento como un bloque homogéneo.</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Chicano</b> = mexicano-americano que se autodefine con orgullo y militancia (años 60–70); antes era despectivo. <b>La Raza</b> = «el pueblo» mexicano-americano. <b>Aztlán</b> = la patria mítica de los aztecas, el Suroeste de EE.UU. (lo que México perdió en 1848). <b>Bracero</b> = trabajador mexicano con contrato temporal (1942–1964). <b>Boicot</b> = negarse a comprar un producto para presionar al productor. <b>Esquirol / rompehuelgas</b> = quien trabaja mientras los demás están en huelga. <b>Teamsters</b> = sindicato de camioneros que compitió con la UFW firmando «contratos dulces». <b>Growers</b> = los grandes productores de California. <b>Walkout / blowout</b> = abandono masivo de las aulas como protesta. <b>Moratoria</b> = marcha antiguerra de 1969–70. <b>Cuotas por origen nacional</b> = sistema de 1924 que fijaba cuántos inmigrantes mandaba cada país, favoreciendo a Europa del norte. <b>Amnistía</b> = legalización de quienes ya estaban sin papeles (1986).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es la distinción que ordena todo el tema?", etiqueta: "concepto",
            opciones: [
              { texto: "La UFW de Chávez es sindical y busca contratos; el movimiento chicano es nacionalista y busca poder cultural.", correcta: true, explicacion: "Correcto: dos movimientos que se tocan pero no son el mismo; Chávez fue símbolo del segundo sin ser parte de él." },
              { texto: "El movimiento chicano fue fundado y dirigido en su totalidad por César Chávez desde su sede sindical de la ciudad de Delano.", correcta: false, explicacion: "Chávez fue su símbolo, no su líder; el chicano tuvo otros líderes (Tijerina, Gonzales, Gutiérrez)." },
              { texto: "Los dos movimientos tuvieron exactamente el mismo objetivo: una ley federal sindical.", correcta: false, explicacion: "La UFW buscaba contratos y los chicanos identidad y poder; ninguno logró ley federal propia." },
              { texto: "La UFW era urbana y nacionalista y el movimiento chicano era rural y sindical.", correcta: false, explicacion: "Está invertido: la UFW es rural/sindical y el chicano es urbano/nacionalista." }
            ] },
          { pregunta: "¿Qué pide el patrón de las 5 preguntas reales del profesor?", etiqueta: "fecha",
            opciones: [
              { texto: "3 de 5 son sobre Chávez y 2 de 5 sobre la reforma inmigratoria.", correcta: true, explicacion: "Correcto: ninguna cayó todavía sobre el movimiento chicano solo ni sobre métodos." },
              { texto: "Las cinco preguntas reales fueron todas sobre el movimiento chicano y los Young Lords.", correcta: false, explicacion: "Ninguna de las cinco reales fue sobre el movimiento chicano solo." },
              { texto: "Tres preguntas fueron sobre métodos de protesta y dos sobre Tijerina.", correcta: false, explicacion: "Métodos y Tijerina son posibles, no reales; 3 fueron Chávez y 2 reforma." },
              { texto: "La mayoría de las reales fueron comparaciones con el movimiento afroamericano.", correcta: false, explicacion: "La comparación es una pregunta posible, no una de las cinco reales." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · El mapa del tema + los 4 historiadores",
        html: `
          <h3>Cuatro brazos, un solo hilo</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Brazo</th><th>Líderes / grupos</th><th>Método</th><th>Logró</th><th>No logró / lo hundió</th></tr></thead>
            <tbody>
              <tr><td>Trabajadores agrícolas (UFW) 1962–75</td><td>Chávez, Huerta, Itliong, Padilla, Ross</td><td>Huelga + boicot nacional + marcha + ayuno; no violencia estricta</td><td>Contratos de Delano (1970); ALRA (1975): primer sindicato agrícola duradero de EE.UU.</td><td>Nunca pasó del 5–10%; colapso 1973 (Teamsters); purgas 1977–81; de 70.000 (1972) a 15.000 (80s)</td></tr>
              <tr><td>Movimiento chicano 1965–75</td><td>Tijerina, Gonzales, Gutiérrez, Brown Berets, MEChA, Salazar</td><td>Walkouts, ocupaciones, marchas, partido (Raza Unida), acción armada (Tijerina)</td><td>Estudios chicanos (Plan de Santa Bárbara 1969); Raza Unida gana Crystal City (1970); identidad («Chicano», «Aztlán»)</td><td>Sin ley federal propia; represión (Moratoria 1970, COINTELPRO); división Gonzales–Gutiérrez; sexismo; se disuelve en MALDEF/NCLR</td></tr>
              <tr><td>Derechos laborales</td><td>UFW, CRLA, CSO</td><td>Litigio + contrato + ley estatal</td><td>ALRA 1975; fin del azadón corto (1975); mínimo federal a algunos agrícolas (1966)</td><td>Los agrícolas siguen fuera de la ley federal (NLRA 1935); sin horas extra; pesticidas (ayuno de 1988)</td></tr>
              <tr><td>Inmigración y reforma</td><td>CSO, Huerta (lobby), MALDEF; Congreso (Johnson 1965, Reagan 1986)</td><td>Lobby + litigio (Plyler 1982)</td><td>Fin del Bracero (1964); Hart-Celler (1965) elimina cuotas; IRCA 1986: amnistía ~2,7 M</td><td>Tope al hemisferio occidental (1968, 1976); crece la indocumentada; Gatekeeper y Prop. 187 (1994)</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Los cuatro líderes: «C·T·G·G»</b> = Chávez (campo, California, no violencia) → Tijerina (tierra, Nuevo México, armas) → Gonzales (ciudad, Denver, identidad/juventud) → Gutiérrez (voto, Texas, partido). Agregá una quinta letra para el Noreste: Jiménez (Young Lords, Chicago/Nueva York, puertorriqueños).</div>

          <h3>Los 4 historiadores</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Historiador</th><th>Es…</th><th>Tesis en una línea</th><th>Lo usás para</th></tr></thead>
            <tbody>
              <tr><td>Matt García (2012)</td><td>Revisionista, <i>From the Jaws of Victory</i></td><td>El boicot (obra colectiva) ganó; Chávez perdió lo ganado: La Paz, Synanon 1977, purgas 1977–81, no organizar tras la ALRA. Derrota «autoinfligida».</td><td>Límites; matizar la importancia de Chávez</td></tr>
              <tr><td>Carlos Muñoz Jr. (1989/2007)</td><td>Militante-académico, <i>Youth, Identity, Power</i>; East L.A. 13</td><td>Movimiento juvenil de identidad que rompió con la generación mexicano-americana; legado cultural e institucional, no leyes.</td><td>Chicanos, estudiantes; Chávez como símbolo adoptado; puente con 17.5</td></tr>
              <tr><td>Terry Anderson (1995)</td><td>Optimista, <i>The Movement and the Sixties</i></td><td>Un Movimiento, dos olas; el Brown Power aplicó las tácticas de los negros; balance positivo.</td><td>Éxitos; comparación; Hart-Celler como hija de los derechos civiles</td></tr>
              <tr><td>Todd Gitlin (1987)</td><td>Autocrítico, ex SDS, <i>Years of Hope, Days of Rage</i></td><td>De la esperanza a la rabia: los nacionalismos de identidad fragmentaron a la izquierda y regalaron la política a Nixon.</td><td>Decadencia chicana y de los Young Lords; central en 17.5</td></tr>
            </tbody>
          </table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Hay demasiados «García»: Matt García (revisionista, 2012), Richard A. García (coautor del libro heroico de 1995 con Griswold del Castillo) e Ignacio García (Chicanismo, 1997). Escribí siempre «el historiador Matt García» y «la lectura clásica de Griswold del Castillo». Y no confundas a Dolores Huerta con Antonia Hernández (MALDEF) ni a Rubén Salazar (periodista muerto en 1970) con otro Salazar.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El movimiento hispanoamericano no fue uno sino varios: el sindicalismo no violento de Chávez en California, la reclamación armada de tierras de Tijerina en Nuevo México, el nacionalismo cultural de Gonzales en Denver, la política electoral de Gutiérrez en Texas y el activismo urbano de los Young Lords puertorriqueños convergieron entre 1965 y 1972, y se separaron después de 1973 cuando cada uno chocó con sus propios límites.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué sostiene Matt García sobre la caída de la UFW?", etiqueta: "historiador",
            opciones: [
              { texto: "Que fue en parte «autoinfligida»: La Paz, Synanon, purgas y no organizar tras la ALRA.", correcta: true, explicacion: "Correcto: separa el símbolo (intacto) del sindicato (destruido)." },
              { texto: "Que la provocaron únicamente los enemigos externos: los Teamsters, Reagan, Nixon y el gobernador Deukmejian.", correcta: false, explicacion: "Esa es la lectura heroica de Griswold del Castillo, que García revisa." },
              { texto: "Que la UFW nunca existió como sindicato real ni firmó contratos verdaderos.", correcta: false, explicacion: "Firmó contratos (Schenley 1966, Delano 1970); García no niega eso." },
              { texto: "Que Chávez fue siempre un santo moral sin ninguna responsabilidad en el declive.", correcta: false, explicacion: "García critica el «santo» como construcción posterior; le atribuye responsabilidad." }
            ] },
          { pregunta: "La mnemotecnia «C·T·G·G» (+J) sirve para recordar…", etiqueta: "concepto",
            opciones: [
              { texto: "Chávez, Tijerina, Gonzales, Gutiérrez (+ Jiménez): líderes, estados y métodos.", correcta: true, explicacion: "Correcto: cuatro hombres, cuatro estados, cuatro métodos, y Jiménez para el Noreste." },
              { texto: "Los cuatro historiadores obligatorios del tema: Matt García, Carlos Muñoz, Anderson y Gitlin.", correcta: false, explicacion: "Esos son los historiadores, no la regla de los líderes." },
              { texto: "Las cuatro leyes migratorias clave de 1924, 1952, 1965 y 1986.", correcta: false, explicacion: "Para las leyes la regla es «24·52·65·86·94», no C·T·G·G." },
              { texto: "Los cuatro métodos de la UFW: huelga, boicot, marcha y ayuno.", correcta: false, explicacion: "Esos cuatro métodos son «H·B·M·A», no C·T·G·G." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Contexto: de 1848 a los braceros",
        html: `
          <p>Quien sabe por qué los mexicano-americanos eran «ciudadanos de segunda» en 1960 escribe párrafos causales; quien no, narra. Tres ideas: una frontera que se movió, una mano de obra que se importaba y se expulsaba según la economía, y una generación de padres que pidió respeto y consiguió poco.</p>

          <h3>Los cimientos</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Capa</th><th>Hechos con fecha</th><th>Qué produce</th></tr></thead>
            <tbody>
              <tr><td>Conquista</td><td>1848 Tratado de Guadalupe Hidalgo: México cede la mitad del territorio; ~80–100.000 mexicanos pasan a ser ciudadanos con promesa de respetar sus tierras; entre 1850 y 1900 pierden la mayoría de las mercedes.</td><td>El agravio fundacional que Tijerina reclama y que el nacionalismo convierte en «Aztlán». Acuña: «América ocupada», colonia interna.</td></tr>
              <tr><td>Migración y Repatriación</td><td>~1 M entra entre 1910 y 1930; 1929–36 «Repatriación»: 400.000–1 M de personas de origen mexicano (muchas ciudadanas) deportadas. La familia Chávez pierde su granja en Arizona (1937–39).</td><td>Patrón que se repite: se los trae cuando faltan brazos y se los expulsa cuando sobran.</td></tr>
              <tr><td>Programa Bracero</td><td>1942–1964: ~4,6 M de contratos en 22 años; DE CLASE a fines de los 50 ingresaban más de 400.000 por año. Fin el 31-XII-1964 (lobby de la CSO, Huerta).</td><td>Mientras hubo braceros fue imposible sindicalizar el campo. La huelga de Delano empieza en 1965, nueve meses después del fin: no es casualidad, es causa.</td></tr>
              <tr><td>Exclusión legal</td><td>1935 NLRA (Wagner) da el derecho a sindicalizarse pero excluye a los agrícolas y domésticos; 1938 FLSA (salario mínimo) también. En 1965 un cosechador gana ~1,10–1,25 $/h, sin baños ni agua, con niños trabajando y el «cortito»; esperanza de vida: 49 años.</td><td>El trabajador agrícola era el único obrero de EE.UU. sin derecho legal a organizarse: la base estructural de la organización de Chávez y Huerta.</td></tr>
              <tr><td>Discriminación cotidiana</td><td>Escuelas «para mexicanos», carteles «No Mexicans», barrios (East L.A., Sal Si Puedes). DE CLASE En L.A. en los 60, más de 130.000 niños sufrían segregación escolar. 1943: disturbios Zoot Suit.</td><td>La segregación de facto que el movimiento chicano ataca en 1968.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>De jure vs. de facto:</b> de jure = por ley (Sur contra los negros); de facto = por costumbre, barrio o decisión de cada escuela. Los mexicano-americanos sufrieron sobre todo la segunda: por eso no hubo una «Brown» para ellos y había que ganar escuela por escuela.</div>

          <h3>Los otros hispanos (el profesor los pide) DE CLASE</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Grupo</th><th>Hechos del banco</th></tr></thead>
            <tbody>
              <tr><td>Puertorriqueños</td><td>1917 Ley Jones: ciudadanos; migran sin restricciones. Para 1950 East Harlem superaba los 300.000 (Oxford). Base urbana de los Young Lords; el grupo al que la ley de 1965 no afecta.</td></tr>
              <tr><td>Cubanos</td><td>1959 y siguientes: ~200.000 a Florida (Oxford), muchos profesionales y de clase alta. 1966: residencia permanente para los llegados desde 1959 (Ley de Ajuste Cubano). El grupo que el Estado acogió: trato privilegiado.</td></tr>
            </tbody>
          </table></div>

          <h3>La «generación mexicano-americana» (los padres)</h3>
          <ul>
            <li><b>LULAC (1929):</b> clase media, inglés, asimilación; Mendez v. Westminster (1946–47): fin de la segregación escolar en California, 7 años antes de Brown. Los chicanos la ven como «vendida».</li>
            <li><b>American GI Forum (1948):</b> veteranos; caso Longoria (1949). Abrió el camino (Viva Kennedy 1960) pero asimilacionista.</li>
            <li><b>CSO (1947):</b> fundada por Fred Ross (discípulo de Alinsky); «casa por casa», registro de votantes. Elige a Roybal (1949); recluta a Chávez (1952) y a Huerta (1955). DE CLASE el esquema de Nov 2018 cuenta el registro de votantes de Chávez en la CSO como contribución política.</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Cuando Chávez fundó la NFWA en 1962, los mexicano-americanos llevaban tres décadas de organización respetable —LULAC, el GI Forum, la CSO— que había ganado casos judiciales (Mendez, Hernandez) y un concejal en Los Ángeles, pero no había tocado ni el campo ni el barrio. La novedad de los años sesenta no fue el reclamo sino el método: de la petición a la protesta.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué la huelga de Delano fue posible en 1965 y no antes?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Porque el 31-XII-1964 terminó el Programa Bracero, que daba a los growers rompehuelgas.", correcta: true, explicacion: "Correcto: sin braceros ya no había mano de obra para romper la huelga; es causa, no casualidad." },
              { texto: "Porque en 1965 el Congreso extendió la ley Wagner de 1935 a los trabajadores agrícolas.", correcta: false, explicacion: "La NLRA nunca incluyó a los agrícolas; siguen excluidos hoy." },
              { texto: "Porque los productores de California aceptaron voluntariamente negociar contratos.", correcta: false, explicacion: "Respondieron con esquiroles, pesticidas y arrestos, no con negociación." },
              { texto: "Porque Chávez contaba desde 1962 con una ley estatal que protegía la huelga.", correcta: false, explicacion: "La ley estatal (ALRA) recién llega en 1975, diez años después." }
            ] },
          { pregunta: "La ley Wagner de 1935 (NLRA) importa en este tema porque…", etiqueta: "concepto",
            opciones: [
              { texto: "Dio el derecho a sindicalizarse pero excluyó a los trabajadores agrícolas y domésticos.", correcta: true, explicacion: "Correcto: por eso la UFW necesitó una ley estatal (la ALRA de 1975)." },
              { texto: "Concedió por primera vez el salario mínimo federal a todos los cosechadores de California.", correcta: false, explicacion: "La NLRA no es de salario; el mínimo (FLSA 1938) también excluía a los agrícolas." },
              { texto: "Prohibió los boicots de consumidores como método de protesta sindical.", correcta: false, explicacion: "No prohibió boicots; eso lo intentó la Prop. 22 de 1972 en California." },
              { texto: "Obligó a los growers a reconocer a la UFW como sindicato nacional.", correcta: false, explicacion: "Al contrario: al excluir a los agrícolas los dejó sin protección federal." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Chávez y la UFW: escalera de la victoria",
        html: `
          <h3>Quién es: la biografía que explica el método</h3>
          <p>Nace el 31-III-1927 cerca de Yuma (Arizona); la granja familiar se pierde en la Depresión. ~30 escuelas, deja de estudiar en 8.º grado. Marina (1946–48). Tres influencias: (1) el padre McDonnell le enseña la doctrina social católica (Rerum Novarum) y la vida de Gandhi; (2) Fred Ross lo recluta en la CSO (1952) y le enseña el método Alinsky (reuniones en casas, uno a uno); DE CLASE dirige campañas de registro de votantes y es director nacional de la CSO (1958–62); (3) Martin Luther King: la no violencia como estrategia y como fe.</p>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Chávez unió tres tradiciones que nadie había juntado en el campo estadounidense: la organización comunitaria de Alinsky aprendida en la CSO, la no violencia de Gandhi y de King, y la religiosidad popular mexicana; el resultado fue un sindicato que se parecía más a un movimiento religioso que a la AFL-CIO.»</div>

          <h3>La escalera de la victoria (1965–1970)</h3>
          <ol class="escalera">
            <li><b>8-IX-1965 · Empieza Delano:</b> la AWOC filipina (Larry Itliong) va a la huelga. El 16-IX la NFWA se suma.</li>
            <li><b>1965–66 · Represión patronal:</b> DE CLASE rompehuelgas, intimidación física y fumigación con pesticidas contra los manifestantes. Reuther (UAW) da 5.000 $/mes; empieza el boicot a Schenley.</li>
            <li><b>III-1966 · Kennedy en Delano:</b> Robert Kennedy reprende al sheriff de Kern por arrestar huelguistas antes de que violen la ley.</li>
            <li><b>III–IV-1966 · Peregrinación a Sacramento:</b> ~300 millas, 25 días, bajo la Virgen de Guadalupe; Plan de Delano (Luis Valdez). Llegan ~10.000; el 6-IV Schenley firma (DE CLASE negocia Huerta).</li>
            <li><b>VIII-1966 · DiGiorgio y la fusión:</b> la NFWA gana la elección (30-VIII); NFWA y AWOC se fusionan en la UFWOC, AFL-CIO.</li>
            <li><b>VIII-1967 – I-1968 · Giumarra y el boicot total:</b> en I-1968 la UFWOC declara el boicot a TODA la uva de mesa. Organizadores a 40+ ciudades (Huerta en NY, Medina en Chicago, Govea en Canadá, Ganz estratega).</li>
            <li><b>II–III-1968 · Primer ayuno:</b> Chávez ayuna solo con agua para recomprometer al movimiento con la no violencia. Lo rompe con Robert Kennedy el 10-III ante ~8.000 personas.</li>
            <li><b>1969 · El Estado contra el boicot:</b> Reagan come uvas en público; Nixon y el Pentágono multiplican las compras de uva para Vietnam (de ~0,5 a ~2,5 M de libras). Chávez en la portada de Time.</li>
            <li><b>1970 · La opinión pública:</b> ~17 M de estadounidenses dejan de comprar uvas (encuesta Harris); el Comité de Obispos media.</li>
            <li><b>29-VII-1970 · Victoria de Delano:</b> 26 productores firman contratos de 3 años: 1,80 $/h + 20 c por caja, bolsa de trabajo, plan de salud «Robert F. Kennedy», prohibición del DDT.</li>
          </ol>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> El banco dice que el ayuno duró <b>23 días</b>; la mayoría de las fuentes cuentan 25 (14-II a 10-III). Usá «23» si querés coincidir con el esquema, o «casi cuatro semanas». Y sobre el boicot: «dura más de tres años y termina con contratos sindicales», «uno de los mejores ejemplos de eficacia de la acción no violenta y económica».</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>La fórmula de Delano: «H·B·M·A»</b> = Huelga (1965) → Boicot (1965/68) → Marcha (1966) → Ayuno (1968). Cada una compensa el límite de la anterior.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Tres errores que te bajan a banda 9: (1) «fundó la UFW en 1965» (NFWA 1962 → UFWOC 1966 → UFW 1972); (2) «Chávez inició la huelga de Delano» (la iniciaron los filipinos; el banco lo marca explícitamente); (3) panegírico sin límites. DE CLASE Los tres esquemas (2017, 2018, 2024) piden logros Y límites.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Quién inició la huelga de Delano el 8 de septiembre de 1965?", etiqueta: "trampa",
            opciones: [
              { texto: "La AWOC filipina de Larry Itliong; la NFWA se sumó el 16-IX.", correcta: true, explicacion: "Correcto: el banco lo marca explícitamente; el movimiento no fue solo mexicano ni solo de Chávez." },
              { texto: "César Chávez y la NFWA, que convocaron la huelga desde Delano el 8 de septiembre.", correcta: false, explicacion: "La NFWA se sumó recién el 16-IX; la empezaron los filipinos." },
              { texto: "Los Teamsters, que buscaban firmar contratos con los growers de Delano.", correcta: false, explicacion: "Los Teamsters firmaban «contratos dulces» con los patrones, no la huelga." },
              { texto: "El gobernador Jerry Brown, para presionar a los productores de uva.", correcta: false, explicacion: "Brown llega al gobierno mucho después y firma la ALRA en 1975." }
            ] },
          { pregunta: "¿Qué incluyeron los contratos de Delano del 29-VII-1970?", etiqueta: "fecha",
            opciones: [
              { texto: "1,80 $/h, plan de salud, bolsa de trabajo y prohibición del DDT.", correcta: true, explicacion: "Correcto: 26 productores, contratos de 3 años; el logro concreto máximo de la UFW." },
              { texto: "El reconocimiento federal de la UFW como único sindicato agrícola del país.", correcta: false, explicacion: "No hubo reconocimiento federal; los agrícolas siguen fuera de la NLRA." },
              { texto: "Una ley estatal permanente que daba el derecho a organizarse.", correcta: false, explicacion: "Eso es la ALRA de 1975; los de 1970 eran contratos privados de 3 años." },
              { texto: "La amnistía para los trabajadores indocumentados de los viñedos.", correcta: false, explicacion: "La amnistía es de 1986 (IRCA); nada que ver con los contratos de 1970." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Chávez: colapso, ley y la tabla de los cuatro lados",
        html: `
          <h3>Del pico al colapso y a la ley (1970–1975)</h3>
          <ol class="escalera">
            <li><b>1970 · Salinas:</b> los productores de lechuga firman «contratos dulces» con los Teamsters. Huelga + boicot a la lechuga. 4-XII: Chávez preso en Salinas (20 días); lo visitan Coretta Scott King y Ethel Kennedy.</li>
            <li><b>1972 · Pico y «Sí se puede»:</b> DE CLASE la UFW llega a ~70.000 personas (booklet). Arizona prohíbe huelgas; Chávez ayuna 24 días y Huerta acuña «¡Sí se puede!». En California derrota la Proposición 22 (prohibir boicots) 58–42. La UFWOC pasa a ser la UFW.</li>
            <li><b>1973 · El colapso:</b> vencen los contratos de 1970; los growers firman con los Teamsters. Huelga con 3.500+ arrestos; en VIII mueren dos huelguistas. La UFW cae de ~150 contratos a ~12 y a ~6.500 afiliados.</li>
            <li><b>1974 · La «campaña contra ilegales»:</b> la UFW denuncia indocumentados usados como esquiroles ante el INS; protesta chicana; la UFW rectifica en 1974–75.</li>
            <li><b>4-VI-1975 · ALRA:</b> Jerry Brown firma la ley: derecho a organizarse, elecciones secretas, Junta (ALRB). Primera ley del país continental para los agrícolas desde la Wagner de 1935.</li>
          </ol>

          <h3>Decadencia (1977–1993): el fracaso «autoinfligido»</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Problema</th><th>Datos</th><th>Historiografía</th></tr></thead>
            <tbody>
              <tr><td>Aislamiento en La Paz</td><td>Sede en Keene, lejos de los campos; UFW concebida como comunidad/movimiento, no sindicato.</td><td>Bardacke: «líder de movimiento, no sindicalista».</td></tr>
              <tr><td>«Juego» de Synanon (1977)</td><td>Técnica de confrontación grupal de la secta Synanon para «purificar» al personal; paranoia sobre «comunistas».</td><td>Pawel y M. García: punto de no retorno.</td></tr>
              <tr><td>Purgas (1977–81)</td><td>Se van o son expulsados Vera Cruz (1977), Jerry Cohen (1979), Ganz, Medina, Govea, Padilla (1980–81).</td><td>M. García: «los que ganaron el boicot fueron los primeros en irse».</td></tr>
              <tr><td>Estado hostil</td><td>El gobernador Deukmejian (1983–91) nombra aliados de los growers en la ALRB; la ley deja de aplicarse.</td><td>La causa externa: el derecho existía, la Junta no lo hacía cumplir.</td></tr>
              <tr><td>Caída de afiliados</td><td>DE CLASE más de 50.000 en los 70, unos 15.000 a mediados de los 80. Valle Imperial 1979 (Contreras muerto), ayuno de 36 días (1988).</td><td>Esta cifra (70.000 → 15.000) es tu límite estrella.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> El debate en una línea: Griswold del Castillo & R. García (1995) explican la decadencia por los enemigos (Teamsters, growers, Reagan, Deukmejian) y salvan al líder moral; Matt García (2012) la explica por el propio Chávez (La Paz, Synanon, purgas). El banco se queda en el medio. Tu juicio (banda 13+): las dos causas se retroalimentan, pero el orden temporal favorece a García: las purgas (1977–81) son anteriores a Deukmejian (1983).</div>

          <h3>La importancia de Chávez: la tabla de los cuatro lados DE CLASE</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Lado</th><th>Argumento con evidencia</th></tr></thead>
            <tbody>
              <tr><td>1. Lo que hizo (logros)</td><td>Primer sindicato agrícola duradero; contratos de Schenley (1966) y Delano (1970); 70.000 afiliados (1972); ALRA (1975); fin del «cortito» (1975); derrota de la Prop. 22 (1972); pesticidas en la agenda (1984–88).</td></tr>
              <tr><td>2. Lo que representó (símbolo)</td><td>Primer líder hispano reconocido nacionalmente (Time 1969); no violencia aplicada a una minoría no negra; puente entre iglesia, sindicatos, estudiantes y demócratas; adoptado por los chicanos aunque no fuera nacionalista. Banco: «orgullo hispano».</td></tr>
              <tr><td>3. Lo que dejó (legado)</td><td>Una generación de organizadores (Ganz → campañas de Obama; Medina → SEIU; Huerta → feminismo); el boicot como arma reutilizable; «Sí se puede»; feriado, Medalla de la Libertad; la agenda de pesticidas.</td></tr>
              <tr><td>4. Lo que no hizo / deshizo (límites)</td><td>Nunca organizó a más del 5–10% de los agrícolas; colapso de 1973; de 70.000 (1972) a 15.000 (80s); marginó a filipinos e indocumentados (1974); purgas 1977–81; ALRA vacía sin organización que la usara; no alcanzó a los hispanos urbanos, puertorriqueños ni cubanos.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La importancia de Chávez es mayor como símbolo que como sindicalista: la UFW nunca representó a más de una décima parte de los trabajadores agrícolas y cayó de 70.000 afiliados en 1972 a 15.000 a mediados de los ochenta, pero el boicot de 1968–70 demostró que una minoría invisible podía mover a 17 millones de consumidores, la ALRA de 1975 convirtió esa presión en derecho, y su figura dio al movimiento chicano el líder moral que el propio movimiento no había producido.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es el «límite estrella» del balance de Chávez según el banco?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "La UFW cayó de ~70.000 afiliados (1972) a ~15.000 (mediados de los 80).", correcta: true, explicacion: "Correcto: la cifra que cualquier evaluación debe incluir como límite." },
              { texto: "La UFW jamás logró firmar ni un solo contrato con los productores de California.", correcta: false, explicacion: "Firmó varios (Schenley 1966, Delano 1970); el problema fue que no duraron." },
              { texto: "Chávez perdió todas las elecciones sindicales frente a los Teamsters desde 1965.", correcta: false, explicacion: "Ganó varias (DiGiorgio 1966); el colapso llegó en 1973 al vencer los contratos." },
              { texto: "El boicot a la uva nunca consiguió el apoyo de ningún consumidor urbano.", correcta: false, explicacion: "~17 M de consumidores dejaron de comprar uva; el boicot fue su mayor éxito." }
            ] },
          { pregunta: "¿Por qué la cronología favorece a Matt García sobre Griswold del Castillo?", etiqueta: "historiador",
            opciones: [
              { texto: "Porque las purgas (1977–81) son anteriores a Deukmejian (1983).", correcta: true, explicacion: "Correcto: el daño interno precede a la hostilidad externa, como sostiene García." },
              { texto: "Porque Griswold del Castillo escribió su libro muchos años antes que Matt García.", correcta: false, explicacion: "La fecha de publicación no decide el argumento; lo decide el orden de los hechos." },
              { texto: "Porque Deukmejian vació la ALRB antes de que Chávez fundara la UFW.", correcta: false, explicacion: "Deukmejian llega en 1983, mucho después de la fundación (1962)." },
              { texto: "Porque los Teamsters nunca firmaron contratos con los growers de California.", correcta: false, explicacion: "Sí firmaron «contratos dulces» (1966, 1970, 1973); eso es parte del relato externo." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Movimiento chicano: identidad, juventud, poder",
        html: `
          <p>Si la UFW es un sindicato con un líder, el movimiento chicano es una constelación: tres líderes regionales, una generación de estudiantes, un partido, una milicia, una prensa y un vocabulario. Muñoz es tu guía; Gitlin tu contrapeso. DE CLASE El banco lo resume: «logros de identidad, educación y participación junto con desigualdad persistente, represión y divisiones internas».</p>

          <h3>Los tres líderes regionales</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Líder</th><th>Qué hizo</th><th>Balance</th></tr></thead>
            <tbody>
              <tr><td>Reies López Tijerina (Nuevo México)</td><td>Alianza Federal de Mercedes (1963). DE CLASE X-1966 ocupa Kit Carson; 5-VI-1967 asalto al juzgado de Tierra Amarilla para «arrestar» al fiscal; Guardia Nacional y tanques; preso 1969–71.</td><td>Único que usa la acción armada: «nacionalismo con acción directa y confrontación» (banco). No recupera una hectárea; aislado tras 1971.</td></tr>
              <tr><td>Rodolfo «Corky» Gonzales (Denver)</td><td>Cruzada por la Justicia (1966); 1967 poema «Yo soy Joaquín» (DE CLASE «la cultura como herramienta de movilización política»); III-1969 Conferencia de Denver → Plan Espiritual de Aztlán (Alurista).</td><td>Ideólogo del nacionalismo cultural y líder de la juventud (Muñoz). Límite: nacionalismo sin estrategia electoral (Gitlin: identidad sin poder).</td></tr>
              <tr><td>José Ángel Gutiérrez (Texas)</td><td>MAYO (1967); Partido de la Raza Unida (LRUP), Crystal City (I-1970). XII-1969 walkout de 1.700 estudiantes; IV-1970 LRUP gana 2 concejos y 2 juntas; X-1971 LRUP estatal: 0 de 11 cargos; IX-1972 El Paso (vence a Gonzales).</td><td>El único que convierte la identidad en votos y cargos (banco: «éxito político local»). Límite: trasladar la base local al nivel estatal; se extingue h. 1978.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Mercedes de tierra</b> = concesiones de la Corona española y de México que el Tratado de 1848 prometió respetar y no se cumplió. <b>Plan Espiritual de Aztlán</b> = manifiesto de Denver (1969): nacionalismo + autodeterminación + orgullo mestizo. <b>Raza Unida</b> = partido chicano (1970–78): «control comunitario» donde los chicanos eran mayoría.</div>

          <h3>La juventud: la escalera estudiantil (el corazón de Muñoz)</h3>
          <ol class="escalera">
            <li><b>1967 · Brown Berets:</b> David Sánchez funda en East L.A. los Boinas Cafés (modelo: Panteras Negras). Hasta ~5.000 en 90 capítulos; se disuelven en 1972 (COINTELPRO).</li>
            <li><b>6-III-1968 · Blowouts de East L.A.:</b> DE CLASE ~15.000 estudiantes abandonan las aulas y presentan 39 demandas (educación bicultural/bilingüe, maestros chicanos). Los organizan Sal Castro, los Brown Berets y UMAS. «East L.A. 13» procesados; cargos anulados en 1970.</li>
            <li><b>III-1969 · Denver:</b> Plan Espiritual de Aztlán; los jóvenes adoptan «chicano» como nombre.</li>
            <li><b>IV-1969 · Santa Bárbara:</b> Plan de Santa Bárbara → Estudios Chicanos, admisiones (EOP) y MEChA. La institucionalización en la universidad: el legado más duradero según Muñoz.</li>
            <li><b>V-1971 · Houston:</b> Conferencia de Mujeres por la Raza (~600 chicanas): denuncian el sexismo del movimiento. Muñoz (2007) lo reconoce como límite.</li>
            <li><b>29-VIII-1970 · Moratoria Chicana:</b> 20–30.000 personas; 3 muertos, entre ellos Rubén Salazar; ningún policía procesado. Los mexicano-americanos eran ~19–20% de los muertos del Suroeste en Vietnam.</li>
          </ol>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Sobre los blowouts: «La junta escolar acepta la mayoría de las demandas, pero después incumple muchas»: logro inmediato, cambios parciales y frágiles. «Los jóvenes se convirtieron en actores centrales del movimiento» = la tesis de Muñoz con palabras del profesor.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El movimiento chicano ganó lo que era cultural e institucional —un nombre, un mito, departamentos universitarios, una élite política— y perdió lo que era político y estructural: ni Aztlán, ni la tierra de Tijerina, ni el partido de Gutiérrez sobrevivieron a 1978. Muñoz llama a eso "el poder de la identidad"; Gitlin, "identidad sin poder".»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué líder chicano usó la acción armada?", etiqueta: "concepto",
            opciones: [
              { texto: "Tijerina, con el asalto al juzgado de Tierra Amarilla (1967); no recuperó una hectárea.", correcta: true, explicacion: "Correcto: único que usó armas; preso 1969–71 y aislado después." },
              { texto: "Gutiérrez, que en 1970 tomó por la fuerza de las armas el ayuntamiento entero de Crystal City, en Texas.", correcta: false, explicacion: "Gutiérrez usó la vía electoral (Raza Unida), no las armas." },
              { texto: "Gonzales, que ocupó con milicias la Universidad de California en Santa Bárbara.", correcta: false, explicacion: "Gonzales fue el ideólogo cultural (Cruzada, «Yo soy Joaquín»), no armado." },
              { texto: "Chávez, que dirigió patrullas armadas contra los growers de Delano.", correcta: false, explicacion: "Chávez fue estrictamente no violento; condenó la violencia de Tijerina." }
            ] },
          { pregunta: "Según Muñoz, ¿cuál fue el legado más duradero del movimiento chicano?", etiqueta: "historiador",
            opciones: [
              { texto: "La institucionalización cultural: estudios chicanos, MEChA y una élite política.", correcta: true, explicacion: "Correcto: su legado fue cultural e institucional, no leyes federales." },
              { texto: "Una ley federal del Congreso que reconoció el derecho de los chicanos a la tierra de Aztlán.", correcta: false, explicacion: "Nunca hubo ley federal chicana; la tierra de Tijerina no se recuperó." },
              { texto: "La creación de un sindicato agrícola nacional más grande que la UFW.", correcta: false, explicacion: "El sindicato agrícola fue la UFW; no fue obra del movimiento chicano." },
              { texto: "El control permanente del Partido Demócrata en todo el estado de Texas.", correcta: false, explicacion: "La Raza Unida ganó solo local (Crystal City) y se extinguió h. 1978." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Young Lords y la relación Chávez–chicanos",
        html: `
          <h3>Los Young Lords: el movimiento puertorriqueño urbano DE CLASE</h3>
          <ol class="escalera">
            <li><b>1959 · Origen:</b> nacen en Chicago como pandilla de barrio que protege territorio en Lincoln Park.</li>
            <li><b>1967 · Transformación:</b> José «Cha Cha» Jiménez los convierte en organización nacionalista revolucionaria tras su experiencia carcelaria y el contacto con King, Malcolm X, Albizu Campos y Fred Hampton (Panteras Negras).</li>
            <li><b>1967–69 · Expansión:</b> capítulos en East Harlem (300.000 puertorriqueños en 1950) y otras ciudades del Noreste.</li>
            <li><b>Verano 1969 · «Garbage Offensive»:</b> acumulan y queman la basura sin recoger en El Barrio para obligar a la ciudad a prestar servicios.</li>
            <li><b>1969–70 · Programas y tomas:</b> desayunos para niños, guarderías, pruebas de tuberculosis y de plomo; ocupan una iglesia (XII-1969, «Iglesia del Pueblo»), el Seminario McCormick (Chicago) y el hospital Lincoln (VII-1970); programa de 13 puntos.</li>
            <li><b>Hasta 1972 · Represión:</b> policía de Chicago y COINTELPRO del FBI vigilan y hostigan.</li>
            <li><b>Fines de 1972 · Declive:</b> se encierran en la «pureza ideológica socialista y nacionalista» y pierden conexión con los simpatizantes.</li>
          </ol>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Los Young Lords muestran, en versión puertorriqueña y urbana, el mismo arco que los Brown Berets y la Cruzada por la Justicia: una pandilla politizada por el ejemplo de las Panteras Negras (1967), una fase de acción directa y servicios comunitarios (1969–70), la represión del COINTELPRO y el repliegue en la pureza ideológica (1972). Como sostiene Judson Jeffries, su legado no fue institucional sino identitario: "un nuevo tipo de puertorriqueño".»</div>

          <h3>Chávez y los chicanos: la relación que el examinador quiere ver</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Por qué los chicanos adoptaron a Chávez</th><th>Por qué Chávez no fue chicano</th></tr></thead>
            <tbody>
              <tr><td>Primer mexicano-americano con reconocimiento nacional; su águila y su «¡Huelga!» aparecen en los walkouts de 1968; estudiantes de Berkeley, UCLA y Texas fueron a Delano; el Plan de Delano (1966) es el modelo retórico de los planes de 1969; Luis Valdez pasa del Teatro Campesino al teatro chicano. Muñoz: la UFW fue «la escuela» de una generación.</td><td>Rechazó el nacionalismo («la Causa no es de una raza»), organizó a filipinos, yemeníes y blancos, dependió de aliados liberales y de la AFL-CIO, condenó la violencia de Tijerina y de los Brown Berets, y su campaña contra los indocumentados (1974) lo enfrentó con los grupos chicanos. Su objetivo era un contrato, no Aztlán.</td></tr>
            </tbody>
          </table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No escribas «el movimiento chicano liderado por César Chávez». Escribí: «el movimiento hispanoamericano, cuya figura más visible fue Chávez y cuyo ala nacionalista, el movimiento chicano, tuvo otros líderes (Tijerina, Gonzales, Gutiérrez)». DE CLASE Regla final del banco: «no confundas movimiento hispano con un solo grupo».</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Jeffries (DE CLASE) mide el legado de los Young Lords por identidad y movilización, no por reformas: «un nuevo tipo de puertorriqueño», menos pasivo y con mayor conciencia política. Misma lógica que Muñoz usa para los chicanos. Gitlin, en cambio, lee el declive de 1972 como el paso «de la esperanza a la rabia».</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo conviene describir la relación entre Chávez y el movimiento chicano?", etiqueta: "trampa",
            opciones: [
              { texto: "Chávez fue su símbolo adoptado, pero no su líder ni compartía su nacionalismo.", correcta: true, explicacion: "Correcto: organizó a filipinos y blancos y rechazó Aztlán; su objetivo era un contrato." },
              { texto: "Chávez fundó y dirigió el movimiento chicano desde la ciudad de Denver.", correcta: false, explicacion: "No lo dirigió; Denver era de Gonzales. Chávez era sindical, no nacionalista." },
              { texto: "Chávez y los chicanos tuvieron siempre exactamente los mismos objetivos políticos.", correcta: false, explicacion: "Chávez quería contratos; los chicanos, identidad, tierra y poder electoral." },
              { texto: "Chávez rechazó públicamente a los chicanos y nunca fue adoptado como símbolo.", correcta: false, explicacion: "Sí lo adoptaron (su águila en los walkouts de 1968), aunque él no fuera nacionalista." }
            ] },
          { pregunta: "Según Jeffries, el legado de los Young Lords fue…", etiqueta: "historiador",
            opciones: [
              { texto: "Identitario: «un nuevo tipo de puertorriqueño», menos pasivo y con más conciencia política.", correcta: true, explicacion: "Correcto: mide el legado por identidad y movilización, no por reformas (como Muñoz con los chicanos)." },
              { texto: "Una nueva ley federal del Congreso que por fin reconoció la ciudadanía de todos los puertorriqueños del Noreste.", correcta: false, explicacion: "Los puertorriqueños ya eran ciudadanos desde la Ley Jones de 1917." },
              { texto: "La creación de un partido político puertorriqueño que gobernó Nueva York.", correcta: false, explicacion: "Los Young Lords no fundaron un partido gobernante; decayeron hacia 1972." },
              { texto: "La firma de contratos sindicales para los trabajadores agrícolas de Chicago.", correcta: false, explicacion: "Eso describe a la UFW; los Young Lords eran urbanos y comunitarios." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Reforma inmigratoria: la escalera 1924–2006",
        html: `
          <p>Dos de las cinco preguntas reales (Nov 2021 y Mayo 2022) son sobre esto y el profesor armó dos fichas enteras. Nov 2021 («eficacia») se responde por criterios; Mayo 2022 («efectos en la población hispana») por planos y por grupos. Idea que ordena todo: cada solución federal creó el problema siguiente.</p>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Regla «24 · 52 · 65 · 86 · 94»:</b> cuotas (1924) → cuotas modificadas (McCarran-Walter 1952) → fin de cuotas (Hart-Celler 1965) → amnistía + sanciones (IRCA 1986) → Gatekeeper y Prop. 187 (1994). Y entre ellas los dos «mientras tanto»: braceros/Wetback (1942–64) y >1 M de detenciones/año (años 80).</div>

          <h3>La escalera completa (lo que trae el profesor) DE CLASE</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Año</th><th>Medida</th><th>Qué demuestra (banco / fichas)</th></tr></thead>
            <tbody>
              <tr><td>1917</td><td>Ley Jones: puertorriqueños ciudadanos, migran sin restricciones.</td><td>Un grupo hispano fuera del régimen migratorio: trato desigual desde el origen.</td></tr>
              <tr><td>1924</td><td>Cuotas por origen nacional (favorecen a Europa del norte).</td><td>«El sistema era restrictivo y discriminaba según origen nacional».</td></tr>
              <tr><td>1942–64</td><td>Programa Bracero; >400.000/año; termina en 1964.</td><td>«El fin del programa redujo un canal legal mientras la demanda continuaba»: explica la migración irregular posterior.</td></tr>
              <tr><td>1952</td><td>McCarran-Walter: cuotas modificadas + filtros anticomunistas.</td><td>«Antes de 1965 seguían existiendo fuertes límites y sesgos».</td></tr>
              <tr><td>1954</td><td>Operación Wetback: redadas y expulsiones en el Suroeste.</td><td>«La reforma no siguió una trayectoria lineal hacia la apertura».</td></tr>
              <tr><td>3-X-1965</td><td>Hart-Celler (Johnson, al pie de la Estatua de la Libertad): elimina las cuotas; 170.000 visas; reunificación familiar; preferencias para calificados y refugiados (Vecchio); primer tope al hemisferio occidental (120.000 en 1968; 20.000/país en 1976).</td><td>«La reforma formó parte de un cambio más amplio hacia igualdad legal»; «se redujo una forma legal de discriminación por origen».</td></tr>
              <tr><td>1966</td><td>Ley de Ajuste Cubano: residencia para los llegados desde 1959.</td><td>«No todos los grupos hispanos fueron afectados de la misma manera»: trato privilegiado.</td></tr>
              <tr><td>Años 80</td><td>Patrulla Fronteriza: >1 M de detenciones/año; fracasos legislativos 1982, 1983, 1985.</td><td>«La inmigración irregular se había convertido en un problema político de gran escala».</td></tr>
              <tr><td>XI-1986</td><td>IRCA (Simpson-Mazzoli, Reagan): amnistía ~2,7 M + sanciones a empleadores + control + antidiscriminación.</td><td>«Combinó regularización y control»; «1986 fue resultado de años de negociación».</td></tr>
              <tr><td>1994</td><td>Operation Gatekeeper (Clinton); Prop. 187 (niega servicios a indocumentados).</td><td>«1986 no había resuelto la inmigración irregular»; fuerte reacción política.</td></tr>
              <tr><td>1996 / 2005 / 2006</td><td>Corte federal bloquea la Prop. 187 (1996); >10 M indocumentados (2005); protestas en 102 ciudades (10-IV-2006).</td><td>«Los efectos restrictivos no fueron absolutos»; «la población hispana se había convertido en un actor político movilizado».</td></tr>
            </tbody>
          </table></div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Hart-Celler abrió la inmigración mexicana» → abrió Asia/Latinoamérica quitando cuotas, pero puso el primer tope al hemisferio occidental (1968) y a México (1976): creció la indocumentada. «1965 = abrir las fronteras» es exactamente lo que Vecchio desmiente: creó nuevas prioridades (familia, calificación, refugio), no abrió las fronteras.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La eficacia de la reforma inmigratoria depende del criterio con que se la mida: fue muy eficaz para eliminar la discriminación por origen nacional y diversificar la inmigración (1965), parcialmente eficaz para regularizar a quienes ya estaban (1986), y poco eficaz para controlar la inmigración irregular, que pasó de un millón de detenciones anuales a comienzos de los ochenta a más de diez millones de residentes indocumentados en 2005.»</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> <b>Estructura del profesor (Nov 2021, «eficacia»):</b> Intro (definir eficacia por criterios) → P1 1965 fin de cuotas → P2 resultados: reunificación y diversidad → P3 límites: irregular, frontera → P4 1986: amnistía, sanciones, efectos no previstos → P5 años 90 y largo plazo → conclusión por criterios: «alta en igualdad y diversidad; parcial en regularización; menor en control».</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué hizo realmente la ley Hart-Celler de 1965 con México, según Vecchio?", etiqueta: "trampa",
            opciones: [
              { texto: "Le puso por primera vez un tope numérico, lo que hizo crecer la migración indocumentada.", correcta: true, explicacion: "Correcto: no «abrió la frontera»; creó nuevas prioridades y un cupo (20.000/país desde 1976)." },
              { texto: "Abrió por completo la frontera mexicana y eliminó cualquier límite de visas anuales para el país vecino.", correcta: false, explicacion: "Al revés: impuso el primer tope al hemisferio occidental; eso desmiente Vecchio." },
              { texto: "Mantuvo intacto el sistema de cuotas por origen nacional de 1924.", correcta: false, explicacion: "Hart-Celler eliminó las cuotas por origen nacional; ese fue su cambio central." },
              { texto: "Prohibió toda inmigración desde América Latina, Asia y África.", correcta: false, explicacion: "Al contrario: diversificó la inmigración desde esas regiones." }
            ] },
          { pregunta: "¿Qué combinó la ley IRCA de 1986?", etiqueta: "fecha",
            opciones: [
              { texto: "Amnistía (~2,7 M) con sanciones a empleadores, más control y antidiscriminación.", correcta: true, explicacion: "Correcto: «combinó regularización y control», tras los fracasos de 1982, 1983 y 1985." },
              { texto: "La eliminación completa de todas las cuotas por origen nacional del sistema migratorio.", correcta: false, explicacion: "Eso fue Hart-Celler (1965), no la IRCA." },
              { texto: "La residencia permanente exclusiva para los refugiados cubanos de Florida.", correcta: false, explicacion: "Eso fue la Ley de Ajuste Cubano (1966)." },
              { texto: "El refuerzo de la frontera de California conocido como Gatekeeper.", correcta: false, explicacion: "Gatekeeper es de 1994 (Clinton), no de la IRCA de 1986." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Reforma: eficacia y efectos por grupo",
        html: `
          <h3>Nov 2021 «Evalúe la eficacia»: la tabla de criterios DE CLASE</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Criterio</th><th>Evidencia</th><th>Juicio (ficha)</th></tr></thead>
            <tbody>
              <tr><td>Igualdad legal</td><td>Fin de las cuotas nacionales (1965), tras 1924 y 1952.</td><td>Muy eficaz: eliminó un criterio discriminatorio.</td></tr>
              <tr><td>Diversidad</td><td>Mayor inmigración desde América Latina, Asia y África.</td><td>Eficaz: cambió de forma duradera la composición.</td></tr>
              <tr><td>Reunificación familiar</td><td>Prioridad a familiares (Vecchio: sistema de preferencias).</td><td>Eficaz: facilitó cadenas familiares y asentamiento.</td></tr>
              <tr><td>Regularización</td><td>Amnistía de 1986 (~2,7 M); movilidad social de los legalizados.</td><td>Eficaz para quienes obtuvieron estatus; parcial como política.</td></tr>
              <tr><td>Control de la irregular</td><td>Sanciones (1986), Gatekeeper (1994), >1 M detenciones/año, >10 M indocumentados (2005).</td><td>Eficacia limitada: la irregular siguió siendo central.</td></tr>
              <tr><td>Efectos no previstos</td><td>Discriminación contra hispanos documentados; Prop. 187; protestas de 2006.</td><td>Reduce cualquier valoración totalmente positiva.</td></tr>
            </tbody>
          </table></div>

          <h3>Mayo 2022 «Evalúe los efectos en la población hispana»: planos y grupos DE CLASE</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Evidencia</th><th>Juicio (ficha)</th></tr></thead>
            <tbody>
              <tr><td>Inclusión legal</td><td>Fin de cuotas, reunificación, residencia cubana (1966), amnistía de 1986.</td><td>Amplió oportunidades legales para sectores hispanos.</td></tr>
              <tr><td>Crecimiento demográfico</td><td>Mayor inmigración latinoamericana y redes familiares; censo 1980: ~14,6 M «hispanos».</td><td>Las reformas modificaron el tamaño y la composición de las comunidades.</td></tr>
              <tr><td>Movilidad social</td><td>Legalizados de 1986 pasan del campo a construcción, fábricas, oficios, educación, vivienda.</td><td>El estatus legal se tradujo en estabilidad y posibilidades económicas.</td></tr>
              <tr><td>Control y expulsión</td><td>Wetback (1954), sanciones de IRCA, Gatekeeper y Prop. 187 (1994).</td><td>Medidas coercitivas incluso en períodos de reforma; vulnerabilidad y polarización.</td></tr>
              <tr><td>Trato desigual</td><td>Mexicanos (braceros, Wetback, tope, Gatekeeper); cubanos (refugio, Ajuste 1966, «pies secos»); puertorriqueños (ciudadanos desde 1917).</td><td>«No existe un único efecto para toda la población de ascendencia hispana».</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Entre 1945 y 1994 la reforma inmigratoria tuvo sobre la población hispana efectos tan importantes como desiguales: abrió vías legales y redes familiares que multiplicaron a las comunidades latinoamericanas, legalizó a 2,7 millones de personas en 1986 y les permitió salir del trabajo agrícola estacional, pero mantuvo la deportación y el control fronterizo como constantes —de la Operación Wetback a Gatekeeper— y trató de forma radicalmente distinta al mexicano, al cubano y al puertorriqueño.»</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> En los dos ensayos de reforma inmigratoria no escribas un párrafo entero sobre Chávez: una oración (fin del bracero como precondición de Delano; la UFW contra los indocumentados en 1974 y a favor de la amnistía en 1986) muestra que conectás los subtemas, pero el eje es la política de Estado.</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> <b>Estructura del profesor (Mayo 2022):</b> Intro → P1 antecedentes (Bracero, Wetback, 1952) → P2 Hart-Celler 1965 → P3 diferencias entre grupos (cubanos, mexicanos, puertorriqueños) → P4 IRCA 1986 (movilidad y discriminación) → P5 años 90 → conclusión: «efectos positivos importantes, pero desiguales y limitados por el control».</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál es el rasgo decisivo de los efectos de la reforma sobre «los hispanos» (Mayo 2022)?", etiqueta: "concepto",
            opciones: [
              { texto: "La desigualdad entre grupos: cubanos acogidos, puertorriqueños ciudadanos, mexicanos perseguidos.", correcta: true, explicacion: "Correcto: «no existe un único efecto para toda la población de ascendencia hispana»." },
              { texto: "Que todos los grupos hispanos recibieron por igual exactamente el mismo trato legal y migratorio perfectamente uniforme.", correcta: false, explicacion: "Lo contrario: la ficha subraya que el trato fue radicalmente distinto." },
              { texto: "Que la reforma de 1965 eliminó por completo la inmigración irregular mexicana.", correcta: false, explicacion: "La irregular creció tras 1965 por el tope al hemisferio occidental." },
              { texto: "Que los puertorriqueños fueron el grupo más perseguido por las deportaciones.", correcta: false, explicacion: "Eran ciudadanos desde 1917 y quedaron fuera del régimen migratorio." }
            ] },
          { pregunta: "El juicio del profesor sobre la eficacia de 1965 en igualdad legal es que fue…", etiqueta: "historiador",
            opciones: [
              { texto: "Muy eficaz: eliminó un criterio claramente discriminatorio del sistema de cuotas.", correcta: true, explicacion: "Correcto: por el criterio de igualdad formal la eficacia fue alta." },
              { texto: "Totalmente ineficaz porque no cambió en nada la composición de la inmigración.", correcta: false, explicacion: "Sí la cambió: diversificó de forma duradera el origen de los inmigrantes." },
              { texto: "Irrelevante, porque las cuotas por origen nacional nunca existieron antes de 1965.", correcta: false, explicacion: "Existían desde 1924 y se modificaron en 1952; 1965 las eliminó." },
              { texto: "Negativa, porque reintrodujo la discriminación por origen que había en 1924.", correcta: false, explicacion: "Hizo lo opuesto: suprimió la discriminación por origen nacional." }
            ] }
        ]
      },

      {
        id: "s9", titulo: "9 · Métodos de protesta · éxitos y fracasos",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> Tesis de «métodos» en una oración: «Los métodos más eficaces fueron los que trasladaron el conflicto a un terreno donde la minoría podía ganar: del campo al supermercado (boicot), de la calle al tribunal (litigio), del barrio a la urna (Raza Unida); los menos eficaces, los que enfrentaron al Estado en su propio terreno (huelga sola, armas, manifestación reprimida)».</div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Método</th><th>Ejemplo</th><th>Eficacia</th></tr></thead>
            <tbody>
              <tr><td>Huelga</td><td>Delano (1965–70); Salinas (1970); uva (1973).</td><td>Baja sola (esquiroles, pesticidas, sheriffs); alta combinada con boicot.</td></tr>
              <tr><td>Boicot del consumidor</td><td>Schenley (1965–66); uva (1968–70: 17 M); lechuga y Gallo (1970–75).</td><td>La más eficaz: traslada el conflicto al supermercado. Requiere aliados urbanos y años.</td></tr>
              <tr><td>Marcha / peregrinación</td><td>Delano–Sacramento (1966, ~300 millas); Modesto (1975).</td><td>Alta en visibilidad y legitimidad; precipita Schenley.</td></tr>
              <tr><td>Ayuno</td><td>23–25 días (1968, con RFK); 24 días (Arizona 1972); 36 días (1988).</td><td>Alta moral; costo: personaliza el movimiento (Pawel/Bardacke).</td></tr>
              <tr><td>Walkout estudiantil</td><td>East L.A. (6-III-1968, 15.000, 39 demandas); Crystal City (XII-1969).</td><td>Media: la junta acepta y luego incumple; pero crea una generación (Muñoz).</td></tr>
              <tr><td>Partido propio</td><td>Raza Unida (1970–78): Crystal City (1970) vs. 0/11 estatal (1971).</td><td>Alta institucional (identidad); baja política.</td></tr>
              <tr><td>Acción armada / ocupación</td><td>Tijerina (Kit Carson 1966, Tierra Amarilla 1967); Young Lords.</td><td>Baja en Tijerina (cárcel, aislamiento); media en Young Lords.</td></tr>
              <tr><td>Manifestación antiguerra</td><td>Moratoria Chicana (29-VIII-1970: 20–30.000).</td><td>Costo altísimo (3 muertos, Salazar); une antiguerra e identidad.</td></tr>
              <tr><td>Litigio y lobby</td><td>Mendez (1947), Hernandez (1954), fin del bracero (1964), cortito (1975), ALRA (1975), Plyler (1982), IRCA (1986); MALDEF desde 1968.</td><td>Alta y duradera, pero lenta y dependiente de aliados.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Comparación con el movimiento afroamericano (Anderson): misma caja de herramientas (Montgomery → uva; Selma → Sacramento; sit-ins → walkouts; Panteras → Brown Berets/Young Lords; Black Power → Brown Power). Diferencias que agregás: (1) objetivo sindical vs. derechos civiles; (2) el Estado federal legisló para los negros (1964, 1965, 1968) y nunca para los chicanos (solo California 1975), aunque sí legisló inmigración; (3) King + red nacional vs. Chávez + tres líderes regionales; (4) de jure vs. de facto; (5) el problema migratorio, inexistente para los afroamericanos.</div>

          <h3>Éxitos y fracasos (balance)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Éxitos materiales</span>Contratos 1966 y 1970 (1,80 $/h, salud, DDT); ALRA 1975; derrota de Prop. 22 (1972); fin del «cortito» (1975).</div>
              <div><span class="et">Éxitos legales/culturales</span>Hart-Celler (1965), IRCA (1986: 2,7 M); Ley Bilingüe 1968, Lau 1974, estudios chicanos y MEChA (1969), Plyler (1982); «Chicano», Aztlán, «nuevo puertorriqueño» (Jeffries).</div>
              <div><span class="et">Veredicto</span>Cuanto más simbólico el objetivo, mayor el éxito: material parcial y reversible; legal parcial y duradero; cultural logrado.</div>
            </div>
          </div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Medido por sus objetivos declarados —un sindicato para todos los trabajadores agrícolas, la tierra de 1848, Aztlán, un partido chicano— el movimiento fracasó; medido por sus efectos —la ALRA, la amnistía de 1986, los estudios chicanos, una élite política hispana y el fin de la invisibilidad— transformó la posición de los hispanos en Estados Unidos. Como sugiere Anderson, el Movimiento perdió sus batallas y ganó su guerra cultural; como replica Gitlin, ganar la cultura fue el consuelo de haber perdido la política.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál fue el método más eficaz de la UFW y por qué?", etiqueta: "concepto",
            opciones: [
              { texto: "El boicot: trasladó el conflicto del campo al supermercado, donde 17 M de consumidores podían ganar.", correcta: true, explicacion: "Correcto: la huelga sola fracasaba; el boicot cambió el terreno y produjo Delano 1970." },
              { texto: "La acción armada, que forzó a los growers a firmar contratos de inmediato.", correcta: false, explicacion: "La UFW fue no violenta; la acción armada fue de Tijerina y resultó ineficaz." },
              { texto: "La huelga por sí sola, que supuestamente derrotó a los esquiroles, las pesticidas de los growers y a los sheriffs del condado de Kern.", correcta: false, explicacion: "La huelga sola fue de baja eficacia: esquiroles, pesticidas y arrestos." },
              { texto: "La manifestación antiguerra de la Moratoria, que ganó contratos agrícolas.", correcta: false, explicacion: "La Moratoria fue chicana y antiguerra, con alto costo humano, no sindical." }
            ] },
          { pregunta: "Comparando con el movimiento afroamericano, una diferencia clave es que…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El Estado federal legisló para los negros (1964–68) pero no para los chicanos (solo California, ALRA 1975).", correcta: true, explicacion: "Correcto: misma caja de herramientas (Anderson), distinta respuesta federal." },
              { texto: "Los chicanos sufrieron segregación de jure y los afroamericanos solo de facto.", correcta: false, explicacion: "Es al revés: los negros de jure en el Sur; los chicanos sobre todo de facto." },
              { texto: "Los afroamericanos usaron el boicot del consumidor y los chicanos jamás tomaron prestado ningún método de la primera ola.", correcta: false, explicacion: "Los chicanos tomaron la misma caja de herramientas (Brown Power de Black Power)." },
              { texto: "El movimiento afroamericano enfrentó un problema migratorio que los chicanos no tenían.", correcta: false, explicacion: "El problema migratorio fue específico de los hispanos, inexistente para los negros." }
            ] }
        ]
      },

      {
        id: "s10", titulo: "10 · Transversal: trampas, frases y acción–reacción",
        html: `
          <h3>Acción – reacción – efecto</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Acción</span>1964 · Lobby contra el Programa Bracero (Huerta, AFL-CIO, iglesias).</div>
              <div><span class="et">Reacción</span>El Congreso no renueva la PL 78 (31-XII-1964).</div>
              <div><span class="et">Efecto</span>Sin braceros, la huelga de Delano es posible por primera vez.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1968 · Boicot a toda la uva; ayuno de Chávez.</div>
              <div><span class="et">Reacción</span>RFK rompe el ayuno; Nixon manda uvas al Pentágono.</div>
              <div><span class="et">Efecto</span>Primer choque con los Teamsters; el boicot dolía.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1970 · Contratos de Delano (29-VII) y Moratoria (29-VIII).</div>
              <div><span class="et">Reacción</span>Obispos median; los sheriffs matan a 3 en East L.A. (Salazar).</div>
              <div><span class="et">Efecto</span>El año de la cima y de la herida.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1975 · Presión sobre el gobernador Brown; litigio del cortito.</div>
              <div><span class="et">Reacción</span>ALRA (4-VI); VRA extendida a minorías lingüísticas.</div>
              <div><span class="et">Efecto</span>El año de la ley: los derechos pasan del contrato al estatuto.</div>
            </div>
          </div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Los cuatro años que hay que saber sí o sí: <b>1965 · 1968 · 1970 · 1975</b> = huelga y Hart-Celler · juventud (walkouts, ayuno, MALDEF) · cima y herida (contratos + Moratoria) · ley (ALRA). Para reforma inmigratoria agregá 1986 y 1994.</div>

          <h3>Trampas que cuestan bandas</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Chávez lideró el movimiento chicano» → fue su símbolo, no su líder. «Movimiento hispanoamericano» para el conjunto, «chicano» para el ala nacionalista.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Chávez fundó la UFW en 1965» → NFWA 1962 → UFWOC 1966 → UFW 1972.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Chávez empezó la huelga de Delano» → la empezaron los filipinos (8-IX-1965); la NFWA se sumó.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Confundir la ALRA (California 1975) con la NLRA (federal 1935, que excluye). El gobierno federal nunca dio derechos sindicales a los agrícolas.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Terminar sin juicio: «García dice X y Anderson dice Y» no es evaluación. «García explica mejor el fracaso porque las purgas son anteriores a Deukmejian; Anderson explica mejor el legado porque la ALRA y el IRCA sobrevivieron» sí.</div>

          <h3>Frases listas (copiar casi textual)</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El ayuno de 1968, roto junto a Robert Kennedy, hizo por la UFW lo que Birmingham por King: convirtió a una organización local en una causa moral nacional; a diferencia de King, sin embargo, Chávez nunca obtuvo una ley federal.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El Estado respondió al movimiento hispanoamericano con tres manos: reprimió (East L.A. 13, Moratoria, Tijerina, COINTELPRO), cooptó (nombramientos de Nixon, Fundación Ford, estudios chicanos) y, solo en California y solo bajo Jerry Brown, legisló (ALRA 1975).»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La cuestión migratoria dividió al movimiento contra sí mismo: la lógica sindical de la UFW la llevó en 1974 a denunciar indocumentados, mientras la lógica étnica de los chicanos la llevó a defenderlos; recién con la amnistía de 1986 ambas lógicas coincidieron.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Regla de los seis nombres:</b> en cualquier ensayo de 17.4 nombrá al menos seis personas (Chávez, Huerta, Itliong, + tres entre Tijerina, Gonzales, Gutiérrez, Jiménez, Salazar, Castro, Cohen, Jerry Brown, RFK) y seis fechas con día o mes (16-IX-1965, 6-IV-1966, I-1968, 6-III-1968, 29-VII-1970, 29-VIII-1970, 4-VI-1975, 3-X-1965, XI-1986).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se convierte un contraste de historiadores en «evaluación» de banda alta?", etiqueta: "trampa",
            opciones: [
              { texto: "Decidiendo quién explica mejor y por qué (García el fracaso por cronología; Anderson el legado).", correcta: true, explicacion: "Correcto: «X dice A, Y dice B» no evalúa; hay que jerarquizar y dar razones." },
              { texto: "Enumerando a los dos historiadores uno detrás del otro, sin contrastarlos ni tomar ninguna posición propia al final.", correcta: false, explicacion: "Eso es exactamente lo que el profesor marca como insuficiente." },
              { texto: "Omitiendo a los historiadores para no complicar el argumento del ensayo.", correcta: false, explicacion: "Las perspectivas evaluadas son requisito de banda 13–15." },
              { texto: "Citando solo al historiador que coincide con la lectura del banco.", correcta: false, explicacion: "La marca del 7 es poner las lecturas en tensión y decidir, no elegir una sola." }
            ] }
        ]
      },

      {
        id: "s11", titulo: "11 · Línea de tiempo maestra 1917–2006",
        html: `
          <p>Para la cronología clickeable usá la pestaña <b>Cronología</b>. Acá quedan las fechas espejo que ordenan cualquier ensayo.</p>
          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Cuatro pares de «fechas espejo»:</b>
            <ul>
              <li>1954 = Hernandez (derechos) ↔ Wetback (expulsión): «derechos y deportación el mismo año».</li>
              <li>1965 = Hart-Celler (3-X) ↔ Delano (16-IX): «ley migratoria y huelga el mismo mes».</li>
              <li>1970 = Delano (29-VII) ↔ Moratoria (29-VIII): un mes exacto, la cima y la herida.</li>
              <li>1986/1994 = amnistía ↔ Gatekeeper: ocho años entre la apertura y el endurecimiento.</li>
            </ul>
            Cada par es una oración de «contradicción» lista para el ensayo.</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Reglas finales del profesor: 1) no todos los datos pesan igual; elegí los que prueban tu argumento. 2) En Chávez, siempre logros Y límites. 3) No confundas movimiento hispano con un solo grupo. 4) En el chicano: educación + identidad + juventud + participación. 5) En reforma migratoria: distinguí cambio legal, efecto demográfico y políticas de control. 6) En Young Lords: activismo comunitario + nacionalismo + servicios + represión. 7) Después de cada evidencia: ¿qué demuestra para la consigna? 8) En la conclusión, jerarquizá.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El movimiento hispanoamericano perdió casi todas sus batallas materiales y ganó la guerra del reconocimiento: cuando Chávez murió en 1993 la UFW era una sombra, pero 40.000 personas fueron a su funeral, California tenía una ley que llevaba su huella, 2,7 millones de personas habían sido legalizadas por una ley que su movimiento apoyó, y una palabra que en 1960 era un insulto se enseñaba en las universidades.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué «fecha espejo» expresa mejor la cima y la herida de 1970?", etiqueta: "fecha",
            opciones: [
              { texto: "Delano (29-VII) ↔ Moratoria (29-VIII): un mes exacto entre contrato y represión.", correcta: true, explicacion: "Correcto: el triunfo sindical y la masacre de la Moratoria con un mes de diferencia." },
              { texto: "Hernandez (derechos) ↔ Operación Wetback (expulsión), ambas de 1954.", correcta: false, explicacion: "Ese par es de 1954, no la cima y herida de 1970." },
              { texto: "La firma de la ley Hart-Celler (3-X-1965) ↔ el inicio de la huelga de Delano (16-IX-1965).", correcta: false, explicacion: "Ese par es de 1965, ley migratoria y huelga, no 1970." },
              { texto: "Amnistía de 1986 ↔ Operation Gatekeeper de 1994.", correcta: false, explicacion: "Ese par marca apertura vs. endurecimiento migratorio, no 1970." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "Chicano", dorso: "Mexicano-americano que se autodefine con orgullo y militancia (años 60–70); antes era despectivo." },
    { id: "fc02", categoria: "concepto", frente: "Aztlán", dorso: "Patria mítica de los aztecas, identificada con el Suroeste de EE.UU. (lo que México perdió en 1848). Plan Espiritual de Aztlán (Denver, 1969)." },
    { id: "fc03", categoria: "concepto", frente: "Bracero", dorso: "Trabajador mexicano con contrato temporal (Programa Bracero 1942–1964); usado como rompehuelgas, sin derecho a huelga." },
    { id: "fc04", categoria: "concepto", frente: "Boicot del consumidor", dorso: "Arma más eficaz de la UFW: trasladó el conflicto del campo al supermercado. Uva de mesa 1968–70: ~17 M de consumidores." },
    { id: "fc05", categoria: "concepto", frente: "Teamsters", dorso: "Sindicato de camioneros que compitió con la UFW firmando «contratos dulces» con los growers (1966, 1970, 1973)." },
    { id: "fc06", categoria: "concepto", frente: "De jure vs. de facto", dorso: "De jure = por ley (segregación negra en el Sur); de facto = por costumbre o escuela. Los chicanos sufrieron sobre todo la segunda." },
    { id: "fc07", categoria: "concepto", frente: "Raza Unida (LRUP)", dorso: "Partido chicano de Gutiérrez (1970–78): «control comunitario» donde los chicanos eran mayoría. Gana Crystal City (1970), 0/11 estatal (1971)." },
    { id: "fc08", categoria: "concepto", frente: "MEChA", dorso: "Organización estudiantil chicana única, creada por el Plan de Santa Bárbara (1969), junto con los estudios chicanos y las admisiones (EOP)." },
    { id: "fc09", categoria: "fecha", frente: "30-IX-1962", dorso: "Chávez funda la NFWA en Delano con Dolores Huerta y Gilbert Padilla (asociación, no sindicato)." },
    { id: "fc10", categoria: "fecha", frente: "8 y 16-IX-1965", dorso: "La AWOC filipina (Itliong) inicia la huelga de Delano el 8-IX; la NFWA se suma el 16-IX." },
    { id: "fc11", categoria: "fecha", frente: "6-IV-1966", dorso: "Schenley firma el primer contrato (negocia Huerta), al final de la marcha de ~300 millas a Sacramento." },
    { id: "fc12", categoria: "fecha", frente: "10-III-1968", dorso: "Chávez rompe su ayuno (23 días según el banco) junto a Robert Kennedy." },
    { id: "fc13", categoria: "fecha", frente: "29-VII-1970", dorso: "Victoria de Delano: 26 productores firman: 1,80 $/h + 20 c/caja, plan de salud, prohibición del DDT." },
    { id: "fc14", categoria: "fecha", frente: "29-VIII-1970", dorso: "Moratoria Chicana en East L.A.: 20–30.000 personas; 3 muertos, entre ellos Rubén Salazar." },
    { id: "fc15", categoria: "fecha", frente: "4-VI-1975", dorso: "Jerry Brown firma la ALRA: primer derecho de los agrícolas a organizarse desde la NLRA de 1935." },
    { id: "fc16", categoria: "fecha", frente: "6-III-1968", dorso: "Blowouts de East L.A.: ~15.000 estudiantes, 39 demandas; «East L.A. 13» procesados." },
    { id: "fc17", categoria: "fecha", frente: "3-X-1965", dorso: "Hart-Celler (Johnson, Estatua de la Libertad): elimina las cuotas por origen nacional; reunificación, calificados, refugiados." },
    { id: "fc18", categoria: "fecha", frente: "XI-1986", dorso: "IRCA (Reagan): amnistía ~2,7 M + sanciones a empleadores + control + antidiscriminación." },
    { id: "fc19", categoria: "fecha", frente: "23-IV-1993", dorso: "Muere César Chávez; ~40.000 en el funeral; Medalla de la Libertad (1994)." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué Delano fue posible en 1965?", dorso: "Porque el 31-XII-1964 terminó el Programa Bracero: sin braceros ya no había mano de obra para romper la huelga." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "¿Por qué colapsó la UFW en 1973?", dorso: "Vencieron los contratos de 1970; los growers firmaron con los Teamsters; 3.500 arrestos, 2 muertos; cae a ~6.500 afiliados." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "Límite estrella de Chávez", dorso: "La UFW cayó de ~70.000 afiliados (1972) a ~15.000 (mediados de los 80)." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "La contradicción migratoria de la UFW", dorso: "En 1974 denunció a indocumentados (esquiroles) ante el INS; rectificó en 1974–75 y apoyó la amnistía en los 80." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "Efecto no previsto de la IRCA (1986)", dorso: "Las sanciones hicieron que empleadores, por miedo a multas, discriminaran a hispanos documentados." },
    { id: "fc25", categoria: "causa-consecuencia", frente: "¿Por qué creció la indocumentada tras 1965?", dorso: "Hart-Celler puso el primer tope al hemisferio occidental (120.000 en 1968; 20.000/país para México en 1976) mientras seguía la demanda." },
    { id: "fc26", categoria: "historiador", frente: "Matt García (postura)", dorso: "Revisionista: el boicot (obra colectiva) ganó; Chávez perdió lo ganado (La Paz, Synanon, purgas). Derrota «autoinfligida»." },
    { id: "fc27", categoria: "historiador", frente: "Carlos Muñoz (postura)", dorso: "Movimiento juvenil de identidad que rompió con la generación mexicano-americana; legado cultural e institucional, no leyes." },
    { id: "fc28", categoria: "historiador", frente: "Terry Anderson (postura)", dorso: "Un Movimiento, dos olas; el Brown Power aplicó las tácticas de los negros; balance positivo. Hart-Celler = hija de los derechos civiles." },
    { id: "fc29", categoria: "historiador", frente: "Todd Gitlin (postura)", dorso: "De la esperanza a la rabia: los nacionalismos de identidad fragmentaron la izquierda y regalaron la política a Nixon." },
    { id: "fc30", categoria: "historiador", frente: "Griswold del Castillo & R. García (regalo)", dorso: "Heroico: «el triunfo del espíritu», «primer líder mexicano-americano de alcance nacional»; culpa a los enemigos externos." },
    { id: "fc31", categoria: "historiador", frente: "Bardacke (regalo)", dorso: "La UFW tuvo «dos almas» (campo y boicot urbano); Chávez fue «líder de un movimiento, no un sindicalista»." },
    { id: "fc32", categoria: "historiador", frente: "Vecchio (DE CLASE)", dorso: "La ley de 1965 no abrió las fronteras: creó nuevas prioridades legales (reunificación familiar, calificados, refugiados)." },
    { id: "fc33", categoria: "historiador", frente: "Jeffries (DE CLASE)", dorso: "Los Young Lords ayudaron a formar «un nuevo tipo de puertorriqueño»: legado identitario, no institucional." },
    { id: "fc34", categoria: "concepto", frente: "Regla «24·52·65·86·94»", dorso: "Cuotas (1924) → cuotas modificadas (1952) → fin de cuotas (1965) → amnistía (1986) → Gatekeeper y Prop. 187 (1994)." },
    { id: "fc35", categoria: "concepto", frente: "Tres regímenes migratorios hispanos", dorso: "Mexicanos (braceros, Wetback, tope, Gatekeeper); cubanos (refugio, Ajuste 1966, «pies secos»); puertorriqueños (ciudadanos desde 1917)." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Quién inició la huelga de Delano en septiembre de 1965?", etiqueta: "trampa",
      opciones: [
        { texto: "La AWOC filipina de Larry Itliong; la NFWA se sumó después.", correcta: true, explicacion: "Correcto: el banco lo marca explícitamente; no la empezó Chávez." },
        { texto: "César Chávez y la NFWA, que la convocaron desde su sede en Delano.", correcta: false, explicacion: "La NFWA se sumó el 16-IX; la iniciaron los filipinos el 8-IX." },
        { texto: "El sindicato de los Teamsters, en alianza con los productores.", correcta: false, explicacion: "Los Teamsters firmaban con los patrones, no la huelga." },
        { texto: "Los estudiantes chicanos de los walkouts de East Los Ángeles.", correcta: false, explicacion: "Los walkouts fueron en 1968 y eran urbanos, no la huelga agrícola." }
      ] },
    { pregunta: "¿Qué nombres tuvo la organización de Chávez, en orden?", etiqueta: "fecha",
      opciones: [
        { texto: "NFWA (1962) → UFWOC (1966) → UFW (1972).", correcta: true, explicacion: "Correcto: por eso es trampa decir que «fundó la UFW en 1965»." },
        { texto: "UFW (1962) → NFWA (1966) → AWOC (1972).", correcta: false, explicacion: "La AWOC era el comité filipino previo; el orden está invertido." },
        { texto: "CSO (1962) → NFWA (1966) → UFWOC (1972).", correcta: false, explicacion: "La CSO era la organización de Ross de la que Chávez renunció en 1962." },
        { texto: "UFWOC (1962) → UFW (1965) → NFWA (1970).", correcta: false, explicacion: "La NFWA fue la primera (1962), no la última." }
      ] },
    { pregunta: "¿Qué fue la ALRA de 1975?", etiqueta: "concepto",
      opciones: [
        { texto: "La ley de California que dio a los agrícolas el derecho a organizarse.", correcta: true, explicacion: "Correcto: primera ley continental para ellos desde la NLRA de 1935; la firmó Jerry Brown." },
        { texto: "Una ley federal del Congreso que reconoció a la UFW como sindicato nacional único de todo el país.", correcta: false, explicacion: "No fue federal: fue estatal (California) y los agrícolas siguen fuera de la ley federal." },
        { texto: "El contrato privado que firmaron los 26 productores de Delano.", correcta: false, explicacion: "Ese contrato fue el de 1970; la ALRA es una ley de 1975." },
        { texto: "La amnistía para los trabajadores indocumentados de la uva.", correcta: false, explicacion: "La amnistía es la IRCA de 1986, no la ALRA." }
      ] },
    { pregunta: "Según Matt García, la decadencia de la UFW fue…", etiqueta: "historiador",
      opciones: [
        { texto: "En parte «autoinfligida»: La Paz, Synanon, purgas 1977–81.", correcta: true, explicacion: "Correcto: separa el símbolo intacto del sindicato destruido por decisiones propias." },
        { texto: "Culpa exclusiva de los enemigos externos (Teamsters, Reagan, Deukmejian).", correcta: false, explicacion: "Esa es la lectura heroica de Griswold del Castillo, que García revisa." },
        { texto: "Inexistente, porque la UFW siguió creciendo hasta los años noventa.", correcta: false, explicacion: "Cayó de 70.000 (1972) a 15.000 (mediados 80)." },
        { texto: "Producto de que el boicot nunca funcionó en ninguna ciudad.", correcta: false, explicacion: "El boicot fue el mayor éxito (17 M de consumidores), no la causa de la caída." }
      ] },
    { pregunta: "¿Qué distingue al movimiento chicano de la UFW?", etiqueta: "concepto",
      opciones: [
        { texto: "El chicano fue nacionalista, juvenil, urbano y de identidad; la UFW, sindical y no violenta.", correcta: true, explicacion: "Correcto: dos movimientos que se tocan; Chávez fue símbolo del chicano sin ser parte de él." },
        { texto: "El chicano buscaba exclusivamente contratos agrícolas y la UFW buscaba, en cambio, la identidad cultural de la Raza.", correcta: false, explicacion: "Está invertido: la UFW buscaba contratos; el chicano, identidad y poder." },
        { texto: "El chicano fue dirigido por Chávez y la UFW por Tijerina y Gonzales.", correcta: false, explicacion: "Tijerina y Gonzales eran líderes chicanos; Chávez lideró la UFW." },
        { texto: "El chicano fue rural y el movimiento de la UFW fue urbano y estudiantil.", correcta: false, explicacion: "Al revés: la UFW era rural y el chicano, urbano y juvenil." }
      ] },
    { pregunta: "¿Qué líder chicano usó la acción armada y en qué estado?", etiqueta: "concepto",
      opciones: [
        { texto: "Tijerina, en Nuevo México (Tierra Amarilla, 1967).", correcta: true, explicacion: "Correcto: único que usó armas; preso 1969–71 y sin recuperar una hectárea." },
        { texto: "Gutiérrez, en Texas, con las milicias del Partido de la Raza Unida.", correcta: false, explicacion: "Gutiérrez usó la vía electoral, no las armas." },
        { texto: "Gonzales, en Colorado, con las patrullas de la Cruzada por la Justicia.", correcta: false, explicacion: "Gonzales fue el ideólogo cultural, no armado." },
        { texto: "Jiménez, en Chicago, al frente de los Young Lords.", correcta: false, explicacion: "Los Young Lords hicieron acción directa comunitaria, no reclamo armado de tierras." }
      ] },
    { pregunta: "¿Qué hizo la ley Hart-Celler de 1965?", etiqueta: "fecha",
      opciones: [
        { texto: "Eliminó las cuotas por origen nacional y priorizó la reunificación familiar.", correcta: true, explicacion: "Correcto: pero puso el primer tope al hemisferio occidental (Vecchio)." },
        { texto: "Abrió por completo y sin ningún límite de visas la frontera mexicana a todos los trabajadores.", correcta: false, explicacion: "Es lo que Vecchio desmiente: impuso un tope, no abrió la frontera." },
        { texto: "Creó la amnistía para 2,7 millones de indocumentados del país.", correcta: false, explicacion: "La amnistía es la IRCA de 1986, no Hart-Celler." },
        { texto: "Reforzó la frontera de California con la Operación Gatekeeper.", correcta: false, explicacion: "Gatekeeper es de 1994, no de 1965." }
      ] },
    { pregunta: "La eficacia de la reforma inmigratoria, según el profesor, fue…", etiqueta: "concepto",
      opciones: [
        { texto: "Alta en igualdad y diversidad, parcial en regularización, baja en control.", correcta: true, explicacion: "Correcto: eficaz en lo que decide una ley, ineficaz en lo que decide el mercado." },
        { texto: "Total en todos los criterios: igualdad, diversidad, regularización y control.", correcta: false, explicacion: "El control fue de eficacia limitada (>10 M indocumentados en 2005)." },
        { texto: "Nula, porque no cambió en nada la composición de la inmigración.", correcta: false, explicacion: "1965 diversificó de forma duradera el origen de los inmigrantes." },
        { texto: "Negativa, porque reintrodujo las cuotas por origen nacional de 1924.", correcta: false, explicacion: "Las eliminó en 1965; no las reintrodujo." }
      ] },
    { pregunta: "¿Por qué el trato migratorio difirió entre los grupos hispanos?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Cubanos acogidos como refugiados, puertorriqueños ciudadanos y mexicanos perseguidos.", correcta: true, explicacion: "Correcto: «no existe un único efecto para toda la población hispana»." },
        { texto: "Todos los grupos hispanos recibieron por igual exactamente el mismo trato legal y migratorio uniforme.", correcta: false, explicacion: "La ficha subraya justamente lo contrario." },
        { texto: "Los puertorriqueños fueron el grupo más deportado por la Operación Wetback.", correcta: false, explicacion: "Eran ciudadanos desde 1917; Wetback golpeó a los mexicanos." },
        { texto: "Los cubanos fueron los únicos sin derecho a residencia permanente.", correcta: false, explicacion: "Al revés: tuvieron residencia por la Ley de Ajuste de 1966." }
      ] },
    { pregunta: "¿Cuál fue el método más eficaz de la UFW?", etiqueta: "concepto",
      opciones: [
        { texto: "El boicot: llevó el conflicto al supermercado y movió a 17 M de consumidores.", correcta: true, explicacion: "Correcto: la huelga sola fracasaba; el boicot ganó Delano 1970." },
        { texto: "La huelga por sí sola, que supuestamente venció a los esquiroles, las pesticidas y los sheriffs.", correcta: false, explicacion: "La huelga sola fue de baja eficacia." },
        { texto: "La acción armada contra los productores de uva de California.", correcta: false, explicacion: "La UFW fue no violenta; las armas fueron de Tijerina." },
        { texto: "La manifestación antiguerra de la Moratoria Chicana de 1970.", correcta: false, explicacion: "La Moratoria fue chicana y antiguerra, con alto costo humano." }
      ] },
    { pregunta: "¿Qué papel tuvo Dolores Huerta?", etiqueta: "concepto",
      opciones: [
        { texto: "Cofundadora de la NFWA, negociadora de contratos y autora de «¡Sí se puede!».", correcta: true, explicacion: "Correcto: negoció Schenley (1966) y dirigió el boicot en Nueva York." },
        { texto: "Fundadora y estratega del Partido de la Raza Unida en la ciudad de Crystal City, en Texas.", correcta: false, explicacion: "Ese partido fue de Gutiérrez; Huerta era de la UFW." },
        { texto: "Dirigente de los Young Lords en East Harlem, Nueva York.", correcta: false, explicacion: "Los Young Lords eran puertorriqueños; Jiménez los lideró." },
        { texto: "Abogada de MALDEF que ganó el caso Plyler v. Doe de 1982.", correcta: false, explicacion: "Huerta era organizadora sindical, no la abogada de Plyler." }
      ] },
    { pregunta: "El balance global del movimiento, según Anderson y Gitlin, es que…", etiqueta: "historiador",
      opciones: [
        { texto: "Perdió sus batallas materiales y ganó la guerra cultural (Anderson); eso fue el consuelo de perder la política (Gitlin).", correcta: true, explicacion: "Correcto: el debate central de éxitos y fracasos." },
        { texto: "Logró de forma plena y permanente todos sus objetivos materiales declarados: un sindicato para todos los agrícolas, la tierra de 1848, Aztlán y un partido chicano nacional.", correcta: false, explicacion: "Ninguno de esos objetivos materiales sobrevivió; fracasaron." },
        { texto: "No dejó ningún legado cultural ni político duradero en Estados Unidos.", correcta: false, explicacion: "Dejó estudios chicanos, una élite política y el fin de la invisibilidad." },
        { texto: "Fue un éxito completo en lo político y un fracaso solo en lo cultural.", correcta: false, explicacion: "Es al revés: éxito cultural, fracaso político-material." }
      ] },
    { pregunta: "¿Qué fue la Moratoria Chicana del 29-VIII-1970?", etiqueta: "fecha",
      opciones: [
        { texto: "La mayor marcha antiguerra de una minoría; 3 muertos, entre ellos Rubén Salazar.", correcta: true, explicacion: "Correcto: unió antiguerra e identidad (Oropeza); ningún policía procesado." },
        { texto: "La firma de los contratos de Delano con los 26 grandes productores de uva de mesa de California.", correcta: false, explicacion: "Esos contratos fueron el 29-VII-1970, un mes antes (fecha espejo)." },
        { texto: "La conferencia de Denver donde se redactó el Plan de Aztlán.", correcta: false, explicacion: "Denver fue en marzo de 1969, no la Moratoria." },
        { texto: "El walkout de 15.000 estudiantes de East Los Ángeles.", correcta: false, explicacion: "Los blowouts fueron el 6-III-1968, no la Moratoria." }
      ] },
    { pregunta: "¿Por qué la cronología favorece a Matt García sobre Griswold del Castillo?", etiqueta: "historiador",
      opciones: [
        { texto: "Porque las purgas (1977–81) son anteriores a Deukmejian (1983).", correcta: true, explicacion: "Correcto: el daño interno precede a la hostilidad externa." },
        { texto: "Porque Deukmejian vació la ALRB antes de que existiera la UFW.", correcta: false, explicacion: "Deukmejian llega en 1983, tras la fundación de 1962." },
        { texto: "Porque los Teamsters nunca firmaron contratos con los growers.", correcta: false, explicacion: "Sí firmaron «contratos dulces» (1966, 1970, 1973)." },
        { texto: "Porque Griswold del Castillo publicó su libro biográfico muchos años antes.", correcta: false, explicacion: "La fecha de publicación no decide el argumento; lo decide el orden de los hechos." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "¿En qué medida promovió César Chávez los derechos civiles de los hispanoamericanos en EE.UU. después de 1945? (Mayo 2017)", frecuencia: "Muy alta",
        plan: "Medir grado, no describir. P1 derechos laborales (NFWA, Delano, contratos, ALRA) → P2 participación y visibilidad (CSO/votantes, RFK, boicot, símbolo) → P3 límite de permanencia (Teamsters, 1973, 70.000→15.000) → P4 límite de alcance (10% de los agrícolas; no urbanos, puertorriqueños ni cubanos). Conclusión jerarquizada." },
      { pregunta: "Evalúe las contribuciones de César Chávez al movimiento hispanoamericano. (Nov 2018)", frecuencia: "Muy alta",
        plan: "Separar laboral / política / simbólica y pesar sus límites. P1 laboral → P2 política (registro de votantes, coalición Kennedy–Reuther, Prop. 22, ALRA) → P3 simbólica (no violencia, orgullo, chicanos) → P4 límites (sindicales, étnicos, autoinfligidos). Heroico (Griswold) vs. revisionista (M. García)." },
      { pregunta: "Evalúe la eficacia de la reforma inmigratoria de EE.UU. (Nov 2021)", frecuencia: "Muy alta",
        plan: "Definir «eficaz» por criterios. P1 1965 fin de cuotas → P2 reunificación y diversidad (Vecchio) → P3 límites: irregular, frontera → P4 1986: amnistía, sanciones, efectos no previstos → P5 años 90 y largo plazo. Conclusión por criterios: alta/parcial/baja." },
      { pregunta: "Evalúe los efectos de la reforma inmigratoria en la población de ascendencia hispana después de 1945. (Mayo 2022)", frecuencia: "Muy alta",
        plan: "Por planos y por grupos. P1 antecedentes (Bracero, Wetback, 1952) → P2 Hart-Celler → P3 diferencias entre grupos (cubanos, mexicanos, puertorriqueños) → P4 IRCA (movilidad y discriminación) → P5 años 90. Conclusión: positivos pero desiguales y limitados por el control." },
      { pregunta: "«César Chávez fue mayormente exitoso en la promoción de los intereses de la población hispanoamericana». ¿En qué medida está de acuerdo? (Nov 2024)", frecuencia: "Muy alta",
        plan: "Posición clara sobre «mayormente». P1 a favor: laboral → P2 a favor: político-simbólico → P3 en contra: organizativo y de largo plazo → P4 en contra: alcance (quiénes quedaron afuera). Conclusión: «mayormente exitoso en su campo y en su década; no para todos ni para siempre»." },
      { pregunta: "Evalúe la eficacia de los métodos de protesta del movimiento hispanoamericano. (posible)", frecuencia: "Media",
        plan: "Tesis del «traslado del conflicto». P1 huelga + boicot → P2 marcha y ayuno → P3 métodos chicanos y Young Lords → P4 armas vs. litigio. Jerarquía: boicot y litigio > marcha/ayuno > walkouts/partido/ocupación > huelga sola/armas." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida logró sus objetivos el movimiento hispanoamericano?",
        tesis: "Logró sus objetivos en proporción inversa a su materialidad: casi del todo en identidad y reconocimiento, parcialmente en leyes y representación, poco en sindicato, tierra y poder propio.",
        pasos: [
          "Sindical: éxito 1966–70 (Schenley, Delano 1,80 $/h, 70.000 en 1972) y ALRA 1975 vs. colapso 1973 (6.500), purgas, 15.000 (80s). M. García.",
          "Educación y política: walkouts (39 demandas, aceptadas y luego incumplidas), Ley Bilingüe 1968, estudios chicanos/MEChA 1969, LRUP (Crystal City 1970 vs. 0/11 en 1971). Muñoz.",
          "Inmigración y tierra: fin del bracero 1964, Hart-Celler, Plyler 1982, IRCA 1986 (2,7 M) vs. tope hemisférico, 1974; Tijerina sin tierra.",
          "Identidad: «chicano», Aztlán, «nuevo puertorriqueño» (Jeffries), Chávez héroe nacional vs. nacionalismo que aísla, sexismo (Houston 1971). Gitlin.",
          "Conclusión: Anderson vs. Gitlin vs. García; «cuanto más simbólico el objetivo, mayor el éxito»."
        ] },
      { titulo: "Plan B · Examine las razones de los éxitos y los fracasos del movimiento.",
        tesis: "Los éxitos se explican por la conjunción de contexto, método y aliados entre 1964 y 1975; los fracasos, por una estructura hostil agravada por decisiones propias y fragmentación.",
        pasos: [
          "Contexto: fin del bracero (1964), Great Society y derechos civiles, Brown 1975; reverso: Reagan, Nixon (uvas al Pentágono), Deukmejian, recesión 1974–75.",
          "Método y aliados: no violencia + boicot (17 M) + RFK, Reuther, iglesias, estudiantes, Ford/MALDEF (Anderson); reverso: dependencia de aliados (RFK muerto 1968).",
          "Liderazgo y cuadros: Chávez + Huerta, Itliong, Ganz, Medina, Cohen; reverso: purgas 1977–81, La Paz, Synanon, 1974 (M. García).",
          "Estructura y fragmentación: NLRA 1935, esquiroles y pesticidas, Teamsters; cuatro líderes, Gonzales vs. Gutiérrez, sexismo, represión (East L.A. 13, Moratoria, COINTELPRO) y cooptación (Nixon, universidades). Muñoz, Gitlin.",
          "Conclusión: la estructura explica por qué el éxito fue siempre parcial; las decisiones propias, por qué 1975 no se aprovechó; la fragmentación, por qué no hubo movimiento nacional."
        ] },
      { titulo: "Plan C · Compare y contraste los movimientos afroamericano e hispanoamericano.",
        tesis: "Más similares en métodos que en objetivos, y más distintos en resultados legales que en costo humano.",
        pasos: [
          "Objetivos: fin de la segregación de jure y voto vs. sindicato, tierra, escuela e identidad frente a discriminación de facto + el problema migratorio.",
          "Métodos: misma caja (Anderson): Montgomery → uva; Selma → Sacramento; sit-ins → walkouts; Panteras → Brown Berets/Young Lords; Black Power → Brown Power. Diferencia: el sindicato y la religión católica.",
          "Liderazgo: King + SCLC, SNCC, NAACP vs. Chávez + Tijerina, Gonzales, Gutiérrez, Jiménez sin organización nacional.",
          "Respuesta del Estado: leyes 1964, 1965, 1968 vs. ninguna ley federal (solo ALRA 1975) pero sí leyes migratorias (1965, 1986); represión y cooptación en ambos.",
          "Conclusión: mismo método, distinto resultado, por tamaño (5% vs. 11%), dispersión, ruralidad y ausencia de segregación legal que una Corte pudiera derribar."
        ] },
      { titulo: "Plan D · «El movimiento chicano fue un fracaso.» ¿En qué medida está de acuerdo?",
        tesis: "De acuerdo si «fracaso» significa no alcanzar sus objetivos declarados; en desacuerdo si significa no producir cambios.",
        pasos: [
          "A favor: Tijerina sin tierra; LRUP 0/11 (1971), extinta 1978; Cruzada tras 1973; Berets 1972; Moratoria reprimida; ninguna ley federal; sexismo.",
          "En contra: «chicano» y Aztlán, estudios chicanos y MEChA, Ley Bilingüe 1968, Crystal City 1970, MALDEF, NCLR, Caucus 1976. Muñoz, Anderson.",
          "Por qué: represión (COINTELPRO, Salazar), nacionalismo que aísla (Gitlin), cooptación, fin de los sesenta.",
          "La medida: comparado con la UFW (contratos y ley) y con los negros (leyes federales).",
          "Conclusión: «fracaso político, éxito cultural»; Muñoz tiene razón en el legado, Gitlin en el precio."
        ] },
      { titulo: "Plan E · ¿Hasta qué punto los éxitos de la UFW se debieron al liderazgo de Chávez?",
        tesis: "Causa necesaria, no suficiente; y su liderazgo explica también los fracasos.",
        pasos: [
          "Chávez sí: 1962 (contra Ross y Alinsky), asociación antes que sindicato, no violencia (ayuno 1968), fusión con AFL-CIO, Arizona 1972.",
          "Otros: Itliong empieza (8-IX-1965); Huerta negocia (Schenley, Delano) y hace lobby contra el bracero; Ganz, Medina, Govea ganan el boicot; Cohen escribe la ALRA (M. García, Bardacke).",
          "Contexto y aliados: fin del bracero 1964, Great Society, RFK, Reuther, iglesias, Jerry Brown; bajo Reagan no hubo ley.",
          "Liderazgo como causa del colapso: La Paz, Synanon 1977, purgas, 1974, filipinos.",
          "Conclusión: hizo posible la UFW; no supo, o no quiso, hacerla durar."
        ] },
      { titulo: "Plan F · Examine el papel de la juventud / de los Young Lords.",
        tesis: "La juventud fue el corazón del movimiento chicano (Muñoz) y los Young Lords su versión puertorriqueña y urbana; el legado fue identitario, no institucional (Jeffries) o cedió la política a la reacción (Gitlin).",
        pasos: [
          "Juventud: 130.000 niños segregados → walkouts 6-III-1968 (15.000, 39 demandas, East L.A. 13) → Denver y Santa Bárbara 1969 (MEChA) → Moratoria 1970 (Oropeza).",
          "Contrapeso: la UFW (adultos, campo) y la generación mexicano-americana. Gitlin para los límites.",
          "Young Lords: 1959 pandilla → 1967 Jiménez → «Garbage Offensive» 1969 → servicios, iglesia, McCormick, Lincoln → COINTELPRO hasta 1972 → «pureza ideológica».",
          "Juicio: Jeffries («nuevo tipo de puertorriqueño») vs. Gitlin (rabia y aislamiento); comparar con Chávez (boicot vs. ocupación) y con los chicanos (urbano vs. agrícola).",
          "Conclusión: ganaron orgullo e identidad; perdieron poder y organización. Puente con 17.5."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida promovió César Chávez los derechos civiles de los hispanoamericanos después de 1945?» (Mayo 2017)",
        parrafos: [
          { texto: "En 1962, cuando César Chávez fundó la NFWA, los trabajadores agrícolas eran los únicos obreros de EE.UU. sin derecho legal a sindicalizarse, excluidos de la ley Wagner de 1935 y del salario mínimo de 1938, y los mexicano-americanos carecían de una ley federal equivalente a las que el movimiento afroamericano obtendría en 1964 y 1965. Evaluar «en qué medida» exige entender esos derechos en el sentido amplio que el propio movimiento les daba —dignidad, organización y participación—. Este ensayo sostiene que Chávez los promovió en gran medida en derechos laborales, organización y visibilidad de los agrícolas entre 1962 y 1975, y en medida mucho menor en la permanencia de lo conseguido y en el alcance a toda la población hispana.", nota: "Intro = contexto de partida (exclusión de 1935) + definición de «derechos civiles» (la pregunta es ambigua y vos la fijás) + tesis con jerarquía. Nada de biografía." },
          { texto: "En primer lugar, promovió de forma decisiva los derechos laborales. La NFWA creó una estructura estable en un sector donde las huelgas eran aplastadas con los 400.000 braceros anuales; cuando el 16-IX-1965 se sumó a la huelga iniciada por los filipinos de la AWOC, convirtió una disputa local en una campaña de cinco años: el contrato con Schenley (6-IV-1966, negociado por Huerta), el boicot nacional a la uva (17 M de consumidores) y los contratos de Delano del 29-VII-1970 (1,80 $/h, plan de salud, prohibición del DDT). La UFW alcanzó ~70.000 afiliados (1972) y en 1975 la presión produjo la ALRA. Anderson lo sitúa en la segunda ola del Movimiento: la no violencia de King trasladada a otra minoría.", nota: "Párrafo de logro con evidencia fechada + un historiador (Anderson) usado, no pegado." },
          { texto: "Sin embargo, la medida es mucho menor en permanencia y alcance. Los Teamsters firmaron «contratos dulces»; en 1973, al vencer los de Delano, la huelga terminó con 3.500 arrestos, dos muertos y una UFW de 6.500 afiliados; la ALRA quedó sin fondos (1976) y Deukmejian la vació desde 1983. El resultado es la cifra estrella: de más de 50.000 miembros en los 70 a unos 15.000 a mediados de los 80. Y la UFW nunca pasó del 5–10% de los agrícolas: no tocó a los urbanos (130.000 niños segregados en L.A.), ni a los puertorriqueños (Young Lords) ni a los cubanos, y en 1974 denunció a indocumentados. Matt García añade la causa interna —La Paz, Synanon, purgas—; la cronología la favorece, porque las purgas son anteriores a Deukmejian. Bardacke resume: Chávez fue «líder de un movimiento, no un sindicalista».", nota: "Párrafo de límite con la cifra estrella (70.000→15.000) + dos explicaciones (externa del banco, interna de García) + juicio con criterio (cronología)." },
          { texto: "En conclusión, Chávez promovió los derechos civiles en gran medida si se los mide por lo que abrió —el primer sindicato agrícola duradero, contratos sin precedentes, una ley estatal y la visibilidad de una minoría— y en medida mucho menor por lo que quedó y por a quiénes llegó. La jerarquía es clara: visibilidad y organización primero, derechos legales después, permanencia y alcance al final. Griswold del Castillo tiene razón en lo que Chávez fue para 1962–1975; Matt García, en lo que dejó después.", nota: "Conclusión que jerarquiza y resuelve el debate heroico/revisionista por criterio, no empatando." }
        ] },
      { titulo: "Ensayo 2 · «Evalúe la eficacia de la reforma inmigratoria de EE.UU.» (Nov 2021)",
        parrafos: [
          { texto: "Evaluar la eficacia de la reforma inmigratoria exige primero definir qué se entiende por eficacia, porque las reformas de 1965 y 1986 persiguieron objetivos distintos. Este ensayo usa cinco criterios: igualdad legal, cambio en la composición, reunificación familiar, regularización y control de la irregular. Sostiene que fue muy eficaz en los dos primeros, parcialmente eficaz en reunificación y regularización, y poco eficaz en el control de la inmigración irregular, que creció de un millón de detenciones anuales a comienzos de los ochenta a más de diez millones de residentes indocumentados en 2005.", nota: "La intro hace lo que pide la ficha: «definir qué se entenderá por eficacia» y anunciar que el juicio cambia según el criterio." },
          { texto: "En primer lugar, la reforma de 1965 fue muy eficaz en eliminar la discriminación por origen nacional. Las cuotas de 1924 favorecían al norte de Europa y la ley McCarran-Walter de 1952 las mantuvo; la política hacia México era bifronte (Bracero 1942–64 + Operación Wetback 1954). Sobre ese fondo, Hart-Celler (3-X-1965, firmada al pie de la Estatua de la Libertad) eliminó las cuotas nacionales. Como explica Diane Vecchio, no abrió las fronteras: creó un sistema de preferencias (reunificación, calificados, refugiados). Terry Anderson la inscribe en la Great Society. Si el criterio es la igualdad formal, la eficacia fue alta; por reunificación y diversidad, también, y además duradera.", nota: "Dos criterios en un párrafo, con Vecchio y Anderson integrados; evidencia fechada." },
          { texto: "Sin embargo, la reforma mostró pronto su límite: no controló la irregular, en parte porque ella misma la produjo. Hart-Celler impuso el primer tope al hemisferio occidental (120.000 en 1968; 20.000/país para México en 1976) justo cuando el fin del Bracero cerraba el canal legal, pero la demanda de la agricultura y la confección del Suroeste continuó: a comienzos de los ochenta la Patrulla Fronteriza detenía a más de un millón de personas por año. La IRCA de 1986 (Reagan), tras los fracasos de 1982, 1983 y 1985, combinó amnistía (~2,7 M), sanciones a empleadores, control y antidiscriminación: fue eficaz para regularizar —los legalizados pasaron a construcción, fábricas y vivienda— pero produjo un efecto no previsto, la discriminación contra hispanos documentados, y no resolvió el control. Gatekeeper y la Prop. 187 (1994) lo confirman: hacia 2005 había más de diez millones de indocumentados.", nota: "Un párrafo que une el límite de 1965 con 1986 y los 90, siempre con la ficha del profesor como respaldo («combinó regularización y control»)." },
          { texto: "En conclusión, la eficacia depende del criterio: alta en igualdad y diversidad (1965), parcial en regularización (1986) y baja en control (1980s–2005). El juicio que este ensayo propone es que la reforma fue eficaz en lo que una ley puede decidir —quién entra legalmente— e ineficaz en lo que decide el mercado de trabajo —quién entra de hecho—; y que su mayor logro, la diversidad, fue también la fuente de su mayor problema político, la reacción de 1994.", nota: "Conclusión por criterios (alta/parcial/baja) tal como pide la ficha + un juicio propio (ley vs. mercado), sin datos nuevos." }
        ] }
    ],
    guia: {
      tesis: "Respondé la pregunta en una frase con veredicto y jerarquía. Tesis maestra del tema: «Medido por sus objetivos declarados el movimiento fracasó; medido por sus efectos (ALRA, amnistía de 1986, estudios chicanos, una élite política y el fin de la invisibilidad) transformó la posición de los hispanos.» Para Chávez: «mayormente exitoso en su campo y en su década; no para todos ni para siempre».",
      argumentos: [
        "Usá la plantilla del profesor: Afirmación → Evidencia (hecho + fecha + cifra) → Explicación → Perspectiva (historiador + tu juicio) → Vuelta a la pregunta.",
        "Distinguí siempre los dos movimientos: UFW sindical (contratos) vs. chicano nacionalista (identidad y poder); Chávez símbolo del segundo, no su líder.",
        "En «éxitos y fracasos»: tres planos (material parcial y reversible / legal parcial y duradero / cultural logrado); cuanto más simbólico el objetivo, mayor el éxito."
      ],
      evidencia: [
        "Chávez: NFWA 30-IX-1962 · Delano 16-IX-1965 (filipinos primero) · Schenley 6-IV-1966 · boicot 17 M · Delano 29-VII-1970 (1,80 $/h, DDT) · 70.000 (1972) · ALRA 4-VI-1975 · 70.000→15.000.",
        "Chicanos: walkouts 6-III-1968 (15.000, 39 demandas) · Aztlán/Santa Bárbara 1969 (MEChA) · Raza Unida Crystal City 1970 vs. 0/11 (1971) · Moratoria 29-VIII-1970 (3 muertos, Salazar) · Tijerina Tierra Amarilla 1967.",
        "Reforma: Bracero fin 31-XII-1964 · Hart-Celler 3-X-1965 · tope hemisférico 1968/1976 · Ajuste Cubano 1966 · IRCA XI-1986 (2,7 M) · Gatekeeper y Prop. 187 (1994) · >10 M (2005).",
        "Fechas espejo: 1954 Hernandez↔Wetback · 1965 Hart-Celler↔Delano · 1970 Delano↔Moratoria · 1986↔1994."
      ],
      historiografia: [
        "Matt García (revisionista: derrota autoinfligida), Carlos Muñoz (identidad juvenil), Terry Anderson (optimista: dos olas), Todd Gitlin (autocrítico: esperanza→rabia).",
        "Regalo: Griswold del Castillo & R. García (heroico), Bardacke («dos almas»), Pawel, Oropeza (Moratoria), Jeffries (Young Lords, DE CLASE), Vecchio (1965, DE CLASE).",
        "No cites de adorno: usá un historiador contra otro y decidí quién explica mejor (p. ej., García el fracaso por cronología; Anderson el legado)."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej., «la decadencia fue solo culpa de los enemigos externos» de Griswold del Castillo, o «1965 abrió las fronteras») y refutala con evidencia (las purgas son anteriores a Deukmejian; Vecchio: la ley creó prioridades, no abrió fronteras)."
    }
  }
});
