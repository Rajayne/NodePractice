const {add, subtract, square} = require('../math');

test('Square should square a number', function() {
    const res = square(3);
    expect(res).toEqual(9);
})