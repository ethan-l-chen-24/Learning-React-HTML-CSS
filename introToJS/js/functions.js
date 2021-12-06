function multiply(x, y) {
    return x * y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier * x;
    };

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var double = makeMultiplier(2);
console.log(double(50));


// Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}

console.log(doOperationOn(3, multiplyBy3));
console.log(doOperationOn(37, double));