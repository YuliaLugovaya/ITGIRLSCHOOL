let messages = [];
let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.field');
let person = document.querySelector('#person');

function checkSpam() {
    let newMessageValue = newMessage.value;
    newMessage.value = '';
    messages.push(newMessageValue);
    result.innerHTML = '';

    for (let message of messages) {
        if(message.search('/viagra/i') || message.search('/XXX/i') || message.search('/XXX/i')){
            let filter = '***';
            let messageFilter = message.replace(/viagra/gi, filter);
            let messageFilterTwo = messageFilter.replace(/XXX/gi, filter);
            let messageResult = messageFilterTwo.replace(/XXX/gi, filter);
            result.innerHTML += `<div><p class="result">${person.value}: ${messageResult}</p></div>`;
        } 
    }       
}

function checkMessage () {
    let personValue = person.value;
    if(localStorage.getItem('name') === null){
        localStorage.setItem('name', personValue);
    }
}

let btn = document.querySelector(".button");
btn.addEventListener("click", checkSpam);
btn.addEventListener("click", checkMessage);

document.addEventListener('DOMContentLoaded', function (event) {
    if(localStorage.getItem('name') !== null){
        person.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('comment') !== null){
        newMessage.value = localStorage.getItem('comment');
    }
})