// /**
//  * @param {number} n
//  * @return {boolean}
//  */
var isPowerOfTwo = function(n) {
    while (true) {
      if (n === 2 || n === 1) { return true; }
      if (n < 2) { return false; }
      n /= 2;
    }
};

let isPower = isPowerOfTwo(16384);
console.log(isPower);