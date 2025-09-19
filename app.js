// require('./xyz.js');
// const {x,calculateSum} = require('./sum.js')
// import {x,calculateSum} from './sum.js'
// const {calculateMultiply} = require("./calculate/multiply.js");
// const {calculateSum} = require("./calculate/sum.js")

const {calculateSum,calculateMultiply} = require("./calculate");

const data = require("./data.json");

// console.log(JSON.stringify(data));
console.log(data);


// It ES6 module syntax which is supported in latesst node version without  any flags 


console.log("you are in app.js")

var a = 10;
var b = 30;

calculateMultiply(a,b)
calculateSum(a , b);
// console.log(x)

// console.log(globalThis===global);