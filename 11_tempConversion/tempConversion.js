const convertToCelsius = function(fTemp) {
  
  let cTemp = (fTemp-32) * (5/9);
  let finalNum = Math.round(cTemp * 10) / 10;
  return finalNum;
};

const convertToFahrenheit = function(cTemp) {

  let fTemp = (cTemp * (9/5) + 32);
  let finalNum = Math.round(fTemp * 10) / 10;
  return finalNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
