function getNumbers() {
    let numbers = document.querySelector('#numbers');
    let min = document.querySelector('#min');
    let max = document.querySelector('#max');
    let mean = document.querySelector('#mean');
    let sum = document.querySelector('#sum');
    let product = document.querySelector('#product');
    let arr = [];

    for(let i = 0; i < 5; i++){
        arr.push(Math.trunc(Math.random() * 10 + 1));
        arr.push(Math.trunc(Math.random() * -10 - 1));
    }

    numbers.innerHTML = arr;

    let minResult = Math.min.apply(null, arr);
    min.innerHTML = minResult;

    let maxResult = Math.max.apply(null, arr);
    max.innerHTML = maxResult;

    let addition = 0;
    for(let i = 0; i < arr.length; i++){
        addition = addition + arr[i];
    }
    sum.innerHTML = addition;
    mean.innerHTML = addition / 10;

    let multiplication = 1;
    for(let i = 0; i < arr.length; i++){
        multiplication = multiplication * arr[i];
    }
    product.innerHTML = multiplication;
}