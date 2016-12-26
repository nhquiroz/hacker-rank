function main() {
	var n = parseInt(readLine());
	var arr = readLine().split(' ');
	arr = arr.map(Number);

	var sum = arr.reduce(add, 0);

	function add(a, b) {
		return a + b;
	}

	console.log(sum);
}
