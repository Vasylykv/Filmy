"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest(); // метод обєкта

const {border, bg} = options.colors; // Деструктурізація обєкту
console.log(border);




console.log(Object.keys(options).length); // Кількість свойств в об'єкті


// console.log(options["colors"]["border"]); //получити значення свойства обєкта в обєкті



delete options.name;  // удаляє свойство








let counter = 0; // Получити кількість свойст в обєкті


for (let key in options) {  // Спосіб перебору обєкту
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);






const suka = {
    gender: "woman",
    rist: 180,
    boobs: 3,
    hair: "black",
    bithces: 3,
    color: "white"
};

console.log(Object.keys(suka).length);
for (let key in suka) {
    console.log(`Свойство ${key} имеет значение ${suka[key]}`);
}