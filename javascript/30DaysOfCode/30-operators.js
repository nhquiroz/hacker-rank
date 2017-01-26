function main() {
  var mealCost = Number(readLine());
  var tipPercentage = Number(readLine());
  var taxPercentage = Number(readLine());

  var tip = mealCost * tipPercentage / 100;
  var tax = mealCost * taxPercentage / 100;

  var totalCost = Math.round(mealCost + tip + tax);

  console.log('The total meal cost is ' + totalCost + ' dollars.');
}
