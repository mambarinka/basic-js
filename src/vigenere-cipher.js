const CustomError = require("../extensions/custom-error");

const cypher = function (message, key, directMachine, encOrDec) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  let result = '';
  let symbol = '';
  let notEngArray = [];
  let messageUppercase = message.toUpperCase();
  let keyUpperCase = key.toUpperCase();

  if (!message || !key) {
    throw new Error('parameter not passed');
  } else {
    for (let i = 0; i < messageUppercase.length; i++) {
      if (!alphabet.includes(messageUppercase[i])) { // если какой-либо символ текста не содержит англ
        notEngArray.push(messageUppercase[i]);
      }
    }

    let keyResult = keyUpperCase.split('');

    while (keyResult.length < (messageUppercase.length - notEngArray.length)) { // если ключ меньше по длине , чем текст
      for (let i = 0; i < messageUppercase.length; i++) {
        keyResult.push(keyResult[i]);
      }
    }

    for (let i = 0; i < messageUppercase.length; i++) {
      if (!alphabet.includes(messageUppercase[i])) { // если символ не англ, то просто вставляй в результат
        symbol = messageUppercase[i];
        keyResult.splice(keyResult[i], 0, ' ');
      } else {
        let mesIndex = alphabet.indexOf(messageUppercase[i]);
        let keyIndex = alphabet.indexOf(keyResult[i]);
        if (encOrDec) {
          symbol = alphabet[(mesIndex + keyIndex) % alphabet.length]; //по формуле из WiKi
        } else {
          symbol = alphabet[(mesIndex + alphabet.length - keyIndex) % alphabet.length];
        }
      }
      result += symbol;
    }
  }

  if (directMachine) {
    return result;
  } else {
    let resultReverse = result.split('').reverse().join('');
    return resultReverse;
  }
};

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    if (isDirectMachine === undefined) {
      isDirectMachine = true;
    }

    this.isDirectMachine = isDirectMachine;
  }

  encrypt(message, key) {
    if (this.isDirectMachine) {
      return cypher(message, key, true, true);
    } else {
      return cypher(message, key, false, true);
    }
  }

  decrypt(message, key) {
    if (this.isDirectMachine) {
      return cypher(message, key, true, false);
    } else {
      return cypher(message, key, false, false);
    }
  }
}


module.exports = VigenereCipheringMachine;