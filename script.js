// MOSTRAR BLOCO 1 DA ÁREA DE LAZER
function toggleContent() {
  const conteudo = document.getElementById('conteudo');
  conteudo.classList.toggle('mostrar');
}
// MOSTRAR BLOCO 2 DOS DIFERENCIAIS
function toggleContent2() {
  const conteudo = document.getElementById('conteudo2');
  conteudo.classList.toggle('mostrar');
}
//MOSTRAR BLOCO 3 DOS APARTAMENTOS
function toggleContent3() {
  const conteudo = document.getElementById('conteudo3');
  conteudo.classList.toggle('mostrar');
}
//CARROSSEL
document.addEventListener('DOMContentLoaded', function() {
  window.carousel = new Swipe(document.getElementById('carousel'), {
      startSlide: 0,
      speed: 400,
      auto: 3000,
      draggable: true,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      callback: function(index, elem) {},
      transitionEnd: function(index, elem) {}
  });
});

//DESLIZA PARA A SESSÃO CADASTRO
document.getElementById('scrollButton').addEventListener('click', function() {
  document.getElementById('cadastro').scrollIntoView({ 
      behavior: 'smooth' 
  });
});

document.getElementById('scrollButton2').addEventListener('click', function() {
  document.getElementById('cadastro').scrollIntoView({ 
      behavior: 'smooth' 
  });
});

document.getElementById('scrollButton3').addEventListener('click', function() {
  document.getElementById('cadastro').scrollIntoView({ 
      behavior: 'smooth' 
  });
});
