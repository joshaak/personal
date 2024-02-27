function Sharukh() {
  return Rehana();
}
function Rehana() {
  return Vedant();
}

function Vedant() {
  return Chirag();
}
function Chirag() {
  return Ajay();
}
function Ajay() {
  //base case
  return true;
}
Sharukh();

// function factorial(arr) {
//   if (arr.length <= 0) {
//     return 1;
//   } else {
//     return arr[arr.length - 1] * factorial(arr.slice(0, arr.length - 1));
//   }
// }

// console.log(factorial([1, 2, 3, 4]));

function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//
