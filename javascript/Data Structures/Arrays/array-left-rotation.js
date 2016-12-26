function main() {
	var temp = readLine().split(' ');
	var n = parseInt(temp[0]);
	var d = parseInt(temp[1]);
	var arr = readLine().split(' ');
	arr = arr.map(Number);

	rotateArray(arr, d);

	console.log(arr.join(' '));

	function rotateArray(array, times) {
		for (var i = times; i > 0; --i) {
			var elem = array.shift();
			array.push(elem);
		}
	}
}
