const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


/*EFEITO CARACTER- SOBRE E.I */

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " ENVIRONMENTAL ";
    }, 0);
    setTimeout(() => {
        text.textContent = " DISASTER";
    }, 4000);
    setTimeout(() => {
        text.textContent = " E.D";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);




/**NAV */
$(document).ready(function() {
    $(window).on("scroll", function() {
      var header = $("#header");
      if ($(window).scrollTop() > 300) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    });
  });


  
  //CARROSEL APRENDA MAIS 
  //ROLAGEM AUTOMATICA
  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-40525870-5');

     //ROLAGEM AUTOMATICA
     function initializeSlider(sliderId) {
        const track = document.getElementById(sliderId);
      
        let autoSliderInterval = null;
        let isAnimating = false;
      
        const autoMoveSlider = () => {
          if (isAnimating) return;
          isAnimating = true;
      
          let currentPercentage = parseFloat(track.dataset.percentage) || 0;
          const nextPercentage = currentPercentage - 20;
      
          if (nextPercentage <= -80) {
            track.dataset.percentage = "0";
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
          track.dataset.percentage = "0";
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
          const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -80);
      
          track.dataset.percentage = nextPercentage;
          track.style.transform = `translateX(${nextPercentage}%)`;
        };
      
        // Eventos de mouse e touch só para este slider
        track.addEventListener("mousedown", (e) => handleOnDown(e));
        track.addEventListener("mouseup", () => handleOnUp());
        track.addEventListener("mousemove", (e) => handleOnMove(e));
      
        track.addEventListener("touchstart", (e) => handleOnDown(e));
        track.addEventListener("touchend", () => handleOnUp());
        track.addEventListener("touchmove", (e) => handleOnMove(e));
      
        // Inicializa o slider e o intervalo automático ao carregar a página
        window.addEventListener("load", resetSlider);
      }
      
      // Inicializa ambos os sliders de forma independente
      initializeSlider("slidermais-1");
      initializeSlider("slidermais-2");
      initializeSlider("slidermais-home");

        //PLAY AUTOMATICO DO VIDEO 
        // Seleciona o vídeo
  const video = document.getElementById('quizVideo');

  // Configura o IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Se o vídeo está visível na tela, inicie a reprodução
        video.play();
      } else {
        // Se o vídeo não está mais visível, pause a reprodução
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // O vídeo precisa estar 50% visível na tela
  });

  // Aplica o observer ao vídeo
  observer.observe(video);
  //FINAL PLAY AUTOMATICO


