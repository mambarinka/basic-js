const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
  }
  cypher(message, key, encOrDec) {
    let result = '';
    let symbol = '';
    let notEngArray = [];
    let messageLowercase = message.toLowerCase();
    let keyLowerCase = key.toLowerCase();

    if (!message || !key) {
      throw new Error('parameter not passed');
    } else {
      for (let i = 0; i < messageLowercase.length; i++) {
        if (!this.alphabet.includes(messageLowercase[i])) { // если какой-либо символ текста не содержит англ
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
        if (!this.alphabet.includes(messageLowercase[i])) { // если символ не англ, то просто вставляй в результат
          symbol = messageLowercase[i];
          keyResult.splice(keyResult[i], 0, ' ');
        } else {
          let mesIndex = this.alphabet.indexOf(messageLowercase[i]);
          let keyIndex = this.alphabet.indexOf(keyResult[i]);

          if (encOrDec === true) {
            symbol = this.alphabet[(mesIndex + keyIndex) % this.alphabet.length]; //по формуле из WiKi
          } else {
            symbol = this.alphabet[(mesIndex + this.alphabet.length - keyIndex) % this.alphabet.length];
          }
        }

        result += symbol;
      }

      console.log(result.toUpperCase());
      return result.toUpperCase();
    }
  }


  encrypt(message, key) {
    this.cypher(message, key, true);
  }


  decrypt(message, key) {
    this.cypher(message, key, false);
  }
}


module.exports = VigenereCipheringMachine;

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('Samelengthkey', 'Samelengthkey');
// KAYIWIAMMOUIW

directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');