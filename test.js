import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} from "./exercises";

describe("reverseString tests", () => {
  test("String gets capitalized", () => {
    expect(capitalize("app")).toBe("App");
  });

  test("String gets reversed", () => {
    expect(reverseString("Test")).toBe("tseT");
  });
});

describe("Calculator object methods", () => {
  test("Addition", () => {
    expect(calculator().add(1, 2)).toBe(3);
  });

  test("Subtract", () => {
    expect(calculator().subtract(-5, 3)).toBe(-8);
  });

  test("Subtract negative b", () => {
    expect(calculator().subtract(5, -3)).toBe(8);
  });

  test("Subtract two negatives", () => {
    expect(calculator().subtract(-5, -3)).toBe(-2);
  });
});

describe("Caesar cipher tests", () => {
  test("Shift characters", () => {
    expect(caesarCipher("hello world")).toBe("ifmmp xpsme");
  });

  test("Capital letters", () => {
    expect(caesarCipher("Hello worlD")).toBe("Ifmmp xpsmE");
  });

  test("Ignore puncuation", () => {
    expect(caesarCipher(`don't ask, don't tell`)).toBe(`epo'u btl, epo'u ufmm`);
  });

  test("Z characters", () => {
    expect(caesarCipher("Zebraz")).toBe("Afcsba");
  });
});

describe("analyzeArray tests", () => {
  test("Positive integers in array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Negative integers in array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, -6])).toStrictEqual({
        average: 2,
        min: -6,
        max: 8,
        length: 6,
      });
  })
});
