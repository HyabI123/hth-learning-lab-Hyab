const {cashier} = require('./shopping-cart-pt2')

test('basecase', () => {
    expect(cashier([])).toBe(0);
});

test('case1', () => {
    expect(cashier(['Eggs'])).toBe(12);
});

test('case2', () => {
    expect(cashier(['Eggs', 'milkGallon', 'Water'])).toBe(21);
});