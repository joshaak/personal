const fibonacci = function (x) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
};

fibonacci(5);

const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};
const fib1 = (n) => (n <= 1 ? n : fib1(n - 1) + fib(n - 2));
