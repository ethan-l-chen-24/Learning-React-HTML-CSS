var x = "Hello World";
var message = "in global";
console.log("global: message = " + message);

var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);

    function b() {
        console.log("b: message = " + message);
    }
    b();
}
a();

var y;
if(y == undefined) {
    console.log("y is undefined");
}

y = 5;
if(y == "5") {
    console.log("5 == '5'");
} else {
    console.log("5 != '5'");
}

if(y === "5") {
    console.log("5 strict equals '5'");
} else {
    console.log("5 does not strict equal '5'");
}