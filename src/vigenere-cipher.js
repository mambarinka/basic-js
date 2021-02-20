const CustomError = require("../extensions/custom-error");

const cypher = function (message, key, directMachine, encOrDec) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  let result = '';
  let symbol = '';
  let messageUppercase = message.toUpperCase();
  let keyUpperCase = key.toUpperCase();
  let keyCounter = 0;

  for (let i = 0; i < messageUppercase.length; i++) {
    if (!alphabet.includes(messageUppercase[i])) { // если символ не англ, то просто вставляй символ
      symbol = messageUppercase[i];
    } else {
      let mesIndex = alphabet.indexOf(messageUppercase[i]);
      let keyIndex = alphabet.indexOf(keyUpperCase[keyCounter % keyUpperCase.length]);
      keyCounter++;

      if (encOrDec) {
        symbol = alphabet[(mesIndex + keyIndex) % alphabet.length]; //по формуле из WiKi
      } else {
        symbol = alphabet[(mesIndex + alphabet.length - keyIndex) % alphabet.length];
      }

    }
    result += symbol;
  }

  if (directMachine) {
    console.log(result);
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