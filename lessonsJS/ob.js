"use strict"

if (4) {
    console.log("ok");
} else {
    console.log('error');
}


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log("Ok!");
// }

(num == 50) ? console.log("Ok") : console.log('Error');  // Тернарний оператор через то шо 3 аргумента
// порівняння    дія в разі виконання\ дія в разі не виконнання умови
// const num = 50;


switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Опять неверно');
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log('Не в этот раз');
        break;
}


// Циклы

let num = 50

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 8; i++) {   
    if (i === 6) {
        break;          // Перериває цикл на певному етапі
    }

    console.log(i);
}


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;  // Пропускає крок який нам потрібен, але не перериває цикл
    }

    console.log(i);
}

let num = 20;

function showFirsMessage(text) {     // Дієслово з припискою над чим виконується дія
    console.log(text);
    num = 20;
}

showFirsMessage("hello wodl!");
console.log(num);


function calc(a, b) {
    return (a + b);  // Після return ми нічого не пишем буде unrichable- мертвий код
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};


const str = "teSt";

// console.log(str[2] = 'd'); 
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "Some fruit"; 

console.log(fruit.indexOf("q")); // Поиск под строки

const logg = "Hello world";

console.log(logg.slice(6, 11));


const train = "Suka1bleat   poshel naxyu)";

console.log(train.slice(1, 6));
console.log(train.slice(13, 26));
console.log(train.slice(-8, -1)); // Почне з права

console.log(train.substring(6, 11)); // не підтримує відємні значення

.slice(-5, 6)
.substring(6, 11) // Такий як slice різниця шо перший аргумент можна задати більше ніж другий. І не підтримує відємні числа

console.log(train.substr(6,)) // Тут замість другого аргументу ми вказуєм скільки символів після вирізати


const num = 12.2;
console.log(Math.round(num)); // Заокруглює до найближчого цілого

const test = "12.2px";
console.log(parseInt(test)); // Переводить число в іншу систему исчесления 2 10 16
console.log(parseFloat(test)); // вертає в 10-ному варіанті, вертає з крапкою 12.2
