// Q.6 Flip the words in a sentence, not the letters.

function flipWordNotLetter(str) {
    return str.split(" ").reverse().join(" ")
}

const result = flipWordNotLetter("development frontend love I")
console.log(result, "result");

