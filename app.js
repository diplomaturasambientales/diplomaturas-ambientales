(() => {
  const TOTAL = 13;

  // Páginas (1..13)
  const pages = [
    {
      title: "Índice",
      kicker: "NAVEGACIÓN",
      body: `
        <div class="kicker">NAVEGACIÓN</div>
        <h2>Índice</h2>
        <p>Esta guía está organizada en 13 páginas. Podés avanzar con <b>Siguiente</b>, retroceder con <b>Anterior</b>, o saltar desde el índice lateral.</p>
        <div class="box">
          <b>Uso rápido</b>
          <ul>
            <li><b>← / →</b>: retroceder / avanzar</li>
            <li><b>Home</b>: ir al inicio</li>
            <li><b>End</b>: ir al final</li>
          </ul>
        </div>
        <div class="hr"></div>
        <div class="badgeRow">
          <span class="badge">Campus Moodle</span>
          <span class="badge">Trabajos prácticos</span>
          <span class="badge">Canales institucionales</span>
          <span class="badge">Evaluación</span>
        </div>
      `
    },
    {
      title: "Presentación",
      kicker: "DIPLOMATURAS AMBIENTALES · GUÍA DEL ESTUDIANTE",
      body: `
        <div class="kicker">DIPLOMATURAS AMBIENTALES · GUÍA DEL ESTUDIANTE</div>
        <h2>Presentación</h2>
        <p>Esta guía fue elaborada para acompañar a las y los estudiantes de las Diplomaturas Ambientales de la Universidad del Este durante toda la cohorte.</p>
        <p>Su objetivo es brindar instrucciones claras, operativas y accesibles sobre el uso del campus virtual, la organización académica, los canales de comunicación y las instancias de evaluación.</p>
      `
    },
    {
      title: "Acceso al campus",
      kicker: "CAMPUS VIRTUAL",
      body: `
        <div class="kicker">CAMPUS VIRTUAL</div>
        <h2>Acceso al campus</h2>
        <p>El acceso se realiza con el usuario y contraseña informados por la Universidad del Este. Si aún no contás con credenciales, verificá tu correo (incluyendo “Spam/No deseado”).</p>
        <div class="box">
          <b>Recomendación</b>
          <ul>
            <li>Guardá usuario y contraseña en un gestor confiable.</li>
            <li>Usá el mismo navegador en PC para subir trabajos (Chrome/Edge recomendado).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Si no puedo ingresar",
      kicker: "SOPORTE",
      body: `
        <div class="kicker">SOPORTE</div>
        <h2>Si no puedo ingresar</h2>
        <p>Antes de pedir asistencia, probá estas acciones (en orden):</p>
        <ul>
          <li>Revisar mayúsculas/minúsculas y teclado (bloq. mayús / idioma).</li>
          <li>Actualizar la página (Ctrl+R) y reintentar.</li>
          <li>Abrir en modo incógnito o cambiar de navegador.</li>
          <li>Si el problema persiste, solicitar restablecimiento de contraseña por el canal institucional.</li>
        </ul>
        <div class="box">
          <b>Dato útil</b>
          <p>Cuando informes el inconveniente, incluí: nombre completo, DNI, diplomatura, captura del error y dispositivo (PC/celular).</p>
        </div>
      `
    },
    {
      title: "Estructura del campus",
      kicker: "ORGANIZACIÓN",
      body: `
        <div class="kicker">ORGANIZACIÓN</div>
        <h2>Estructura del campus</h2>
        <p>El campus se organiza por <b>unidades</b> y <b>seminarios temáticos</b>. Dentro de cada unidad vas a encontrar: materiales, clase grabada (cuando corresponda), y el espacio para entregar el trabajo práctico.</p>
        <p>La navegación está pensada para que avances de forma progresiva, respetando la concatenación entre unidades.</p>
      `
    },
    {
      title: "Clases sincrónicas",
      kicker: "CLASES",
      body: `
        <div class="kicker">CLASES</div>
        <h2>Clases sincrónicas</h2>
        <p>Las clases se dictan en modalidad sincrónica según el cronograma oficial. Se recomienda ingresar con 5 minutos de anticipación para verificar audio y conexión.</p>
        <div class="box">
          <b>Buena práctica</b>
          <p>Usá auriculares y mantené el micrófono silenciado cuando no estés interviniendo.</p>
        </div>
      `
    },
    {
      title: "Clases y grabaciones",
      kicker: "GRABACIONES",
      body: `
        <div class="kicker">GRABACIONES</div>
        <h2>Clases y grabaciones</h2>
        <p>Las clases sincrónicas quedan grabadas.</p>
        <p>Las grabaciones se publican en el campus durante la semana posterior al dictado de la clase.</p>
        <p>Se encuentran dentro del tópico correspondiente a cada unidad.</p>
      `
    },
    {
      title: "Materiales",
      kicker: "RECURSOS",
      body: `
        <div class="kicker">RECURSOS</div>
        <h2>Materiales</h2>
        <p>En cada unidad vas a encontrar el material de lectura y/o apoyo. El objetivo es que tengas una base clara para seguir el desarrollo de la clase y resolver las consignas.</p>
        <div class="box">
          <b>Orden recomendado</b>
          <ul>
            <li>Leer el material base.</li>
            <li>Ver la clase (en vivo o grabada).</li>
            <li>Revisar el espacio de consignas y entregas.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Trabajos prácticos",
      kicker: "EVALUACIÓN",
      body: `
        <div class="kicker">EVALUACIÓN</div>
        <h2>Trabajos prácticos</h2>
        <p>Los trabajos prácticos se entregan exclusivamente a través del campus, en el enlace de la unidad correspondiente, dentro del plazo indicado.</p>
        <div class="box">
          <b>Formato</b>
          <ul>
            <li>Archivo PDF o Word, según lo indicado en la consigna.</li>
            <li>Nombre sugerido: <b>Apellido_Nombre_TP_UnidadX</b>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Cómo subir un TP",
      kicker: "ENTREGA",
      body: `
        <div class="kicker">ENTREGA</div>
        <h2>Cómo subir un TP</h2>
        <p>Ingresá a la unidad, ubicá el recurso “Entrega TP” y seguí estos pasos:</p>
        <ul>
          <li>Adjuntar archivo.</li>
          <li>Verificar que el archivo quede visible en pantalla.</li>
          <li>Confirmar envío (si el campus lo solicita).</li>
        </ul>
        <div class="box">
          <b>Importante</b>
          <p>Si no confirmás el envío cuando el sistema lo requiere, puede quedar como “borrador” y no registrarse la entrega.</p>
        </div>
      `
    },
    {
      title: "Canales institucionales",
      kicker: "COMUNICACIÓN",
      body: `
        <div class="kicker">COMUNICACIÓN</div>
        <h2>Canales institucionales</h2>
        <p>Para consultas académicas y operativas, utilizá siempre los canales definidos por la diplomatura (campus, correo institucional u otros medios oficiales informados).</p>
        <p>Evitar canales informales mejora la trazabilidad y acelera la respuesta.</p>
      `
    },
    {
      title: "Cierre institucional",
      kicker: "CIERRE",
      body: `
        <div class="kicker">CIERRE</div>
        <h2>Cierre institucional</h2>
        <p>Esta guía busca sostener una cohorte organizada, autónoma y previsible. El correcto uso del campus virtual y el respeto por los canales institucionales contribuyen al buen desarrollo académico de las Diplomaturas Ambientales.</p>
        <div class="hr"></div>
        <p style="color:#6b7280;font-size:13px;margin-top:12px;">UDE · FDCS · 2026</p>
      `
    }
  ];

  let idx = 0; // 0..12

  const pageBody = document.getElementById("pageBody");
  const pageMeta = document.getElementById("pageMeta");
  const pageIndicator = document.getElementById("pageIndicator");
  const sideNav = document.getElementById("sideNav");

  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  function renderNav(){
    if(!sideNav) return;
    sideNav.innerHTML = "";
    pages.forEach((p, i) => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = `${i+1}. ${p.title}`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        idx = i;
        render();
      });
      sideNav.appendChild(a);
    });
  }

  function render(){
    const p = pages[idx];
    pageBody.innerHTML = p.body;

    pageMeta.textContent = `Hoja ${idx+1} de ${TOTAL}`;
    pageIndicator.textContent = `Página ${idx+1} de ${TOTAL}`;

    // activar item índice lateral
    if(sideNav){
      [...sideNav.querySelectorAll("a")].forEach((a, i) => {
        a.classList.toggle("active", i === idx);
      });
    }

    // botones
    btnPrev.disabled = (idx === 0);
    btnNext.disabled = (idx === TOTAL-1);

    btnPrev.style.opacity = btnPrev.disabled ? "0.45" : "1";
    btnNext.style.opacity = btnNext.disabled ? "0.45" : "1";
    btnPrev.style.cursor = btnPrev.disabled ? "not-allowed" : "pointer";
    btnNext.style.cursor = btnNext.disabled ? "not-allowed" : "pointer";
  }

  function prev(){
    if(idx > 0){ idx--; render(); }
  }
  function next(){
    if(idx < TOTAL-1){ idx++; render(); }
  }

  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);

  // teclado
  window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") prev();
    if(e.key === "ArrowRight") next();
    if(e.key === "Home"){ idx = 0; render(); }
    if(e.key === "End"){ idx = TOTAL-1; render(); }
  });

  renderNav();
  render();
})();
