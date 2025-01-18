// //Задание 6
"use strict"

function mergeArrays(arr1, arr2, p) {

    const resultArray = arr2.slice(); 

    for (let i = 0; i < arr1.length; i++) {
        resultArray.splice(p + i, 0, arr1[i]); 
    }

    return resultArray; 

}

const array1 = [1, 2, 3];
const array2 = [4, 5];
const index = 1;

const result = mergeArrays(array1, array2, index);
console.log(result); 
