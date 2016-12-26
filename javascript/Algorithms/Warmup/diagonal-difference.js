function main() {
	var n = parseInt(readLine());
	var difference = 0;

	for (i = 0; i < n; ++i) {
		var row = readLine().split(' ');
		difference += row[i] - row[n - i - 1];
	}

	console.log(Math.abs(difference));
}
