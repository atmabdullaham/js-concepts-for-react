// How to declare a variable using let and const 
const fatherName = 'Shahidul Mostafa'
let season = 'rainy';
season = 'winter'

// 6 basic Condition: > < >= <= === == !==
// Multiple conditions: &&, ||

if (fatherName === 'Shahidul Mostafa' || season === 'rainy') {

} else if (fatherName === "Shahid" && season === "Winter") {

} else {

}

// 3. Array
// index, 
// length, push, 
const numbers = [23, 34, 53, 54, 79];
numbers[0] = 56;


// 4. loop
for (let i = 0; i > numbers.length; i++) {
 const number = numbers[i];
 console.log(number);
}

// 5. Function
function multiply(num1, num2) {
 const result = num1 * num2
 return result
}
const output = multiply(23, 34)
console.log(output);

// 6. Object
const student = {
 name: "Rakib",
 age: 34,
 position: "front-end",
 location: {
  street: "34/College road"
 }
}
const myVariable = "age"

//1
console.log(student.name);
//2
console.log(student['age']);
//3 
console.log(student[myVariable]);