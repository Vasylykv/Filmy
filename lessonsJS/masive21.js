"use strict";

// Псведомассиви - масиви які мають елементи попорядку але не мають методів

const arr = [2, 13, 26, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// console.log(arr.length); // 5 Останній індекс в масиві +1


arr.forEach(function(item, i, arr) {  // callback Перебор масиву: 3 аргумента 1- елемент
    console.log(`${i}: ${item} внутри массива ${arr}`);             // 2- номер по порядку
});                                                         // 3- масив який ми перебираєм



for (let i = 0; i < arr.length; i++) { // Перебор масиву
    console.log(arr[i]);
}

for (let value of arr) { // працює тільки з масиво подібними сущностями// 
    // Масив, строка, псевдомасиви, map i set
console.log(value);
}     // Для for of працює break, continue/ а для forEach ні


 

// arr.pop();  // Удаляє останній елемент масиву

// arr.push(10); // Добавляє елемент в кінець масиву

// arr.shift(); // Удаляє перший елемент// Міняє індекси всіх елементів після\ Рідко

// arr.unshift(10); // Добавляє перший елемент\ також міняє індекси


const str = prompt("", "");
const products = str.split(", "); // Записує елементи через розділення яке треба вказати

products.sort();     // Сортує елементи масиву як строки

console.log(products.join('; ')); //  Склеює елементи з масива в строку через розділення


