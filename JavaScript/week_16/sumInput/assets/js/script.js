function sumInput() {
  let numbers = [];
  let inputs = document.querySelectorAll(".number");

  for (let input of inputs) {
    numbers.push(Number(input.value));
  }

  let n = numbers.length;
    for (let i = 0; i < n-1; i++){
      let min = i;
      for (let j = i+1; j < n; j++){
        if (numbers[j] < numbers[min]) min = j; 
      } 
      let t = numbers[min]; 
      numbers[min] = numbers[i]; 
      numbers[i] = t;
  }                    

  let sum = numbers.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);

  document.querySelector("#out").innerHTML = numbers;
  document.querySelector('#sum').innerHTML = sum;
}

let x = 0;
function addInput() {
    let str = '<div><input class="number" type="text" /></div> <div id="input' + (x + 1) + '"></div>';
    document.getElementById('input' + x).innerHTML = str;
    x++;
}

function getReset() {
  //document.querySelectorAll(".number").value = "";
  document.querySelector("#out").innerHTML = "";
  document.querySelector("#sum").innerHTML= "";
}