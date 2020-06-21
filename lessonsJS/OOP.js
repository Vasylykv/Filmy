"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier); // Найчастіше використовується\ аргумент від кого
                                                            //наслідується


// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; // Застарілий метод


// Object.setPrototypeOf(jonh, soldier); // Перший аргумент кому другий від якого


 
console.log(jonh.armor);
jonh.sayHello();