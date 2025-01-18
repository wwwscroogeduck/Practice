// //Задание 7
"use strict"

function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}


const mixedArray = [0, 'hello', '', NaN, 42, true, null, undefined, 'world', false];
const result = removeFalsyValues(mixedArray);
console.log(result);
