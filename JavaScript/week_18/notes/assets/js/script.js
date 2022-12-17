let newMessage = document.querySelector('.textarea');
let result = document.querySelector('.result');
let error = document.querySelector('.error');
let dateNow = document.querySelector('.date');
let btn = document.querySelector(".btn");

let txt;

//localStorage
let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
savedNotes.forEach(addDivItem);

//выбор даты
function onDateChange() {
    return dateNow.value;
}

//запись результата
function addDivItem(txt) {

    //создание заметок
    let resultItem = document.createElement("p");
    resultItem.classList.add("result__item");
    resultItem.innerHTML = txt;
    result.insertBefore(resultItem, result.childNodes[0]);

    //удаление заметок из массива
    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.classList.add("remove");
    resultItem.appendChild(delBtn);
    delBtn.addEventListener("click", (e) => {
    resultItem.parentNode.removeChild(resultItem);
    savedNotes = savedNotes.filter((e) => e !== txt);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    return e;
});
}

//добавление заметки, проверка на валидность
btn.addEventListener("click", () => {
    txt = `${dateNow.value}\n\n ${newMessage.value}`;
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

//отображение актуальной даты
window.addEventListener('load', function (e) {
    let newDate = new Date();
    let day = newDate.getDate(); if (day<10) day='0'+day;
    let month = newDate.getMonth() + 1; if (month<10) month='0'+month;
    let year = newDate.getFullYear(); 
    dateNow.value = year+"-"+month+"-"+day;
}, false);


//удалить все заметки
function removeNotes () {
    localStorage.removeItem('notes');
    result.innerHTML = '';
}
let buttonRemove = document.querySelector('.btn__remove');
buttonRemove.addEventListener('click', removeNotes);