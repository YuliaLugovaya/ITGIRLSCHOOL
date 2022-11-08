//greeting message

function showMessage() {
  let person;
  let result;

  person = document.getElementById('person').value;
  
  if (person) {
    result = `Привет, ${person}!`;
  } else {
    result = 'Привет, Гость!';
  }

  document.getElementById('out').innerHTML = result;
}


//calculator

function addition(){
    let number1;
    let number2;
    let result;
  
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    result = number1 + number2;
  
    document.getElementById('result').innerHTML = result;
  }
  
  function subtraction(){
    let number1;
    let number2;
    let result;
  
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    result = number1 - number2;
  
    document.getElementById('result').innerHTML = result;
  }
  
  function multiplication(){
    let number1;
    let number2;
    let result;
  
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    result = number1 * number2;
  
    document.getElementById('result').innerHTML = result;
  }
  
  function division(){
    let number1;
    let number2;
    let result;
  
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    result = number1 / number2;
  
    document.getElementById('result').innerHTML = result;
  }

  //color-blocks

  function message(){
    let message = document.getElementById('message');
    message.style.background = 'burlywood';
  }

  function calculator(){
    let calculator = document.getElementById('calculator');
    calculator.style.background = 'burlywood';
  }
  