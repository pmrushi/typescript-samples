"use strict";
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function (msg) {
        console.log(msg + " Enginne is : " + this.engine);
    };
    return Car;
}());
var obj = new Car("XXSS1");
console.log(obj.engine);
obj.disp("Tata");
