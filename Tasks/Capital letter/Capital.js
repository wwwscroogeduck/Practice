// //Задание 5 
"use strict"

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); 
}

const inputString = "это пример строки для тестирования";
const result = capitalizeWords(inputString);
console.log(result); 