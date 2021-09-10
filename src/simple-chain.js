import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    const chain = this.chainArr.join("~~");
    this.chainArr = [];
    return chain;
  },
};
