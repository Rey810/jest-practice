function analyze(array) {
  let anArray = array;
  console.log(anArray);
  if (anArray == undefined) {
    throw new Error("Your array is empty or isn't even an array!");
  }

  //average
  let average = getAverage(anArray);
  return {
    average: average,
  };
}

function getAverage(array) {
  let sum = array.reduce((total, num) => {
    total = total + num;
  }, 0);
  let average = sum / array.length;
  console.log("average", array.length);
  return average;
}

export default analyze;
