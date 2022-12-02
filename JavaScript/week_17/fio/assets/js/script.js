let fio = document.querySelector('#fio');
let lastNameResult = document.querySelector('#lastName');
let personResult = document.querySelector('#name');
let patronymicResult = document.querySelector('#patronymic');

function check(){
  let fioValue = fio.value;
  let fioLower = fioValue.toLowerCase();
  let fioTrim = fioLower.trim(fioLower);
  let arr = fioTrim.split(" ").filter(el => el).join(" ");
  let array = arr.split(" ");
  let lastName = array[0];
  let person = array[1];
  let patronymic = array[2];

  lastName = lastName[0].toUpperCase() + lastName.slice(1, );
  person = person[0].toUpperCase() + person.slice(1, );
  patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, );

  lastNameResult.value = lastName;
  personResult.value = person;
  patronymicResult.value = patronymic;
}

  function clear(){
    fio.value = '';
    lastNameResult.value = '';
    personResult.value = '';
    patronymicResult.value = '';
  }
  
  let btn = document.querySelector(".form__button");
  btn.addEventListener("click", check);

  let reset = document.querySelector(".form__button_reset");
  reset.addEventListener("click", clear);