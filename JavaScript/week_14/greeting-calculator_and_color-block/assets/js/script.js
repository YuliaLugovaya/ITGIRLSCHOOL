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

  function select(sender) {
    sender.classList.add('selected');
    
  }

  //gallery

  let photo = document.querySelectorAll('#gallery__photos .gallery__item img');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let i = 0;
  
  prev.onclick = function(){
    photo[i].style.display = 'none';
    i--;
    if(i < 0) {
      i = photo.length - 1;
    }
    photo[i].style.display = 'block';
  }

  next.onclick = function(){
    photo[i].style.display = 'none';
    i++;
    if(i >= photo.length) {
      i = 0;
    }
    photo[i].style.display = 'block';
  }