const repeatString = function (word, num) {
    //declare a string variable
    let string = "";

    //check if num < 0, it should return ERROR
    if (num < 0) {
        return "ERROR"
    }

    //loop to add the word to the string num times
    for (let i = 0; i < num; i++) {
        string += word;
    }

    return string;

};

// Do not edit below this line
module.exports = repeatString;
