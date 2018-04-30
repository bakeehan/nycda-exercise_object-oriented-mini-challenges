// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

function Photo (path, description, location, photographer) {
	this.path = path;
	this.description = description;
	this.location = location;
}

var puppy = new Photo ("images/dog.jpg", "My friend Steve's dog in the park!", "Belgium", "Cerina");

var sunset = new Photo ("images/sunset.png", "The sunset over the beach.", "Cape Cod", "Nicole");

var mountain = new Photo ("images/mountain.gif", "Majestic ridges!!", "The Alps", "Nicole");

function Album (name, curator) {
	this.name = name;
	this.curator = curator;
	this.photos = [];
}

var landscapes = new Album ("Lanscape Photos", "Cerina");

landscapes.photos.push(sunset, mountain);