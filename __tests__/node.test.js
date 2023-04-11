const {square, cube} = require('../math');


describe('Square Function', function () {
    test('Square should square a number', function() {
        const res = square(3);
        expect(res).toEqual(9);
    })
    
    test('Square should square negative numbers', function() {
        const res = square(-9);
        expect(res).toEqual(81);
    })
})

describe('Cube Function', function () {
    test('Cube should cube a number', function() {
        const res = cube(3);
        expect(res).toEqual(27);
        const res2 = cube(5);
        expect(res2).toEqual(125);
    })
    
    test('Cube should cube negative numbers', function() {
        const res = cube(-2);
        expect(res).toEqual(-8);
    })
})
