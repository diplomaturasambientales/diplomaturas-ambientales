(function(){
  const pages = Array.from(document.querySelectorAll('.page'));
  let current = 0; // number of flipped leaves
  const total = pages.length;

  function sync(){
    pages.forEach((p, i)=>{
      if(i < current) p.classList.add('flipped');
      else p.classList.remove('flipped');
      p.style.zIndex = (total - i);
    });
    document.getElementById('pageCounter').textContent =
      (current===0 ? 'Portada' : `Página ${current} de ${total}`);

    document.getElementById('btnPrev').disabled = (current===0);
    document.getElementById('btnNext').disabled = (current===total);
  }

  function go(n){
    current = Math.max(0, Math.min(total, n));
    sync();
  }

  function next(){ go(current+1); }
  function prev(){ go(current-1); }

  document.getElementById('btnNext').addEventListener('click', next);
  document.getElementById('btnPrev').addEventListener('click', prev);

  document.querySelector('.book').addEventListener('click', (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if(e.target.closest('a') || e.target.closest('button')) return;
    if(x > rect.width*0.55) next();
    else if(x < rect.width*0.45) prev();
  });

  window.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowRight' || e.key==='PageDown') next();
    if(e.key==='ArrowLeft' || e.key==='PageUp') prev();
    if(e.key==='Home') go(0);
    if(e.key==='End') go(total);
  });

  document.querySelectorAll('[data-goto]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const n = parseInt(a.getAttribute('data-goto'), 10);
      go(n);
    });
  });

  pages.forEach((p,i)=> p.style.zIndex = (total - i));
  sync();
})();