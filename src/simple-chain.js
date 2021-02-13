// const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    // return chain.length;
  },

  addLink(value) {
    console.log(this.chain);


    this.chain.push(`~( ${value} )~`);
    console.log(this.chain);
    return chainMaker;
  },

  removeLink(position) {

  },

  reverseChain() {

  },

  finishChain() {
    return chainMaker;
  }
};

// module.exports = chainMaker;


chainMaker.addLink(1).addLink(2).addLink(3);
// chainMaker.addLink(1).addLink(2).addLink(3).finishChain();