const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value !== ' ') {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position || position !== undefined)) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('its not a number or not exist');
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let stringChain = this.getLength() > 0 ? this.chain.join('~~') : false;
    this.chain = [];
    return stringChain;
  }
};

module.exports = chainMaker;