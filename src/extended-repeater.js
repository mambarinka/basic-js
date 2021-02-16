const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // function repeater(str, options) {
  let repeatArray = [];

  const repeatFn = (array, string, repeatTimes, separator = '+', addSeparator = '|') => {
    for (let i = 0; i < repeatTimes; i++) {
      array.push(string);
    }

    if (separator !== '') {
      return Array.prototype.join.call(array, separator);
    } else {
      return Array.prototype.join.call(array, addSeparator);
    }
  };

  let repeatArrayAdd = [];

  let strAdd = repeatFn(repeatArrayAdd, options.addition, options.additionRepeatTimes, '', options.additionSeparator);
  console.log(strAdd);

  console.log(repeatFn(repeatArray, str + strAdd, options.repeatTimes, options.separator, ''));

  return repeatFn(repeatFn(repeatArray, str + strAdd, options.repeatTimes, options.separator, ''));



  // console.log(repeatStr.join(options.separator));
  // return repeatStr.join(options.separator);
};

// repeater('la', {
//   repeatTimes: 3
// });
// repeater('single', {
//   repeatTimes: 1
// });
// repeater('12345', {
//   repeatTimes: 5
// });