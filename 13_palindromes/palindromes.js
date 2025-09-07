const palindromes = function (string) {
    const noPunc = string.toLowerCase().replace(/[^\w]|_/g, '');
    const stringArray = noPunc.split("");

    const size = stringArray.length;

    let isPalindrome = true;

    for (i = 0; i < size; i++) {
        let neg = (i+1) * (-1);
        if (stringArray.at(i) !== stringArray.at(neg)) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
    
};

// Do not edit below this line
module.exports = palindromes;
