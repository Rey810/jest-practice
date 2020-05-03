function analyze(array) {
  let anArray = array;
  if (anArray == undefined) {
    throw new Error("Your array is empty or isn't even an array!");
  }

  //average
  let average = getAverage(anArray);
  let min = getMin(anArray);
  let max = getMax(anArray);
  return {
    average: average,
    min: min,
    max: max,
    length: anArray.length,
  };
}

function getAverage(array) {
  let sum = array.reduce((total, num) => {
    total += num;
    return total;
  }, 0);
  let average = sum / array.length;
  return average;
}

function getMin(array) {
  return Math.min(...array);
}

function getMax(array) {
  return Math.max(...array);
}

export default analyze;
