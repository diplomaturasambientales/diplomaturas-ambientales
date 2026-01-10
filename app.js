const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const indicator = document.getElementById("page-indicator");

let current = 0;
let animating = false;

// Debe coincidir con el CSS (transition de 1.25s)
const FLIP_MS = 1250;

function update(){
  pages.forEach((p, i) => {
    p.classList.remove("active", "flipped");
    if (i < current) p.classList.add("flipped");
    if (i === current) p.classList.add("active");
  });
  indicator.textContent = `Página ${current + 1} de ${pages.length}`;
}

function go(delta){
  if (animating) return;

  const next = current + delta;
  if (next < 0 || next >= pages.length) return;

  animating = true;
  current = next;
  update();

  window.setTimeout(() => { animating = false; }, FLIP_MS);
}

nextBtn.addEventListener("click", () => go(+1));
prevBtn.addEventListener("click", () => go(-1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") go(+1);
  if (e.key === "ArrowLeft") go(-1);
});

update();
