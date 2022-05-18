function Dog (name, breed, weigth) {
	this.name = name;
	this.breed = breed;
	this.weigth = weigth;
	this.bark = function (){		// Colocando método no construtor
		if (this.weigth > 25) {
			console.log (this.name + " says Woof!");
		} else {
			console.log (this.name + " says Yip!");
		}
	}
}

var fido = new Dog ("Fido", "Mixed", 38);
var fluffy = new Dog ("Fluffy", "Poodle", 30);
var spot = new Dog ("Spot", "Chihuahua", 10);	// Dessa forma criei 3 objetos Dogs
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
	var size = 'small';
	if (dogs[i].weigth > 10) {
		size = "large";
	}
	console.log ("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
	dogs[i].bark ();
}
