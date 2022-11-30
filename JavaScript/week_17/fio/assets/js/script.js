function check(){
    let fio = document.querySelector('#fio');
    let error = document.querySelector('#errorFio');
    let form = document.querySelector('.form__container');
  
    if(fio.value === ''){
      error.innerHTML = 'Укажите Фамилию, имя и отчество.';
      fio.style.border = '2px solid rgb(197, 0, 0)';
    }
  
    if(person.value !== '' && login.value !== '' && email.value !== '' && password.value.length >=6 && tel.value.length == 13 && age.value >=14){
      form.style.display = 'none';
      document.querySelector('.hello').innerHTML = `Добро пожаловать, ${person.value}!`;
    }
  }
  
  let btn = document.querySelector(".form__button");
  btn.addEventListener("click", check);