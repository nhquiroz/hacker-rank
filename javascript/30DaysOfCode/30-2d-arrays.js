function main() {
	var arr = [];
	for (var h = 0; h < 6; ++h) {
		arr[h] = readLine().split(' ');
		arr[h] = arr[h].map(Number);
	}

	var hourglassSum = [];
	var k = 0;

	while (k < 16) {
		for (var i = 0; i < 4; ++i) {
			for (var j = 0; j < 4; ++j) {
				hourglassSum[k] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] +
                          arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

				k++;
			}
		}
	}

	var maxSum = hourglassSum[0];
	for (var s = 0; s < hourglassSum.length; ++s) {
		if (hourglassSum[s] > maxSum) {
			maxSum = hourglassSum[s];
		}
	}

	console.log(maxSum);
}
