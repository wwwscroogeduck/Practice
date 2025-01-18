// //Задание 4 
"use strict"

function truncateString(str, maxLength) {

    if (str.length > maxLength) {

        return str.slice(0, maxLength) + '...';
    }

    return str;
}


const inputString = "Это пример длинной строки, которую нужно обрезать.";
const maxLength = 30;
const result = truncateString(inputString, maxLength);
console.log(result); 