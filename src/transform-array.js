const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('argument is nor array');
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case ('--discard-prev'):
        if (i === 0) {
          break;
        }
        if (arr[i - 2] !== '--discard-next') {
          newArr.pop();
        }
        break;

      case ('--discard-next'):
        if (i + 1 === undefined) {
          break;
        } else {
          i++;
        }
        break;

      case ('--double-prev'):
        if (i === 0) {
          break;
        }
        if (arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        break;

      case ('--double-next'):
        if (i + 1 === undefined) {
          break;
        } else {
          newArr.push(arr[i + 1]);
        }
        break;

      default:
        newArr.push(arr[i]);
    }
  }
  console.log(`newArr60: ${newArr}`);
  return newArr;

};

transform(['--discard-prev', 1, 2, 3]);
transform(['--double-prev', 1, 2, 3]);
transform([1, 2, 3, '--double-next']);
transform([1, 2, 3, '--discard-next']);
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);
transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);