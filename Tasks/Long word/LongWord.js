// //Задание 2 
"use strict"

function longestWordLength(inputString) {
    const words = inputString.split(' ');

    let maxLength = 0;

    for (let word of words) {

        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength; 
}

let inputString = prompt("Введите строку");
let result = longestWordLength(inputString);
console.log("Длина самого длинного слова:", result);