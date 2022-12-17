let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.field');
let person = document.querySelector('#person');
let personValue;
let error = document.querySelector('.error');
let btn = document.querySelector(".button");

//localStorage
let savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
savedMessages.forEach(addDivItem);

//запись результата
function addDivItem(displayedMessage) {
    result.innerHTML += `<div class="note"><p class="result__item">${displayedMessage}</p></div>`;
}

//добавление сообщения, проверка на спам и валидность
btn.addEventListener("click", () => {
    let newMessageValue = newMessage.value;
    personValue = person.value;
    let displayedMessage = personValue + ':' + " " + newMessageValue;

    let validity = newMessage.validity;
    if(validity.valueMissing){
        error.innerHTML = 'Добавь комментарий';
    } else {
        
        if(displayedMessage.search('/viagra/i') || displayedMessage.search('/XXX/i')){
        let filter = '***';
        let messageFilter = displayedMessage.replace(/viagra/gi, filter);
        displayedMessage = messageFilter.replace(/XXX/gi, filter);
        savedMessages.push(displayedMessage);
    } 

        localStorage.setItem("messages", JSON.stringify(savedMessages));
        newMessage.value = "";
        addDivItem(displayedMessage);
    }
});

//сохранить имя
let addYourName = document.querySelector('.add__name');
let save = document.querySelector('.save');
save.addEventListener('click', addName);

function addName () {
    personValue = person.value;
        if(localStorage.getItem('name') === null){
            localStorage.setItem('name', personValue);
            addYourName.style.display = 'none';
            person.style.border = 'none';
            save.style.display = 'none';
    } 
}

//сохранить аватар
let woman = document.querySelector('#woman');
let men = document.querySelector('#men');
let avatarChange = document.querySelector('.avatar__change');

function selectWoman() {
    if (woman){
        men.style.display = 'none';
        avatarChange.style.display = 'none';
    }
    if(localStorage.getItem('avatarWoman') === null){
        localStorage.setItem('avatarWoman', woman.src);
        avatarChange.style.display = 'none';
} 
}

function selectMen () {
    if (men){
        woman.style.display = 'none';
        avatarChange.style.display = 'none';
    } 
    if(localStorage.getItem('avatarMen') === null){
        localStorage.setItem('avatarMen', men.src);
        avatarChange.style.display = 'none';
} 
}

//удалить персональные данные
let remove = document.querySelector('.remove');
remove.addEventListener('click', removeNameAvatar);

function removeNameAvatar () {
    localStorage.removeItem('name');
    localStorage.removeItem('avatarWoman');
    localStorage.removeItem('avatarMen');
        addYourName.style.display = 'block';
        person.value = "";
        person.style.border = '2px solid #acacac';
        save.style.display = 'block';
        men.style.display = 'block';
        woman.style.display = 'block';
        avatarChange.style.display = 'block';
}

//удалить сообщения
function removeMessages () {
    localStorage.removeItem('messages');
    result.innerHTML = '';
}
let buttonRemove = document.querySelector('.button__remove');
buttonRemove.addEventListener('click', removeMessages);

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
    if(localStorage.getItem('name') !== null){
        person.value = localStorage.getItem('name');
        addYourName.style.display = 'none';
        person.style.border = 'none';
        save.style.display = 'none';
    }

    if(localStorage.getItem('avatarWoman') !== null){
        woman.src = localStorage.getItem('avatarWoman');
        men.style.display = 'none';
        avatarChange.style.display = 'none';
    }

    if(localStorage.getItem('avatarMen') !== null){
        men.src = localStorage.getItem('avatarMen');
        woman.style.display = 'none';
        avatarChange.style.display = 'none';
    }
})