// //Задание 22


function steamrollArray(arr) {
    const result = []; 


    function flatten(array) {
        for (const item of array) {
            if (Array.isArray(item)) {

                flatten(item);
            } else {

                result.push(item);
            }
        }
    }

    flatten(arr); 
    return result;
}


const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result); 
