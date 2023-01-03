var fizzBuzz = function (n) {
  let result = [];
  while (n) {
    if (n % 15 == 0) {
      result.unshift("FizzBuzz");
    } else if (n % 3 === 0) {
      result.unshift("Fizz");
    } else if (n % 5 === 0) {
      result.unshift("Buzz");
    } else {
      result.unshift(`${n}`);
    }
    n--;
  }

  return result;
};

console.log(fizzBuzz(15));
