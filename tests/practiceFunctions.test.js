import capitalize from "../functions/capitalize";
import reverseString from "../functions/reverseString";
import calculator from "../functions/calculator";

//capitalize string test
test("capitalize", () => {
  expect(capitalize("rey")).toBe("Rey");
});

// reverse string test
test("reverse the string", () => {
  expect(reverseString("rey")).toBe("yer");
});

// calculator
test("is an object", () => {
  expect(typeof calculator).toBe("object");
});

test("contains sum, subtract, multiply, divide functions", () => {
  expect(Object.keys(calculator)).toStrictEqual([
    "sum",
    "subtract",
    "divide",
    "multiply",
  ]);
});

test("sum function works", () => {
  expect(calculator.sum(2, 4)).toBe(6);
});

test("subtract function works", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("divide function works", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("multiply function works", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
