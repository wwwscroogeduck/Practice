// //Задание 13

function removeElements(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}


const inputArray = [1, 2, 3, 4, 5, 2];
const result = removeElements(inputArray, 2, 4);
console.log(result); 
