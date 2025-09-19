console.log("I'm sum.js, I have private my variables and functions")

var x = "You can't access me without using exports"

function calculateSum(a,b){
    const sum = a+b;

    console.log(sum)
}

module.exports = {x,calculateSum};