function main() {
	var a0_temp = readLine().split(' ');
	var a0 = parseInt(a0_temp[0]);
	var a1 = parseInt(a0_temp[1]);
	var a2 = parseInt(a0_temp[2]);
	var b0_temp = readLine().split(' ');
	var b0 = parseInt(b0_temp[0]);
	var b1 = parseInt(b0_temp[1]);
	var b2 = parseInt(b0_temp[2]);

	var aliceTriplet = [a0, a1, a2];
	var bobTriplet = [b0, b1, b2];

	var alicePoints = 0;
	var bobPoints = 0;

	for (var i = 0; i < aliceTriplet.length; ++i) {
		if (aliceTriplet[i] > bobTriplet[i]) {
			++alicePoints;
		} else if (aliceTriplet[i] < bobTriplet[i]) {
			++bobPoints;
		}
	}

	console.log(alicePoints + ' ' + bobPoints);
}
