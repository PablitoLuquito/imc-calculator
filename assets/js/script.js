let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let calcular = document.getElementById('calcular');
let verificacao = /[.\W]/

calcular.addEventListener('click', function(event) {
  event.preventDefault();
  calcularImc();
});

function calcularImc() {
  if (peso.value.length === 0 || altura.value.length === 0 || peso.value <= 0 || altura.value <= 0 || 
    verificacao.test(peso.value) || verificacao.test(altura.value)) {
    return alert('[ERRO] Verifique se os dados estão corretos.\nNecessário valores acima de 0.\nNão é permitido nenhum tipo de caracter especial.');
  } else {
    let msg = document.getElementById('msg');
    msg.classList.add('show')
    let resultado = (Number(peso.value) / ((Number(altura.value) / 100) ** 2)).toFixed(2);
    if (resultado < 18.5) {
      return msg.innerHTML = `IMC: ${resultado} = Abaixo do peso`;
    } else if (resultado <= 24.9) {
      return msg.innerHTML = `IMC: ${resultado} = Peso normal`;
    } else if (resultado <= 29.9) {
      return msg.innerHTML = `IMC: ${resultado} = Sobrepeso`;
    } else if (resultado <= 34.9) {
      return msg.innerHTML = `IMC: ${resultado} = Obesidade grau 1`;
    } else if (resultado <= 39.9) {
      return msg.innerHTML = `IMC: ${resultado} = Obesidade grau 2`;
    } else {
      return msg.innerHTML = `IMC: ${resultado} = Obesidade grau 3`;
    }
  }
}
