// Given an m x n matrix, return all elements of the matrix in spiral order.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

const makeSpiralMatrix = (matrix) => {
  let spiral = [];
  let leftBound = 0;
  let topBound = 0;
  let rightBound = matrix[0].length - 1;
  let bottomBound = matrix.length - 1;
  while (!(leftBound >= rightBound) && !(topBound >= bottomBound)) {
    for (let i = leftBound; i < rightBound; i++) {
      spiral.push(matrix[topBound][i]);
    }
    for (let i = topBound; i < bottomBound; i++) {
      spiral.push(matrix[i][rightBound]);
    }
    for (let i = rightBound; i > leftBound; i--) {
      spiral.push(matrix[bottomBound][i]);
    }
    for (let i = bottomBound; i > topBound; i--) {
      spiral.push(matrix[i][leftBound]);
    }
    leftBound+=1;
    topBound+=1;
    rightBound-=1;
    bottomBound-=1;
  }
  if (leftBound === rightBound && topBound === bottomBound) {
    spiral.push(matrix[topBound][leftBound])
  } else if (leftBound === rightBound) {
    for (let i = topBound; i <= bottomBound; i++) {
      spiral.push(matrix[i][leftBound]);
    }
  } else {
    for (let i = leftBound; i <= rightBound; i++) {
      spiral.push(matrix[topBound][i]);
    }
  }
  return spiral;
}

console.log(makeSpiralMatrix([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11,12,13,14,15,16,17,18,19,20]
]))



// [
//  [1,  2,  3,  4,  5],
//  [6,  7,  8,  9,  10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20],
//  [21, 22, 23, 24, 25]
// ]