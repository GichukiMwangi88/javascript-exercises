const removeFromArray = function (arr, ...values) {
    //use filter function to remove specified items
    return arr.filter(function (value) {
        return !values.includes(value)
    });

};

// Do not edit below this line
module.exports = removeFromArray;
