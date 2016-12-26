function main() {
	var nTemp = readLine().split(' ');
	var n = parseInt(nTemp[0]);
	var k = parseInt(nTemp[1]);
	var q = parseInt(nTemp[2]);

	var a = readLine().split(' ');
	a = a.map(Number);

	rotateArray(a, k);

	for (var a0 = 0; a0 < q; a0++) {
		var m = parseInt(readLine());

		console.log(a[m]);
	}

	function rotateArray(array, times) {
		for (var rotations = times; rotations > 0; rotations--) {
			var poppedValue = array.pop();
			array.unshift(poppedValue);
		}
	}
}
