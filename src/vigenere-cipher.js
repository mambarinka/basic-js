const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];

    // this.encrypt = this.encrypt.bind(this);
  }

  // if (!VigenereCipheringMachine.encrypt) {
  //   throw new Error("parameter not passed");
  // }

  encrypt(message, key) {
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
          symbol = this.alphabet[(mesIndex + keyIndex) % this.alphabet.length]; //по формуле из WiKi
        }

        result += symbol;
      }

      console.log(result.toUpperCase());
      return result.toUpperCase();
    }
  }


  decrypt(message, key) {
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

      for (let i = 0; i < message.length; i++) {
        if (!this.alphabet.includes(messageLowercase[i])) { // если символ не англ, то просто вставляй в результат
          symbol = messageLowercase[i];
          keyResult.splice(keyResult[i], 0, ' ');
        } else {
          let mesIndex = this.alphabet.indexOf(messageLowercase[i]);
          let keyIndex = this.alphabet.indexOf(keyResult[i]);
          symbol = this.alphabet[(mesIndex + this.alphabet.length - keyIndex) % this.alphabet.length]; //по формуле из WiKi
        }

        result += symbol;
      }

      return result.toUpperCase();
    }
  }
}


module.exports = VigenereCipheringMachine;

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('Samelengthkey', 'Samelengthkey');
// KAYIWIAMMOUIW