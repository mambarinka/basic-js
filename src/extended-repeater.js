const CustomError = require("../extensions/custom-error");

// module.exports = function repeater(str, options) {
function repeater(str, options) {
  let repeatStr = str.split(' ');

  const repeatFn = (array, repeatTimes, separator) => {
    for (let i = 1; i < repeatTimes; i++) {
      return array.push(separator);
    }
  }
 
  }
  console.log(repeatStr.join(options.separator));
  return repeatStr.join(options.separator);
};

repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3
});