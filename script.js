/* Botón cambiante: al hacer clic se agrega clase que cambia color y tamaño gradualmente */
document.addEventListener('DOMContentLoaded', function(){
  const changeBtn = document.getElementById('clickChangeBtn');
  if(changeBtn){
    changeBtn.addEventListener('click', function(){
      this.classList.toggle('clicked');
      // remueve auto después de 2.5s para poder volver a pulsar y ver animación otra vez
      setTimeout(()=>this.classList.remove('clicked'), 2500);
    });
  }

  // Ejemplo de texto con velocidad variable: añadimos clase fast o slow según condición
  const speedText = document.querySelector('.speed-text');
  if(speedText){
    // ciclo entre velocidades cada 4s (solo demostrativo)
    let state = 0;
    setInterval(()=>{
      speedText.classList.remove('fast','slow');
      if(state % 3 === 0) speedText.classList.add('fast');
      else if(state % 3 === 1) speedText.classList.add('slow');
      // else sin clase -> default
      state++;
    }, 4000);
  }

  // Reveal on scroll: hace que los artículos se deslicen lentamente hacia arriba cuando aparecen
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < viewportHeight - 80) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
