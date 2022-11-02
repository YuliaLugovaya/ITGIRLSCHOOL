//greeting message

function showMessage() {
    let person = prompt("Как тебя зовут?");
    if (person) {
        alert(`Привет, ${person}!`);
    } else {
        alert("Привет, Гость!");
    }
    
}



//calculator

function addition() {
    let a = prompt("Первое число");
    let b = prompt("Второе число");    
    let result = +a + +b;
    alert(result);
}

function subtraction() {
    let a = prompt("Первое число");
    let b = prompt("Второе число");    
    let result = a - b;
    alert(result);
}

function multiplication() {
    let a = prompt("Первое число");
    let b = prompt("Второе число");    
    let result = a * b;
    alert(result);
}

function division() {
    let a = prompt("Первое число");
    let b = prompt("Второе число");    
    let result = a / b;
    alert(result);
}





