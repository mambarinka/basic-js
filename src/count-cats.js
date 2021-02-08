const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // function countCats(matrix) {
  let numberCats = 0;

  matrix.forEach(array => {
    array.forEach(element => {
      if (element === '^^') {
        numberCats++;
      }
    });
  });
  console.log(numberCats);
  return numberCats;
};

// function countCats(matrix) {
//   let result = 0;
//   matrix.forEach(element => {
//     element.forEach(depthEl => {
//       if (depthEl == "^^") {
//         result++;
//       }
//     })
//   });
//   return result;
// };

// let a = countCats([
//   ['##', 'dd', '00'],
//   [' ^^ ', '..', 'ss'],
//   ['AA', 'dd', 'Oo'],
// ]);