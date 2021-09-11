import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(str, key) {
    let result = "";

    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++) {
      if (j === key.length) j = 0;

      if (this.alphabet.indexOf(str[i]) === -1) {
        result += str[i];
        continue;
      }

      let value =
        (this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[j])) % 26;
      result += this.alphabet[value];

      j++;
    }

    if (this.direction === false) {
      result = result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(str, key) {
    let result = "";

    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++) {
      if (j === key.length) j = 0;

      if (this.alphabet.indexOf(str[i]) === -1) {
        result += str[i];
        continue;
      }

      let value =
        (this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[j])) % 26;
      if (value < 0) {
        value = value + 26;
      }
      result += this.alphabet[value];

      j++;
    }

    if (this.direction === false) {
      result = result.split("").reverse().join("");
    }

    return result;
  }
}
