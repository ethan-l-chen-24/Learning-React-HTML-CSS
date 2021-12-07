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

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
    name: "Yaakov",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

for(var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

// loops over properties of array, so if I add a new one it will still be included!
names2.newProp = "random";
for (var index in names2) {
    console.log("Hello " + names2[name]);
}

