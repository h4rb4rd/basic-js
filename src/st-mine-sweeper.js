import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const minefield = [];

  for (const arr of matrix) {
    minefield.push([...arr]);
  }

  for (let row = 0; row < minefield.length; row++) {
    for (let col = 0; col < minefield[row].length; col++) {
      minefield[row][col] = 0;

      if (matrix[row - 1]) {
        if (matrix[row - 1][col - 1]) {
          minefield[row][col]++;
        }
        if (matrix[row - 1][col]) {
          minefield[row][col]++;
        }
        if (matrix[row - 1][col + 1]) {
          minefield[row][col]++;
        }
      }
      if (matrix[row][col - 1]) {
        minefield[row][col]++;
      }
      if (matrix[row][col + 1]) {
        minefield[row][col]++;
      }

      if (matrix[row + 1]) {
        if (matrix[row + 1][col - 1]) {
          minefield[row][col]++;
        }
        if (matrix[row + 1][col]) {
          minefield[row][col]++;
        }
        if (matrix[row + 1][col + 1]) {
          minefield[row][col]++;
        }
      }
    }
  }

  return minefield;
}
