const reverseString = function(input) {
    // hello
    let string = "";

    for (let i = input.length - 1; i >= 0; i--) {
        string = string + input[i];
    }

    return string;

};

// Do not edit below this line
module.exports = reverseString;
