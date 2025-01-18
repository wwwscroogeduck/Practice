// //Задание 17

function fearNotLetter(str) {

    const startCharCode = str.charCodeAt(0);
    const endCharCode = str.charCodeAt(str.length - 1);

    for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {

        if (!str.includes(String.fromCharCode(charCode))) {
            return String.fromCharCode(charCode); 
        }
    }

    return undefined; 
}


const result = fearNotLetter("abce");
console.log(result); // Вывод: "d"
