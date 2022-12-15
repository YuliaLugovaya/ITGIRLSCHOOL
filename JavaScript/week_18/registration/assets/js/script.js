let person = document.querySelector('#name');
let login = document.querySelector('#login');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let tel = document.querySelector('#tel');
let age = document.querySelector('#age');
let form = document.querySelector('.form__container');

let errorName = document.querySelector('#errorName');
let errorLogin = document.querySelector('#errorLogin');
let errorEmail = document.querySelector('#errorEmail');
let errorPassword = document.querySelector('#errorPassword');
let errorTel = document.querySelector('#errorTel');
let errorAge = document.querySelector('#errorAge');


function checkValidityPerson() {
  let validity = person.validity;

  if(validity.valueMissing) {
    errorName.innerHTML = 'Напишите, как Вас зовут.';
    person.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorName.innerHTML = '';
    person.style.border = '2px solid #acacac';
  }
}

function checkValidityLogin() {
  let validity = login.validity;

  if(validity.valueMissing) {
    errorLogin.innerHTML = 'Придумайте логин.';
    login.style.border = '2px solid rgb(197, 0, 0)';
  } else if(validity.patternMismatch){
    errorLogin.innerHTML = 'Логин может содержать только латинские буквы, цифры и должен быть длиной от 5 символов';
    login.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorLogin.innerHTML = '';
    login.style.border = '2px solid #acacac';
  }
}

function checkValidityEmail() {
  let validity = email.validity;

  if(validity.valueMissing) {
    errorEmail.innerHTML = 'Укажите свой адрес электронной почты.';
    email.style.border = '2px solid rgb(197, 0, 0)';
  } else if(validity.patternMismatch){
    errorEmail.innerHTML = 'Проверьте email. Он должен содержать символ @, а также точку в домене.';
    email.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorEmail.innerHTML = '';
    email.style.border = '2px solid #acacac';
  }
}

function checkValidityPassword() {
  let validity = password.validity;

  if(validity.valueMissing) {
    errorPassword.innerHTML = 'Вы забыли придумать пароль.';
    password.style.border = '2px solid rgb(197, 0, 0)';
  } else if (validity.tooShort){
    errorPassword.innerHTML = 'Слишком короткий пароль. Он должен содержать не менее 8 символов.';
    password.style.border = '2px solid rgb(197, 0, 0)';
  } else if (validity.patternMismatch){
    errorPassword.innerHTML = 'Пароль может содержать только латинские буквы или цифры';
    password.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorPassword.innerHTML = '';
    password.style.border = '2px solid #acacac';
  }
}

function checkValidityTel() {
  let validity = tel.validity;

  if(validity.valueMissing) {
    errorTel.innerHTML = 'Вы забыли придумать пароль.';
    tel.style.border = '2px solid rgb(197, 0, 0)';
  } else if (validity.patternMismatch){
    errorTel.innerHTML = 'Допустимые форматы номера телефона: +375XX******* или 80XX*******, где XX - код мобильного оператора (29 / 25 / 44 / 33), а ******* - номер телефона из 7 цифр.';
    tel.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorTel.innerHTML = '';
    tel.style.border = '2px solid #acacac';
  }
}

function checkValidityAge() {
  let validity = age.validity;

  if(validity.valueMissing) {
    errorAge.innerHTML = 'Вы кое-что забыли! Скажите, сколько вам лет.';
    age.style.border = '2px solid rgb(197, 0, 0)';
  } else if (validity.rangeUnderflow) {
    errorAge.innerHTML = 'Регистрация возможна при достижении возраста 14 лет';
    age.style.border = '2px solid rgb(197, 0, 0)';
  } else {
    errorAge.innerHTML = '';
    age.style.border = '2px solid #acacac';
  }
}

function checkErrors () {
  if(person.value !== '' && login.value !== '' && email.value !== '' && password.value.length >=6 && tel.value.length === 13 && age.value >=14){
    form.style.display = 'none';
    document.querySelector('.hello').innerHTML = `Добро пожаловать, ${person.value}!`;
  }
}

let btn = document.querySelector(".form__button");
btn.addEventListener("click", checkValidityPerson);
btn.addEventListener("click", checkValidityPassword);
btn.addEventListener("click", checkValidityLogin);
btn.addEventListener("click", checkValidityEmail);
btn.addEventListener("click", checkValidityTel);
btn.addEventListener("click", checkValidityAge);
btn.addEventListener("click", checkErrors);