const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    if (isDirectMachine === undefined) {
      isDirectMachine = true;
    }

    this.isDirectMachine = isDirectMachine;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
  }
  // cypher(message, key, directMachine, encOrDec) {
  //   let result = '';
  //   let symbol = '';
  //   let notEngArray = [];
  //   let messageLowercase = message.toLowerCase();
  //   console.log(messageLowercase);
  //   let keyLowerCase = key.toLowerCase();
  //   console.log(keyLowerCase);

  //   if (!message || !key) {
  //     throw new Error('parameter not passed');
  //   } else {
  //     for (let i = 0; i < messageLowercase.length; i++) {
  //       if (!this.alphabet.includes(messageLowercase[i])) { // если какой-либо символ текста не содержит англ
  //         notEngArray.push(messageLowercase[i]);
  //       }
  //     }

  //     let keyResult = keyLowerCase.split('');

  //     while (keyResult.length < (messageLowercase.length - notEngArray.length)) { // если ключ меньше по длине , чем текст
  //       for (let i = 0; i < messageLowercase.length; i++) {
  //         keyResult.push(keyResult[i]);
  //       }
  //     }

  //     for (let i = 0; i < messageLowercase.length; i++) {
  //       if (!this.alphabet.includes(messageLowercase[i])) { // если символ не англ, то просто вставляй в результат
  //         symbol = messageLowercase[i];
  //         keyResult.splice(keyResult[i], 0, ' ');
  //       } else {
  //         let mesIndex = this.alphabet.indexOf(messageLowercase[i]);
  //         let keyIndex = this.alphabet.indexOf(keyResult[i]);

  //         if (encOrDec) {
  //           symbol = this.alphabet[(mesIndex + keyIndex) % this.alphabet.length]; //по формуле из WiKi
  //         } else {
  //           symbol = this.alphabet[(mesIndex + this.alphabet.length - keyIndex) % this.alphabet.length];
  //         }
  //       }

  //       result += symbol.toUpperCase();
  //       // console.log(result);
  //     }

  //     if (directMachine) {
  //       console.log(`result: ${result}`);
  //       console.log(typeof result);
  //       return result;
  //     } else {
  //       let resultReverse = result.split('').reverse().join('');
  //       console.log(`resultReverse: ${resultReverse}`);
  //       console.log(directMachine);
  //       return resultReverse;
  //     }
  //   }
  // }

  encrypt(message, key) {
    // if (this.isDirectMachine) {
    //   console.log('directmachine');
    //   this.cypher(message, key, true, true);
    // } else if (this.isDirectMachine) {
    //   console.log('not directmachine');
    //   this.cypher(message, key, false, true);
    // }
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

        result += symbol.toUpperCase();
      }

      if (this.isDirectMachine) {
        console.log(`result: ${result}`);
        return result;
      } else {
        let resultReverse = result.split('').reverse().join('');
        console.log(`resultReverse: ${resultReverse}`);
        return resultReverse;
      }
    }
  }

  decrypt(message, key) {
    // if (this.isDirectMachine) {
    //   console.log('directmachine');
    //   this.cypher(message, key, true, false);
    // } else {
    //   console.log('not directmachine');
    //   this.cypher(message, key, false, false);
    // }

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


          symbol = this.alphabet[(mesIndex + this.alphabet.length - keyIndex) % this.alphabet.length];
        }

        result += symbol.toUpperCase();
      }

      if (this.isDirectMachine) {
        console.log(`result: ${result}`);
        return result;
      } else {
        let resultReverse = result.split('').reverse().join('');
        console.log(`resultReverse: ${resultReverse}`);
        return resultReverse;
      }

    }
  }
}


module.exports = VigenereCipheringMachine;

const reverseMachine = new VigenereCipheringMachine(false);
// directMachine.encrypt('Samelengthkey', 'Samelengthkey');
// // KAYIWIAMMOUIW

// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');

// directMachine.encrypt('attack at dawn!', 'alphonse');
// AEIHQX SX DLLU!
// AEIHQX SX DLLU!

// directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');
// LEARN FRONTEND DEVELOPMENT :)


// directMachine.decrypt(directMachine.encrypt('attack at dawn!', 'alphonse'), 'alphonse');
// h!
// mh
// result: T!
// string
// !t
// mh
// result: !H
// string
// te(
// mq
// result: FU(
// string
// (uf
// mq
// result: (IP
// string

// directMachine.decrypt(directMachine.encrypt('h!', 'mh'), 'alphonse');
reverseMachine.encrypt('h!', 'mh');
// directMachine.encrypt('!t', 'mh');