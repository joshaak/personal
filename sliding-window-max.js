const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;
  for (let i = 0; i < n - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
  return result;
};
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));
