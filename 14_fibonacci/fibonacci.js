const fibonacci = function(index) {
    const x = index;
    if (parseInt(x) == 0) {
        return 0;
    }
    else if (parseInt(x) < 0) {
        return "OOPS";
    }
    else if (parseInt(x) == 1 || parseInt(x) == 2) {
        return 1;
    }
    else {
        const prevIndex = parseInt(x) - 1;
        const secondPrevIndex = parseInt(x) - 2;
        return fibonacci(prevIndex) + fibonacci(secondPrevIndex);
    }

};

// Do not edit below this line
module.exports = fibonacci;
