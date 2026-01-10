/* =========================================================
   Diplomaturas Ambientales · Guía del Estudiante · Edición 2026
   Navegación por páginas con ?p= y transición sobria tipo “paso de hojas”
   ========================================================= */

const TOTAL_PAGES = 13;

// Utilidad: leer ?p=
function getPageFromURL() {
  const params = new URLSearchParams(window.location.search);
  const p = parseInt(params.get("p"), 10);
  if (!Number.isFinite(p) || p < 1) return 1;
  if (p > TOTAL_PAGES) return TOTAL_PAGES;
  return p;
}

// Utilidad: escribir ?p=
function setPageToURL(p) {
  const params = new URLSearchParams(window.location.search);
  params.set("p", String(p));
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);
}

const elPage = document.getElementById("page");
const elPrev = document.getElementById("btnPrev");
const elNext = document.getElementById("btnNext");
const elCounter = document.getElementById("counter");

let currentPage = getPageFromURL();

/* =========================
   CONTENIDO (13 páginas)
   Mantiene estructura. Podés editar textos sin tocar lógica.
   ========================= */
const pages = [
  coverPage(),
  indexPage(),
  pageText("1. Primeros pasos en el Campus", [
    "El campus virtual de la Universidad del Este (FDCS) es el espacio donde vas a encontrar: cronograma, clases grabadas, materiales, actividades prácticas y comunicaciones oficiales.",
    "Regla práctica: si algo es académico (materiales, consignas, devoluciones), se busca primero en el campus. Si algo es administrativo (pagos, alta de usuario, inscripción), se canaliza por las áreas correspondientes."
  ], [
    "Acceso al campus: ingresá con tu usuario y contraseña institucionales.",
    "Si todavía no te habilitaron, verificá primero que tu pago esté acreditado.",
    "Dentro del curso, usá el menú “Mis cursos” para ingresar a tu diplomatura."
  ]),
  pageText("2. Canales de comunicación y mensajes privados", [
    "Para que la cohorte funcione, las consultas deben seguir un criterio simple: cada tema por su canal. Esto evita pérdidas, respuestas cruzadas y demoras."
  ], [
    "Aranceles (pagos, verificación): aranceles@ude.edu.ar",
    "Campus Virtual (alta/ingreso Moodle): dycsvirtual@ude.edu.ar",
    "Departamento de Alumnos / SIU: mgagna@ude.edu.ar",
    "Ingreso / Admisión: consultasingreso@ude.edu.ar",
    "Comunicaciones: comunicacion@ude.edu.ar"
  ]),
  pageText("3. Cómo subir un Trabajo Práctico (TP)", [
    "Las actividades prácticas cumplen una función formativa. Seguí estos pasos para que tu entrega quede correctamente registrada."
  ], [
    "Entrá al curso y ubicá la unidad correspondiente (o el tópico de evaluación).",
    "Abrí la actividad del TP y seleccioná “Agregar/Añadir entrega”.",
    "Subí el archivo correcto y presioná “Guardar cambios”.",
    "Si aparece el paso final “Enviar tarea”, completalo.",
    "Verificá que el estado figure “Enviado para calificar”."
  ]),
  pageText("4. Cómo ver la devolución y la nota", [
    "La devolución se consulta dentro de la misma actividad del TP y/o desde el menú de calificaciones."
  ], [
    "Abrí la actividad del TP → “Estado de la entrega / Ver entrega”.",
    "Descargá archivos de retroalimentación (si los hubiera).",
    "Leé comentarios y revisá la calificación asignada.",
    "También podés ver tu nota desde “Calificaciones”."
  ]),
  pageText("5. Cronograma, clases sincrónicas y grabaciones", [
    "Las clases se dictan en modalidad sincrónica y quedan grabadas. Las grabaciones se publican en el campus durante la semana posterior a cada clase."
  ], [
    "El cronograma completo se publica en el tópico correspondiente del curso.",
    "Buscá siempre las grabaciones dentro de la unidad y sección “Clases grabadas”.",
    "Si la grabación no aparece y ya pasó la semana, escribí a dycsvirtual@ude.edu.ar indicando: curso, unidad, fecha y usuario."
  ]),
  pageText("6. Defensa oral del TFI (reglas esenciales)", [
    "La defensa es individual, oral y virtual, y consiste exclusivamente en la defensa del Trabajo Final previamente entregado."
  ], [
    "Condición habilitante: arancel total cancelado (según nómina oficial).",
    "Validación de identidad: exhibición de DNI frente a cámara.",
    "Responsabilidad técnica del estudiante: cámara, micrófono y conexión.",
    "Causales de finalización sin calificación: desconexión, cámara apagada sin causa, micrófono silenciado sin causa, o no exhibición de DNI."
  ]),
  pageText("7. Estructura del curso en Moodle", [
    "El curso se organiza por tópicos: primero los tópicos generales y luego unidades y seminarios temáticos."
  ], [
    "Tópico 0: bienvenida + acción inicial (Ficha de cohorte).",
    "Tópico 1: canales oficiales de comunicación.",
    "Tópico 2: evaluación, TPs y TFI.",
    "Tópico 3: cronograma de la cohorte, clases y grabaciones.",
    "Tópico 4: reconocimientos académicos.",
    "Desde el Tópico 5: unidades y seminarios temáticos (con materiales, grabaciones y actividad asociada)."
  ]),
  pageText("8. Problemas frecuentes y solución rápida", [
    "Antes de frustrarte, aplicá este esquema: identificar el tipo de problema, reunir evidencia (captura/comprobante) y usar el canal correcto."
  ], [
    "No puedo ingresar: verificar pago (Aranceles) y luego escribir a Campus Virtual con captura del error.",
    "No llega correo SIU: revisar spam/no deseado; si persiste, escribir a Departamento de Alumnos.",
    "Subí archivo equivocado: revisar si permite reemplazo; si no, contactar al docente por Moodle.",
    "No encuentro grabación: buscar dentro de la unidad; si ya pasó la semana, consultar a Campus Virtual con fecha exacta."
  ]),
  pageText("Cierre institucional", [
    "Este e-book está pensado para que puedas cursar con autonomía: acceder, ubicar contenidos, comunicarte por los canales correctos y entregar trabajos sin fricción.",
    "Si seguís los pasos, evitás la mayoría de los problemas típicos de campus."
  ], [
    "Universidad del Este · Facultad de Derecho y Ciencias Sociales",
    "Diplomaturas Ambientales · Guía del Estudiante · Edición 2026"
  ])
];

