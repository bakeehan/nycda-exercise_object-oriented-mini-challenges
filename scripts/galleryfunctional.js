// Extra Challenge: If you have time and are looking for an extra challenge try using your solution to problem 2 to create a simple one page photo gallery. This page should display all photos stored in your photo gallery object. Try your best to implement modern design trends

var gallery = {array: []};

function Photo (path, description, location, photographer) {
	this.path = path;
	this.description = description;
	this.location = location;
	this.photographer = photographer;
	gallery.array.push(this);
}

var puppy = new Photo ("images/dog.jpg", "My friend Steve's dog in the park!", "Belgium", "Cerina");

var sunset = new Photo ("images/sunset.png", "The sunset over the beach.", "Cape Cod", "Nicole");

var mountain = new Photo ("images/mountain.gif", "Majestic ridges!!", "The Alps", "Nicole");

var pageGal = document.getElementById("gallery");

for (i=0;i<gallery.array.length;i++) {
	if (gallery.array[i].photographer == "Cerina") {
		var font = "Indie Flower, cursive";
	}
	else if (gallery.array[i].photographer == "Nicole") {
		var font = "Permanent Marker, cursive";
	}
	var img = gallery.array[i].path;
	pageGal.innerHTML += "<div class='image'><img src='" + img + "'><h3 style='font-family:" + font + "'>" + gallery.array[i].description + "</h3> taken by <b>" + gallery.array[i].photographer + "</b></div>";
}

function Album (name, curator) {
	this.name = name;
	this.curator = curator;
	this.photos = [];
}

var landscapes = new Album ("Lanscape Photos", "Cerina");

landscapes.photos.push(sunset, mountain);

 // and if you are looking for even more then give a user the option to press a button to animate the images on the page somehow. Have fun!