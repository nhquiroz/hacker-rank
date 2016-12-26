function main() {
	var n = parseInt(readLine());
	var ar = readLine().split(' ');
	ar = ar.map(Number);

	var reversedElements = '';

	for (var i = n - 1; i >= 0; --i) {
		reversedElements = reversedElements + ar[i] + ' ';
	}

	reversedElements.slice(n - 1);

	console.log(reversedElements);
}
