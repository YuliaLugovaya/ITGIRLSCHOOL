class Cat {
    constructor(nickname, owner, email, tel, breed, food, sex, comment) {
        this.nickname = nickname;
        this.owner = owner;
        this.email = email;
        this.tel = tel;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

function createClass() {
    let nickname = document.querySelector('#nickname').value;
    let owner = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let tel = document.querySelector('#tel').value;
    let breed = document.querySelector('.breed').value;
    let food = [];
    selectFood(food);
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let comment = document.querySelector('#comment').value;

    let catClass = new Cat(nickname, owner, email, tel, breed, food, sex, comment);
    console.log(catClass);
}

function selectFood(food) {
    let selectedFood = document.getElementsByName('feed');
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
})