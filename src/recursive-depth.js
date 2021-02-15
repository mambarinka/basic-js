const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let depthArray = 1;
    for (let i = 0; i < arr.length; i++) {
      console.log(depthArray);
      return Array.isArray(arr[i]) ?
        depthArray = Math.max(depthArray, this.calculateDepth(arr[i] + 1)) :
        0;
    }

  }
};

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]);
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]);