const {add, subtract} = require('./math')

console.log(add(1,2))
console.log(subtract(3,2))

setInterval(function() {
    console.log("Hello!")
}, 1000);

// Ends all processes after 6 sec
setInterval(function() {
    console.log("Goodbye!")
    process.exit(1)
}, 3000);