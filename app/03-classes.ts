class Person {
    // declare properties first, then methods
    firstName: string;
    lastName: string;
    //Notice that with methods in our class that you don't have to use the function keyword.
    sayHello() {
        console.log("Hello, ", this.firstName);
    }
    sayHelloToFullname(first: string, last: string){
        console.log(`Hello, ${first} ${last}`);
    }
}

// Custom types. We create a CLass of Person, which is also used as a Type here
// we instantiate a new Person() with phil here. phil is of type Person
let phil: Person = new Person();
// We declare a variable with our own custom name.
// We declare the type. It's a custom type of Person.
// We use the  keyword to instantiate a new instance.
// We call the class with parens. The parens invoke the constructor function.

phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHelloToFullname('Sheriff', 'Holler');

let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

// 2.10 CONSTRUCTORS

class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}
let battleship: Game = new Game('Battleship', 'Hasbro');
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

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
// Here we have what's called a parent class. This holds all the properties that are going to be universal to all vehicles. With inheritance, we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. Here is the syntax for a subclass with two examples:

// EXAMPLE ONE
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}
let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

// EXAMPLE TWO

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}
let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal {
    laysEggs: boolean;
    isLandDwelling: boolean;
    furMarkings: string;
}

class Tiger extends Animal {
    isObligateCarnivore: boolean;
}
class Bear extends Animal {
    hibernationStartMonth: number;
}

let smokeyTheBear: Bear = new Bear();
smokeyTheBear.furMarkings = 'solid';
smokeyTheBear.hibernationStartMonth = 11;

let tonyTheTiger: Tiger = new Tiger();
tonyTheTiger.furMarkings = 'striped';
tonyTheTiger.isObligateCarnivore = true;

