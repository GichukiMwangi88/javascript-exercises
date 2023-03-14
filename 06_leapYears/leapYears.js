const leapYears = function (year) {
    //check if divisible by 4, 100 and 400
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
