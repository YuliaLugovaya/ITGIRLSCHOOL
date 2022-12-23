class Validator {
    isEmail (email) {
        let emailCheck = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        if (email.match(emailCheck)) {
            return true;
        } else {
            return false;
        }
    }
    isDomain (domain) {
        let domainCheck = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if (domain.match(domainCheck)) {
            return true;
        } else {
            return false;
        }
    }
    isDate (date) {
        let dateCheck = /^\d\d[./-]\d\d[./-]\d\d\d\d$/;
        if (date.match(dateCheck)) {
            return true;
        } else {
            return false;
        }
    }
    isPhone (phone) {
        let phoneCheck = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        if (phone.match(phoneCheck)) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidatorStatic {
    static isEmail (email) {
        let emailCheck = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        if (email.match(emailCheck)) {
            return true;
        } else {
            return false;
        }
    }
    static isDomain (domain) {
        let domainCheck = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if (domain.match(domainCheck)) {
            return true;
        } else {
            return false;
        }
    }
    static isDate (date) {
        let dateCheck = /^\d\d[./-]\d\d[./-]\d\d\d\d$/;
        if (date.match(dateCheck)) {
            return true;
        } else {
            return false;
        }
    }
    static isPhone (phone) {
        let phoneCheck = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        if (phone.match(phoneCheck)) {
            return true;
        } else {
            return false;
        }
    }
}

//стандартная
let validator = new Validator();
console.log(validator.isEmail('javascript@gmail.com'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('23.12.2022'));
console.log(validator.isPhone('+375291234567')); 

//статическая
console.log(ValidatorStatic.isEmail('javascript@gmail.com'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('23.12.2022'));
console.log(ValidatorStatic.isPhone('+375291234569')); 