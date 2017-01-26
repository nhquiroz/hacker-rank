function main() {
  var n = parseInt(readLine());
  var phoneBook = new Map();

  for (var i = 0; i < n; ++i) {
    var entry = readLine().split(' ');
    phoneBook.set(entry[0], entry[1]);
  }

  var name = readLine();
  while (name !== undefined) {
    if (phoneBook.has(name)) {
      console.log(name + '=' + phoneBook.get(name));
    } else {
      console.log('Not found');
    }

    name = readLine();
  }
}
