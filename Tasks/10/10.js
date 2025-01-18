// //Задание 10
"use strict"

function fillArrayRecursively(arr, p) {

    if (p <= 0) {
        return;
    }
    

    arr.push(p);
    

    fillArrayRecursively(arr, p - 1);
}


const resultArray = [];
const number = 5;
fillArrayRecursively(resultArray, number);
console.log(resultArray); 



