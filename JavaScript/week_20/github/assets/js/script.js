fetch('https://api.github.com/users/YuliaLugovaya')
    .then(response => response.json())
    .then(data => {
        const photo = document.querySelector('.photo');
        photo.src = data.avatar_url;
        const login = document.querySelector('.login');
        login.innerText = data.login;
    })
    .catch(err => console.log(err));