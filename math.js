function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return Math.pow(x, 3);
}

module.exports = {
    add: add,
    subtract: subtract,
    square: square,
    cube: cube
}