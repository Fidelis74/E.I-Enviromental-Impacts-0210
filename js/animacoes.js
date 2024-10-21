
window.revelar = ScrollReveal({reset: true})

//IMAGEM PRINCIPAL E.D 
  ScrollReveal().reveal('.txt-principal-topo1', {
    duration: 2000,         // Duração da animação (em milissegundos)
    distance: '90px',       // Distância que o elemento se move
    origin: 'bottom',       // Ponto de origem do movimento
    
  });

  ScrollReveal().reveal('.txt-principal-topo2', {
    duration: 2000,         // Duração da animação (em milissegundos)
    distance: '90px',       // Distância que o elemento se move
    origin: 'bottom', 
    delay:500      // Ponto de origem do movimento
    
  });

  //TOPO DO SITE - SOBRE NOS HOME 


revelar.reveal('.efeito-txt-topo', {
  duration: 2000,
  distance: '90px',
  origin: 'bottom'  // ou 'top', 'left', 'right' dependendo da direção desejada
})

ScrollReveal().reveal('.efeito-img-topo', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '200px',       // Distância que o elemento se move
  origin: 'bottom',       // Ponto de origem do movimento
  
});

//SLIDER - MATERIA DESMATAMENTO,QUEIMADAS E HIDRICO
  

  ScrollReveal().reveal('.slide-mais-1', {
    duration: 1500,
    distance: '90px',
    origin: 'left',
    delay: 200,
    reset: true 
  });
  
  ScrollReveal().reveal('.slide-mais-2', {
    duration: 1500,
    distance: '90px',
    origin: 'left',
    delay: 300,
    reset: true 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const imgMaisElement = document.querySelector('.img-mais');
    if (imgMaisElement) {
        imgMaisElement.style.visibility = 'visible'; // Garante que a imagem está visível
        
        // Aplicando ScrollReveal
        ScrollReveal().reveal('.slide-mais-3', {
            duration: 1500,
            distance: '90px',
            origin: 'left',
            delay: 300,
            reset: true 
        });
    }
});
//todos os titulos
ScrollReveal().reveal('.titulo-home', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'right', //top ou bottom       // Ponto de origem do movimento
  
});

ScrollReveal().reveal('.texto-home', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'left', //top ou bottom       // Ponto de origem do movimento
  
});


//QUIZ HOME 

ScrollReveal().reveal('.quiz-vd', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'bottom', //top ou bottom       // Ponto de origem do movimento
  
});

//txt mapa 
ScrollReveal().reveal('.mapa-txt', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'right', //top ou bottom       // Ponto de origem do movimento
  delay:500
});
//video mapa
ScrollReveal().reveal('.mapa-vd', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'left', //top ou bottom       // Ponto de origem do movimento
  delay:500
});

// Video final home
// Video final home
// Função para verificar se o elemento está visível no viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Video final home
ScrollReveal().reveal('.vd-1', {
  duration: 1000,
  distance: '90px',
  origin: 'left',
  delay: 500,
  reset: false,  // Sem reset para não animar repetidamente ao rolar
  afterReveal: function(el) {
    // Detecta rolagem e ajusta visibilidade com base na posição do elemento
    window.addEventListener('scroll', function() {
      if (isElementInViewport(el)) {
        el.style.transition = 'opacity 1s ease';  // Transição suave ao reaparecer
        el.style.opacity = '1';  // Reaparece quando está no viewport
      } else {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '0';  // Some quando sai do viewport
      }
    });
  }
});

ScrollReveal().reveal('.vd-2', {
  duration: 2000,
  distance: '90px',
  origin: 'left',
  delay: 800,
  reset: false,
  afterReveal: function(el) {
    window.addEventListener('scroll', function() {
      if (isElementInViewport(el)) {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '1';
      } else {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '0';
      }
    });
  }
});

ScrollReveal().reveal('.vd-3', {
  duration: 3000,
  distance: '90px',
  origin: 'left',
  delay: 1100,
  reset: false,
  afterReveal: function(el) {
    window.addEventListener('scroll', function() {
      if (isElementInViewport(el)) {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '1';
      } else {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '0';
      }
    });
  }
});

//ABA DESMATAMENTO

ScrollReveal().reveal('.txt', {
  duration: 1000,
  distance: '30px',
  origin: 'top',
  delay: 400,
  reset: true,
 
});


ScrollReveal().reveal('.artigo-movimentacao', {
  duration: 1000,
  distance: '90px',
  origin: 'top',
  delay: 400,
  reset: true,
 
});

//ABA MAPA

ScrollReveal().reveal('.select-box-map', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'bottom', //top ou bottom       // Ponto de origem do movimento
  delay:200
});

ScrollReveal().reveal('.map-movi', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'bottom', //top ou bottom       // Ponto de origem do movimento
  delay:400
});

ScrollReveal().reveal('.p-map1', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'bottom', //top ou bottom       // Ponto de origem do movimento
  delay:600
});

ScrollReveal().reveal('.p-map2', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'bottom', //top ou bottom       // Ponto de origem do movimento
  delay:800
});

//ABA QUIZ

//VIDEO AULA 


//IMPACTOS AMBIENTAIS 
ScrollReveal().reveal('.titulo-impacto-movi', {
  duration: 2000,         // Duração da animação (em milissegundos)
  distance: '90px',       // Distância que o elemento se move
  origin: 'left ', //top ou bottom       // Ponto de origem do movimento
  reset: true // Impede que a animação seja refeita ao rolar a página
});


ScrollReveal().reveal('.mov-vd-1', {
  duration: 1000,
  distance: '90px',
  origin: 'left',
  delay: 500,
  reset: false, 
  afterReveal: function(el) {
    el.style.visibility = 'visible';  // Força visibilidade
    el.style.opacity = '1';  // Garante que a opacidade seja 1
  }
});



  //SOBRE

  ScrollReveal().reveal('.img-movi-sobre', {
    duration: 2000,    // Duração da animação (em milissegundos)
    distance: '90px',  // Distância que o elemento se move
    origin: 'bottom',    // Sem espaço após 'left' 
  });
  
  ScrollReveal().reveal('.txt-movi-sobre', {
    duration: 2000,    // Duração da animação (em milissegundos)
    distance: '90px',  // Distância que o elemento se move
    origin: 'bottom',    // Sem espaço após 'left' 
  });

  

  ScrollReveal().reveal('.principios-objetivo-mov', {
    duration: 2000,    // Duração da animação (em milissegundos)
    distance: '90px',  // Distância que o elemento se move
    origin: 'bottom',    // Sem espaço após 'left' 
  });

  //parte branca
  ScrollReveal().reveal('.mov-img', {
    duration: 3000,    // Duração da animação (em milissegundos)
    distance: '90px',  // Distância que o elemento se move
    origin: 'bottom',    // Sem espaço após 'left' 
  });

  //NOSSO TIME

  ScrollReveal().reveal('.coluna1-mov', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom',
    beforeReveal: function (el) {
      console.log('Revelando: ', el); // Para ver se o elemento é identificado
    }
  });

  ScrollReveal().reveal('.coluna2-mov', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom',
    delay:500,
    beforeReveal: function (el) {
      console.log('Revelando: ', el); // Para ver se o elemento é identificado
    }
    
  });
  
