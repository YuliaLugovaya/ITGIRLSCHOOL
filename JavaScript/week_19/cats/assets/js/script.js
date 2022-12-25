//способ с FormData
const form = document.querySelector('form');

class Cat {
    constructor({nickname, name, breed, food, sex, comment}){
        this.nickname = nickname;
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

function selectFood(food) {
    let selectedFood = document.getElementsByName('food');
    for (let i = 0; i < selectedFood.length; i++) {
        if (selectedFood[i].checked) {
            food.push(selectedFood[i].value);
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(form);

    let nickname = data.get('nickname');
    let name = data.get('name');
    let breed = data.get('breed');
    let food = [];
    selectFood(food);
    let sex = data.get('sex');
    let comment = data.get('comment');

    let cat = new Cat({nickname, name, breed, food, sex, comment});
    console.log(cat);

})

//способ с обращением к узлам по document.querySelector
/*class Cat {
    constructor(nickname, owner, breed, food, sex, comment) {
        this.nickname = nickname;
        this.owner = owner;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

function createClass() {
    let nickname = document.querySelector('#nickname').value;
    let owner = document.querySelector('#name').value;
    let breed = document.querySelector('.breed').value;
    let food = [];
    selectFood(food);
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let comment = document.querySelector('#comment').value;

    let catClass = new Cat(nickname, owner, breed, food, sex, comment);
    console.log(catClass);
}

function selectFood(food) {
    let selectedFood = document.getElementsByName('food');
    for (let i = 0; i < selectedFood.length; i++) {
        if (selectedFood[i].checked) {
            food.push(selectedFood[i].value);
        }
    }
}

let button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    createClass();
})*/