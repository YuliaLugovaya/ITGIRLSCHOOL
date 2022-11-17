//themes

function changeTheme(){
  if(document.querySelector('#theme').value == "white"){
    document.body.style.background = "#FFFFFF";
  }
  
  if(document.querySelector('#theme').value == "dark"){
    document.body.style.background = "#303030";
  }
  
  if(document.querySelector('#theme').value == "beidge"){
    document.body.style.background = "rgb(254, 252, 229)";
  }
  
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
  
  if (number2 === 0) {
    document.getElementById('result').innerHTML = 'На ноль делить нельзя!';
  } else {
    document.getElementById('result').innerHTML = result;
  }
  }

  function getReset() {
    document.querySelector("#number1").value="";
    document.querySelector("#number2").value="";
    document.querySelector("#result").innerHTML="Результат:";
}