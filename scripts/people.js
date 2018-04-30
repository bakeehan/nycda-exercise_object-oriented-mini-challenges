// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function School (name, location) {
	this.name = name;
	this.people = [];
	this.location = location;
}

var highland = new School ("Highland Regional High", "Blackwood");

function Person (staff, student, name, gender, school) {
	this.staff = staff;
	this.student = student;
	this.name = name;
	this.person = true;
	this.gender = gender;
	this.school = school;
	let go = school.people;
	let send = function (where, folk) {
		where.push(folk);
	}
	send (go, this);
}

function Teacher (subject, name, gender, school) {
	Person.apply (this, [true, false, name, gender, school]);
	this.subject = subject;
}

var degrassi = new Teacher ("English", "Miss Degrassi", "f", highland);

function Student (gpa, honor, name, gender, grad, school) {
	Person.apply (this, [false, true, name, gender, school]);
	this.gpa = gpa;
	this.honor = honor;
	this.grad = grad;
}

var adam = new Student (4.3, true, "Adam", "m", 2008, highland);

// console.log(highland.people);