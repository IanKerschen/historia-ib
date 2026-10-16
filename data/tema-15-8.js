/* ============================================================
   tema-15-8.js — 15.8 Partidos Demócrata y Republicano (1945–1980)
   Composición · conflictos internos · cambios ideológicos · impacto electoral.
   Transcripción fiel de la guía Paper 3 (Tema 15) del usuario.
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "15.8",
  carpeta: "p3-s15",
  titulo: "Partidos Demócrata y Republicano",
  subtitulo: "Composición · conflictos internos · cambios ideológicos · impacto electoral (1945–1980)",
  periodo: "1945–1980",
  estado: "listo",
  etiquetas: ["realineamiento", "coalición del New Deal", "estrategia sureña", "Sunbelt", "Nueva Derecha", "Goldwater", "Reagan"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Entre 1945 y 1980 los dos partidos cambiaron de piel: los demócratas pasaron de ser el partido de la clase obrera blanca y del Sur segregado a ser el de los derechos civiles, las minorías y los profesionales liberales; los republicanos, de ser el partido del establishment moderado del Noreste a ser el del Sur, el Sunbelt y el conservadurismo de Goldwater y Reagan. La causa central fue la raza; las acompañantes, Vietnam, la cultura y la economía de los 70.",
    historiadoresLinea: [
      { nombre: "Adams", linea: "El realineamiento es estructural: cambio demográfico (Sunbelt, suburbios), económico (estanflación, desindustrialización) y sobre todo racial. La coalición del New Deal dependía de no hablar de raza; cuando se habló, el Sur blanco se fue." },
      { nombre: "Paul Johnson", linea: "El giro a la derecha es una reacción sana de la «mayoría silenciosa» contra los excesos del liberalismo de los 60; Reagan como restauración. El liberalismo se suicidó en 1968–72." },
      { nombre: "Schlesinger", linea: "La política de EE.UU. es un péndulo de ciclos de ~30 años: reforma (1932–68) y consolidación conservadora (1968–…). Ni traición ni revolución: 1980 era esperable." },
      { nombre: "De regalo", linea: "Kevin Phillips («The Emerging Republican Majority», 1969): la estrategia sureña como explotación política de la fractura racial." }
    ],
    datosClave: [
      { grupo: "El realineamiento: datos que valen oro", items: [
        "Coalición del New Deal: Sur blanco + sindicatos del Norte + católicos y judíos urbanos + afroamericanos + granjeros e intelectuales liberales.",
        "1948: Thurmond se va como Dixiecrat (39 electores); Wallace por la izquierda. Primera grieta racial.",
        "1952–60: «republicanismo moderno» (Eisenhower vence a Taft; acepta el New Deal); conservadores (Buckley, National Review 1955) se organizan.",
        "1960: Kennedy gana el 68% del voto negro (llamada a Coretta King).",
        "1964: Civil Rights Act (LBJ: «hemos perdido el Sur por una generación»); Goldwater nominado (votó contra la ley); Johnson 61%, voto negro 94%; Goldwater gana los 5 estados del Sur profundo; Thurmond se pasa a los republicanos.",
        "1965–68: Voting Rights Act; Vietnam divide a los demócratas; Chicago 1968; Wallace 13,5%.",
        "1968–72: estrategia sureña (Phillips 1969); Comisión McGovern-Fraser (primarias y cuotas); McGovern 1972 pierde 49 estados.",
        "1974: Watergate babies (demócratas +49 diputados); republicanos al 18% de identificación: espejismo.",
        "1976: Carter (sureño, bautista) gana todo el Sur menos Virginia y el 90%+ del voto negro; Reagan casi le quita la nominación a Ford (1.070 vs 1.187).",
        "1978–79: Nueva Derecha: Proposición 13, Mayoría Moral (Falwell 1979), Schlafly contra la ERA, Heritage (1973), neoconservadores, correo directo (Viguerie).",
        "1980: Reagan 489–49; primer Senado republicano desde 1954; «Demócratas de Reagan»; voto negro ~85% demócrata; aparece la brecha de género."
      ]}
    ],
    comparacion: [
      { eje: "Composición", texto: "Demócratas: de Sur blanco + sindicatos a negros (85–90%), hispanos, mujeres, profesionales liberales. Republicanos: de Noreste protestante a Sur, Sunbelt, suburbios, evangélicos y «Demócratas de Reagan»." },
      { eje: "Conflictos internos", texto: "Demócratas: liberales vs sureños (1948) → Nueva Política vs sindicatos (1968–72) → Kennedy vs Carter (1980). Republicanos: Old Guard (Taft) vs moderados (Eisenhower) → moderados vs conservadores (Goldwater, Reagan)." },
      { eje: "Ideología", texto: "Demócratas: del liberalismo económico del New Deal (con silencio racial) al liberalismo de derechos (civiles, feminismo, ambiente). Republicanos: del antiestatismo pragmático de Eisenhower al conservadurismo de Reagan (recortes, «ley y orden», valores, rearme)." },
      { eje: "Impacto electoral", texto: "Demócratas: mayoría casi permanente en el Congreso (1955–1980 sin interrupción). Republicanos: ganan la Casa Blanca con candidatos personales (Ike, Nixon, Reagan), no con el partido, hasta 1980." }
    ],
    veredictos: [
      { titulo: "Causa central", texto: "La raza: la coalición del New Deal siempre dependió de no hablar de ella; cuando Truman, Kennedy y Johnson lo hicieron, el Sur blanco se fue (Adams)." },
      { titulo: "Proceso, no salto", texto: "Fue un proceso de 30 años con retrocesos (1974, 1976), no un intercambio de la noche a la mañana." },
      { titulo: "Punto de no retorno", texto: "La Civil Rights Act de 1964: en la misma elección, Johnson obtiene el 61% y Goldwater gana el Sur profundo. Ahí nacen los dos partidos actuales." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Willi Paul Adams", nacionalidad: "Alemán, Universidad Libre de Berlín",
      obra: "Los Estados Unidos de América (Historia Universal Siglo XXI)",
      postura: "Realineamiento estructural; la raza como causa central",
      funcion: "Explicar por qué los partidos cambiaron de composición e ideología.",
      ideaCentral: "El realineamiento es estructural: cambio demográfico (Sunbelt, suburbios), económico (estanflación, desindustrialización, fin del crecimiento fácil) y sobre todo racial. La coalición del New Deal siempre dependió de no hablar de raza; cuando Truman, Kennedy y Johnson hablaron, el Sur blanco se fue. La «estrategia sureña» fue la explotación política de esa fractura.",
      matiz: "Es el historiador de cifras y mecanismos: lee el doble resultado de 1964 (Johnson 61% + Goldwater gana el Sur profundo) como el nacimiento de los dos partidos actuales.",
      fraseLista: "Para Adams, el realineamiento fue estructural y sobre todo racial: la coalición del New Deal dependía del silencio sobre la raza, y cuando se rompió ese silencio, el Sur blanco cambió de partido.",
      paraPreguntas: ["Cambios de composición e ideología", "¿Qué explica el realineamiento?", "El papel de la raza"]
    },
    {
      nombre: "Paul Johnson", nacionalidad: "Británico, periodista-historiador conservador",
      obra: "Estados Unidos: la historia (1997)",
      postura: "Giro a la derecha = reacción sana de la «mayoría silenciosa»",
      funcion: "Lectura conservadora del realineamiento.",
      ideaCentral: "El giro a la derecha es una reacción sana de la «mayoría silenciosa» contra los excesos del liberalismo de los 60 (Great Society, contracultura, permisividad, impuestos): Reagan como restauración de los valores de Eisenhower. El liberalismo se suicidó en 1968–72 al entregarse a los activistas.",
      matiz: "Valora la firmeza y la estabilidad; ve en Goldwater y Reagan una corrección, no una ruptura.",
      fraseLista: "Desde una lectura conservadora, Paul Johnson entiende el giro a la derecha como la reacción de la «mayoría silenciosa» contra un liberalismo que se suicidó en 1968–72.",
      paraPreguntas: ["¿Fue sano el giro conservador?", "Contraargumento a la lectura estructural"]
    },
    {
      nombre: "Arthur M. Schlesinger Jr.", nacionalidad: "Estadounidense, Harvard; asesor de Kennedy",
      obra: "Los ciclos de la historia americana (1986)",
      postura: "Péndulo: ciclos de reforma y consolidación",
      funcion: "Relativizar el realineamiento como un giro previsible.",
      ideaCentral: "La política estadounidense alterna ciclos de unos 30 años de reforma (1932–68) y consolidación conservadora (1968–…). El realineamiento no es ni traición ni revolución: es un péndulo. Por eso 1980 era esperable.",
      matiz: "La tesis de los ciclos sirve para no dramatizar: el ascenso conservador responde a un patrón de largo plazo.",
      fraseLista: "Siguiendo a Schlesinger, el giro conservador de 1968–80 es el movimiento esperable de un péndulo que alterna reforma y consolidación cada treinta años.",
      paraPreguntas: ["¿Fue inevitable el giro?", "Relativizar la ruptura de 1980"]
    },
    {
      nombre: "Kevin Phillips", regalo: true, nacionalidad: "Frase regalo (estratega/analista)",
      obra: "The Emerging Republican Majority (1969)",
      postura: "Estrategia sureña: explotación política de la fractura racial",
      ideaCentral: "Phillips teoriza la estrategia sureña: capturar a los votantes de Wallace (Sur blanco y obreros del Norte) con ley y orden, anti-busing y «valores». Es el manual del realineamiento republicano.",
      fraseLista: "Como anticipó Kevin Phillips en 1969, la nueva mayoría republicana se construyó capturando al Sur blanco y a los obreros del Norte que Wallace había movilizado.",
      paraPreguntas: ["La estrategia sureña", "La captura del voto de Wallace"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1948, fecha: "1948", pais: "EE. UU.", titulo: "Dixiecrats: la primera grieta racial",
      descripcion: "Strom Thurmond se va de los demócratas por los derechos civiles de Truman y se presenta como Dixiecrat (39 electores); Henry Wallace rompe por la izquierda. Truman gana igual.",
      causas: ["Truman desafía al Sur con su programa de derechos civiles."],
      consecuencias: ["Primera fisura de la coalición del New Deal; la coalición todavía resiste."] },
    { anio: 1952, fecha: "1952–60", pais: "EE. UU.", titulo: "«Republicanismo moderno»",
      descripcion: "Eisenhower vence a Taft (Old Guard): el partido acepta el New Deal (consenso de posguerra). Eisenhower gana 4 estados del Sur en 1952 y 5 en 1956 con voto suburbano.",
      consecuencias: ["Dominan los moderados; los conservadores (Buckley, National Review 1955) se organizan en la oposición interna."] },
    { anio: 1960, fecha: "1960", pais: "EE. UU.", titulo: "Kennedy y el voto negro",
      descripcion: "Kennedy gana el 68% del voto negro (llamada a Coretta King); electores «no comprometidos» en el Sur profundo.",
      consecuencias: ["Tensión: la coalición necesita a la vez a los negros y a los sureños blancos."] },
    { anio: 1964, fecha: "1964", pais: "EE. UU.", titulo: "El año decisivo",
      descripcion: "Civil Rights Act (Johnson: «hemos perdido el Sur por una generación»). Los republicanos nominan a Goldwater (votó contra la ley); Reagan da «A Time for Choosing». Johnson 61%, voto negro 94% demócrata; pero Goldwater gana los 5 estados del Sur profundo; Thurmond se pasa a los republicanos.",
      causas: ["La Civil Rights Act obliga a los partidos a definirse sobre la raza."],
      consecuencias: ["Nacen el partido republicano conservador y el «Sur republicano»; nace el partido demócrata de los derechos civiles."],
      historiador: "Adams: el doble resultado de 1964 es el nacimiento de los dos partidos actuales." },
    { anio: 1965, fecha: "1965–68", pais: "EE. UU.", titulo: "Backlash",
      descripcion: "Voting Rights Act; disturbios; Vietnam divide a los demócratas (halcones vs palomas, McCarthy, RFK); Chicago 1968 (la «Nueva Política» contra Daley y los sindicatos); Wallace 13,5%.",
      consecuencias: ["La coalición del New Deal se rompe: 57% vota contra el liberalismo (Nixon + Wallace)."] },
    { anio: 1968, fecha: "1968–72", pais: "EE. UU.", titulo: "Estrategia sureña y «mayoría silenciosa»",
      descripcion: "Nixon capta a los votantes de Wallace (ley y orden, anti-busing, «valores»); Phillips, The Emerging Republican Majority (1969). Comisión McGovern-Fraser (1969–72): los demócratas eligen por primarias y cuotas; los jefes sindicales pierden control.",
      consecuencias: ["Los demócratas capturados por la «Nueva Política» (McGovern 1972 pierde 49 estados); la AFL-CIO no lo apoya."],
      historiador: "Phillips: capturar al Sur blanco y a los obreros del Norte." },
    { anio: 1974, fecha: "1974", pais: "EE. UU.", titulo: "Watergate: el espejismo demócrata",
      descripcion: "Demócratas +49 diputados («Watergate babies», reformistas); republicanos hundidos (18% de identificación).",
      consecuencias: ["Pausa del realineamiento: parece que los demócratas vuelven. Es un espejismo."] },
    { anio: 1976, fecha: "1976", pais: "EE. UU.", titulo: "Reagan vs Ford · Carter recupera el Sur",
      descripcion: "Reagan casi le quita la nominación a Ford (1.070 vs 1.187); la plataforma republicana ya es conservadora. Carter, sureño y bautista, gana todo el Sur menos Virginia y el 90%+ del voto negro.",
      consecuencias: ["Último triunfo demócrata en el Sur; último presidente republicano moderado."] },
    { anio: 1978, fecha: "1978–79", pais: "EE. UU.", titulo: "La Nueva Derecha",
      descripcion: "Proposición 13 (revuelta fiscal), Mayoría Moral (Falwell, 1979), Schlafly contra la ERA, Heritage Foundation (1973), neoconservadores (Kristol, Podhoretz), think tanks y correo directo (Viguerie). Los evangélicos blancos se politizan por el aborto (Roe 1973) y la escuela.",
      consecuencias: ["El partido republicano suma un ala religiosa y populista al ala empresarial; los demócratas pierden a los católicos y evangélicos del Sur."] },
    { anio: 1980, fecha: "1980", pais: "EE. UU.", titulo: "Reagan: realineamiento consumado",
      descripcion: "Reagan 489–49; primer Senado republicano desde 1954; «Demócratas de Reagan» (obreros blancos del Norte); Carter solo gana 6 estados + DC; voto negro sigue ~85% demócrata; aparece la brecha de género (mujeres más demócratas).",
      causas: ["Estanflación, rehenes, giro cultural, Nueva Derecha."],
      consecuencias: ["La coalición de Reagan (Sur, Sunbelt, suburbios, evangélicos, empresarios, obreros blancos) sustituye a la del New Deal."],
      historiador: "Johnson: restauración. Adams: realineamiento estructural. Schlesinger: péndulo esperable." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Este tema no es sobre un presidente sino sobre el <b>realineamiento</b>: cómo entre 1945 y 1980 los dos partidos intercambiaron bases, conflictos e ideologías. La pregunta pide siempre cuatro cosas —composición, conflictos internos, cambios ideológicos e impacto electoral— y la respuesta se ordena con una sola idea: la raza como causa central, más tres aceleradores (Vietnam, cultura, economía).</p>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Un partido, cuatro párrafos:</b> composición 1945 → 1980 (quién entra, quién sale, con cifras del voto negro/sureño) · conflictos internos (1948, 1964, 1968–72, 1976, 1980) · ideología (New Deal → derechos / Old Guard → Reagan) · impacto electoral (la tabla). Historiografía: Adams (estructura racial) vs Paul Johnson (reacción).</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>Tesis maestra del tema:</b> «Entre 1945 y 1980 los dos partidos cambiaron de piel: los demócratas pasaron de ser el partido de la clase obrera blanca y del Sur segregado a ser el partido de los derechos civiles, las minorías y los profesionales liberales; los republicanos, de ser el partido del establishment moderado del Noreste a ser el del Sur, el Sunbelt y el conservadurismo de Goldwater y Reagan. La causa central fue la raza; las causas acompañantes, Vietnam, la cultura y la economía de los setenta.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Coalición del New Deal</b> = la alianza que Roosevelt armó en 1932–36 (Sur blanco + sindicatos del Norte + católicos y judíos urbanos + afroamericanos + granjeros e intelectuales liberales), ganadora casi siempre hasta 1968. <b>Realineamiento</b> = cuando bloques enteros de votantes cambian de partido de forma duradera: entre 1948 y 1980 el Sur blanco pasa de demócrata a republicano y los afroamericanos se vuelven demócratas casi al 90%. <b>Sunbelt</b> = Sur y Suroeste en crecimiento (Florida, Texas, Arizona, California): conservador, suburbano, militar-industrial. <b>Estrategia sureña</b> = capturar al Sur blanco con ley y orden y valores (Phillips, 1969).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No digas que «los partidos intercambiaron posiciones de la noche a la mañana»: fue un proceso de 30 años con retrocesos (1974, 1976). Y no reduzcas todo a la raza: sumá Vietnam (divide a los demócratas), la cultura (aborto, ERA, religión), la economía (impuestos, inflación) y la organización (primarias, think tanks, correo directo). Raza = causa central; las otras = aceleradores.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué es el «realineamiento» de este tema?", etiqueta: "concepto",
            opciones: [
              { texto: "El cambio duradero de bloques enteros de votantes de un partido a otro.", correcta: true, explicacion: "Correcto: el Sur blanco a los republicanos y los negros a los demócratas." },
              { texto: "Un pacto formal entre los dos partidos para repartirse el poder.", correcta: false, explicacion: "No hubo pacto: fue un desplazamiento de votantes." },
              { texto: "La fusión de los partidos Demócrata y Republicano en uno solo.", correcta: false, explicacion: "Los partidos no se fusionaron; cambiaron de composición." },
              { texto: "La creación de un tercer partido que reemplazó a los dos grandes en aquellos años, según suele repetirse.", correcta: false, explicacion: "Wallace y Thurmond fueron efímeros; no reemplazaron a nadie." }
            ] },
          { pregunta: "¿Cuál es la causa central del realineamiento, según la guía?", etiqueta: "concepto",
            opciones: [
              { texto: "La raza, con Vietnam, la cultura y la economía como aceleradores.", correcta: true, explicacion: "Correcto: raza = causa central; las otras = aceleradores." },
              { texto: "Exclusivamente la guerra de Vietnam y nada más.", correcta: false, explicacion: "Vietnam es un acelerador, no la causa central." },
              { texto: "Solo la inflación y los impuestos de los años setenta en aquellos años, según suele repetirse.", correcta: false, explicacion: "La economía es acelerador; la causa central es la raza." },
              { texto: "El azar, sin ninguna causa estructural identificable.", correcta: false, explicacion: "Fue un proceso estructural, no azaroso." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · La escalera del realineamiento (10 escalones)",
        html: `
          <ol class="escalera">
            <li><b>1948 · Dixiecrats.</b> Thurmond se va por los derechos civiles de Truman; Wallace por la izquierda. Primera grieta racial; Truman gana igual.</li>
            <li><b>1952–60 · Republicanismo moderno.</b> Eisenhower vence a Taft (Old Guard): el partido acepta el New Deal. Los conservadores (Buckley, National Review 1955) se organizan en la oposición interna.</li>
            <li><b>1960 · Kennedy y el voto negro.</b> Kennedy gana el 68% del voto negro; la coalición necesita a negros y sureños a la vez.</li>
            <li><b>1964 · El año decisivo.</b> Civil Rights Act (LBJ: «hemos perdido el Sur por una generación»). Goldwater nominado (votó contra la ley); Johnson 61%, voto negro 94%; pero Goldwater gana los 5 estados del Sur profundo; Thurmond se pasa a los republicanos.</li>
            <li><b>1965–68 · Backlash.</b> Voting Rights Act; disturbios; Vietnam divide a los demócratas; Chicago 1968; Wallace 13,5%. La coalición del New Deal se rompe.</li>
            <li><b>1968–72 · Estrategia sureña y mayoría silenciosa.</b> Nixon capta a los votantes de Wallace (Phillips, 1969). Comisión McGovern-Fraser: primarias y cuotas; McGovern 1972 pierde 49 estados.</li>
            <li><b>1974 · Watergate.</b> Demócratas +49 diputados; republicanos al 18%. Pausa del realineamiento: un espejismo.</li>
            <li><b>1976 · Reagan vs Ford / Carter.</b> Reagan casi le quita la nominación a Ford (1.070 vs 1.187); Carter gana todo el Sur menos Virginia y el 90%+ del voto negro. Último triunfo demócrata en el Sur; último presidente republicano moderado.</li>
            <li><b>1978–79 · Nueva Derecha.</b> Proposición 13, Mayoría Moral (Falwell 1979), Schlafly contra la ERA, Heritage (1973), neoconservadores, correo directo (Viguerie). Los evangélicos blancos se politizan.</li>
            <li><b>1980 · Reagan.</b> 489–49; primer Senado republicano desde 1954; «Demócratas de Reagan»; voto negro ~85% demócrata; aparece la brecha de género. Realineamiento consumado.</li>
          </ol>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Adams lee el doble resultado de 1964 —Johnson 61% y el 94% del voto negro, pero Goldwater ganando el Sur profundo— como el nacimiento de los dos partidos actuales. Paul Johnson lo ve como el comienzo de la reacción conservadora; Schlesinger, como el giro previsible de un ciclo.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La Civil Rights Act de 1964 fue el punto de no retorno: en la misma elección en que Johnson obtenía el 61% y el 94% del voto negro, Goldwater ganaba el Sur profundo; ese doble resultado es el acta de nacimiento de los dos partidos actuales.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué 1964 es «el año decisivo» del realineamiento?", etiqueta: "fecha",
            opciones: [
              { texto: "La Civil Rights Act obliga a definirse: Johnson 61% pero Goldwater gana el Sur profundo.", correcta: true, explicacion: "Correcto: nacen el Sur republicano y el partido demócrata de los derechos civiles." },
              { texto: "Porque Nixon ganó la presidencia con la mayoría silenciosa.", correcta: false, explicacion: "Nixon ganó en 1968, no en 1964." },
              { texto: "Porque Reagan fue elegido presidente por primera vez.", correcta: false, explicacion: "Reagan llegó a la presidencia en 1980, no en 1964." },
              { texto: "Porque los Dixiecrats de Thurmond ganaron la elección nacional en aquellos años, según suele repetirse.", correcta: false, explicacion: "Los Dixiecrats son de 1948 y nunca ganaron a nivel nacional." }
            ] },
          { pregunta: "El triunfo de 1974 fue un «espejismo» porque…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Watergate dio a los demócratas una victoria que no detuvo el realineamiento.", correcta: true, explicacion: "Correcto: fue una pausa; en 1980 el giro se consumó con Reagan." },
              { texto: "Los republicanos ganaron el Congreso pese a la derrota de Nixon en aquellos años, según suele repetirse.", correcta: false, explicacion: "Al revés: los demócratas ganaron +49 diputados en 1974." },
              { texto: "No hubo elecciones legislativas en 1974 por el escándalo.", correcta: false, explicacion: "Sí hubo midterms en 1974; las ganaron los demócratas." },
              { texto: "Carter perdió el Sur en 1976 confirmando la pausa.", correcta: false, explicacion: "Carter ganó el Sur en 1976; el espejismo es de 1974." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Los dos partidos en 1945 y en 1980",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Demócratas 1945</th><th>Demócratas 1980</th></tr></thead>
            <tbody>
              <tr><td>Composición</td><td>Sur blanco, sindicatos, católicos urbanos, negros del Norte, granjeros.</td><td>Negros (85–90%), hispanos, mujeres, profesionales liberales, sindicatos públicos, jóvenes; Sur y obreros blancos en fuga.</td></tr>
              <tr><td>Conflictos internos</td><td>Liberales vs sureños segregacionistas (1948 Dixiecrats).</td><td>Nueva Política vs viejos sindicatos (1968–72); Kennedy vs Carter (1980); liberales vs «neoliberales».</td></tr>
              <tr><td>Ideología</td><td>Liberalismo económico del New Deal: Estado de bienestar, sindicatos, pleno empleo; silencio racial.</td><td>Liberalismo de derechos: derechos civiles, feminismo, ambiente, acción afirmativa; menos confianza en el crecimiento; Carter desregula.</td></tr>
              <tr><td>Impacto electoral</td><td colspan="2">Presidencia: gana 1948, 1960, 1964, 1976; pierde 1952, 1956, 1968, 1972, 1980. Congreso: mayoría casi permanente (1955–1980 sin interrupción) → el «Congreso demócrata» es la constante que explica a Eisenhower, Nixon y Ford.</td></tr>
            </tbody>
          </table></div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Dimensión</th><th>Republicanos 1945</th><th>Republicanos 1980</th></tr></thead>
            <tbody>
              <tr><td>Composición</td><td>Noreste protestante, empresarios, medio oeste rural, negros residuales.</td><td>Sur y Sunbelt blancos, suburbios, evangélicos, empresarios, «Demócratas de Reagan».</td></tr>
              <tr><td>Conflictos internos</td><td>Old Guard (Taft) vs moderados (Eisenhower, Dewey).</td><td>Moderados (Rockefeller, Ford) vs conservadores (Goldwater, Reagan): ganan los conservadores en 1964, casi en 1976, del todo en 1980.</td></tr>
              <tr><td>Ideología</td><td>Antiestatismo (Taft) pero aceptación pragmática del New Deal (Ike); internacionalismo moderado; anticomunismo.</td><td>Conservadurismo: recortes de impuestos, desregulación, «ley y orden», valores familiares, rearme; rechazo explícito de la Great Society.</td></tr>
              <tr><td>Impacto electoral</td><td colspan="2">Presidencia: gana 1952, 1956, 1968, 1972, 1980. Congreso: minoría estructural hasta el Senado de 1980. Ganan la Casa Blanca con candidatos personales (Ike, Nixon, Reagan), no con el partido, hasta 1980.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> La <b>constante</b> del período es el «Congreso demócrata»: mayoría casi ininterrumpida de 1955 a 1980. Eso explica por qué Eisenhower, Nixon y Ford tuvieron que negociar o gobernar por veto, y por qué el primer Senado republicano desde 1954 (en 1980) marca el verdadero giro.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El impacto electoral del realineamiento fue asimétrico: los republicanos ganaron la Casa Blanca con candidatos personales —Eisenhower, Nixon, Reagan— mucho antes de ganar el país, porque el Congreso siguió siendo demócrata hasta que, en 1980, el Senado también cambió de manos.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuál fue la «constante» del período 1945–1980?", etiqueta: "concepto",
            opciones: [
              { texto: "El Congreso demócrata, con mayoría casi ininterrumpida de 1955 a 1980.", correcta: true, explicacion: "Correcto: explica a Eisenhower, Nixon y Ford gobernando en minoría." },
              { texto: "El dominio republicano permanente de la Casa Blanca.", correcta: false, explicacion: "Los demócratas ganaron 1948, 1960, 1964 y 1976." },
              { texto: "La hegemonía del Sunbelt sobre el Noreste desde 1945 en aquellos años, según suele repetirse.", correcta: false, explicacion: "El Sunbelt crece con los años; no fue constante desde 1945." },
              { texto: "La mayoría conservadora en el Senado desde 1954.", correcta: false, explicacion: "El primer Senado republicano desde 1954 recién llega en 1980." }
            ] },
          { pregunta: "La composición demócrata de 1980 se distingue por…", etiqueta: "concepto",
            opciones: [
              { texto: "Negros (85–90%), mujeres y profesionales liberales, con el Sur en fuga.", correcta: true, explicacion: "Correcto: el giro desde la base de Sur blanco y sindicatos de 1945." },
              { texto: "Seguir anclada en el Sur blanco segregacionista como en 1945 en aquellos años, según suele repetirse.", correcta: false, explicacion: "El Sur blanco se fue a los republicanos." },
              { texto: "Estar formada por evangélicos y empresarios del Sunbelt.", correcta: false, explicacion: "Esa es la composición republicana de 1980." },
              { texto: "Haber perdido por completo el voto afroamericano.", correcta: false, explicacion: "Al contrario: los negros votaban demócrata casi al 90%." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Personalidades y agrupaciones",
        html: `
          <h3>Demócratas</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Strom Thurmond → George Wallace</td><td>El Sur segregacionista que primero se va (1948), luego vota Goldwater (1964), Wallace (1968), Nixon (1972), Reagan (1980).</td></tr>
            <tr><td>Hubert Humphrey</td><td>Liberal de derechos civiles (discurso de 1948); derrotado en 1968 como heredero de LBJ.</td></tr>
            <tr><td>McCarthy / RFK / McGovern</td><td>La «Nueva Política» antiguerra que toma el partido en 1968–72 y lo aleja de los obreros.</td></tr>
            <tr><td>Richard Daley / George Meany (AFL-CIO)</td><td>Las maquinarias y los sindicatos que pierden el control con McGovern-Fraser.</td></tr>
            <tr><td>Ted Kennedy vs Carter</td><td>Liberales vs centristas en 1980.</td></tr>
            <tr><td>Comisión McGovern-Fraser (1969–72)</td><td>Primarias y cuotas: el partido de los activistas.</td></tr>
            <tr><td>«Demócratas de Reagan»</td><td>Obreros blancos y católicos que votan Reagan en 1980.</td></tr>
          </tbody></table></div>

          <h3>Republicanos</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Robert Taft</td><td>Old Guard antiestatista; pierde en 1952.</td></tr>
            <tr><td>Eisenhower / Dewey / Rockefeller</td><td>El establishment moderado del Noreste: acepta el New Deal; muere en 1964–76.</td></tr>
            <tr><td>Buckley / National Review (1955) / YAF (1960)</td><td>El movimiento intelectual conservador que prepara 1964.</td></tr>
            <tr><td>Barry Goldwater</td><td>1964: derrota que funda el partido conservador; gana el Sur profundo.</td></tr>
            <tr><td>Kevin Phillips / Harry Dent</td><td>Estrategia sureña.</td></tr>
            <tr><td>Falwell (Mayoría Moral) / Schlafly / Heritage / Viguerie</td><td>Nueva Derecha religiosa y organizativa de los 70.</td></tr>
            <tr><td>Ronald Reagan</td><td>1964 discurso · 1976 casi nominado · 1980 realineamiento.</td></tr>
          </tbody></table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> La trayectoria de <b>Strom Thurmond</b> es el realineamiento en una sola persona: Dixiecrat en 1948, vota a Goldwater en 1964 (y se pasa a los republicanos), apoya a Wallace (1968), a Nixon (1972) y a Reagan (1980). Si no te acordás de nada más, acordate de él.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La trayectoria de Strom Thurmond —Dixiecrat en 1948, republicano desde 1964— condensa el realineamiento en una biografía: el Sur blanco segregacionista no cambió de ideas, cambió de partido.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Por qué Strom Thurmond resume el realineamiento?", etiqueta: "concepto",
            opciones: [
              { texto: "De Dixiecrat (1948) a republicano (1964): el Sur blanco cambió de partido.", correcta: true, explicacion: "Correcto: luego apoyó a Wallace, Nixon y Reagan." },
              { texto: "Porque fundó el movimiento de derechos civiles afroamericanos.", correcta: false, explicacion: "Fue lo contrario: era segregacionista." },
              { texto: "Porque lideró el ala liberal del partido demócrata hasta 1980 en aquellos años, según suele repetirse.", correcta: false, explicacion: "Era del Sur segregacionista, no liberal." },
              { texto: "Porque creó la Comisión McGovern-Fraser de primarias.", correcta: false, explicacion: "Esa comisión era demócrata y reformista; nada que ver con Thurmond." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Historiografía y conflictos comparados",
        html: `
          <h3>Historiografía del realineamiento</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Paul Johnson (conservador)</th><th>Adams (estructural)</th><th>Schlesinger (ciclos)</th></tr></thead>
            <tbody>
              <tr><td>El giro a la derecha es una reacción sana de la «mayoría silenciosa» contra los excesos del liberalismo de los 60 (Great Society, contracultura, permisividad, impuestos): Reagan como restauración de los valores de Eisenhower. El liberalismo se suicidó en 1968–72 al entregarse a los activistas.</td><td>El realineamiento es estructural: cambio demográfico (Sunbelt, suburbios), económico (estanflación, desindustrialización) y sobre todo racial. La coalición del New Deal dependía de no hablar de raza; cuando Truman, Kennedy y Johnson hablaron, el Sur blanco se fue. La estrategia sureña fue la explotación política de esa fractura.</td><td>La política alterna ciclos de ~30 años de reforma (1932–68) y consolidación conservadora (1968–…). Ni traición ni revolución: péndulo. Útil para relativizar: 1980 era esperable.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La Civil Rights Act de 1964 fue el punto de no retorno: Adams lee el doble resultado (Johnson 61% / Goldwater gana el Sur profundo) como el nacimiento de los dos partidos actuales; Paul Johnson, como el comienzo de la reacción conservadora; Schlesinger, como el giro previsible de un ciclo.»</div>

          <h3>Conflictos internos comparados</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Similitud</span>Ambos partidos tienen guerra de moderados vs extremos, y ambos pierden cuando gana el ala extrema: Goldwater (1964) y McGovern (1972).</div>
              <div><span class="et">Diferencia</span>En los republicanos gana el ala conservadora y triunfa (1980); en los demócratas gana la Nueva Política y el partido pierde a los obreros.</div>
              <div><span class="et">En común</span>Ambos son heridos por presidencias propias: Watergate (republicanos) y Vietnam (demócratas).</div>
            </div>
          </div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Tu juicio para la conclusión: la raza es causa <b>necesaria</b> pero no <b>suficiente</b>. Adams explica el motor estructural; Johnson, la lectura del votante conservador; Schlesinger relativiza. Un buen cierre dice «Adams explica mejor porque…», no «Johnson dice X, Adams dice Y».</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Johnson dice X, Adams dice Y» no es evaluación; «Adams explica mejor porque integra la demografía, la economía y la raza» sí lo es. Terminá siempre con un juicio propio.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué similitud hay en los conflictos internos de ambos partidos?", etiqueta: "concepto",
            opciones: [
              { texto: "Ambos pierden cuando gana su ala extrema: Goldwater (1964) y McGovern (1972).", correcta: true, explicacion: "Correcto: la diferencia es que la derecha republicana triunfa en 1980." },
              { texto: "Ambos estuvieron siempre dominados por su ala más moderada.", correcta: false, explicacion: "Las alas extremas llegaron a imponerse (Goldwater, McGovern)." },
              { texto: "Ninguno de los dos tuvo nunca conflictos internos relevantes en aquellos años, según suele repetirse.", correcta: false, explicacion: "Los dos tuvieron fuertes luchas internas." },
              { texto: "Ambos fueron heridos por la misma presidencia de Nixon.", correcta: false, explicacion: "Watergate hirió a los republicanos; Vietnam a los demócratas." }
            ] },
          { pregunta: "Según Adams, ¿qué papel tuvo la raza en el realineamiento?", etiqueta: "historiador",
            opciones: [
              { texto: "Causa central: al romperse el silencio racial, el Sur blanco se fue.", correcta: true, explicacion: "Correcto: la estrategia sureña explotó esa fractura." },
              { texto: "Un factor menor frente a la economía de los años setenta.", correcta: false, explicacion: "Para Adams la raza es la causa central, no menor." },
              { texto: "Ningún papel: el realineamiento fue puramente ideológico en aquellos años, según suele repetirse.", correcta: false, explicacion: "Adams subraya justamente lo racial y estructural." },
              { texto: "Una invención de la prensa sin base en los votantes.", correcta: false, explicacion: "Adams la documenta con cifras de voto (94% negro, Sur profundo)." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "Coalición del New Deal", dorso: "Sur blanco + sindicatos del Norte + católicos y judíos urbanos + afroamericanos + granjeros e intelectuales liberales (1932–68)." },
    { id: "fc02", categoria: "concepto", frente: "Realineamiento", dorso: "Cambio duradero de bloques de votantes: el Sur blanco a los republicanos; los negros a los demócratas (~90%)." },
    { id: "fc03", categoria: "concepto", frente: "Sunbelt", dorso: "Sur y Suroeste en crecimiento (Florida, Texas, Arizona, California): conservador, suburbano, militar-industrial." },
    { id: "fc04", categoria: "concepto", frente: "Estrategia sureña (Phillips, 1969)", dorso: "Capturar al Sur blanco y a los obreros del Norte con ley y orden, anti-busing y valores." },
    { id: "fc05", categoria: "concepto", frente: "Nueva Derecha", dorso: "Proposición 13, Mayoría Moral (Falwell 1979), Schlafly contra la ERA, Heritage (1973), neoconservadores, correo directo (Viguerie)." },
    { id: "fc06", categoria: "concepto", frente: "«Republicanismo moderno»", dorso: "Eisenhower vence a Taft y acepta el New Deal (consenso de posguerra, 1952–60)." },
    { id: "fc07", categoria: "fecha", frente: "1948", dorso: "Dixiecrats: Thurmond se va por los derechos civiles de Truman (39 electores). Primera grieta racial." },
    { id: "fc08", categoria: "fecha", frente: "1964", dorso: "Civil Rights Act; Goldwater nominado; Johnson 61% y 94% del voto negro, pero Goldwater gana el Sur profundo." },
    { id: "fc09", categoria: "fecha", frente: "1968", dorso: "Se rompe la coalición: 57% vota contra el liberalismo (Nixon + Wallace 13,5%)." },
    { id: "fc10", categoria: "fecha", frente: "1969–72", dorso: "Comisión McGovern-Fraser: primarias y cuotas; los sindicatos pierden control; McGovern pierde 49 estados." },
    { id: "fc11", categoria: "fecha", frente: "1974", dorso: "Watergate babies: demócratas +49 diputados; republicanos al 18%. Espejismo." },
    { id: "fc12", categoria: "fecha", frente: "1976", dorso: "Carter gana todo el Sur menos Virginia (último demócrata); Reagan casi nomina (1.070 vs 1.187)." },
    { id: "fc13", categoria: "fecha", frente: "1980", dorso: "Reagan 489–49; primer Senado republicano desde 1954; «Demócratas de Reagan»; realineamiento consumado." },
    { id: "fc14", categoria: "causa-consecuencia", frente: "Causa central del realineamiento", dorso: "La raza; con Vietnam, la cultura y la economía como aceleradores." },
    { id: "fc15", categoria: "causa-consecuencia", frente: "«Punto de no retorno»", dorso: "Civil Rights Act 1964: Johnson 61% y Goldwater gana el Sur profundo en la misma elección." },
    { id: "fc16", categoria: "causa-consecuencia", frente: "La «constante» del período", dorso: "El Congreso demócrata (mayoría casi ininterrumpida 1955–1980). Explica a Eisenhower, Nixon y Ford." },
    { id: "fc17", categoria: "concepto", frente: "Composición demócrata 1945 → 1980", dorso: "De Sur blanco + sindicatos a negros (85–90%), mujeres, profesionales liberales, con el Sur en fuga." },
    { id: "fc18", categoria: "concepto", frente: "Composición republicana 1945 → 1980", dorso: "De Noreste protestante y empresarios a Sur, Sunbelt, suburbios, evangélicos y «Demócratas de Reagan»." },
    { id: "fc19", categoria: "concepto", frente: "Ideología demócrata 1945 → 1980", dorso: "Del liberalismo económico del New Deal (con silencio racial) al liberalismo de derechos (civiles, feminismo, ambiente)." },
    { id: "fc20", categoria: "concepto", frente: "Ideología republicana 1945 → 1980", dorso: "Del antiestatismo pragmático de Ike al conservadurismo de Reagan (recortes, «ley y orden», valores, rearme)." },
    { id: "fc21", categoria: "concepto", frente: "Strom Thurmond", dorso: "El realineamiento en una biografía: Dixiecrat (1948) → republicano (1964) → Wallace, Nixon, Reagan." },
    { id: "fc22", categoria: "concepto", frente: "Barry Goldwater", dorso: "1964: derrota que funda el partido conservador; gana el Sur profundo." },
    { id: "fc23", categoria: "historiador", frente: "Adams (postura)", dorso: "Realineamiento estructural y sobre todo racial: la coalición del New Deal dependía del silencio sobre la raza." },
    { id: "fc24", categoria: "historiador", frente: "Paul Johnson (postura)", dorso: "Giro a la derecha = reacción sana de la «mayoría silenciosa»; Reagan como restauración; el liberalismo se suicidó en 1968–72." },
    { id: "fc25", categoria: "historiador", frente: "Schlesinger (postura)", dorso: "Péndulo: ciclos de ~30 años de reforma y consolidación. 1980 era esperable." },
    { id: "fc26", categoria: "historiador", frente: "Kevin Phillips (regalo)", dorso: "«The Emerging Republican Majority» (1969): manual de la estrategia sureña." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Qué era la coalición del New Deal?", etiqueta: "concepto",
      opciones: [
        { texto: "La alianza de Sur blanco, sindicatos, católicos urbanos, negros y granjeros.", correcta: true, explicacion: "Correcto: ganadora casi siempre entre 1932 y 1968." },
        { texto: "Una coalición de republicanos moderados del Noreste y el Sunbelt en aquellos años, según suele repetirse.", correcta: false, explicacion: "Esa sería la base republicana; el New Deal era demócrata." },
        { texto: "El pacto entre Nixon y Wallace para derrotar al liberalismo.", correcta: false, explicacion: "No hubo tal pacto; eso describe el voto de 1968." },
        { texto: "La alianza de evangélicos y empresarios de la Nueva Derecha.", correcta: false, explicacion: "Esa es la coalición de Reagan de 1980, opuesta a la del New Deal." }
      ] },
    { pregunta: "¿Qué pasó en el «año decisivo» de 1964?", etiqueta: "fecha",
      opciones: [
        { texto: "Johnson sacó el 61% pero Goldwater ganó el Sur profundo tras la Civil Rights Act.", correcta: true, explicacion: "Correcto: nacen los dos partidos actuales (Adams)." },
        { texto: "Reagan fue elegido presidente y consumó el realineamiento.", correcta: false, explicacion: "Reagan ganó en 1980, no en 1964." },
        { texto: "Nixon ganó con la mayoría silenciosa y la estrategia sureña en aquellos años, según suele repetirse.", correcta: false, explicacion: "Eso fue en 1968, con Nixon." },
        { texto: "Los Dixiecrats de Thurmond se separaron por primera vez.", correcta: false, explicacion: "Los Dixiecrats son de 1948." }
      ] },
    { pregunta: "¿Cuál fue la causa central del realineamiento según la guía?", etiqueta: "concepto",
      opciones: [
        { texto: "La raza, con Vietnam, la cultura y la economía como aceleradores.", correcta: true, explicacion: "Correcto: raza = causa necesaria pero no única." },
        { texto: "Únicamente la inflación de los años setenta en aquellos años, según suele repetirse.", correcta: false, explicacion: "La economía es un acelerador, no la causa central." },
        { texto: "La guerra de Vietnam como factor exclusivo.", correcta: false, explicacion: "Vietnam divide a los demócratas, pero es acelerador." },
        { texto: "La creación de la Mayoría Moral en 1979.", correcta: false, explicacion: "La Nueva Derecha es tardía; la causa central es la raza." }
      ] },
    { pregunta: "¿Qué fue la estrategia sureña?", etiqueta: "concepto",
      opciones: [
        { texto: "Capturar al Sur blanco con ley y orden y valores (Phillips, 1969).", correcta: true, explicacion: "Correcto: capta a los votantes de Wallace." },
        { texto: "El plan demócrata para retener el voto afroamericano del Sur en aquellos años, según suele repetirse.", correcta: false, explicacion: "Era una estrategia republicana para captar al Sur blanco." },
        { texto: "La política de Carter para ganar su región natal en 1976.", correcta: false, explicacion: "Carter ganó el Sur, pero la estrategia sureña es republicana." },
        { texto: "El acuerdo de Eisenhower con Taft sobre el New Deal.", correcta: false, explicacion: "Eso es el «republicanismo moderno», otra cosa." }
      ] },
    { pregunta: "¿Por qué el triunfo demócrata de 1974 fue un «espejismo»?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Watergate les dio votos pero no detuvo el realineamiento conservador.", correcta: true, explicacion: "Correcto: en 1980 el giro se consumó con Reagan." },
        { texto: "Porque en realidad perdieron el Congreso ese año.", correcta: false, explicacion: "Ganaron +49 diputados; no lo perdieron." },
        { texto: "Porque Carter perdió el Sur en 1976 confirmando la derrota.", correcta: false, explicacion: "Carter ganó el Sur en 1976." },
        { texto: "Porque los republicanos ya controlaban el Senado desde 1954 en aquellos años, según suele repetirse.", correcta: false, explicacion: "El Senado republicano recién llega en 1980." }
      ] },
    { pregunta: "La composición demócrata cambió de 1945 a 1980 hacia…", etiqueta: "concepto",
      opciones: [
        { texto: "Negros (85–90%), mujeres y profesionales liberales, con el Sur en fuga.", correcta: true, explicacion: "Correcto: giro desde la base de Sur blanco y sindicatos." },
        { texto: "El Noreste protestante y los grandes empresarios del medio oeste en aquellos años, según suele repetirse.", correcta: false, explicacion: "Esa es la base republicana de 1945." },
        { texto: "Los evangélicos del Sunbelt y los «Demócratas de Reagan».", correcta: false, explicacion: "Esos son parte de la coalición republicana de 1980." },
        { texto: "El Sur blanco segregacionista, igual que en 1945.", correcta: false, explicacion: "El Sur blanco se pasó a los republicanos." }
      ] },
    { pregunta: "¿Qué fue la Comisión McGovern-Fraser (1969–72)?", etiqueta: "fecha",
      opciones: [
        { texto: "La reforma demócrata de primarias y cuotas que quitó poder a los sindicatos.", correcta: true, explicacion: "Correcto: el partido pasa a los activistas; McGovern pierde 49 estados." },
        { texto: "El comité republicano que diseñó la estrategia sureña.", correcta: false, explicacion: "La estrategia sureña es de Phillips, no de esta comisión." },
        { texto: "La investigación del Senado sobre los abusos de la CIA en aquellos años, según suele repetirse.", correcta: false, explicacion: "Esa es la Comisión Church (1975)." },
        { texto: "El acuerdo que fundó la Mayoría Moral de Falwell.", correcta: false, explicacion: "La Mayoría Moral es de 1979 y republicana." }
      ] },
    { pregunta: "¿Cómo lee Paul Johnson el giro a la derecha?", etiqueta: "historiador",
      opciones: [
        { texto: "Como una reacción sana de la «mayoría silenciosa»; Reagan como restauración.", correcta: true, explicacion: "Correcto: el liberalismo se suicidó en 1968–72." },
        { texto: "Como una fractura estructural y sobre todo racial.", correcta: false, explicacion: "Esa es la lectura de Adams." },
        { texto: "Como un péndulo previsible de ciclos de treinta años en aquellos años, según suele repetirse.", correcta: false, explicacion: "Esa es la tesis de Schlesinger." },
        { texto: "Como una traición de los votantes a sus partidos.", correcta: false, explicacion: "Johnson lo ve como corrección sana, no traición." }
      ] },
    { pregunta: "¿Qué muestra la trayectoria de Strom Thurmond?", etiqueta: "concepto",
      opciones: [
        { texto: "El realineamiento en una biografía: Dixiecrat (1948) → republicano (1964).", correcta: true, explicacion: "Correcto: el Sur blanco cambió de partido, no de ideas." },
        { texto: "El ascenso del movimiento de derechos civiles afroamericano en aquellos años, según suele repetirse.", correcta: false, explicacion: "Era segregacionista, opuesto a ese movimiento." },
        { texto: "La fortaleza del ala liberal demócrata hasta 1980.", correcta: false, explicacion: "Era del Sur segregacionista, no liberal." },
        { texto: "El dominio del Noreste moderado sobre los republicanos.", correcta: false, explicacion: "Thurmond representa al Sur, no al Noreste moderado." }
      ] },
    { pregunta: "¿Qué tienen en común los conflictos internos de ambos partidos?", etiqueta: "concepto",
      opciones: [
        { texto: "Ambos pierden cuando gana su ala extrema (Goldwater 1964, McGovern 1972).", correcta: true, explicacion: "Correcto: la diferencia es que la derecha triunfa en 1980." },
        { texto: "Ninguno de los dos tuvo nunca luchas internas importantes.", correcta: false, explicacion: "Los dos tuvieron fuertes conflictos moderados vs extremos." },
        { texto: "Ambos fueron destruidos por la misma presidencia de Nixon.", correcta: false, explicacion: "Watergate hirió a los republicanos; Vietnam a los demócratas." },
        { texto: "Ambos siempre estuvieron dominados por sus alas moderadas en aquellos años, según suele repetirse.", correcta: false, explicacion: "Las alas extremas llegaron a imponerse en las nominaciones." }
      ] },
    { pregunta: "¿Qué marca electoralmente el año 1980?", etiqueta: "fecha",
      opciones: [
        { texto: "Reagan 489–49 y el primer Senado republicano desde 1954.", correcta: true, explicacion: "Correcto: realineamiento consumado; aparece la brecha de género." },
        { texto: "El último triunfo demócrata en los estados del Sur.", correcta: false, explicacion: "Ese fue 1976 con Carter." },
        { texto: "La primera grieta racial de la coalición del New Deal en aquellos años, según suele repetirse.", correcta: false, explicacion: "Esa fue 1948 (Dixiecrats)." },
        { texto: "La nominación de Goldwater por los republicanos.", correcta: false, explicacion: "Goldwater fue nominado en 1964." }
      ] },
    { pregunta: "¿Cómo conviene cerrar un ensayo sobre el realineamiento?", etiqueta: "historiador",
      opciones: [
        { texto: "Con un juicio propio: la raza es causa necesaria pero no suficiente.", correcta: true, explicacion: "Correcto: «Adams explica mejor porque…», no solo «X dice, Y dice»." },
        { texto: "Reduciendo todo el proceso a la guerra de Vietnam.", correcta: false, explicacion: "Es reduccionista; Vietnam es un acelerador." },
        { texto: "Enumerando historiadores sin tomar posición alguna.", correcta: false, explicacion: "Eso no es evaluación; hay que juzgar." },
        { texto: "Afirmando que los partidos cambiaron de un día para el otro en aquellos años, según suele repetirse.", correcta: false, explicacion: "Fue un proceso de 30 años con retrocesos." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Examine los cambios en la composición y la ideología de un partido (1945–1980).", frecuencia: "Muy alta",
        plan: "Un partido, cuatro párrafos: composición 1945→1980 (con cifras del voto negro/sureño) · conflictos internos (1948, 1964, 1968–72, 1976, 1980) · ideología (New Deal → derechos / Old Guard → Reagan) · impacto electoral (la tabla). Historiografía: Adams (estructura racial) vs Paul Johnson (reacción)." },
      { pregunta: "¿Hasta qué punto la cuestión racial explica los cambios en los partidos?", frecuencia: "Muy alta",
        plan: "Sí: 1948, 1964, 1968, estrategia sureña, voto negro 94%. Pero también Vietnam, cultura, economía, organización. Conclusión: causa necesaria, no suficiente." },
      { pregunta: "Compare y contraste los conflictos internos de ambos partidos.", frecuencia: "Alta",
        plan: "Similitud: ambos tienen guerra moderados vs extremos y pierden cuando gana el ala extrema (Goldwater 1964, McGovern 1972). Diferencia: en los republicanos gana la derecha y triunfa (1980); en los demócratas gana la Nueva Política y pierden a los obreros. Ambos heridos por presidencias propias (Watergate, Vietnam)." },
      { pregunta: "Evalúe el impacto electoral del realineamiento entre 1945 y 1980.", frecuencia: "Media",
        plan: "La constante del Congreso demócrata (1955–80) vs las victorias republicanas presidenciales (Ike, Nixon, Reagan); 1980 como giro real (Senado). Veredicto: impacto asimétrico y tardío en el Congreso." }
    ],
    planes: [
      { titulo: "Plan A · Examine los cambios en la composición e ideología del Partido Demócrata.",
        tesis: "El Partido Demócrata pasó de ser el partido del Sur blanco y los sindicatos a ser el de los derechos civiles, las minorías y los profesionales liberales; el motor fue la raza.",
        pasos: [
          "Composición: de Sur blanco + sindicatos (1945) a negros (85–90%), mujeres y profesionales (1980), con el Sur en fuga.",
          "Conflictos: liberales vs sureños (1948) → Nueva Política vs sindicatos (1968–72) → Kennedy vs Carter (1980).",
          "Ideología: del liberalismo económico del New Deal (silencio racial) al liberalismo de derechos.",
          "Impacto electoral: mayoría casi permanente en el Congreso (1955–80) pese a perder la Casa Blanca varias veces.",
          "Conclusión: Adams explica mejor (la raza como causa estructural); Vietnam, cultura y economía aceleran."
        ] },
      { titulo: "Plan B · ¿Hasta qué punto la cuestión racial explica los cambios en los partidos?",
        tesis: "La raza fue la causa necesaria pero no suficiente: ordenó el realineamiento, pero Vietnam, la cultura, la economía y la organización lo aceleraron.",
        pasos: [
          "Sí (raza): Dixiecrats 1948, Civil Rights Act 1964, estrategia sureña, voto negro 94% demócrata.",
          "Pero también Vietnam: divide a los demócratas (halcones vs palomas, Chicago 1968).",
          "Y la cultura: aborto (Roe 1973), ERA, religión; Nueva Derecha de los 70.",
          "Y la economía y la organización: estanflación, Proposición 13, primarias, think tanks, correo directo.",
          "Conclusión: la raza es la causa central (Adams), pero sola no basta; los aceleradores explican el ritmo."
        ] },
      { titulo: "Plan C · Compare y contraste los conflictos internos de ambos partidos.",
        tesis: "Ambos partidos libraron una guerra de moderados contra extremos, pero el desenlace fue opuesto: la derecha republicana triunfó, la Nueva Política demócrata costó a los obreros.",
        pasos: [
          "Similitud 1: guerra moderados vs extremos (Taft/Eisenhower y Goldwater/Rockefeller; sureños/liberales y Nueva Política/sindicatos).",
          "Similitud 2: ambos pierden cuando gana el ala extrema (Goldwater 1964, McGovern 1972).",
          "Diferencia: en los republicanos gana la derecha y triunfa en 1980; en los demócratas gana la Nueva Política y pierden a los obreros blancos.",
          "En común: ambos heridos por presidencias propias (Watergate / Vietnam).",
          "Conclusión: la misma dinámica interna, distinto resultado histórico."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «Examine los cambios en la composición y la ideología del Partido Republicano (1945–1980)»",
        parrafos: [
          { texto: "Entre 1945 y 1980 el Partido Republicano se transformó de arriba abajo: del partido del establishment moderado del Noreste protestante al partido del Sur, el Sunbelt y el conservadurismo de Goldwater y Reagan. Tesis: el cambio fue estructural y sobre todo racial, como sostiene Adams, aunque la cultura, la economía y una nueva maquinaria organizativa lo aceleraron. La causa central fue la misma que vació a los demócratas del Sur: la cuestión racial.", nota: "Intro: anuncia el giro, la tesis con Adams y la causa central." },
          { texto: "En composición, la base de 1945 —Noreste protestante, empresarios, medio oeste rural— cedió ante una coalición nueva: Sur y Sunbelt blancos, suburbios, evangélicos y los «Demócratas de Reagan», obreros blancos que abandonaron su partido histórico. El motor fue la Civil Rights Act de 1964: Goldwater, que votó en contra, ganó los cinco estados del Sur profundo, y Strom Thurmond se pasó a los republicanos. Esto demuestra que el Sur blanco no cambió de ideas, cambió de partido.", nota: "Composición con cifras y la biografía de Thurmond como prueba." },
          { texto: "En ideología, el partido abandonó el antiestatismo pragmático de Eisenhower —que había aceptado el New Deal— por el conservadurismo de Reagan: recortes de impuestos, desregulación, «ley y orden», valores familiares y rearme, con rechazo explícito de la Great Society. El conflicto interno moderados vs conservadores (Rockefeller y Ford contra Goldwater y Reagan) se saldó a favor de la derecha en 1964, casi en 1976 y del todo en 1980, cuando la Nueva Derecha religiosa sumó un ala populista a la empresarial.", nota: "Ideología y conflicto interno con las fechas del viraje." },
          { texto: "En conclusión, el Partido Republicano de 1980 era irreconocible frente al de 1945, y Adams explica mejor por qué: la fractura racial de la coalición del New Deal abrió un espacio que la estrategia sureña de Phillips ocupó. Paul Johnson lo celebra como la restauración de la «mayoría silenciosa»; Schlesinger lo relativiza como un giro de péndulo esperable. El impacto electoral fue asimétrico: la Casa Blanca cayó antes que el Congreso, que siguió demócrata hasta que el Senado también cambió en 1980.", nota: "Conclusión con los tres historiadores y el veredicto sobre el impacto electoral." }
        ] }
    ],
    guia: {
      tesis: "Respondé con veredicto en una frase. Tesis maestra: «Entre 1945 y 1980 los dos partidos cambiaron de piel; la causa central fue la raza, y los aceleradores, Vietnam, la cultura y la economía.»",
      argumentos: [
        "Un partido, cuatro párrafos: composición, conflictos internos, ideología, impacto electoral.",
        "En «compare y contraste», los dos partidos en cada párrafo (similitud / diferencia).",
        "Cada párrafo: Punto → Evidencia (fecha/cifra) → Explicación → Lazo a la pregunta (PEEL)."
      ],
      evidencia: [
        "1948 Dixiecrats; 1964 Civil Rights Act (Johnson 61%, voto negro 94%, Goldwater gana el Sur profundo).",
        "1968 Wallace 13,5%; 1972 McGovern pierde 49 estados; 1974 demócratas +49 diputados (espejismo).",
        "1976 Carter gana el Sur; 1980 Reagan 489–49 y primer Senado republicano desde 1954."
      ],
      historiografia: [
        "Adams (estructural y racial), Paul Johnson (reacción sana de la mayoría silenciosa), Schlesinger (péndulo de ciclos).",
        "Regalo: Kevin Phillips («The Emerging Republican Majority», 1969) para la estrategia sureña.",
        "No cites de adorno: cerrá con un juicio («Adams explica mejor porque…»), no con «X dice, Y dice»."
      ],
      contraargumento: "Reconocé la lectura de Paul Johnson (giro sano de la mayoría silenciosa) y contrastala con Adams: la raza y la demografía, no solo la cultura, explican el realineamiento; la raza es causa necesaria pero no suficiente."
    }
  }
});
