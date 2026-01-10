/* =========================================================
   Diplomaturas Ambientales · Guía del Estudiante · Edición 2026
   Paginado robusto + transición sobria
   ========================================================= */

const elPage = document.getElementById("page");
const elPrev = document.getElementById("btnPrev");
const elNext = document.getElementById("btnNext");
const elCounter = document.getElementById("counter");

if (!elPage || !elPrev || !elNext || !elCounter) {
  throw new Error("Faltan elementos del DOM (page/btnPrev/btnNext/counter). Revisá index.html.");
}

function escapeHtml(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getPageFromURL(max) {
  const params = new URLSearchParams(window.location.search);
  const p = parseInt(params.get("p"), 10);
  if (!Number.isFinite(p) || p < 1) return 1;
  if (p > max) return max;
  return p;
}

function setPageToURL(p) {
  const params = new URLSearchParams(window.location.search);
  params.set("p", String(p));
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);
}

/* =========================
   COMPONENTES DE PÁGINA
   ========================= */

function pageMeta(pageNo, total){
  return `<div class="page__meta">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página ${pageNo} de ${total}</div>`;
}

function pageText(title, paragraphs = [], bullets = [], noteHtml = "") {
  const ps = paragraphs.map(t => `<p class="p">${escapeHtml(t)}</p>`).join("");
  const bs = bullets.length
    ? `<div class="hr"></div><ul class="list">${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
    : "";
  const note = noteHtml ? `<div class="note">${noteHtml}</div>` : "";
  return { title, ps, bs, note };
}

/* =========================
   CONTENIDO (ORDEN LÓGICO NUEVO)
   ========================= */

const rawPages = [
  // 1) Portada
  {
    kind: "cover",
    render: () => `
      <div class="kicker muted">Universidad del Este · Facultad de Derecho y Ciencias Sociales</div>
      <div class="hr"></div>
      <h1 class="h1">Diplomaturas Ambientales</h1>
      <div class="h2">Guía del Estudiante · Campus Virtual (Moodle)</div>
      <p class="p"><span class="kicker">Edición:</span> 2026</p>
      <div class="hr"></div>
      <p class="p muted">
        Este e-book reúne instrucciones operativas, criterios académicos y pasos concretos para usar el campus virtual,
        comunicarte con el equipo y entregar actividades.
      </p>
      <p class="p muted">
        Importante: los enlaces y la disponibilidad de contenidos se actualizan durante el dictado. Si ves una unidad sin grabación,
        significa que la clase fue reciente y la publicación se realiza durante la semana siguiente.
      </p>
    `
  },

  // 2) Índice
  {
    kind: "index",
    render: () => `
      <h1 class="h1">Índice</h1>
      <div class="hr"></div>
      <ol class="list">
        <li><span class="kicker">Estructura del curso (tópicos, unidades y seminarios)</span></li>
        <li><span class="kicker">Problemas frecuentes y solución rápida</span></li>
        <li><span class="kicker">Canales oficiales de comunicación</span></li>
        <li><span class="kicker">Asistencia a clases sincrónicas y beneficios</span></li>
        <li><span class="kicker">Primeros pasos en el Campus</span></li>
        <li><span class="kicker">Trabajos prácticos (TP): entrega y reglas</span></li>
        <li><span class="kicker">Cómo ver la devolución y la nota</span></li>
        <li><span class="kicker">Cronograma, clases sincrónicas y grabaciones</span></li>
        <li><span class="kicker">Defensa oral del TFI (reglas esenciales)</span></li>
        <li><span class="kicker">Cierre institucional</span></li>
      </ol>
    `
  },

  // 3) Estructura del curso (antes era pág. 7 aprox. — ahora va al principio)
  {
    kind: "content",
    ...pageText(
      "Estructura del curso (tópicos, unidades y seminarios)",
      [
        "El curso se organiza por tópicos. Los primeros contienen información general y operativa; luego se despliegan las unidades y seminarios temáticos.",
        "Regla práctica: buscá cada recurso dentro del tópico o unidad correspondiente. Esto reduce errores y evita consultas innecesarias."
      ],
      [
  "Bienvenida y acción inicial (Ficha de cohorte).",
  "Canales oficiales de comunicación.",
  "Evaluación, TPs y TFI.",
  "Cronograma de la cohorte, clases y grabaciones.",
  "Reconocimientos académicos.",
  "Unidades y seminarios temáticos (materiales, grabaciones y actividad asociada)."
],
      "Consejo operativo: trabajá en el orden propuesto. La secuencia está pensada para que lo anterior sea la base de lo siguiente."
    )
  },

  // 4) Problemas frecuentes (antes era pág. 8 aprox. — ahora va al principio)
  {
    kind: "content",
    ...pageText(
      "Problemas frecuentes y solución rápida",
      [
        "Antes de frustrarte: identificá el tipo de problema, reuní evidencia (captura de pantalla, comprobante) y usá el canal correcto."
      ],
      [
        "No puedo ingresar al campus: verificá primero que el pago esté acreditado (Aranceles). Si ya pagaste, escribí con captura del error y tus datos.",
        "No me llega el correo de validación: revisá spam/no deseado. Si persiste, contactá al área correspondiente.",
        "Subí un archivo equivocado: verificá si el campus permite reemplazo antes del cierre; si no, contactá a coordinación/docente por los canales oficiales.",
        "No encuentro una grabación: buscala dentro de la unidad y sección “Clases grabadas”."
      ]
    )
  },

  // 5) Canales oficiales 
  {
    kind: "content",
    ...pageText(
      {
  kind: "content",
  ...pageText(
    "Canales Oficiales de Comunicación (I)",
    [
      "Además de la ficha online y el grupo de WhatsApp, la coordinación de la cohorte pone a disposición los siguientes canales."
    ],
    [],
    `
      <div class="kicker">📧 Contacto principal de la Diplomatura</div>
      <div class="p" style="margin:8px 0 0;">Correo: <b>diplomaturaambientalude@gmail.com</b></div>
      <div class="p" style="margin:8px 0 0;">Mensajería privada del Campus Virtual.</div>

      <div class="hr"></div>

      <div class="kicker">🏛️ Facultad de Derecho – UDE</div>
      <div class="p" style="margin:8px 0 0;">Decanato: <b>fderchoysociales@ude.edu.ar</b></div>
      <div class="p" style="margin:8px 0 0;">Secretarías: <b>Agostina</b> o <b>Bárbara</b>.</div>
      <div class="p" style="margin:8px 0 0;">Departamento de Alumnos: <b>departamentoalumnos@ude.edu.ar</b></div>
      <div class="p" style="margin:8px 0 0;">Tel. <b>(+54 9) 221 424-9026</b></div>
    `
  )
},
       {
  kind: "content",
  ...pageText(
    "Canales Oficiales de Comunicación (II)",
    [
      "Continuación de los canales disponibles, según el tipo de consulta."
    ],
    [],
    `
      <div class="kicker">💰 Área Aranceles</div>
      <div class="p" style="margin:8px 0 0;">Correo: <b>aranceles@ude.edu.ar</b></div>
      <div class="p" style="margin:8px 0 0;">Teléfonos: <b>(0221) 422-4636 / 423-1689 / 423-1692</b></div>
      <div class="p" style="margin:8px 0 0;">WhatsApp: <b>(+54 9) 221 669-9990</b></div>
      <div class="p" style="margin:8px 0 0;">Horario de atención: <b>9:00 a 19:00</b> (WhatsApp solo <b>10 a 14 hs</b>).</div>
      <div class="p" style="margin:8px 0 0;">
        Recordatorio: el link de pago se envía del <b>1 al 10</b> de cada mes, exclusivamente al correo declarado al momento de la inscripción.
      </div>

      <div class="hr"></div>

      <div class="kicker">🌐 Campus Virtual</div>
      <div class="p" style="margin:8px 0 0;">Soporte técnico: <b>dycsvirtual@ude.edu.ar</b> (Contacto: <b>Sr. Alejo</b>).</div>

      <div class="hr"></div>

      <div class="kicker">📝 Área de Ingreso / Inscripción</div>
      <div class="p" style="margin:8px 0 0;">Tel: <b>(+54 9) 221 422-4636</b></div>
      <div class="p" style="margin:8px 0 0;">Correo: <b>consultasingreso@ude.edu.ar</b></div>
      <div class="p" style="margin:8px 0 0;">WhatsApp: <b>(+54 9) 221 477-7950</b></div>
      <div class="p" style="margin:8px 0 0;">Horario: <b>lunes a viernes de 9:00 a 17:00</b>.</div>

      <div class="hr"></div>

      <div class="p">
        👉 Se recomienda guardar estas vías de comunicación y utilizarlas según el tipo de consulta, para recibir respuestas ágiles y precisas.
      </div>
    `
  )
},
  },

  // 6) NUEVA PÁGINA: asistencia a sincrónicas
  {
    kind: "content",
    ...pageText(
      "Asistencia a clases sincrónicas y beneficios",
      [
        "Si bien las clases se graban, resulta importante que, en la medida de lo posible, asistas a los encuentros sincrónicos.",
        "En primer término, la asistencia posibilita la interacción con los profesores (consultas, aclaraciones y orientación directa).",
        "En segundo término, otorga beneficios adicionales que se publicarán en el campus durante el dictado.",
        "Asimismo, podrán desarrollarse ejercicios o actividades grupales vinculadas con la temática abordada en cada unidad."
      ]
    )
  },

  // 7) Primeros pasos
  {
    kind: "content",
    ...pageText(
      "Primeros pasos en el Campus",
      [
        "El campus virtual de la Universidad del Este (FDCS) es el espacio donde vas a encontrar: cronograma, clases grabadas, materiales, actividades prácticas y comunicaciones oficiales.",
        "Regla práctica: si algo es académico (materiales, consignas, devoluciones), se busca primero en el campus. Si algo es administrativo, se canaliza por las áreas correspondientes."
      ],
      [
        "Ingresá con tu usuario y contraseña institucionales.",
        "Usá el menú “Mis cursos” para ingresar a tu diplomatura.",
        "Si aparece un error, tomá captura y usá los canales oficiales."
      ]
    )
  },

  // 8) TP (con el texto institucional exigido)
  {
    kind: "content",
    ...pageText(
      "Trabajos prácticos (TP): entrega y reglas",
      [
        "Las actividades prácticas (TPs) cumplen una función formativa. La entrega debe realizarse exclusivamente por el Campus Virtual, conforme a las pautas publicadas en cada unidad."
      ],
      [
        "Entrá al curso y ubicá la unidad correspondiente. El TP se encuentra dentro del tópico de la unidad (o en un tópico general de evaluación).",
        "Abrí la actividad del TP y seleccioná “Agregar entrega / Añadir entrega”.",
        "Subí tu archivo (preferentemente en formato Word) y presioná “Guardar cambios”.",
        "Si el campus solicita confirmación final, completá el paso “Enviar tarea”.",
        "Verificá el estado: debe figurar “Enviado para calificar” (o equivalente)."
      ],
      `
        <b>Antes de comenzar</b>, se solicita leer detenidamente el instructivo correspondiente a esta actividad.<br><br>
        El trabajo deberá realizarse conforme a las consignas indicadas y subirse al campus dentro del plazo fijado, preferentemente en formato Word para facilitar su corrección.<br><br>
        <b>No se aceptarán trabajos enviados por correo electrónico ni por el grupo de WhatsApp.</b><br>
        Únicamente se considerarán válidos aquellos cargados en el campus.
      `
    )
  },

  // 9) Devolución y nota
  {
    kind: "content",
    ...pageText(
      "Cómo ver la devolución y la nota",
      [
        "La devolución se consulta dentro de la misma actividad del TP y/o desde el menú de calificaciones del curso."
      ],
      [
        "Abrí la actividad del TP → “Estado de la entrega / Ver entrega”.",
        "Descargá archivos de retroalimentación (si los hubiera).",
        "Revisá comentarios en pantalla y la calificación asignada.",
        "También podés ver tu nota desde “Calificaciones”."
      ]
    )
  },

  // 10) Cronograma + grabaciones (contacto corregido)
  {
    kind: "content",
    ...pageText(
      "Cronograma, clases sincrónicas y grabaciones",
      [
        "Las clases se dictan en modalidad sincrónica y quedan grabadas. Las grabaciones se publican en el campus durante la semana posterior a cada clase.",
        "Regla práctica: buscá siempre las grabaciones dentro de la unidad correspondiente, en el bloque “Clases grabadas” o “Grabaciones”."
      ],
      [
        "Buscá las grabaciones dentro de la unidad correspondiente.",
        "Si no aparece una grabación y ya pasó la semana, escribí a diplomaturaambientalude@gmail.com o bien contactate con la coordinadora de la diplomatura a través del grupo de WhatsApp de la cohorte (Mg. Mariana De los Santos)."
      ]
    )
  },

  // 11) Defensa TFI
  {
    kind: "content",
    ...pageText(
      "Defensa oral del TFI (reglas esenciales)",
      [
        "La defensa es individual, oral y virtual, y consiste exclusivamente en la defensa del Trabajo Final previamente entregado."
      ],
      [
        "Condición habilitante: arancel total cancelado (según nómina oficial).",
        "Validación de identidad: exhibición de DNI frente a cámara.",
        "Responsabilidad técnica del estudiante: cámara, micrófono y conexión.",
        "Causales de finalización sin calificación: desconexión, cámara apagada o micrófono silenciado sin causa, o no exhibición de DNI."
      ],
      "Este e-book resume reglas operativas para evitar errores formales. Las pautas completas se publican por la coordinación antes de cada mesa."
    )
  },

  // 12) Cierre
  {
    kind: "content",
    ...pageText(
      "Cierre institucional",
      [
        "Este e-book está pensado para que puedas cursar con autonomía: acceder, ubicar contenidos, comunicarte por los canales correctos y entregar trabajos sin fricción.",
        "Si seguís los pasos, evitás la mayoría de los problemas típicos de campus."
      ],
      [],
      "Universidad del Este · Facultad de Derecho y Ciencias Sociales<br>Diplomaturas Ambientales · Guía del Estudiante · Edición 2026"
    )
  }
];

/* Compilación final de páginas con meta */
const TOTAL_PAGES = rawPages.length;

const pages = rawPages.map((p, i) => {
  const n = i + 1;
  if (p.kind === "cover" || p.kind === "index") {
    return `${pageMeta(n, TOTAL_PAGES)}${p.render()}`;
  }
  return `
    ${pageMeta(n, TOTAL_PAGES)}
    <h1 class="h1">${escapeHtml(p.title || "")}</h1>
    <div class="hr"></div>
    ${p.ps || ""}
    ${p.bs || ""}
    ${p.note || ""}
  `;
});

let currentPage = getPageFromURL(TOTAL_PAGES);

/* =========================
   Render + animación
   ========================= */
function renderPage(nextPage, direction) {
  const idx = nextPage - 1;

  elCounter.textContent = `Página ${nextPage} de ${TOTAL_PAGES}`;
  elPrev.disabled = nextPage <= 1;
  elNext.disabled = nextPage >= TOTAL_PAGES;

  elPage.classList.add("page-anim", "exit-active");

  setTimeout(() => {
    elPage.innerHTML = pages[idx] ?? `<p class="p">Página no disponible.</p>`;
    elPage.classList.remove("exit-active", "enter-active", "enter-left", "enter-right");

    if (direction === "prev") elPage.classList.add("enter-left");
    else elPage.classList.add("enter-right");

    void elPage.offsetWidth;

    elPage.classList.add("enter-active");

    setTimeout(() => {
      elPage.classList.remove("enter-left", "enter-right");
    }, 260);
  }, 160);
}

function goTo(p, direction) {
  const next = Math.max(1, Math.min(TOTAL_PAGES, p));
  currentPage = next;
  setPageToURL(next);
  renderPage(next, direction);
}

elPrev.addEventListener("click", () => goTo(currentPage - 1, "prev"));
elNext.addEventListener("click", () => goTo(currentPage + 1, "next"));

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(currentPage - 1, "prev");
  if (e.key === "ArrowRight") goTo(currentPage + 1, "next");
});

renderPage(currentPage, "next");
