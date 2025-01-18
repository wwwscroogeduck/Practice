// //Задание 3 
"use strict"

function findMaxInSubarrays(arrays) {
    return arrays.map(subArray => Math.max(...subArray));
}


const input = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const result = findMaxInSubarrays(input);
console.log(result);
