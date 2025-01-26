// 'almas', 5, true, [], {}
// '' , 0, false,null, undefined,

let myVar = 5;
if (myVar) {
 myVar = myVar * 5
} else {
 myVar = 0
}

let myMoney = 50;
if (!myMoney) {

}

const money = 80;
let food;

if (money > 100) {
 food = "Biriany"
} else {
 food = "Cha"
}

// ternary
let food1 = money > 100 ? "Briany" : "Cha";


let drink = (money > 100 && money < 50) ? "Coca" : "Water";

// number to string converson
const num = 52;
const nunberStr = num + '';


// string to number 
const input = '500';
const inputNum = +input;


//
let isActive = true;
const showUser = () => console.log("display user")
const hideUser = () => console.log("hide user")


isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();

// toggle boolean
isActive = !isActive;