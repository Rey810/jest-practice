import caesarCipher from "../functions/caesarCipher";

test("cC is a function", () => {
  expect(typeof caesarCipher).toBe("function");
});

test("cC returns a string", () => {
  expect(typeof caesarCipher("abc")).toBe("string");
});

test("cC returns shifted letters", () => {
  expect(caesarCipher("abc")).toBe("bcd");
});

test("cC maintains case", () => {
  expect(caesarCipher("AbcD")).toBe("BcdE");
});

test("cC keeps punctuation", () => {
  expect(caesarCipher("abc.")).toBe("bcd.");
});

test("cC can wrap z to a", () => {
  expect(caesarCipher("abz")).toBe("bca");
});