// Si querés que las 13 páginas coincidan 1:1 con el PDF, ajustás solamente estas entradas.
// La lógica y la estructura no se tocan.

function coverPage(){
  return `
    <div class="kicker muted">Diplomaturas Ambientales · Universidad del Este · FDCS</div>
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
  `;
}

function indexPage(){
  return `
    <h1 class="h1">Índice</h1>
    <div class="hr"></div>
    <ol class="list">
      <li><span class="kicker">Primeros pasos en el Campus</span></li>
      <li><span class="kicker">Canales de comunicación y mensajes privados</span></li>
      <li><span class="kicker">Trabajos prácticos y TFI: cómo subir entregas</span></li>
      <li><span class="kicker">Cómo ver devoluciones y calificaciones</span></li>
      <li><span class="kicker">Cronograma, clases sincrónicas y grabaciones</span></li>
      <li><span class="kicker">Defensa oral del TFI (reglas esenciales)</span></li>
      <li><span class="kicker">Estructura del curso (tópicos, unidades y seminarios)</span></li>
      <li><span class="kicker">Problemas frecuentes y solución rápida</span></li>
      <li><span class="kicker">Cierre institucional</span></li>
    </ol>
  `;
}

function pageText(title, paragraphs = [], bullets = []) {
  const ps = paragraphs.map(t => `<p class="p">${escapeHtml(t)}</p>`).join("");
  const bs = bullets.length
    ? `<div class="hr"></div><ul class="list">${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
    : "";
  return `
    <h1 class="h1">${escapeHtml(title)}</h1>
    <div class="hr"></div>
    ${ps}
    ${bs}
  `;
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* =========================
   Render con animación “paso de hojas”
   ========================= */
function renderPage(nextPage, direction) {
  // direction: "next" | "prev"
  const idx = nextPage - 1;

  elCounter.textContent = `Página ${nextPage} de ${TOTAL_PAGES}`;
  elPrev.disabled = nextPage <= 1;
  elNext.disabled = nextPage >= TOTAL_PAGES;

  // Animación de salida breve
  elPage.classList.add("page-anim", "exit-active");

  // Espera mínima para que se note la salida
  setTimeout(() => {
    elPage.innerHTML = pages[idx] ?? `<p class="p">Página no disponible.</p>`;

    // Preparar entrada según dirección
    elPage.classList.remove("exit-active", "enter-active", "enter-left", "enter-right");

    if (direction === "prev") elPage.classList.add("enter-left");
    else elPage.classList.add("enter-right");

    // Forzar reflow
    void elPage.offsetWidth;

    // Activar entrada
    elPage.classList.add("enter-active");

    // Limpieza final
    setTimeout(() => {
      elPage.classList.remove("enter-left", "enter-right");
    }, 260);
  }, 140);
}

function goTo(p, direction) {
  const next = Math.max(1, Math.min(TOTAL_PAGES, p));
  currentPage = next;
  setPageToURL(next);
  renderPage(next, direction);
}

/* =========================
   Eventos
   ========================= */
elPrev.addEventListener("click", () => goTo(currentPage - 1, "prev"));
elNext.addEventListener("click", () => goTo(currentPage + 1, "next"));

// Teclas: ← → (universitario, estándar)
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(currentPage - 1, "prev");
  if (e.key === "ArrowRight") goTo(currentPage + 1, "next");
});

// Inicial
renderPage(currentPage, "next");
