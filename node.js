setInterval(function() {
    console.log("Hello!")
}, 1000);

// Ends all processes after 6 sec
setInterval(function() {
    console.log("Goodbye!")
    process.exit(1)
}, 6000);