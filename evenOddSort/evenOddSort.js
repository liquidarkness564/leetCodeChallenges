var sortArrayByParityII = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] % 2 === 0) {
        if (i % 2 === 0) {
          break;
        } else {
          if (nums[j] % 2 === 1) {
            let swap = nums[j];
            nums[j] = nums[i];
            nums[i] = swap;
          }
        }
      } else if (nums[i] % 2 === 1) {
        if (i % 2 === 1) {
          break;
        } else {
          if (nums[j] % 2 === 0) {
            let swap = nums[j];
            nums[j] = nums[i];
            nums[i] = swap;
          }
        }
      }
    }
  }
  return nums;
};

let nums = [2,3];
console.log(sortArrayByParityII(nums));