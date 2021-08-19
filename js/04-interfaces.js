// 2.14 - PROPERTIES - INTRO TO INTERFACES
// Interfaces are NOT classes. One rule of interfaces is that you can't instantiate them. don't do | let critter: Animal = new Animal(); | here
// Interfaces aren't used to create objects. They are used to shape them. We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
// Interfaces have methods, but they can only have method signatures, not the implementation of the method.
// 1. This whole line, up until the curly brace is the method/function signature. This includes the function's name, a name parameter and its type, and a return type of string.
// sayHello(nameyName: string) : string {
//     var someNum = 1+2;
//     var someOtherNum = 1+2;
//     return nameyName;
// }
// 2. The code within the curly braces is the method implementation. This is what is going to happen inside the function when it is called, and it includes the result.
//# sourceMappingURL=04-interfaces.js.map