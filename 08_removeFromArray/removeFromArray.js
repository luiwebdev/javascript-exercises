const removeFromArray = function(arr, ...number) {
    let arrModify = arr.filter((num) => {
        if (!number.includes(num)) {
            return num;
        }
    })
    return arrModify;
};

// Do not edit below this line
module.exports = removeFromArray;
