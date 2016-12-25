function Person(initialAge) {
	this.age = initialAge > 0 ? initialAge : 0;

	if (this.age === 0) {
		console.log('Age is not valid, setting age to 0.');
	}

	this.yearPasses = function () {
		this.age++;
	};

	this.amII = function () {
		if (this.age < 13) {
			console.log('You are young.');
		} else if (this.age >= 13 && this.age < 18) {
			console.log('You are a teenager.');
		} else {
			console.log('You are old.');
		}
	};
}
