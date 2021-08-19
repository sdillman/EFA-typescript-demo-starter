// 2.14 - PROPERTIES - INTRO TO INTERFACES
// Interfaces are NOT classes. One rule of interfaces is that you can't instantiate them. don't do | let critter: Animal = new Animal(); | here
// Interfaces aren't used to create objects. They are used to shape them. We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map