// //Задание 23

function add(a) {

    if (arguments.length === 1) {
        return function(b) {
            return a + b; 
        };
    }

    return a + arguments[1];
}


console.log(add(5, 3)); 

const addFive = add(5); 
console.log(addFive(3)); 
console.log(addFive(10)); 


