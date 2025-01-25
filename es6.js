
const numbers = [23, 34, 53, 54, 79];
const student = {
 name: "Rakib",
 age: 34,
 position: "front-end",
 location: {
  street: "34/College road"
 }
}

//1. template String
const about = `My Name is ${student.name}.
I am ${student.age} years old.

`

//2. Arrow function
const name = () => "Abu Sayeed";
const plusSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (x, y) => {
 const sum = x + y;
 return sum
}


// Spread Operator
const newNum = [...numbers];
numbers.push(99);

// create a new array from an older array and add an element

const currentNumbers = [...numbers, 53]