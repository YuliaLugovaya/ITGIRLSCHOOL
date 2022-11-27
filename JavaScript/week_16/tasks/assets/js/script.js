//1. Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.
let mass = ['js', 'css', 'html'];
console.log(mass[0]);


//2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, 0, null с помощью метода filter.  Ожидаемый результат: [1, 2, 3].
let numbers = [0, 1, false, 2, undefined, '', 3, null];
let numFiltered = numbers.filter(function(number){
  return number > 0;
});
console.log(numFiltered);

//3. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3. Ожидаемый результат: 2
let massives = [[1,2], [1,2,3], [1,2,3,4]];
let el = massives.findIndex(el => el.length > 3);
console.log(el);