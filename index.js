var daughter = {
    name: 'Aida ',
    age: 3,
    city: 'Charleston',
    grades: {
      math: 90,
      science: 80,
      languageArts: 100
    }
}

daughter.grades.coding = 95;

// var followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn') followingBtns.forEach(followbtn => followbtn.click())

// Boolean
var truthy = true;
var notTruthy = false;

// Null
var nully = null;

// Undefined
var notDefined;

// Number
var ageExample = 12;

// String
var nameExample = "Kristine";
var nameTwo = 'Jordan';

// Symbol
var mySym = Symbol('foo');

//Conditionals
var ageOne = 10;
var ageTwo = '12';

if (ageOne === ageTwo) {
  console.log('They are equal');
}

if (ageOne !== ageTwo) {
  console.log('Not equal');
}

if (ageOne >= 25) {
  console.log('Old enough to rent a car');
}

if (ageOne <= 10) {
  console.log('You can eat from the kid menu');
}

// If/Else Conditional example 
var ageThree = 30;

if (ageThree <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}
// Compound Conditionals example 
var ageFour = 30;

if (ageFour <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (ageFour >= 16 && ageFour < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (ageFour >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}

//Switch Statement in JavaScript to Check for Data Types
var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}


console.log(mySym);
console.log(daughter.name);
console.log(daughter.name.length);
console.log(daughter.city.length);
console.log(daughter.name.charAt(3));
console.log(daughter.name.concat('Xiomora Violet Washington'));
console.log(daughter.name.includes('a'));
console.log(daughter.name.repeat(5));


// Age verification feature 
function ageVerification(age) {
  // if (age > 25) {
  //   console.log('can rent a car');
  // } else {
  //   console.log("can't rent a car");
  // }

  return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30); //?
ageVerification(10); //?

function dashboardGreeting() {
  var userObj = {
    email: 'sample2@example.com',
    fullName: 'Jordan Hudgens'
  }
  console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();


