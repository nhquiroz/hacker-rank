function main() {
  var n = parseInt(readLine());

  console.log(factorial(n));

  function factorial(i) {
    if (i <= 1) {
      return 1;
    }

    return i * factorial(i - 1);
  }
}
