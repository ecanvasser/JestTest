import { capitalize, reverseString, calculator } from "./exercises";

test("String gets capitalized", () => {
  expect(capitalize("app")).toBe("App");
});

test("String gets reversed", () => {
  expect(reverseString("Test")).toBe("tseT");
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
