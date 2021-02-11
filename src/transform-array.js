const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
function transform(arr) {

  // const manageSequences = {
  //   '--discard-next': function(array) {
  // array.splice
  //   },
  //   '--discard-prev': '',
  //   '--double-next': '',
  //   '--double-prev': '',
  // };
  let newArr = arr.slice();
  console.log(`newArr15: ${newArr}`);

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
    if (newArr[i] === '--discard-next') {
      console.log('нашлась управляющая последовательсность discard-next');
      newArr.splice([i], 2);
    }

    if (newArr[i] === '--discard-prev') {
      console.log('нашлась управляющая последовательсность discard-prev');
      newArr.splice([i - 1], 2);
    }
  }
  console.log(`newArr22: ${newArr}`);
  return newArr;

};

transform([1, 2, 3, '--discard-next', 4, 5, 6, '--discard-prev', 7, 8]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);

// let massiveNEXT = [1, 2, 3, '--discard-next', 4, 5];
// massiveNEXT.splice(3, 1, '555');
// console.log(massiveNEXT);

// let massivePREV = [1, 2, 3, '--discard-prev', 4, 5];
// massivePREV.splice(3, 1);
// console.log(massivePREV);