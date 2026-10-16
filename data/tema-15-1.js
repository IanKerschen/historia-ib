/* ============================================================
   tema-15-1.js — 15.1 Harry S. Truman (1945–1953)
   Transcripción fiel de la guía Paper 3 "EEUU 1945–1980" (Tema 15).
   Solo el contenido de Truman. No se agregan historiadores ni datos nuevos.
   ============================================================ */
window.registrarTema({
  id: "15.1",
  carpeta: "p3-s15",
  titulo: "Harry S. Truman",
  subtitulo: "Fair Deal · política interna · problemas y oposición",
  periodo: "1945–1953",
  estado: "listo",
  etiquetas: ["Truman", "Fair Deal", "New Deal", "Congreso", "macartismo", "derechos civiles", "EEUU"],

  /* ===================== RESUMEN (hoja ultra-condensada) ===================== */
  resumen: {
    tesisMaestra: "Truman quiso continuar y ampliar el New Deal con el Fair Deal (1949), pero el Congreso —80.º republicano y después la coalición conservadora— le bloqueó todo lo innovador (seguro médico, derechos civiles, derogar Taft-Hartley) y le dejó pasar sólo lo incremental (salario mínimo, Seguridad Social, vivienda). Fracasó como programa pero triunfó como agenda: casi todo lo que le negaron se volvió ley con Johnson en 1964–65. Salió con ~22% de aprobación por las «3 C» (Corrupción, Comunismo, Corea) más el Congreso, y la historiografía lo revalorizó.",
    historiadoresLinea: [
      { nombre: "Willi Paul Adams", linea: "Historiador de cifras y mecanismos: el núcleo del Fair Deal cayó por tres vías distintas (la AMA contra el seguro médico, el filibuster sureño contra los derechos civiles, el voto directo del Congreso contra Taft-Hartley). Los fracasos fueron legislativos, no de omisión." },
      { nombre: "Paul Johnson", linea: "Lectura conservadora: Truman decidido y honesto, «producto genuino del sistema democrático» (p. 909), pero con entorno corrupto (Pendergast); valora más sus éxitos exteriores (Doctrina Truman, Plan Marshall) que los internos." },
      { nombre: "Arthur M. Schlesinger Jr.", linea: "Corea sin declaración de guerra e incautación de industrias son escalones tempranos de la «presidencia imperial» que culmina en Nixon; la política de EE.UU. alterna ciclos de reforma y de consolidación." },
      { nombre: "De regalo", linea: "El obituario del New York Times (1972): «lideró la conversión de la nación de la guerra a la paz manteniendo una economía estable y próspera»: caso típico de presidente revalorizado." }
    ],
    datosClave: [
      { grupo: "Truman: datos que valen oro", items: [
        "12-IV-1945 asume al morir Roosevelt (vicepresidente sólo 82 días).",
        "IX-1945 Programa de 21 puntos (el Fair Deal antes del nombre) · II-1946 Employment Act (crea el CEA).",
        "1946 ola de huelgas (3% de la fuerza laboral en enero) · fin de controles de precios → inflación ~30%.",
        "XI-1946 midterms: republicanos ganan las dos cámaras (80.º Congreso, «To err is Truman»).",
        "VI-1947 Taft-Hartley (veto anulado) · 1947 informe «To Secure These Rights» · EO 9835 programa de lealtad.",
        "VII-1948 EO 9980 y 9981: desegregación de las FF.AA. y de la administración federal.",
        "XI-1948 gana 24 M vs 21 M (Dewey), 303–189; Thurmond (Dixiecrats) 39 electores; Wallace 2,4%.",
        "5-I-1949 Fair Deal: salario 40→75 c (1949), Seg. Social +10 M (1950), Housing Act 1949 (810.000 viviendas).",
        "Bloqueado: seguro médico (AMA), derechos civiles (filibuster), derogar Taft-Hartley, educación, Plan Brannan.",
        "1950 ley McCarran (sobre su veto) · IV-1952 incautación del acero → Youngstown v. Sawyer (VI-1952).",
        "27-II-1951 22.ª Enmienda (dos mandatos) · Corea 1950–53 · sale con ~22% de aprobación."
      ]}
    ],
    comparacion: [
      { eje: "3 SÍ / 3 NO", texto: "SÍ = Salario, Seguridad Social, viviendaS (las tres con S). NO = Médico, Minorías (derechos civiles), Taft-Hartley. Con eso armás cualquier ensayo sobre el Fair Deal." },
      { eje: "Fair Deal vs New Deal", texto: "No fue un programa nuevo sino la continuación y extensión del de Roosevelt: «la legislación social más progresista desde el New Deal» (Oxford)." },
      { eje: "Programa vs agenda", texto: "Fracasó como programa (el núcleo no pasó) pero triunfó como agenda: seguro médico, derechos civiles y educación se volvieron ley en 1964–65 con Johnson." },
      { eje: "Poder presidencial", texto: "Lo amplía (orden ejecutiva, incautaciones, Corea sin declaración) y lo limita (22.ª Enmienda, Youngstown, vetos anulados): el inicio de la «presidencia imperial» de Schlesinger." }
    ],
    veredictos: [
      { titulo: "Éxitos y fracasos", texto: "Éxito parcial e incremental, fracaso en lo innovador, impacto diferido (Medicare, Civil Rights Act 1964). El examinador premia que la respuesta incluya ambos sentidos." },
      { titulo: "Impopularidad", texto: "Las «3 C» (Corrupción, Comunismo, Corea) más una cuarta C (Congreso): Corea es la causa inmediata; el bloqueo legislativo, la estructural." },
      { titulo: "Legado", texto: "El juicio del corto plazo (22% de aprobación) y el del largo plazo (revalorización) divergen: Johnson firmó Medicare en Independence, Missouri, con Truman a su lado." }
    ]
  },

  /* ===================== HISTORIADORES (los del PDF, nada nuevo) ===================== */
  historiadores: [
    {
      nombre: "Willi Paul Adams", nacionalidad: "Alemán (Universidad Libre de Berlín)",
      obra: "Los Estados Unidos de América (Historia Universal Siglo XXI)",
      postura: "Crítico social: cifras y mecanismos",
      funcion: "Explicar el mecanismo del bloqueo del Fair Deal y las cifras de los logros.",
      ideaCentral: "Mide el éxito por la iniciativa moral y el avance social concreto (leyes, cifras, derechos). Documenta que el núcleo del Fair Deal cayó por tres vías distintas: el seguro médico hundido por la American Medical Association, los derechos civiles por el filibuster sureño y la derogación de Taft-Hartley rechazada por voto directo del Congreso (pp. 348–349). Pero Truman logró salario 40→75 c, Seg. Social +10 M y la Housing Act 1949 (810.000 viviendas).",
      matiz: "Truman levantó los controles de precios «a regañadientes» en 1946 por presión del Congreso (pp. 346–347); las «revelaciones de corrupción» debilitaron a los demócratas (pp. 354–355).",
      fraseLista: "Como documenta Adams, el núcleo del Fair Deal cayó por tres vías distintas: la AMA, el filibuster y el voto directo del Congreso; los fracasos de Truman fueron de tipo legislativo, no de omisión.",
      paraPreguntas: ["Impacto del Fair Deal", "Por qué fracasó el Fair Deal", "Derechos civiles de Truman"]
    },
    {
      nombre: "Paul Johnson", nacionalidad: "Británico, periodista-historiador conservador",
      obra: "Estados Unidos: la historia (1997)",
      postura: "Conservador: carácter y prudencia",
      funcion: "El carácter de Truman y el balance hacia los éxitos exteriores.",
      ideaCentral: "Historia «de grandes hombres»: personalidad, carácter y decisiones. Mide el éxito por la estabilidad, la prudencia y la gestión eficaz del poder. Retrata a Truman como decidido y honesto, «producto genuino del sistema democrático» (administrador de condado, oficial de reserva, p. 909), pero con un entorno corrupto (maquinaria Pendergast, pp. 907–908). Valora más sus éxitos exteriores (Doctrina Truman, Plan Marshall) que los internos.",
      matiz: "No es el historiador de los detalles internos: desplaza el centro del balance hacia la política exterior y el carácter («dispuesto a tomar decisiones difíciles sin vacilar»).",
      fraseLista: "Desde una lectura conservadora, Paul Johnson destaca el carácter decidido de Truman y su condición de «producto genuino del sistema democrático», aunque desplaza el peso del balance hacia los éxitos exteriores.",
      paraPreguntas: ["Carácter y liderazgo de Truman", "Balance general", "Contraste con Adams (prudencia vs iniciativa)"]
    },
    {
      nombre: "Arthur M. Schlesinger Jr.", nacionalidad: "Estadounidense (Harvard), liberal",
      obra: "La presidencia imperial (1973) · Los ciclos de la historia americana (1986)",
      postura: "Liberal «de adentro»: presidencia imperial y ciclos",
      funcion: "Conectar Corea y las incautaciones con la expansión del poder ejecutivo.",
      ideaCentral: "La política de EE.UU. alterna fases de reforma (Truman, JFK–LBJ) y de consolidación (Eisenhower, Nixon–Ford). La «presidencia imperial» que culmina en Nixon es la acumulación de décadas de poder ejecutivo: guerra sin Congreso, secreto, retención de fondos. La Guerra de Corea sin declaración y la incautación de las acerías (1952) son escalones tempranos de ese proceso.",
      matiz: "Es historiador de un rasgo estructural: si lo citás en una línea en el ensayo de Truman (Corea e incautaciones como inicio de la presidencia imperial), mostrás visión de conjunto.",
      fraseLista: "Para Schlesinger, Corea sin declaración de guerra e incautación de industrias son escalones tempranos de la «presidencia imperial» que culmina en Nixon.",
      paraPreguntas: ["Poder presidencial de Truman", "Ciclos reforma/consolidación", "Conexión con Nixon"]
    }
  ],

  /* ===================== CRONOLOGÍA (clickeable) ===================== */
  cronologia: [
    { anio: 1945, fecha: "12-IV-1945", pais: "EEUU", titulo: "Truman asume la presidencia",
      descripcion: "Al morir Roosevelt, Truman (vicepresidente sólo 82 días) jura el cargo. «Nunca en mis sueños más locos soñé o deseé un puesto así». En IX-1945 presenta el Programa de 21 puntos: el Fair Deal antes del nombre.",
      causas: ["Muerte de FDR.", "País en guerra total: economía militarizada, 12 M de soldados, controles de precios (OPA)."],
      consecuencias: ["Continuidad con el New Deal desde el día uno.", "Dilema de la reconversión: ¿hasta dónde seguir el New Deal?"],
      historiador: "Paul Johnson: «no surgió simplemente de la nada», producto genuino del sistema democrático (p. 909)." },
    { anio: 1946, fecha: "1946", pais: "EEUU", titulo: "Huelgas, inflación y midterms",
      descripcion: "Ola de huelgas (ferroviarios, siderurgia, carbón: 3% de la fuerza laboral en enero). El Congreso levanta los controles de precios contra la voluntad de Truman: inflación ~30%. En XI los republicanos ganan las dos cámaras por primera vez en 15 años (80.º Congreso).",
      causas: ["Reconversión traumática de la economía de guerra.", "Presión del Congreso para levantar los controles («a regañadientes»)."],
      consecuencias: ["Brecha dentro del Partido Demócrata: los sindicatos se enojan.", "El 80.º Congreso: obstáculo estructural del Fair Deal."],
      historiador: "Adams: Truman levantó los controles «a regañadientes» (pp. 346–347)." },
    { anio: 1947, fecha: "VI-1947", pais: "EEUU", titulo: "Taft-Hartley · derechos civiles",
      descripcion: "Truman veta la ley Taft-Hartley; el Congreso anula el veto. La ley limita a los sindicatos (prohíbe el closed shop, permite leyes de «derecho al trabajo»). Ese año crea el Comité de Derechos Civiles e informe «To Secure These Rights»; primer presidente que habla a la NAACP.",
      causas: ["Mayoría republicana del 80.º Congreso.", "Old Guard conservadora (senador Robert Taft, Ohio)."],
      consecuencias: ["Paradoja: Truman la veta pero la usa varias veces; nunca logra derogarla.", "Pionero institucional en derechos civiles, pero nada se vuelve ley."] },
    { anio: 1948, fecha: "VII-1948", pais: "EEUU", titulo: "Órdenes ejecutivas 9980 y 9981",
      descripcion: "Desegregación de las Fuerzas Armadas (EO 9981, 26-VII) y fin de la discriminación en la administración federal (EO 9980), por presión de A. Philip Randolph.",
      causas: ["El Congreso bloquea toda ley de derechos civiles.", "Presión del líder sindical afroamericano A. Philip Randolph."],
      consecuencias: ["Cuando el Congreso bloquea, Truman gobierna por decreto.", "Le vale el voto negro en la elección de 1948."] },
    { anio: 1948, fecha: "XI-1948", pais: "EEUU", titulo: "La sorpresa electoral de 1948",
      descripcion: "Truman gana 24 M vs 21 M (Dewey), 303–189 electores, pese a dos escisiones (Thurmond, Dixiecrats, 39 electores; Wallace, Progresistas, 2,4%). Titular «Dewey derrota a Truman».",
      causas: ["Sesión especial que desafía al «Congreso que no hace nada».", "Coalición del New Deal (sindicatos, granjeros, afroamericanos, Sur)."],
      consecuencias: ["Pero más gente votó contra él que por él: «presagio de un segundo mandato difícil».", "Dixiecrats: primer aviso de la ruptura de la coalición del New Deal."] },
    { anio: 1949, fecha: "5-I-1949", pais: "EEUU", titulo: "El Fair Deal",
      descripcion: "En el Estado de la Unión: «cada segmento de nuestra población... tiene derecho a esperar de nuestro Gobierno un trato justo». Se aprueban salario 40→75 c, Seg. Social +10 M, Housing Act 1949. Se bloquean seguro médico, derechos civiles, educación y derogar Taft-Hartley.",
      causas: ["Mayoría demócrata de 1949, pero coalición conservadora (rep. + dem. sureños) intacta."],
      consecuencias: ["Éxito en lo incremental (3 SÍ), fracaso en lo innovador (3 NO).", "Ni con mayoría propia pudo: el problema era la coalición conservadora."],
      historiador: "Adams: el núcleo cayó por la AMA, el filibuster y el voto directo (pp. 348–349)." },
    { anio: 1950, fecha: "1950", pais: "EEUU", titulo: "Corea y macartismo",
      descripcion: "Guerra de Corea «de policía» sin declaración; McCarthy en Wheeling (II); ley McCarran (sobre el veto de Truman). El propio Truman alimenta el clima con el programa de lealtad (EO 9835, 1947) y luego lo sufre.",
      causas: ["Guerra Fría; caso Hiss (1948–50); clima anticomunista."],
      consecuencias: ["Los republicanos lo pintan como «blando con el comunismo».", "El anticomunismo que él impulsó se vuelve en su contra."] },
    { anio: 1952, fecha: "IV–VI-1952", pais: "EEUU", titulo: "Incautación del acero · Youngstown",
      descripcion: "Truman incauta las acerías para evitar una huelga en plena guerra de Corea; la Corte Suprema lo declara inconstitucional (Youngstown v. Sawyer, VI-1952). Sale con ~22% de aprobación; las «3 C» (Corrupción, Comunismo, Corea) marcan la campaña republicana de 1952.",
      causas: ["Conflicto laboral en el acero; guerra en curso."],
      consecuencias: ["La Corte le marca el límite del poder presidencial.", "Desgaste final: decide no presentarse en 1952."],
      historiador: "Schlesinger: escalón temprano de la «presidencia imperial»." }
  ],

  /* ===================== CONTENIDO (secciones navegables) ===================== */
  contenido: {
    secciones: [
      {
        id: "s0", titulo: "0 · Cómo se juega + vocabulario",
        html: `
          <p>Truman es un tema de <b>política interna</b>: un presidente que quiere ampliar el New Deal y choca contra un Congreso que lo bloquea. Si ves el tema como «continuidad del New Deal frenada por la coalición conservadora», cualquier pregunta se ordena sola. El PDF arma todo alrededor de una fórmula: <b>3 SÍ / 3 NO</b>.</p>

          <h3>Lo que el examinador quiere ver</h3>
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Banda</th><th>Qué pide</th><th>Qué significa en tu ensayo</th></tr></thead>
            <tbody>
              <tr><td>13–15 (el 7)</td><td>Tesis clara, conocimiento preciso (fechas, cifras, leyes con nombre), análisis (por qué, con qué efecto), perspectivas evaluadas, conclusión coherente.</td><td>Tesis en la intro; cada párrafo responde la pregunta; datos como «salario 40→75 c»; Adams y Johnson en tensión; conclusión con veredicto.</td></tr>
              <tr><td>10–12</td><td>Lo mismo, pero con algún párrafo narrativo o historiadores sólo «mencionados».</td><td>Es donde caen los buenos: la diferencia está en usar al historiador, no en citarlo.</td></tr>
              <tr><td>7–9</td><td>Conocimiento correcto pero descriptivo.</td><td>Contás la historia en orden. No pasa de acá sin argumento.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Plantilla de párrafo (usala en TODOS):</b> Afirmación (una oración que responde) → Evidencia (2–3 datos: ley + año + cifra) → Explicación (por qué eso prueba la afirmación) → Perspectiva (un historiador que apoya o discute, y qué te parece a vos) → Vuelta a la pregunta. Unas 200 palabras. Cuatro párrafos así + intro + conclusión = 7.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> <b>Regla «3 sí / 3 no» del Fair Deal.</b> SÍ = <b>S</b>alario, <b>S</b>eguridad Social, vivienda<b>S</b> (las tres con S). NO = <b>M</b>édico, <b>M</b>inorías (derechos civiles), <b>T</b>aft-Hartley. Con eso armás cualquier ensayo sobre el Fair Deal.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El Fair Deal fracasó como programa pero triunfó como agenda: casi todo lo que el Congreso le negó a Truman —seguro médico para mayores, ley de derechos civiles, ayuda federal a la educación— se convirtió en ley entre 1964 y 1965 bajo Johnson, que firmó Medicare en Independence, Missouri, con Truman a su lado.»</div>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Vocabulario:</b> <b>Congreso</b> = Cámara + Senado; sin mayoría ahí, el presidente no aprueba leyes. <b>Veto</b> = el presidente rechaza una ley; el Congreso lo anula con 2/3 en ambas cámaras. <b>Filibuster</b> = hablar sin límite en el Senado para bloquear una ley (se corta con «cloture», 2/3 hasta 1975). <b>Orden ejecutiva</b> = decreto presidencial que no pasa por el Congreso. <b>Coalición conservadora</b> = republicanos + demócratas del Sur, que desde 1937 bloquean las reformas liberales. <b>Reconversión</b> = pasar de economía de guerra a economía de paz sin que explote la inflación ni el desempleo. <b>Liberal</b> en EE.UU. = centro-izquierda, pro Estado de bienestar.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> Corea entra en el ensayo <b>sólo por sus efectos internos</b> (justifica la incautación del acero, sube el gasto militar, hunde la popularidad). Si escribís un párrafo entero de política exterior, se descuenta por falta de foco.</div>
        `,
        miniQuiz: [
          { pregunta: "La regla «3 SÍ / 3 NO» del Fair Deal resume que…", etiqueta: "truco",
            opciones: [
              { texto: "Sí: salario, Seguridad Social y vivienda; no: seguro médico, derechos civiles y Taft-Hartley.", correcta: true, explicacion: "Correcto: los tres SÍ con S, los tres NO son el núcleo innovador bloqueado." },
              { texto: "Sí: seguro médico, educación y derechos civiles; no: salario, vivienda y Seguridad Social, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Está invertido: lo que pasó fue salario, vivienda y Seg. Social." },
              { texto: "Sí: Corea, Marshall y Doctrina Truman; no: inflación, huelgas y corrupción.", correcta: false, explicacion: "Eso es política exterior y problemas, no la estructura del Fair Deal." },
              { texto: "Sí: tres leyes de 1952; no: tres vetos anulados de ese mismo año.", correcta: false, explicacion: "No corresponde a la fórmula 3 SÍ / 3 NO del PDF." }
            ] },
          { pregunta: "¿Cómo debe entrar Corea en un ensayo sobre política interna de Truman?", etiqueta: "trampa",
            opciones: [
              { texto: "Sólo por sus efectos internos: incautación del acero, gasto militar, caída de popularidad.", correcta: true, explicacion: "Correcto: el tema es política interna; Corea entra como causa interna." },
              { texto: "Como un párrafo completo sobre la estrategia militar en el paralelo 38, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Eso es política exterior y resta foco; se descuenta banda." },
              { texto: "Explicando en detalle el Plan Marshall y la Doctrina Truman.", correcta: false, explicacion: "Son política exterior; no corresponden al tema interno." },
              { texto: "No se puede mencionar en absoluto porque es un tema prohibido.", correcta: false, explicacion: "Sí se puede, pero sólo por sus efectos internos, no en extenso." }
            ] }
        ]
      },

      {
        id: "s1", titulo: "1 · Quién es y qué hereda (abril de 1945)",
        html: `
          <h3>El hombre</h3>
          <p>Senador de Missouri, ex administrador de condado y oficial de reserva; formado en la maquinaria política de Pendergast (Kansas City). Vicepresidente sólo 82 días; asume el 12-IV-1945 al morir Roosevelt.</p>

          <div class="caja clase"><span class="caja-et">DE CLASE</span> Paul Johnson: «no surgió simplemente de la nada», producto genuino del sistema democrático (p. 909). El carácter decidido es la base de su lectura favorable.</div>

          <h3>La herencia</h3>
          <p>Un país en guerra total, con la economía militarizada, 12 millones de soldados, controles de precios (OPA) y un New Deal a medio consolidar. Poder económico enorme: con 7% de la población mundial, EE.UU. tenía 42% de la renta y la mitad de la capacidad industrial (P. Johnson, p. 919).</p>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Reconversión</b> = pasar de una economía de guerra (tanques) a una de paz (heladeras y autos) sin que explote la inflación ni el desempleo. <b>GI Bill (1944)</b> = ayuda federal a los veteranos (universidad, vivienda, crédito): el programa social más grande de la época y el motor de la clase media suburbana. <b>New Deal</b> = las reformas de Roosevelt en los años 30 (Seguridad Social 1935, salario mínimo 1938, sindicatos): la vara con la que se mide a todos los que vienen después.</div>

          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «El dilema central de Truman fue la decisión de la reconversión: hasta dónde seguir el New Deal. Su respuesta —continuarlo y ampliarlo— define todo su mandato.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Cuánto tiempo fue Truman vicepresidente antes de asumir?", etiqueta: "fecha",
            opciones: [
              { texto: "Sólo 82 días; asumió al morir Roosevelt el 12-IV-1945.", correcta: true, explicacion: "Correcto: por eso llega sin preparación («nunca... soñé un puesto así»)." },
              { texto: "Dos mandatos completos junto a Roosevelt, desde 1933.", correcta: false, explicacion: "Fue vicepresidente muy poco tiempo, no dos mandatos." },
              { texto: "Cuatro años, acompañando a Roosevelt en toda la guerra.", correcta: false, explicacion: "No: fueron sólo 82 días antes de la muerte de FDR." },
              { texto: "No fue vicepresidente: llegó directamente por elección en 1945.", correcta: false, explicacion: "Sí fue vicepresidente y asumió por la muerte de Roosevelt." }
            ] }
        ]
      },

      {
        id: "s2", titulo: "2 · El primer mandato (1945–1948)",
        html: `
          <p>De «Errar es Truman» a la sorpresa de 1948. La escalera del primer mandato muestra cómo un presidente debilitado convierte el bloqueo en campaña.</p>

          <ol class="escalera">
            <li><b>IX-1945 · Programa de 21 puntos:</b> pleno empleo, ampliar FEPC, subir salario mínimo, ampliar Seg. Social, seguro médico nacional, vivienda. Es el Fair Deal antes del nombre.</li>
            <li><b>II-1946 · Employment Act:</b> único logro; compromete al gobierno a promover el empleo y crea el Consejo de Asesores Económicos (CEA). «Sin mecanismo de aplicación claro» (Oxford): aprobado pero diluido.</li>
            <li><b>1946 · Huelgas:</b> ferroviarios, siderurgia, carbón; 3% de la fuerza laboral en huelga en enero. Truman amenaza con reclutar a los ferroviarios. Abre una brecha con los sindicatos, su base.</li>
            <li><b>mediados 1946 · Fin de los controles de precios:</b> el Congreso los levanta contra la voluntad de Truman. Inflación récord (~30% en el año). Él no quería: culpa al Congreso.</li>
            <li><b>XI-1946 · Midterms:</b> los republicanos ganan las dos cámaras por primera vez en 15 años («Had enough?», «To err is Truman»). Nace el 80.º Congreso.</li>
            <li><b>VI-1947 · Taft-Hartley:</b> Truman veta; el Congreso anula el veto. Limita a los sindicatos. Paradoja: la veta pero la usa varias veces.</li>
            <li><b>1947 · Derechos civiles:</b> crea el Comité de Derechos Civiles; informe «To Secure These Rights». Primer presidente que habla a la NAACP. Nada se vuelve ley: el Sur lo bloquea.</li>
            <li><b>VII-1948 · EO 9980 y 9981:</b> desegregación de las FF.AA. y fin de la discriminación en la administración federal. Cuando el Congreso bloquea, gobierna por decreto.</li>
            <li><b>VII-1948 · Sesión especial:</b> convoca al «Congreso que no hace nada» y lo desafía; no aprueba su programa. Convierte su debilidad en campaña.</li>
            <li><b>XI-1948 · Elección:</b> gana 24 M vs 21 M (Dewey), 303–189; con la coalición del New Deal pese a dos escisiones. Pero más gente votó contra él que por él.</li>
          </ol>

          <div class="caja kiss"><span class="caja-et">KISS</span> <b>Dixiecrats</b> = demócratas sureños segregacionistas (Strom Thurmond) que se van del partido en 1948 por los derechos civiles: primer aviso de la ruptura de la coalición del New Deal, que se consuma en 1964–68. <b>Henry Wallace</b> = ex vicepresidente de FDR, se va por la izquierda (antiguerra fría).</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> El Employment Act de 1946 es un ejemplo de «aprobado pero diluido»: creó el CEA pero «sin mecanismo de aplicación claro». No lo cuentes como un gran triunfo del Fair Deal.</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué nació de las midterms de XI-1946?", etiqueta: "fecha",
            opciones: [
              { texto: "El 80.º Congreso republicano, obstáculo estructural del Fair Deal.", correcta: true, explicacion: "Correcto: los republicanos ganan las dos cámaras por primera vez en 15 años." },
              { texto: "La coalición del New Deal que Truman usó para ganar en 1948.", correcta: false, explicacion: "Esa coalición es su base electoral, no lo que surge de 1946." },
              { texto: "El Comité de Derechos Civiles y el informe To Secure These Rights.", correcta: false, explicacion: "Ese comité es iniciativa de Truman (1946–47), no fruto de las midterms." },
              { texto: "La 22.ª Enmienda que limitó la presidencia a dos mandatos.", correcta: false, explicacion: "La 22.ª Enmienda es de 1951, no de las midterms de 1946." }
            ] },
          { pregunta: "¿Cómo usó Truman las EO 9980 y 9981 de 1948?", etiqueta: "concepto",
            opciones: [
              { texto: "Para gobernar por decreto en derechos civiles cuando el Congreso lo bloqueaba.", correcta: true, explicacion: "Correcto: desegregó las FF.AA. y la administración federal, y ganó el voto negro." },
              { texto: "Para aprobar en el Congreso una ley general de derechos civiles.", correcta: false, explicacion: "No pasó por el Congreso: fueron órdenes ejecutivas precisamente porque estaba bloqueado." },
              { texto: "Para levantar los controles de precios y frenar la inflación de 1946, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Nada que ver: esas órdenes son de derechos civiles." },
              { texto: "Para incautar las acerías durante la guerra de Corea.", correcta: false, explicacion: "La incautación del acero es de 1952 y es otra cosa." }
            ] }
        ]
      },

      {
        id: "s3", titulo: "3 · El Fair Deal: qué pidió, qué consiguió, qué le bloquearon",
        html: `
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Cada segmento de nuestra población y cada individuo tiene derecho a esperar de nuestro Gobierno un trato justo» (Truman, Estado de la Unión, 5-I-1949). El Fair Deal fue «la legislación social más progresista desde el New Deal» (Oxford): no un programa nuevo, sino la continuación y extensión del de Roosevelt.</div>

          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Propuesta</th><th>Resultado</th><th>Qué pasó exactamente</th></tr></thead>
            <tbody>
              <tr><td>Salario mínimo</td><td>✔ 1949</td><td>De 40 a 75 centavos/hora (ley de octubre de 1949). Éxito real: casi duplica, pero es mejora de lo existente.</td></tr>
              <tr><td>Seguridad Social</td><td>✔ 1950</td><td>Enmiendas de 1950: cobertura a 10 millones más y subida de beneficios. El logro más duradero.</td></tr>
              <tr><td>Vivienda</td><td>✔ 1949</td><td>Housing Act 1949: 810.000 viviendas en 6 años + renovación urbana. Éxito «sobre el papel»: la construcción efectiva fue menor; la renovación destruyó barrios. Ideal para matizar.</td></tr>
              <tr><td>Seguro médico nacional</td><td>✘</td><td>Campaña de la American Medical Association («medicina socializada») + oposición republicana (Adams pp. 348–349). Fracaso emblemático, pero la idea sobrevive: Medicare (1965) es su «hijo».</td></tr>
              <tr><td>Derechos civiles (FEPC permanente, anti-linchamiento, anti-poll tax)</td><td>✘</td><td>Hundidos por el filibuster de los senadores sureños (Adams pp. 348–349). Fracaso legislativo, éxito simbólico/ejecutivo (EO 9981).</td></tr>
              <tr><td>Derogar Taft-Hartley</td><td>✘</td><td>Rechazada explícitamente pese a la mayoría demócrata de 1949. Muestra que ni con mayoría propia pudo: el problema era la coalición conservadora.</td></tr>
              <tr><td>Ayuda federal a la educación</td><td>✘</td><td>Choque por escuelas religiosas y por segregación. Mismo bloqueo que sufrirá Kennedy en 1961.</td></tr>
              <tr><td>Plan Brannan (subsidios agrícolas)</td><td>✘</td><td>Rechazado. Lo mencionás en una línea; no te detengas.</td></tr>
            </tbody>
          </table></div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> Adams te da el mecanismo del fracaso (AMA, filibuster, voto directo); P. Johnson te da el carácter («dispuesto a tomar decisiones difíciles sin vacilar»). El examinador de Nov 2024 dice que podés concluir en cualquiera de los dos sentidos; lo que premia es que la respuesta incluya ambos.</div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Tu conclusión del Fair Deal: éxito <b>parcial e incremental</b>, fracaso en lo <b>innovador</b>, impacto <b>diferido</b> (Medicare, Civil Rights Act 1964).</div>
        `,
        miniQuiz: [
          { pregunta: "¿Qué pasó con el seguro médico nacional del Fair Deal?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "Lo hundió la American Medical Association con la campaña de «medicina socializada»; la idea revivió como Medicare (1965).", correcta: true, explicacion: "Correcto: fracaso emblemático de corto plazo, éxito diferido con Johnson." },
              { texto: "Se aprobó en 1950 junto con la ampliación de la Seguridad Social, algo que el propio PDF descarta de plano, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "No: fue bloqueado; lo que se amplió fue la Seg. Social a 10 M más." },
              { texto: "Truman lo impuso por orden ejecutiva, como con las FF.AA.", correcta: false, explicacion: "No pudo: el seguro médico requería al Congreso y quedó bloqueado." },
              { texto: "Lo vetó el propio Truman por razones de presupuesto.", correcta: false, explicacion: "Truman lo quería; lo bloqueó la AMA y la oposición, no su veto." }
            ] },
          { pregunta: "Que no se derogara Taft-Hartley pese a la mayoría demócrata de 1949 demuestra que…", etiqueta: "concepto",
            opciones: [
              { texto: "El obstáculo real era la coalición conservadora, no sólo los republicanos.", correcta: true, explicacion: "Correcto: ni con mayoría propia pudo, por los demócratas sureños aliados." },
              { texto: "Truman en realidad apoyaba la ley Taft-Hartley en secreto, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "La vetó y quiso derogarla; la usó por obligación, no por apoyo." },
              { texto: "Los sindicatos se oponían a derogar Taft-Hartley.", correcta: false, explicacion: "Los sindicatos querían derogarla; fue el Congreso quien se negó." },
              { texto: "La derogación requería una enmienda constitucional de 2/3.", correcta: false, explicacion: "No requería enmienda; fue rechazo directo del Congreso." }
            ] }
        ]
      },

      {
        id: "s4", titulo: "4 · Problemas y oposición: por qué termina con 22%",
        html: `
          <div class="tabla-wrap"><table class="tabla-guia">
            <thead><tr><th>Problema</th><th>Datos</th><th>Efecto político</th></tr></thead>
            <tbody>
              <tr><td>Congreso</td><td>80.º Congreso republicano (1947–49) y luego coalición conservadora que mantiene el bloqueo. Anulan su veto de Taft-Hartley y el de la ley McCarran (1950).</td><td>El Fair Deal queda en «avances parciales». Truman gobierna por orden ejecutiva y por confrontación.</td></tr>
              <tr><td>Sindicatos</td><td>1946 huelgas; 1950 el ejército toma los ferrocarriles; IV-1952 incautación de las acerías → Youngstown v. Sawyer (VI-1952) la declara inconstitucional.</td><td>Reputación de «ineficaz» para los conflictos laborales. La Corte le marca el límite del poder presidencial.</td></tr>
              <tr><td>Inflación y escasez</td><td>~30% en 1946; carne, autos y viviendas escasos.</td><td>«Precios altos y escasez enfurecieron a consumidores y votantes, que culparon al presidente» (Oxford).</td></tr>
              <tr><td>Macartismo</td><td>Programa federal de lealtad (EO 9835, 1947); caso Hiss; McCarthy (II-1950); ley McCarran (1950); Rosenberg.</td><td>Los republicanos lo pintan como «blando con el comunismo». Fractura la confianza pública.</td></tr>
              <tr><td>Corea (1950–53)</td><td>Guerra «de policía» sin declaración; estancamiento en el paralelo 38; destitución de MacArthur (IV-1951), muy impopular.</td><td>Justifica la incautación del acero, sube el gasto militar, hunde la popularidad.</td></tr>
              <tr><td>Corrupción</td><td>Escándalos en la RFC y en la oficina de impuestos (1951); «abrigos de visón» (Adams pp. 354–355; P. Johnson pp. 907–908).</td><td>Suma al desgaste: las «3 C» de la campaña republicana de 1952.</td></tr>
              <tr><td>Propio partido</td><td>Dixiecrats (1948), Wallace (1948), sindicatos enojados (1946), sureños bloqueando en el Senado.</td><td>Truman gana en 1948 pero nunca tiene un partido unido detrás del Fair Deal.</td></tr>
            </tbody>
          </table></div>

          <div class="caja truco"><span class="caja-et">TRUCO</span> Las <b>«3 C» de 1952: Corrupción, Comunismo, Corea.</b> Es el eslogan republicano y tu resumen de «problemas y oposición». Agregale una cuarta C: <b>Congreso</b>. Jerarquizá: Corea es la causa inmediata; el bloqueo legislativo, la estructural.</div>

          <div class="caja trampa"><span class="caja-et">TRAMPA</span> No digas que Truman «creó el macartismo» ni que «no hizo nada» contra los comunistas: su programa de lealtad (1947) revisó a millones de empleados federales. La ironía —que podés explotar— es que el anticomunismo que él mismo impulsó se volvió en su contra.</div>

          <div class="caja historiador"><span class="caja-et">HISTORIADOR</span> El poder presidencial de Truman conecta con Schlesinger: Corea sin declaración de guerra e incautaciones de industrias son escalones tempranos de la «presidencia imperial» que culmina en Nixon. Dicho en una línea, mostrás visión de conjunto.</div>
        `,
        miniQuiz: [
          { pregunta: "Las «3 C» de la campaña republicana de 1952 fueron…", etiqueta: "truco",
            opciones: [
              { texto: "Corrupción, Comunismo y Corea (más una cuarta C: Congreso).", correcta: true, explicacion: "Correcto: resumen de los problemas que hundieron a Truman al 22%." },
              { texto: "Constitución, Corte Suprema y Controles de precios, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "No son las 3 C del PDF." },
              { texto: "Congreso, Carrera espacial y Consumo masivo.", correcta: false, explicacion: "La carrera espacial y el consumo son de los años de Eisenhower." },
              { texto: "Crédito, Comercio y Crecimiento del PBI.", correcta: false, explicacion: "No corresponde al esquema de «problemas y oposición»." }
            ] },
          { pregunta: "¿Qué le marcó el caso Youngstown v. Sawyer (1952) a Truman?", etiqueta: "causa-consecuencia",
            opciones: [
              { texto: "El límite del poder presidencial: la Corte declaró inconstitucional la incautación del acero.", correcta: true, explicacion: "Correcto: la Corte frena la incautación hecha en plena guerra de Corea." },
              { texto: "La obligación de levantar los controles de precios en 1946, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Los controles son de 1946 y fue el Congreso, no la Corte." },
              { texto: "La validación de la desegregación de las Fuerzas Armadas.", correcta: false, explicacion: "Eso fue la EO 9981, no Youngstown." },
              { texto: "El derecho a un tercer mandato presidencial.", correcta: false, explicacion: "La 22.ª Enmienda (1951) limitó los mandatos; Youngstown es sobre la incautación." }
            ] }
        ]
      },

      {
        id: "s5", titulo: "5 · Poder presidencial, personalidades y legado",
        html: `
          <h3>El poder presidencial: lo amplía y lo limita</h3>
          <div class="arte">
            <div class="arte-fila">
              <div><span class="et">Lo amplía</span>Gobierna por orden ejecutiva cuando el Congreso bloquea (EO 9835, 9980, 9981). Nombra a los presidentes de las «Big 6» agencias reguladoras (1950). Incauta ferrocarriles (1950) y acerías (1952). Corea sin declaración del Congreso.</div>
              <div><span class="et">Lo limita</span>22.ª Enmienda (27-II-1951): máximo dos mandatos. Youngstown v. Sawyer (1952): la Corte le prohíbe la incautación del acero. Vetos anulados (Taft-Hartley 1947, McCarran 1950).</div>
              <div><span class="et">Veredicto</span>Inicio de la «presidencia imperial» de Schlesinger, pero con frenos constitucionales que la de Nixon ya no respetará.</div>
            </div>
          </div>

          <h3>Personalidades y agrupaciones que tenés que poder nombrar</h3>
          <div class="tabla-wrap"><table class="tabla-guia"><tbody>
            <tr><td>Robert A. Taft (sen. rep., Ohio)</td><td>«Mr. Republican», jefe de la Old Guard; autor de Taft-Hartley; símbolo del Congreso que bloquea. Pierde la nominación de 1952 frente a Eisenhower.</td></tr>
            <tr><td>Strom Thurmond</td><td>Gobernador de Carolina del Sur, candidato Dixiecrat 1948 (39 electores). Luego, en 1964, se hace republicano: encarna el cambio de partido del Sur.</td></tr>
            <tr><td>Henry Wallace</td><td>Progresistas 1948; 2,4%; ala izquierda anti-Guerra Fría.</td></tr>
            <tr><td>A. Philip Randolph</td><td>Líder sindical afroamericano; presiona por la desegregación militar → EO 9981.</td></tr>
            <tr><td>Thurgood Marshall / NAACP</td><td>Abogado de la NAACP; Marshall llega a la Corte Suprema con Johnson (1967).</td></tr>
            <tr><td>American Medical Association</td><td>Grupo de presión que hunde el seguro médico nacional.</td></tr>
            <tr><td>Joseph McCarthy · Alger Hiss · Rosenberg</td><td>El «Terror Rojo» 1950–54.</td></tr>
            <tr><td>Thomas Dewey / Earl Warren</td><td>Fórmula republicana 1948; Dewey «distante y elitista» (Oxford). Warren será el presidente de la Corte de Brown.</td></tr>
          </tbody></table></div>

          <h3>Legado: cómo cerrar cualquier ensayo sobre Truman</h3>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Truman dejó el cargo con uno de los índices de aprobación más bajos de la historia (~22–25% en 1952), pero el juicio del corto plazo y el del largo plazo divergen: es el caso típico de un presidente revalorizado por la historiografía.»</div>
          <div class="caja frase"><span class="caja-et">FRASE LISTA</span> «Como observa Adams, los fracasos de Truman fueron de tipo legislativo —propuestas no aprobadas— y no de omisión: presionó personalmente al Congreso y, cuando este no respondió, usó la orden ejecutiva. Paul Johnson coincide en el carácter decidido, aunque desplaza el centro del balance hacia los éxitos exteriores.»</div>
        `,
        miniQuiz: [
          { pregunta: "¿Con qué historiador conecta el poder presidencial de Truman?", etiqueta: "historiador",
            opciones: [
              { texto: "Con Schlesinger: Corea e incautaciones son escalones de la «presidencia imperial».", correcta: true, explicacion: "Correcto: la acumulación de poder ejecutivo que culmina en Nixon." },
              { texto: "Con Adams, que ve a Truman capturado por intereses corporativos, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Esa crítica de «captura» Adams la aplica a Eisenhower, no a Truman." },
              { texto: "Con Dallek, que lo llama «gigante con fallas».", correcta: false, explicacion: "«Gigante con fallas» es la tesis de Dallek sobre Johnson, no sobre Truman." },
              { texto: "Con Paul Johnson, que inventó el concepto de «hidden hand».", correcta: false, explicacion: "El «hidden hand» es de Eisenhower (Greenstein); Johnson sólo lo adopta." }
            ] },
          { pregunta: "Según Adams, los fracasos de Truman fueron…", etiqueta: "historiador",
            opciones: [
              { texto: "De tipo legislativo (propuestas no aprobadas), no de omisión.", correcta: true, explicacion: "Correcto: presionó y, cuando el Congreso no respondió, usó la orden ejecutiva." },
              { texto: "De omisión deliberada, por no querer actuar en lo social, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "Esa crítica de «omisión» Adams la reserva para Eisenhower en lo racial." },
              { texto: "Producto exclusivo de su propia corrupción personal.", correcta: false, explicacion: "La corrupción era del entorno; los fracasos del Fair Deal fueron legislativos." },
              { texto: "Causados por su falta total de carácter y de decisión.", correcta: false, explicacion: "P. Johnson y Adams coinciden en su carácter decidido." }
            ] }
        ]
      }
    ]
  },

  /* ===================== FLASHCARDS (Leitner) ===================== */
  flashcards: [
    { id: "fc01", categoria: "concepto", frente: "Fair Deal", dorso: "Programa de Truman (5-I-1949): continuar y extender el New Deal. «La legislación social más progresista desde el New Deal» (Oxford)." },
    { id: "fc02", categoria: "concepto", frente: "Regla «3 SÍ / 3 NO»", dorso: "SÍ = Salario, Seguridad Social, viviendaS. NO = Médico, Minorías (derechos civiles), Taft-Hartley." },
    { id: "fc03", categoria: "concepto", frente: "Coalición conservadora", dorso: "Republicanos + demócratas del Sur que desde 1937 bloquean las reformas liberales. El verdadero obstáculo del Fair Deal." },
    { id: "fc04", categoria: "concepto", frente: "Reconversión", dorso: "Pasar de economía de guerra a economía de paz sin que explote inflación ni desempleo. El dilema central de 1945." },
    { id: "fc05", categoria: "concepto", frente: "Orden ejecutiva", dorso: "Decreto presidencial que no pasa por el Congreso. Truman la usa para derechos civiles (EO 9981) cuando el Congreso bloquea." },
    { id: "fc06", categoria: "concepto", frente: "Filibuster", dorso: "Hablar sin límite en el Senado para bloquear una ley. Hundió los derechos civiles del Fair Deal (se corta con cloture, 2/3)." },
    { id: "fc07", categoria: "fecha", frente: "12-IV-1945", dorso: "Truman asume al morir Roosevelt (vicepresidente sólo 82 días)." },
    { id: "fc08", categoria: "fecha", frente: "XI-1946", dorso: "Midterms: republicanos ganan las dos cámaras (80.º Congreso, «To err is Truman»)." },
    { id: "fc09", categoria: "fecha", frente: "VI-1947", dorso: "Taft-Hartley: Truman veta, el Congreso anula el veto; limita a los sindicatos." },
    { id: "fc10", categoria: "fecha", frente: "VII-1948", dorso: "EO 9981: desegregación de las Fuerzas Armadas (presión de A. Philip Randolph)." },
    { id: "fc11", categoria: "fecha", frente: "XI-1948", dorso: "Truman gana por sorpresa 24 M vs 21 M (Dewey), 303–189 electores." },
    { id: "fc12", categoria: "fecha", frente: "5-I-1949", dorso: "Truman anuncia el Fair Deal en el Estado de la Unión." },
    { id: "fc13", categoria: "fecha", frente: "1949–1950", dorso: "Logros del Fair Deal: salario 40→75 c (1949), Seg. Social +10 M (1950), Housing Act 1949 (810.000 viviendas)." },
    { id: "fc14", categoria: "fecha", frente: "IV–VI-1952", dorso: "Incautación de las acerías; la Corte la anula en Youngstown v. Sawyer." },
    { id: "fc15", categoria: "fecha", frente: "27-II-1951", dorso: "22.ª Enmienda: máximo dos mandatos presidenciales." },
    { id: "fc16", categoria: "causa-consecuencia", frente: "¿Por qué se levantaron los controles de precios en 1946?", dorso: "El Congreso los levantó contra la voluntad de Truman («a regañadientes», Adams): inflación ~30%." },
    { id: "fc17", categoria: "causa-consecuencia", frente: "¿Por qué fracasó el seguro médico nacional?", dorso: "Campaña de la American Medical Association («medicina socializada») + oposición republicana. Revive como Medicare (1965)." },
    { id: "fc18", categoria: "causa-consecuencia", frente: "¿Por qué Truman sale con ~22% de aprobación?", dorso: "Las «3 C» (Corrupción, Comunismo, Corea) más el Congreso (huelgas, inflación, bloqueo)." },
    { id: "fc19", categoria: "causa-consecuencia", frente: "«Fracasó como programa pero triunfó como agenda»", dorso: "El núcleo del Fair Deal (médico, civiles, educación) se volvió ley en 1964–65 bajo Johnson." },
    { id: "fc20", categoria: "causa-consecuencia", frente: "¿Por qué el filibuster importa en el Fair Deal?", dorso: "Los senadores sureños hundieron con él los derechos civiles; mecanismo clave del bloqueo (Adams)." },
    { id: "fc21", categoria: "historiador", frente: "Adams (postura sobre Truman)", dorso: "El núcleo del Fair Deal cayó por tres vías: la AMA, el filibuster y el voto directo. Fracasos legislativos, no de omisión." },
    { id: "fc22", categoria: "historiador", frente: "Paul Johnson (postura sobre Truman)", dorso: "Decidido y honesto, «producto genuino del sistema democrático» (p. 909), con entorno corrupto; valora más sus éxitos exteriores." },
    { id: "fc23", categoria: "historiador", frente: "Schlesinger (postura sobre Truman)", dorso: "Corea sin declaración e incautaciones son escalones tempranos de la «presidencia imperial» que culmina en Nixon." },
    { id: "fc24", categoria: "concepto", frente: "Dixiecrats", dorso: "Demócratas sureños segregacionistas (Thurmond) que rompen en 1948: primer aviso de la ruptura de la coalición del New Deal." },
    { id: "fc25", categoria: "concepto", frente: "«To Secure These Rights» (1947)", dorso: "Informe del Comité de Derechos Civiles de Truman: pedía fin de la segregación en educación, empleo y voto. No se vuelve ley." },
    { id: "fc26", categoria: "concepto", frente: "Robert A. Taft", dorso: "«Mr. Republican», jefe de la Old Guard; autor de Taft-Hartley; símbolo del Congreso que bloquea a Truman." },
    { id: "fc27", categoria: "concepto", frente: "Employment Act (1946)", dorso: "Crea el Consejo de Asesores Económicos (CEA), pero «sin mecanismo de aplicación claro»: aprobado pero diluido." },
    { id: "fc28", categoria: "causa-consecuencia", frente: "Ironía del macartismo y Truman", dorso: "El programa de lealtad (EO 9835, 1947) que él impulsó alimentó un anticomunismo que luego se volvió en su contra." }
  ],

  /* ===================== QUIZ (global del tema) ===================== */
  quiz: [
    { pregunta: "¿Qué fue el Fair Deal?", etiqueta: "concepto",
      opciones: [
        { texto: "El programa de Truman (1949) para continuar y extender el New Deal.", correcta: true, explicacion: "Correcto: no era nuevo, sino la continuación del de Roosevelt." },
        { texto: "El plan de ayuda económica de EE.UU. a Europa de posguerra, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "Ese es el Plan Marshall, política exterior." },
        { texto: "La ley que limitó el poder de los sindicatos en 1947.", correcta: false, explicacion: "Esa es la Taft-Hartley, que Truman vetó." },
        { texto: "El programa espacial lanzado por Truman en los años 50.", correcta: false, explicacion: "El impulso espacial llega con Eisenhower y Kennedy." }
      ] },
    { pregunta: "¿Cuáles medidas del Fair Deal sí se aprobaron?", etiqueta: "concepto",
      opciones: [
        { texto: "Salario mínimo, Seguridad Social y vivienda (los «3 SÍ»).", correcta: true, explicacion: "Correcto: salario 40→75 c, Seg. Social +10 M y Housing Act 1949." },
        { texto: "El seguro médico nacional y la ley federal de derechos civiles.", correcta: false, explicacion: "Esos son los «NO»: quedaron bloqueados." },
        { texto: "La derogación de Taft-Hartley y la ayuda federal a la educación.", correcta: false, explicacion: "Ambas fueron rechazadas por el Congreso." },
        { texto: "El Plan Brannan de subsidios agrícolas, aprobado en 1949.", correcta: false, explicacion: "El Plan Brannan fue rechazado." }
      ] },
    { pregunta: "¿Qué nació de las elecciones de medio término de 1946?", etiqueta: "fecha",
      opciones: [
        { texto: "El 80.º Congreso republicano, obstáculo estructural del Fair Deal.", correcta: true, explicacion: "Correcto: los republicanos ganan las dos cámaras por primera vez en 15 años." },
        { texto: "La coalición electoral con la que ganó en 1948.", correcta: false, explicacion: "Esa coalición del New Deal es su base, no lo que surge en 1946." },
        { texto: "La ampliación de la Seguridad Social a 10 millones más, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "Esa ampliación es de 1950, parte del Fair Deal." },
        { texto: "El informe To Secure These Rights sobre segregación.", correcta: false, explicacion: "Ese informe es iniciativa del Comité de Derechos Civiles (1947)." }
      ] },
    { pregunta: "¿Cómo usó Truman las órdenes ejecutivas en derechos civiles?", etiqueta: "concepto",
      opciones: [
        { texto: "Para desegregar las FF.AA. (EO 9981) cuando el Congreso lo bloqueaba.", correcta: true, explicacion: "Correcto: gobernar por decreto le valió el voto negro de 1948." },
        { texto: "Para aprobar una ley general de derechos civiles en el Congreso, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "No pasó por el Congreso: fue justamente por decreto." },
        { texto: "Para incautar las acerías durante la guerra de Corea.", correcta: false, explicacion: "La incautación es de 1952, otra cosa distinta." },
        { texto: "Para crear la Comisión de Derechos Civiles en 1957.", correcta: false, explicacion: "Esa Comisión es del Civil Rights Act de 1957, con Eisenhower." }
      ] },
    { pregunta: "La inflación de ~30% en 1946 se explica porque…", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "El Congreso levantó los controles de precios contra la voluntad de Truman.", correcta: true, explicacion: "Correcto: Truman los levantó «a regañadientes» (Adams)." },
        { texto: "Truman subió deliberadamente los precios para pagar Corea.", correcta: false, explicacion: "No: Corea es posterior (1950) y él no quería levantar controles." },
        { texto: "Las huelgas de 1946 fueron provocadas por el presidente.", correcta: false, explicacion: "Las huelgas eran de los sindicatos; Truman las enfrentó." },
        { texto: "La ampliación de la Seguridad Social disparó el gasto público, lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "La ampliación de Seg. Social es de 1950 y no causó esa inflación." }
      ] },
    { pregunta: "Según Adams, el núcleo del Fair Deal cayó por…", etiqueta: "historiador",
      opciones: [
        { texto: "Tres vías: la AMA, el filibuster sureño y el voto directo del Congreso.", correcta: true, explicacion: "Correcto: es su «mecanismo del bloqueo» documentado (pp. 348–349)." },
        { texto: "La falta total de iniciativa y de carácter de Truman, cosa que el esquema de corrección no admite.", correcta: false, explicacion: "Adams ve fracasos legislativos, no de omisión; Truman sí presionó." },
        { texto: "La oposición de los propios sindicatos al Fair Deal.", correcta: false, explicacion: "Los sindicatos eran su base; el bloqueo vino del Congreso." },
        { texto: "El veto de Eisenhower a las leyes sociales de Truman.", correcta: false, explicacion: "Eisenhower aún no era presidente; el bloqueo fue del Congreso." }
      ] },
    { pregunta: "Las «3 C» de la campaña republicana de 1952 fueron…", etiqueta: "concepto",
      opciones: [
        { texto: "Corrupción, Comunismo y Corea.", correcta: true, explicacion: "Correcto: resumen de los problemas de Truman (más una cuarta C, Congreso)." },
        { texto: "Constitución, Corte Suprema y Controles de precios.", correcta: false, explicacion: "No son las 3 C del eslogan del PDF." },
        { texto: "Consumo, Carrera espacial y Crecimiento económico.", correcta: false, explicacion: "Esos temas corresponden a los años de Eisenhower." },
        { texto: "Café, Crédito y Comercio exterior con Europa.", correcta: false, explicacion: "No tiene relación con el eslogan de 1952." }
      ] },
    { pregunta: "¿Qué le prohibió a Truman la Corte en Youngstown v. Sawyer (1952)?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "La incautación de las acerías hecha para evitar una huelga en la guerra de Corea.", correcta: true, explicacion: "Correcto: la Corte le marca el límite del poder presidencial." },
        { texto: "La desegregación de las Fuerzas Armadas por decreto, una confusión frecuente que conviene evitar en el examen.", correcta: false, explicacion: "Eso fue la EO 9981 y no fue anulada por la Corte." },
        { texto: "La presentación a un tercer mandato en 1952.", correcta: false, explicacion: "Eso lo limitó la 22.ª Enmienda, no Youngstown." },
        { texto: "El veto a la ley McCarran de 1950.", correcta: false, explicacion: "El veto a McCarran fue anulado por el Congreso, no por la Corte." }
      ] },
    { pregunta: "¿Por qué el seguro médico fracasó pero «sobrevivió»?", etiqueta: "causa-consecuencia",
      opciones: [
        { texto: "Lo hundió la AMA en 1949, pero la idea revivió como Medicare en 1965.", correcta: true, explicacion: "Correcto: éxito diferido, firmado por Johnson con Truman a su lado." },
        { texto: "Se aprobó parcialmente en 1950 junto a la Seguridad Social, aunque las fuentes del curso no respaldan esa lectura.", correcta: false, explicacion: "No se aprobó; lo que se amplió fue la Seg. Social." },
        { texto: "Truman lo impuso por orden ejecutiva en 1948.", correcta: false, explicacion: "No pudo: requería al Congreso y quedó bloqueado." },
        { texto: "Lo bloqueó Eisenhower al llegar a la presidencia.", correcta: false, explicacion: "El bloqueo fue de la AMA y el Congreso, en 1949." }
      ] },
    { pregunta: "Un buen veredicto sobre el impacto del Fair Deal es…", etiqueta: "concepto",
      opciones: [
        { texto: "Éxito parcial e incremental, fracaso en lo innovador, impacto diferido.", correcta: true, explicacion: "Correcto: el examinador premia incluir ambos sentidos del balance." },
        { texto: "Un fracaso total y absoluto sin ningún logro concreto.", correcta: false, explicacion: "Hubo logros reales (salario, Seg. Social, vivienda)." },
        { texto: "Un éxito completo que cumplió toda la agenda propuesta, algo que el propio PDF descarta de plano.", correcta: false, explicacion: "El núcleo (médico, civiles, Taft-Hartley) quedó bloqueado." },
        { texto: "Un simple empate sin posibilidad de dar un veredicto.", correcta: false, explicacion: "Conviene jerarquizar, no empatar: incremental sí, innovador no." }
      ] },
    { pregunta: "¿Qué muestra que Truman no derogara Taft-Hartley ni con mayoría en 1949?", etiqueta: "concepto",
      opciones: [
        { texto: "Que el obstáculo era la coalición conservadora, no sólo los republicanos.", correcta: true, explicacion: "Correcto: los demócratas sureños aliados con republicanos lo frenaban." },
        { texto: "Que Truman en el fondo apoyaba la ley Taft-Hartley, pese a que ninguna evidencia del tema lo confirma.", correcta: false, explicacion: "La vetó y quiso derogarla; la usó por obligación." },
        { texto: "Que el presidente carecía de poder de veto.", correcta: false, explicacion: "Tenía veto; de hecho lo usó (y se lo anularon)." },
        { texto: "Que los sindicatos querían mantener Taft-Hartley.", correcta: false, explicacion: "Los sindicatos querían derogarla." }
      ] },
    { pregunta: "¿Con qué historiador conecta el poder presidencial de Truman?", etiqueta: "historiador",
      opciones: [
        { texto: "Con Schlesinger: inicio de la «presidencia imperial» que culmina en Nixon.", correcta: true, explicacion: "Correcto: Corea sin declaración e incautaciones son escalones tempranos." },
        { texto: "Con Dallek, que lo llama «gigante con fallas».", correcta: false, explicacion: "«Gigante con fallas» es Dallek sobre Johnson." },
        { texto: "Con Paul Johnson, inventor del concepto «hidden hand», lo que contradice directamente los datos de la guía.", correcta: false, explicacion: "El «hidden hand» es de Eisenhower (Greenstein)." },
        { texto: "Con Bailyn, que habla de «más retórica que sustancia».", correcta: false, explicacion: "Bailyn dice eso de Kennedy, no de Truman." }
      ] }
  ],

  /* ===================== PLANIFICADOR ===================== */
  planificador: {
    bancoPreguntas: [
      { pregunta: "Evalúe el impacto del Fair Deal de Truman. (Nov 2018)", frecuencia: "Muy alta",
        plan: "Tesis: limitado en el corto plazo, decisivo en el largo. P1 impacto legislativo positivo (salario, Seg. Social, vivienda). P2 impacto nulo en el núcleo (médico, civiles, Taft-Hartley: Adams). P3 impacto institucional y simbólico (EO 9981, To Secure These Rights). P4 impacto diferido (Medicare, CRA 1964). Conclusión con P. Johnson vs Adams." },
      { pregunta: "«Truman fracasó en su intento de establecer el Fair Deal». ¿En qué medida está de acuerdo? (May 2022)", frecuencia: "Muy alta",
        plan: "Tesis: de acuerdo en parte, fracasó como programa integral, no en sus piezas ni su agenda. P1 a favor: núcleo bloqueado (3 NO). P2 en contra: 3 SÍ con cifras + desegregación militar. P3 por qué fracasó: contexto (Congreso, AMA, filibuster). P4 medida del fracaso: comparación con lo que Johnson logró en 1964–65." },
      { pregunta: "¿En qué medida fue exitoso el Fair Deal? (Nov 2024)", frecuencia: "Muy alta",
        plan: "Mismo material, otra jerarquía: P1 éxitos concretos, P2 fracasos concretos, P3 por qué (Congreso republicano/conservador), P4 éxito a largo plazo (Great Society). El esquema admite concluir que «sí fue exitoso»; elegí una postura y defendela." },
      { pregunta: "Examine las razones de la impopularidad de Truman al final de su presidencia.", frecuencia: "Alta",
        plan: "4 C: Corea (+MacArthur), Comunismo (macartismo), Corrupción, Congreso (+ huelgas e inflación). Jerarquizá: Corea es la causa inmediata; el bloqueo legislativo, la estructural." }
    ],
    planes: [
      { titulo: "Plan A · Evalúe el impacto del Fair Deal (Nov 2018)",
        tesis: "El impacto fue limitado en el corto plazo pero decisivo en el largo: éxito incremental, fracaso en lo innovador, impacto diferido.",
        pasos: [
          "P1 — Impacto legislativo positivo: salario 40→75 c (1949), Seg. Social +10 M (1950), Housing Act 1949 (810.000 viviendas).",
          "P2 — Impacto nulo en el núcleo: seguro médico (AMA), derechos civiles (filibuster), Taft-Hartley (voto directo). Mecanismo de Adams.",
          "P3 — Impacto institucional y simbólico: EO 9981, To Secure These Rights, ampliación del rol federal.",
          "P4 — Impacto diferido: Medicare, Medicaid y Civil Rights Act 1964 (el examinador pide extenderlo más allá del marco cronológico).",
          "Conclusión: P. Johnson (carácter) vs Adams (mecanismo); impacto profundo pero diferido."
        ] },
      { titulo: "Plan B · «Truman fracasó en establecer el Fair Deal». ¿En qué medida? (May 2022)",
        tesis: "De acuerdo en parte: fracasó en establecerlo como programa integral, no en establecer sus piezas ni su agenda.",
        pasos: [
          "P1 — A favor de la afirmación: núcleo bloqueado (3 NO) + no derogó Taft-Hartley.",
          "P2 — En contra: 3 SÍ con cifras + desegregación militar y «To Secure These Rights».",
          "P3 — Por qué fracasó: no fue él, fue el contexto (Congreso, AMA, filibuster, Guerra Fría, giro conservador).",
          "P4 — Medida del fracaso: comparación con lo que Johnson logró en 1964–65 con mayorías de 2/3.",
          "Conclusión: fracaso como programa, triunfo como agenda."
        ] },
      { titulo: "Plan C · Examine las razones de la impopularidad final de Truman",
        tesis: "Cuatro factores (las 4 C): Corea, Comunismo, Corrupción y Congreso; Corea es la causa inmediata, el bloqueo legislativo la estructural.",
        pasos: [
          "Corea: guerra sin declaración, destitución de MacArthur (IV-1951), gasto militar, incautación del acero.",
          "Comunismo: macartismo, caso Hiss, ley McCarran; la ironía de su propio programa de lealtad.",
          "Corrupción: RFC y oficina de impuestos (1951); «abrigos de visón» (Adams 354–355).",
          "Congreso: huelgas de 1946, inflación ~30%, bloqueo del Fair Deal, vetos anulados.",
          "Conclusión: jerarquía (inmediata vs estructural); el juicio del largo plazo lo revaloriza."
        ] }
    ],
    ensayosModelo: [
      { titulo: "Ensayo 1 · «¿En qué medida fue exitoso el Fair Deal?»",
        parrafos: [
          { texto: "Al asumir en abril de 1945, Harry Truman heredó un New Deal a medio consolidar y un país en reconversión. Su respuesta, el Fair Deal anunciado el 5 de enero de 1949, no fue un programa nuevo sino la continuación y extensión del de Roosevelt. Este ensayo sostiene que el Fair Deal fue un éxito parcial e incremental, un fracaso en su núcleo innovador, y sobre todo un éxito diferido: casi todo lo que el Congreso le negó se convirtió en ley entre 1964 y 1965 bajo Johnson.", nota: "Intro: contexto en una frase, tesis con jerarquía (incremental sí, innovador no, diferido) y anuncio del arco argumental." },
          { texto: "En lo inmediato, el Fair Deal tuvo éxitos legislativos concretos y medibles. Truman elevó el salario mínimo de 40 a 75 centavos por hora en 1949, amplió la Seguridad Social a diez millones de beneficiarios más en 1950 y firmó la Housing Act de 1949, que autorizaba 810.000 viviendas públicas. Esto demuestra que, en lo incremental —mejorar lo que ya existía—, el Fair Deal funcionó. Son los «tres SÍ» del programa, y ninguno fue trivial.", nota: "Párrafo de éxitos con cifras y leyes fechadas; la frase «esto demuestra que» convierte la lista en argumento." },
          { texto: "Sin embargo, el núcleo innovador fracasó. El seguro médico nacional fue hundido por la campaña de la American Medical Association, los derechos civiles por el filibuster de los senadores sureños, y la derogación de Taft-Hartley fue rechazada por voto directo del Congreso pese a la mayoría demócrata de 1949. Como documenta Adams, el Fair Deal cayó por esas tres vías distintas (pp. 348–349). Que no se derogara Taft-Hartley ni con mayoría propia prueba que el obstáculo no eran sólo los republicanos sino la coalición conservadora que incluía a los demócratas sureños.", nota: "Fracaso con el mecanismo de Adams y el argumento causal (coalición conservadora)." },
          { texto: "En conclusión, el éxito del Fair Deal fue incremental y diferido. Truman recurrió a la orden ejecutiva cuando el Congreso lo bloqueó —la EO 9981 desegregó las Fuerzas Armadas en 1948— y fijó una agenda que otro cumplió: Johnson firmó Medicare en 1965 con Truman a su lado. Paul Johnson destaca su carácter decidido y Adams subraya que sus fracasos fueron legislativos, no de omisión. Fracasó como programa, pero triunfó como agenda.", nota: "Conclusión con los dos historiadores, veredicto y la frase bisagra programa/agenda." }
        ] }
    ],
    guia: {
      tesis: "Respondé en una frase con veredicto. Para Truman: «El Fair Deal fue un éxito incremental y diferido pero un fracaso en su núcleo innovador, bloqueado por la coalición conservadora; fracasó como programa pero triunfó como agenda».",
      argumentos: [
        "Usá la plantilla Afirmación → Evidencia (ley + año + cifra) → Explicación → Perspectiva (historiador) → Vuelta a la pregunta.",
        "Organizá el Fair Deal con los «3 SÍ / 3 NO».",
        "Distinguí siempre corto plazo (bloqueo, 22% de aprobación) de largo plazo (revalorización, Great Society)."
      ],
      evidencia: [
        "Logros: salario 40→75 c (1949), Seg. Social +10 M (1950), Housing Act 1949 (810.000 viviendas).",
        "Bloqueos: seguro médico (AMA), derechos civiles (filibuster), Taft-Hartley (voto directo).",
        "Poder presidencial: EO 9981 (1948), incautación del acero y Youngstown (1952), 22.ª Enmienda (1951)."
      ],
      historiografia: [
        "Adams (mecanismo del bloqueo: AMA, filibuster, voto directo; fracasos legislativos, no de omisión).",
        "Paul Johnson (carácter decidido, «producto genuino del sistema democrático», balance hacia lo exterior).",
        "Schlesinger (Corea e incautaciones como inicio de la «presidencia imperial»)."
      ],
      contraargumento: "Reconocé la lectura contraria (p. ej., «el Fair Deal fue un fracaso porque su núcleo no pasó») y refutala mostrando el impacto diferido en 1964–65 y la ampliación del rol federal."
    }
  }
});
