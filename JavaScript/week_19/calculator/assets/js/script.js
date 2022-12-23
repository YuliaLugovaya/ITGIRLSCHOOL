let number1;
let number2;
let out;
let result = document.querySelector('#result');

//получить числа
function getNumbers() {
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    return;
}

//класс для калькулятора
class Calculator {
    static addition (number1, number2) {
        out = number1 + number2;
        return out;
    }
    static subtraction (number1, number2) {
        out = number1 - number2;
        return out;
    }
    static multiplication (number1, number2) {
        out = number1 * number2;
        return out;
    }
    static division (number1, number2) {
        if (number2 === 0) {
            out = 'На ноль делить нельзя!';
            return out;
        } else {
            out = number1 / number2;
            return out;
        }
    }
}

//сложение
function addition(){
    getNumbers()
    result.innerHTML = Calculator.addition(number1, number2);
}
let btnAddition = document.querySelector("#addition");
btnAddition.addEventListener('click', addition);

//вычитание
function subtraction(){
    getNumbers()
    result.innerHTML = Calculator.subtraction(number1, number2);
}
let btnSubtraction = document.querySelector("#subtraction");
btnSubtraction.addEventListener('click', subtraction);

//умножение
function multiplication(){
    getNumbers()
    result.innerHTML = Calculator.multiplication(number1, number2);
}
let btnMultiplication = document.querySelector("#multiplication");
btnMultiplication.addEventListener('click', multiplication);

//деление
function division(){
    getNumbers()
    result.innerHTML = Calculator.division(number1, number2);
}
let btnDivision = document.querySelector("#division");
btnDivision.addEventListener('click', division);

//сбросить значения
function getReset() {
    document.querySelector("#number1").value="";
    document.querySelector("#number2").value="";
    document.querySelector("#result").innerHTML="Результат:";
}