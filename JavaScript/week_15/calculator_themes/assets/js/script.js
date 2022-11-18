//themes

function changeTheme(){
  if(document.querySelector('#theme').value == "white"){
    document.body.style.background = "#FFFFFF";
    document.querySelector('.header').style.background = "rgb(246, 246, 246)";
  }
  
  if(document.querySelector('#theme').value == "dark"){
    document.body.style.background = "#656565";
    document.querySelector('.header').style.background = "#303030";
  }
  
  if(document.querySelector('#theme').value == "beidge"){
    document.body.style.background = "rgb(253, 252, 240)";
    document.querySelector('.header').style.background = "rgb(255, 244, 215)";
  }
}

//form

function check(){
  let name = document.querySelector('#name');
  let login = document.querySelector('#login');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let tel = document.querySelector('#tel');
  let age = document.querySelector('#age');
  let form = document.querySelector('.form__container');

  if(name.value === ''){
    document.querySelector('#errorName').innerHTML = 'Напишите, как Вас зовут.';
  } else {
    document.querySelector('#errorName').innerHTML = '';
  }

  if(login.value === ''){
    document.querySelector('#errorLogin').innerHTML = 'Придумайте логин.';
  } else {
    document.querySelector('#errorLogin').innerHTML = '';
  }

  if(email.value === ''){
    document.querySelector('#errorEmail').innerHTML = 'Вы кое-что забыли! Укажите свой адрес электронной почты.';
  } else {
    document.querySelector('#errorEmail').innerHTML = '';
  }

  if(password.value.length < 6){
    document.querySelector('#errorPassword').innerHTML = 'Слишком короткий пароль. Он должен содержать не менее 6 символов.';
  } else {
    document.querySelector('#errorPassword').innerHTML = '';
  }

  if(tel.value.length < 13){
    document.querySelector('#errorTel').innerHTML = 'Кажется, в номере телефона ошибка. Введите номер телефона в формате +ХХХХХХХХХХХХ';
  } else {
    document.querySelector('#errorTel').innerHTML = '';
  }

  if(age.value ===''){
    document.querySelector('#errorAge').innerHTML = 'Вы кое-что забыли! Скажите, сколько вам лет.';
  } else if(age.value < 14) {
    document.querySelector('#errorAge').innerHTML = 'Регистрация возможна при достижении возраста 14 лет';
  } else {
    document.querySelector('#errorAge').innerHTML = '';
  }

  if(name.value !== '' && login.value !== '' && email.value !== '' && password.value.length >=6 && tel.value.length == 13 && age.value >=14){
    form.style.display = 'none';
    document.querySelector('.hello').innerHTML = `Добро пожаловать, ${name.value}!`;
  }
}

let btn = document.querySelector(".form__button");
btn.addEventListener("click", check);

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

