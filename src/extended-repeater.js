const CustomError = require("../extensions/custom-error");

// module.exports = function repeater(str, options) {
function repeater(str, options) {
  let repeatArray = [];

  const repeatFn = (array, string, repeatTimes, separator) => {
    for (let i = 0; i < repeatTimes; i++) {
      array.push(string);
    }
    return array.join(separator);
  };

  let repeatArrayAdd = [];

  let strAdd = repeatFn(repeatArrayAdd, options.addition, options.additionRepeatTimes, options.additionSeparator);
  console.log(strAdd);

  console.log(repeatFn(repeatArray, str + strAdd, options.repeatTimes, options.separator));

  return repeatFn(repeatArray, str + strAdd, options.repeatTimes, options.separator);



  // console.log(repeatStr.join(options.separator));
  // return repeatStr.join(options.separator);
};

repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3,
  additionSeparator: '00'
});

// STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
// STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS