// //Задание 18

function uniteUnique(...arrays) {

    const combined = [].concat(...arrays);
    

    const uniqueValues = [...new Set(combined)];
    
    return uniqueValues; 
}


const result = uniteUnique([1, 2, 3], [2, 3, 4], [4, 5]);
console.log(result); 
