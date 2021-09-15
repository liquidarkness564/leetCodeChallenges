/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/

Longest Turbulent Subarray

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Example 1:
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

Example 2:
Input: arr = [4,8,12,16]
Output: 2

Example 3:
Input: arr = [100]
Output: 1
*/

var maxTurbulenceSize = function(arr) {
  arr = arr || [];
  if (!arr.length) { return 0; }
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      for (let j = i + 1; j < arr.length; j++) {
        let turb = arr.slice(i, j + 1)
        if (isTurbulent(turb)) {
          if (turb.length > max) { max = turb.length; }
        }
      }
    }
  }
  return max;
};

var isTurbulent = arr => {
  if (arr[0] < arr[1]) {
      for (let i = 0; i < arr.length; i++) {
          if (i !== arr.length - 1) {
              if (i % 2 === 0) {
                  if (!(arr[i] < arr[i + 1])) { return false; }
              } else {
                  if (!(arr[i] > arr[i + 1])) { return false; }
              }
          }
      }
  } else if (arr[0] > arr[1]) {
      for (let i = 0; i < arr.length; i++) {
          if (i !== arr.length - 1) {
              if (i % 2 === 0) {
                  if (!(arr[i] > arr[i + 1])) { return false; }
              } else {
                  if (!(arr[i] < arr[i + 1])) { return false; }
              }
          }
      }
  } else {
      return false;
  }
  return true;
}

console.log(maxTurbulenceSize([2, 2, 1, 2, 1, 2, 1, 1, 3]))

module.exports = maxTurbulenceSize;
