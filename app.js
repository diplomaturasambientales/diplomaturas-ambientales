const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const indicator = document.getElementById("page-indicator");

let current = 0;

function update(){
  pages.forEach((p,i)=>{
    p.classList.remove("active","flipped");
    if(i < current) p.classList.add("flipped");
    if(i === current) p.classList.add("active");
  });
  indicator.textContent = `Página ${current+1} de ${pages.length}`;
}

nextBtn.onclick = ()=>{
  if(current < pages.length-1){
    current++;
    update();
  }
};

prevBtn.onclick = ()=>{
  if(current > 0){
    current--;
    update();
  }
};

update();
