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

//API DE CONVERSÃO E PIXEL
const https = require('https');

const data = JSON.stringify({
  event_name: 'CompleteRegistration',
  event_time: Math.floor(new Date() / 1000),
  action_source: 'website',
  event_source_url: 'http://www.exemplo.com/pagina-de-obrigado',
  user_data: {
    em: 'HASHED_EMAIL', // Email do usuário com hash SHA-256
    ph: 'HASHED_PHONE'  // Telefone do usuário com hash SHA-256
  },
  custom_data: {
    currency: 'USD',
    value: 0.00
  }
});

const options = {
  hostname: 'graph.facebook.com',
  path: `/v11.0/SEU_PIXEL_ID/events?access_token=SEU_ACCESS_TOKEN`, // Substitua 'SEU_PIXEL_ID' e 'SEU_ACCESS_TOKEN'
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();