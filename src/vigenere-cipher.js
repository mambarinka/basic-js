const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.encrypt = this.encrypt.bind(this);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('parameter not passed');
    } else {
      let maxLength = Math.max(message.length, key.length);
      let result = '';

      console.log(this.alphabet);

      for (let i = 0; i < maxLength; i++) {
        let mesIndex;
        let keyIndex;

        if (i >= message.length) { // если ключ длиннее текста
          mesIndex = this.alphabet.indexOf(message[i % message.length]);
          //поиск по индексу в алфавите всех символов текста
        } else {
          mesIndex = this.alphabet.indexOf(message[i]);
        }

        if (i >= key.length) { // если текст длиннее ключа
          keyIndex = this.alphabet.indexOf(key[i % key.length]);
          //поиск по индексу в алфавите всех символов ключа
        } else {
          keyIndex = this.alphabet.indexOf(key[i]);
        }

        console.log(`mesIndex: ${mesIndex}`);
        console.log(`keyIndex: ${keyIndex}`);

        let resultIndex = this.alphabet[(((this.alphabet.length + (mesIndex + keyIndex)) % this.alphabet.length))];
        result += resultIndex;
      }
      console.log(result);
      return result;
    }
  }



  decrypt(message, key) {

  }
}

module.exports = VigenereCipheringMachine;

const directMachine = new VigenereCipheringMachine();


// directMachine.encrypt('attack at dawn!', 'alphonse');
// AEIHQX SX DLLU!

// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// ATTACK AT DAWN!


directMachine.encrypt('ATTACKATDAWN', 'LEMON');