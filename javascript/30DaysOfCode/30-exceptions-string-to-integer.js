function main() {
  var s = readLine();
  s = parseInt(s);

  try {
    new Array(s);
    console.log(s);
  } catch (err) {
    console.log('Bad String');
  }
}
