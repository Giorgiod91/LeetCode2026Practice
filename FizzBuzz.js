var fizzBuzz = function (n) {
  // empty array
  const result = [];
  // loop in the length of n
  for (let i = 1; i <= n; i++) {
    // then check if n is dividable by 5 and 3 if so
    // push FizzBuzz into the array
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};
