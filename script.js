/* Interactividad ligera: botón cambiable y reveal on scroll, velocidad de texto */
document.addEventListener('DOMContentLoaded', function(){
  // Botón cambiable (clic)
  const changeBtn = document.getElementById('clickChangeBtn');
  if(changeBtn){
    changeBtn.addEventListener('click', function(){
      this.classList.add('clicked');
      setTimeout(()=> this.classList.remove('clicked'), 2200);
    });
  }

  // Texto velocidad variable: alterna entre fast/slow/default
  const speedText = document.querySelector('.speed-text');
  if(speedText){
    let state = 0;
    setInterval(()=>{
      speedText.classList.remove('fast','slow');
      if(state % 3 === 0) speedText.classList.add('fast');
      else if(state % 3 === 1) speedText.classList.add('slow');
      state++;
    }, 4000);
  }

  // Reveal on scroll (simple, eficiente)
  const revealElems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});
  revealElems.forEach(el => observer.observe(el));
});
