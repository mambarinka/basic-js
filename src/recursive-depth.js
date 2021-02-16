const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator { //создает функцию с именем DepthCalculator

  constructor() { // метод класса, в котором хранится код функции DepthCalculator
    this.calculateDepth = this.calculateDepth.bind(this); //чтобы не потерять контекст функции 
  }

  calculateDepth(arr) { //класс DepthCalculator сохраняет метод calculateDepth в User.prototype. 
    // При вызове метода объекта new DepthCalculator он будет взят из прототипа
    if (Array.isArray(arr)) {
      if (arr.length === 0) {
        return 1;
      } else {
        return 1 + Math.max(...arr.map(this.calculateDepth));
      }
    } else {
      return 0;
    }
  }
};