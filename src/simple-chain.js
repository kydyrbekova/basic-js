
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if(value !== undefined) this.result.push(value);
     else this.result.push('');
    return this;
 },
  removeLink(position) {
    if(typeof(position) != 'number' || position < 1 || position > this.result.length){
      this.result = []
      throw new Error("Position is not correct!");
    } 
      this.result.splice(position-1, 1)
      return this;
    
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = this.result.map( el => {
      if(el==='') {return "( )"} else { return `( ${el} )`}
    }).join("~~");
    this.result = [];
    return str;
  
  }
};

module.exports = chainMaker;
