let btn = document.querySelector('.btn');
let add = document.querySelector('.add');
let gifs = [];


btn.addEventListener('click', (e) => {
    e.preventDefault();

    let search = document.querySelector('.search').value;
    
    //с помощью async

    async function loadData(){
        try {
            let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&limit=5&offset=0&q=${search}`);
            let pictures = await response.json();
    
            gifs = pictures.data;
            gifs.forEach((el) => {
                add.innerHTML += `<img src="${el.images.fixed_height.url}" alt = "">`;
            });
        } catch (error) {
            console.log(error);
        }
    }

    loadData();

    //с помощью промисов

    /*fetch(`https://api.giphy.com/v1/gifs/search?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&limit=5&offset=0&q=${search}`)
    .then(response => response.json())
    .then(pictures => {
        gifs = pictures.data;
        gifs.forEach((el) => {
            add.innerHTML += `<img src="${el.images.fixed_height.url}" alt = "">`;
        });
    })
    .catch(error => console.log(error));*/
})
