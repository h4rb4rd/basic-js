import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};
  const arr = domains.map((el) => el.split(".").reverse(""));

  arr.forEach((e) => {
    let key = "";
    e.forEach((el) => {
      key = `${key}.${el}`;
      !obj[key] ? (obj[key] = 1) : (obj[key] += 1);
    });
  });

  return obj;
}
