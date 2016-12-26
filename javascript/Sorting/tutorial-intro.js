function main() {
	var v = parseInt(readLine());
	var n = parseInt(readLine());
	var ar = readLine().split(' ');
	ar = ar.map(Number);

	console.log(ar.indexOf(v));
}
