const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];

    this.encrypt = this.encrypt.bind(this);
  }

  // if (!VigenereCipheringMachine.encrypt) {
  //   throw new Error("parameter not passed");
  // }

  encrypt(message, key) {
    let result = '';
    let symbol = '';
    let notEngArray = [];

    if (!message || !key) {
      throw new Error('parameter not passed');
    } else {
      for (let i = 0; i < message.length; i++) {
        if (!this.alphabet.includes(message[i])) { // если какой-либо символ текста не содержит англ
          notEngArray.push(message[i]);
        }
      }

      let keyResult = key.split('');

      while (keyResult.length < (message.length - notEngArray.length)) { // если ключ меньше по длине , чем текст
        for (let i = 0; i < message.length; i++) {
          keyResult.push(keyResult[i]);
        }
      }

      for (let i = 0; i < message.length; i++) {
        if (!this.alphabet.includes(message[i])) { // если символ не англ, то просто вставляй в результат
          symbol = message[i];
          keyResult.splice(keyResult[i], 0, ' ');
        } else {
          let mesIndex = this.alphabet.indexOf(message[i]);
          let keyIndex = this.alphabet.indexOf(keyResult[i]);
          symbol = this.alphabet[(mesIndex + keyIndex) % this.alphabet.length];  //по формуле из WiKi
        }

        console.log(`symbol${i}: ${symbol}`);
        result += symbol;
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


directMachine.encrypt('attack at dawn!', 'alphonse');
// AEIHQX SX DLLU!

// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// ATTACK AT DAWN!





// directMachine.encrypt(' ', 'alphonse');


// let maxLength = Math.max(message.length, key.length);
// console.log(`
// maxLength: $ {
//   maxLength
// }
// `);
// // let result = '';
// // let resultIndex = '';

// // // console.log(this.alphabet);

// // for (let i = 0; i < maxLength; i++) {
// //   let mesIndex;
// //   let keyIndex;

// //   if (this.alphabet.indexOf(message[i]) < 0) {
// //     console.log('символ текста НЕ содержится в англ.алфавите');
// //     resultIndex = message[i];
// //     result += resultIndex;
// //     console.log(`
// resultIndex$ {
//   i
// }: $ {
//   resultIndex
// }
// `);
// //     console.log(`
// message$ {
//   i
// }: $ {
//   message[i]
// }
// `);
// //     console.log(`
// result$ {
//   i
// }: $ {
//   result
// }
// `);
// //     continue;
// //   } else {
// //     console.log('символ текста содержится в англ.алфавите');

// //     if (i >= message.length) { // если ключ длиннее текста
// //       mesIndex = this.alphabet.indexOf(message[i % message.length]);
// //       // console.log(`
// mesIndex25: $ {
//   mesIndex
// }
// `);
// //       //поиск по индексу в алфавите всех символов текста
// //     } else {
// //       mesIndex = this.alphabet.indexOf(message[i]);
// //       // console.log(`
// mesIndex29: $ {
//   mesIndex
// }
// `);
// //     }

// // // СДЕЛАТЬ КЛЮЧ ТАКОЙ ЖЕ ДЛИНЫ КАК И ТЕКСТ ИЗНАЧАЛЬНО!!!

// //     if (i >= key.length) { // если текст длиннее ключа           
// //       keyIndex = this.alphabet.indexOf(key[i % key.length]);
// //       //поиск по индексу в алфавите всех символов ключа
// //     } else {
// //       keyIndex = this.alphabet.indexOf(key[i]);
// //       // console.log(`
// keyIndex38: $ {
//   keyIndex
// }
// `);
// //     }



// //     // if (this.alphabet.indexOf(message[i - 1]) < 0) {
// //     //   keyIndex--;
// //     // }

// //     resultIndex = this.alphabet[(((this.alphabet.length + (mesIndex + keyIndex)) % this.alphabet.length))];
// //     console.log(`
// message$ {
//   i
// }: $ {
//   message[i]
// }, mesIndex$ {
//   i
// }: $ {
//   mesIndex
// }
// `);
// //     console.log(`
// key$ {
//   i
// }: $ {
//   key[i]
// }, keyIndex$ {
//   i
// }: $ {
//   keyIndex
// }
// `);

// //     console.log(`
// resultIndex$ {
//   i
// }: $ {
//   resultIndex
// }
// `);

// //     result += resultIndex;
// //     console.log(`
// result$ {
//   i
// }: $ {
//   result
// }
// `);
// //   }