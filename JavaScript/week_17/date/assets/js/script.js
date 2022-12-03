function formatDate(date) {
    let rigthNow = new Date() - date;
    let seconds = Math.floor(rigthNow / 1000);
    let minutes = Math.floor(rigthNow / 60000);

    if(rigthNow < 1000){
        return 'сейчас';
    } else if(seconds < 60){
        return seconds + ' секунд назад';
    } else if(minutes < 60){
        return minutes + ' минут назад';
    } else {
        let anyDate = date.toLocaleDateString("ru", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
        });
        let time = date.toLocaleTimeString("ru", {
            hour: "2-digit",
            minute: "2-digit"
        });
        return (`${anyDate} ${time}`); 
    }
}

console.log( formatDate(new Date(new Date - 1)) ); //сейчас
console.log( formatDate(new Date(new Date - 15 * 1000)) ); //15 секунд назад
console.log( formatDate(new Date(new Date - 30 * 60 * 1000)) ); //30 минут назад
console.log( formatDate(new Date(new Date - 1440 * 60 * 1000)) ); //1 день назад
console.log( formatDate(new Date(2020, 5, 15, 12, 30, 00)) ); //15 июня 2020, 12:30