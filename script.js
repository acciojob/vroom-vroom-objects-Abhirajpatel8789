// Complete the js code
function Car(make, model) {
	this.make = make
	this.model = model
}
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};
window.Car = Car;

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model)
	this.topSpeed = topSpeed
}
SportsCar.prototype = Object.create(Car.prototype);


SportsCar.prototype.constructor = SportsCar;


SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
};
// Do not change the code below
window.SportsCar = SportsCar;

let car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); 
console.log(car.getTopSpeed()); 

