// //Задание 12

function difference(arr1, arr2) {

    const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
    

    const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
    

    return [...onlyInArr1, ...onlyInArr2];
}


const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = difference(array1, array2);
console.log(result); 
