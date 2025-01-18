// //Задание 15

function toSpinalCase(str) {
    return str
        .replace(/_/g, '-')
        .replace(/\s+/g, '-') 
        .replace(/([a-z])([A-Z])/g, '$1-$2') 
        .toLowerCase(); 
}


const inputString = "This Is Spinal Tap";
const result = toSpinalCase(inputString);
console.log(result); 
