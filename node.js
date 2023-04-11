const {add, subtract} = require('./math');
const fs = require('fs');

const line = "And Eternity in an hour"
fs.appendFile('poem.txt', `\n${line}`, 'utf8', (err) => {
    if (err) {
        console.log("ERROR:", err);
        process.kill(1);
    }
    console.log("Successfully wrote to file!")
});

// fs.writeFile('poem.txt', line, {encoding: 'utf8', flag: 'a'}, (err) => {
//     if (err) {
//         console.log("ERROR:", err);
//         process.kill(1);
//     }
//     console.log("Successfully wrote to file!")
// });

fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("ERROR:", err);
        process.kill(1);
    }
    console.log("DATA...", data)
});

// console.log(add(1,2))
// console.log(subtract(3,2))

// setInterval(function() {
//     console.log("Hello!")
// }, 1000);

// // Ends all processes after 6 sec
// setInterval(function() {
//     console.log("Goodbye!")
//     process.exit(1)
// }, 3000);