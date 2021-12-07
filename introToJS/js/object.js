var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.lastName = "Zuckerberg";
company["stock of company"] = 110;

var competitor = "competitor";
company[competitor] = "Amazon";

console.log(company);
console.log("Company name is " + company.name);
console.log("Stock price is " + company["stock of company"]);
console.log("Competitor is " + company[competitor]);


// NEW, BETTER OBJECT WAY, OBJECT LITERAL
var apple = {
    name: "Apple",
    founder: {
        firstName: "Steve",
        lastName: "Jobs"
    },
    $stock: 350,

    doubleStock: function() {
        return 2*this["$stock"];
    }
};

console.log(apple);
console.log("founders last name is " + apple["founder"]["lastName"]);
console.log(apple.doubleStock());

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update: ");
console.log(a);
console.log(b);

// Function constructor
function test() {
    console.log(this);
    this.myName = "Yaakov";
}
test();
console.log(window.myName);

function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());