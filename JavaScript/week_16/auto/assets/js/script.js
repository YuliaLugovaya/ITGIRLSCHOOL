function getSum(){

let brands = 0;
let audi = document.querySelector('#audi');
let bentley = document.querySelector('#bentley');
let bmw = document.querySelector('#bmw');
let mercedes = document.querySelector('#mercedes');
let peugeot = document.querySelector('#peugeot');
let toyota = document.querySelector('#toyota');
let volkswagen = document.querySelector('#volkswagen');

let fuel = 0;
let gasoline = document.querySelector('#gasoline');
let diesel = document.querySelector('#diesel');
let electro = document.querySelector('#electro');

let year = 0;
let fresh = document.querySelector('#fresh');
let underThree = document.querySelector('#underThree');
let threeToFive = document.querySelector('#threeToFive');
let fiveToSeven = document.querySelector('#fiveToSeven');
let overSeven = document.querySelector('#overSeven');

let km = 0;
let mileage = Number(document.querySelector('.mileage').value);

let more = 0;
let conditioner = document.querySelector('#conditioner');
let parktronic = document.querySelector('#parktronic');
let climate = document.querySelector('#climate');
let alarm = document.querySelector('#alarm');
let heating = document.querySelector('#heating');

let transmission = 0;
let automat = document.querySelector('#automat');
let mechanics = document.querySelector('#mechanics');


if (audi.selected){ 
    brands = 5000; }
if (bentley.selected){ 
    brands = 10000; }
if (bmw.selected){ 
    brands = 6000; }
if (mercedes.selected){ 
    brands = 7000; }
if (peugeot.selected){ 
    brands = 3000; }
if (toyota.selected){ 
    brands = 4000; }
if (volkswagen.selected){ 
    brands = 5000; }


if (gasoline.checked){ 
    fuel = 500; }
if (diesel.checked){ 
    fuel = 1000; }
if (electro.checked){ 
    fuel = 2000; }


if (fresh.checked){ 
    year = 5000; }
if (underThree.checked){ 
    year = 3000; }
if (threeToFive.checked){ 
    year = 1500; }
if (fiveToSeven.checked){ 
    year = 500; }
if (overSeven.checked){ 
    year = 0; }


if(mileage <= 50000){
    km = 2000;
} else {
    km = 0;
}

if (conditioner.checked){ 
    more = 1000; }
if (parktronic.checked){ 
    more = more + 500; }
if (climate.checked){ 
    more = more + 500; }
if (alarm.checked){ 
    more = more + 500; }
if (heating.checked){ 
    more = more + 500; }


if (automat.checked){ 
    transmission = 1000; }
if (mechanics.checked){ 
    transmission = 0; }


let sum = Number(brands) + Number(fuel) + Number(year) + km + Number(more) + Number(transmission);
document.querySelector('.result').innerHTML = sum + '$';
}
