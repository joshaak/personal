const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};
console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 0));

const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
};
