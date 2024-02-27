function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(0, 5));
// palindrome

function palindrome(num) {
  const a = String(num);
  return a.length < 0 ? false : true; //a.split("").reverse().join("");
}
console.log(palindrome(121));
