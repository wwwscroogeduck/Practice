// //Задание 21

function dropElements(arr, func) {

    while (arr.length > 0 && !func(arr[0])) {
        arr.shift(); 
    }
    return arr; 
}


const result = dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
});
console.log(result); 
