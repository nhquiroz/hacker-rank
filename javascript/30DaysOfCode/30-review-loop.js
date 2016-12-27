function main() {
	var t = parseInt(readLine());

	for (var i = 0; i < t; ++i) {
		var currentString = readLine();
		var evenCharacters = '';
		var oddCharacters = '';
		var currentCharacter = '';

		for (var j = 0; j < currentString.length; ++j) {
			currentCharacter = currentString[j];

			if (j % 2 === 0) {
				evenCharacters += currentCharacter;
			} else {
				oddCharacters += currentCharacter;
			}
		}

		console.log(evenCharacters + ' ' + oddCharacters);
	}
}
