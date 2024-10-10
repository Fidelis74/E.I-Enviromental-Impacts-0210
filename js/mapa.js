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
