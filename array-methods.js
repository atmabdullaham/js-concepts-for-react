const products = [
 { name: "laptop", price: 32000, brand: 'l' },
 { name: "phone", price: 3000, brand: 'K' },
 { name: "watch", price: 2000, brand: 'A' },
 { name: "sunGlass", price: 200, brand: 'G' },
 { name: "camera", price: 9000, brand: 'C' },
 { name: "bike", price: 320000, brand: 'H' },
]



// Map
const brands = products.map(product => product.brand)

const prices = products.map(prod => prod.price)

// forEach
products.forEach(product => (product))
products.forEach(product => (product.name))


// filter 
// (match the condition and return an array)

const cheap = products.filter(pro => pro.price < 3000)

const specificName = products.filter(product => product.name.includes('n'));

// find
//  return first match

const special = products.find(p => p.name.includes("ph"));


