function reverseString(string) {
  let aString = string;
  let reversedString = aString.split("").reverse().join("");
  return reversedString;
}

export default reverseString;
