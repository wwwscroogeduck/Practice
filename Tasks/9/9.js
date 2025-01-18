// //Задание 9
"use strict"

function chunkArray(arr, size) {
    const result = []; 

    for (let i = 0; i < arr.length; i += size) {

        const chunk = arr.slice(i, i + size);
        result.push(chunk); 
    }

    return result;
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const groupSize = 3;
const result = chunkArray(inputArray, groupSize);
console.log(result); 


