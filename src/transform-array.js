const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('argument is nor array');
  }

  // let newArr = [...arr];
  let newArr = Object.assign([], arr);
  console.log(newArr);
  let steck = 0;
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case ('--discard-prev'):
        if (i > 0) {
          console.log(`i: ${i}`);
          console.log('зависимость стоит не в начале');
          newArr.splice([i - 1], 2);
        } else {
          console.log('зависимость стоит в самом начале');
          newArr.splice([i], 1);
        }
        break;

      case ('--discard-next'):
        newArr.splice([i], 2);
        steck = '--discard-next';

      case ('--double-prev'):
        if (steck === '--discard-next') {
          newArr.splice([i], 1);
        } else {
          newArr.splice([i], 1, newArr[i - 1]);
        }
        steck = '';
        break;
        
      case ('--double-next'):
        newArr.splice([i], 1, newArr[i + 1]);
        break;
    }
  }



  console.log(`newArr22: ${newArr}`);
  return newArr;

};

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);
// transform(['--discard-prev', 1, 2, 3]);
transform(['--double-prev', 1, 2, 3]);
// transform([1, 2, 3, '--double-next']);
// transform([1, 2, 3, '--discard-next']);