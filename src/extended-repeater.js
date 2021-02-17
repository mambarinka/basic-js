const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatArray = [];

  const repeatFn = (array, string, repeatTimes, separator = '+', addSeparator = '|') => {

    if (repeatTimes === undefined) {
      array.push(string);
    } else {
      for (let i = 0; i < repeatTimes; i++) {
        array.push(String(string));
      }
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


  let finishStr = repeatFn(repeatArray, str + strAdd, options.repeatTimes, options.separator, '');
  console.log(finishStr);

  return finishStr;
};