function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var obesityRange = document.querySelector('#obesity-range');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formatedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formatedImc;

  var i;
  var invalid = 'Valor inválido';
  var tooBelowWeight = 'Muito abaixo do peso';
  var belowWeight = 'Abaixo do peso';
  var normalWeight = 'Peso normal';
  var aboveWeight = 'Acima do peso';
  var obesityDegreeI = 'Obesidade Grau I';
  var obesityDegreeII = 'Obesidade Grau II';
  var obesityDegreeIII = 'Obesidade Grau III';

  if (imc < 16) {
    i = invalid;
  } else if (imc >= 16 && imc < 17) {
    i = tooBelowWeight;
  } else if (imc >= 17 && imc < 18.5) {
    i = belowWeight;
  } else if (imc >= 18.5 && imc < 25) {
    i = normalWeight;
  } else if (imc >= 25 && imc < 30) {
    i = aboveWeight;
  } else if (imc >= 30 && imc < 35) {
    i = obesityDegreeI;
  } else if (imc >= 35 && imc < 40) {
    i = obesityDegreeII;
  } else {
    i = obesityDegreeIII;
  }

  console.log(i);

  obesityRange.textContent = i;
}

start();

/* as linhas a seguir tornam o calculo instantaneo 
  conforme os valores são atualizados no input, tornando
  o botão Calcular IMC inútil
  
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  
  A função handleButtonClick neste ponto faz com que a
  tela já inicie calculando o imc
  handleButtonClick();*/
