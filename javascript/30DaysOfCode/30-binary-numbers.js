function main() {
  var n = parseInt(readLine());
  var binaryN = getBinaryRepresentationOf(n);

  console.log(getMaximumNumberOfConsecutiveOnes(binaryN));

  function getBinaryRepresentationOf(base10Integer) {
    return (base10Integer >>> 0).toString(2);
  }

  function getMaximumNumberOfConsecutiveOnes(binaryNumber) {
    var arr = binaryNumber.split('').map(Number);
    var maximumNumber = 0;
    var currentNumber = 0;

    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === 1) {
        currentNumber++;
        if (currentNumber > maximumNumber) {
          maximumNumber = currentNumber;
        }
      } else {
        currentNumber = 0;
      }
    }

    return maximumNumber;
  }
}
