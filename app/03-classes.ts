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