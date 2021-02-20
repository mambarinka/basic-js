const CustomError = require("../extensions/custom-error");

const cypher = function (message, key, directMachine, encOrDec) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];
  let result = '';
  let symbol = '';
  let notEngArray = [];
  let messageLowercase = message.toLowerCase();
  let keyLowerCase = key.toLowerCase();

  if (!message || !key) {
    throw new Error('parameter not passed');
  } else {
    for (let i = 0; i < messageLowercase.length; i++) {
      if (!alphabet.includes(messageLowercase[i])) { // если какой-либо символ текста не содержит англ
        notEngArray.push(messageLowercase[i]);
      }
    }

    let keyResult = keyLowerCase.split('');

    while (keyResult.length < (messageLowercase.length - notEngArray.length)) { // если ключ меньше по длине , чем текст
      for (let i = 0; i < messageLowercase.length; i++) {
        keyResult.push(keyResult[i]);
      }
    }

    for (let i = 0; i < messageLowercase.length; i++) {
      if (!alphabet.includes(messageLowercase[i])) { // если символ не англ, то просто вставляй в результат
        symbol = messageLowercase[i];
        keyResult.splice(keyResult[i], 0, ' ');
      } else {
        let mesIndex = alphabet.indexOf(messageLowercase[i]);
        let keyIndex = alphabet.indexOf(keyResult[i]);
        if (encOrDec) {
          symbol = alphabet[(mesIndex + keyIndex) % alphabet.length]; //по формуле из WiKi
        } else {
          symbol = alphabet[(mesIndex + alphabet.length - keyIndex) % alphabet.length];
        }
      }
      result += symbol.toUpperCase();
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