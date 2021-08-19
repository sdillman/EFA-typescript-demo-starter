var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    //Notice that with methods in our class that you don't have to use the function keyword.
    Person.prototype.sayHello = function () {
        console.log("Hello, ", this.firstName);
    };
    Person.prototype.sayHelloToFullname = function (first, last) {
        console.log("Hello, " + first + " " + last);
    };
    return Person;
}());
// Custom types. We create a CLass of Person, which is also used as a Type here
// we instantiate a new Person() with phil here. phil is of type Person
var phil = new Person();
// We declare a variable with our own custom name.
// We declare the type. It's a custom type of Person.
// We use the  keyword to instantiate a new instance.
// We call the class with parens. The parens invoke the constructor function.
phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHelloToFullname('Sheriff', 'Holler');
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
// 2.10 CONSTRUCTORS
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// We create a new class called Game.
// We create a constructor for the class that takes in a parameter that is of type string.
// We set up a property called gameName.
// We set the value of gameName equal to the value that is passed into the constructor's argument.
// We create an instance of the Game class called battleship.
// We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error
// With the no-constructor class Person we instantiate the class with no constructor.
// Then, we have to set each of the properties, one at a time. 
phil.firstName = "Phil";
phil.lastName = "Donahue";
// With a constructor this could have been done in one line of code, as in battleship above
// 2.11 INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// Here we have what's called a parent class. This holds all the properties that are going to be universal to all vehicles. With inheritance, we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. Here is the syntax for a subclass with two examples:
// EXAMPLE ONE
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
// EXAMPLE TWO
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var smokeyTheBear = new Bear();
smokeyTheBear.furMarkings = 'solid';
smokeyTheBear.hibernationStartMonth = 11;
var tonyTheTiger = new Tiger();
tonyTheTiger.furMarkings = 'striped';
tonyTheTiger.isObligateCarnivore = true;
//# sourceMappingURL=03-classes.js.map