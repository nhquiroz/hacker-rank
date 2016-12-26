function main() {
	var n = parseInt(readLine());

	for (var i = 0; i < n; ++i) {
		var spaces = '';
		var hashes = '';

		for (var j = 0; j < n - i - 1; ++j) {
			spaces += ' ';
		}

		for (var k = 0; k < i + 1; ++k) {
			hashes += '#';
		}

		console.log(spaces + hashes);
	}
}
