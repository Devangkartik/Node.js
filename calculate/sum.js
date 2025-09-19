// console.log("I'm sum.js, I have private my variables and functions")

// export var x = "You can't access me without using exports"
var x = "You can't access me without using exports"

// export function calculateSum(a,b){
//     const sum = a+b;
//     console.log(sum)
// }

function calculateSum(a,b){
    const sum = a+b;

    console.log(sum)
}

// console.log(module.exports) //{} empty object

module.exports = {x,calculateSum};

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;