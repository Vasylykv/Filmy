"use strict";

// Callback -  функція яка має бути 
// виконана після того як інша функція закінчила своє виконання

function learJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learJS('JavaScript', done);