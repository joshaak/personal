const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[target] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
