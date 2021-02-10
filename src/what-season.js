const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) { // если в аргумент передано пустое значение
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) { // если data не имеет тип Object и граничные случаи объекта Date
    throw Error('Error');
  } else if (Object.prototype.toString.call(date) !== '[object Date]') { // если переданный арг-т не явл. объектом new Date
    throw new Error('THROWN');
  }

  let month = date.getMonth();

  switch (String(month + 1)) {
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