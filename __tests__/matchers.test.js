
// toEqual checks if contains same values
// toBe checks if same reference/same object
describe('Test matchers', function() {
    test('Compare toBe and toEqual', function() {
        const nums = [3, 4, 5];
        const copy = [...nums];
        const nums2 = nums;

        expect(copy).toEqual(nums);
        // expect(copy).toBe(nums); False, not the same ref/obj
        expect(nums2).toBe(nums);
    })

    test('toContain matcher', function() {
        const colors = ['red', 'blue'];

        expect(colors).toContain('red');
        // expect(colors).toContain('RED'); False, not the same string bc caps
        expect('hello').toContain('hell');
    })

    test('Numeric matchers', function() {
        expect(7).toBeGreaterThanOrEqual(2);
        expect(2).toBeLessThanOrEqual(2);
    })

    test('Boolean matchers', function() {
        expect('hi').toBeTruthy();
        expect('').toBeFalsy();
    })
})
