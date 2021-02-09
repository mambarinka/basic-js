const CustomError = require("../extensions/custom-error");


// 1 вариант с использованием вложенного forEach
// module.exports = function countCats(matrix) {
//   let numberCats = 0;

//   matrix.forEach(array => {
//     array.forEach(element => {
//       if (element === '^^') {
//         numberCats++;
//       }
//     });
//   });
//   console.log(numberCats);
//   return numberCats;
// };

// 2 вариант с использованием обычного цикла

// module.exports = function countCats(matrix) {
//   let numberCats = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     const element = matrix[i];
//     for (let j = 0; j < element.length; j++) {
//       if (element[j] === '^^') {
//         numberCats++;
//       }

//     }
//   }
//   console.log(numberCats);
//   return numberCats;
// };


// 3 вариант с использованием filter
module.exports = function countCats(matrix) {
  let arrayCats = [];
  let cat = "^^";

  matrix.forEach(array => {
    array.filter(function (element) {
      if (element === cat) {
        arrayCats.push(element);
      }
    });
  });

  console.log(arrayCats.length);
  return arrayCats.length;
};