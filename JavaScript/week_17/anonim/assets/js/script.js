let messages = [];
let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.field');


function addMessage() {
    let newMessageValue = newMessage.value;
    newMessage.value = '';
    messages.push(newMessageValue);
    result.innerHTML = '';
    for (let message of messages) {
        result.innerHTML += `<div><p>${message}</p></div>`;
        }     
}

let btn = document.querySelector(".button");
btn.addEventListener("click", addMessage);