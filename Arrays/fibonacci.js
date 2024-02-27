function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(15));
//

function reverseString(str) {
  if (str == "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
