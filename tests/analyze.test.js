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
  expect(analyze([10, 20])).toEqual(15);
});
