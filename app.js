(function () {
  const pages = Array.from(document.querySelectorAll(".page"));
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const counter = document.getElementById("counter");

  const TOTAL = pages.length; // debe ser 13

  // índice por querystring ?p=#
  const url = new URL(window.location.href);
  let current = parseInt(url.searchParams.get("p") || "1", 10);
  if (Number.isNaN(current) || current < 1) current = 1;
  if (current > TOTAL) current = TOTAL;

  function render() {
    pages.forEach((p, i) => {
      p.classList.toggle("is-active", i === (current - 1));
    });

    if (counter) counter.textContent = `Página ${current} de ${TOTAL}`;

    btnPrev.disabled = current === 1;
    btnNext.disabled = current === TOTAL;

    // actualiza URL sin recargar
    const u = new URL(window.location.href);
    u.searchParams.set("p", String(current));
    window.history.replaceState({}, "", u.toString());
  }

  function go(delta) {
    const next = current + delta;
    if (next < 1 || next > TOTAL) return;
    current = next;
    render();
  }

  btnPrev.addEventListener("click", () => go(-1));
  btnNext.addEventListener("click", () => go(+1));

  // Teclado
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(+1);
  });

  render();
})();
