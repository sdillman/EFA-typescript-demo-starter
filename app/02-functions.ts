function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

function buildFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}

//RETURN TYPES
//func.. sayHello(param: type) : string { <-- and the ' : string ' denotes the return type
function sayHello(name: string) : string {
    return name;
}

function areCorrectLoginCredentials(username: string, password: string) : boolean {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    return false;
}

// OPTIONALS
// Optional params must go after all required params
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1,2);

function buildFullNameWithOptionalMiddleName(first: string, last: string, middleName?: string) : string {
    let middle: string = " ";
    if(middleName != undefined) {
        middle = middle + middleName + " ";
    }
    return `${first}${middle}${last}`;
}