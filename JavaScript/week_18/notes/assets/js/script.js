let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.result');
let error = document.querySelector('.error');
let dateNow = document.querySelector('.date');
let btn = document.querySelector(".btn");

let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
savedNotes.forEach(addDivItem);

function onDateChange() {
    return dateNow.value;
}

function addDivItem(txt) {
    result.innerHTML += `<div class="note"><p class="result__item">${txt}</p></div>`;
}

btn.addEventListener("click", () => {
    let txt = `${dateNow.value}\n\n ${newMessage.value}`;
    let validity = newMessage.validity;
    if(validity.valueMissing){
        error.innerHTML = 'Добавь заметку';
    } else {
        savedNotes.push(txt);

        localStorage.setItem("notes", JSON.stringify(savedNotes));
        newMessage.value = "";
        addDivItem(txt);
    } 
});

window.addEventListener('load', function (e) {
    let d = new Date();
    let day = d.getDate(); if (day<10) day='0'+day;
    let month = d.getMonth() + 1; if (month<10) month='0'+month;
    let year = d.getFullYear(); 
    dateNow.value = year+"-"+month+"-"+day;
}, false);