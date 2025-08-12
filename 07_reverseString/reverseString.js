const reverseString = function(phrase) {
    let phraseArray = phrase.split("");
    let reversePhrase = ""
    for (let i = phraseArray.length - 1; i > -1; i--) {
        reversePhrase += phraseArray[i];
    }
    return reversePhrase;

};

// Do not edit below this line
module.exports = reverseString;
