/* =========================================================
   Diplomaturas Ambientales · Guía del Estudiante · Edición 2026
   Paginado robusto + transición sobria
   ========================================================= */

const elPage = document.getElementById("page");
const elPrev = document.getElementById("btnPrev");
const elNext = document.getElementById("btnNext");
const elCounter = document.getElementById("counter");

// Si estos elementos no existen, aborta (evita página en blanco por error silencioso)
if (!elPage || !elPrev || !elNext || !elCounter) {
  throw new Error("Faltan elementos del DOM (page/btnPrev/btnNext/counter). Revisá index.html.");
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

function escapeHtml(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* =========================
   CONTENIDO (EDITABLE)
   ========================= */

const pages = [
  coverPage(),
  indexPage(),
  pageText("1. Primeros pasos en el Campus", [
    "El campus virtual de la Universidad del Este (FDCS) es el espacio donde vas a encontrar: cronograma, clases grabadas, materiales, actividades prácticas y comunicaciones oficiales.",
    "Regla práctica: si algo es académico (materiales, consignas, devoluciones), se busca primero en el campus. Si algo es administrativo (pagos, alta de usuario, inscripción), se canaliza por las áreas correspondientes."
  ], [
    "Ingresá con tu usuario y contraseña institucionales.",
    "Si todavía no te habilitaron, verificá primero que tu pago esté acreditado.",
    "Usá “Mis cursos” para ingresar a tu diplomatura."
  ]),
  pageText("2. Canales de comunicación y mensajes privados", [
    "Para que la cohorte funcione, las consultas deben seguir un criterio simple: cada tema por su canal. Esto evita pérdidas, respuestas cruzadas y demoras."
  ], [
    "Aranceles: aranceles@ude.edu.ar",
    "Campus Virtual: dycsvirtual@ude.edu.ar",
    "Departamento de Alumnos / SIU: mgagna@ude.edu.ar",
    "Ingreso / Admisión: consultasingreso@ude.edu.ar",
    "Comunicaciones: comunicacion@ude.edu.ar"
  ]),
  pageText("3. Cómo subir un Trabajo Práctico (TP)", [
    "Las actividades prácticas cumplen una función formativa. Seguí estos pasos para que tu entrega quede correctamente registrada."
  ], [
    "Abrí la actividad del TP y elegí “Agregar entrega”.",
    "Subí el archivo correcto y presioná “Guardar cambios”.",
    "Si aparece “Enviar tarea”, completalo.",
    "Verificá el “Estado de entrega”: “Enviado para calificar”."
  ]),
  pageText("4. Cómo ver la devolución y la nota", [
    "La devolución se consulta dentro de la misma actividad del TP y/o desde el menú de calificaciones."
  ], [
    "Abrí la actividad del TP → “Estado de la entrega / Ver entrega”.",
    "Descargá archivos de retroalimentación (si los hubiera).",
    "Revisá comentarios y calificación.",
    "También podés ver tu nota desde “Calificaciones”."
  ]),
  pageText("5. Cronograma, clases sincrónicas y grabaciones", [
    "Las clases se dictan en modalidad sincrónica y quedan grabadas. Las grabaciones se publican en el campus durante la semana posterior a cada clase."
  ], [
    "Buscá las grabaciones dentro de la unidad correspondiente.",
    "Si no aparece una grabación y ya pasó la semana, escribí a dycsvirtual@ude.edu.ar con curso, unidad, fecha y usuario."
  ]),
  pageText("6. Defensa oral del TFI (reglas esenciales)", [
    "La defensa es individual, oral y virtual, y consiste exclusivamente en la defensa del Trabajo Final previamente entregado."
  ], [
    "Condición habilitante: arancel total cancelado (según nómina oficial).",
    "Validación: exhibición de DNI frente a cámara.",
    "Responsabilidad técnica: cámara, micrófono y conexión.",
    "Finalización sin calificación: desconexión, cámara apagada o no exhibición de DNI."
  ]),
  pageText("7. Estructura del curso en Moodle", [
    "El curso se organiza por tópicos: primero los tópicos generales y luego unidades y seminarios temáticos."
  ], [
    "Tópico 0: bienvenida + ficha de cohorte.",
    "Tópico 1: canales oficiales.",
    "Tópico 2: evaluación, TPs y TFI.",
    "Tópico 3: cronograma y grabaciones.",
    "Tópico 4: reconocimientos.",
    "Desde el Tópico 5: unidades y seminarios."
  ]),
  pageText("8. Problemas frecuentes y solución rápida", [
    "Antes de frustrarte: identificá el tipo de problema, reuní evidencia (captura/comprobante) y usá el canal correcto."
  ], [
    "No puedo ingresar: verificar pago (Aranceles) y luego Campus Virtual con captura.",
    "No llega correo SIU: revisar spam; si persiste, escribir a Departamento de Alumnos.",
    "Archivo equivocado: revisar si permite reemplazo; si no, mensaje al docente por Moodle.",
    "No encuentro grabación: buscar en la unidad; si ya pasó la semana, consultar a Campus Virtual."
  ]),
  pageText("Cierre institucional", [
    "Este e-book está pensado para que puedas cursar con autonomía: acceder, ubicar contenidos, comunicarte por los canales correctos y entregar trabajos sin fricción.",
    "Si seguís los pasos, evitás la mayoría de los problemas típicos de campus."
  ], [
    "Universidad del Este · Facultad de Derecho y Ciencias Sociales",
    "Diplomaturas Ambientales · Guía del Estudiante · Edición 2026"
  ])
];

function coverPage(){
  return `
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
  `;
}

function indexPage(){
  return `
    <h1 class="h1">Índice</h1>
    <div class="hr"></div>
    <ol class="list">
      <li><span class="kicker">Primeros pasos en el Campus</span></li>
      <li><span class="kicker">Canales de comunicación y mensajes privados</span></li>
      <li><span class="kicker">Trabajos prácticos y TFI</span></li>
      <li><span class="kicker">Devoluciones y calificaciones</span></li>
      <li><span class="kicker">Cronograma y grabaciones</span></li>
      <li><span class="kicker">Defensa oral del TFI</span></li>
      <li><span class="kicker">Estructura del curso en Moodle</span></li>
      <li><span class="kicker">Problemas frecuentes</span></li>
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

/* =========================
   Render + animación
   ========================= */

const TOTAL_PAGES = pages.length;
let currentPage = getPageFromURL(TOTAL_PAGES);

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
  }, 140);
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
