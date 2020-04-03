'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
function myNumber () {
    let count;
    function generation() {
        count = Math.round(Math.random()*100);
        return count;
    }
    return generation();
}
let number = myNumber();
myNumber();
console.log(number);
const myFunc = function () {
    let question = +prompt('Угадай число от 1 до 100'); // Спрашиваем у пользователя число.
    if(question < number) {  // Проверка, если число меньше загадываемогою
        alert('Загадываемое число больше');
        myFunc();  // Рекурсия, запускаем вновь функцию.
    } else if( question > number) {
        alert('Загадываемое число меньше');
        myFunc();
    } else if(question === number) {
        alert('Бинго!');
    } else if (!isNumber(question)) {
        alert('Введите число!');
        myFunc();
    } else if (question == null) {
        alert('Пока-пока');
    }
};
myFunc();
