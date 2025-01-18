// //Задание 16

function replaceWord(sentence, target, replacement) {

    const casePreservedReplacement = (match) => {

        return match.charAt(0) === match.charAt(0).toUpperCase()
            ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
            : replacement.toLowerCase();
    };

    const regex = new RegExp(`\\b${target}\\b`, 'gi');


    return sentence.replace(regex, casePreservedReplacement);
}

const inputSentence = "The cat sat on the mat. The Cat was happy.";
const result = replaceWord(inputSentence, "cat", "dog");
console.log(result); 
