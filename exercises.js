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

const caesarCipher = (s) => {
  let key = "abcdefghijklmnopqrstuvwxyz";

  if (s.length === 0) {
    return s;
  } else if (s.charAt(0) === "z" || s.charAt(0) === "Z") {
    // Handles z characters
    if (s.charAt(0) === "z") {
        return "a" + caesarCipher(s.substr(1))
    }
    return "A" + caesarCipher(s.substr(1))
  } else if (key.includes(s.charAt(0).toLowerCase()) === false) {
    // Puncuation check
    return s.charAt(0) + caesarCipher(s.substr(1));
  } else if (s.charAt(0) === s.charAt(0).toUpperCase()) {
    // Uppercase characters
    return (
      key[key.indexOf(s.charAt(0).toLowerCase()) + 1].toUpperCase() +
      caesarCipher(s.substr(1))
    );
  } else {
    return key[key.indexOf(s.charAt(0)) + 1] + caesarCipher(s.substr(1));
  }
};

export { capitalize, reverseString, calculator, caesarCipher };
