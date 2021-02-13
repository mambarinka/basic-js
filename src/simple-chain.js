const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    console.log(this.chain);
    return this;
  },

  removeLink(position) {
    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let stringChain = this.getLength() > 0 ? this.chain.join('~~') : console.log('no');
    this.chain = [];
    console.log(`stringChain: ${stringChain}`);
    return stringChain;
  }
};

module.exports = chainMaker;


// chainMaker.addLink(1).addLink(2).addLink(3).finishChain();
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain();