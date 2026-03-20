const palindromes = function (str) {


    const strLower = str.toLowerCase();
    const strArray = strLower.split("");
    const remove = [".", " ", ",", "!"];

    const strNew = strArray.filter((item) => {
        return !remove.includes(item);
    })

    const strCopy = strArray.filter((item) => {
        return !remove.includes(item);
    })

    const strReversed = strCopy.reverse();


    for (let i = 0; i < strNew.length; i++) {
        if (strNew[i] !== strReversed[i]) {
            return false
        }
    }

    return true;




};

// Do not edit below this line
module.exports = palindromes;
