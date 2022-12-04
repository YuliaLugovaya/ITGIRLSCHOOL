let messages = [];
let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.field');


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
            result.innerHTML += `<div><p class="result">${messageResult}</p></div>`;
        } 
    }       
}

let btn = document.querySelector(".button");
btn.addEventListener("click", checkSpam);