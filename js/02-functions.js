function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
function buildFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//RETURN TYPES
//func.. sayHello(param: type) : string { <-- and the ' : string ' denotes the return type
function sayHello(name) {
    return name;
}
function areCorrectLoginCredentials(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    return false;
}
// OPTIONALS
// Optional params must go after all required params
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
function buildFullNameWithOptionalMiddleName(first, last, middleName) {
    var middle = " ";
    if (middleName != undefined) {
        middle = middle + middleName + " ";
    }
    return "" + first + middle + last;
}
//# sourceMappingURL=02-functions.js.map