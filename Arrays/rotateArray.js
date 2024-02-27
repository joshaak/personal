function rotateArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
    console.log(k);
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArrayOptimised(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
  function reverse(nums, left, right) {
    while (left < right) {
      const temp = nums[left];
      nums[left++] = nums[right];
      nums[right--] = temp;
    }
  }
}
console.log(rotateArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3));
