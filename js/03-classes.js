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
//# sourceMappingURL=03-classes.js.map