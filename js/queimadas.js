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
        text.textContent = " ENVIRONMENTAL";
    }, 4000);
    setTimeout(() => {
        text.textContent = " ENVIRONMENTAL";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);



//MOVIMENTAÇÃO SITE

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));


//JS DO MAPA 

!function(s){s(function(){function a(s){s.appendTo(s.parents("svg>g"))}s(".mapa-svg-estados").click(function(){s(this).siblings().removeClass("mapa-svg-estados-active"),s(this).addClass("mapa-svg-estados-active"),s(".class-select").val(s(this).attr("id")).trigger("change"),a(s(this))}),s(".class-select > option").each(function(){s(this).addClass(s(this).attr("value"))}),s(".class-select").change(function(){s("."+s(this).val()+"-class").siblings().removeClass("mapa-svg-estados-active"),s("."+s(this).val()+"-class").addClass("mapa-svg-estados-active"),a(s("."+s(this).val()+"-class"))})})}(jQuery);                         

function toggleEstado(estado) {
    var estadoElemento = document.querySelector('.' + estado);
    
    // Alterna a classe 'active' para mostrar ou esconder o conteúdo e o h1
    if (estadoElemento.classList.contains('active')) {
        estadoElemento.classList.remove('active');
    } else {
        // Remove a classe 'active' de todos os outros estados
        var estados = document.querySelectorAll('.txt-estados .estado');
        estados.forEach(function(est) {
            est.classList.remove('active');
        });

        // Adiciona a classe 'active' ao estado clicado
        estadoElemento.classList.add('active');
    }
}


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

// SCROOL DESCER AO CLICAR- ABA DESMATAMNTO


document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Calcula a posição com o offset de 80px acima
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});



