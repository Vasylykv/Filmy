"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1+
// };

// const copy = obj; // Не робить копію обєкту, а передає ссилку

// copy.a = 10;
// console.log(copy);
// console.log(obj);





function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);






const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // склеює обєкти 1 аргумент обєкт в який 
                                                        // записуєм  2 який добавляєм
// Створює поверхневу копію обєкту
const clone = (Object.assign({}, add)); // Копіює обєкт 
clone.d = 20;

// console.log(add);
// console.log(clone);





const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Створює копію массиву

newArray[1] = 'adasd';
console.log(newArray);
console.log(oldArray);


// Оператор Spread(Розворота) ... три крапки

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ['a', 'b'];

const newAarray = [...array];  // копія поперднього масиву з допомогою spread

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // ES 9 стандарт

console.log(newObj);

