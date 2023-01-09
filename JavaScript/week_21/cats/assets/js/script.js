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


    //с помощью async
    async function postForm(){
        try {
            let response = await fetch("https://httpbin.org/post",
            {
                method: 'POST',
                body: data,
            });
            let dataForm = await response.json();
            console.log(dataForm);
        } catch (error) {
            console.log(error);
        }
    }
    postForm();

    //с помощью промисов
    /*fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(dataForm => {
        console.log(dataForm);
    })
    .catch(error => console.log(error));*/
})