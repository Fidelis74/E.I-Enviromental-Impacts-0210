function initializeSlider(sliderId) {
    const track = document.getElementById(sliderId);
  
    let autoSliderInterval = null;
    let isAnimating = false;
  
    const autoMoveSlider = () => {
      if (isAnimating) return;
      isAnimating = true;
  
      let currentPercentage = parseFloat(track.dataset.percentage) || 0;
      const nextPercentage = currentPercentage - 20;  // Mover para a esquerda
  
      if (nextPercentage < -60) {
        track.dataset.percentage = "0";  // Volta para o primeiro slide
      } else {
        track.dataset.percentage = nextPercentage;
      }
  
      track.style.transition = "transform 1s ease";
      track.style.transform = `translateX(${track.dataset.percentage}%)`;
  
      setTimeout(() => {
        isAnimating = false;
        autoMoveSlider();
      }, 2000);
    };
  
    const startAutoMove = () => {
      if (!autoSliderInterval) {
        autoSliderInterval = setTimeout(autoMoveSlider, 2000);
      }
    };
  
    const resetSlider = () => {
      track.dataset.percentage = "0";  // Começa pelo primeiro slide à esquerda
      track.style.transition = "none";
      track.style.transform = `translateX(${track.dataset.percentage}%)`;
      isAnimating = false;
      clearTimeout(autoSliderInterval);
      autoSliderInterval = null;
      startAutoMove();
    };
  
    const handleOnDown = (e) => {
      clearTimeout(autoSliderInterval);
      track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
    };
  
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
      startAutoMove();
    };
  
    const handleOnMove = (e) => {
      if (!track.dataset.mouseDownAt || track.dataset.mouseDownAt === "0") return;
  
      const clientX = e.clientX || e.touches[0].clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
      const maxDelta = window.innerWidth;
  
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -60);
  
      track.dataset.percentage = nextPercentage;
      track.style.transform = `translateX(${nextPercentage}%)`;
    };
  
    // Eventos de mouse e touch
    track.addEventListener("mousedown", (e) => handleOnDown(e));
    track.addEventListener("mouseup", () => handleOnUp());
    track.addEventListener("mousemove", (e) => handleOnMove(e));
  
    track.addEventListener("touchstart", (e) => handleOnDown(e));
    track.addEventListener("touchend", () => handleOnUp());
    track.addEventListener("touchmove", (e) => handleOnMove(e));
  
    // Inicializa o slider ao carregar a página
    window.addEventListener("load", resetSlider);
  }
  
  // Inicializa o slider
  initializeSlider("slideraula-1");
  