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

  let image = document.querySelectorAll('.image');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let photo = 0;
  
  prev.onclick = function(){
    image[photo].style.display = 'none';
    photo--;
    if(photo < 0) {
      photo = image.length - 1;
    }
    image[photo].style.display = 'block';
  }

  next.onclick = function(){
    image[photo].style.display = 'none';
    photo++;
    if(photo >= image.length) {
      photo = 0;
    }
    image[photo].style.display = 'block';
  }