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
    console.log(this.chain);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position || position !== undefined)) {
      this.chain.splice(position - 1, 1);
      console.log(this.chain);
    } else {
      throw new Error('its not a number or not exist');
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    console.log(this.chain);
    return this;
  },

  finishChain() {
    let stringChain = this.getLength() > 0 ? this.chain.join('~~') : false;
    this.chain = [];
    console.log(`stringChain: ${stringChain}`);
    return stringChain;
  }
};

module.exports = chainMaker;


// chainMaker.addLink(1).addLink(2).addLink(3).finishChain();
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain();

// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();

// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')

// chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain();
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )'