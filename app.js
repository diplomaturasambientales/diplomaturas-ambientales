/* =========================================================
   UDE · Diplomaturas Ambientales · Guía del Estudiante 2026
   app.js (REEMPLAZO TOTAL)
   ========================================================= */

(() => {
  "use strict";

  // ======== CONFIG ========
  const TOTAL_PAGES = 13;

  // Cambia este número si querés forzar “invalidador de cache” desde JS
  // (igual, tu ?v= en la URL ya alcanza).
  const BUILD_TAG = "20260110";

  // ======== CONTENIDO ========
  // IMPORTANTE: 13 entradas EXACTAS (índices 0..12)
  // Si falta una, antes te quedaba "en blanco". Acá NO: se muestra aviso.
  const pages = [
    // 1
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 1 de 13</div>
      <h1>Diplomaturas Ambientales</h1>
      <h2>Guía del Estudiante · Campus Virtual (Moodle)</h2>
      <p><strong>Edición:</strong> 2026</p>
      <hr>
      <p>
     Este instructivo ha sido elaborado como un <strong>instrumento académico-operativo integral</strong>, destinado a acompañar a las y los
  estudiantes de las Diplomaturas Ambientales de la Universidad del Este durante todo el desarrollo de la cohorte 2026.
</p>

<p>
  Su finalidad no se limita a brindar indicaciones técnicas de uso del Campus Virtual, sino que procura <strong>ordenar la experiencia
  formativa</strong>, establecer <strong>criterios académicos claros y uniformes</strong>, y consolidar las pautas institucionales de
  comunicación, seguimiento y evaluación académica.
</p>

<p>
  En este documento se sistematizan las reglas de funcionamiento del Campus Virtual (Moodle), los criterios académicos esenciales que
  rigen la cursada, los canales institucionales válidos de comunicación con la coordinación y el equipo docente, así como los
  procedimientos formales para la entrega de actividades, trabajos prácticos y evaluaciones finales.
</p>

<div class="callout callout-info" role="note" aria-label="Importante">
  <strong>Importante:</strong> se recomienda revisar periódicamente el Campus Virtual, mantener activas las notificaciones institucionales y consultar
  este instructivo antes de efectuar reclamos o consultas operativas. El seguimiento de estas pautas contribuye a un desarrollo
  académico ordenado y a una mejor experiencia de cursada.
</div>
    `,

    // 2
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 2 de 13</div>
      <h1>Índice</h1>
      <hr>
      <ol>
        <li><strong>Estructura de las diplomaturas</strong> (tópicos, unidades y seminarios)</li>
        <li><strong>Problemas frecuentes</strong> y solución rápida</li>
        <li><strong>Canales oficiales de comunicación (I)</strong></li>
        <li><strong>Canales oficiales de comunicación (II)</strong></li>
        <li><strong>Asistencia</strong> a clases sincrónicas y beneficios</li>
        <li><strong>Primeros pasos</strong> en el Campus</li>
        <li><strong>Trabajos prácticos (TP)</strong>: entrega y reglas</li>
        <li><strong>Cómo ver</strong> la devolución y la nota</li>
        <li><strong>Cronograma</strong>, clases sincrónicas y grabaciones</li>
        <li><strong>Defensa oral del TFI</strong> (reglas esenciales)</li>
        <li><strong>Cierre institucional</strong></li>
      </ol>
    `,

    // 3
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 3 de 13</div>
      <h1>Estructura de las diplomaturas</h1>
      <p>La organización en Moodle se presenta por <strong>tópicos</strong>. Dentro de cada tópico vas a encontrar:</p>
      <ul>
        <li><strong>Clase sincrónica</strong> (link, fecha, horario, profesor/res a cargo)</li>
        <li><strong>Materiales</strong> (lecturas, videos, normativa, jurisprudencia, guías)</li>
        <li><strong>Clases grabadas</strong> (cuando corresponda)</li>
        <li><strong>Actividades</strong> (TP / consignas / evaluaciones)</li>
      </ul>
      <div class="box">
        <strong>Regla práctica:</strong> entrá siempre por la <em>unidad correspondiente</em> y buscá el bloque “Clases grabadas o grabaciones”
        para acceder a la grabación cuando ya esté publicada.
        <strong>Clases grabadas o grabaciones:</strong> Si la grabación aún no figura, significa que la clase fue reciente y su publicación se realizará durante la semana siguiente.
        
      </div>
    `,

    // 4
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 4 de 13</div>
      <h1>Problemas frecuentes y solución rápida</h1>
      <p>Antes de frustrarte: identificá el tipo de problema, reuní evidencia (captura, comprobante) y usá el canal correcto.</p>
      <ul>
        <li><strong>No puedo ingresar al campus:</strong> verificá primero que el pago esté acreditado (Aranceles). Si ya pagaste, escribí a (dycsvirtual@ude.edu.ar) con la captura del error.</li>
        <li><strong>No me llega el correo de validación de acceso al campus:</strong> revisá spam/no deseado. Si persiste, contactá a (dycsvirtual@ude.edu.ar).</li>
        <li><strong>Perdí mi clave de acceso/nombre de usuario del campus:</strong> contactate a (dycsvirtual@ude.edu.ar).</li>
        <li><strong>No tengo acceso al campus:</strong> Primero debes contactarte con el área de aranceles para cotejar el pago de matricula y luego a admisión ya que tal vez te falte subir documentación.</li>
        <li><strong>No me llegó a mi correo el enlace para abonar la cuota de la diplomatura: </strong> Debes contactarte con el área de aranceles a (aranceles@ude.edu.ar).</li>
        <li><strong>Subí un archivo equivocado:</strong> verificá si el campus permite reemplazo antes del cierre; si no, contactate con la coordinación de la cohorte.</li>
        <li><strong>No encuentras una grabación?:</strong> buscala dentro de la unidad y sección “Clases grabadas”, de lo contrario, ponete en contacto con la coordinación.</li>
        <li><strong>No encuentras el link de la clase?:</strong> buscala en la unidad respectiva debajo del detalle de los temas de la unidad, sino la encuentras, pregunta a la coordinación.</li>
        <li><strong>Subí un archivo equivocado o incompleto:</strong> Verificá si la actividad permite reemplazo antes del cierre, sino habilita una nueva carga, comunicate con la coordinación.</li>
        <li><strong>No sé a quién dirigir una consulta:</strong> Utilizá siempre el canal correspondiente según el tipo de consulta (Campus Virtual, Aranceles, Ingreso o Coordinación).</li>
        <li><strong>Tengo problemas técnicos durante una clase sincrónica:</strong> Verificá previamente tu conexión, cámara y micrófono. </li>
      </ul>
    `,

    // 5
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 5 de 13</div>
      <h1>Canales Oficiales de Comunicación (I)</h1>
      <p>Además del grupo de WhatsApp, la coordinación de la cohorte pone a disposición los siguientes canales.</p>

      <div class="box">
        <p><strong>📩 Contacto principal de la Diplomatura</strong><br>
        Correo: <strong>diplomaturaambientalude@gmail.com</strong><br>
        Mensajería privada del Campus Virtual.</p>
      </div>

      <div class="box">
        <p><strong>🏛️ Facultad de Derecho – UDE</strong><br>
        Decanato: <strong>fderchoysociales@ude.edu.ar</strong><br>
        Secretarías: <strong>Agostina</strong> o <strong>Bárbara</strong>.<br>
        Departamento de Alumnos: <strong>departamentoalumnos@ude.edu.ar</strong></p>
      </div>
    `,

    // 6
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 6 de 13</div>
      <h1>Canales Oficiales de Comunicación (II)</h1>
      <p>Continuación de los canales disponibles, según el tipo de consulta.</p>

      <div class="box">
        <p><strong>💰 Área Aranceles</strong><br>
        Correo: <strong>aranceles@ude.edu.ar</strong><br>
        Teléfonos: <strong>(0221) 422-4636 / 423-1689 / 423-1692</strong><br> WhatsApp: <strong>(+54 9) 221 669-9990</strong><br>
        Horario: <strong>9:00 a 19:00</strong> (WhatsApp solo <strong>10 a 14 hs</strong>).<br>
        Recordatorio: el link de pago se envía del <strong>1 al 10</strong> de cada mes, exclusivamente al correo declarado al momento de la inscripción.</p>
      </div>

      <div class="box">
        <p><strong>🌐 Campus Virtual</strong><br>
        Soporte técnico: <strong>dycsvirtual@ude.edu.ar</strong> (Contacto: <strong>Sr. Alejo</strong>).</p>
      </div>

      <div class="box">
        <p><strong>📝 Área de Ingreso / Inscripción</strong><br>
        Tel: <strong>(+54 9) 221 422-4636</strong><br> Correo: <strong>consultasingreso@ude.edu.ar</strong><br>
        WhatsApp: <strong>(+54 9) 221 477-7950</strong><br> Horario: <strong>lunes a viernes de 9:00 a 17:00</strong>.</p>
        <p class="small">👉 Se recomienda guardar estas vías de comunicación y utilizarlas según el tipo de consulta, para recibir respuestas ágiles y precisas.</p>
      </div>
    `,

    // 7
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 7 de 13</div>
      <h1>Asistencia a clases sincrónicas y beneficios</h1>
      <p>Si bien las clases se graban y quedan disponibles en el Campus Virtual, se recomienda especialmente la asistencia a los encuentros sincrónicos, en la medida de las posibilidades de cada estudiante.</p>
      <ul>
        <li>La participación en las clases en vivo favorece la interacción directa con los docentes, permitiendo la realización de consultas, aclaraciones conceptuales y orientaciones específicas sobre los contenidos de cada unidad..</li>
        <li>Asimismo, durante los encuentros sincrónicos podrán desarrollarse ejercicios, consignas o actividades grupales vinculadas con la temática abordada, cuya realización en tiempo real enriquece la experiencia académica.</li>
      </ul>
    `,

    // 8
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 8 de 13</div>
      <h1>Primeros pasos en el Campus</h1>
      <ol>
        <li>Ingresá al campus virtual, con tu usuario y contraseña provistos al momento de la inscripción.</li>
        <li>Ubicá la diplomatura ambiental a la cual te hayas inscripto.</li>
        <li>Recorré el tópico de bienvenida: reglamento, canales oficiales, cronograma, materiales iniciales y unidades.</li>
        <li>Verificá que puedas abrir recursos y visualizar actividades (TP / foros / enlaces).</li>
      </ol>
      <div class="box">
        <strong>Consejo:</strong> si un recurso no abre, probá con otro navegador o en modo incógnito. Si persiste, contactate con el soporte del campus virtual con una captura del error.
      </div>
    `,

    // 9
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 9 de 13</div>
      <h1>Trabajos prácticos (TP): entrega y reglas</h1>
      <p>Las actividades prácticas (TPs) cumplen una función formativa. La entrega debe realizarse exclusivamente por el Campus Virtual.</p>
      <ul>
        <li>Entrá a la diplomatura y ubicá la unidad correspondiente (o el tópico general de actividad ó evaluación).</li>
        <li>Abrí la actividad del TP y seleccioná “Agregar entrega / Añadir entrega”.</li>
        <li>Subí tu archivo (preferentemente en Word) y presioná “Guardar cambios”.</li>
        <li>Si el campus solicita confirmación final, completá el paso “Enviar tarea”.</li>
        <li>Verificá el estado: debe figurar “Enviado para calificar” (o equivalente).</li>
      </ul>
      <div class="box">
        <p><strong>Antes de comenzar</strong>, se solicita leer detenidamente el instructivo correspondiente a esta actividad.</p>
        <p><strong>No se aceptarán trabajos enviados por correo electrónico ni por el grupo de WhatsApp.</strong><br>
        Únicamente se considerarán válidos aquellos cargados en el campus.</p>
      </div>
    `,

    // 10
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 10 de 13</div>
      <h1>Cómo ver la devolución y la nota</h1>
      <ol>
        <li>Ingresá a la actividad del TP entregado.</li>
        <li>Revisá el estado de comentarios y eventualmenente calificación.</li>
        <li>Descargá el archivo corregido.Puede ser que el profesor te contacte a fin de darte mayores precisiones al respecto o contactate con el mismo.</li>
        <li>Si hay observaciones, leelas antes de reenviar o consultar.</li>
      </ol>
      <div class="box">
        <strong>Regla:</strong> las consultas deben formularse por canales oficiales y con referencia clara a la unidad, TP y fecha.
      </div>
    `,

    // 11
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 11 de 13</div>
      <h1>Cronograma, clases sincrónicas y grabaciones</h1>
      <ul>
        <li>El cronograma oficial se publica en el campus en los primeros tópicos.</li>
        <li>Las grabaciones se ubican dentro de cada unidad en “Clases grabadas”.</li>
        <li>Si una clase reciente todavía no figura, se publica durante la semana siguiente.</li>
      </ul>
      <div class="box">
        <strong>Importante:</strong> mantené tus notificaciones activas (correo, grupo de whatsAap y campus) para anuncios y cambios operativos.
      </div>
    `,

    // 12
    `<div class="kicker">
  Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 12 de 13
</div>

<h1>Defensa oral del TFI (reglas esenciales)</h1>

<ol>
  <li>
    El Trabajo Final Integrador (TFI) debe subirse al campus en las fechas indicadas por la coordinación académica.
  </li>

  <li>
    La defensa es individual, oral y virtual, y consiste exclusivamente en la exposición del Trabajo Final previamente entregado.
  </li>

  <li>
    La defensa se agenda en las mesas previstas, conforme fecha y horario que serán comunicados oportunamente.
  </li>

  <li>
    Condición habilitante: solo podrán acceder a la defensa quienes tengan el arancel total cancelado, según la nómina oficial del Área de Aranceles.
  </li>

  <li>
    Validación de identidad: al ingresar a la defensa, el/la estudiante deberá exhibir su DNI frente a cámara. La falta de exhibición implica que no se rinde y se registra ausencia.
  </li>

  <li>
    Responsabilidad técnica del estudiante: cámara, micrófono y conexión a internet. Las fallas técnicas atribuibles al estudiante no habilitan reprogramación.
  </li>

  <li>
    Causales de finalización sin calificación: desconexión, cámara apagada o micrófono silenciado sin causa justificada, o no exhibición del DNI.
  </li>

  <li>
    Orden y tiempos: la convocatoria es escalonada; la duración aproximada es de 10 minutos por estudiante; el ingreso se realiza únicamente cuando la coordinación lo autorice.
  </li>

  <li>
    Se exige claridad expositiva, dominio conceptual y referencia adecuada a las fuentes trabajadas durante la diplomatura.
  </li>
</ol>
      <div class="box">
        <strong>Nota:</strong> la rúbrica de evaluación del TFI se publica con anticipación en el campus.
      </div>
    `,

    // 13
    `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026 · Página 13 de 13</div>
      <h1>Cierre institucional de cohortes</h1>
      <p>
Este e-book fue diseñado para acompañarte durante toda la cursada, brindándote una guía clara y operativa para desenvolverte con autonomía en el Campus Virtual: acceder a los contenidos, ubicar cada unidad, comunicarte por los canales institucionales adecuados y cumplir con las instancias académicas previstas.
</p>

<p>
El correcto uso de estas herramientas no solo facilita la gestión cotidiana del cursado, sino que también contribuye a un desarrollo académico ordenado, responsable y acorde a los estándares de la Universidad del Este.
</p>

<p>
Seguir las pautas aquí indicadas te permitirá evitar la mayoría de las dificultades habituales del entorno virtual y concentrarte en lo verdaderamente importante: el aprendizaje, el intercambio académico y la formación profesional.
</p>

<div class="box">
  <p>
    Universidad del Este · Facultad de Derecho y Ciencias Sociales<br>
    Diplomaturas Ambientales · Guía del Estudiante elaborada por la coordinación administrativa de las cohortes · Edición 2026
  </p>
</div>
    `
  ];

  // ======== UTILIDADES URL ========
  function getParam(name) {
    const u = new URL(window.location.href);
    return u.searchParams.get(name);
  }

  function setParam(name, value) {
    const u = new URL(window.location.href);
    u.searchParams.set(name, value);
    // preserva v si está
    if (!u.searchParams.get("v")) u.searchParams.set("v", BUILD_TAG);
    window.history.replaceState({}, "", u.toString());
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  // ======== DOM HELPERS ========
  function qs(sel) { return document.querySelector(sel); }

  // Render fallback si falta estructura HTML
  function ensureDOM() {
    // Esperamos que exista .page-shell .page .page-inner y .nav con botones.
    // Si no existe, lo creamos para que nunca “se rompa”.
    let stage = qs(".stage");
    if (!stage) {
      // intenta usar body
      stage = document.createElement("div");
      stage.className = "stage";
      document.body.appendChild(stage);
    }

    let shell = qs(".page-shell");
    if (!shell) {
      shell = document.createElement("div");
      shell.className = "page-shell";
      stage.appendChild(shell);
    }

    let page = qs(".page");
    if (!page) {
      page = document.createElement("div");
      page.className = "page page-anim";
      shell.appendChild(page);
    }

    let inner = qs(".page-inner");
    if (!inner) {
      inner = document.createElement("div");
      inner.className = "page-inner";
      page.appendChild(inner);
    }

    let nav = qs(".nav");
    if (!nav) {
      nav = document.createElement("div");
      nav.className = "nav";
      nav.innerHTML = `
        <button class="btn btn-prev" id="btnPrev">Página anterior</button>
        <button class="btn btn-next" id="btnNext">Siguiente</button>
        <div class="pill" id="pagePill">Página 1 de ${TOTAL_PAGES}</div>
      `;
      shell.appendChild(nav);
    }
  }

  // ======== TRANSICIÓN ENTRE PÁGINAS ========
  const TRANSITION_MS = 220;
  const TRANSITION_BUFFER_MS = 80;
  const transitionClasses = ["enter-left", "enter-right", "exit-left", "exit-right"];
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function clearTransitionClasses(el) {
    if (!el) return;
    el.classList.remove(...transitionClasses);
  }

  function waitForTransition(el, timeoutMs) {
    if (!el || reduceMotionQuery.matches) return Promise.resolve();

    return new Promise((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        el.removeEventListener("transitionend", onTransitionEnd);
        window.clearTimeout(timer);
        resolve();
      };
      const onTransitionEnd = (event) => {
        if (event.target === el && (event.propertyName === "opacity" || event.propertyName === "transform")) {
          finish();
        }
      };
      const timer = window.setTimeout(finish, timeoutMs);
      el.addEventListener("transitionend", onTransitionEnd);
    });
  }

  async function runPageTransition(direction, commit) {
    const inner = qs(".page-inner");
    if (!inner) return;

    const isPrev = direction === "prev";
    const exitClass = isPrev ? "exit-right" : "exit-left";
    const enterClass = isPrev ? "enter-left" : "enter-right";

    clearTransitionClasses(inner);

    if (reduceMotionQuery.matches) {
      commit();
      return;
    }

    inner.classList.add(exitClass);
    await waitForTransition(inner, TRANSITION_MS + TRANSITION_BUFFER_MS);

    clearTransitionClasses(inner);
    commit();

    // fuerza reflow para garantizar transición de entrada
    void inner.offsetWidth;

    inner.classList.add(enterClass);
    requestAnimationFrame(() => {
      clearTransitionClasses(inner);
    });
  }

  // ======== UI NAV ========
  function updateNav(p) {
    const btnPrev = qs("#btnPrev");
    const btnNext = qs("#btnNext");
    const pill = qs("#pagePill");

    if (pill) pill.textContent = `Página ${p} de ${TOTAL_PAGES}`;

    if (btnPrev) btnPrev.disabled = (p <= 1);
    if (btnNext) btnNext.disabled = (p >= TOTAL_PAGES);
  }

  // ======== RENDER ========
  function render(p) {
    const inner = qs(".page-inner");
    if (!inner) return;

    const idx = p - 1;

    // Nunca blanco: si falta, aviso institucional
    const html = pages[idx] ?? `
      <div class="kicker">Universidad del Este · FDCS · Guía del Estudiante · Edición 2026</div>
      <h1>Página no disponible</h1>
      <p class="small">
        Falta contenido para la página <strong>${p}</strong>. Revisá el array <strong>pages</strong> en <strong>app.js</strong>
        (debe tener ${TOTAL_PAGES} entradas).
      </p>
    `;

    // set contenido
    inner.innerHTML = html;

    // scroll arriba de la hoja para “sensación de página”
    inner.scrollTop = 0;

    // nav
    updateNav(p);
  }

  // ======== NAVEGACIÓN ========
  let currentPage = 1;
  let isTransitioning = false;

  async function goTo(p, direction = "next") {
    const next = clamp(Number(p) || 1, 1, TOTAL_PAGES);
    if (next === currentPage || isTransitioning) return;

    isTransitioning = true;
    currentPage = next;
    setParam("p", String(next));

    await runPageTransition(direction, () => {
      render(next);
    });

    isTransitioning = false;
  }

  function wireEvents() {
    const btnPrev = qs("#btnPrev");
    const btnNext = qs("#btnNext");

    if (btnPrev) {
      btnPrev.addEventListener("click", () => goTo(currentPage - 1, "prev"));
    }

    if (btnNext) {
      btnNext.addEventListener("click", () => goTo(currentPage + 1, "next"));
    }

    // Teclado: ← / → para pasar página (institucional, útil)
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goTo(currentPage - 1, "prev");
      if (e.key === "ArrowRight") goTo(currentPage + 1, "next");
    });
  }

  // ======== INIT ========
  function init() {
    ensureDOM();
    wireEvents();

    const p = clamp(Number(getParam("p") || 1), 1, TOTAL_PAGES);
    currentPage = p;

    // asegura v para cache bust
    if (!getParam("v")) setParam("v", BUILD_TAG);

    render(p);
  }

  // DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
