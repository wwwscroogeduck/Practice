// //Задание 19

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;') 
        .replace(/</g, '&lt;') 
        .replace(/>/g, '&gt;') 
        .replace(/"/g, '&quot;') 
        .replace(/'/g, '&#39;'); 
}


const inputString = 'This is a "test" string with <html> tags & characters like \'apostrophes\'.';
const result = escapeHtml(inputString);
console.log(result); 

