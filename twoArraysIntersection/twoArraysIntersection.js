// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersect = function(nums1, nums2) {
  nums1 = nums1 || [];
  nums2 = nums2 || [];
  let string1 = nums1.join('');
  let string2 = nums2.join('');
  let inter = '';
  for (let i = 0; i < string1.length; i++) {
    for (let j = i; j < string1.length; j++) {
      if (string2.includes(string1.slice(i, j+1)) || string2.includes(string1.split('').reverse('').join('').slice(i, j+1))) {
        if (string1.slice(i, j+1).length > inter.length) {
          inter = string1.slice(i, j+1);
        }
      }
    }
  }
  inter = inter.split('');
  return inter.map(i => Number(i));
};

let nums1 = [2, 1];
let nums2 = [1, 1];
console.log(intersect(nums1, nums2));