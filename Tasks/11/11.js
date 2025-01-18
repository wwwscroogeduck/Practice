// //Задание 11

function sumAll(arr) {

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    

    let totalSum = 0;


    for (let i = min; i <= max; i++) {
        totalSum += i;
    }

    return totalSum; 

}

const inputArray = [4, 1];
const result = sumAll(inputArray);
console.log(result); 
