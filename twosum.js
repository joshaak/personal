const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// using js objects

const twoSum1 = function (nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    console.log(obj);
    if (obj[target - n] >= 0) {
      console.log(obj[target - n]);
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};
console.log(twoSum1([2, 7, 11, 15], 26));
// nums=[2,7,11,15] target=26
