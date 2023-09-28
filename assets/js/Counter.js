
function atualizarContador() {
    const dataFinal = new Date('2023-12-31T22:00:00');
    const agora = new Date();
    const diferenca = dataFinal - agora;
  console.log(diferenca)
  
    if (diferenca <= 0) {
      clearInterval(intervalo);
      document.getElementById('yas').innerText = 'Contagem regressiva encerrada!';
      return;
    }
    else{
  
    const segundos = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundos / (3600 * 24));
    const horas = Math.floor((segundos % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
  
    const contadorTexto = `${dias} Dias ${horas} horas ${minutos} minutos ${segundosRestantes} segundos`;
    document.getElementById('yas').innerText = contadorTexto;
    }}

  const intervalo = setInterval(atualizarContador, 1000);