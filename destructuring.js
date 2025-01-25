const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65];
const [num1, num2] = numbers;

function boxify(n1, n2) {
 const nums = [n1, n2];
 return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(82, 21);

const student = {
 name: 'Sakin',
 age: 54,
 numbers: [78, 87, 90, 92]
}
const [bio, chem, phy, math] = student.numbers;

// Object destructuring
const { name, age } = { name: 'alo', age: 14 };
const { s } = { name: 'alo', age: 14, s: 44 };

const employee = {
 ide: "vs-code",
 designation: "mac",
 language: ['html', 'css', 'js'],
 specification: {
  height: 66,
  weight: 77,
  address: 'Dhaka',
  watch: {
   color: 'yellow',
   price: 3000,
   brand: 'apple'
  }
 }
}

const { ide, designation, language } = employee;
const { brand } = employee?.specification?.watch;