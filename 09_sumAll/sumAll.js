const sumAll = function(start, end) {
    let sum = 0;

    if (start > end) {
        for (let i = start; i >= end; i--) {
            sum = sum + i;
        }
    } else {
        for (let i = start; i <= end; i++) {
            sum = sum + i;
        }
    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
