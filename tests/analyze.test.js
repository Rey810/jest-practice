import analyze from "../functions/analyze";

test("analyze returns an object", () => {
  expect(typeof analyze([1, 2])).toBe("object");
});

test("analyze throws an error if the array is empty", () => {
  () => {
    expect(analyze()).toThrow();
  };
});

test("analyze returns the average of the array", () => {
  expect(analyze([10, 20])).toMatchObject({ average: 15 });
});

test("analyze returns the min number in array", () => {
  expect(analyze([10, 5, 20])).toMatchObject({ min: 5 });
});

test("analyze returns the max number in array", () => {
  expect(analyze([10, 5, 20])).toMatchObject({ max: 20 });
});

test("analyze returns the length of the array", () => {
  expect(analyze([10, 5, 20])).toMatchObject({ length: 3 });
});

test("anaylze returns full analysis of average, min, max, and length", () => {
  expect(analyze([10, 20])).toEqual({
    average: 15,
    min: 10,
    max: 20,
    length: 2,
  });
});
