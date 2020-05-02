function ceasarCipher(string) {
  const openString = string;
  let charCodes = getCodes(openString);

  let encryptedString = shiftCodes(charCodes)
    .map((code) => String.fromCharCode(code))
    .join("");
  // join array into a string
  return encryptedString;
}

// a-z is 97 - 122
function wrapCode(code) {
  let codeWrapped;
  code == 122 ? (codeWrapped = 97) : (codeWrapped = 65);
  return codeWrapped;
}

function shiftCodes(charCodes) {
  // shift each letter by a factor of 1
  let shiftedCodes = charCodes.map((code) => {
    if (code == 122 || code == 90) {
      return wrapCode(code);
    } else {
      // return the same code if it's a special character
      if (
        (code <= 64 && code >= 32) ||
        (code <= 96 && code >= 91) ||
        (code <= 126 && code >= 123)
      ) {
        return code;
      } else {
        return code + 1;
      }
    }
  });
  return shiftedCodes;
}

function getCodes(string) {
  let unencryptedString = string;
  // split string into array
  let stringArray = unencryptedString.split("");
  // get character codes for letters
  let charCodes = stringArray.map((letter) => letter.charCodeAt());
  return charCodes;
}

export default ceasarCipher;
