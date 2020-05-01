function capitalize(string) {
  let aString = string;
  let capitalizedString = `${aString.charAt(0).toUpperCase()}${string.slice(
    1
  )}`;
  return capitalizedString;
}

export default capitalize;
