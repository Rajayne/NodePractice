function getCartTotal(cart, discount = 0) {
    let total = cart.reduce(
        (price, item) => (price + item.price * item.quantity), 0);
    let discountedPrice = total * (1 - discount);
    // toFixed returns a string, use + to convert to number
    return +discountedPrice.toFixed(2);
}

module.exports = {getCartTotal}