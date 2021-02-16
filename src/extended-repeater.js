const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // function repeater(str, options) {
  let repeatArray = [];

  const repeatFn = (array, string, repeatTimes, separator = '+', addSeparator = '|') => {

    if (repeatTimes === undefined) {
      array.push(string);
    } else {
      for (let i = 0; i < repeatTimes; i++) {
        array.push(string);
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




  // console.log(repeatStr.join(options.separator));
  // return repeatStr.join(options.separator);
};

// repeater('TESTstr', {
//   repeatTimes: undefined,
//   separator: 'ds',
//   addition: 'ADD!',
//   additionRepeatTimes: undefined,
//   additionSeparator: ')))000'
// });
// TESTstrADD!
// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });