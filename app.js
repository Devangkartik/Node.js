require('./xyz.js');

const {x,calculateSum} = require('./sum.js')

console.log("you are in app.js")

var a = 10;
var b = 26;


calculateSum(a , b);
console.log(x)

console.log(globalThis===global);