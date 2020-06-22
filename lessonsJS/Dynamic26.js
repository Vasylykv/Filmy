"use strict";

// To string

//1
console.log(String(null));
console.log(String(4));

//2 Конкатинація
console.log(typeof(5 + '')); // string
console.log(typeof(null + '')); // string

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4'))); // Рідко використовується

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));  // 10 - десятична система\\ Рідкоо

let answ = +prompt("hello", "");

// To boolean

// 0, '', null, undefined, NaN; // Всегда false Всьо решта буде true
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444")); // !! 
