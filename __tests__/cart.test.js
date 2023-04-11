const {getCartTotal} = require('../cart');

beforeAll(function () {
    console.log("Before All!");
})

afterAll(function () {
    console.log("After All!");
})

describe('Test getCartTotal', function() {
    let cart;

    beforeEach(function() {
        cart = [
            {item: 'le croix', price: 4.99, quantity: 3},
            {item: 'pretzels', price: 8.99, quantity: 10}
        ];
    })

    afterEach(function () {
        console.log("After Each!");
    })

    test('Get total without discount', function() {
    const total = getCartTotal(cart);
    expect(total).toBe(104.87);
    })

    test('Get total with discount', function() {
    const total = getCartTotal(cart, 0.5);
    expect(total).toBe(52.44);
    })
})