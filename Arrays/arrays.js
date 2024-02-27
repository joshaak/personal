const arr = new Array();
let arr1 = ["apple", "banana", "mango"];

console.log(arr1[0]);
let person = {
  name: "Sharukh",
  age: 25,
};

arr1.push("orange");
arr1.pop();

arr1.concat([1, 2, 3]);
console.log();
function secondLargest(arr) {
  const set = Array.from(new Set(arr));

  const output = set.sort((a, b) => b - a);
  return output[1];
}
console.log(secondLargest([12, 35, 1, 10, 34, 1, 35]));

function secondLargestOptimized(arr) {
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1, 35]));
