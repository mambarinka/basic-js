const CustomError = require("../extensions/custom-error");

// module.exports = function repeater(str, options) {
function repeater(str, options) {
  let repeatStr = str.split(' ');
  for (let i = 1; i < options.repeatTimes; i++) {
    repeatStr.push(str,options.addition);
    // repeatStr.push(options.addition);
  }
  console.log(repeatStr.join(options.separator));
  return repeatStr.join(options.separator);
};

repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS'
});