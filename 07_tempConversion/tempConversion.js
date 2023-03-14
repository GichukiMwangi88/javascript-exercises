const convertToCelsius = function (temp) {
  //convert to Celsius then round to 1 decimal place
  temp = ((temp - 32) * (5 / 9));
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  temp = ((temp * 9 / 5) + 32);
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
