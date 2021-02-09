const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
// const getSeason = function (date) {

  if (date == null || date == undefined || date == false) {
    return 'Unable to determine the time of year!';
  }
  /* else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
} */

  let month = date.getMonth();

  switch (String(month)) {
    case '12':
    case '1':
    case '2':
      console.log('winter');
      return 'winter';
    case '3':
    case '4':
    case '5':
      console.log('spring');
      return 'spring';
    case '6':
    case '7':
    case '8':
      console.log('summer');
      return 'summer';
    case '9':
    case '10':
    case '11':
      console.log('autumn');
      return 'autumn';
    default:
      throw new Error('Error');
  }

};

// getSeason(new Date(2150, 7, 21, 18, 36, 41, 841));
// getSeason('1');

