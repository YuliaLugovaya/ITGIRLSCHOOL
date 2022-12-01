let fio = document.querySelector('#fio');
let lastNameResult = document.querySelector('#lastName');
let personResult = document.querySelector('#name');
let patronymicResult = document.querySelector('#patronymic');

function check(){
    
    let error = document.querySelector('#errorFio');
    let arr = fio.value.split(" ");
  
    if(fio.value === ''){
      error.innerHTML = 'Укажите Фамилию, имя и отчество.';
      fio.style.border = '2px solid rgb(197, 0, 0)';
    }

    let lastName = arr[0];
    let person = arr[1];
    let patronymic = arr[2];

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