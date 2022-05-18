// Treinando ainda mais objetos literais como parâmetros para construtores

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

function Car (params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function(){
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log (this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log ("Start the engine first.");
        }
    }
}

var limoParams = {  make: "Webville Motors",
                    model: "limo",
                    year: 1983,
                    color: "black",
                    passengers: 12,
                    convertible: true,
                    mileage: 21120};

var limo = new Car (limoParams);
var limoDog = new Dog ("Rhapsody In Blue", "Poodle", 40);

console.log (limo.make + " " + limo.model + " is an " + typeof limo);
console.log (limoDog.name + " is an " + typeof limoDog);