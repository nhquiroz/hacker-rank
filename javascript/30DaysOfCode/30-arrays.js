function main() {
  var n = parseInt(readLine());
  var arr = readLine().split(' ');
  arr = arr.map(Number);

  console.log(arr.reverse().join(' '));
}
