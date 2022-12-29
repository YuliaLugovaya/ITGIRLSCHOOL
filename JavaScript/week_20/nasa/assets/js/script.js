document.addEventListener('DOMContentLoaded', function (e) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=sDn2za86gHUqVYgwcJ5iXnPfF852GhZM15a93M7R')
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('.title');
        title.innerHTML = data.title;
        const img = document.querySelector('.img');
        img.src = data.url;
        const more = document.querySelector('.more');
        more.innerHTML = data.explanation;
    })
    .catch(err => console.log(err));
})