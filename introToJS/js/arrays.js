var array = new Array();
array[0] = 'Ethan';
array[1] = 2;
array[2] = function(name) {
    console.log(name);
}
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[2]);
array[2](array[0]);

// short hand array creation
var names = ["Ethan", "John", "JPak"];
var random = ["Ethan", 2, {name: "Jason", age: 18}];

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}