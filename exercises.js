const capitalize = (s) => {
  let arr = s.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.toString().replaceAll(",", "");
};

const reverseString = (s) => {
  if (s.length === 0) {
    return s;
  }
  return reverseString(s.substr(1)) + s.charAt(0);
};

const calculator = () => {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    if (b < 0) {
      return a + Math.abs(b);
    }
    return a - b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
};

export { capitalize, reverseString, calculator };
