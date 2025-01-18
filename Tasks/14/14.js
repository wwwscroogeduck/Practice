// //Задание 14

function whatIsInAName(collection, source) {

    const keys = Object.keys(source);


    return collection.filter(obj => {

        return keys.every(key => obj[key] === source[key]);
    });
}


const collection = [
    { "apple": 1, "bat": 2 },
    { "apple": 1, "bat": 2, "cookie": 2 },
    { "bat": 2 },
    { "apple": 1, "bat": 2 }
];

const source = { "apple": 1, "bat": 2 };
const result = whatIsInAName(collection, source);
console.log(result); 

