const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(message, key) {
if (!message || !key) {
  throw new Error('parameter not passed');
}
  }
  decrypt(message, key) {

  }
}

module.exports = VigenereCipheringMachine;

const directMachine = new VigenereCipheringMachine();


directMachine.encrypt('attack at dawn!', 'alphonse');
// AEIHQX SX DLLU!

directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// ATTACK AT DAWN!
