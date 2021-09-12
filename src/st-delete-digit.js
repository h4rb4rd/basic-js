import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = [...`${n}`];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    if (+arr.join("") > num) {
      num = +arr.join("");
    }
    arr = [...`${n}`];
  }
  return num;
}
