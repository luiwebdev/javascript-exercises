const findTheOldest = function (arr) {


    const age = arr.map((item) => {
        if (!item.hasOwnProperty("yearOfDeath")) {
            item.yearOfDeath = 2026;
        }
        return item.yearOfDeath - item.yearOfBirth;
    })

    const oldestAge = age.reduce((acc, item) => {
        if (item > acc) {
            return item;
        } else {
            return acc
        }
    }, age[0]);

    const oldestPerson = arr.find((item) => {
        if (item.yearOfDeath - item.yearOfBirth == oldestAge) {
            return item;
        }
    });


    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
