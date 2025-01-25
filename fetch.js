// // 2. fetch
// // fetch('url')
//  .then(res => res.json())
//  .then(data => console.log(data));

// keys, values
// const keys = Object.keys()
// const values = Object.values();

// for 
const numbers = [45, 55, 45, 54];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of 
// on array like object
// loop on an object use for in

const products = [
 { name: "laptop", price: 32000, brand: 'l' },
 { name: "phone", price: 3000, brand: 'K' },
 { name: "watch", price: 2000, brand: 'A' },
 { name: "sunGlass", price: 200, brand: 'G' },
 { name: "camera", price: 9000, brand: 'C' },
 { name: "bike", price: 320000, brand: 'H' },
]

const newProduct = { name: 'webcam', price: 100, brand: 'red' }

// Copy products array and then add newProduct

const newProducts = [...products, newProduct
]

// create a new array without one specific item 
// remove phone means create a new array without the 

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);