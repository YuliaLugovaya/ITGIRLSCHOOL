let btn = document.querySelector('.btn');
let add = document.querySelector('.add');
let gifs = [];


btn.addEventListener('click', (e) => {
    e.preventDefault();

    let search = document.querySelector('.searh').value;
    
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&limit=5&offset=0&q=${search}`)
    .then(response => response.json())
    .then(user => {
        gifs = user.data;
        gifs.forEach((el) => {
            add.innerHTML += `<img src="${el.images.downsized.url}" alt = "">`;
          });
    })
    .catch(error => console.log(error));
})
