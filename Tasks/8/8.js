// //Задание 8
"use strict"

function containsAllLetters(arr) {
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();

    for (let char of str2) {
        if (!str1.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(containsAllLetters(["Hello World", "dlroW"]));
console.log(containsAllLetters(["JavaScript", "Java"]));  
console.log(containsAllLetters(["Test", "tsetz"]));        
        

