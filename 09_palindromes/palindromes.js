const palindromes = function (str) {
    //need to remove all non-alphanumeric characters
    //we'll use regular expressions to do that
    //create a variable to store str without the non-alpha num characters

    let reg = /[\W_]/g //removes unwanted characters from the string

    //convert the string to lowerCase

    let newStr = str.toLowerCase().replace(reg, '')

    //split the string into an array of strings
    //use the reverse method to reverse the array
    //join the elements in the array

    let reverseStr = newStr.split('').reverse().join('');

    return reverseStr === newStr;

};

// Do not edit below this line
module.exports = palindromes;
