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