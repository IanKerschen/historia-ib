/* ============================================================
   tema-14-3.js — 14.3 Líderes populistas (Perón · Vargas)
   Transcripción fiel de la guía Paper 3 del usuario.
   No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "14.3",
  carpeta: "p3-s14",
  titulo: "Líderes populistas",
  subtitulo: "Juan Domingo Perón · Getúlio Vargas · Comparación",
  periodo: "Perón 1943–1955 · Vargas 1930–1945 y 1951–1954",
  estado: "listo",
  etiquetas: ["populismo", "Perón", "Vargas", "ISI", "corporativismo", "nacionalismo económico"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Ambos llegaron por el vacío de la oligarquía en crisis, organizaron al obrero urbano desde arriba, redistribuyeron con una bonanza transitoria, y cayeron cuando el dinero se acabó y el Ejército decidió. Éxito social, fracaso económico e institucional; fracasaron como gobiernos, triunfaron como legados.",
    historiadoresLinea: [
      { nombre: "Rapoport", linea: "Modelo de «capitalismo nacional» coherente; crisis de 1949 estructural («estrangulamiento externo»), no despilfarro; giro de 1952 = lucidez tardía." },
      { nombre: "Halperín Donghi", linea: "Perón heredó la crisis de 1930 no resuelta; quiso «comunidad organizada» y produjo polarización; logros reales e indelebles; «el pasado que no pasa»." },
      { nombre: "Fausto", linea: "1930 = colapso cafetalero sin reemplazo → Estado árbitro; Vargas pragmático sin ideología; trabalhismo = pacto, no sólo manipulación; suicidio = último acto político." },
      { nombre: "Knight", linea: "Populismo = estilo, no ideología: pueblo vs. élite, líder-intérprete, movilización en crisis, programa flexible." },
      { nombre: "De regalo", linea: "Germani (masas disponibles) vs. Murmis–Portantiero (elección racional) · Levine («¿padre de los pobres?»: sólo urbanos) · Portantiero (empate hegemónico)." }
    ],
    datosClave: [
      { grupo: "Perón: datos que valen oro", items: [
        "4 jun 1943 golpe del GOU · 27 nov 1943 Secretaría de Trabajo.",
        "1944 Estatuto del Peón · oct 1945 Ley de Asociaciones Profesionales.",
        "17 oct 1945 (Día de la Lealtad) · «Braden o Perón» · 24 feb 1946: 52,8%.",
        "1946 IAPI, Banco Central, teléfonos · 1948 ferrocarriles (£150 M).",
        "9 jul 1947 Independencia Económica (deuda cancelada) · 1947 voto femenino (Ley 13.010).",
        "1949 Constitución · universidad gratuita · Carrillo (Salud).",
        "Salario real +50–60% (1946–49) · asalariados 40% → ~50% del ingreso.",
        "Sindicalizados 500.000 (1945) → 2 M (1950).",
        "Reservas US$1.700 M (1946) → 0 (1949) · inflación 30–40% (1951–52).",
        "1951 reelección 62% · 1952 Plan de Estabilización · 26 jul 1952 muere Evita.",
        "1955 Standard Oil · 16 jun bombardeo de Plaza de Mayo · 16 sep Revolución Libertadora · exilio hasta 1973."
      ]},
      { grupo: "Vargas: datos que valen oro", items: [
        "1 mar 1930 pierde elección · 26 jul João Pessoa · 3 nov jefe del Gobierno Provisional.",
        "26 nov 1930 Ministerio de Trabajo · 1931 sindicalización · 1932 carteira.",
        "1932 Revolución Constitucionalista (SP) · 1934 Constitución (voto femenino, Código de Minas).",
        "nov 1935 Intentona · Prestes preso 1936–45 · 1937 Estado Novo (10 nov).",
        "1938 DASP · 1939 DIP · 1 may 1940 salario mínimo · 1 may 1941 Justicia del Trabajo · 1 may 1943 CLT.",
        "1941 Volta Redonda (Eximbank US$20 M) · 1942 Vale do Rio Doce · 22 ago 1942 guerra al Eje · FEB 1944–45.",
        "3 oct 1950 elegido 48,7% · 1952 BNDE · 3 oct 1953 Petrobras.",
        "feb 1954 Manifiesto de los Coroneles · 1 may 1954 aumento 100% · 5 ago atentado a Lacerda · 24 ago suicidio y Carta Testamento.",
        "Industria casi duplicada 1933–45 · CLT excluye al campo hasta 1963."
      ]}
    ],
    comparacion: [
      { eje: "Militares", texto: "Los suben (1930 / 1943) y los bajan (1945, 1954 / 1955). Similitud." },
      { eje: "Economía", texto: "Ambos ISI + nacionalismo; Perón compra servicios y consume (crisis 1949), Vargas crea industria pesada con crédito de EE.UU. (Volta Redonda, Petrobras). Diferencia." },
      { eje: "Legitimidad", texto: "Perón elegido antes de gobernar (1946, 1951); Vargas gobierna 15 años antes del voto directo (1950). Diferencia." },
      { eje: "Clase obrera", texto: "Organizada desde arriba en ambos (Ministerio 1930 / Secretaría 1943); Perón la moviliza, Vargas la administra. Similitud con matiz." },
      { eje: "Oposición", texto: "Vargas: dictadura abierta 1937–45, tolerante 1951–54; Perón: democracia vaciada siempre. Iglesia decisiva contra Perón, aliada de Vargas. Diferencia." }
    ],
    veredictos: [
      { titulo: "Éxitos y fracasos", texto: "El éxito fue social y político; el fracaso, económico e institucional. Lo primero explica el legado; lo segundo, la caída." },
      { titulo: "Comparación", texto: "Mismas políticas, distinta relación con el poder: Perón necesitó el voto y lo obtuvo; Vargas gobernó sin él y sólo lo buscó cuando ya no podía prescindir." },
      { titulo: "Legado", texto: "El legado de Perón es un movimiento; el de Vargas, un Estado. Ambos dejaron un país partido en dos." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Mario Rapoport", nacionalidad: "Argentino, historiador económico",
      obra: "Historia económica, política y social de la Argentina",
      postura: "Modelo coherente, crisis estructural",
      funcion: "Políticas económicas de Perón, crisis del 49, balance.",
      ideaCentral: "El peronismo fue un «capitalismo nacional» dirigido por el Estado: redistribuir ingreso hacia los asalariados para ampliar el mercado interno y financiar la ISI con las divisas del agro (vía IAPI). Fue viable mientras duró la bonanza de posguerra; la crisis de 1949–52 no fue despilfarro sino «estrangulamiento externo».",
      matiz: "Reconoce el giro pragmático de 1952–55 (capital extranjero, Standard Oil, Kaiser) como prueba de que Perón entendió el límite, no como traición.",
      fraseLista: "Para Rapoport, el modelo peronista no fracasó por irracional sino porque dependía de una coyuntura externa excepcional que se agotó hacia 1949.",
      paraPreguntas: ["Políticas económicas (uno o dos líderes)", "Éxitos y fracasos (éxito social, límite económico)"]
    },
    {
      nombre: "Tulio Halperín Donghi", nacionalidad: "Argentino, historiador político",
      obra: "La democracia de masas · La larga agonía de la Argentina peronista",
      postura: "Conciliación → polarización",
      funcion: "Llegada al poder de Perón, apoyo y oposición, legado y polarización.",
      ideaCentral: "Perón quiso una «comunidad organizada» que evitara el conflicto de clases, pero terminó creando lo contrario: una sociedad partida en dos identidades irreconciliables. El régimen vivió de una capacidad estatal de repartir hija de la guerra; cuando se acabó, quedó la polarización sin la prosperidad. El peronismo es «el pasado que no pasa».",
      matiz: "No niega los logros sociales: sostiene que fueron reales y por eso mismo indelebles.",
      fraseLista: "Halperín Donghi sostiene que el proyecto de conciliación de Perón derivó en su contrario: una polarización que sobrevivió a su caída.",
      paraPreguntas: ["Llegada al poder de Perón", "Apoyo y oposición / trato a la oposición", "Legado de largo plazo"]
    },
    {
      nombre: "Boris Fausto", nacionalidad: "Brasileño",
      obra: "A Revolução de 1930 · História do Brasil · Getúlio Vargas: o poder e o sorriso",
      postura: "Estado árbitro / pragmatismo",
      funcion: "Todo Vargas: 1930, Estado Novo, trabalhismo, 1954.",
      ideaCentral: "La Revolución de 1930 no fue burguesa ni obrera: derribó la hegemonía de la burguesía cafetalera sin reemplazo, y ese vacío le dio al Estado autonomía para arbitrar. Vargas fue un pragmático sin ideología fija. El trabalhismo no fue pura manipulación: fue un pacto en el que los obreros obtuvieron derechos concretos a cambio de encuadrarse en sindicatos oficiales.",
      matiz: "El suicidio de 1954 fue su último acto político: la Carta Testamento convirtió la derrota en victoria simbólica.",
      fraseLista: "Fausto describe a Vargas como un pragmático que usó el vacío de poder dejado por la oligarquía cafetalera para construir un Estado árbitro.",
      paraPreguntas: ["Llegada al poder de Vargas", "Políticas (Volta Redonda, Petrobras)", "Trabalhismo", "Éxitos y fracasos de Vargas"]
    },
    {
      nombre: "Alan Knight", nacionalidad: "Británico, Oxford",
      obra: "«Populism and Neo-populism in Latin America» (1998)",
      postura: "Populismo = estilo, no ideología",
      funcion: "Definir populismo en la intro, comparar, evaluar éxitos y fracasos.",
      ideaCentral: "El populismo no es una ideología ni una clase social: es un estilo político. Rasgos: apelación directa al «pueblo» contra una élite, líder que se presenta como encarnación de ese pueblo, movilización en crisis e ideología flexible. Por eso Perón (militar) y Vargas (terrateniente) caben en la misma etiqueta.",
      matiz: "Advierte contra usar «populista» como insulto: es una categoría analítica que describe cómo se hace política, no qué se hace.",
      fraseLista: "Siguiendo a Knight, el populismo se entiende mejor como un estilo (apelación directa al pueblo contra la élite) que como una ideología, lo que explica que Perón y Vargas cambiaran de programa sin dejar de ser populistas.",
      paraPreguntas: ["Definición de populismo (intro)", "Comparar y contrastar", "¿Fue el populismo democrático?"]
    },
    {
      nombre: "Germani vs. Murmis–Portantiero", regalo: true, nacionalidad: "Debate (frase regalo)",
      postura: "Masas disponibles vs. elección racional",
      ideaCentral: "Germani: el peronismo nació de «masas disponibles», migrantes internos manipulables por un líder carismático. Murmis y Portantiero (1971) lo refutan: la vieja clase obrera sindicalizada también apoyó a Perón por una elección racional.",
      fraseLista: "El debate Germani / Murmis–Portantiero muestra que el apoyo obrero a Perón no fue sólo emocional sino también un cálculo racional.",
      paraPreguntas: ["Apoyo popular", "Llegada al poder de Perón"]
    },
    {
      nombre: "Robert Levine", regalo: true, nacionalidad: "Frase regalo",
      obra: "Father of the Poor? (1998)",
      postura: "«¿Padre de los pobres?»: sólo urbanos",
      ideaCentral: "La legislación social de Vargas fue real pero alcanzó sólo al obrero urbano con carteira; el campo quedó afuera, y la imagen de «padre de los pobres» la fabricó el DIP.",
      fraseLista: "Como sugiere el signo de interrogación del título de Levine, Vargas fue padre de los pobres urbanos y padrastro de los rurales.",
      paraPreguntas: ["Política social de Vargas", "Éxitos y fracasos"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1930, fecha: "1930", pais: "Brasil", titulo: "Revolución de 1930 · Ministerio de Trabajo",
      descripcion: "Vargas pierde la elección (1 mar), asesinato de João Pessoa (26 jul), la Revolución depone a Washington Luís; el 3 nov Vargas es jefe del Gobierno Provisional; el 26 nov crea el Ministerio de Trabajo.",
      causas: ["Crisis del café de 1929 (~70% de las exportaciones).", "Ruptura del pacto «café com leite» (Washington Luís impone a Júlio Prestes).", "Tenentismo acumulado desde 1922."],
      consecuencias: ["Nace el «Estado árbitro» (Fausto).", "Primer ladrillo del trabalhismo."],
      historiador: "Fausto: colapso cafetalero sin reemplazo → autonomía del Estado." },
    { anio: 1932, fecha: "1932", pais: "Brasil", titulo: "Revolución Constitucionalista de São Paulo",
      descripcion: "Los paulistas exigen Constitución y autonomía; Vargas los derrota en 3 meses y después concede lo que pedían (voto femenino, voto secreto, Asamblea Constituyente).",
      causas: ["São Paulo pierde el control del poder central."],
      consecuencias: ["Cooptación como método: reprimir y después conceder.", "Constitución de 1934."] },
    { anio: 1935, fecha: "nov 1935", pais: "Brasil", titulo: "Intentona Comunista",
      descripcion: "ANL (izquierda, Prestes) vs. AIB (integralistas). La Intentona es aplastada → estado de sitio permanente, Prestes preso 1936–45, Olga Benário deportada a la Alemania nazi.",
      causas: ["Polarización izquierda/derecha; Ley de Seguridad Nacional."],
      consecuencias: ["El miedo al comunismo justifica el Estado Novo de 1937."] },
    { anio: 1937, fecha: "10 nov 1937", pais: "Brasil", titulo: "Golpe del Estado Novo",
      descripcion: "Con el falso Plano Cohen (30 sep) como excusa, Vargas cierra el Congreso, cancela la elección de 1938 y otorga la Constitución «Polaca».",
      causas: ["Miedo al comunismo fabricado (Plano Cohen).", "Vocación centralizadora."],
      consecuencias: ["Dictadura corporativista hasta 1945 (DIP, DASP, Filinto Müller)."] },
    { anio: 1940, fecha: "1 may 1940", pais: "Brasil", titulo: "Salario mínimo",
      descripcion: "Entra en vigor con Vargas anunciándolo ante 40.000 obreros. El 1° de Mayo se vuelve rito del régimen.",
      consecuencias: ["El Estado Novo tardío se vuelve «populista»."] },
    { anio: 1941, fecha: "1941", pais: "Brasil", titulo: "CSN Volta Redonda · Justicia del Trabajo",
      descripcion: "Primera siderúrgica integrada, financiada con crédito del Eximbank (US$20 M, 1940) tras jugar a dos puntas con Alemania.",
      consecuencias: ["Símbolo del «Brasil grande»; Estado empresario hasta los años 80."] },
    { anio: 1943, fecha: "4 jun 1943", pais: "Argentina", titulo: "Golpe del GOU",
      descripcion: "La logia militar GOU da el golpe; el 27 nov Perón convierte el Departamento de Trabajo en Secretaría de Trabajo y Previsión.",
      causas: ["Década Infame desprestigiada; ISI espontánea; migración interna; guerra."],
      consecuencias: ["Perón pasa de secundón a líder obrero desde la Secretaría de Trabajo."],
      historiador: "Halperín: la crisis de 1930 no resuelta, sólo congelada por el fraude." },
    { anio: 1945, fecha: "17 oct 1945", pais: "Argentina", titulo: "Día de la Lealtad",
      descripcion: "Perón, detenido en Martín García, es liberado tras la movilización obrera a Plaza de Mayo (organizada por los sindicatos, no por Evita). Nace el peronismo como movimiento.",
      causas: ["Los militares de Campo de Mayo lo obligan a renunciar (9 oct)."],
      consecuencias: ["Perón deja de depender del Ejército y pasa a depender de los obreros."] },
    { anio: 1945, fecha: "29 oct 1945", pais: "Brasil", titulo: "Vargas depuesto",
      descripcion: "Góis Monteiro y Dutra deponen a Vargas ante el temor del queremismo (un «17 de octubre» brasileño). Cae 12 días después del triunfo de Perón.",
      consecuencias: ["Se retira a São Borja; es elegido senador; Dutra gana la presidencia."] },
    { anio: 1946, fecha: "24 feb 1946", pais: "Argentina", titulo: "Perón elegido (52,8%)",
      descripcion: "Tras «Braden o Perón», vence a la Unión Democrática. Asume el 4 jun. Nacionaliza Banco Central y teléfonos; crea el IAPI.",
      consecuencias: ["Legitimidad electoral que usará contra la oposición."] },
    { anio: 1947, fecha: "9 jul 1947", pais: "Argentina", titulo: "Independencia Económica · voto femenino",
      descripcion: "Declaración de la Independencia Económica en Tucumán (deuda cancelada). Ley 13.010 de voto femenino.",
      consecuencias: ["Sin deuda, pero sin acceso a crédito en 1949.", "En 1951 votan las mujeres por primera vez."] },
    { anio: 1948, fecha: "1 mar 1948", pais: "Argentina", titulo: "Ferrocarriles nacionalizados",
      descripcion: "Se compran los ferrocarriles británicos (~£150 M). Fundación Eva Perón (1948).",
      consecuencias: ["Popularísimo, pero críticos: se pagó caro por «chatarra»."] },
    { anio: 1949, fecha: "1949", pais: "Argentina", titulo: "Constitución de 1949 · crisis económica",
      descripcion: "Constitución con derechos sociales y reelección; universidad gratuita; Ministerio de Salud (Carrillo). Se agotan las reservas; cae Miranda.",
      causas: ["Estrangulamiento externo: caen precios agrarios, EE.UU. excluye a Argentina del Plan Marshall."],
      consecuencias: ["Inflación 30–40%, racionamiento; giro hacia la ortodoxia."],
      historiador: "Rapoport: crisis estructural, no despilfarro." },
    { anio: 1950, fecha: "3 oct 1950", pais: "Brasil", titulo: "Vargas elegido (48,7%)",
      descripcion: "«Vargas volta nos braços do povo». Asume el 31 ene 1951.",
      consecuencias: ["Vuelve, pero sin mayoría propia ni dinero."] },
    { anio: 1953, fecha: "3 oct 1953", pais: "Brasil", titulo: "Petrobras",
      descripcion: "Campaña «O petróleo é nosso» → monopolio estatal del petróleo. Goulart al Ministerio de Trabajo (jun).",
      consecuencias: ["Gran victoria simbólica; la inflación le regala la oposición unida."] },
    { anio: 1954, fecha: "24 ago 1954", pais: "Brasil", titulo: "Suicidio de Vargas · Carta Testamento",
      descripcion: "Tras el Manifiesto de los Coroneles, el aumento del 100% (1 may) y el atentado a Lacerda (5 ago), el ultimátum militar lo acorrala. Se dispara al corazón.",
      causas: ["Inflación, atentado de rua Tonelero, ultimátum de la Aeronáutica."],
      consecuencias: ["La Carta Testamento bloquea el golpe hasta 1964 y sostiene el trabalhismo."],
      historiador: "Fausto: el suicidio fue su último acto político." },
    { anio: 1955, fecha: "16 jun 1955", pais: "Argentina", titulo: "Bombardeo de Plaza de Mayo",
      descripcion: "Aviones de la Marina bombardean Plaza de Mayo para matar a Perón: ~300 muertos civiles. Antes: conflicto con la Iglesia y Corpus Christi (11 jun).",
      consecuencias: ["La oposición converge bajo el paraguas de la Iglesia."] },
    { anio: 1955, fecha: "16 sep 1955", pais: "Argentina", titulo: "Revolución Libertadora",
      descripcion: "Lonardi (Córdoba) y la Marina derrocan a Perón, que renuncia y parte al exilio (hasta 1973). Aramburu proscribe el peronismo.",
      causas: ["Crisis económica + oposición unificada + Ejército que ya no era suyo."],
      consecuencias: ["18 años de proscripción; «empate hegemónico» (Portantiero)."],
      historiador: "Halperín: cae cuando sus antiguos aliados se juntan con sus enemigos." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Dos países, dos líderes, una misma historia estructural: la crisis de 1929 hunde a las oligarquías agroexportadoras, el Estado ocupa el vacío, un líder organiza al obrero urbano desde arriba, redistribuye con la bonanza de la guerra y la posguerra, y cae cuando el dinero se acaba y el Ejército decide. Si lo ves así, cualquier pregunta se ordena sola.</p>

          <h3>Lo que el examinador quiere ver</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Banda</th><th>Qué pide</th><th>Qué significa en tu ensayo</th></tr></thead>
            <tbody>
              <tr><td>13–15 (el 7)</td><td>Argumento claro y sostenido, evidencia precisa, perspectivas evaluadas, conclusión coherente.</td><td>Tesis en la intro; cada párrafo abre con un argumento y cierra volviendo a la pregunta; datos con fecha/cifra; 2 historiadores que se contrastan; conclusión que pesa.</td></tr>
              <tr><td>10–12</td><td>Enfocada, argumento mayormente sostenido, algo de análisis.</td><td>Buen contenido pero te vas por la narración o los historiadores están pegados como adorno.</td></tr>
              <tr><td>7–9</td><td>Conocimiento correcto pero descriptivo.</td><td>Contás la historia en orden. No pasa de acá sin argumento.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Plantilla de párrafo (PEEL):</b> «En primer lugar, [argumento]. Esto se ve en [dato con fecha/cifra]. Esto demuestra que [por qué importa para la pregunta]. Por lo tanto, [volver a la palabra clave de la consigna].» Cuatro párrafos así + intro + conclusión = 1.000–1.200 palabras en 50–55 minutos.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Verbos de consigna.</b> <i>Compare y contraste</i> = similitudes Y diferencias, ambos líderes en cada párrafo. <i>Evalúe / ¿En qué medida?</i> = balance con veredicto. <i>Examine</i> = causas ordenadas por importancia. <i>Discuta</i> = ofrecer visiones distintas y decidir.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> <b>La tesis maestra (sirve para el 80% de las preguntas):</b> «Tanto Perón como Vargas llegaron al poder aprovechando el vacío dejado por una oligarquía agroexportadora en crisis, construyeron su base en un movimiento obrero urbano que el Estado organizó desde arriba y financiaron la redistribución con una bonanza que resultó transitoria; por eso sus éxitos sociales fueron reales pero sus modelos económicos entraron en crisis cuando cambió el contexto externo, y su forma de tratar a la oposición polarizó a las sociedades que decían unir.»</div>

          <h3>Código de colores</h3>
          <ul>
            <li><b>KISS</b> — aclaración simple de un término. Si ya lo sabés, saltalo.</li>
            <li><b>FRASE LISTA</b> — oración que podés copiar casi textual al ensayo.</li>
            <li><b>TRUCO</b> — técnica de examen o mnemotecnia.</li>
            <li><b>HISTORIADOR</b> — cómo integrar un historiador en el argumento.</li>
            <li><b>TRAMPA</b> — error común que cuesta bandas.</li>
            <li><b>DE CLASE</b> — notas del profe. Si tu profe insiste en otro dato, gana el profe.</li>
          </ul>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Populismo</b> = estilo que apela al «pueblo» contra una «élite», con líder carismático y redistribución (Knight: es un estilo, no una ideología). <b>Oligarquía</b> = élite terrateniente-exportadora (estancieros en Argentina, cafetaleros paulistas en Brasil). <b>ISI</b> = industrialización por sustitución de importaciones. <b>Corporativismo</b> = organizar la sociedad en cuerpos (sindicatos, cámaras) controlados por el Estado; modelo de la Italia de Mussolini. <b>Nacionalismo económico</b> = recursos y servicios clave en manos del Estado. <b>Tercera Posición</b> = ni capitalismo ni comunismo (Perón). <b>Trabalhismo</b> = laborismo de Estado brasileño: derechos a cambio de lealtad (Vargas). <b>Justicialismo</b> = doctrina de Perón: «justicia social, independencia económica, soberanía política».</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El tema es «1945–1980» pero Vargas gobierna 1930–45 y 1951–54. Se acepta usar 1930–45 para «llegada al poder» y «políticas», pero <b>nunca</b> olvides el segundo gobierno (1951–54), que sí está dentro del período. Siempre nombrá los dos.</div>
        `,
        miniQuiz: [
          { pregunta: "Según Knight, el populismo se entiende mejor como…", etiqueta: "concepto",
            opciones: [
              { texto: "Un estilo político (pueblo vs. élite), no una ideología fija.", correcta: true, explicacion: "Correcto: por eso Perón y Vargas caben en la etiqueta aunque cambien de programa." },
              { texto: "Una ideología cerrada de izquierda con un programa económico fijo.", correcta: false, explicacion: "Knight justamente niega que sea una ideología; el programa es flexible." },
              { texto: "Una clase social surgida de la industrialización urbana.", correcta: false, explicacion: "No es una clase: es un modo de hacer política que apela a varias clases." },
              { texto: "Un insulto para líderes que manipulan a las masas.", correcta: false, explicacion: "Knight advierte contra usarlo como insulto; es una categoría analítica." }
            ] },
          { pregunta: "¿Por qué el período «1945–1980» es una trampa con Vargas?", etiqueta: "fecha",
            opciones: [
              { texto: "Porque gobierna 1930–45 y 1951–54, y hay que incluir el segundo gobierno.", correcta: true, explicacion: "Exacto: 1951–54 cae dentro del período y no se puede omitir." },
              { texto: "Porque en realidad Vargas nunca llegó a gobernar dentro de ese período histórico.", correcta: false, explicacion: "Sí gobernó: su segundo mandato (1951–54) está dentro del período." },
              { texto: "Porque en esos años Vargas solo fue senador, no presidente.", correcta: false, explicacion: "Fue presidente electo entre 1951 y 1954." },
              { texto: "Porque el examinador rechaza cualquier dato anterior a 1945.", correcta: false, explicacion: "Al contrario: aceptan 1930–45 para explicar llegada y políticas." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · El tema en una página",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Eje</th><th>Perón (Argentina)</th><th>Vargas (Brasil)</th></tr></thead>
            <tbody>
              <tr><td>Quién era</td><td>Coronel del Ejército, familia modesta, agregado militar en Italia (1939–41), 47 años en 1943.</td><td>Abogado y estanciero gaúcho, ministro y gobernador, 47 años en 1930.</td></tr>
              <tr><td>Cómo llega</td><td>Golpe del GOU (1943) → Secretaría de Trabajo → 17 de octubre de 1945 → elección 1946 (52,8%).</td><td>Revolución de 1930 → presidente indirecto 1934 → Estado Novo (1937) → elección 1950 (48,7%).</td></tr>
              <tr><td>Base social</td><td>Obreros sindicalizados (CGT), migrantes internos, «descamisados», mujeres (voto 1947), industriales nacionales.</td><td>Obreros urbanos formales, tenentes, clases medias (al inicio), industriales paulistas, burocracia.</td></tr>
              <tr><td>Política social</td><td>Aguinaldo, convenios, Estatuto del Peón, jubilaciones, hospitales (Carrillo), Fundación Eva Perón, universidad gratuita 1949.</td><td>Ministerio de Trabajo 1930, carteira 1932, salario mínimo 1940, Justicia del Trabajo 1941, CLT 1943.</td></tr>
              <tr><td>Política económica</td><td>ISI liviana, IAPI, nacionalización de ferrocarriles (1948), Banco Central; deuda cancelada 1947; crisis 1949–52; giro pragmático.</td><td>Valorización del café, Código de Minas 1934, CSN Volta Redonda 1941, Vale 1942, Petrobras 1953.</td></tr>
              <tr><td>Oposición</td><td>UCR (Balbín preso 1950), socialistas, comunistas, Sociedad Rural, universidades, prensa, Iglesia desde 1954, Marina.</td><td>Paulistas (1932), comunistas (1935), integralistas (1938), prensa (DIP), UDN y Lacerda, sectores del Ejército.</td></tr>
              <tr><td>Caída</td><td>Bombardeo de Plaza de Mayo (jun 1955) → Revolución Libertadora (sep 1955) → exilio 18 años.</td><td>Depuesto por el Ejército (1945); en 1954 ultimátum militar → suicidio.</td></tr>
              <tr><td>Legado</td><td>El peronismo como identidad que «no pasa» (Halperín): el sistema gira alrededor de su proscripción hasta 1973.</td><td>La Carta Testamento lo vuelve mártir; trabalhismo (PTB, Goulart) y CLT sobreviven hasta 1964.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Regla de los 5 ejes.</b> Cualquier pregunta sobre un líder populista se responde recorriendo: LLEGADA · SOCIAL · ECONÓMICO · APOYO/OPOSICIÓN · BALANCE. Memorizá «L-S-E-A-B» (Los Sábados Estudio A Bocha). Elegí los 3–4 ejes que la pregunta pide y descartá el resto.</div>
        `,
        miniQuiz: [
          { pregunta: "Una diferencia clave en «cómo llegan» al poder es que…", etiqueta: "concepto",
            opciones: [
              { texto: "Perón se legitima por el voto antes de gobernar; Vargas gobierna muchos años antes del voto directo.", correcta: true, explicacion: "Correcto: Perón gana en 1946; Vargas recién busca el voto directo en 1950." },
              { texto: "Perón llega por un golpe militar propio y Vargas lo hace por una elección directa totalmente limpia.", correcta: false, explicacion: "Al revés: Perón llega por elección (1946); Vargas por la Revolución de 1930." },
              { texto: "Ambos llegan por elección directa en el mismo año de la posguerra mundial.", correcta: false, explicacion: "No coinciden: Perón 1946, Vargas directo 1950; y Vargas ya gobernaba desde 1930." },
              { texto: "Ninguno de los dos usó jamás a las fuerzas armadas para llegar al poder.", correcta: false, explicacion: "Los dos usaron a los militares como trampolín (GOU 1943 / Revolución 1930)." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · Perón: contexto y llegada al poder",
        html: `
          <h3>Contexto: por qué había lugar para Perón</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Factor</th><th>Qué pasaba</th><th>Por qué abre la puerta</th></tr></thead>
            <tbody>
              <tr><td>Década Infame (1930–43)</td><td>Golpe de Uriburu; gobiernos conservadores con «fraude patriótico»; Pacto Roca–Runciman (1933).</td><td>La democracia estaba desprestigiada: nadie salió a defenderla en 1943.</td></tr>
              <tr><td>ISI espontánea</td><td>La crisis y la guerra cortan importaciones; obreros industriales de ~440.000 (1935) a +1.000.000 (1946).</td><td>Nace una clase obrera nueva y grande que ningún partido representa bien.</td></tr>
              <tr><td>Migración interna</td><td>Del interior a Buenos Aires; los «cabecitas negras» que la izquierda porteña no organiza.</td><td>Base disponible (Germani) que Perón capta desde el Estado.</td></tr>
              <tr><td>Segunda Guerra</td><td>Argentina neutral; el Ejército teme el comunismo y desconfía de los políticos.</td><td>El GOU da el golpe del 4 de junio de 1943.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Halperín Donghi: la crisis de 1930 nunca se resolvió; el fraude sólo la congeló. «Para Halperín Donghi, el peronismo fue la respuesta a una crisis de legitimidad que la Década Infame había aplazado, no resuelto.»</div>

          <h3>Escalera de llegada al poder (1943–1946)</h3>
          <ol class="escalera">
            <li><b>4 jun 1943 · Golpe del GOU.</b> Perón, coronel del GOU, es un secundón.</li>
            <li><b>27 nov 1943 · Secretaría de Trabajo y Previsión.</b> Desde ahí resuelve conflictos a favor de los obreros.</li>
            <li><b>1944 · Acumula cargos:</b> Ministro de Guerra y Vicepresidente. Terremoto de San Juan: conoce a Eva Duarte.</li>
            <li><b>1944–45 · Lluvia de medidas:</b> Estatuto del Peón (1944), convenios colectivos, Ley de Asociaciones Profesionales (1945).</li>
            <li><b>19 sep 1945 · Marcha de la Constitución y la Libertad:</b> ~200.000 opositores. Perón parece acabado.</li>
            <li><b>9 oct 1945 · Renuncia forzada</b> y detención en Martín García (13 oct).</li>
            <li><b>17 oct 1945 · Movilización obrera a Plaza de Mayo</b> (organizada por los sindicatos, no por Evita). Nace el «Día de la Lealtad».</li>
            <li><b>dic 1945 · Aguinaldo;</b> la patronal hace lock-out y le regala la campaña.</li>
            <li><b>feb 1946 · «Braden o Perón»</b> tras el Libro Azul. Nacionalismo antiimperialista de regalo.</li>
            <li><b>24 feb 1946 · Elección limpia:</b> 52,8% vs. la Unión Democrática. Asume el 4 jun 1946.</li>
          </ol>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para «examine los factores»: ordená en tres capas. <b>Estructurales</b> (crisis de la oligarquía, ISI, migración), <b>coyunturales</b> (guerra, golpe del 43, miedo al comunismo) y <b>personales</b> (Secretaría de Trabajo, 17 de octubre, «Braden o Perón»). Veredicto: sin las dos primeras no hay Perón, pero sin la tercera no hay peronismo.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Evita <b>no</b> organizó el 17 de octubre (era actriz sin poder sindical todavía); lo organizaron los dirigentes gremiales. Y Perón <b>no</b> llegó por un golpe propio: llegó por elección.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Quién organizó la movilización del 17 de octubre de 1945?", etiqueta: "trampa",
            opciones: [
              { texto: "Los dirigentes gremiales y la CGT, no Evita.", correcta: true, explicacion: "Correcto: Evita todavía no tenía poder sindical; fue obra de los sindicatos." },
              { texto: "Eva Perón, desde la Fundación que ya dirigía.", correcta: false, explicacion: "La Fundación es de 1948; en 1945 Evita no tenía cargo ni poder gremial." },
              { texto: "El Ejército de Campo de Mayo, a favor de Perón.", correcta: false, explicacion: "Campo de Mayo lo había forzado a renunciar; no lo rescató." },
              { texto: "La Unión Democrática, para negociar su salida.", correcta: false, explicacion: "La Unión Democrática era la coalición opositora, no lo movilizó." }
            ] },
          { pregunta: "La frase «Braden o Perón» (1946) le sirvió a Perón para…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Convertir la injerencia de EE.UU. en bandera nacionalista electoral.", correcta: true, explicacion: "Correcto: el Libro Azul de Braden le regaló el antiimperialismo como campaña." },
              { texto: "Firmar una alianza económica estable con Washington.", correcta: false, explicacion: "Fue lo contrario: confrontación con EE.UU. en 1945–46." },
              { texto: "Justificar el golpe militar con el que había llegado.", correcta: false, explicacion: "Perón llegó por elección, no por un golpe propio." },
              { texto: "Conseguir el apoyo de la Sociedad Rural y de la oligarquía terrateniente.", correcta: false, explicacion: "La oligarquía y la Sociedad Rural fueron sus enemigas." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · Perón: políticas sociales y económicas",
        html: `
          <h3>Políticas sociales: «justicia social»</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Área</th><th>Medidas (con fecha)</th><th>Efecto / cifra</th></tr></thead>
            <tbody>
              <tr><td>Trabajo</td><td>Aguinaldo (1945), vacaciones pagas, convenios colectivos, Estatuto del Peón (1944), Ley de Asociaciones Profesionales (1945).</td><td>Salario real +50–60% (1946–49). Asalariados: de ~40% (1946) a ~50% (1950–52) del ingreso: <b>la cifra estrella</b>.</td></tr>
              <tr><td>Sindicatos</td><td>La CGT, columna vertebral; afiliación de ~500.000 (1945) a +2 M (1950).</td><td>Poder obrero real pero controlado: Cipriano Reyes preso; Partido Laborista disuelto (1946).</td></tr>
              <tr><td>Salud</td><td>Ministerio de Salud (1949) con Ramón Carrillo: hospitales, vacunación.</td><td>Camas hospitalarias casi se duplican (~66.000 → ~130.000).</td></tr>
              <tr><td>Educación</td><td>Universidad Obrera (1948), supresión de aranceles universitarios (1949).</td><td>Matrícula universitaria se duplica. Contracara: purga de ~1.250 profesores (1946).</td></tr>
              <tr><td>Mujeres</td><td>Ley 13.010 de voto femenino (1947), Partido Peronista Femenino (1949).</td><td>En 1951 votan por primera vez: ~64% del voto femenino para Perón.</td></tr>
              <tr><td>Asistencia</td><td>Fundación Eva Perón (1948): hogares, policlínicos, turismo social.</td><td>«Ayuda social» en vez de «caridad»: lealtad emocional directa a Evita.</td></tr>
            </tbody>
          </table></div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La redistribución peronista fue tan real que se mide en una cifra: la participación de los asalariados en el ingreso nacional pasó de ~40% en 1946 a cerca del 50% a comienzos de los cincuenta, un salto que ningún gobierno argentino posterior repitió.»</div>

          <h3>Políticas económicas: «independencia económica»</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Etapa</th><th>Medidas</th><th>Resultado / cifra</th></tr></thead>
            <tbody>
              <tr><td>Nacionalizaciones 1946–48</td><td>Banco Central (1946), teléfonos (1946), ferrocarriles (1948, ~£150 M), gas, puertos.</td><td>Popularísimo. Críticos: se pagó caro por «chatarra» y se gastaron las reservas de guerra.</td></tr>
              <tr><td>IAPI (1946)</td><td>El Estado compra las cosechas a precio fijo y las vende al exterior.</td><td>Funciona con precios altos (1946–48); después el chacarero pierde incentivo.</td></tr>
              <tr><td>Deuda externa</td><td>9 jul 1947: «Declaración de la Independencia Económica»; se cancela la deuda.</td><td>Sin deuda en 1947, pero sin acceso a crédito cuando lo necesita en 1949.</td></tr>
              <tr><td>Primer Plan Quinquenal 1947–51</td><td>Industria liviana, crédito barato, obras públicas.</td><td>PBI ~+8% anual (1946–48), pero industria dependiente de insumos importados.</td></tr>
              <tr><td>Crisis 1949–52</td><td>Reservas agotadas; caen precios agrarios; exclusión del Plan Marshall; inflación 30–40%.</td><td>«Estrangulamiento externo». Cae Miranda; giro a la ortodoxia.</td></tr>
              <tr><td>Giro pragmático 1952–55</td><td>Plan de Estabilización 1952, Ley de Inversiones Extranjeras 1953, Standard Oil (1955).</td><td>La inflación baja, pero el contrato con Standard Oil enfurece a los nacionalistas.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Rapoport: el modelo tenía tres patas (redistribución, ISI, nacionalismo) y una contradicción interna: financiaba la industria con un agro al que desalentaba. La crisis de 1949 fue estructural, no moral.</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Estrangulamiento externo</b> = te quedás sin dólares. La industria liviana no exporta, sólo importa; los dólares los trae el campo; si el IAPI le paga poco, no hay dólares, la industria se frena y hay inflación. Esto se llamó «stop and go».</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Para las políticas económicas de Perón: <b>«tres N + una C»</b>: Nacionalizaciones, No deuda (1947), Nuevo Plan Quinquenal → Crisis del 49 → giro. Número redondo: reservas de ~1.700 M de dólares (1946) a ~cero (1949).</div>
        `,
        miniQuiz: [
          { pregunta: "La «cifra estrella» de la redistribución peronista es…", etiqueta: "fecha",
            opciones: [
              { texto: "Los asalariados pasaron de ~40% a ~50% del ingreso nacional.", correcta: true, explicacion: "Correcto: es el dato que ningún gobierno posterior repitió." },
              { texto: "El PBI creció un 8% anual durante todo el gobierno de Perón.", correcta: false, explicacion: "El +8% fue solo 1946–48 y no es la cifra de redistribución." },
              { texto: "La afiliación sindical pasó de 2 millones a 5 millones.", correcta: false, explicacion: "Subió de ~500.000 a ~2 M, no a 5 M; además no es «la estrella»." },
              { texto: "Las reservas crecieron de 1.700 M a 3.000 M de dólares.", correcta: false, explicacion: "Las reservas cayeron de ~1.700 M a casi cero en 1949." }
            ] },
          { pregunta: "Rapoport explica la crisis de 1949 como…", etiqueta: "historiador",
            opciones: [
              { texto: "Un «estrangulamiento externo» estructural, no un despilfarro.", correcta: true, explicacion: "Correcto: la industria necesitaba dólares que el IAPI le quitaba al agro." },
              { texto: "El resultado del gasto irracional de un líder sin plan.", correcta: false, explicacion: "Esa es la versión liberal de la oposición, que Rapoport rechaza." },
              { texto: "Una consecuencia directa e inmediata del contrato con la Standard Oil.", correcta: false, explicacion: "El contrato con Standard Oil es de 1955, posterior a la crisis." },
              { texto: "Un invento de la prensa opositora sin base económica.", correcta: false, explicacion: "La crisis fue real (reservas agotadas, inflación 30–40%)." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Perón: apoyo, oposición y caída",
        html: `
          <h3>Apoyo y oposición</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Grupo</th><th>Apoyo</th><th>Oposición (desde cuándo)</th></tr></thead>
            <tbody>
              <tr><td>Obreros / CGT</td><td>Columna vertebral: salarios, derechos, orgullo.</td><td>Casi nula; los disidentes (Cipriano Reyes) perseguidos.</td></tr>
              <tr><td>Ejército</td><td>Perón es uno de ellos; industria militar, prestigio nacionalista.</td><td>Golpe de Menéndez (1951); la Marina siempre hostil; 1955 se vuelca casi todo.</td></tr>
              <tr><td>Iglesia</td><td>1946: pide el voto por Perón; enseñanza religiosa (1947).</td><td>1954–55: divorcio, fin de la enseñanza religiosa, Corpus Christi, excomunión de Perón.</td></tr>
              <tr><td>Industriales</td><td>Los «nuevos» (mercado interno) ganan; CGE (1952).</td><td>UIA intervenida (1946); Sociedad Rural y grandes empresas, enemigos desde el IAPI.</td></tr>
              <tr><td>Clases medias / universidad</td><td>Parte, por el empleo público.</td><td>Mayoría: purgas universitarias, «alpargatas sí, libros no», FUA.</td></tr>
            </tbody>
          </table></div>

          <h3>Cómo trató a la oposición (cooptar · controlar · reprimir)</h3>
          <ul>
            <li><b>Legal-institucional:</b> juicio político a la Corte (1947), Ley de Desacato (1949), reelección en la Constitución de 1949, «estado de guerra interna» (1951).</li>
            <li><b>Medios y cultura:</b> monopolio de radios, expropiación de <i>La Prensa</i> (1951), <i>La razón de mi vida</i> de lectura obligatoria.</li>
            <li><b>Represión directa:</b> Sección Especial (torturas), Balbín preso (1950), Cipriano Reyes preso. <b>Nunca</b> al nivel de una dictadura: hubo elecciones, Congreso y partidos todo el tiempo.</li>
          </ul>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Halperín Donghi: Perón quería una «comunidad organizada» sin conflicto; como la oposición no desapareció ni se sumó, la trató como enemiga de la Nación. La conciliación produjo su contrario: una sociedad partida en peronistas y antiperonistas.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Perón no gobernó como un dictador clásico (mantuvo elecciones, Congreso y partidos) pero sí como un líder que confundió al Estado con su movimiento, de modo que oponerse al gobierno pasó a ser oponerse a la Nación.»</div>

          <h3>La caída (1954–1955)</h3>
          <ol class="escalera">
            <li><b>26 jul 1952 · Muere Evita:</b> el movimiento pierde su enlace emocional con los pobres.</li>
            <li><b>1954–55 · Conflicto con la Iglesia</b> (divorcio, fin de la enseñanza religiosa): la Iglesia se vuelve el paraguas de todos los opositores.</li>
            <li><b>1955 · Standard Oil:</b> los nacionalistas (Frondizi) acusan «entrega».</li>
            <li><b>11 jun 1955 · Corpus Christi</b> se vuelve manifestación opositora; excomunión de Perón.</li>
            <li><b>16 jun 1955 · Bombardeo de Plaza de Mayo:</b> ~300 muertos civiles.</li>
            <li><b>16 sep 1955 · Revolución Libertadora:</b> Perón renuncia y se exilia (hasta 1973). Aramburu proscribe el peronismo (decreto 4.161).</li>
          </ol>

          <div class="caja kiss"><span class="caja-et">KISS</span> Perón cae por tres cosas a la vez: se acabó la plata (crisis del 49), se peleó con la Iglesia (techo común de la oposición) y el Ejército ya no era suyo. Sin las tres no cae: en 1951 Menéndez fracasó.</div>

          <h3>Balance: éxitos y fracasos</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Éxitos</span>Redistribución medible (40%→50%), salud/educación, voto femenino, nacionalismo concreto, dos elecciones limpias, legado identitario.</div>
              <div><span class="et">Límites</span>Modelo económico insostenible (1949), autoritarismo creciente, sindicatos dependientes del líder.</div>
              <div><span class="et">Veredicto</span>Éxito social y político; fracaso económico e institucional.</div>
            </div>
          </div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El éxito de Perón fue social y político; su fracaso fue económico e institucional. Lo primero explica por qué el peronismo sobrevivió; lo segundo, por qué Perón no.»</div>
        `,
        miniQuiz: [
          { pregunta: "Para Halperín Donghi, el trato de Perón a la oposición produjo…", etiqueta: "historiador",
            opciones: [
              { texto: "Una polarización que contradijo su propio proyecto de «comunidad organizada».", correcta: true, explicacion: "Correcto: la conciliación derivó en su contrario, una sociedad partida en dos." },
              { texto: "Una dictadura clásica sin elecciones, sin Congreso y sin ningún partido legal.", correcta: false, explicacion: "Perón mantuvo elecciones y Congreso; fue «democracia vaciada», no dictadura clásica." },
              { texto: "La desaparición total y definitiva de toda la oposición política.", correcta: false, explicacion: "La oposición no desapareció: por eso la trató como enemiga de la Nación." },
              { texto: "Una alianza amplia y duradera entre peronistas y antiperonistas.", correcta: false, explicacion: "Fue lo opuesto: dos identidades excluyentes e irreconciliables." }
            ] },
          { pregunta: "Según el resumen, Perón cae en 1955 por la combinación de…", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Crisis económica, ruptura con la Iglesia y un Ejército que ya no era suyo.", correcta: true, explicacion: "Correcto: las tres juntas; sin las tres, en 1951 Menéndez había fracasado." },
              { texto: "Una invasión militar extranjera apoyada de forma abierta por los Estados Unidos.", correcta: false, explicacion: "No hubo invasión; fue un golpe interno (Revolución Libertadora)." },
              { texto: "La derrota electoral del peronismo en comicios libres de 1955.", correcta: false, explicacion: "No perdió elecciones: fue derrocado por un golpe militar." },
              { texto: "La muerte de Evita en 1952 como única y exclusiva causa de la caída.", correcta: false, explicacion: "La muerte de Evita debilitó al régimen, pero no fue la única causa." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Vargas: contexto y llegada al poder",
        html: `
          <div class="caja kiss"><span class="caja-et">KISS</span> Vargas tiene <b>cuatro Vargas</b>: (1) Gobierno Provisional 1930–34, (2) constitucional 1934–37, (3) Estado Novo 1937–45 (dictadura abierta), (4) segundo gobierno 1951–54 (electo). El «populista» clásico es el 3 tardío (desde 1942) y el 4.</div>

          <h3>Contexto: la República Velha se cae sola</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Factor</th><th>Qué pasaba</th><th>Por qué abre la puerta</th></tr></thead>
            <tbody>
              <tr><td>«Café com leite»</td><td>São Paulo (café) y Minas Gerais (leche) se turnaban la presidencia; el coronelismo fabricaba votos.</td><td>Sistema cerrado que deja afuera al ejército joven, las clases medias y los estados menores.</td></tr>
              <tr><td>Tenentismo</td><td>Revueltas de tenientes (1922–27) contra el fraude.</td><td>Vargas reclutará a los tenentes como brazo armado e interventores en 1930.</td></tr>
              <tr><td>Crisis de 1929</td><td>El café (~70% de las exportaciones) cae más de la mitad.</td><td>La oligarquía cafetalera pierde su base económica.</td></tr>
              <tr><td>Ruptura del pacto</td><td>Washington Luís impone a otro paulista (Júlio Prestes); Minas se alía con RS y Paraíba (Aliança Liberal).</td><td>Sin la ruptura SP–MG no hay revolución.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Fausto: 1930 no fue una revolución de clase sino el colapso de la hegemonía cafetalera sin reemplazo; el Estado ganó autonomía y Vargas se volvió árbitro. Mismo argumento estructural que Halperín usa para Perón.</div>

          <h3>Escalera de llegada al poder (1930–1937)</h3>
          <ol class="escalera">
            <li><b>1 mar 1930 · Elección:</b> Júlio Prestes le gana a Vargas. Fraude por ambos lados.</li>
            <li><b>26 jul 1930 · Asesinato de João Pessoa:</b> la Aliança Liberal lo convierte en mártir.</li>
            <li><b>3–24 oct 1930 · Revolución de 1930:</b> una junta militar depone a Washington Luís; el 3 nov Vargas es jefe del Gobierno Provisional.</li>
            <li><b>26 nov 1930 · Ministerio de Trabajo</b> (Lindolfo Collor). Ley de sindicalización (1931). Es la Secretaría de Trabajo de Perón, 13 años antes.</li>
            <li><b>1932 · Revolución Constitucionalista de São Paulo:</b> Vargas la derrota y después concede la Constituyente.</li>
            <li><b>1934 · Constitución</b> (legislación laboral, voto femenino, Código de Minas); Vargas presidente indirecto.</li>
            <li><b>1935 · Intentona Comunista</b> aplastada → estado de sitio, Prestes preso.</li>
            <li><b>30 sep 1937 · Plano Cohen</b> (falso plan comunista) para justificar el estado de guerra.</li>
            <li><b>10 nov 1937 · Golpe del Estado Novo:</b> cierra el Congreso, Constitución «Polaca».</li>
          </ol>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Vargas sube tres veces: 1930 (revolución armada), 1934 (voto indirecto), 1937 (autogolpe). Y una cuarta, 1950 (voto directo). «Tres escalones para arriba y uno de regreso».</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Revolución de 1930» es el nombre, no la naturaleza: fue un golpe cívico-militar de una fracción de la élite con tenentes y clases medias, no una insurrección popular (Fausto).</div>
        `,
        miniQuiz: [
          { pregunta: "Según Fausto, la Revolución de 1930 fue…", etiqueta: "historiador",
            opciones: [
              { texto: "El colapso de la hegemonía cafetalera sin reemplazo, que dio autonomía al Estado.", correcta: true, explicacion: "Correcto: por eso Vargas pudo convertirse en «árbitro»." },
              { texto: "Una revolución obrera que llevó directamente al poder a la clase trabajadora urbana.", correcta: false, explicacion: "No fue de clase obrera; fue un golpe cívico-militar de una fracción de la élite." },
              { texto: "Una insurrección popular espontánea del pueblo brasileño contra todo el ejército.", correcta: false, explicacion: "No fue popular ni espontánea, y los tenentes (militares) la apoyaron." },
              { texto: "La victoria electoral limpia y rotunda de Vargas sobre el candidato Júlio Prestes.", correcta: false, explicacion: "Vargas perdió esa elección (1 mar 1930); llegó por la revolución." }
            ] },
          { pregunta: "El Ministerio de Trabajo de 1930 es comparable a…", etiqueta: "concepto",
            opciones: [
              { texto: "La Secretaría de Trabajo de Perón (1943), pero 13 años antes.", correcta: true, explicacion: "Correcto: ambos usan la oficina laboral como trampolín político." },
              { texto: "El IAPI de Perón, que monopolizaba todo el comercio exterior agrario.", correcta: false, explicacion: "El IAPI es un organismo económico, no laboral." },
              { texto: "La Fundación Eva Perón de ayuda social de 1948.", correcta: false, explicacion: "La Fundación es asistencia, no un ministerio laboral." },
              { texto: "La Constitución de 1949 que habilitó la reelección.", correcta: false, explicacion: "Nada que ver: una es laboral (1930), la otra constitucional (1949)." }
            ] }
        ]
      },

      {
        id: "s6", titulo: "6 · Vargas: Estado Novo y políticas",
        html: `
          <h3>El Estado Novo (1937–1945): cómo funcionaba</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Instrumento</th><th>Qué era</th><th>Para qué servía</th></tr></thead>
            <tbody>
              <tr><td>Constitución 1937</td><td>Vargas legisla por decreto; interventores; huelga «antisocial».</td><td>Dictadura legalizada; centralización total.</td></tr>
              <tr><td>DIP (1939)</td><td>Censura de prensa, radio y cine; «Hora do Brasil» obligatoria.</td><td>Construir al «padre de los pobres». Levine: la imagen es producto del DIP.</td></tr>
              <tr><td>DASP (1938)</td><td>Burocracia técnica, concursos, presupuesto central.</td><td>Un Estado moderno que reemplaza a los coroneles: el «Estado árbitro» de Fausto.</td></tr>
              <tr><td>Policía política</td><td>Filinto Müller, DOPS, tortura, presos políticos.</td><td>Represión selectiva: comunistas, luego integralistas, luego liberales.</td></tr>
              <tr><td>Corporativismo</td><td>Sindicato único por categoría; imposto sindical (1940); sin huelgas.</td><td>El obrero gana derechos y pierde autonomía. Modelo de la Carta del Lavoro.</td></tr>
            </tbody>
          </table></div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Estado Novo</b> = «Estado Nuevo»: dictadura corporativista (1937–45) sin Congreso, sin partidos y sin elecciones, con Vargas legislando por decreto. No confundir con el Estado Novo de Salazar (Portugal).</div>

          <h3>Políticas sociales: el «trabalhismo»</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Medida</th><th>Fecha</th><th>Efecto / límite</th></tr></thead>
            <tbody>
              <tr><td>Carteira de trabalho; jornada de 8 h</td><td>1932</td><td>La «cuestión social» deja de ser «caso de policía».</td></tr>
              <tr><td>Salario mínimo</td><td>1 may 1940</td><td>El 1° de Mayo se vuelve rito del régimen; valor erosionado por la inflación.</td></tr>
              <tr><td>Justicia del Trabajo</td><td>1 may 1941</td><td>El conflicto se judicializa (huelgas prohibidas).</td></tr>
              <tr><td>CLT</td><td>1 may 1943</td><td>Código laboral vigente hasta hoy; <b>excluía al trabajador rural hasta 1963</b>.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Fausto: el trabalhismo fue un <b>pacto</b>, no sólo manipulación: los obreros urbanos ganaron derechos reales a cambio de sindicatos oficiales y la figura paternal del líder. Contraste con Levine: «¿padre de los pobres?» sólo de los urbanos con carteira.</div>

          <h3>Políticas económicas: nacionalismo pragmático</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Etapa</th><th>Medidas</th><th>Resultado</th></tr></thead>
            <tbody>
              <tr><td>Rescate del café (1931–44)</td><td>El Estado compra y quema ~78 M de sacos.</td><td>Salva a los cafetaleros que derrocó.</td></tr>
              <tr><td>ISI e industria (1930–45)</td><td>Aranceles, Código de Minas y Aguas (1934), Consejo del Petróleo (1938).</td><td>Producción industrial casi se duplica (1933–45).</td></tr>
              <tr><td>Industria pesada estatal</td><td>CSN Volta Redonda (1941, crédito Eximbank US$20 M), Vale do Rio Doce (1942).</td><td>Símbolo del «Brasil grande»; Estado empresario hasta los 80.</td></tr>
              <tr><td>Segundo gobierno 1951–54</td><td>BNDE (1952), Petrobras (1953, «O petróleo é nosso»).</td><td>Petrobras: gran victoria simbólica; inflación ~20% le trae la oposición unida.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Fausto + Rapoport: los dos modelos comparten nacionalismo e ISI, pero Vargas apostó a la <b>industria pesada estatal</b> (Volta Redonda, Petrobras) mientras Perón concentró su gasto en nacionalizar <b>servicios existentes</b> (ferrocarriles, teléfonos) y en consumo. Por eso el legado industrial brasileño fue más sólido.</div>
        `,
        miniQuiz: [
          { pregunta: "La CLT de 1943 fue, a la vez, el mayor logro social de Vargas y…", etiqueta: "concepto",
            opciones: [
              { texto: "Un instrumento de control: encuadró al obrero en sindicatos dependientes del Estado.", correcta: true, explicacion: "Correcto: dio derechos y, a la vez, ató al obrero al Ministerio (Fausto: pacto)." },
              { texto: "Una ley que incluyó de inmediato y por igual a todos los trabajadores rurales del país.", correcta: false, explicacion: "La CLT excluyó al campo hasta 1963 (Levine)." },
              { texto: "Una medida que legalizó las huelgas y creó sindicatos libres del Estado.", correcta: false, explicacion: "Al revés: las huelgas estaban prohibidas y los sindicatos eran oficiales." },
              { texto: "Un código que fue derogado por completo al caer el Estado Novo en 1945.", correcta: false, explicacion: "La CLT sobrevivió medio siglo; sigue vigente (reformada en 2017)." }
            ] },
          { pregunta: "Diferencia económica clave entre Vargas y Perón:", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Vargas crea industria pesada estatal; Perón nacionaliza servicios ya existentes y gasta en consumo.", correcta: true, explicacion: "Correcto: por eso el legado industrial brasileño fue más sólido." },
              { texto: "Perón rechaza por completo la inversión extranjera y Vargas la prohíbe por una ley nacional expresa.", correcta: false, explicacion: "Ambos usaron capital externo (Eximbank para Vargas; Standard Oil para Perón)." },
              { texto: "Vargas nunca usó al Estado como empresario ni como planificador de la economía.", correcta: false, explicacion: "Vargas fue el gran Estado empresario (Volta Redonda, Petrobras)." },
              { texto: "Perón industrializó toda la base pesada y Vargas se limitó a la industria liviana.", correcta: false, explicacion: "Es al revés: la industria pesada estatal es el sello de Vargas." }
            ] }
        ]
      },

      {
        id: "s7", titulo: "7 · Vargas: oposición, caída y balance",
        html: `
          <h3>Cómo trató a la oposición</h3>
          <ul>
            <li><b>Cooptación:</b> perdona a São Paulo tras 1932; compra a las oligarquías con el café; funda dos partidos en 1945 (PSD para élites, PTB para obreros).</li>
            <li><b>Represión:</b> 1935–37 Ley de Seguridad Nacional, miles de presos, Prestes 9 años, Olga Benário a la Gestapo; policía de Filinto Müller.</li>
            <li><b>Censura:</b> DIP (1939–45), «Hora do Brasil», diarios intervenidos.</li>
            <li><b>Distensión táctica:</b> 1945 amnistía; 1951–54 soporta a Lacerda sin cerrarle el diario.</li>
          </ul>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Vargas fue más represivo que Perón cuando fue dictador (1937–45: sin Congreso, tortura sistemática) y más tolerante cuando fue presidente electo (1951–54); Perón, en cambio, mantuvo siempre las formas democráticas y siempre las vació.»</div>

          <h3>La crisis de 1954: escalera hacia el suicidio</h3>
          <ol class="escalera">
            <li><b>1952–53 · Inflación ~20%;</b> Vargas gira al nacionalismo popular: Goulart al Trabajo, Petrobras.</li>
            <li><b>feb 1954 · Manifiesto de los Coroneles:</b> 82 oficiales contra Goulart y el aumento del salario mínimo.</li>
            <li><b>1 may 1954 · Aumento del 100%:</b> los militares lo leen como sindicalismo a la Perón.</li>
            <li><b>5 ago 1954 · Atentado de la rua Tonelero</b> contra Lacerda: muere un mayor de Aeronáutica. Investigación llega a la guardia de Vargas.</li>
            <li><b>22–24 ago 1954 · Ultimátum militar → suicidio.</b> Carta Testamento: «Salgo de la vida para entrar en la historia».</li>
          </ol>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Fausto: el suicidio fue el último acto político de un pragmático sin jugadas: con una bala convirtió una destitución segura en un martirio que bloqueó el golpe por diez años (hasta 1964) y sostuvo el trabalhismo. Contraste con Perón: Perón eligió el exilio y volvió 18 años después; Vargas eligió la muerte y «volvió» al día siguiente.</div>

          <h3>Balance: éxitos y fracasos</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Éxitos</span>Fin de la República Velha, legislación social duradera (CLT), industrialización de base (Volta Redonda, Petrobras), voto femenino (1932), supervivencia política (elegido 1950).</div>
              <div><span class="et">Límites</span>8 años de dictadura abierta, derechos sólo urbanos (Levine), sindicatos «pelegos» sin autonomía, inflación y corrupción en el 2º gobierno.</div>
              <div><span class="et">Veredicto</span>Fracasó como demócrata y administrador; triunfó como constructor de Estado y como mito.</div>
            </div>
          </div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Vargas fracasó como demócrata y como administrador de su segundo gobierno, pero triunfó como constructor de Estado: la CLT, Volta Redonda y Petrobras le sobrevivieron más de medio siglo.»</div>
        `,
        miniQuiz: [
          { pregunta: "Según Fausto, el suicidio de Vargas (1954) fue…", etiqueta: "historiador",
            opciones: [
              { texto: "Su último acto político: convirtió la derrota en un martirio que bloqueó el golpe hasta 1964.", correcta: true, explicacion: "Correcto: la Carta Testamento transformó la destitución en victoria simbólica." },
              { texto: "Un gesto estrictamente privado y sin ninguna consecuencia política posterior relevante.", correcta: false, explicacion: "Tuvo enorme efecto: frenó el golpe y sostuvo el trabalhismo." },
              { texto: "El inicio inmediato y directo de la dictadura militar brasileña de las décadas inmediatamente siguientes.", correcta: false, explicacion: "El golpe militar recién llegó en 1964, diez años después." },
              { texto: "La causa directa del estallido de la Revolución Constitucionalista paulista de São Paulo.", correcta: false, explicacion: "Esa revolución fue en 1932, dos décadas antes." }
            ] },
          { pregunta: "Comparando el trato a la oposición:", etiqueta: "concepto",
            opciones: [
              { texto: "Vargas fue dictador abierto 1937–45 y tolerante 1951–54; Perón mantuvo siempre las formas y las vació.", correcta: true, explicacion: "Correcto: Vargas tiene dos registros; Perón es constante en la «democracia vaciada»." },
              { texto: "Ambos fueron dictaduras abiertas sin Congreso ni partidos durante todo su mandato.", correcta: false, explicacion: "Perón mantuvo Congreso y elecciones; no fue una dictadura clásica." },
              { texto: "Perón fue siempre y en todo momento mucho más represivo que Vargas en absolutamente todos los períodos.", correcta: false, explicacion: "Vargas fue más represivo como dictador abierto (1937–45)." },
              { texto: "Ninguno de los dos recurrió jamás a la censura ni a la propaganda de Estado.", correcta: false, explicacion: "Los dos la usaron (DIP / Subsecretaría de Informaciones)." }
            ] }
        ]
      },

      {
        id: "s8", titulo: "8 · Comparación eje por eje",
        html: `
          <div class="caja truco"><span class="caja-et">TRUCO</span> En «compare y contraste» cada párrafo tiene a los dos en la misma frase: «Mientras que Perón [X], Vargas [Y]; sin embargo, ambos [Z]». Un párrafo de similitud, dos de diferencia, y una conclusión que diga cuál pesa más.</div>

          <h3>Similitudes (7)</h3>
          <ol>
            <li>Contexto: ambos surgen de la crisis de la oligarquía agroexportadora tras 1929.</li>
            <li>Trampolín militar: llegan con el Ejército (1943 / 1930) y caen con él (1955 / 1945 y 1954).</li>
            <li>Obrero organizado desde arriba: Ministerio/Secretaría de Trabajo, sindicato único.</li>
            <li>Corporativismo de inspiración italiana (CLT 1943 / Ley de Asociaciones Profesionales 1945).</li>
            <li>Nacionalismo económico e ISI: Estado empresario.</li>
            <li>Culto al líder y control de medios (DIP / Subsecretaría de Informaciones; 1° de Mayo / 17 de octubre).</li>
            <li>Legado polarizante: getulismo–antigetulismo / peronismo–antiperonismo.</li>
          </ol>

          <h3>Diferencias (7)</h3>
          <ol>
            <li>Legitimidad: Perón elegido antes de gobernar; Vargas gobierna 15 años antes del voto directo.</li>
            <li>Grado de autoritarismo: Vargas dictador abierto 1937–45; Perón «democracia vaciada».</li>
            <li>Movilización: Perón moviliza (plaza, CGT, Evita); Vargas administra (DASP, sindicatos pelegos).</li>
            <li>Doctrina: Justicialismo escrito; Vargas sin doctrina, pragmatismo puro.</li>
            <li>Economía: Perón compra servicios y consume (crisis 1949); Vargas crea industria pesada con crédito de EE.UU.</li>
            <li>Iglesia: decisiva contra Perón (1955); aliada estable de Vargas.</li>
            <li>Final: exilio y regreso (Perón, 1973) vs. suicidio y martirio (Vargas, 1954).</li>
          </ol>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>«MELCO»</b> para no olvidar ningún eje: <b>M</b>ilitares (subida y caída), <b>E</b>conomía (ISI y nacionalismo), <b>L</b>egitimidad (voto), <b>C</b>lase obrera (organización desde arriba), <b>O</b>posición (trato). Cinco letras, cinco párrafos posibles.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «La diferencia más profunda no está en las políticas, que fueron notablemente parecidas, sino en la relación con el poder: Perón necesitó el voto para gobernar y lo obtuvo dos veces; Vargas gobernó quince años sin necesitarlo y sólo lo buscó cuando ya no podía prescindir de él.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué significa la mnemotecnia «MELCO» para comparar?", etiqueta: "concepto",
            opciones: [
              { texto: "Militares, Economía, Legitimidad, Clase obrera, Oposición.", correcta: true, explicacion: "Correcto: cinco ejes, cinco párrafos posibles de comparación." },
              { texto: "Migración, Educación, Leyes, Cultura, Obras públicas.", correcta: false, explicacion: "No son esos ejes; MELCO apunta a la comparación de líderes." },
              { texto: "Mercado, Elecciones, Latinoamérica, Comercio, Oligarquía.", correcta: false, explicacion: "No corresponde al esquema MELCO del tema." },
              { texto: "Militares, Estado nacional, Liberalismo, Comunismo y Oposición.", correcta: false, explicacion: "La E es Economía, la L es Legitimidad y la C es Clase obrera." }
            ] },
          { pregunta: "La «diferencia más profunda» entre ambos, según la frase lista, es…", etiqueta: "concepto",
            opciones: [
              { texto: "La relación con el poder: Perón necesitó el voto y Vargas gobernó sin él casi siempre.", correcta: true, explicacion: "Correcto: las políticas fueron parecidas; lo que cambia es la vía al poder." },
              { texto: "Que aplicaron políticas económicas y sociales totalmente opuestas e incompatibles entre sí.", correcta: false, explicacion: "Las políticas fueron «notablemente parecidas», no opuestas." },
              { texto: "Que uno fue de izquierda marxista y el otro de derecha ideológica pura.", correcta: false, explicacion: "El populismo es un estilo flexible (Knight), no una ideología fija." },
              { texto: "Que solamente uno de los dos usó al Ejército para poder llegar al poder.", correcta: false, explicacion: "Ambos usaron a los militares como trampolín inicial." }
            ] }
        ]
      },

      {
        id: "s9", titulo: "9 · Personalidades y agrupaciones",
        html: `
          <h3>Personalidades · Argentina</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Eva Perón</td><td>Fundación (1948), Partido Peronista Femenino, «puente» con los pobres; muere 26 jul 1952.</td></tr>
            <tr><td>Miguel Miranda</td><td>Zar económico (1946–49): el IAPI y las nacionalizaciones son suyos. Cae con la crisis de 1949.</td></tr>
            <tr><td>Ramón Carrillo</td><td>Primer ministro de Salud (1949): el «éxito social» en persona.</td></tr>
            <tr><td>Cipriano Reyes</td><td>Organizador del 17 de octubre y del Partido Laborista; termina preso. El sindicalismo autónomo sin lugar.</td></tr>
            <tr><td>Ricardo Balbín</td><td>Líder de la UCR, preso en 1950 por desacato. La oposición legal perseguida.</td></tr>
            <tr><td>Spruille Braden</td><td>Embajador de EE.UU.; Libro Azul; «Braden o Perón». Enemigo útil.</td></tr>
            <tr><td>Lonardi / Aramburu</td><td>Jefes de la Revolución Libertadora (1955); Aramburu proscribe el peronismo.</td></tr>
          </tbody></table></div>

          <h3>Personalidades · Brasil</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Luís Carlos Prestes</td><td>Líder del PCB y de la ANL, Intentona 1935, preso 1936–45. El enemigo comunista que justifica la represión.</td></tr>
            <tr><td>Plínio Salgado</td><td>Jefe de los integralistas (AIB). Vargas usa y descarta.</td></tr>
            <tr><td>Francisco Campos</td><td>Redacta la Constitución de 1937 (la «Polaca»). El ideólogo autoritario.</td></tr>
            <tr><td>Filinto Müller</td><td>Jefe de policía (1933–42): tortura, Olga Benário. La cara represiva.</td></tr>
            <tr><td>Góis Monteiro / Dutra</td><td>Los generales del Estado Novo; lo deponen en 1945.</td></tr>
            <tr><td>João Goulart (Jango)</td><td>Ministro de Trabajo (1953–54), heredero del trabalhismo. El «Perón brasileño».</td></tr>
            <tr><td>Carlos Lacerda</td><td>Periodista de la UDN; el atentado contra él (1954) desata la crisis final.</td></tr>
          </tbody></table></div>

          <h3>Agrupaciones (siglas)</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>GOU</td><td>Grupo de Oficiales Unidos: logia militar del golpe de 1943; Perón era su cerebro.</td></tr>
            <tr><td>CGT</td><td>Confederación General del Trabajo: central única, columna vertebral del peronismo.</td></tr>
            <tr><td>IAPI</td><td>Instituto Argentino de Promoción del Intercambio (1946): monopolio del comercio exterior agrario.</td></tr>
            <tr><td>Aliança Liberal</td><td>Coalición de 1930 (RS + MG + PB) que llevó a Vargas.</td></tr>
            <tr><td>ANL / AIB</td><td>Alianza Nacional Libertadora (izquierda) / Ação Integralista Brasileira (fascista).</td></tr>
            <tr><td>DIP / DASP / DOPS</td><td>Propaganda y censura / burocracia técnica / policía política.</td></tr>
            <tr><td>CLT</td><td>Consolidación de las Leyes del Trabajo (1943): el código laboral.</td></tr>
            <tr><td>PSD / PTB / UDN</td><td>Los tres partidos de 1945: PSD (élites), PTB (obreros getulistas), UDN (liberales antigetulistas).</td></tr>
          </tbody></table></div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué era el GOU?", etiqueta: "concepto",
            opciones: [
              { texto: "La logia militar nacionalista del golpe de 1943, con Perón como cerebro.", correcta: true, explicacion: "Correcto: GOU = Grupo de Oficiales Unidos." },
              { texto: "La central sindical única que fue la columna vertebral del peronismo.", correcta: false, explicacion: "Esa es la CGT, no el GOU." },
              { texto: "El organismo estatal que monopolizó el comercio exterior agrario argentino.", correcta: false, explicacion: "Ese es el IAPI, un organismo económico." },
              { texto: "La coalición opositora de partidos derrotada por Perón en 1946.", correcta: false, explicacion: "Esa fue la Unión Democrática." }
            ] }
        ]
      },

      {
        id: "s10", titulo: "10 · Transversal: trampas y frases listas",
        html: `
          <h3>Acción – reacción – efecto (selección)</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Acción</span>oct 1945 · Perón detenido en Martín García.</div>
              <div><span class="et">Reacción</span>17 de octubre: la CGT lo rescata.</div>
              <div><span class="et">Efecto</span>Nace el peronismo; Perón pasa a depender de los obreros.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>oct 1945 · Vargas: queremismo.</div>
              <div><span class="et">Reacción</span>El Ejército lo depone (29 oct).</div>
              <div><span class="et">Efecto</span>No tolera un «17 de octubre» brasileño: cae 12 días después del triunfo de Perón.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1953–54 · Vargas: Petrobras, Goulart, aumento del 100%.</div>
              <div><span class="et">Reacción</span>Manifiesto de los Coroneles; atentado a Lacerda.</div>
              <div><span class="et">Efecto</span>Ultimátum militar → suicidio: la derrota se vuelve mito.</div>
            </div>
            <div class="arte-fila">
              <div><span class="et">Acción</span>1954–55 · Perón: divorcio, fin de enseñanza religiosa, Standard Oil.</div>
              <div><span class="et">Reacción</span>Iglesia + Marina + UCR + nacionalistas convergen; Corpus Christi.</div>
              <div><span class="et">Efecto</span>Revolución Libertadora: cae cuando sus aliados se juntan con sus enemigos.</div>
            </div>
          </div>

          <h3>Trampas que cuestan bandas</h3>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> «Perón fue un dictador» sin más. Matizá: mantuvo elecciones y Congreso, pero vació las instituciones. Vargas sí fue dictador (1937–45): es una diferencia que vale un párrafo.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Explicar la crisis de 1949 como «Perón gastó todo». Usá a Rapoport: estrangulamiento externo. El «despilfarro» es la versión de la oposición; presentala como tal y contrastala.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Comparar en bloques («primero Perón, luego Vargas»). Cada párrafo tiene a los dos.</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Poner historiadores como adorno. Después de citarlo, usalo: «Esto se ve en…», «Sin embargo, Halperín matiza que…».</div>
          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Terminar con «ambos tuvieron éxitos y fracasos». Concluí con un veredicto que pese.</div>

          <h3>Frases listas (copiar casi textual)</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Ninguno de los dos creó la crisis que lo llevó al poder: la heredaron de una oligarquía agroexportadora que la crisis de 1929 había dejado sin base económica y sin legitimidad política.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Volta Redonda (1941) y Petrobras (1953) muestran la diferencia con Perón: mientras Argentina gastaba sus reservas en comprar los ferrocarriles británicos, Brasil usaba el crédito norteamericano para crear una industria de base que no existía.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Los dos cayeron cuando el mismo Ejército que los había encumbrado decidió que la movilización obrera se había vuelto una amenaza.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cómo conviene presentar la idea de que «Perón gastó todo» en 1949?", etiqueta: "trampa",
            opciones: [
              { texto: "Como la versión de la oposición, y contrastarla con el «estrangulamiento externo» de Rapoport.", correcta: true, explicacion: "Correcto: se presenta como perspectiva y se evalúa, no como un hecho neutral." },
              { texto: "Como el hecho central, neutral y plenamente objetivo que explica por sí solo toda la crisis económica.", correcta: false, explicacion: "Es una interpretación liberal, no un hecho neutral; Rapoport la rebate." },
              { texto: "Omitiéndola por completo del ensayo para no perder tiempo con interpretaciones.", correcta: false, explicacion: "Evaluar perspectivas distintas suma banda; conviene mencionarla y contrastarla." },
              { texto: "Como la prueba definitiva de que Perón gobernó como un dictador clásico.", correcta: false, explicacion: "Mezcla lo económico con lo institucional; además Perón no fue dictadura clásica." }
            ] }
        ]
      },

      {
        id: "s11", titulo: "11 · Línea de tiempo en paralelo",
        html: `
          <p>Para ver la cronología interactiva y clickeable, usá la pestaña <b>Cronología</b>. Acá quedan las cuatro fechas que «se espejan» y ordenan cualquier ensayo comparativo.</p>
          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Cuatro fechas que valen oro porque se espejan:</b>
            <ul>
              <li>26 nov 1930 (Ministerio de Trabajo de Vargas) ↔ 27 nov 1943 (Secretaría de Trabajo de Perón).</li>
              <li>1 may 1943 (CLT) ↔ 17 oct 1945 (nacimiento del peronismo).</li>
              <li>29 oct 1945 (Vargas depuesto) ↔ 24 feb 1946 (Perón elegido).</li>
              <li>24 ago 1954 (suicidio de Vargas) ↔ 16 sep 1955 (Revolución Libertadora).</li>
            </ul>
            Si citás una fecha de cada par en un ensayo comparativo, la cronología se ordena sola.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Fracasaron como gobiernos y triunfaron como legados: el peronismo ganó todas las elecciones libres que le permitieron disputar, y la CLT, Petrobras y el trabalhismo sobrevivieron medio siglo a Vargas.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué dos fechas «se espejan» sobre la oficina laboral?", etiqueta: "fecha",
            opciones: [
              { texto: "26 nov 1930 (Ministerio de Trabajo de Vargas) ↔ 27 nov 1943 (Secretaría de Trabajo de Perón).", correcta: true, explicacion: "Correcto: casi el mismo día del año, 13 años después." },
              { texto: "1 may 1943 (sanción del código laboral CLT en Brasil) ↔ 24 feb 1946 (elección de Perón en Argentina).", correcta: false, explicacion: "Ese par no es el de la oficina laboral; mezcla código laboral con elección." },
              { texto: "29 oct 1945 (Vargas depuesto por el Ejército) ↔ 16 sep 1955 (Revolución Libertadora).", correcta: false, explicacion: "Ese par es sobre las caídas, no sobre la oficina laboral." },
              { texto: "3 oct 1953 (creación de Petrobras) ↔ 9 jul 1947 (Independencia Económica argentina).", correcta: false, explicacion: "Son hitos económicos, no el espejo de la oficina de trabajo." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "¿Qué es el populismo según Knight?", dorso: "Un estilo político (no una ideología): apelación al pueblo contra la élite, líder-intérprete, movilización en crisis, programa flexible." },
    { id: "fc02", categoria: "concepto", frente: "ISI", dorso: "Industrialización por sustitución de importaciones: fabricar en el país lo que antes se importaba." },
    { id: "fc03", categoria: "concepto", frente: "Corporativismo", dorso: "Organizar la sociedad en cuerpos (sindicatos, cámaras) controlados por el Estado; modelo de la Italia de Mussolini." },
    { id: "fc04", categoria: "concepto", frente: "«Estrangulamiento externo»", dorso: "La industria liviana importa máquinas pero no exporta; los dólares los trae el agro; si el IAPI lo castiga, falta divisa y hay inflación («stop and go»)." },
    { id: "fc05", categoria: "concepto", frente: "Trabalhismo", dorso: "Laborismo de Estado brasileño: derechos laborales a cambio de lealtad y sindicatos oficiales." },
    { id: "fc06", categoria: "concepto", frente: "Justicialismo", dorso: "Doctrina de Perón: justicia social, independencia económica, soberanía política (Tercera Posición)." },
    { id: "fc07", categoria: "fecha", frente: "4 jun 1943", dorso: "Golpe del GOU en Argentina; Perón, coronel del grupo." },
    { id: "fc08", categoria: "fecha", frente: "27 nov 1943", dorso: "Perón crea la Secretaría de Trabajo y Previsión: su trampolín." },
    { id: "fc09", categoria: "fecha", frente: "17 oct 1945", dorso: "Día de la Lealtad: la CGT moviliza y rescata a Perón. Nace el peronismo." },
    { id: "fc10", categoria: "fecha", frente: "24 feb 1946", dorso: "Perón gana la elección con 52,8%." },
    { id: "fc11", categoria: "fecha", frente: "9 jul 1947", dorso: "Declaración de la Independencia Económica (deuda cancelada); también Ley 13.010 de voto femenino." },
    { id: "fc12", categoria: "fecha", frente: "1 mar 1948", dorso: "Nacionalización de los ferrocarriles británicos (~£150 M)." },
    { id: "fc13", categoria: "fecha", frente: "16 sep 1955", dorso: "Revolución Libertadora: Perón al exilio (hasta 1973)." },
    { id: "fc14", categoria: "fecha", frente: "26 nov 1930", dorso: "Vargas crea el Ministerio de Trabajo (13 años antes que Perón)." },
    { id: "fc15", categoria: "fecha", frente: "10 nov 1937", dorso: "Golpe del Estado Novo: dictadura corporativista de Vargas." },
    { id: "fc16", categoria: "fecha", frente: "1 may 1943", dorso: "CLT: código laboral brasileño, vigente hasta hoy." },
    { id: "fc17", categoria: "fecha", frente: "3 oct 1953", dorso: "Creación de Petrobras («O petróleo é nosso»)." },
    { id: "fc18", categoria: "fecha", frente: "24 ago 1954", dorso: "Suicidio de Vargas y Carta Testamento." },
    { id: "fc19", categoria: "causa-consecuencia", frente: "Causa estructural común de llegada al poder", dorso: "La crisis de 1929 hunde a la oligarquía agroexportadora y deja un vacío que el Estado (y el líder) ocupan." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué cae Perón en 1955?", dorso: "Crisis económica (1949) + ruptura con la Iglesia + un Ejército que dejó de ser suyo. Las tres juntas." },
    { id: "fc21", categoria: "causa-consecuencia", frente: "¿Por qué se suicida Vargas en 1954?", dorso: "Inflación, aumento del 100%, atentado a Lacerda y ultimátum militar: destitución segura convertida en martirio." },
    { id: "fc22", categoria: "causa-consecuencia", frente: "Consecuencia de la crisis de 1949 (Perón)", dorso: "Inflación 30–40%, racionamiento, giro pragmático (Plan de Estabilización 1952, Standard Oil 1955)." },
    { id: "fc23", categoria: "causa-consecuencia", frente: "Efecto del 17 de octubre", dorso: "Perón deja de depender del Ejército y pasa a depender del movimiento obrero." },
    { id: "fc24", categoria: "causa-consecuencia", frente: "¿Por qué el legado industrial de Vargas fue más sólido?", dorso: "Invirtió en industria pesada de base (Volta Redonda, Petrobras) con crédito de EE.UU.; Perón compró servicios existentes y gastó en consumo." },
    { id: "fc25", categoria: "historiador", frente: "Rapoport (postura)", dorso: "El modelo peronista fue coherente; la crisis de 1949 fue estructural («estrangulamiento externo»), no despilfarro." },
    { id: "fc26", categoria: "historiador", frente: "Halperín Donghi (postura)", dorso: "La conciliación de Perón derivó en polarización; los logros fueron reales e indelebles; «el pasado que no pasa»." },
    { id: "fc27", categoria: "historiador", frente: "Fausto (postura)", dorso: "1930 = colapso cafetalero sin reemplazo → Estado árbitro; Vargas pragmático; trabalhismo = pacto; suicidio = acto político." },
    { id: "fc28", categoria: "historiador", frente: "Knight (postura)", dorso: "El populismo es un estilo, no una ideología; por eso Perón y Vargas caben en la etiqueta." },
    { id: "fc29", categoria: "historiador", frente: "Debate Germani / Murmis–Portantiero", dorso: "Germani: «masas disponibles» manipulables. Murmis–Portantiero: la vieja clase obrera apoyó a Perón por elección racional." },
    { id: "fc30", categoria: "historiador", frente: "Levine («¿padre de los pobres?»)", dorso: "La legislación de Vargas alcanzó solo al obrero urbano con carteira; el campo quedó afuera hasta 1963." },
    { id: "fc31", categoria: "concepto", frente: "IAPI", dorso: "Instituto Argentino de Promoción del Intercambio (1946): el Estado compra cosechas a precio fijo y las vende al exterior." },
    { id: "fc32", categoria: "concepto", frente: "«Los cuatro Vargas»", dorso: "Gobierno Provisional (1930–34), constitucional (1934–37), Estado Novo (1937–45), segundo gobierno electo (1951–54)." },
    { id: "fc33", categoria: "causa-consecuencia", frente: "Cifra estrella de Perón", dorso: "Asalariados: de ~40% (1946) a ~50% (1950–52) del ingreso nacional." },
    { id: "fc34", categoria: "fecha", frente: "3 oct 1950", dorso: "Vargas vuelve al poder por el voto directo (48,7%)." },
    { id: "fc35", categoria: "concepto", frente: "MELCO", dorso: "Ejes para comparar: Militares, Economía, Legitimidad, Clase obrera, Oposición." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Qué organismo usó Perón como trampolín al poder?", etiqueta: "concepto",
      opciones: [
        { texto: "La Secretaría de Trabajo y Previsión, desde 1943.", correcta: true, explicacion: "Correcto: desde ahí resolvió conflictos a favor de los obreros." },
        { texto: "El Instituto IAPI, que regulaba el comercio exterior agrario.", correcta: false, explicacion: "El IAPI es económico y posterior (1946)." },
        { texto: "El Banco Central, nacionalizado en 1946.", correcta: false, explicacion: "La nacionalización del Banco Central es posterior a su ascenso." },
        { texto: "La Fundación de ayuda social de Eva Perón.", correcta: false, explicacion: "La Fundación es de 1948, ya en la presidencia." }
      ] },
    { pregunta: "La «Declaración de la Independencia Económica» (1947) implicó…", etiqueta: "fecha",
      opciones: [
        { texto: "Cancelar la deuda externa, quedando sin crédito en 1949.", correcta: true, explicacion: "Correcto: la contracara fue la falta de crédito cuando hizo falta." },
        { texto: "Firmar un préstamo grande con el Plan Marshall.", correcta: false, explicacion: "EE.UU. excluyó a Argentina del Plan Marshall." },
        { texto: "Nacionalizar los ferrocarriles por primera vez.", correcta: false, explicacion: "Los ferrocarriles se nacionalizan en 1948, no es esta declaración." },
        { texto: "Entregar el petróleo patagónico a la Standard Oil de California.", correcta: false, explicacion: "El contrato con Standard Oil es de 1955 y contradice esta declaración." }
      ] },
    { pregunta: "¿Cuál fue la base social que sostuvo a Perón?", etiqueta: "concepto",
      opciones: [
        { texto: "Obreros sindicalizados y migrantes internos, más las mujeres desde 1947.", correcta: true, explicacion: "Correcto: la CGT fue la columna vertebral del movimiento." },
        { texto: "La Sociedad Rural y los grandes terratenientes ganaderos exportadores del litoral.", correcta: false, explicacion: "Fueron sus enemigos desde el IAPI." },
        { texto: "La Marina y la jerarquía de la Iglesia desde 1946.", correcta: false, explicacion: "La Marina fue hostil y la Iglesia rompió en 1954–55." },
        { texto: "Los partidos liberales de la Unión Democrática.", correcta: false, explicacion: "La Unión Democrática fue la coalición que lo enfrentó." }
      ] },
    { pregunta: "El Estado Novo (1937–45) de Vargas se define mejor como…", etiqueta: "concepto",
      opciones: [
        { texto: "Una dictadura corporativista sin Congreso ni partidos.", correcta: true, explicacion: "Correcto: Vargas legislaba por decreto; DIP, DASP, policía política." },
        { texto: "Una democracia con elecciones y prensa libre.", correcta: false, explicacion: "No hubo elecciones ni prensa libre: fue dictadura abierta." },
        { texto: "Un gobierno parlamentario de coalición entre varios partidos.", correcta: false, explicacion: "Los partidos estaban disueltos." },
        { texto: "Una monarquía constitucional de estilo europeo.", correcta: false, explicacion: "Brasil era república; Vargas gobernaba por decreto." }
      ] },
    { pregunta: "¿Qué muestran Volta Redonda (1941) y Petrobras (1953)?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Que Vargas creó industria pesada de base con crédito externo.", correcta: true, explicacion: "Correcto: la diferencia con Perón, que compró servicios ya existentes." },
        { texto: "Que Brasil renunció a toda industrialización estatal.", correcta: false, explicacion: "Al contrario: son el sello del Estado empresario." },
        { texto: "Que Vargas dependía del consumo obrero inmediato antes que de la inversión.", correcta: false, explicacion: "Eso describe más a Perón que a Vargas." },
        { texto: "Que Brasil nacionalizó los ferrocarriles británicos.", correcta: false, explicacion: "Eso fue Perón en Argentina (1948)." }
      ] },
    { pregunta: "Según Fausto, el trabalhismo fue…", etiqueta: "historiador",
      opciones: [
        { texto: "Un pacto: derechos reales a cambio de sindicatos oficiales.", correcta: true, explicacion: "Correcto: no fue pura manipulación ni pura dádiva." },
        { texto: "Pura manipulación sin ningún beneficio para el obrero.", correcta: false, explicacion: "Fausto rechaza esa lectura: hubo derechos concretos." },
        { texto: "Un sistema de sindicatos totalmente autónomos y libres del Estado.", correcta: false, explicacion: "Los sindicatos eran oficiales y dependientes del Ministerio." },
        { texto: "Una política que incluyó al campo desde el principio.", correcta: false, explicacion: "El campo quedó fuera de la CLT hasta 1963 (Levine)." }
      ] },
    { pregunta: "¿Quién organizó realmente el 17 de octubre de 1945?", etiqueta: "trampa",
      opciones: [
        { texto: "Los sindicatos y dirigentes gremiales, no Evita.", correcta: true, explicacion: "Correcto: Evita aún no tenía poder sindical." },
        { texto: "Eva Perón, desde su cargo en el gobierno.", correcta: false, explicacion: "Evita no tuvo cargo oficial; su poder llegó después." },
        { texto: "El Ejército de Campo de Mayo, actuando a favor de Perón.", correcta: false, explicacion: "Campo de Mayo lo había forzado a renunciar." },
        { texto: "La Iglesia católica, aliada de Perón en 1945.", correcta: false, explicacion: "La Iglesia no organizó la movilización obrera." }
      ] },
    { pregunta: "La diferencia de legitimidad entre ambos es que…", etiqueta: "concepto",
      opciones: [
        { texto: "Perón se legitimó por el voto antes de gobernar y Vargas recién lo buscó en 1950.", correcta: true, explicacion: "Correcto: Perón ganó en 1946; Vargas gobernó 15 años antes del voto directo." },
        { texto: "Ninguno de los dos ganó jamás una elección directa en toda su carrera política.", correcta: false, explicacion: "Ambos ganaron elecciones directas (Perón 1946/51; Vargas 1950)." },
        { texto: "Vargas se legitimó por el voto directo antes de gobernar y Perón nunca necesitó elecciones.", correcta: false, explicacion: "Es al revés: Perón se legitimó por el voto antes de gobernar." },
        { texto: "Los dos llegaron al poder por elecciones directas realizadas el mismo año.", correcta: false, explicacion: "No coinciden en año ni en vía de llegada." }
      ] },
    { pregunta: "¿Qué papel tuvo la Iglesia en la caída de Perón?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Tras la ruptura de 1954, se volvió el paraguas común de toda la oposición.", correcta: true, explicacion: "Correcto: divorcio, fin de enseñanza religiosa y Corpus Christi la enfrentan a Perón." },
        { texto: "Fue su aliada incondicional e inquebrantable hasta el final de 1955.", correcta: false, explicacion: "Lo apoyó en 1946 pero rompió con él en 1954–55." },
        { texto: "No tuvo ninguna influencia relevante en la política argentina de esos años.", correcta: false, explicacion: "Fue decisiva en la convergencia opositora de 1955." },
        { texto: "Organizó ella misma el bombardeo de Plaza de Mayo de junio de 1955.", correcta: false, explicacion: "El bombardeo lo hizo la Marina, no la Iglesia." }
      ] },
    { pregunta: "La crisis argentina de 1949, según Rapoport, se explica por…", etiqueta: "historiador",
      opciones: [
        { texto: "El «estrangulamiento externo»: falta de dólares por castigar al agro.", correcta: true, explicacion: "Correcto: una contradicción estructural del modelo, no un despilfarro." },
        { texto: "El gasto irracional y sin control de un líder carente de todo plan económico.", correcta: false, explicacion: "Esa es la versión liberal que Rapoport rechaza." },
        { texto: "La nacionalización de Petrobras hecha por Perón.", correcta: false, explicacion: "Petrobras es brasileña y de 1953." },
        { texto: "La firma del Pacto Roca–Runciman en 1949.", correcta: false, explicacion: "El Pacto Roca–Runciman es de 1933 y es de la Década Infame." }
      ] },
    { pregunta: "¿Cuál es un buen veredicto para «éxitos y fracasos de Perón»?", etiqueta: "concepto",
      opciones: [
        { texto: "Éxito social y político; fracaso económico e institucional.", correcta: true, explicacion: "Correcto: lo primero explica el legado; lo segundo, la caída." },
        { texto: "Fue un fracaso total sin ningún logro duradero.", correcta: false, explicacion: "La redistribución y la integración fueron reales e indelebles." },
        { texto: "Fue un éxito completo en todos los planos de gobierno.", correcta: false, explicacion: "El plano económico e institucional fueron un fracaso." },
        { texto: "Tuvo éxitos y fracasos perfectamente equilibrados, sin poder decidir.", correcta: false, explicacion: "Un buen cierre da un veredicto, no empata." }
      ] },
    { pregunta: "¿Qué tienen en común las caídas de Perón y Vargas?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "El Ejército que los había encumbrado decidió bajarlos ante la movilización obrera.", correcta: true, explicacion: "Correcto: las fuerzas armadas fueron el árbitro final en ambos casos." },
        { texto: "Los derrotó una invasión militar terrestre directa lanzada abiertamente desde Estados Unidos.", correcta: false, explicacion: "No hubo invasión; fueron procesos políticos internos." },
        { texto: "Perdieron elecciones libres frente a la oposición liberal unificada.", correcta: false, explicacion: "No cayeron por las urnas sino por presión y golpe militar." },
        { texto: "Renunciaron de forma voluntaria y sin ningún tipo de presión externa.", correcta: false, explicacion: "Hubo presión militar decisiva en ambos casos." }
      ] },
    { pregunta: "El voto femenino llegó…", etiqueta: "fecha",
      opciones: [
        { texto: "A Brasil en 1932 (Vargas) y a Argentina en 1947 (Perón).", correcta: true, explicacion: "Correcto: Vargas lo adelantó en el Código Electoral de 1932." },
        { texto: "A ambos países recién después de 1955.", correcta: false, explicacion: "Fue antes: 1932 y 1947 respectivamente." },
        { texto: "A Argentina en 1932 (Perón) y luego a Brasil en 1947 (Vargas).", correcta: false, explicacion: "Es al revés: Brasil 1932, Argentina 1947." },
        { texto: "A los dos países en el mismo año de posguerra.", correcta: false, explicacion: "No coinciden: 1932 vs. 1947." }
      ] },
    { pregunta: "¿Qué pasó con la oposición bajo Perón, institucionalmente?", etiqueta: "concepto",
      opciones: [
        { texto: "Mantuvo elecciones y Congreso pero vació las instituciones (Corte, prensa, desacato).", correcta: true, explicacion: "Correcto: fue una «democracia vaciada», no una dictadura clásica." },
        { texto: "Disolvió el Congreso y gobernó íntegramente por decreto, igual que Vargas en el Estado Novo.", correcta: false, explicacion: "Eso describe el Estado Novo de Vargas, no al gobierno de Perón." },
        { texto: "No ejerció ningún tipo de control sobre la oposición ni sobre la prensa.", correcta: false, explicacion: "Hubo Ley de Desacato, La Prensa expropiada y Balbín preso." },
        { texto: "Permitió una prensa, una justicia y unos partidos totalmente libres.", correcta: false, explicacion: "Controló la prensa y purgó la Corte Suprema." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Compare y contraste la llegada al poder de dos líderes populistas.", frecuencia: "Muy alta",
        plan: "MELCO abreviado: contexto (crisis 1929), trampolín militar, oficina laboral, legitimidad (voto), ideología. Veredicto: mismo camino, distinto orden." },
      { pregunta: "Compare y contraste las políticas económicas de Perón y Vargas.", frecuencia: "Muy alta",
        plan: "Nacionalismo (sim), ISI (sim), qué compran vs. qué crean (dif), relación con EE.UU. (dif), resultado (crisis 1949 vs. Petrobras). Rapoport + Fausto." },
      { pregunta: "Evalúe los éxitos y fracasos de las políticas internas de un líder populista.", frecuencia: "Muy alta",
        plan: "Éxito social (cifras) / fracaso económico (crisis) / fracaso institucional (oposición) / legado. Veredicto: éxito social, fracaso económico-institucional." },
      { pregunta: "¿En qué medida las políticas sociales de un líder populista beneficiaron a los trabajadores?", frecuencia: "Alta",
        plan: "En gran medida (cifras) con tres límites: dependencia del líder (Halperín), exclusión del campo (Levine), pérdida de autonomía sindical (Fausto)." },
      { pregunta: "Examine el trato a la oposición por parte de un líder populista.", frecuencia: "Alta",
        plan: "Cooptar / controlar / reprimir, con ejemplos fechados; matiz democracia vaciada vs. dictadura; efecto: polarización." },
      { pregunta: "Discuta el papel de las fuerzas armadas en el ascenso y la caída de un líder populista.", frecuencia: "Media",
        plan: "Escalera: los suben (1943/1930), los sostienen (industria militar / Volta Redonda), los bajan (1955/1945–54). Veredicto: árbitro final." }
    ],
    planes: [
      { titulo: "Plan A · ¿En qué medida las políticas sociales de Perón beneficiaron a los trabajadores?",
        tesis: "En gran medida y de forma medible, pero con tres límites: dependencia del líder, coyuntura transitoria y exclusión de quien no se encuadraba.",
        pasos: [
          "Beneficio material: aguinaldo, Estatuto del Peón; salario real +50–60%; asalariados 40%→50%. Halperín: logros indelebles.",
          "Beneficio ciudadano: sindicatos (500.000→2M), voto femenino 1947, universidad gratuita, salud (Carrillo).",
          "Límite 1 (autonomía): sindicato único, Partido Laborista disuelto, Cipriano Reyes preso. Germani vs. Murmis–Portantiero.",
          "Límite 2 (sostenibilidad): 1949–52 congelamiento, inflación 30–40%. Dependía de la bonanza (Rapoport).",
          "Conclusión: «en gran medida», pero como dádiva condicionada, no como conquista."
        ] },
      { titulo: "Plan B · Examine el trato a la oposición por parte de Vargas.",
        tesis: "Un método de tres velocidades (cooptar, controlar, reprimir) cuya intensidad dependió del régimen: máxima en el Estado Novo, mínima en 1951–54.",
        pasos: [
          "Cooptar: São Paulo 1932, oligarquías vía café, tenentes interventores, PSD y PTB en 1945.",
          "Reprimir: Ley de Seguridad Nacional 1935, Prestes preso, Olga Benário, integralistas 1938. Fausto: represión selectiva.",
          "Controlar: DIP 1939, censura, Constitución 1937 sin Congreso. Levine: imagen de «padre» producto del DIP.",
          "Distensión: 1945 amnistía; 1951–54 tolera a Lacerda. Contraste con Perón (La Prensa, Balbín).",
          "Conclusión: pragmatismo también en la represión; y el método no evitó que lo derrocaran dos veces."
        ] },
      { titulo: "Plan C · Discuta el papel de las fuerzas armadas (dos líderes).",
        tesis: "Las FF.AA. fueron el árbitro final: los subieron, los sostuvieron y los bajaron cuando la movilización obrera les pareció una amenaza.",
        pasos: [
          "Ascenso: junta de 1930 y tenentes / GOU 1943 y cargos de Perón.",
          "Sostén: Góis Monteiro y Dutra / Volta Redonda / industria militar.",
          "Primer aviso: oct 1945: Perón detenido y rescatado; Vargas depuesto y no rescatado (la diferencia es el 17 de octubre).",
          "Caída: Menéndez 1951, Marina 1955 / Manifiesto de los Coroneles 1954, ultimátum y suicidio.",
          "Conclusión: Knight: el Ejército tolera la movilización mientras la controla el Estado y la reprime cuando parece autónoma."
        ] },
      { titulo: "Plan D · Examine las razones del apoyo popular a Perón.",
        tesis: "Cuatro razones: material, simbólica, organizativa y un enemigo externo; las dos primeras explican el voto, las otras dos su persistencia.",
        pasos: [
          "Material: Secretaría de Trabajo, aguinaldo, salario real, consumo. Murmis–Portantiero: elección racional.",
          "Simbólica: dignidad del «descamisado», 17 de octubre, Evita. Germani: masas disponibles (contrastar).",
          "Organizativa: CGT, sindicato único, Partido Peronista. El Estado como organizador (Halperín).",
          "Enemigo externo: Braden 1946, la oligarquía: el «nosotros vs. ellos» de Knight.",
          "Conclusión: 52,8% (1946) y 62% (1951): el apoyo creció con la redistribución y sobrevivió porque ya era identidad."
        ] },
      { titulo: "Plan E · Evalúe los éxitos y fracasos de Vargas.",
        tesis: "Fracasó como demócrata y administrador de su segundo gobierno; triunfó como constructor de Estado y como mito.",
        pasos: [
          "Éxito estatal: fin de la República Velha, DASP, centralización.",
          "Éxito social (con límite): carteira, salario mínimo, CLT 1943; pero solo urbano (Levine) y sin autonomía (Fausto).",
          "Éxito económico: Volta Redonda, Vale, Petrobras; industria casi duplicada 1933–45.",
          "Fracaso político: dictadura 1937–45; derrocado 1945; 2º gobierno con inflación y aislamiento; suicidio.",
          "Conclusión: la Carta Testamento convirtió la derrota en victoria; sus instituciones lo sobrevivieron medio siglo."
        ] },
      { titulo: "Plan F · ¿Hasta qué punto fue el populismo un movimiento democrático? (Perón y Vargas)",
        tesis: "Democratizó la sociedad y erosionó las instituciones; democrático en sus efectos sociales, autoritario en sus formas, más en Vargas que en Perón.",
        pasos: [
          "Democrático (sociedad): incorporación de obreros y mujeres (voto 1932/1947), redistribución. Knight: apelación al pueblo.",
          "Democrático (voto): Perón 1946 y 1951; Vargas 1950. Legitimidad real.",
          "Autoritario (formas): Estado Novo sin Congreso, DIP / Corte purgada, La Prensa, Balbín.",
          "Efecto: polarización (Halperín) y golpes contra los herederos (1955, 1964). Portantiero: empate hegemónico.",
          "Conclusión: «hasta cierto punto»: ampliaron el demos y estrecharon la democracia."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «Compare y contraste las políticas económicas de Perón y Vargas»",
        parrafos: [
          { texto: "Perón (1946–1955) y Vargas (1930–45 y 1951–54) gobernaron las dos economías más grandes de Sudamérica cuando el modelo agroexportador, herido por la crisis de 1929, dejaba de ser viable. Ambos respondieron con la misma receta —nacionalismo económico, ISI y un Estado que dirige e incluso produce—, pero, como advierte Knight, el populismo es un estilo y no un programa: Perón gastó una bonanza transitoria en comprar servicios existentes y redistribuir consumo, mientras Vargas invirtió capital ajeno en crear una industria de base que no existía. Tesis: fueron similares en objetivos e instrumentos, pero distintas en prioridades, financiamiento y resultados.", nota: "Intro: contexto en una frase, definición con historiador (Knight), tesis clara y anticipo del veredicto." },
          { texto: "Primera similitud (punto de partida y objetivo): los dos heredaron una economía primaria (café ~70% de las exportaciones brasileñas; carne y cereales las argentinas) y concluyeron que la dependencia externa era la raíz de la debilidad. Vargas: Código de Minas y Aguas (1934); Perón: «Independencia Económica» (1947) y art. 40 de la Constitución de 1949. Rapoport describe el «capitalismo nacional» peronista; Fausto, el Estado desarrollista brasileño ladrillo a ladrillo.", nota: "Similitud con ambos en cada frase, evidencia fechada y dos historiadores como respaldo, no como adorno." },
          { texto: "La diferencia decisiva está en qué se compró con esa capacidad estatal. Perón destinó las reservas de guerra (~1.700 M de dólares en 1946) a nacionalizar servicios ya existentes y a sostener el consumo (salario real +50–60%, asalariados 40%→50%). Vargas concentró la inversión en industria pesada: Volta Redonda (1941), financiada con un crédito del Eximbank. Mientras Argentina gastaba en comprar lo que ya tenía, Brasil creaba lo que no tenía. La causa: Perón dependía electoralmente de un movimiento obrero; Vargas, dictador, podía invertir a largo plazo.", nota: "Contraste central con la cifra estrella y la explicación causal (legitimidad electoral vs. dictadura). Esto es análisis, no descripción." },
          { texto: "En conclusión, compartieron objetivos, instrumentos y discurso, pero se diferenciaron en qué invirtieron y con qué dinero. Perón consumió una bonanza excepcional en símbolos de soberanía y redistribución insostenible; Vargas invirtió capital norteamericano en una industria de base que trascendió su muerte. Por eso el balance es asimétrico: el modelo peronista fracasó como modelo de crecimiento hacia 1949, el varguista dejó un Estado desarrollista que gobernó Brasil medio siglo.", nota: "Conclusión con veredicto asimétrico y sin resumir mecánicamente." }
        ] },
      { titulo: "Ensayo 2 · «Evalúe los éxitos y fracasos de las políticas internas de Perón»",
        parrafos: [
          { texto: "Perón gobernó con tres banderas: justicia social, independencia económica y soberanía política. Tesis: sus políticas fueron un éxito notable en lo social, un fracaso en lo económico (el modelo se agotó hacia 1949) y un fracaso institucional (el trato a la oposición produjo la polarización que su proyecto pretendía evitar). Como sostiene Halperín Donghi, los logros sociales fueron tan reales que resultaron indelebles: por eso el peronismo sobrevivió a la caída de Perón.", nota: "Intro con veredicto tripartito y el historiador que lo articula." },
          { texto: "El éxito social se mide: salario real +50–60% (1946–49); asalariados de ~40% a ~50% del ingreso; afiliación sindical de 500.000 a +2 M; Carrillo casi duplica las camas hospitalarias; universidad gratuita (1949); voto femenino (1947). «Esto demuestra que» la justicia social fue una transferencia efectiva de ingreso y ciudadanía.", nota: "Párrafo denso en evidencia; la frase «esto demuestra que…» convierte la lista en argumento." },
          { texto: "El fracaso institucional fue el más grave: juicio político a la Corte (1947), Ley de Desacato (1949), La Prensa expropiada (1951), Balbín preso (1950), torturas, culto a la personalidad. Halperín explica la lógica: la conciliación exigía que la oposición desapareciera o se sumara; como no ocurrió, la trató como enemiga de la Nación. Resultado: una sociedad partida en dos.", nota: "Fracaso institucional con evidencia fechada y el mecanismo causal (conciliación → polarización)." },
          { texto: "En conclusión, las políticas internas de Perón fueron un éxito social inédito y un fracaso económico e institucional duradero. La redistribución fue real y por eso el peronismo sigue existiendo; el modelo dependía de una coyuntura que se agotó en 1949 y el trato a la oposición fabricó la coalición que lo derribó en 1955. El éxito explica el legado; los fracasos, la caída.", nota: "Conclusión que cierra donde abrió la intro." }
        ] }
    ],
    guia: {
      tesis: "Respondé la pregunta en una frase con veredicto. Para este tema, la tesis maestra: «Llegaron por el vacío de la oligarquía en crisis, organizaron al obrero desde arriba, redistribuyeron con una bonanza transitoria y cayeron cuando el dinero se acabó y el Ejército decidió.»",
      argumentos: [
        "Usá los ejes L-S-E-A-B (llegada, social, económico, apoyo/oposición, balance) o MELCO para comparar.",
        "Cada párrafo: Punto → Evidencia (fecha/cifra) → Explicación → Lazo a la pregunta (PEEL).",
        "En «compare y contraste», los dos líderes en cada párrafo."
      ],
      evidencia: [
        "Perón: 40%→50% del ingreso, salario +50–60%, reservas 1.700 M→0, 52,8% (1946), 62% (1951).",
        "Vargas: CLT 1943, Volta Redonda 1941 (Eximbank US$20 M), Petrobras 1953, 48,7% (1950).",
        "Fechas espejo: 26 nov 1930 ↔ 27 nov 1943; 29 oct 1945 ↔ 24 feb 1946."
      ],
      historiografia: [
        "Rapoport (economía: estrangulamiento externo), Halperín Donghi (polarización), Fausto (Estado árbitro / pragmatismo), Knight (populismo = estilo).",
        "Regalo: Germani vs. Murmis–Portantiero; Levine; Portantiero (empate hegemónico).",
        "No cites de adorno: después del historiador, usalo con evidencia."
      ],
      contraargumento: "Reconocé la lectura alternativa (p. ej., «las semejanzas pesan más que las diferencias» o «juzgar a Perón por su caída es injusto») y refutala con evidencia que confirme tu tesis."
    }
  }
});
