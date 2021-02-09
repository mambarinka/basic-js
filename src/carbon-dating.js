const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let ln2 = 0.693;
  let speedReaction = ln2 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity === 'string' &&
    (parseInt(sampleActivity)) &&
    (sampleActivity > 0 && sampleActivity <= 15)) {

    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / speedReaction);
  } else {
    return false;
  }
};