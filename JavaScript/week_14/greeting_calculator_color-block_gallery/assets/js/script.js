//greeting message

let showMessage = () => {
  let person;
  let output;

  person = document.getElementById('person').value;
  
  if (person) {
    output = `Привет, ${person}!`;
  } else {
    output = 'Привет, Гость!';
  }

  document.getElementById('out').innerHTML = output;
}

//calculator

function addition(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 + number2;
  
    document.getElementById('result').innerHTML = result;
  }
  
  function subtraction(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 - number2;

    document.getElementById('result').innerHTML = result;
  }
  
  function multiplication(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 * number2;

    document.getElementById('result').innerHTML = result;
  }
  
  function division(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 / number2;
  
    document.getElementById('result').innerHTML = result;
  }

  function getReset() {
    document.querySelector("#number1").value="";
    document.querySelector("#number2").value="";
    document.querySelector("#result").innerHTML="Результат:";
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