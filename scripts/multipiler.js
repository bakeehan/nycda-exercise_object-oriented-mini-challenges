// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

function Multiplier (number) {
	this.number = number;
	this.getCurrentValue = 1;
	this.multiply = function (number) {
		var newNumber = number * this.getCurrentValue;
		this.getCurrentValue = newNumber;
		// console.log(this.getCurrentValue);
	}
	this.multiply(this.number);
}

// var test = new Multiplier (6);
// console.log(test.getCurrentValue);
// test.multiply(2);
// console.log(test.getCurrentValue);
// test.multiply(10);
// console.log(test.getCurrentValue);
// test.multiply(5);
// console.log(test.getCurrentValue);