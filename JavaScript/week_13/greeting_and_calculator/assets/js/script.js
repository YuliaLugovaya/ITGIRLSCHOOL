//приветственное сообщение

function showMessage() {
    let name = prompt("Как тебя зовут?");
    alert(`Привет, ${name}!`);
}



//калькулятор

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





