/* ============================================================
   tema-15-4.js — 15.4 Lyndon B. Johnson (1963–1969)
   Transcripción fiel de la guía Paper 3 "EEUU 1945–1980" (Tema 15).
   Solo el contenido de Johnson. No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "15.4",
  carpeta: "p3-s15",
  titulo: "Lyndon B. Johnson",
  subtitulo: "Great Society · guerra contra la pobreza · derechos civiles · éxitos y fracasos",
  periodo: "1963–1969",
  estado: "listo",
  etiquetas: ["Johnson", "Great Society", "guerra contra la pobreza", "derechos civiles", "Vietnam", "Medicare", "EEUU"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Johnson logró lo que Truman y Kennedy no pudieron porque tuvo lo que a ellos les faltó: mandato (61% en 1964), mayorías de 2/3 (295 diputados y 68 senadores) y oficio legislativo. En 18 meses convirtió en ley casi toda la agenda liberal: la trilogía de derechos civiles (64–65–68), Medicare y Medicaid, la ESEA, y bajó la pobreza del 22% al 12%. Pero la guerra de Vietnam («armas y mantequilla») devoró los fondos, dividió al partido, alimentó la inflación y los disturbios, y lo obligó a no presentarse en 1968. El mayor legislador desde FDR, un «gigante con fallas» destruido no por el Congreso sino por una guerra que él mismo eligió.",
    historiadoresLinea: [
      { nombre: "Robert Dallek", linea: "«Gigante con fallas»: el mayor legislador social desde Roosevelt, cuya obra fue devorada por Vietnam y por su propio carácter. Los éxitos internos son reales y permanentes; Vietnam es la falla, no la regla." },
      { nombre: "Paul Johnson", linea: "La Great Society como expansión estatal cara, burocrática y contraproducente: gastó sin resolver la pobreza y alimentó la inflación y el desencanto de los 70 que prepararon a Reagan («la pobreza ganó»)." },
      { nombre: "Willi Paul Adams", linea: "Culminación del reformismo iniciado en 1933: ampliación del rol federal en salud, educación y derechos; su límite no fue ideológico sino fiscal y bélico (la guerra «en dos frentes» no era sostenible)." },
      { nombre: "De regalo", linea: "El informe Kerner (1968): «dos sociedades, una negra y una blanca, separadas y desiguales». Reagan y Murray («Losing Ground», 1984): crítica conservadora de dependencia." }
    ],
    datosClave: [
      { grupo: "Johnson: datos que valen oro", items: [
        "22-XI-1963 jura en el Air Force One · 27-XI-1963 discurso «Continuemos» (Let us continue).",
        "Elección 1964: 61,1% contra Goldwater (486–52); 295 diputados y 68 senadores (mayorías de 2/3).",
        "8-I-1964 declara la «guerra incondicional» a la pobreza · 22-V-1964 anuncia la Great Society (Univ. de Michigan).",
        "II-1964 Revenue Act (recorte de JFK, 11.500 M $) · 2-VII-1964 Civil Rights Act (primera cloture en derechos civiles).",
        "VIII-1964 Economic Opportunity Act (OEO, Job Corps, VISTA, Head Start) · IV-1965 ESEA.",
        "30-VII-1965 Medicare y Medicaid (firmada con Truman a su lado) · 6-VIII-1965 Voting Rights Act.",
        "1965: HUD (Weaver), Higher Education Act, NEA/NEH, Immigration Act (Hart-Celler).",
        "1967: Thurgood Marshall a la Corte Suprema (primer juez negro) · 11-IV-1968 Fair Housing Act.",
        "Pobreza: 22,4% (1959) → 19% (1964) → 12,1% (1969); pobreza negra de ~55% a ~32%.",
        "Registro negro en Mississippi: 7% (1964) → 59% (1968).",
        "Vietnam: 536.000 soldados en 1968, Tet; «armas y mantequilla»; 31-III-1968 no se presenta; sale con ~36%."
      ]}
    ],
    comparacion: [
      { eje: "Por qué logró lo que Truman y Kennedy no", texto: "No fue una diferencia de ideas sino de mayorías (295 diputados y 68 senadores tras 1964) y de oficio legislativo. La cloture necesitaba 67 votos: por eso importan los 68 senadores." },
      { eje: "Trilogía de derechos civiles", texto: "64–65–68 = Lugares (públicos) – Voto – Vivienda. El año milagro es 1965 (EMVIH: Educación, Medicare, Voto, Inmigración, HUD)." },
      { eje: "Guerra contra la pobreza", texto: "Funcionó a medias: pobreza casi a la mitad (22→12%), pero la OEO nunca pasó de ~2.000 M $ frente a 25–30.000 M $ anuales de Vietnam. «Armas y mantequilla» no se sostuvo." },
      { eje: "Johnson vs Kennedy en derechos civiles", texto: "Kennedy fijó la agenda; Johnson la convirtió en ley. Pero la CRA 1964 y la VRA 1965 acabaron con el Jim Crow legal sin tocar la desigualdad económica." }
    ],
    veredictos: [
      { titulo: "Éxitos y fracasos", texto: "Éxitos reales y permanentes (trilogía, Medicare, ESEA, pobreza a la mitad, el mayor legislador desde FDR); fracaso: Vietnam devoró los fondos, dividió al partido y destruyó su presidencia." },
      { titulo: "La causa del fracaso", texto: "«Esa maldita guerra mató a la dama que realmente amaba, la Great Society» (Johnson). Fue derrotado no por el Congreso, como Truman, sino por una guerra que él mismo eligió." },
      { titulo: "Historiografía", texto: "Gigante legislador (Dallek) vs Estado caro e ineficaz (Paul Johnson); el límite no fue ideológico sino fiscal y bélico (Adams)." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Robert Dallek", nacionalidad: "Estadounidense (UCLA/Boston U.), biógrafo",
      obra: "Flawed Giant [LBJ] (1998)",
      postura: "Balance: «gigante con fallas»",
      funcion: "El balance que ordena todo: el mayor legislador destruido por Vietnam.",
      ideaCentral: "Un «gigante con fallas»: el presidente de mayor talento legislativo del siglo, cuyo mismo exceso de ambición y de orgullo lo llevó a creer que podía ganar la guerra y la pobreza a la vez. Los éxitos internos son reales y permanentes; Vietnam es la falla, no la regla. La mayor presidencia legislativa desde Roosevelt fue derrotada no por el Congreso, como la de Truman, sino por una guerra que ella misma eligió.",
      matiz: "Convierte en tesis la frase de Johnson: «esa maldita guerra mató a la dama que realmente amaba, la Great Society». El fracaso es personal y bélico, no una condena del reformismo.",
      fraseLista: "Dallek define a Johnson como un «gigante con fallas»: el mayor legislador social desde Roosevelt, cuya obra fue devorada por Vietnam y por su propio carácter.",
      paraPreguntas: ["Éxitos y fracasos de Johnson", "Great Society y Vietnam", "Historiografía (conclusión)"]
    },
    {
      nombre: "Paul Johnson", nacionalidad: "Británico, periodista-historiador conservador",
      obra: "Estados Unidos: la historia (1997)",
      postura: "Conservador: Estado caro e ineficaz",
      funcion: "La crítica conservadora a la Great Society.",
      ideaCentral: "La Great Society como expansión estatal cara, burocrática y contraproducente: gastó sin resolver la pobreza y alimentó la inflación y el desencanto de los años 70 que prepararon a Reagan. Se puede citar junto a Reagan («libramos una guerra contra la pobreza y la pobreza ganó») y a Murray (Losing Ground, 1984).",
      matiz: "Nota del PDF: no confundir al historiador Paul Johnson con el presidente Lyndon B. Johnson; en el ensayo escribí siempre «el historiador Paul Johnson» o «P. Johnson».",
      fraseLista: "Para el historiador Paul Johnson, la Great Society fue una expansión estatal cara y contraproducente que gastó sin resolver la pobreza y alimentó el desencanto de los 70.",
      paraPreguntas: ["Crítica conservadora de la Great Society", "¿Resolvió la pobreza?", "Camino hacia Reagan"]
    },
    {
      nombre: "Willi Paul Adams", nacionalidad: "Alemán (Universidad Libre de Berlín)",
      obra: "Los Estados Unidos de América (Historia Universal Siglo XXI)",
      postura: "Social: culminación del reformismo",
      funcion: "Situar a Johnson como la culminación del New Deal, frenada por lo fiscal y lo bélico.",
      ideaCentral: "La Great Society fue la culminación del reformismo iniciado en 1933: la ampliación del rol federal en salud, educación y derechos. Su límite no fue ideológico sino fiscal y bélico: la guerra «en dos frentes» (armas y mantequilla) no era sostenible.",
      matiz: "A diferencia de la crítica conservadora, Adams no ve un fracaso del modelo reformista, sino el agotamiento de su financiamiento por culpa de Vietnam.",
      fraseLista: "Para Adams, la Great Society culminó el reformismo iniciado en 1933, y su límite no fue ideológico sino fiscal y bélico: la guerra en dos frentes no era sostenible.",
      paraPreguntas: ["La Great Society como culminación del New Deal", "Límite fiscal/bélico", "Continuidad desde Truman"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1963, fecha: "22–27-XI-1963", pais: "EEUU", titulo: "«Continuemos»",
      descripcion: "Johnson jura en el Air Force One el 22-XI-1963. En el discurso al Congreso del 27-XI, «Continuemos» (Let us continue): toma los derechos civiles y el recorte de impuestos de Kennedy como homenaje al muerto. Usa el «espíritu de esperanza» y el duelo nacional.",
      causas: ["Asesinato de Kennedy en Dallas."],
      consecuencias: ["Convierte el duelo en impulso legislativo.", "El recorte de impuestos (Revenue Act, II-1964) y la CRA 1964 son la agenda de JFK heredada."] },
    { anio: 1964, fecha: "1964", pais: "EEUU", titulo: "Great Society, guerra a la pobreza y mandato",
      descripcion: "El 8-I declara la «guerra incondicional» a la pobreza; el 22-V anuncia la Great Society en la Univ. de Michigan. Gana la elección con 61,1% contra Goldwater (486–52): 295 diputados y 68 senadores, mayorías de 2/3.",
      causas: ["Duelo por Kennedy + oficio de Johnson + rechazo a Goldwater."],
      consecuencias: ["Las mayorías de 2/3 permiten romper filibusters: lo que ni Truman (1949) ni Kennedy (1961) tuvieron."] },
    { anio: 1964, fecha: "2-VII-1964", pais: "EEUU", titulo: "Civil Rights Act 1964",
      descripcion: "Prohíbe la segregación en lugares públicos (Título II) y la discriminación laboral (Título VII, crea la EEOC); corta fondos federales a quien discrimine. El filibuster de 75 días se rompe con la primera cloture en derechos civiles (10-VI-1964, con Dirksen, líder republicano).",
      causas: ["Proyecto de JFK (VI-1963), ampliado; mandato y mayorías.", "Bipartidismo con el republicano Dirksen."],
      consecuencias: ["Lo que Truman pidió en 1948. «Hemos perdido el Sur por una generación» (LBJ)."] },
    { anio: 1964, fecha: "VIII-1964", pais: "EEUU", titulo: "Economic Opportunity Act · OEO",
      descripcion: "Crea la Oficina de Oportunidad Económica (OEO, Sargent Shriver): Job Corps (jóvenes), VISTA («Cuerpo de Paz interno»), programas de acción comunitaria con «máxima participación posible» de los pobres, Head Start (preescolar, 1965), Upward Bound. ~1.000 M $ el primer año.",
      causas: ["La guerra contra la pobreza necesita un organismo ejecutor."],
      consecuencias: ["El arma central contra la pobreza; crítica: presupuesto pequeño y choque local (alcaldes vs comunidades)."] },
    { anio: 1965, fecha: "1965", pais: "EEUU", titulo: "El año milagro (EMVIH)",
      descripcion: "IV-1965 ESEA (primera ayuda federal general a la educación, 1.000 M $; «al niño, no a la escuela»). 30-VII Medicare y Medicaid (firmada en Independence con Truman a su lado). 6-VIII Voting Rights Act (tras Selma, 7-III, «Domingo sangriento», y «We shall overcome», 15-III). IX–XI: HUD (Weaver), Higher Education Act, NEA/NEH, Immigration Act (Hart-Celler).",
      causas: ["Mandato de 1964 + oficio legislativo + presión del movimiento (Selma)."],
      consecuencias: ["Lo que Truman (1949) y Kennedy (1961) no pudieron.", "Hart-Celler: la ley con más consecuencias demográficas del período."],
      historiador: "Adams: culminación del reformismo iniciado en 1933." },
    { anio: 1965, fecha: "6-VIII-1965", pais: "EEUU", titulo: "Voting Rights Act · efecto medible",
      descripcion: "Prohíbe las pruebas de alfabetización; supervisores federales del registro en el Sur. Efecto medible: el registro negro en Mississippi pasa del 7% (1964) al 59% (1968).",
      causas: ["Selma y el «Domingo sangriento» (7-III-1965)."],
      consecuencias: ["Fin legal del Jim Crow en el voto."] },
    { anio: 1967, fecha: "1967", pais: "EEUU", titulo: "Disturbios · Marshall en la Corte",
      descripcion: "Thurgood Marshall, primer juez negro de la Corte Suprema. Pero estallan disturbios urbanos (Watts VIII-1965: 34 muertos; Newark y Detroit 1967: 26 y 43 muertos). La «guerra en dos frentes» (armas y mantequilla) dispara la inflación (1,6% en 1965 → 5,5% en 1969).",
      causas: ["Expectativas desbordadas; segregación legal terminada pero desigualdad económica intacta."],
      consecuencias: ["Backlash blanco (Wallace 13,5% en 1968); informe Kerner (1968): «dos sociedades, separadas y desiguales»."] },
    { anio: 1968, fecha: "31-III / 11-IV-1968", pais: "EEUU", titulo: "No se presenta · Fair Housing Act",
      descripcion: "Tras la ofensiva del Tet (I-1968, 536.000 soldados) y la «brecha de credibilidad», Johnson anuncia el 31-III que no se presenta. El 11-IV firma la Fair Housing Act (una semana después del asesinato de King, 4-IV), que cierra la trilogía 1964–65–68.",
      causas: ["Vietnam devora los fondos y divide al partido (McCarthy, RFK)."],
      consecuencias: ["Sale con ~36% de aprobación; la coalición del New Deal se rompe en 1968 (Chicago, Wallace, Nixon)."],
      historiador: "Dallek: destruido no por el Congreso sino por una guerra que él mismo eligió." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Johnson es el <b>mayor legislador desde Roosevelt</b> y, a la vez, el presidente <b>destruido por Vietnam</b>. La clave del tema es entender por qué logró lo que Truman y Kennedy no pudieron (mandato + mayorías + oficio) y por qué se le derrumbó todo («armas y mantequilla»).</p>

          <h3>Lo que el examinador quiere ver</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Banda</th><th>Qué pide</th><th>Qué significa en tu ensayo</th></tr></thead>
            <tbody>
              <tr><td>13–15 (el 7)</td><td>Tesis clara, conocimiento preciso (fechas, cifras, leyes), análisis, perspectivas evaluadas, conclusión coherente.</td><td>Tesis «gigante con fallas»; datos como «pobreza 22→12%» o «61% en 1964»; Dallek vs P. Johnson vs Adams; conclusión con veredicto.</td></tr>
              <tr><td>10–12</td><td>Lo mismo, pero con algún párrafo narrativo o historiadores sólo mencionados.</td><td>La diferencia está en usar al historiador, no en citarlo.</td></tr>
              <tr><td>7–9</td><td>Conocimiento correcto pero descriptivo.</td><td>Enumerás las leyes de 1965. No pasa de acá sin argumento.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>La «trilogía de derechos civiles»: 64–65–68 = Lugares (públicos) – Voto – Vivienda.</b> Y el <b>«paquete de 1965»</b> (el año milagro): <b>E·M·V·I·H</b> = Educación (ESEA) · Medicare · Voto (VRA) · Inmigración · HUD. Si recordás «1965 = EMVIH», tenés el párrafo de éxitos.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Johnson aprobó más legislación social que cualquier presidente desde Roosevelt: en dieciocho meses convirtió en ley casi toda la agenda que Truman había propuesto en 1949 y Kennedy en 1961. La diferencia no fue de ideas sino de mayorías (295 diputados y 68 senadores tras 1964) y de oficio legislativo.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Great Society</b> («Gran Sociedad») = programa anunciado en la Univ. de Michigan (22-V-1964): ataca pobreza, discriminación racial, ciudades, educación, salud, medio ambiente. <b>Guerra contra la pobreza</b> = la parte dedicada a la pobreza (declarada «incondicional» el 8-I-1964). <b>Medicare</b> = salud para mayores de 65; <b>Medicaid</b> = salud para pobres. <b>«Armas y mantequilla» (guns and butter)</b> = intentar pagar Vietnam y la Great Society a la vez sin subir impuestos → déficit e inflación. <b>Backlash</b> = reacción de los votantes blancos contra los derechos civiles y los disturbios. <b>Filibuster/cloture</b>: en 1964 la cloture necesitaba 67 votos (por eso importan los 68 senadores).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Los examinadores odian «Johnson fracasó por Vietnam» a secas. Vietnam es el factor principal, pero tenés que mostrar los otros: presupuesto de la OEO, choque con alcaldes, backlash, disturbios, inflación, límites de la legislación (Jim Crow legal vs desigualdad económica). Y no digas que «todo pasó gracias al duelo por Kennedy»: el duelo ayudó en 1964; en 1965 fue el mandato electoral y el oficio de Johnson.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué significa la regla «1965 = EMVIH»?", etiqueta: "truco",
            opciones: [
              { texto: "Educación (ESEA), Medicare, Voto (VRA), Inmigración y HUD: el paquete del año milagro.", correcta: true, explicacion: "Correcto: resume las grandes leyes de 1965." },
              { texto: "Economía, Mandato, Vietnam, Inflación y Huelgas.", correcta: false, explicacion: "No corresponde a la mnemotecnia del PDF." },
              { texto: "Las cinco batallas de la guerra de Vietnam en 1965, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "EMVIH es sobre leyes internas, no sobre Vietnam." },
              { texto: "Los cinco estados que ganó Goldwater en 1964.", correcta: false, explicacion: "No tiene relación con el resultado electoral." }
            ] },
          { pregunta: "¿Por qué está mal decir «Johnson fracasó por Vietnam» a secas?", etiqueta: "trampa",
            opciones: [
              { texto: "Porque hay que mostrar también la OEO subfinanciada, los disturbios, el backlash y los límites de la ley.", correcta: true, explicacion: "Correcto: Vietnam es el factor principal, pero no el único." },
              { texto: "Porque Vietnam no tuvo ningún efecto sobre la Great Society, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "Sí lo tuvo: «armas y mantequilla» devoró los fondos." },
              { texto: "Porque la Great Society no existió en realidad.", correcta: false, explicacion: "Existió y fue enorme (trilogía, Medicare, ESEA)." },
              { texto: "Porque todo se debió sólo al duelo por Kennedy.", correcta: false, explicacion: "El duelo ayudó en 1964; en 1965 pesaron el mandato y el oficio de LBJ." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Quién es y por qué logró lo que otros no",
        html: `
          <h3>El hombre</h3>
          <p>Texano, maestro rural en su juventud (vio la pobreza mexicano-americana), congresista del New Deal, líder de la mayoría del Senado (1955–61): conocía cada resorte del Congreso. «No era un hombre muy simpático» (Dean Acheson): presionaba, amenazaba, halagaba («el tratamiento Johnson»), y funcionaba.</p>

          <h3>El momento y el mandato</h3>
          <ul>
            <li><b>22–27-XI-1963:</b> jura en el Air Force One; en el discurso «Continuemos» toma los derechos civiles y el recorte de impuestos de Kennedy como homenaje. Usa el «espíritu de esperanza» y el duelo nacional.</li>
            <li><b>1964:</b> gana con 61,1% contra Goldwater (486–52; Goldwater sólo gana Arizona y 5 estados del Sur profundo). Los demócratas llegan a 295 diputados y 68 senadores: mayorías de 2/3, capaces de romper filibusters. Es lo que ni Truman (1949) ni Kennedy (1961) tuvieron.</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La diferencia entre Johnson y sus dos antecesores demócratas no fue de ideas sino de mayorías y de oficio: con 295 diputados, 68 senadores y el conocimiento de cada resorte del Congreso, convirtió en ley lo que Truman y Kennedy sólo habían podido proponer.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Filibuster/cloture:</b> en 1964 la cloture (cortar el filibuster) necesitaba 67 votos. Por eso importan los 68 senadores demócratas: podían romper el bloqueo sureño que había hundido los derechos civiles de Truman y Kennedy.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué logró Johnson lo que Truman y Kennedy no pudieron?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Por el mandato de 1964 (61%), las mayorías de 2/3 y su oficio legislativo.", correcta: true, explicacion: "Correcto: no fue diferencia de ideas sino de mayorías y de oficio." },
              { texto: "Porque abandonó por completo la agenda de Truman y Kennedy, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "Al contrario: la convirtió en ley; tomó el recorte de impuestos y la CRA de JFK." },
              { texto: "Porque la coalición conservadora desapareció del Congreso.", correcta: false, explicacion: "La coalición existía; las mayorías de 2/3 permitían romper sus filibusters." },
              { texto: "Porque gobernó íntegramente por orden ejecutiva.", correcta: false, explicacion: "Gobernó aprobando leyes en el Congreso, no por decreto." }
            ] },
          { pregunta: "¿Por qué eran clave los 68 senadores demócratas de 1964?", etiqueta: "concepto",
            opciones: [
              { texto: "Porque la cloture necesitaba 67 votos para romper el filibuster sureño.", correcta: true, explicacion: "Correcto: con 68 podían cortar el bloqueo que frenó a Truman y JFK." },
              { texto: "Porque 68 era la mayoría simple necesaria para gobernar.", correcta: false, explicacion: "No: la clave era superar el umbral de cloture (67), no la mayoría simple." },
              { texto: "Porque permitían reformar la Constitución sin problemas.", correcta: false, explicacion: "No se trataba de enmiendas constitucionales, sino de romper filibusters." },
              { texto: "Porque igualaban exactamente a los senadores republicanos, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Eran mayoría holgada, no un empate." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · La avalancha legislativa (1964–1968)",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Fecha</th><th>Ley</th><th>Qué hace / lectura</th></tr></thead>
            <tbody>
              <tr><td>II-1964</td><td>Revenue Act</td><td>Recorte de impuestos de 11.500 M $ (propuesta de JFK). Boom: PNB +5%, desempleo baja a 4%. Herencia de Kennedy; financia la Great Society… hasta Vietnam.</td></tr>
              <tr><td>2-VII-1964</td><td>Civil Rights Act</td><td>Prohíbe la segregación en lugares públicos (Título II) y la discriminación laboral (Título VII, crea la EEOC). Filibuster de 75 días roto por la primera cloture en derechos civiles (con Dirksen). «Hemos perdido el Sur por una generación» (LBJ).</td></tr>
              <tr><td>VIII-1964</td><td>Economic Opportunity Act</td><td>Crea la OEO (Shriver): Job Corps, VISTA, acción comunitaria, Head Start, Upward Bound. ~1.000 M $ el primer año. El arma central de la guerra contra la pobreza; crítica: presupuesto pequeño y choque local.</td></tr>
              <tr><td>IV-1965</td><td>ESEA</td><td>Primera ayuda federal general a la educación: 1.000 M $ (Título I para escuelas pobres). Esquiva el problema de las escuelas religiosas ayudando «al niño, no a la escuela». Lo que Truman (1949) y Kennedy (1961) no pudieron.</td></tr>
              <tr><td>30-VII-1965</td><td>Medicare y Medicaid</td><td>Salud para mayores de 65 y para pobres. Firmada en Independence, Missouri, con Truman a su lado. El seguro médico de Truman de 1949, 16 años después.</td></tr>
              <tr><td>6-VIII-1965</td><td>Voting Rights Act</td><td>Prohíbe las pruebas de alfabetización; supervisores federales en el Sur. Tras Selma (7-III, «Domingo sangriento») y «We shall overcome» (15-III). Registro negro en Mississippi del 7% (1964) al 59% (1968).</td></tr>
              <tr><td>IX–XI-1965</td><td>HUD · Higher Education Act · NEA/NEH · Immigration Act</td><td>Depto. de Vivienda y Desarrollo Urbano (Weaver, primer secretario negro); becas; artes y humanidades; Ley Hart-Celler (fin de las cuotas por origen nacional de 1924). El Asuntos Urbanos que le negaron a JFK; Hart-Celler: la ley con más consecuencias demográficas del período.</td></tr>
              <tr><td>1966–67</td><td>Model Cities · Dpto. de Transporte · PBS · Marshall a la Corte</td><td>Renovación urbana; DOT; PBS; Thurgood Marshall, primer juez negro de la Corte (1967); leyes de aire y agua limpios, seguridad de autos (Nader). La Great Society no es sólo pobreza.</td></tr>
              <tr><td>11-IV-1968</td><td>Fair Housing Act</td><td>Prohíbe la discriminación en venta y alquiler de vivienda. Aprobada una semana después del asesinato de King (4-IV). Cierra la trilogía 1964–65–68.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Adams ve en esta avalancha la culminación del reformismo iniciado en 1933: la ampliación del rol federal en salud, educación y derechos. Medicare es «el seguro médico de Truman de 1949, 16 años después»: de ahí que se firmara con Truman al lado.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No reduzcas la Great Society a la guerra contra la pobreza. Hart-Celler (inmigración), el medio ambiente, las artes (NEA/NEH) y PBS muestran su amplitud. Y ojo: la trilogía de derechos civiles (64–65–68) y Medicare son tan centrales como la OEO.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué hizo la Civil Rights Act de 1964?", etiqueta: "fecha",
            opciones: [
              { texto: "Prohibió la segregación en lugares públicos y la discriminación laboral (EEOC); se aprobó con la primera cloture.", correcta: true, explicacion: "Correcto: era el proyecto de JFK, ampliado y aprobado por Johnson." },
              { texto: "Prohibió las pruebas de alfabetización para votar.", correcta: false, explicacion: "Eso es la Voting Rights Act de 1965, no la CRA de 1964." },
              { texto: "Prohibió la discriminación en venta y alquiler de vivienda, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Eso es la Fair Housing Act de 1968." },
              { texto: "Creó Medicare y Medicaid.", correcta: false, explicacion: "Medicare/Medicaid son de 1965, por enmiendas a la Seg. Social." }
            ] },
          { pregunta: "¿Por qué se firmó Medicare con Truman a su lado?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Porque Medicare era el seguro médico que Truman propuso en 1949, aprobado 16 años después.", correcta: true, explicacion: "Correcto: por eso la firma simbólica en Independence, Missouri." },
              { texto: "Porque Truman seguía siendo presidente en 1965.", correcta: false, explicacion: "Truman ya no era presidente; fue un gesto simbólico." },
              { texto: "Porque Truman había diseñado personalmente la ley de 1965, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "No la diseñó; su propuesta de 1949 fue la semilla de la idea." },
              { texto: "Porque Medicare fue idea de Eisenhower, no de Truman.", correcta: false, explicacion: "La idea del seguro médico fue de Truman (Fair Deal, 1949)." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Guerra contra la pobreza: resultados con cifras",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Lo que funcionó</th><th>Lo que no / las críticas</th></tr></thead>
            <tbody>
              <tr><td>Tasa de pobreza: 22,4% (1959) → 19% (1964) → 12,1% (1969); pobreza negra de ~55% a ~32% en la década. La pobreza de mayores cae en picada gracias a Medicare y las subas de la Seg. Social. Head Start, Job Corps, Medicaid, cupones de alimentos (1964) y ESEA sobreviven hasta hoy. El crecimiento económico (desempleo 3,5% en 1969) hizo la mitad del trabajo.</td><td>Presupuesto ínfimo: la OEO nunca pasó de ~2.000 M $ anuales frente a 25–30.000 M $ anuales de Vietnam. «Armas y mantequilla» no se sostuvo. Acción comunitaria: choque entre activistas locales y alcaldes demócratas (Daley en Chicago); confusión y desperdicio.</td></tr>
              <tr><td>&nbsp;</td><td>Expectativas desbordadas: disturbios urbanos igual (Watts VIII-1965: 34 muertos; Newark y Detroit 1967: 26 y 43 muertos; 100+ ciudades tras la muerte de King, 1968). Informe Kerner (1968): «dos sociedades, una negra y una blanca, separadas y desiguales».</td></tr>
              <tr><td>&nbsp;</td><td>Crítica conservadora: creó dependencia y burocracia (P. Johnson; luego Murray, Losing Ground, 1984; Reagan: «la pobreza ganó»). Crítica de izquierda: fue tímida, sin redistribución ni empleo garantizado. Reacción blanca (backlash): Wallace 13,5% en 1968.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>«Armas y mantequilla» (guns and butter)</b> = intentar pagar la guerra de Vietnam y la Great Society a la vez sin subir impuestos → déficit e inflación (1,6% en 1965 → 5,5% en 1969) → recargo impositivo del 10% en 1968 y recortes sociales. Es LA explicación de por qué la Great Society se frena. <b>Backlash</b> = reacción de los votantes blancos contra los derechos civiles y los disturbios.</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Aquí chocan los tres: para Dallek, la guerra contra la pobreza funcionó a medias pero sus logros son reales; para P. Johnson, gastó sin resolver la pobreza y creó dependencia; para Adams, el límite no fue del modelo sino del financiamiento (la guerra en dos frentes no era sostenible).</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La guerra contra la pobreza redujo la tasa del 22% al 12%, pero su presupuesto nunca compitió con el de Vietnam: la OEO rondaba los 2.000 millones anuales frente a los 25.000–30.000 de la guerra, de modo que "armas y mantequilla" era una promesa imposible.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuánto bajó la tasa de pobreza durante la guerra contra la pobreza?", etiqueta: "fecha",
            opciones: [
              { texto: "Del 22,4% (1959) al 12,1% (1969): casi a la mitad.", correcta: true, explicacion: "Correcto: y la pobreza negra bajó de ~55% a ~32%." },
              { texto: "Subió del 12% al 22% por el gasto en Vietnam, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "Bajó, no subió: del 22% al 12%." },
              { texto: "No cambió en absoluto durante toda la década.", correcta: false, explicacion: "Hubo una caída medible gracias a programas y crecimiento." },
              { texto: "Se eliminó por completo la pobreza para 1969.", correcta: false, explicacion: "No se eliminó: quedó en torno al 12%." }
            ] },
          { pregunta: "¿Qué explica que la Great Society se frenara?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "«Armas y mantequilla»: pagar Vietnam y la Great Society sin subir impuestos generó déficit e inflación.", correcta: true, explicacion: "Correcto: la OEO (~2.000 M) no competía con Vietnam (25–30.000 M)." },
              { texto: "Que el Congreso rechazó todas las leyes de la Great Society, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "No: las leyes se aprobaron; el problema fue el financiamiento por Vietnam." },
              { texto: "Que la pobreza en realidad aumentó con cada programa.", correcta: false, explicacion: "La pobreza bajó; el freno fue fiscal y bélico." },
              { texto: "Que Johnson perdió la elección de 1966.", correcta: false, explicacion: "No perdió una elección presidencial; decidió no presentarse en 1968." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Derechos civiles: Johnson vs Kennedy",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Kennedy</th><th>Johnson</th></tr></thead>
            <tbody>
              <tr><td>Convicción</td><td>Cauteloso 1961–62; giro moral en junio de 1963.</td><td>Sureño converso: usa su origen para convencer al Sur («Continuemos»); lo plantea como cuestión moral desde el día 1.</td></tr>
              <tr><td>Método</td><td>Orden ejecutiva, alguaciles, tropas; proyecto de ley al final.</td><td>Ley, ley y ley: 1964, 1965, 1968, con cloture y con Dirksen (bipartidismo).</td></tr>
              <tr><td>Congreso</td><td>Sin mandato; bloqueado.</td><td>Mandato de 1964; mayorías de 2/3.</td></tr>
              <tr><td>Resultados</td><td>Cumplimiento de lo existente; agenda fijada.</td><td>Fin legal de Jim Crow; registro de votantes; Marshall en la Corte; Weaver en el gabinete.</td></tr>
              <tr><td>Límites</td><td>«Asistencia limitada» (King).</td><td>Disturbios, Kerner, nacionalismo negro (Poder Negro, Panteras), backlash; Vietnam desvía fondos y a King (1967).</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Si Kennedy fijó la agenda de derechos civiles, Johnson la convirtió en ley; pero la Civil Rights Act de 1964 y la Voting Rights Act de 1965 acabaron con la segregación legal sin tocar la desigualdad económica, y esa brecha explica que los años de mayor progreso legislativo fueran también los de Watts, Newark y Detroit.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «compare y contraste los derechos civiles de Kennedy y Johnson»: cinco párrafos, uno por fila (convicción, método, Congreso, resultados, límites). Siempre los dos presidentes en la misma frase: «mientras Kennedy…, Johnson…».</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> La paradoja de Johnson: terminó con el Jim Crow legal (segregación por ley) pero no con la desigualdad económica. Por eso los años de más leyes (1964–68) fueron también los de los mayores disturbios urbanos: la ley cambió, la realidad material no tanto.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo se diferencian Kennedy y Johnson en derechos civiles por su método?", etiqueta: "concepto",
            opciones: [
              { texto: "Kennedy usó orden ejecutiva y tropas; Johnson usó ley tras ley (1964, 1965, 1968).", correcta: true, explicacion: "Correcto: JFK fijó la agenda, LBJ la convirtió en ley." },
              { texto: "Ambos sólo usaron órdenes ejecutivas, sin ninguna ley.", correcta: false, explicacion: "Johnson aprobó tres grandes leyes de derechos civiles." },
              { texto: "Kennedy aprobó más leyes de derechos civiles que Johnson, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "Es al revés: Johnson aprobó la trilogía 64–65–68." },
              { texto: "Johnson evitó todo contacto con el tema racial.", correcta: false, explicacion: "Johnson lo planteó como cuestión moral desde el día 1." }
            ] },
          { pregunta: "¿Qué brecha explica los disturbios en los años de más leyes?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El fin del Jim Crow legal sin tocar la desigualdad económica.", correcta: true, explicacion: "Correcto: por eso Watts, Newark y Detroit en plena Great Society." },
              { texto: "La ausencia total de leyes de derechos civiles.", correcta: false, explicacion: "Al contrario: fueron los años de más leyes (64–65–68)." },
              { texto: "El rechazo de Johnson a aprobar la Voting Rights Act, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Johnson sí aprobó la VRA en 1965." },
              { texto: "La negativa de los negros a registrarse para votar.", correcta: false, explicacion: "El registro negro subió fuerte (7%→59% en Mississippi)." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Éxitos y fracasos: balance e historiografía",
        html: `
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Éxitos</span>Trilogía de derechos civiles · Medicare/Medicaid · ESEA · pobreza casi a la mitad · HUD, DOT, NEA, PBS, Hart-Celler · Marshall y Weaver · economía en auge hasta 1966 · el mayor legislador desde FDR.</div>
              <div><span class="et">Fracasos</span>Vietnam (536.000 soldados en 1968, Tet, «brecha de credibilidad»): devora fondos, divide al partido (McCarthy, RFK), destruye su presidencia. 31-III-1968 no se presenta; disturbios y backlash; inflación; guerra contra la pobreza subfinanciada; sale con ~36%; la coalición del New Deal se rompe en 1968.</div>
              <div><span class="et">Veredicto</span>El mayor legislador desde FDR, un «gigante con fallas» (Dallek): derrotado no por el Congreso, como Truman, sino por una guerra que él mismo eligió.</div>
            </div>
          </div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dallek (balance)</th><th>Paul Johnson (conservador)</th><th>Adams (social)</th></tr></thead>
            <tbody>
              <tr><td>Gigante con fallas: el presidente de mayor talento legislativo del siglo, cuyo exceso de ambición y orgullo lo llevó a creer que podía ganar la guerra y la pobreza a la vez. Los éxitos internos son reales y permanentes; Vietnam es la falla, no la regla.</td><td>La Great Society como expansión estatal cara, burocrática y contraproducente: gastó sin resolver la pobreza y alimentó la inflación y el desencanto de los 70 que prepararon a Reagan («la pobreza ganó»).</td><td>Culminación del reformismo iniciado en 1933: ampliación del rol federal en salud, educación y derechos; su límite no fue ideológico sino fiscal y bélico: la guerra «en dos frentes» no era sostenible.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Johnson lo dijo con sus palabras: "esa maldita guerra mató a la dama que realmente amaba, la Great Society". Dallek convierte la frase en tesis: la mayor presidencia legislativa desde Roosevelt fue derrotada no por el Congreso, como la de Truman, sino por una guerra que ella misma eligió.»</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «evalúe qué tan exitoso fue Johnson en implementar su agenda» (pregunta clave del Oxford): P1 éxito extraordinario 1964–65 (EMVIH + CRA 64) y por qué (mandato, oficio, mayorías); P2 éxito en pobreza con cifras (22→12%) y límites (OEO subfinanciada, acción comunitaria); P3 límites sociales (disturbios, Kerner, backlash); P4 Vietnam (armas y mantequilla, inflación, 1968). Historiografía: Dallek vs P. Johnson.</div>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Pregunta clave del Oxford: «¿hasta qué punto las políticas que Johnson promulgó fueron las que Kennedy había creado?». Sí (agenda JFK): impuestos 1964, CRA 1964, Medicare, ESEA, HUD. No (propias): guerra contra la pobreza, VRA, Hart-Celler, Head Start, Fair Housing, NEA. Y la escala es de Johnson. Tesis: mismo esqueleto, otro cuerpo; «Continuemos» fue una estrategia, no una descripción.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo define Dallek a Johnson?", etiqueta: "historiador",
            opciones: [
              { texto: "Un «gigante con fallas»: el mayor legislador desde FDR, devorado por Vietnam.", correcta: true, explicacion: "Correcto: los éxitos internos son reales; Vietnam es la falla, no la regla." },
              { texto: "Una «expansión estatal cara y contraproducente», cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Esa es la crítica conservadora del historiador Paul Johnson." },
              { texto: "«Más retórica que sustancia» en su programa.", correcta: false, explicacion: "Esa frase es de Bailyn sobre Kennedy." },
              { texto: "El fundador de la «presidencia imperial».", correcta: false, explicacion: "Ese concepto es de Schlesinger y es sobre Nixon." }
            ] },
          { pregunta: "¿Qué distingue la postura de Adams de la de Paul Johnson sobre la Great Society?", etiqueta: "historiador",
            opciones: [
              { texto: "Adams ve un límite fiscal/bélico (Vietnam), no un fracaso del modelo reformista.", correcta: true, explicacion: "Correcto: para Adams es la culminación del New Deal frenada por la guerra." },
              { texto: "Adams la considera una expansión estatal contraproducente, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Esa es la visión de Paul Johnson, no la de Adams." },
              { texto: "Adams niega que la pobreza haya bajado en la década.", correcta: false, explicacion: "La pobreza bajó (22→12%); Adams no lo niega." },
              { texto: "Adams sostiene que Vietnam no afectó a la Great Society.", correcta: false, explicacion: "Adams dice justamente que el límite fue fiscal y bélico (Vietnam)." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "Great Society", dorso: "Programa de Johnson (Univ. de Michigan, 22-V-1964): ataca pobreza, discriminación racial, ciudades, educación, salud y medio ambiente." },
    { id: "fc02", categoria: "concepto", frente: "Guerra contra la pobreza", dorso: "La parte de la Great Society dedicada a la pobreza, declarada «incondicional» el 8-I-1964. Su brazo ejecutor es la OEO." },
    { id: "fc03", categoria: "concepto", frente: "«Armas y mantequilla» (guns and butter)", dorso: "Pagar Vietnam y la Great Society a la vez sin subir impuestos → déficit e inflación (1,6% en 1965 → 5,5% en 1969). La causa de que la Great Society se frene." },
    { id: "fc04", categoria: "concepto", frente: "Trilogía de derechos civiles (64–65–68)", dorso: "Lugares (CRA 1964) – Voto (VRA 1965) – Vivienda (Fair Housing 1968)." },
    { id: "fc05", categoria: "concepto", frente: "«1965 = EMVIH»", dorso: "El año milagro: Educación (ESEA), Medicare, Voto (VRA), Inmigración (Hart-Celler), HUD." },
    { id: "fc06", categoria: "concepto", frente: "Medicare / Medicaid", dorso: "Medicare = salud para mayores de 65; Medicaid = salud para pobres. Son el seguro médico de Truman de 1949, 16 años después." },
    { id: "fc07", categoria: "concepto", frente: "Backlash", dorso: "Reacción de los votantes blancos contra los derechos civiles y los disturbios (Wallace 13,5% en 1968)." },
    { id: "fc08", categoria: "fecha", frente: "Elección de 1964", dorso: "Johnson gana con 61,1% contra Goldwater (486–52); 295 diputados y 68 senadores (mayorías de 2/3)." },
    { id: "fc09", categoria: "fecha", frente: "2-VII-1964", dorso: "Civil Rights Act: prohíbe la segregación en lugares públicos y la discriminación laboral (EEOC); primera cloture en derechos civiles." },
    { id: "fc10", categoria: "fecha", frente: "VIII-1964", dorso: "Economic Opportunity Act: crea la OEO (Job Corps, VISTA, Head Start). ~1.000 M $." },
    { id: "fc11", categoria: "fecha", frente: "IV-1965", dorso: "ESEA: primera ayuda federal general a la educación («al niño, no a la escuela»)." },
    { id: "fc12", categoria: "fecha", frente: "30-VII-1965", dorso: "Medicare y Medicaid, firmados con Truman a su lado en Independence, Missouri." },
    { id: "fc13", categoria: "fecha", frente: "6-VIII-1965", dorso: "Voting Rights Act: fin de las pruebas de alfabetización (tras Selma). Registro negro en Mississippi 7%→59%." },
    { id: "fc14", categoria: "fecha", frente: "1965 (Hart-Celler)", dorso: "Immigration Act: fin de las cuotas por origen nacional de 1924. La ley con más consecuencias demográficas del período." },
    { id: "fc15", categoria: "fecha", frente: "1967", dorso: "Thurgood Marshall, primer juez negro de la Corte Suprema." },
    { id: "fc16", categoria: "fecha", frente: "31-III-1968", dorso: "Johnson anuncia que no se presenta a la reelección (tras el Tet)." },
    { id: "fc17", categoria: "fecha", frente: "11-IV-1968", dorso: "Fair Housing Act: cierra la trilogía de derechos civiles (una semana tras el asesinato de King)." },
    { id: "fc18", categoria: "causa-consecuencia", frente: "¿Por qué logró Johnson lo que Truman y Kennedy no?", dorso: "Por el mandato de 1964 (61%), las mayorías de 2/3 (295 diputados, 68 senadores) y su oficio legislativo. No fue diferencia de ideas." },
    { id: "fc19", categoria: "causa-consecuencia", frente: "¿Por qué se frenó la Great Society?", dorso: "«Armas y mantequilla»: Vietnam devoró los fondos (25–30.000 M vs ~2.000 M de la OEO), dividió al partido y disparó la inflación." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué hubo disturbios en los años de más leyes?", dorso: "La ley acabó con el Jim Crow legal pero no con la desigualdad económica (Watts, Newark, Detroit; informe Kerner)." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "Resultado de la guerra contra la pobreza", dorso: "Pobreza del 22,4% (1959) al 12,1% (1969); pobreza negra de ~55% a ~32%. Pero la OEO fue subfinanciada." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "Johnson vs Kennedy en derechos civiles", dorso: "Kennedy fijó la agenda; Johnson la convirtió en ley (trilogía 64–65–68) gracias al mandato y la cloture." },
    { id: "fc23", categoria: "historiador", frente: "Dallek (postura sobre Johnson)", dorso: "«Gigante con fallas»: el mayor legislador desde FDR, cuya obra devoró Vietnam y su propio carácter. Vietnam es la falla, no la regla." },
    { id: "fc24", categoria: "historiador", frente: "Paul Johnson (postura sobre la Great Society)", dorso: "Expansión estatal cara, burocrática y contraproducente: gastó sin resolver la pobreza y preparó el desencanto hacia Reagan." },
    { id: "fc25", categoria: "historiador", frente: "Adams (postura sobre Johnson)", dorso: "Culminación del reformismo iniciado en 1933; su límite no fue ideológico sino fiscal y bélico (la guerra en dos frentes)." },
    { id: "fc26", categoria: "concepto", frente: "Informe Kerner (1968)", dorso: "«Dos sociedades, una negra y una blanca, separadas y desiguales»: diagnóstico tras los disturbios urbanos." },
    { id: "fc27", categoria: "concepto", frente: "OEO (Office of Economic Opportunity)", dorso: "El brazo ejecutor de la guerra contra la pobreza (Shriver): Job Corps, VISTA, acción comunitaria, Head Start. Subfinanciada (~2.000 M)." },
    { id: "fc28", categoria: "causa-consecuencia", frente: "«Continuemos» (Let us continue)", dorso: "Estrategia de Johnson (27-XI-1963): usar el duelo por Kennedy para aprobar los impuestos y la CRA. Estrategia, no descripción." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Qué fue la Great Society?", etiqueta: "concepto",
      opciones: [
        { texto: "El programa de Johnson contra la pobreza, el racismo, la educación y la salud.", correcta: true, explicacion: "Correcto: anunciado en la Univ. de Michigan (22-V-1964)." },
        { texto: "El plan de ayuda de EE.UU. a Europa tras la guerra, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "Ese es el Plan Marshall, política exterior." },
        { texto: "La estrategia militar de EE.UU. en Vietnam.", correcta: false, explicacion: "Vietnam es la guerra que devoró a la Great Society, no la Great Society." },
        { texto: "El programa de autopistas de los años 50.", correcta: false, explicacion: "Eso es la ley de autopistas de Eisenhower (1956)." }
      ] },
    { pregunta: "¿Por qué logró Johnson lo que Truman y Kennedy no pudieron?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Por el mandato de 1964 (61%), las mayorías de 2/3 y su oficio legislativo.", correcta: true, explicacion: "Correcto: no fue diferencia de ideas, sino de mayorías y de oficio." },
        { texto: "Porque gobernó íntegramente por orden ejecutiva.", correcta: false, explicacion: "Gobernó aprobando leyes en el Congreso, no por decreto." },
        { texto: "Porque abandonó la agenda liberal de Truman y Kennedy, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "La convirtió en ley; tomó el recorte de impuestos y la CRA de JFK." },
        { texto: "Porque la coalición conservadora dejó de existir.", correcta: false, explicacion: "Existía; las mayorías de 2/3 permitían romper sus filibusters." }
      ] },
    { pregunta: "La «trilogía de derechos civiles» 64–65–68 cubre…", etiqueta: "concepto",
      opciones: [
        { texto: "Lugares públicos (1964), voto (1965) y vivienda (1968).", correcta: true, explicacion: "Correcto: CRA, VRA y Fair Housing Act." },
        { texto: "Educación, salud e inmigración.", correcta: false, explicacion: "Eso es parte de EMVIH (1965), no la trilogía de derechos civiles." },
        { texto: "Impuestos, autopistas y espacio.", correcta: false, explicacion: "No tiene que ver con los derechos civiles." },
        { texto: "Tres batallas de la guerra de Vietnam, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "La trilogía es de leyes internas, no de Vietnam." }
      ] },
    { pregunta: "¿Qué hizo la Voting Rights Act de 1965?", etiqueta: "fecha",
      opciones: [
        { texto: "Prohibió las pruebas de alfabetización y puso supervisores federales en el Sur.", correcta: true, explicacion: "Correcto: el registro negro en Mississippi pasó del 7% al 59%." },
        { texto: "Prohibió la segregación en lugares públicos.", correcta: false, explicacion: "Eso es la Civil Rights Act de 1964." },
        { texto: "Prohibió la discriminación en la venta de vivienda, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Eso es la Fair Housing Act de 1968." },
        { texto: "Creó Medicare y Medicaid.", correcta: false, explicacion: "Medicare/Medicaid son enmiendas a la Seg. Social de 1965." }
      ] },
    { pregunta: "¿Cuánto bajó la tasa de pobreza en la década?", etiqueta: "fecha",
      opciones: [
        { texto: "Del 22,4% (1959) al 12,1% (1969): casi a la mitad.", correcta: true, explicacion: "Correcto: la pobreza negra bajó de ~55% a ~32%." },
        { texto: "Del 12% al 22%, por el gasto en Vietnam, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Bajó, no subió." },
        { texto: "No cambió durante toda la década.", correcta: false, explicacion: "Hubo una caída medible." },
        { texto: "Se eliminó por completo para 1969.", correcta: false, explicacion: "Quedó en torno al 12%." }
      ] },
    { pregunta: "¿Qué significa «armas y mantequilla»?", etiqueta: "concepto",
      opciones: [
        { texto: "Pagar Vietnam y la Great Society a la vez sin subir impuestos, lo que generó déficit e inflación.", correcta: true, explicacion: "Correcto: la OEO (~2.000 M) no competía con Vietnam (25–30.000 M)." },
        { texto: "El plan militar de EE.UU. para invadir Vietnam del Norte, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Es una metáfora económica, no un plan militar." },
        { texto: "Una ley de subsidios a la agricultura láctea.", correcta: false, explicacion: "No es una ley agrícola; es la tensión fiscal guerra/bienestar." },
        { texto: "La alianza entre militares y granjeros del Sur.", correcta: false, explicacion: "No se refiere a una alianza, sino al dilema de pagar guerra y bienestar." }
      ] },
    { pregunta: "¿Por qué hubo grandes disturbios en los años de más leyes de derechos civiles?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Porque la ley terminó con el Jim Crow legal pero no con la desigualdad económica.", correcta: true, explicacion: "Correcto: Watts, Newark y Detroit en plena Great Society (informe Kerner)." },
        { texto: "Porque no se aprobó ninguna ley de derechos civiles.", correcta: false, explicacion: "Al contrario: fueron los años de la trilogía 64–65–68." },
        { texto: "Porque los negros se negaron a registrarse para votar, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "El registro negro subió fuerte (7%→59% en Mississippi)." },
        { texto: "Porque Johnson vetó la Voting Rights Act.", correcta: false, explicacion: "Johnson la aprobó en 1965." }
      ] },
    { pregunta: "¿Cómo se comparan Kennedy y Johnson en derechos civiles?", etiqueta: "concepto",
      opciones: [
        { texto: "Kennedy fijó la agenda (decreto, tropas); Johnson la convirtió en ley (1964, 1965, 1968).", correcta: true, explicacion: "Correcto: la diferencia fue el mandato y la cloture." },
        { texto: "Kennedy aprobó más leyes que Johnson.", correcta: false, explicacion: "Es al revés: Johnson aprobó la trilogía." },
        { texto: "Ambos evitaron por completo el tema racial.", correcta: false, explicacion: "Ambos intervinieron; Johnson lo hizo como cuestión moral desde el día 1." },
        { texto: "Johnson sólo usó órdenes ejecutivas, igual que Kennedy, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "Johnson usó leyes aprobadas en el Congreso." }
      ] },
    { pregunta: "¿Qué destruyó la presidencia de Johnson?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Vietnam: devoró los fondos, dividió al partido y lo forzó a no presentarse en 1968.", correcta: true, explicacion: "Correcto: pero hay que mostrar también disturbios, backlash e inflación." },
        { texto: "El rechazo del Congreso a toda su agenda legislativa, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "El Congreso aprobó su agenda; lo derrotó la guerra, no el bloqueo." },
        { texto: "La derrota en la elección presidencial de 1966.", correcta: false, explicacion: "No perdió una presidencial; decidió no presentarse en 1968." },
        { texto: "Un escándalo de corrupción como el Watergate.", correcta: false, explicacion: "El Watergate fue de Nixon; a Johnson lo hundió Vietnam." }
      ] },
    { pregunta: "¿Cómo define Dallek a Johnson?", etiqueta: "historiador",
      opciones: [
        { texto: "Un «gigante con fallas»: el mayor legislador desde FDR, devorado por Vietnam.", correcta: true, explicacion: "Correcto: los éxitos internos son reales; Vietnam es la falla." },
        { texto: "Una «expansión estatal cara y contraproducente», una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Esa es la crítica del historiador Paul Johnson." },
        { texto: "«Más retórica que sustancia».", correcta: false, explicacion: "Esa frase es de Bailyn sobre Kennedy." },
        { texto: "El fundador de la «presidencia imperial».", correcta: false, explicacion: "Ese concepto es de Schlesinger sobre Nixon." }
      ] },
    { pregunta: "La postura de Adams sobre la Great Society sostiene que…", etiqueta: "historiador",
      opciones: [
        { texto: "Fue la culminación del reformismo de 1933, con límite fiscal y bélico, no ideológico.", correcta: true, explicacion: "Correcto: la guerra en dos frentes no era sostenible." },
        { texto: "Fue una expansión estatal contraproducente que creó dependencia, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Esa es la visión conservadora de Paul Johnson." },
        { texto: "No tuvo ningún efecto sobre la pobreza en la década.", correcta: false, explicacion: "La pobreza bajó del 22% al 12%." },
        { texto: "Fracasó porque el modelo reformista era inviable.", correcta: false, explicacion: "Adams ve un límite de financiamiento, no del modelo." }
      ] },
    { pregunta: "¿Hasta qué punto las leyes de Johnson eran las de Kennedy?", etiqueta: "concepto",
      opciones: [
        { texto: "Mismo esqueleto, otro cuerpo: la agenda era de JFK, pero la escala y varias leyes son propias.", correcta: true, explicacion: "Correcto: VRA, Hart-Celler, Head Start y Fair Housing son propias." },
        { texto: "Todas las leyes eran idénticas a las de Kennedy, sin cambios, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Muchas fueron propias; y la escala fue de Johnson." },
        { texto: "Ninguna ley tenía relación con la agenda de Kennedy.", correcta: false, explicacion: "Impuestos, CRA, Medicare, ESEA y HUD venían de la agenda de JFK." },
        { texto: "Kennedy había aprobado todas esas leyes antes de morir.", correcta: false, explicacion: "Se aprobaron con Johnson; con JFK estaban atascadas." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Evalúe qué tan exitoso fue Johnson en implementar su agenda legislativa. (pregunta clave del Oxford)", frecuencia: "Muy alta",
        plan: "P1 éxito extraordinario 1964–65 (EMVIH + CRA 64) y por qué (mandato, oficio, mayorías). P2 éxito en pobreza con cifras (22→12%) y límites (OEO subfinanciada, acción comunitaria). P3 límites sociales: disturbios, Kerner, backlash. P4 Vietnam: armas y mantequilla, inflación, 1968. Historiografía: Dallek vs P. Johnson." },
      { pregunta: "¿Hasta qué punto las políticas que Johnson promulgó fueron las que Kennedy había creado? (pregunta clave del Oxford)", frecuencia: "Alta",
        plan: "Sí: impuestos 1964, CRA 1964, Medicare, ESEA, HUD = agenda JFK. No: guerra contra la pobreza, VRA, Hart-Celler, Head Start, Fair Housing, NEA = propias; y la escala es de Johnson. Tesis: mismo esqueleto, otro cuerpo; «Continuemos» fue una estrategia, no una descripción." },
      { pregunta: "Compare y contraste las políticas de derechos civiles de Kennedy y Johnson.", frecuencia: "Alta",
        plan: "Cinco párrafos (convicción, método, Congreso, resultados, límites). Kennedy fija la agenda, Johnson la convierte en ley; pero el Jim Crow legal cae sin tocar la desigualdad económica." },
      { pregunta: "Evalúe los éxitos y fracasos de la Great Society.", frecuencia: "Muy alta",
        plan: "Éxitos: trilogía, Medicare, ESEA, pobreza a la mitad, Hart-Celler, Marshall/Weaver. Fracasos: OEO subfinanciada, disturbios, backlash, y sobre todo Vietnam («armas y mantequilla»). Veredicto: «gigante con fallas» (Dallek)." }
    ],
    planes: [
      { titulo: "Plan A · Evalúe qué tan exitoso fue Johnson en implementar su agenda (Oxford)",
        tesis: "Johnson fue el legislador más exitoso desde Roosevelt, pero la guerra de Vietnam («armas y mantequilla») subfinanció la Great Society y destruyó su presidencia: un «gigante con fallas».",
        pasos: [
          "P1 — Éxito extraordinario 1964–65: EMVIH + CRA 1964; por qué (mandato del 61%, mayorías de 2/3, oficio).",
          "P2 — Éxito en pobreza con cifras (22→12%) y sus límites (OEO ~2.000 M, acción comunitaria conflictiva).",
          "P3 — Límites sociales: disturbios (Watts, Detroit), informe Kerner, backlash blanco (Wallace 13,5%).",
          "P4 — Vietnam: «armas y mantequilla», inflación (1,6%→5,5%), 31-III-1968, ruptura del partido.",
          "Conclusión: Dallek (gigante con fallas) vs P. Johnson (Estado caro); el límite fue fiscal y bélico (Adams)."
        ] },
      { titulo: "Plan B · ¿Hasta qué punto las leyes de Johnson fueron las de Kennedy?",
        tesis: "Mismo esqueleto, otro cuerpo: la agenda venía de Kennedy, pero la escala y varias leyes clave fueron propias; «Continuemos» fue una estrategia, no una descripción.",
        pasos: [
          "Sí (agenda JFK): Revenue Act 1964, Civil Rights Act 1964, Medicare, ESEA, HUD.",
          "No (propias): guerra contra la pobreza, Voting Rights Act, Hart-Celler, Head Start, Fair Housing, NEA/NEH.",
          "La escala: Johnson aprobó en 18 meses lo que JFK sólo pudo proponer.",
          "El factor decisivo: el mandato de 1964 y el oficio legislativo, no las ideas.",
          "Conclusión: tomó el espíritu de JFK como palanca política, pero la Great Society es suya."
        ] },
      { titulo: "Plan C · Compare y contraste los derechos civiles de Kennedy y Johnson",
        tesis: "Kennedy fijó la agenda y Johnson la convirtió en ley, pero la trilogía 64–65–68 acabó con el Jim Crow legal sin tocar la desigualdad económica.",
        pasos: [
          "Convicción: Kennedy cauteloso con giro en 1963; Johnson, sureño converso, lo plantea como cuestión moral desde el día 1.",
          "Método: Kennedy por decreto y tropas (Ole Miss); Johnson por ley tras ley (CRA, VRA, Fair Housing) con cloture y Dirksen.",
          "Congreso: Kennedy sin mandato y bloqueado; Johnson con mandato y mayorías de 2/3.",
          "Resultados: fin legal del Jim Crow, registro de votantes (7%→59%), Marshall en la Corte, Weaver en el gabinete.",
          "Límites: disturbios, Kerner, nacionalismo negro, backlash; Vietnam desvía fondos. Conclusión: ley sí, igualdad económica no."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «Evalúe los éxitos y fracasos de la Great Society»",
        parrafos: [
          { texto: "Lyndon Johnson llegó a la presidencia en noviembre de 1963 y, tras arrasar en la elección de 1964 con el 61% del voto, lanzó la Great Society, el programa reformista más ambicioso desde el New Deal. Este ensayo sostiene que la Great Society fue un éxito legislativo y social real y permanente —la trilogía de derechos civiles, Medicare, la ESEA y una caída de la pobreza a la mitad—, pero que la guerra de Vietnam la subfinanció y destruyó la presidencia de su autor: en palabras de Dallek, Johnson fue un «gigante con fallas».", nota: "Intro: contexto con el dato del 61%, tesis con los dos lados y la etiqueta de Dallek." },
          { texto: "Sus éxitos fueron extraordinarios y se explican por el mandato de 1964 y el oficio legislativo de Johnson. En dieciocho meses aprobó la Civil Rights Act de 1964, la Voting Rights Act de 1965 —que elevó el registro negro en Mississippi del 7% al 59%—, Medicare y Medicaid, firmados con Truman a su lado, y la ESEA, primera ayuda federal general a la educación. La diferencia con Truman y Kennedy, como señala el PDF, no fue de ideas sino de mayorías: 295 diputados y 68 senadores le permitieron romper el filibuster sureño con la primera cloture en derechos civiles.", nota: "Párrafo de éxitos con leyes, cifras y la causa (mandato + mayorías + oficio)." },
          { texto: "La guerra contra la pobreza completa el cuadro: la tasa cayó del 22,4% en 1959 al 12,1% en 1969. Pero aquí aparecen los límites. La OEO nunca superó los 2.000 millones anuales frente a los 25.000–30.000 de Vietnam, de modo que «armas y mantequilla» fue una promesa imposible. Los disturbios urbanos de Watts, Newark y Detroit, el informe Kerner y el backlash blanco mostraron que el fin del Jim Crow legal no tocaba la desigualdad económica. Adams lee en esto un límite fiscal y bélico, no ideológico; el historiador Paul Johnson, en cambio, ve una expansión estatal que gastó sin resolver la pobreza.", nota: "Párrafo de la pobreza con cifras, límites y el choque Adams vs P. Johnson." },
          { texto: "En conclusión, la Great Society fue, a la vez, el mayor logro legislativo desde Roosevelt y una presidencia devorada por la guerra. Sus leyes sobreviven —Medicare, Medicaid, la trilogía de derechos civiles, Head Start—, pero Vietnam dividió al partido, disparó la inflación y obligó a Johnson a no presentarse en 1968. Dallek ofrece el veredicto más equilibrado: un gigante con fallas, derrotado no por el Congreso, como Truman, sino por una guerra que él mismo eligió. Sus propias palabras lo resumen: «esa maldita guerra mató a la dama que realmente amaba, la Great Society».", nota: "Conclusión con veredicto de Dallek, la permanencia de las leyes y la cita de cierre." }
        ] }
    ],
    guia: {
      tesis: "Respondé en una frase con veredicto. Para Johnson: «Johnson fue el mayor legislador desde FDR —trilogía de derechos civiles, Medicare, ESEA, pobreza a la mitad— pero la guerra de Vietnam subfinanció la Great Society y destruyó su presidencia: un «gigante con fallas» (Dallek)».",
      argumentos: [
        "Usá la plantilla Afirmación → Evidencia → Explicación → Perspectiva (Dallek/P. Johnson/Adams) → Vuelta a la pregunta.",
        "Organizá los éxitos con la trilogía (64–65–68) y el paquete EMVIH de 1965.",
        "No reduzcas el fracaso a «Vietnam»: sumá OEO subfinanciada, disturbios, Kerner, backlash e inflación."
      ],
      evidencia: [
        "Mandato y leyes: 61% (1964), 295 diputados/68 senadores; CRA 1964, VRA 1965, Medicare/Medicaid, ESEA, Fair Housing 1968.",
        "Pobreza: 22,4% (1959) → 12,1% (1969); registro negro en Mississippi 7%→59%; inflación 1,6%→5,5%.",
        "Fracaso: 536.000 soldados en 1968, Tet, OEO ~2.000 M vs Vietnam 25–30.000 M; 31-III-1968 no se presenta; ~36%."
      ],
      historiografia: [
        "Dallek (balance: «gigante con fallas»; Vietnam es la falla, no la regla).",
        "El historiador Paul Johnson (conservador: Estado caro e ineficaz, camino a Reagan).",
        "Adams (social: culminación del reformismo de 1933, límite fiscal y bélico)."
      ],
      contraargumento: "Reconocé la crítica conservadora (P. Johnson: la Great Society gastó sin resolver la pobreza y creó dependencia) y refutala con las cifras (pobreza 22→12%) y con Adams (el límite fue el financiamiento por Vietnam, no el modelo)."
    }
  }
});
